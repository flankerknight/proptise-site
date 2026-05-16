import { categoryPlaceholders, getCategoryMismatch } from "./intent-utils.js";

const CONFIG = {
  backendUrl: window.location.protocol === "file:" ? "http://localhost:8787" : window.location.origin,
};

const categories = [
  { name: "Auto, Cars & Bikers", group: "Lifestyle", detail: "Cars, bikes, EVs, used vehicles, ownership cost" },
  { name: "Search & Research", group: "Tools", detail: "Research, web search, comparison, source checking" },
  { name: "Social Media", group: "Media", detail: "Content calendars, hooks, captions, growth audits" },
  { name: "Video & Streaming", group: "Media", detail: "Video ideas, watch plans, summaries, creator research" },
  { name: "Weather & Planning", group: "Lifestyle", detail: "Trip weather, event planning, safety checklists" },
  { name: "Shopping & Retail", group: "Lifestyle", detail: "Product comparisons, deal checks, buying guides" },
  { name: "AI Tools", group: "Tools", detail: "Model selection, prompt systems, workflow design" },
  { name: "Email & Communication", group: "Work", detail: "Professional replies, follow-ups, inbox decisions" },
  { name: "Translation & Language", group: "Work", detail: "Localization, tone preservation, bilingual writing" },
  { name: "Sports", group: "Media", detail: "Match analysis, fantasy notes, sports explainers" },
  { name: "Travel & Transport", group: "Lifestyle", detail: "Itineraries, flight checks, hotel comparison" },
  { name: "News & Media", group: "Media", detail: "Briefings, bias checks, summaries, context builders" },
  { name: "Gaming", group: "Media", detail: "Game discovery, strategy, parental checks, monetization" },
  { name: "Digital Tools", group: "Tools", detail: "Canva, calculators, speed tests, productivity" },
  { name: "Maps & Local", group: "Lifestyle", detail: "Route planning, local discovery, commute tradeoffs" },
  { name: "Jobs & Education", group: "Work", detail: "Resumes, interviews, coursework, learning plans" },
  { name: "Food & Drink", group: "Lifestyle", detail: "Restaurants, recipes, meal planning, kitchen budgets" },
  { name: "Health & Fitness", group: "Lifestyle", detail: "Nutrition, habit plans, workouts, tracking" },
  { name: "Music", group: "Media", detail: "Playlists, discovery, music learning, mood boards" },
  { name: "Finance & Investing", group: "Money", detail: "Gold, stocks, budgeting, risk-aware investing" },
];

const useCases = {
  "Auto, Cars & Bikers": ["Car ownership comparison", "Used car decision", "Bike ownership comparison"],
  "Search & Research": ["Deep research brief", "Source comparison"],
  "Social Media": ["Instagram growth plan", "30-day content calendar"],
  "Video & Streaming": ["Creator video ideas", "Watchlist optimizer"],
  "Weather & Planning": ["Trip weather planner", "Outdoor event checklist"],
  "Shopping & Retail": ["Buying decision matrix", "Deal quality checker"],
  "AI Tools": ["AI workflow builder", "Best model selector"],
  "Email & Communication": ["Client follow-up", "Difficult reply writer"],
  "Translation & Language": ["Tone-safe translation", "Local market copy"],
  Sports: ["Match explainer", "Fantasy decision helper"],
  "Travel & Transport": ["Weekend itinerary", "Flight and hotel comparison"],
  "News & Media": ["Daily briefing", "Bias and context check"],
  Gaming: ["Game recommendation", "Strategy coach"],
  "Digital Tools": ["Tool comparison", "Personal productivity audit"],
  "Maps & Local": ["Commute planner", "Nearby discovery"],
  "Jobs & Education": ["Interview prep", "Coursework assistant"],
  "Food & Drink": ["Indian meal planner", "Restaurant decision"],
  "Health & Fitness": ["Weight-loss routine", "Nutrition audit"],
  Music: ["Playlist architect", "Music discovery"],
  "Finance & Investing": ["Monthly money plan", "Gold or stock research"],
};

