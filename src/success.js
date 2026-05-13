import { categoryPlaceholders, getCategoryMismatch } from "./intent-utils.js";

const CONFIG = {
  backendUrl: window.location.protocol === "file:" ? "http://localhost:8787" : window.location.origin,
};

const categories = [
  "Auto, Cars & Bikers",
  "Search & Research",
  "Social Media",
  "Video & Streaming",
  "Weather & Planning",
  "Shopping & Retail",
  "AI Tools",
  "Email & Communication",
  "Translation & Language",
  "Sports",
  "Travel & Transport",
  "News & Media",
  "Gaming",
  "Digital Tools",
  "Maps & Local",
  "Jobs & Education",
  "Food & Drink",
  "Health & Fitness",
  "Music",
  "Finance & Investing",
];

const plans = {
  starter: { name: "Starter Pack", credits: 10 },
  pro: { name: "Plus", credits: 25 },
  complete: { name: "Pro", credits: 999 },
};

const languageOptions = ["English", "Hinglish", "Hindi"];

const params = new URLSearchParams(window.location.search);
const planId = params.get("plan") || "starter";
const plan = plans[planId] || plans.starter;
const storageKey = `genius-prompts-credits-${planId}`;
const isAllAccess = planId === "complete";

const categorySelect = document.querySelector("#unlockCategory");
const languageSelect = document.querySelector("#unlockLanguage");
const intentInput = document.querySelector("#unlockIntent");
const generateButton = document.querySelector("#generateUnlocked");
const creditsRemaining = document.querySelector("#creditsRemaining");
const planName = document.querySelector("#planName");
const unlockTitle = document.querySelector("#unlockTitle");
const unlockMeta = document.querySelector("#unlockMeta");
const unlockPrompt = document.querySelector("#unlockPrompt");
const unlockBadge = document.querySelector("#unlockBadge");
const copyButton = document.querySelector("#copyPrompt");
const mismatchNote = document.querySelector("#unlockMismatchNote");
const mismatchModal = document.querySelector("#mismatchModal");
const mismatchMessage = document.querySelector("#mismatchMessage");
const promptHistory = document.querySelector("#promptHistory");
const historyKey = "genius-prompts-history";
let pendingMismatch = null;
let allowMismatchOnce = false;

function getCredits() {
  if (isAllAccess) return plan.credits;
  const stored = Number(localStorage.getItem(storageKey));
  return Number.isFinite(stored) && stored >= 0 ? stored : plan.credits;
}

function setCredits(value) {
  if (isAllAccess) {
    localStorage.removeItem(storageKey);
    creditsRemaining.textContent = "All";
    return;
  }
  localStorage.setItem(storageKey, String(value));
  creditsRemaining.textContent = String(value);
}

function renderCategoryOptions() {
  categorySelect.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  languageSelect.innerHTML = languageOptions.map((language) => `<option value="${language}">${language}</option>`).join("");
  updateCategoryPlaceholder();
}

function updateCategoryPlaceholder() {
  intentInput.placeholder = categoryPlaceholders[categorySelect.value] || "Example: write what you want AI to help with";
  updateMismatchNote();
}

function resetGeneratedResult(message = "Click Generate expert AI request to build a fresh prompt.") {
  unlockBadge.textContent = categorySelect.value;
  unlockTitle.textContent = "Ready when you are";
  unlockMeta.textContent = "Category, request, and language will be checked before generation.";
  unlockPrompt.textContent = message;
}

function updateMismatchNote() {
  const mismatch = getCategoryMismatch(categorySelect.value, intentInput.value);
  if (!mismatch) {
    mismatchNote.hidden = true;
    mismatchNote.textContent = "";
    return;
  }
  mismatchNote.hidden = false;
  mismatchNote.textContent = `Heads up: this looks like ${mismatch.detectedCategory}, but selected category is ${mismatch.selectedCategory}.`;
}

function showMismatch(mismatch) {
  pendingMismatch = mismatch;
  mismatchMessage.textContent = `Your request looks like ${mismatch.detectedCategory}, but selected category is ${mismatch.selectedCategory}. Continue or switch?`;
  mismatchModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeMismatch() {
  mismatchModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function getHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(historyKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(item) {
  const history = getHistory().filter((entry) => entry.generatedPrompt !== item.generatedPrompt);
  history.unshift(item);
  localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 6)));
  renderHistory();
}

function renderHistory() {
  const history = getHistory();
  if (history.length === 0) {
    promptHistory.innerHTML = `<span class="history-empty">Your copied prompts will appear here.</span>`;
    return;
  }

  promptHistory.innerHTML = history
    .map(
      (item, index) => `
        <button type="button" class="history-item" data-history-index="${index}">
          <span>${item.category} • ${item.language}</span>
          <strong>${item.title}</strong>
        </button>
      `,
    )
    .join("");
}

