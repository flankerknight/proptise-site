import { generateBestPrompt, promptLibrary } from "../backend/prompt-engine.mjs";

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

const categorySeeds = {
  "Auto, Cars & Bikers": [
    "compare {anchor} for city and highway use",
    "what should i check before buying {anchor}",
    "make a practical India-aware decision prompt for {anchor}",
    "what are the risks and hidden costs in {anchor}",
    "give me a creator or ownership plan for {anchor}",
  ],
  "Search & Research": [
    "find reliable {anchor} and verify the sources",
    "make a research plan for {anchor}",
    "how do i check if this {anchor} is true",
    "collect evidence and citations for {anchor}",
    "compare source quality for {anchor}",
  ],
  "Social Media": [
    "improve my {anchor} with a premium personal brand",
    "audit my {anchor} and tell me what to fix",
    "make content ideas for {anchor}",
    "write better hooks and captions for {anchor}",
    "make my {anchor} more aesthetic and credible",
  ],
  "Video & Streaming": [
    "best way to {anchor} for a creator video",
    "plan camera angles and story for {anchor}",
    "make a hook and script for {anchor}",
    "what setup do i need for {anchor}",
    "how do i make {anchor} look premium",
  ],
  "Weather & Planning": [
    "best time for {anchor} and what to verify",
    "make a safety plan around {anchor}",
    "what should i pack for {anchor}",
    "should i go or wait because of {anchor}",
    "make a current-source checklist for {anchor}",
  ],
  "Shopping & Retail": [
    "which {anchor} should i buy for my use case",
    "compare options for {anchor}",
    "what red flags should i check before buying {anchor}",
    "make a no-regret buying matrix for {anchor}",
    "best value {anchor} with warranty and service checks",
  ],
  "AI Tools": [
    "which AI tool should i use for {anchor}",
    "make a workflow using AI for {anchor}",
    "compare ChatGPT Gemini Claude Perplexity for {anchor}",
    "what privacy and accuracy checks matter for {anchor}",
    "write a better prompt for {anchor}",
  ],
  "Email & Communication": [
    "write a clear {anchor} message",
    "make this {anchor} polite but firm",
    "give me 3 tone variants for {anchor}",
    "how do i handle {anchor} professionally",
    "draft a concise reply for {anchor}",
  ],
  "Translation & Language": [
    "translate this into {anchor} without losing tone",
    "rewrite my line in {anchor}",
    "make this sound natural and {anchor}",
    "explain the nuance in {anchor}",
    "give me variants for {anchor}",
  ],
  Sports: [
    "compare players for {anchor}",
    "make a match preview for {anchor}",
    "what should i verify before deciding {anchor}",
    "explain the rules around {anchor}",
    "make a fantasy decision framework for {anchor}",
  ],
  "Travel & Transport": [
    "plan a practical {anchor}",
    "what should i verify before booking {anchor}",
    "compare options for {anchor}",
    "make a safety and budget plan for {anchor}",
    "build a checklist for {anchor}",
  ],
  "News & Media": [
    "what could be the reason for {anchor}",
    "explain this news about {anchor}",
    "verify what happened in {anchor}",
    "give me a source-checked timeline for {anchor}",
    "what changed and why does {anchor} matter",
  ],
  Gaming: [
    "best {anchor} for my situation",
    "make a safety plan for {anchor}",
    "how do i improve at {anchor}",
    "what setup do i need for {anchor}",
    "compare options for {anchor}",
  ],
  "Digital Tools": [
    "which tool or setup is best for {anchor}",
    "make a practical workflow for {anchor}",
    "compare options for {anchor}",
    "what should i verify before choosing {anchor}",
    "how do i make {anchor} more professional",
  ],
  "Maps & Local": [
    "find the best {anchor}",
    "compare route options for {anchor}",
    "what should i check live for {anchor}",
    "make a local safety plan for {anchor}",
    "what is the smartest way to handle {anchor}",
  ],
  "Jobs & Education": [
    "help me improve {anchor}",
    "make a preparation plan for {anchor}",
    "what should i learn for {anchor}",
    "audit my {anchor}",
    "build a roadmap for {anchor}",
  ],
  "Food & Drink": [
    "make a practical plan for {anchor}",
    "what should i cook for {anchor}",
    "compare options for {anchor}",
    "make a grocery list for {anchor}",
    "what are the risks and swaps for {anchor}",
  ],
  "Health & Fitness": [
    "make a safe plan for {anchor}",
    "what should i do about {anchor}",
    "build a routine for {anchor}",
    "what should i verify before trying {anchor}",
    "make this practical for Indian lifestyle: {anchor}",
  ],
  Music: [
    "what is best for {anchor}",
    "how should i learn {anchor}",
    "what should i buy for {anchor}",
    "make a practice plan for {anchor}",
    "which resources should i use for {anchor}",
  ],
  "Finance & Investing": [
    "make a decision framework for {anchor}",
    "what should i verify before {anchor}",
    "compare options for {anchor}",
    "make a safe plan around {anchor}",
    "what are the risks in {anchor}",
  ],
};