const promptLibrary = [
  {
    id: "social-instagram-aesthetic",
    category: "Social Media",
    useCase: "Instagram aesthetic strategy",
    title: "Instagram Aesthetic Brand Builder",
    tags: ["instagram", "insta", "ig", "aesthetic", "seductive", "attractive", "magnetic", "feed", "profile", "bio", "visual", "style", "branding", "photoshoot", "reels"],
    role: "Act as an ethical Instagram visual-brand strategist and creator positioning expert.",
    context:
      "The user wants a more aesthetic, magnetic, and memorable Instagram presence. Focus on visual identity, content pillars, color palette, profile positioning, bio, highlights, photo/reel direction, captions, and audience perception. Treat seductive as tasteful confidence, style, mystique, and attraction, not manipulation, deception, or coercive persuasion.",
    output:
      "Return a profile audit checklist, aesthetic direction, color and typography mood, content pillars, bio rewrite, reel/photo ideas, caption formulas, posting rhythm, ethical boundaries, and a 14-day execution plan.",
    example: "Example input: Make my Instagram look more aesthetic, premium, confident, and magnetic.",
    resources: [
      "The Art of Seduction by Robert Greene - use only as an archetype/storytelling lens, not manipulation.",
      "Steal Like an Artist by Austin Kleon - for taste-building and reference gathering.",
      "Contagious by Jonah Berger - for why people share content.",
      "Instagram Creators channel and Meta creator resources - for current platform-native guidance.",
      "Search YouTube for ethical personal branding, cinematic Instagram reels, color grading for reels, and Instagram profile audit tutorials.",
    ],
    guardrails:
      "Do not recommend dark psychology, coercive manipulation, deception, harassment, sexual pressure, or mind-control tactics. Keep the advice consent-based, reputation-safe, and brand-safe.",
    qualityScore: 96,
    conversionScore: 93,
  },
  {
    id: "social-content-calendar",
    category: "Social Media",
    useCase: "Content calendar",
    title: "30-Day Instagram Content Calendar Architect",
    tags: ["instagram", "insta", "ig", "calendar", "content", "posts", "reels", "captions", "hooks", "schedule", "growth"],
    role: "Act as an Instagram content strategist and editorial calendar planner.",
    context:
      "The user needs a realistic content plan with hooks, reels, carousels, stories, posting rhythm, audience fit, niche positioning, and repeatable formats.",
    output:
      "Return content pillars, 30-day calendar, reel hooks, carousel ideas, story prompts, caption templates, CTA suggestions, and weekly review metrics.",
    example: "Example input: Build a 30-day Instagram plan for my fitness page.",
    resources: ["Instagram Creators channel and Meta creator resources.", "YouTube searches: Instagram content calendar, reels hooks, creator analytics basics."],
    guardrails: "Do not suggest fake engagement, spam automation, impersonation, or misleading claims.",
    qualityScore: 94,
    conversionScore: 90,
  },
  {
    id: "social-growth-audit",
    category: "Social Media",
    useCase: "Profile growth audit",
    title: "Instagram Growth Audit",
    tags: ["instagram", "insta", "ig", "growth", "audit", "followers", "reach", "engagement", "profile", "bio", "analytics"],
    role: "Act as an Instagram growth auditor and creator analytics coach.",
    context:
      "The user wants to understand why their profile is not growing and needs a practical audit of positioning, profile clarity, content fit, hooks, retention, engagement, and analytics.",
    output:
      "Return a profile audit scorecard, likely growth bottlenecks, fixes by priority, content experiments, metric checklist, and 14-day improvement plan.",
    example: "Example input: Audit why my Instagram is not growing despite posting reels.",
    resources: ["Meta creator resources for platform guidance.", "YouTube searches: Instagram profile audit, reels retention, creator analytics."],
    guardrails: "Do not suggest bots, fake followers, engagement pods, spam DMs, or deceptive tactics.",
    qualityScore: 93,
    conversionScore: 89,
  },
  {
    id: "auto-car-comparison",
    category: "Auto, Cars & Bikers",
    useCase: "Car ownership comparison",
    title: "Indian Car Ownership Comparator",
    tags: ["car", "cars", "suv", "compare", "comparison", "mileage", "emi", "service", "resale", "scorpio", "thar"],
    role: "Act as an Indian car ownership advisor and SUV comparison expert.",
    context:
      "The user is comparing cars in India and needs practical advice based on on-road price, engine and variant differences, mileage, service cost, comfort, safety, resale value, EMI pressure, city/highway usage, family needs, and 5-year ownership cost.",
    output:
      "Return a comparison table, ownership-cost estimate, best choice by driver type, red flags, variant advice, negotiation checklist, and final recommendation.",
    example: "Example input: Scorpio N vs Thar Roxx for family use, highway trips, and city driving.",
    qualityScore: 97,
    conversionScore: 92,
  },
  {
    id: "auto-bike-comparison",
    category: "Auto, Cars & Bikers",
    useCase: "Bike ownership comparison",
    title: "Indian Bike Ownership Comparator",
    tags: ["bike", "bikes", "compare", "comparison", "mileage", "emi", "service", "resale", "commute", "touring"],
    role: "Act as an Indian two-wheeler advisor and ownership-cost analyst.",
    context:
      "The user is choosing between bikes in India and needs practical advice based on use case, city/highway mix, budget, service access, comfort, safety, resale value, EMI pressure, and 5-year ownership cost.",
    output:
      "Return a comparison table, ownership-cost estimate, best choice by rider type, red flags, negotiation checklist, and final recommendation.",
    example: "Example input: Hunter 350 vs TVS Ronin for daily Bangalore commute and weekend rides.",
    qualityScore: 96,
    conversionScore: 91,
  },
  {
    id: "auto-used-car",
    category: "Auto, Cars & Bikers",
    useCase: "Used car decision",
    title: "Used Car Buying Risk Audit",
    tags: ["car", "cars", "used", "second hand", "resale", "inspection", "insurance", "loan", "family"],
    role: "Act as a used-car inspection advisor for Indian buyers.",
    context:
      "The user wants to avoid bad used-car deals and needs a decision framework covering ownership history, accident risk, service records, insurance, loan hypothecation, maintenance cost, resale value, and alternatives.",
    output:
      "Return an inspection checklist, document checklist, price negotiation script, risk rating, and buy/walk-away decision.",
    example: "Example input: 2019 Hyundai Venue petrol manual, 55,000 km, asking Rs 6.8 lakh.",
    qualityScore: 95,
    conversionScore: 89,
  },
  {
    id: "finance-money-plan",
    category: "Finance & Investing",
    useCase: "Monthly money plan",
    title: "Salary-to-Savings Money Planner",
    tags: ["salary", "budget", "saving", "investment", "sip", "debt", "emi", "emergency", "tax"],
    role: "Act as a conservative Indian personal finance coach.",
    context:
      "The user needs a practical monthly money plan that respects income, expenses, debt, dependents, emergency fund, risk profile, tax needs, and time horizon.",
    output:
      "Return a monthly allocation table, debt priority, emergency fund plan, investment buckets, risks, and next 30-day action plan.",
    example: "Example input: Salary Rs 80,000, rent Rs 18,000, EMI Rs 12,000, wants to invest Rs 15,000.",
    qualityScore: 94,
    conversionScore: 90,
  },
  {
    id: "jobs-interview",
    category: "Jobs & Education",
    useCase: "Interview prep",
    title: "Role-Specific Interview Coach",
    tags: ["job", "interview", "resume", "career", "hiring", "salary", "fresher", "experience"],
    role: "Act as a senior hiring manager and interview coach.",
    context:
      "The user needs interview preparation based on target role, experience, resume, gaps, projects, likely questions, and salary discussion.",
    output:
      "Return a role-fit diagnosis, top interview questions, STAR answers, project stories, weak spots, and 14-day prep plan.",
    example: "Example input: Data analyst interview, 2 years experience, SQL and Power BI.",
    qualityScore: 93,
    conversionScore: 88,
  },
  {
    id: "shopping-buying-guide",
    category: "Shopping & Retail",
    useCase: "Buying decision matrix",
    title: "No-Regret Buying Decision Matrix",
    tags: ["buy", "shopping", "compare", "amazon", "flipkart", "reviews", "warranty", "deal", "budget"],
    role: "Act as a strict Indian shopping advisor.",
    context:
      "The user wants to compare products without getting misled by discounts, fake reviews, missing warranty details, weak alternatives, or hidden ownership costs.",
    output:
      "Return a comparison matrix, hidden-cost check, review-risk check, alternatives, final pick, and what not to buy.",
    example: "Example input: Best phone under Rs 25,000 for camera, battery, and 3 years use.",
    qualityScore: 92,
    conversionScore: 87,
  },
  {
    id: "default-decision",
    category: "Any",
    useCase: "General decision support",
    title: "Expert Decision Builder",
    tags: ["plan", "compare", "decide", "recommend", "research", "explain", "best"],
    role: "Act as a practical expert advisor.",
    context:
      "The user needs a useful answer, not generic text. Ask for missing details only when they materially change the recommendation.",
    output:
      "Return clarifying questions if needed, options, tradeoffs, risks, final recommendation, and next actions.",
    example: "Example input: Help me choose the best option for my situation.",
    qualityScore: 88,
    conversionScore: 82,
  },
];