async function generatePrompt() {
  const mismatch = getCategoryMismatch(categorySelect.value, intentInput.value);
  if (mismatch && !allowMismatchOnce) {
    showMismatch(mismatch);
    return;
  }
  allowMismatchOnce = false;

  const currentCredits = getCredits();
  if (!isAllAccess && currentCredits <= 0) {
    unlockMeta.textContent = "No solution credits remaining";
    unlockPrompt.textContent = "This pack has used all solution credits. Buy another pack to continue.";
    return;
  }

  generateButton.disabled = true;
  unlockBadge.textContent = categorySelect.value;
  unlockTitle.textContent = "Generating expert AI request";
  unlockMeta.textContent = "Generating from backend...";
  unlockPrompt.textContent = "Matching your request to the best backend blueprint...";

  try {
    const response = await fetch(`${CONFIG.backendUrl}/api/generate-prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: categorySelect.value,
        intent: intentInput.value,
        language: languageSelect.value,
      }),
    });
    if (!response.ok) throw new Error(`Backend returned ${response.status}`);
    const result = await response.json();
    unlockBadge.textContent = result.category;
    unlockTitle.textContent = result.title;
    unlockMeta.textContent = `Backend match: ${result.score}/100 • ${result.useCase} • ${languageSelect.value}`;
    unlockPrompt.textContent = result.generatedPrompt;
    saveHistory({
      title: result.title,
      category: result.category,
      language: languageSelect.value,
      intent: intentInput.value,
      generatedPrompt: result.generatedPrompt,
    });
    if (!isAllAccess) setCredits(currentCredits - 1);
  } catch (error) {
    unlockBadge.textContent = categorySelect.value;
    unlockTitle.textContent = "Generation failed";
    unlockMeta.textContent = "Backend unavailable";
    unlockPrompt.textContent = `Could not generate prompt: ${error.message}`;
  } finally {
    generateButton.disabled = false;
  }
}

generateButton.addEventListener("click", generatePrompt);
categorySelect.addEventListener("change", () => {
  updateCategoryPlaceholder();
  resetGeneratedResult();
});
languageSelect.addEventListener("change", () => {
  resetGeneratedResult();
});
intentInput.addEventListener("input", () => {
  updateMismatchNote();
  resetGeneratedResult();
});
document.querySelector("#resetCredits").addEventListener("click", () => {
  setCredits(plan.credits);
  localStorage.removeItem(historyKey);
  renderHistory();
  resetGeneratedResult("Demo reset. Generate a fresh expert AI request.");
});
promptHistory.addEventListener("click", (event) => {
  const historyButton = event.target.closest("[data-history-index]");
  if (!historyButton) return;
  const item = getHistory()[Number(historyButton.dataset.historyIndex)];
  if (!item) return;
  categorySelect.value = item.category;
  languageSelect.value = item.language;
  intentInput.value = item.intent;
  unlockBadge.textContent = item.category;
  unlockTitle.textContent = item.title;
  unlockMeta.textContent = `Saved prompt • ${item.language}`;
  unlockPrompt.textContent = item.generatedPrompt;
  updateCategoryPlaceholder();
});
document.addEventListener("click", (event) => {
  const mismatchAction = event.target.closest("[data-mismatch-action]");
  if (!mismatchAction) return;
  const action = mismatchAction.dataset.mismatchAction;
  if (action === "switch" && pendingMismatch) {
    categorySelect.value = pendingMismatch.detectedCategory;
    updateCategoryPlaceholder();
    closeMismatch();
    generatePrompt();
  }
  if (action === "continue") {
    allowMismatchOnce = true;
    closeMismatch();
    generatePrompt();
  }
  if (action === "edit") {
    closeMismatch();
    intentInput.focus();
  }
});
copyButton.addEventListener("click", async () => {
  const text = unlockPrompt.textContent.trim();
  if (!text || text === "Choose a category and generate your first expert AI request.") {
    copyButton.textContent = "Nothing to copy";
    setTimeout(() => {
      copyButton.textContent = "Copy to ChatGPT";
    }, 1400);
    return;
  }

  const setCopyState = (label) => {
    copyButton.textContent = label;
    setTimeout(() => {
      copyButton.textContent = "Copy to ChatGPT";
    }, 1600);
  };

  const copyWithFallback = () => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, textArea.value.length);
    const copied = document.execCommand("copy");
    document.body.removeChild(textArea);
    return copied;
  };

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setCopyState("Copied");
      return;
    }
    if (copyWithFallback()) {
      setCopyState("Copied");
      return;
    }
    throw new Error("Copy command failed");
  } catch (error) {
    if (copyWithFallback()) {
      setCopyState("Copied");
    } else {
      setCopyState("Select manually");
    }
  }
});

planName.textContent = plan.name;
setCredits(getCredits());
renderCategoryOptions();
renderHistory();