const criticalRegressions = [
  {
    category: "Digital Tools",
    intent: "which is best phone for photography and video shooting. IPHONE 17PRO MAX or S26ULTRA",
    expectedId: "digital-tools-phone-camera-video",
  },
  {
    category: "News & Media",
    intent: "what could be the reason Mamta Banerjee lost to BJP in west bengal",
    expectedId: "news-west-bengal-election-explainer",
  },
  {
    category: "News & Media",
    intent: "what could be the reason US not opening Strait of Hormuz",
    expectedId: "news-hormuz-geopolitical-explainer",
  },
  {
    category: "Digital Tools",
    intent: "which canva template style should i use for cafe menu",
    expectedId: "digital-canva-menu-design",
  },
];

function anchorText(prompt, index) {
  const anchors = prompt.anchorAny?.length ? prompt.anchorAny : prompt.tags || [prompt.title];
  return anchors[index % anchors.length];
}

function makeCasesForCategory(category, targetCount = 500) {
  if (category === "Music") {
    const musicPrompts = promptLibrary.filter((prompt) => prompt.category === "Music" && prompt.instrument && prompt.intentFamily);
    const musicTemplates = [
      "what is best for {anchor}",
      "how should i learn {anchor}",
      "what should i buy for {anchor}",
      "make a practice plan for {anchor}",
      "which resources should i use for {anchor}",
      "how do i record {anchor} at home",
      "how do i maintain {anchor}",
      "make a creator channel plan for {anchor}",
    ];
    const cases = [];

    for (let index = 0; cases.length < targetCount; index += 1) {
      const prompt = musicPrompts[index % musicPrompts.length];
      const template = musicTemplates[index % musicTemplates.length];
      cases.push({
        category,
        intent: template.replace("{anchor}", prompt.instrument),
        expectedCategory: category,
      });
    }

    return cases;
  }

  const prompts = promptLibrary.filter((prompt) => prompt.category === category && prompt.anchorAny?.length);
  const templates = categorySeeds[category] || ["help me with {anchor}", "compare {anchor}", "make a plan for {anchor}"];
  const cases = [];

  if (!prompts.length) return cases;

  for (let index = 0; cases.length < targetCount; index += 1) {
    const prompt = prompts[index % prompts.length];
    const template = templates[index % templates.length];
    const anchor = anchorText(prompt, Math.floor(index / prompts.length));
    cases.push({
      category,
      intent: template.replace("{anchor}", anchor),
      expectedCategory: category,
    });
  }

  return cases;
}

const generatedCases = categories.flatMap((category) => makeCasesForCategory(category, 500));
const results = [];
const failures = [];

for (const testCase of generatedCases) {
  const result = generateBestPrompt({ category: testCase.category, intent: testCase.intent });
  const failed =
    result.category !== testCase.expectedCategory ||
    /Canva Cafe Menu/.test(result.title) && !/canva|template|menu|poster|design/i.test(testCase.intent) ||
    /Strait of Hormuz/.test(result.title) && !/hormuz|strait|iran|gulf/i.test(testCase.intent);

  const row = {
    category: testCase.category,
    intent: testCase.intent,
    title: result.title,
    promptId: result.promptId,
    failed,
  };

  results.push(row);
  if (failed) failures.push(row);
}

const regressionResults = criticalRegressions.map((testCase) => {
  const result = generateBestPrompt({ category: testCase.category, intent: testCase.intent });
  return {
    ...testCase,
    actualId: result.promptId,
    title: result.title,
    pass: result.promptId === testCase.expectedId,
  };
});

const categorySummary = {};
for (const row of results) {
  categorySummary[row.category] ||= { total: 0, failures: 0 };
  categorySummary[row.category].total += 1;
  if (row.failed) categorySummary[row.category].failures += 1;
}

console.table(Object.entries(categorySummary).map(([category, summary]) => ({ category, ...summary })));
console.table(regressionResults);

if (failures.length) {
  console.log("Sample failures:");
  console.table(failures.slice(0, 25));
}

console.log(JSON.stringify({ total: results.length, failures: failures.length }, null, 2));

if (failures.length || regressionResults.some((row) => !row.pass)) {
  process.exitCode = 1;
}