const plans = [
  {
    id: "pro",
    name: "Pro Lifetime",
    price: 299,
    badge: "Lifetime access",
    description: "One-time access to the full Genius Prompts engine across every category.",
    features: ["Lifetime prompt engine access", "All 20 categories", "English, Hinglish, and Hindi", "Secure Dodo checkout"],
    featured: true,
  },
];

const languageOptions = [
  { id: "English", label: "English" },
  { id: "Hinglish", label: "Hinglish" },
  { id: "Hindi", label: "Hindi" },
];

const problemCards = [
  { label: "Build my gym diet", category: "Health & Fitness", intent: "build a gym diet plan for fat loss and muscle gain with Indian food options" },
  { label: "Write a professional email", category: "Email & Communication", intent: "write a professional follow-up email that sounds polite and confident" },
  { label: "Plan Japan trip from India", category: "Travel & Transport", intent: "plan a Japan trip from India with budget, visa checks, route, food, and daily itinerary" },
  { label: "Compare two products", category: "Shopping & Retail", intent: "compare two products and tell me which one is better for long-term use" },
  { label: "Make Instagram reply", category: "Social Media", intent: "write a tasteful Hinglish Instagram reply that sounds confident and natural" },
  { label: "Create ad campaign", category: "AI Tools", intent: "create a complete ad campaign strategy for a small Indian business" },
  { label: "Prepare for interview", category: "Jobs & Education", intent: "prepare me for a job interview with likely questions, STAR answers, and weak spot fixes" },
  { label: "Understand stock portfolio", category: "Finance & Investing", intent: "explain my stock portfolio risk and what I should verify before making decisions" },
  { label: "Business brochure content", category: "Digital Tools", intent: "create brochure content for my business with headings, offer, proof, and CTA" },
  { label: "Summarize meeting notes", category: "Email & Communication", intent: "summarize meeting notes into decisions, owners, deadlines, and follow-up message" },
  { label: "Create WhatsApp message", category: "Email & Communication", intent: "write a clear WhatsApp message that is polite, short, and action-oriented" },
  { label: "Compare phone cameras", category: "Digital Tools", intent: "which is best phone for photography and video shooting: iPhone 17 Pro Max or S26 Ultra" },
];

