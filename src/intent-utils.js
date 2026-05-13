export const categoryPlaceholders = {
  "Auto, Cars & Bikers": "Example: compare Scorpio N vs Thar Roxx for highway and family use",
  "Search & Research": "Example: research the best sources on AI regulation in India",
  "Social Media": "Example: reply to girl who said thanks in a confident respectful way",
  "Video & Streaming": "Example: best time and angles to shoot car ASMR vlogs",
  "Weather & Planning": "Example: best weather to travel Japan from India",
  "Shopping & Retail": "Example: best outfit to impress women today",
  "AI Tools": "Example: best AI tool for running ads in Chandigarh",
  "Email & Communication": "Example: write refund email for damaged product",
  "Translation & Language": "Example: translate this Hindi line into premium English",
  Sports: "Example: compare Kohli and Rohit captaincy style",
  "Travel & Transport": "Example: plan Japan trip from India with budget and season",
  "News & Media": "Example: who was better president Trump Obama or Biden",
  Gaming: "Example: best racing game with real life effects",
  "Digital Tools": "Example: compare iPhone 17 Pro Max vs S26 Ultra for video shooting",
  "Maps & Local": "Example: find best route with less traffic to airport",
  "Jobs & Education": "Example: prepare me for a product manager interview",
  "Food & Drink": "Example: high protein vegetarian dinner plan",
  "Health & Fitness": "Example: WHOOP vs Apple Watch for gym recovery",
  Music: "Example: which guitar is best for classical music",
  "Finance & Investing": "Example: explain my stock portfolio like I am 10",
};

const categorySignals = [
  ["Gaming", ["game", "gaming", "racing game", "roblox", "gta", "minecraft", "playstation", "xbox", "fps", "simulator"]],
  ["Food & Drink", ["food", "dinner", "lunch", "breakfast", "diet", "meal", "recipe", "protein", "vegetarian", "beer", "drink", "restaurant", "cafe"]],
  ["Travel & Transport", ["travel", "trip", "japan", "goa", "flight", "hotel", "itinerary", "visa", "train", "airport"]],
  ["Weather & Planning", ["weather", "rain", "season", "temperature", "climate", "forecast", "monsoon", "snow"]],
  ["Health & Fitness", ["gym", "fitness", "workout", "recovery", "whoop", "apple watch", "weight loss", "muscle", "sleep", "calories"]],
  ["AI Tools", ["ai tool", "ads", "ad campaign", "marketing", "business", "lead", "sales funnel", "automation", "campaign"]],
  ["Search & Research", ["research", "source", "sources", "study", "find data", "compare evidence", "fact check"]],
  ["News & Media", ["president", "trump", "obama", "biden", "election", "bjp", "congress", "mamta", "news", "war", "policy", "government"]],
  ["Social Media", ["instagram", "insta", "ig", "caption", "reel", "reply to girl", "dating", "flirty", "profile", "aesthetic", "dm"]],
  ["Email & Communication", ["email", "refund", "message", "whatsapp", "reply", "follow up", "apology", "complaint", "client"]],
  ["Finance & Investing", ["stock", "portfolio", "invest", "sip", "mutual fund", "nifty", "sensex", "gold", "budget", "emi", "tax"]],
  ["Shopping & Retail", ["buy", "shopping", "outfit", "dress", "phone", "laptop", "amazon", "flipkart", "best under", "product"]],
  ["Auto, Cars & Bikers", ["car", "bike", "suv", "vehicle", "mileage", "service cost", "thar", "scorpio", "ev"]],
  ["Jobs & Education", ["job", "resume", "interview", "course", "exam", "study plan", "career", "college"]],
  ["Digital Tools", ["canva", "template", "pdf", "calculator", "speed test", "notion", "excel", "camera", "video shooting"]],
  ["Music", ["music", "guitar", "piano", "song", "playlist", "singing", "instrument", "classical"]],
  ["Maps & Local", ["route", "near me", "traffic", "commute", "map", "local", "nearby"]],
  ["Sports", ["cricket", "football", "match", "score", "player", "kohli", "rohit", "nba", "nfl"]],
  ["Translation & Language", ["translate", "hindi", "english meaning", "grammar", "rewrite", "language"]],
  ["Video & Streaming", ["youtube", "video", "vlog", "shoot", "camera angle", "asmr", "netflix", "movie", "series"]],
];

function normalize(text) {
  return String(text || "").toLowerCase();
}

export function detectLikelyCategory(intent) {
  const text = normalize(intent);
  if (text.trim().length < 8) return "";

  const scores = categorySignals.map(([category, signals]) => {
    const score = signals.reduce((total, signal) => {
      if (text.includes(signal)) return total + (signal.includes(" ") ? 3 : 1);
      return total;
    }, 0);
    return { category, score };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores[0]?.score > 0 ? scores[0].category : "";
}

export function getCategoryMismatch(selectedCategory, intent) {
  const detectedCategory = detectLikelyCategory(intent);
  if (selectedCategory === "Search & Research") return null;
  if (!detectedCategory || detectedCategory === selectedCategory) return null;
  return { selectedCategory, detectedCategory };
}
