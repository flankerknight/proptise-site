import { generateBestPrompt, promptLibrary } from "../backend/prompt-engine.mjs";

const tests = [
  ["Weather & Planning", "What's the best time of when weather spiti is awesome"],
  ["Video & Streaming", "What is the best time to shoot and what are the best angles to shoot car vlogs ASMR style"],
  ["Search & Research", "find reliable sources about air purifier health benefits"],
  ["Social Media", "how to make my insta more aesthetic and seductive"],
  ["Auto, Cars & Bikers", "how to make an car authentic aesthetic youtube channel"],
  ["AI Tools", "which ai tool should i use to summarize PDFs"],
  ["Email & Communication", "write a polite follow up email for payment"],
  ["Translation & Language", "translate this hindi line into premium english"],
  ["Sports", "compare virat kohli and rohit sharma captaincy"],
  ["Travel & Transport", "plan a cheap 3 day goa trip from mumbai"],
  ["News & Media", "what could be the reason Mamta Banerjee lost to BJP in west bengal"],
  ["Gaming", "best roblox game for kids and safety settings"],
  ["Digital Tools", "which canva template style should i use for cafe menu"],
  ["Maps & Local", "find best route with less traffic to airport"],
  ["Jobs & Education", "prepare me for data analyst interview"],
  ["Food & Drink", "make a high protein vegetarian dinner plan"],
  ["Health & Fitness", "weight loss plan for indian office worker"],
  ["Music", "which is best thing a person learning guitar can do?"],
  ["Finance & Investing", "should i invest in gold or sip for 5 years"],
  ["Shopping & Retail", "best phone under 25000 for camera and battery"],
];

const regressionTests = [
  ["News & Media", "what could be the reason US not opening Strait of Hormuz", "news-hormuz-geopolitical-explainer"],
  ["News & Media", "what could be the reason Mamta Banerjee lost to BJP in west bengal", "news-west-bengal-election-explainer"],
];

const rows = tests.map(([category, intent]) => {
  const result = generateBestPrompt({ category, intent });
  return {
    category,
    intent,
    title: result.title,
    useCase: result.useCase,
    id: result.promptId,
    score: result.score,
    studentLeak: /Student/.test(`${result.title} ${result.useCase} ${result.generatedPrompt}`) && !/student|college|school/i.test(intent),
  };
});

const regressions = regressionTests.map(([category, intent, expectedId]) => {
  const result = generateBestPrompt({ category, intent });
  return {
    category,
    intent,
    expectedId,
    actualId: result.promptId,
    title: result.title,
    pass: result.promptId === expectedId,
  };
});

const counts = {};
for (const prompt of promptLibrary) counts[prompt.category] = (counts[prompt.category] || 0) + 1;

console.table(rows.map(({ category, title, useCase, id, score, studentLeak }) => ({ category, title, useCase, id, score, studentLeak })));
console.table(regressions);
console.log(JSON.stringify({ counts, studentLeaks: rows.filter((row) => row.studentLeak) }, null, 2));

if (rows.some((row) => row.studentLeak)) process.exitCode = 1;
if (regressions.some((row) => !row.pass)) process.exitCode = 1;