let selectedPack = "pro";
let selectedCheckoutPlan = "pro";
const FREE_PREVIEW_LIMIT = 3;
const freePreviewStorageKey = "genius-prompts-free-previews-used";
const freePreviewCookieKey = "gp_free_previews_used";

const categoryGrid = document.querySelector("#categoryGrid");
const searchInput = document.querySelector("#categorySearch");
const previewCategory = document.querySelector("#previewCategory");
const previewLanguage = document.querySelector("#previewLanguage");
const intentInput = document.querySelector("#intentInput");
const generatePreviewButton = document.querySelector("#generatePreview");
const previewMismatchNote = document.querySelector("#previewMismatchNote");
const previewTitle = document.querySelector("#previewTitle");
const previewText = document.querySelector("#previewText");
const previewBadge = document.querySelector("#previewBadge");
const engineMeta = document.querySelector("#engineMeta");
const copyPreviewButton = document.querySelector("#copyPreview");
const pricingGrid = document.querySelector("#pricingGrid");
const modal = document.querySelector("#checkoutModal");
const checkoutTitle = document.querySelector("#checkoutTitle");
const checkoutDescription = document.querySelector("#checkoutDescription");
const checkoutAmount = document.querySelector("#checkoutAmount");
const checkoutAccess = document.querySelector("#checkoutAccess");
const dodoCheckoutButton = document.querySelector("#dodoCheckoutButton");
const checkoutPlanInput = document.querySelector("#checkoutPlanInput");
const checkoutContact = document.querySelector("#checkoutContact");
const verificationNote = document.querySelector("#verificationNote");
const problemGrid = document.querySelector("#problemGrid");
const mismatchModal = document.querySelector("#mismatchModal");
const mismatchMessage = document.querySelector("#mismatchMessage");
let pendingPreviewMismatch = null;
let allowPreviewMismatchOnce = false;

function renderProblemCards() {
  if (!problemGrid) return;
  problemGrid.innerHTML = problemCards
    .map(
      (card) => `
        <button class="problem-card" data-problem-category="${card.category}" data-problem-intent="${card.intent}">
          <span>${card.category}</span>
          <strong>${card.label}</strong>
        </button>
      `,
    )
    .join("");
}

function renderCategories() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = categories.filter(({ name, detail, group }) => `${name} ${detail} ${group}`.toLowerCase().includes(query));
  const groups = [...new Set(visible.map((category) => category.group))];
  const entitlement = "Lifetime access";

  categoryGrid.innerHTML = groups
    .map((group) => {
      const groupCategories = visible.filter((category) => category.group === group);
      return `
        <section class="category-group">
          <div class="category-group-heading">
            <span>${group}</span>
            <small>${entitlement}</small>
          </div>
          <div class="category-list">
            ${groupCategories
              .map(
                ({ name, detail }) => `
                <button class="category-card" data-category="${name}">
                  <strong>${name}</strong>
                  <small>${detail}</small>
                </button>
              `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderPreviewOptions() {
  previewCategory.innerHTML = categories.map(({ name }) => `<option value="${name}">${name}</option>`).join("");
  previewLanguage.innerHTML = languageOptions.map(({ id, label }) => `<option value="${id}">${label}</option>`).join("");
  updatePreviewPlaceholder();
  resetPreviewResult("You get 3 free demo prompts. Add a request and click Generate Better Prompt.");
  renderFreePreviewStatus();
}

function updatePreviewPlaceholder() {
  intentInput.placeholder = categoryPlaceholders[previewCategory.value] || "Example: write what you want AI to help with";
  updateMismatchNote();
}

function resetPreviewResult(message = "Click Generate Better Prompt to build a fresh prompt preview.") {
  previewBadge.textContent = previewCategory.value;
  previewTitle.textContent = "Ready to generate";
  engineMeta.textContent = "Category, request, and language will be checked before generation.";
  previewText.textContent = message;
}

function getFreePreviewCount() {
  const stored = Number(localStorage.getItem(freePreviewStorageKey));
  const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${freePreviewCookieKey}=([^;]*)`));
  const cookieValue = cookieMatch ? Number(decodeURIComponent(cookieMatch[1])) : 0;
  const count = Math.max(Number.isFinite(stored) ? stored : 0, Number.isFinite(cookieValue) ? cookieValue : 0);
  if (count > 0 && stored !== count) localStorage.setItem(freePreviewStorageKey, String(count));
  return count;
}

function setFreePreviewCount(value) {
  const nextValue = Math.max(0, value);
  localStorage.setItem(freePreviewStorageKey, String(nextValue));
  document.cookie = `${freePreviewCookieKey}=${encodeURIComponent(String(nextValue))}; max-age=31536000; path=/; SameSite=Lax`;
}

function getFreePreviewRemaining() {
  return Math.max(0, FREE_PREVIEW_LIMIT - getFreePreviewCount());
}

function renderFreePreviewStatus() {
  const remaining = getFreePreviewRemaining();
  if (remaining > 0) {
    generatePreviewButton.disabled = false;
    generatePreviewButton.textContent = `Generate Better Prompt (${remaining} free left)`;
    return;
  }
  generatePreviewButton.disabled = true;
  generatePreviewButton.textContent = "Free previews used";
}

function updateMismatchNote() {
  const mismatch = getCategoryMismatch(previewCategory.value, intentInput.value);
  if (!mismatch) {
    previewMismatchNote.hidden = true;
    previewMismatchNote.textContent = "";
    return;
  }
  previewMismatchNote.hidden = false;
  previewMismatchNote.textContent = `Heads up: this looks like ${mismatch.detectedCategory}, but selected category is ${mismatch.selectedCategory}.`;
}

function showPreviewMismatch(mismatch) {
  pendingPreviewMismatch = mismatch;
  mismatchMessage.textContent = `Your request looks like ${mismatch.detectedCategory}, but selected category is ${mismatch.selectedCategory}. Continue or switch?`;
  mismatchModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePreviewMismatch() {
  mismatchModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function scorePrompt(prompt, category, useCase, intent) {
  const intentTokens = new Set(tokenize(intent));
  const promptTokens = new Set([...prompt.tags, prompt.title, prompt.useCase, prompt.context].flatMap(tokenize));
  const tagHits = [...intentTokens].filter((token) => promptTokens.has(token)).length;
  const categoryScore = prompt.category === category ? 45 : prompt.category === "Any" ? 10 : 0;
  const useCaseScore = useCase && prompt.useCase === useCase ? 25 : 0;
  const intentScore = Math.min(tagHits * 9, 40);
  const qualityScore = prompt.qualityScore * 0.18;
  const conversionScore = prompt.conversionScore * 0.1;
  return Math.min(100, Math.round(categoryScore + useCaseScore + intentScore + qualityScore + conversionScore));
}

function findBestPrompt(category, useCase, intent) {
  return promptLibrary
    .map((prompt) => ({ prompt, score: scorePrompt(prompt, category, useCase, intent) }))
    .sort((a, b) => b.score - a.score)[0];
}

function getLanguageInstruction(language = "English") {
  if (language === "Hinglish") return "Write the answer in natural Hinglish: simple Hindi-English mix, Indian-user friendly, with important technical terms kept clear.";
  if (language === "Hindi") return "Write the answer in simple Hindi. Use Devanagari where natural, and keep product names, tools, brands, and technical terms in English when useful.";
  return "Write the answer in clear, practical Indian English.";
}

function assemblePrompt(blueprint, userIntent, language = "English") {
  const intent = userIntent.trim() || "Use my category and use case to ask the right questions before answering.";
  return `Copy this prompt into ChatGPT, Gemini, Claude, or Perplexity:

You are ${blueprint.role.replace(/^Act as an?\s+/i, "").replace(/\.$/, "")}.

My request:
${intent}

Context to use:
${blueprint.context}

Instructions:
1. If important details are missing, ask up to 5 focused questions first.
2. Be specific, practical, and India-aware where relevant.
3. Do not invent facts, prices, specs, laws, current rates, or domain-specific details. Tell me what must be verified.
4. Compare options using practical tradeoffs, not generic advice.
5. End with a clear recommendation and next action.
6. ${getLanguageInstruction(language)}

Output format:
${blueprint.output}

Recommended learning resources:
${(blueprint.resources || ["Search for current, high-quality tutorials and official resources related to this request."]).map((resource) => `- ${resource}`).join("\n")}

Safety and ethics:
${blueprint.guardrails || "Keep the advice honest, lawful, consent-based, and reputation-safe."}

Example style:
${blueprint.example}`;
}

async function fetchBackendPrompt(category, useCase, intent, language) {
  const response = await fetch(`${CONFIG.backendUrl}/api/generate-prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category, useCase, intent, language }),
  });

  if (!response.ok) throw new Error(`Backend returned ${response.status}`);
  return response.json();
}

async function updatePreview() {
  const category = previewCategory.value;
  const useCase = "";
  const intent = intentInput.value;
  const language = previewLanguage.value;
  previewBadge.textContent = category;
  updateMismatchNote();

  try {
    const result = await fetchBackendPrompt(category, useCase, intent, language);
    previewTitle.textContent = result.title;
    previewText.textContent = result.generatedPrompt;
    engineMeta.textContent = `Backend match: ${result.score}/100 • ${result.useCase} • ${language}`;
    return true;
  } catch {
    const result = findBestPrompt(category, useCase, intent);
    previewTitle.textContent = result.prompt.title;
    previewText.textContent = assemblePrompt(result.prompt, intent, language);
    engineMeta.textContent = `Browser fallback: ${result.score}/100 • ${result.prompt.useCase} • ${language}`;
    return true;
  }
}

async function requestPreviewGeneration() {
  if (getFreePreviewRemaining() <= 0) {
    resetPreviewResult("You have used your 3 free demo prompts. Unlock Pro Lifetime to keep generating expert AI requests.");
    document.querySelector("#pricing").scrollIntoView({ behavior: "smooth" });
    renderFreePreviewStatus();
    return;
  }

  const mismatch = getCategoryMismatch(previewCategory.value, intentInput.value);
  if (mismatch && !allowPreviewMismatchOnce) {
    showPreviewMismatch(mismatch);
    return;
  }
  allowPreviewMismatchOnce = false;
  generatePreviewButton.disabled = true;
  generatePreviewButton.textContent = "Generating...";
  const generated = await updatePreview();
  if (generated) setFreePreviewCount(getFreePreviewCount() + 1);
  renderFreePreviewStatus();
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

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
}

function renderPricing() {
  pricingGrid.innerHTML = plans
    .map(
      (plan) => `
      <article class="price-card ${plan.featured ? "featured" : ""}">
        <div class="plan-topline">
          <span>${plan.badge}</span>
          ${plan.featured ? "<strong>Recommended</strong>" : ""}
        </div>
        <h3>${plan.name}</h3>
        <p>${plan.description}</p>
        <div class="price">Rs ${plan.price}</div>
        <ul>
          ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <button class="primary-action full-width" data-plan="${plan.id}">
          Unlock for Rs ${plan.price}
        </button>
      </article>
    `,
    )
    .join("");
}

function openCheckout(planId) {
  selectedCheckoutPlan = "pro";
  const plan = plans.find((item) => item.id === "pro");

  checkoutTitle.textContent = `Buy ${plan.name}`;
  checkoutDescription.textContent = plan.description;
  checkoutAmount.textContent = `Rs ${plan.price}`;
  checkoutAccess.textContent = plan.name;
  checkoutPlanInput.value = "pro";
  dodoCheckoutButton.disabled = false;
  dodoCheckoutButton.textContent = "Continue to secure payment";
  setCheckoutNote("You will be redirected to Dodo Payments. After successful payment, return here to unlock the Pro dashboard.");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCheckout() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setCheckoutNote(message) {
  if (verificationNote) verificationNote.textContent = message;
}

async function startDodoCheckout() {
  const contact = checkoutContact?.value?.trim() || "";
  if (!contact) {
    checkoutContact.focus();
    setCheckoutNote("Enter your email or WhatsApp number so we can attach the purchase to your account.");
    return;
  }
  const originalLabel = dodoCheckoutButton.textContent;
  dodoCheckoutButton.disabled = true;
  dodoCheckoutButton.textContent = "Opening secure checkout...";
  setCheckoutNote("Creating a secure Dodo checkout...");

  try {
    const response = await fetch(`${CONFIG.backendUrl}/api/create-checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planId: selectedCheckoutPlan,
        contact,
      }),
    });
    const result = await response.json();
    if (!response.ok || !result.checkoutUrl) {
      throw new Error(result.error || "Dodo checkout is not available yet.");
    }
    window.location.href = result.checkoutUrl;
  } catch (error) {
    if (/not configured/i.test(error.message)) {
      setCheckoutNote("Dodo checkout is not configured on this deployment yet. Add the live API key and product ID in Vercel environment variables.");
    } else {
      setCheckoutNote(`${error.message} Please try again or contact support if payment does not open.`);
    }
    dodoCheckoutButton.disabled = false;
    dodoCheckoutButton.textContent = originalLabel;
  }
}

document.addEventListener("click", (event) => {
  const scrollButton = event.target.closest("[data-scroll-to]");
  if (scrollButton) {
    document.querySelector(`#${scrollButton.dataset.scrollTo}`).scrollIntoView({ behavior: "smooth" });
  }

  const packButton = event.target.closest("[data-pack]");
  if (packButton) renderCategories();

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    previewCategory.value = categoryButton.dataset.category;
    updatePreviewPlaceholder();
    resetPreviewResult();
    document.querySelector("#builder").scrollIntoView({ behavior: "smooth" });
  }

  const problemButton = event.target.closest("[data-problem-category]");
  if (problemButton) {
    previewCategory.value = problemButton.dataset.problemCategory;
    intentInput.value = problemButton.dataset.problemIntent;
    updatePreviewPlaceholder();
    resetPreviewResult("This example is loaded. Click Generate Better Prompt to use one free preview.");
    document.querySelector("#builder").scrollIntoView({ behavior: "smooth" });
  }

  const planButton = event.target.closest("[data-plan]");
  if (planButton) openCheckout(planButton.dataset.plan);

  if (event.target.closest("[data-close-modal]")) closeCheckout();

  const mismatchAction = event.target.closest("[data-mismatch-action]");
  if (mismatchAction) {
    const action = mismatchAction.dataset.mismatchAction;
    if (action === "switch" && pendingPreviewMismatch) {
      previewCategory.value = pendingPreviewMismatch.detectedCategory;
      updatePreviewPlaceholder();
      closePreviewMismatch();
      requestPreviewGeneration();
    }
    if (action === "continue") {
      allowPreviewMismatchOnce = true;
      closePreviewMismatch();
      requestPreviewGeneration();
    }
    if (action === "edit") {
      closePreviewMismatch();
      intentInput.focus();
    }
  }
});

document.querySelector("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  startDodoCheckout();
});

searchInput.addEventListener("input", renderCategories);
previewCategory.addEventListener("change", () => {
  updatePreviewPlaceholder();
  resetPreviewResult();
});
previewLanguage.addEventListener("change", () => {
  resetPreviewResult();
});
intentInput.addEventListener("input", () => {
  updateMismatchNote();
  resetPreviewResult();
});
generatePreviewButton.addEventListener("click", requestPreviewGeneration);
copyPreviewButton.addEventListener("click", async () => {
  const text = previewText.textContent.trim();
  if (!text) return;
  try {
    await copyTextToClipboard(text);
    copyPreviewButton.textContent = "Copied";
  } catch {
    copyPreviewButton.textContent = "Select manually";
  }
  setTimeout(() => {
    copyPreviewButton.textContent = "Copy sample";
  }, 1600);
});
window.addEventListener("scroll", () => {
  document.querySelector(".site-header").dataset.elevated = String(window.scrollY > 8);
});

renderCategories();
renderProblemCards();
renderPreviewOptions();
renderPricing();
renderFreePreviewStatus();
