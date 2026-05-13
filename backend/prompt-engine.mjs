const specificPromptLibrary = [
  {
    id: "music-guitar-learning-accelerator",
    category: "Music",
    useCase: "Guitar learning accelerator",
    title: "Guitar Learning Accelerator",
    instrument: "guitar",
    intentFamily: "learning",
    tags: [
      "guitar",
      "learning",
      "learn",
      "person",
      "best",
      "thing",
      "beginner",
      "practice",
      "routine",
      "chords",
      "strumming",
      "fingerstyle",
      "songs",
      "technique",
      "habit",
      "improve",
      "mistakes",
    ],
    role: "Act as a guitar learning coach, practice-system designer, and India-aware music mentor.",
    context:
      "The user wants the highest-leverage thing a guitar learner can do. Focus on practice consistency, clean technique, rhythm, chord changes, ear training, song-based learning, music theory basics, feedback loops, avoiding bad habits, and a realistic routine for Indian learners.",
    output:
      "Return the single highest-leverage habit, why it matters, a 20-minute daily practice template, weekly progression plan, mistakes to avoid, Adit Kundra video topics to search, progress metrics, and next action.",
    example: "Example input: What is the best thing a person learning guitar can do?",
    resources: [
      "Adit's Guitar Lessons by Adit Kundra - search his channel for beginner guitar practice, chord changes, strumming, music theory, ear training, and maintenance.",
      "Adit's Guitar Lessons YouTube: https://www.youtube.com/c/AditsGuitarLessons",
      "Use a metronome and tuner app for every practice session.",
      "Record short weekly videos to review timing, tone, posture, and chord clarity.",
    ],
    guardrails:
      "Avoid injury-prone advice. Recommend relaxed hands, slow practice, breaks, and teacher review if pain or tension appears.",
    qualityScore: 99,
    conversionScore: 95,
  },
  {
    id: "music-classical-guitar-buying",
    category: "Music",
    useCase: "Classical guitar buying advice",
    title: "Classical Guitar Buying Advisor",
    instrument: "guitar",
    intentFamily: "buying",
    tags: [
      "guitar",
      "classical",
      "nylon",
      "instrument",
      "buy",
      "best",
      "beginner",
      "intermediate",
      "budget",
      "yamaha",
      "kadence",
      "cort",
      "practice",
      "fingerstyle",
    ],
    role: "Act as a guitar buying advisor, classical guitar learning coach, and India-aware music gear guide.",
    context:
      "The user needs help choosing a guitar for classical music. Focus on nylon-string classical guitars, body size, action, tone, fretboard comfort, build quality, budget, local availability, beginner vs intermediate needs, practice goals, and what to verify before buying online or offline.",
    output:
      "Return clarifying questions, recommended guitar type, buying checklist, budget bands, brands/models to research, red flags, setup/accessory checklist, learning path, and final recommendation.",
    example: "Example input: Which guitar is best for classical music if I am a beginner in India?",
    resources: [
      "Adit's Guitar Lessons by Adit Kundra - use for guitar basics, technique, practice habits, maintenance, and music theory references.",
      "Adit's Guitar Lessons YouTube: https://www.youtube.com/c/AditsGuitarLessons",
      "Richter Guitar - use for classical guitar-specific posture, right-hand technique, and beginner classical lessons.",
      "Search YouTube for classical guitar posture, nylon string guitar buying guide, and beginner classical guitar technique.",
      "Check official brand pages and recent buyer reviews before trusting price/spec claims.",
    ],
    guardrails:
      "Do not invent current prices, availability, model specs, or deals. Tell the user to verify on official brand pages, music stores, and recent reviews.",
    qualityScore: 98,
    conversionScore: 94,
  },
  {
    id: "music-instrument-advisor",
    category: "Music",
    useCase: "Instrument selection and buying",
    title: "Music Instrument Selection Advisor",
    intentFamily: "buying",
    tags: [
      "instrument",
      "guitar",
      "piano",
      "keyboard",
      "violin",
      "tabla",
      "flute",
      "drums",
      "sitar",
      "ukulele",
      "buy",
      "best",
      "learn",
      "beginner",
      "genre",
      "classical",
      "rock",
      "jazz",
      "hindustani",
    ],
    role: "Act as a multi-instrument music gear advisor and learning-path designer.",
    context:
      "The user needs help choosing or learning a musical instrument across genres and skill levels. Cover instrument fit, genre fit, budget, learning curve, space/noise constraints, maintenance, accessories, teacher/course options, and long-term upgrade path.",
    output:
      "Return instrument fit analysis, best options by user type, buying checklist, budget bands, learning path, practice routine, resources, and final recommendation.",
    example: "Example input: Which instrument should I learn for Indian classical and film music?",
    resources: [
      "Adit's Guitar Lessons for guitar-related fundamentals and practice structure.",
      "YouTube searches: beginner guide for the specific instrument, instrument buying guide India, maintenance basics.",
      "Official brand pages, local music stores, teacher recommendations, and recent buyer reviews.",
    ],
    guardrails:
      "Do not invent prices or specs. Warn when the answer depends on current local availability, teacher quality, or instrument setup.",
    qualityScore: 95,
    conversionScore: 90,
  },
  {
    id: "music-genre-learning",
    category: "Music",
    useCase: "Genre and style learning",
    title: "Genre-to-Practice Music Coach",
    intentFamily: "genre",
    tags: [
      "genre",
      "classical",
      "western",
      "hindustani",
      "carnatic",
      "jazz",
      "rock",
      "blues",
      "metal",
      "pop",
      "bollywood",
      "lofi",
      "edm",
      "learn",
      "practice",
      "theory",
      "songs",
    ],
    role: "Act as a genre-aware music learning coach and practice planner.",
    context:
      "The user wants to understand, learn, or choose music by genre. Cover listening references, technique, theory, rhythm, repertoire, practice drills, common mistakes, and progression from beginner to advanced.",
    output:
      "Return genre overview, listening map, required skills, practice plan, song/repertoire ladder, theory concepts, creator/book/course resources, and 30-day learning plan.",
    example: "Example input: How do I start learning blues guitar after basic chords?",
    resources: [
      "Adit's Guitar Lessons for guitar and music theory basics.",
      "YouTube searches for the specific genre plus beginner lesson, rhythm, technique, and song breakdown.",
      "Spotify/Apple Music editorial playlists for listening references.",
    ],
    guardrails: "Respect cultural context, avoid claiming mastery shortcuts, and ask the user to verify teacher/course quality.",
    qualityScore: 93,
    conversionScore: 88,
  },
  {
    id: "music-practice-routine",
    category: "Music",
    useCase: "Practice routine and skill improvement",
    title: "Music Practice Routine Builder",
    intentFamily: "practice",
    tags: ["practice", "routine", "daily", "skill", "technique", "ear", "rhythm", "speed", "chords", "scales", "beginner", "intermediate", "improve"],
    role: "Act as a structured music practice coach.",
    context:
      "The user wants to improve at music. Focus on current level, instrument, genre, time available, weak spots, technique, ear training, rhythm, repertoire, and measurable progress.",
    output:
      "Return a diagnostic checklist, daily routine, weekly structure, drills, repertoire plan, progress metrics, and common mistakes to avoid.",
    example: "Example input: Make a 30-minute daily guitar practice plan for classical music.",
    resources: [
      "Adit's Guitar Lessons for guitar practice structure and technique videos.",
      "Metronome and tuner apps.",
      "Teacher feedback or recorded self-review.",
    ],
    guardrails: "Avoid injury-prone practice advice. Recommend breaks, relaxed technique, and teacher review if pain occurs.",
    qualityScore: 94,
    conversionScore: 89,
  },
  {
    id: "music-creator-channel",
    category: "Music",
    useCase: "Music creator channel strategy",
    title: "Music Creator Channel Builder",
    intentFamily: "creator",
    tags: ["youtube", "channel", "instagram", "content", "creator", "music", "guitar", "cover", "lesson", "reels", "shorts", "aesthetic", "brand"],
    role: "Act as a music creator strategist and audience-positioning expert.",
    context:
      "The user wants to build music content online. Focus on niche, audience promise, visual identity, sound quality, content pillars, covers vs lessons vs originals, Shorts/Reels, filming setup, posting rhythm, and credibility.",
    output:
      "Return niche positioning, content pillars, 20 content ideas, visual/audio setup, filming checklist, title/hook formulas, posting rhythm, growth experiments, and monetization path.",
    example: "Example input: Help me start an aesthetic guitar YouTube channel.",
    resources: [
      "Adit's Guitar Lessons by Adit Kundra as a reference for guitar education content structure.",
      "YouTube Creator Academy.",
      "Search YouTube for guitar lesson channel setup, cover song filming, and audio recording basics.",
    ],
    guardrails: "Respect copyright, avoid copied arrangements without permission, and do not suggest fake engagement or misleading credentials.",
    qualityScore: 93,
    conversionScore: 88,
  },
  {
    id: "social-instagram-aesthetic",
    category: "Social Media",
    useCase: "Instagram aesthetic strategy",
    title: "Instagram Aesthetic Brand Builder",
    tags: [
      "instagram",
      "insta",
      "ig",
      "aesthetic",
      "seductive",
      "attractive",
      "magnetic",
      "feed",
      "profile",
      "bio",
      "visual",
      "style",
      "branding",
      "photoshoot",
      "reels",
    ],
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
    priorityScore: 90,
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
    resources: [
      "Instagram Creators channel and Meta creator resources.",
      "YouTube searches: Instagram content calendar, reels hooks, creator analytics basics.",
    ],
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
    resources: [
      "Meta creator resources for platform guidance.",
      "YouTube searches: Instagram profile audit, reels retention, creator analytics.",
    ],
    guardrails: "Do not suggest bots, fake followers, engagement pods, spam DMs, or deceptive tactics.",
    qualityScore: 93,
    conversionScore: 89,
  },
  {
    id: "translation-premium-english-rewrite",
    category: "Translation & Language",
    useCase: "Premium English rewrite",
    title: "Premium English Translation Editor",
    tags: [
      "translate",
      "translation",
      "hindi",
      "english",
      "premium",
      "rewrite",
      "tone",
      "polished",
      "professional",
      "natural",
      "meaning",
      "line",
      "caption",
      "message",
    ],
    role: "Act as a bilingual translation editor, tone-preservation specialist, and premium English rewrite coach.",
    context:
      "The user wants a Hindi or Hinglish line translated into polished English without losing meaning, emotion, status, or cultural nuance. Focus on intent, audience, tone, natural phrasing, literal vs premium versions, and avoiding awkward word-for-word translation.",
    output:
      "Return the best premium English version, 3 tone variants, literal meaning, nuance preserved, words to avoid, when each version fits, and a final recommended line.",
    example: "Example input: Translate this Hindi line into premium English.",
    resources: ["Use native-speaker review for high-stakes copy.", "Check context, audience, and platform before finalizing tone."],
    guardrails: "Do not change sensitive meaning, add claims, or over-romanticize unless the user asks for that tone.",
    qualityScore: 97,
    conversionScore: 93,
    priorityScore: 85,
  },
  {
    id: "video-car-asmr-shooting",
    category: "Video & Streaming",
    useCase: "Car vlog ASMR shoot planning",
    title: "Car Vlog ASMR Shoot Planner",
    tags: [
      "car",
      "cars",
      "vlog",
      "vlogs",
      "asmr",
      "shoot",
      "shooting",
      "angle",
      "angles",
      "time",
      "best",
      "cinematic",
      "pov",
      "rolling",
      "interior",
      "exterior",
      "audio",
      "road",
      "night",
      "golden",
      "hour",
    ],
    role: "Act as a car-vlog cinematographer, ASMR sound director, and YouTube retention strategist.",
    context:
      "The user wants practical shooting guidance for car vlogs in an ASMR style. Focus on best time of day, natural light, safe locations, camera angles, POV/interior/exterior shots, sound capture, ambient road and cabin audio, visual rhythm, shot list, phone vs camera setup, Indian road safety, permissions, and avoiding unsafe driving shots.",
    output:
      "Return best shooting windows, angle-by-angle shot list, ASMR audio plan, phone/camera setup, location checklist, safety rules, 60-second Shorts structure, long-form vlog structure, common mistakes, and next shoot plan.",
    example: "Example input: What is the best time and best angles to shoot car vlogs ASMR style?",
    resources: [
      "YouTube Creator Academy for retention, titles, thumbnails, and analytics.",
      "Search YouTube for car POV ASMR, automotive B-roll, rolling shots, in-car audio recording, and cinematic car vlog breakdowns.",
      "Use current local weather, sunrise/sunset time, traffic, and location permission checks before shooting.",
    ],
    guardrails:
      "Never suggest unsafe driving, handheld filming while driving, illegal road behavior, blocking public roads, misleading specs, copied footage, or recording people without consent.",
    qualityScore: 98,
    conversionScore: 94,
    priorityScore: 80,
  },
  {
    id: "weather-spiti-travel-window",
    category: "Weather & Planning",
    useCase: "Mountain trip weather timing",
    title: "Spiti Weather Window Planner",
    tags: [
      "spiti",
      "weather",
      "best",
      "time",
      "awesome",
      "trip",
      "travel",
      "season",
      "snow",
      "road",
      "roads",
      "forecast",
      "mountain",
      "monsoon",
      "winter",
      "summer",
      "itinerary",
    ],
    role: "Act as a Himalayan trip weather planner and mountain-road risk advisor.",
    context:
      "The user wants to know the best time to visit Spiti or judge when the weather will be good. Focus on seasonality, road access, snow/black ice, altitude, monsoon risk, daylight, photography light, vehicle readiness, stay availability, medical safety, route choice, buffer days, and current forecast verification.",
    output:
      "Return best travel windows, what each season feels like, weather and road-risk checklist, current-source checks to perform, packing priorities, route buffers, photography timing, and a clear go/wait recommendation.",
    example: "Example input: What is the best time when Spiti weather is awesome?",
    resources: [
      "IMD weather updates and local forecasts.",
      "Himachal Pradesh road/traffic/local authority updates.",
      "Recent traveler reports from credible local stays, taxi operators, and travel communities.",
    ],
    guardrails:
      "Do not invent current road status, weather, landslide, snow, or permit information. Tell the user exactly what must be checked before travel.",
    qualityScore: 98,
    conversionScore: 93,
    priorityScore: 80,
  },
  {
    id: "news-hormuz-geopolitical-explainer",
    category: "News & Media",
    useCase: "Geopolitical chokepoint explainer",
    title: "Strait of Hormuz Geopolitical Explainer",
    anchorAny: ["hormuz", "strait of hormuz", "iran", "persian gulf"],
    anchorBoost: 85,
    tags: [
      "us",
      "usa",
      "america",
      "strait",
      "hormuz",
      "iran",
      "gulf",
      "oil",
      "shipping",
      "navy",
      "military",
      "geopolitics",
      "reason",
      "reasons",
      "why",
      "opening",
      "open",
      "close",
      "reopen",
      "blockade",
      "war",
      "diplomacy",
      "sanctions",
    ],
    role: "Act as a geopolitical news analyst, energy-security explainer, and source-verification editor.",
    context:
      "The user is asking why the US may or may not act around the Strait of Hormuz. First clarify whether they mean opening, keeping open, reopening, militarily intervening, or avoiding escalation. Explain possible motives using actor incentives, international law constraints, military escalation risk, oil/shipping economics, diplomatic pressure, allies, Iran's position, and source uncertainty.",
    output:
      "Return a plain-English summary, key actors, 5-7 plausible reasons, what each side wants, oil/shipping impact, military/diplomatic risks, India impact, timeline of what must be verified, source-check list, and a cautious bottom line.",
    example: "Example input: What could be the reason the US is not opening the Strait of Hormuz?",
    resources: [
      "Reuters and AP for current event confirmation.",
      "BBC for plain-English background.",
      "Official statements from the White House, US Department of Defense, US State Department, Iran's foreign ministry, and regional governments.",
      "EIA or IEA explainers for oil/shipping context.",
      "Marine traffic or shipping-risk reports only as supporting context, not as sole proof.",
    ],
    guardrails:
      "Do not invent live military movements, shipping status, oil prices, legal claims, or official positions. Separate confirmed facts from hypotheses and tell the user what needs current verification.",
    qualityScore: 98,
    conversionScore: 94,
    priorityScore: 95,
  },
  {
    id: "news-west-bengal-election-explainer",
    category: "News & Media",
    useCase: "Indian election result analysis",
    title: "West Bengal Election Result Explainer",
    anchorAny: ["mamata", "mamta", "banerjee", "bjp", "west bengal", "bengal", "tmc", "trinamool"],
    anchorBoost: 90,
    tags: [
      "mamata",
      "mamta",
      "banerjee",
      "bjp",
      "west",
      "bengal",
      "tmc",
      "trinamool",
      "election",
      "lost",
      "loss",
      "won",
      "win",
      "vote",
      "seat",
      "assembly",
      "lok",
      "sabha",
      "reason",
      "why",
      "politics",
    ],
    role: "Act as an Indian election analyst, political-news fact checker, and source-verification editor.",
    context:
      "The user is asking about Mamata Banerjee, BJP, TMC, or West Bengal election outcomes. First verify the premise: identify the election year, seat/constituency/state result, and whether Mamata Banerjee personally lost, TMC lost seats, or BJP gained vote share. Then explain plausible political reasons without assuming unverified facts.",
    output:
      "Return a premise check, election/result timeline to verify, key actors, vote/seat context, 5-7 plausible reasons, BJP/TMC strategy comparison, regional issues, voter blocs, source-check list, and a cautious bottom line.",
    example: "Example input: What could be the reason Mamata Banerjee lost to BJP in West Bengal?",
    resources: [
      "Election Commission of India results and affidavits.",
      "Reuters, AP, BBC, The Hindu, Indian Express, and credible Bengali news outlets for confirmation.",
      "Party statements from TMC and BJP, used as claims to compare against independent reporting.",
      "Constituency-level vote shares before drawing conclusions.",
    ],
    guardrails:
      "Do not assume the user premise is true. Do not invent election results, vote shares, turnout, caste/community claims, violence claims, or current political developments. Separate confirmed facts, reported claims, and analysis.",
    qualityScore: 98,
    conversionScore: 94,
    priorityScore: 90,
  },
  {
    id: "auto-youtube-channel",
    category: "Auto, Cars & Bikers",
    useCase: "Auto YouTube channel strategy",
    title: "Authentic Auto YouTube Channel Builder",
    tags: [
      "car",
      "cars",
      "auto",
      "automobile",
      "youtube",
      "channel",
      "aesthetic",
      "authentic",
      "content",
      "creator",
      "cinematic",
      "reels",
      "shorts",
      "brand",
    ],
    anchorAny: ["youtube", "channel", "vlog", "creator", "content", "reels", "shorts", "cinematic", "asmr"],
    anchorBoost: 95,
    role: "Act as an automotive YouTube channel strategist, visual identity director, and India-aware creator coach.",
    context:
      "The user wants to build an authentic, aesthetic auto channel. Focus on niche positioning, viewer promise, visual language, shoot style, storytelling, car culture, content pillars, thumbnails, titles, Shorts, long-form episodes, trust-building, and a repeatable production system. Prioritize credibility and taste over fake luxury, copied edits, or clickbait.",
    output:
      "Return channel positioning, audience persona, visual aesthetic, content pillars, 15 video ideas, title and thumbnail formulas, filming checklist, editing style, upload rhythm, monetization paths, and a 30-day launch plan.",
    example: "Example input: How do I make an authentic aesthetic YouTube channel about cars in India?",
    resources: [
      "YouTube Creator Academy for channel fundamentals and analytics.",
      "Search YouTube for automotive cinematography, car rollers, POV driving videos, and car review storytelling.",
      "Steal Like an Artist by Austin Kleon - for building taste without copying.",
      "The Visual MBA by Jason Barron - for simple visual communication.",
      "Contagious by Jonah Berger - for shareable ideas and hooks.",
    ],
    guardrails:
      "Do not recommend unsafe driving shots, illegal road behavior, fake ownership claims, copied footage, misleading specs, or clickbait that damages trust.",
    qualityScore: 98,
    conversionScore: 94,
    priorityScore: 90,
  },
  {
    id: "auto-car-comparison",
    category: "Auto, Cars & Bikers",
    useCase: "Car ownership comparison",
    title: "Indian Car Ownership Comparator",
    tags: [
      "car",
      "cars",
      "suv",
      "hatchback",
      "sedan",
      "compare",
      "comparison",
      "versus",
      "vs",
      "both",
      "mileage",
      "emi",
      "service",
      "resale",
      "hyundai",
      "i20",
      "i10",
      "scorpio",
      "thar",
    ],
    anchorAny: ["compare", "comparison", "versus", "vs", "both cars", "i20", "i10", "scorpio", "thar", "ownership"],
    anchorBoost: 90,
    role: "Act as an Indian car ownership advisor and car comparison expert.",
    context:
      "The user is comparing cars in India and needs practical advice based on on-road price, engine and variant differences, mileage, service cost, comfort, safety, resale value, EMI pressure, city/highway usage, family needs, and 5-year ownership cost.",
    output:
      "Return a comparison table, ownership-cost estimate, best choice by driver type, red flags, variant advice, negotiation checklist, and final recommendation.",
    example: "Example input: Scorpio N vs Thar Roxx for family use, highway trips, and city driving.",
    qualityScore: 97,
    conversionScore: 92,
    priorityScore: 85,
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
    id: "finance-gold-vs-sip",
    category: "Finance & Investing",
    useCase: "Gold vs SIP decision",
    title: "Gold vs SIP Investment Comparator",
    tags: ["gold", "sip", "mutual", "fund", "investment", "invest", "5", "years", "long", "term", "risk", "return", "inflation"],
    role: "Act as a conservative Indian investment decision coach and risk-profile analyst.",
    context:
      "The user is choosing between gold and SIP-style investing. Focus on goal, time horizon, risk tolerance, liquidity, inflation, volatility, diversification, emergency fund readiness, tax verification, and avoiding return guarantees.",
    output:
      "Return clarifying questions, decision matrix, when gold fits, when SIPs fit, suggested allocation logic by user type, risks to verify, and final next action.",
    example: "Example input: Should I invest in gold or SIP for 5 years?",
    resources: ["SEBI investor education", "AMFI mutual fund basics", "RBI resources", "official scheme documents and expense ratios"],
    guardrails: "Do not promise returns or invent current rates, tax rules, NAVs, gold prices, or product performance. Ask the user to verify current data.",
    qualityScore: 97,
    conversionScore: 93,
    priorityScore: 85,
  },
  {
    id: "ai-pdf-summary-workflow",
    category: "AI Tools",
    useCase: "PDF summarization workflow",
    title: "AI PDF Summarization Workflow Architect",
    tags: ["ai", "pdf", "summarize", "summary", "document", "chatgpt", "gemini", "claude", "perplexity", "tool", "workflow"],
    role: "Act as an AI workflow architect for PDF summarization, source-grounded analysis, and tool selection.",
    context:
      "The user wants to pick or use an AI tool for PDF summaries. Focus on document length, privacy, citations, tables/images, accuracy checks, question-answering, export needs, and whether ChatGPT, Gemini, Claude, Perplexity, or another tool fits best.",
    output:
      "Return tool-fit matrix, recommended workflow, prompt template, accuracy checklist, privacy cautions, and next action.",
    example: "Example input: Which AI tool should I use to summarize PDFs?",
    resources: ["Official tool documentation", "Model upload/privacy settings", "Current plan limits and file-size limits"],
    guardrails: "Do not invent current plan limits, model features, or privacy terms. Tell the user what to verify inside the current app/docs.",
    qualityScore: 96,
    conversionScore: 92,
    priorityScore: 80,
  },
  {
    id: "ai-ads-marketing-tool-selector",
    category: "AI Tools",
    useCase: "AI ads and marketing workflow",
    title: "AI Ads and Marketing Tool Selector",
    tags: ["ai", "ads", "ad", "advertising", "marketing", "campaign", "business", "leads", "meta", "google", "instagram", "chandigarh", "tool", "workflow"],
    role: "Act as an AI marketing-tool advisor and small-business ads workflow strategist for Indian users.",
    context:
      "The user wants to choose or use AI tools for ads, marketing, leads, creatives, copy, targeting ideas, landing pages, local business growth, or campaign planning. Focus on business type, city/local market, target customer, budget range, platform fit, creative workflow, measurement, privacy, and what must be verified in current tool features.",
    output:
      "Return tool-fit matrix, recommended workflow by budget, ad-platform fit, creative/copy workflow, tracking checklist, risks to verify, and a 7-day launch plan.",
    example: "Example input: Best AI tool for running ads for a Chandigarh gym or cafe.",
    resources: ["Meta Business Help Center", "Google Ads Help", "official AI tool documentation", "local competitor ad libraries where available"],
    guardrails: "Do not invent current ad costs, rankings, tool features, policy rules, or guaranteed leads. Ask the user to verify current platform policies, budgets, and local compliance.",
    qualityScore: 98,
    conversionScore: 94,
    priorityScore: 120,
    anchorAny: ["ads", "ad", "advertising", "marketing", "campaign", "leads"],
    anchorBoost: 90,
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
    priorityScore: 80,
  },
  {
    id: "shopping-buying-guide",
    category: "Shopping & Retail",
    useCase: "Buying decision matrix",
    title: "No-Regret Buying Decision Matrix",
    tags: ["buy", "shopping", "compare", "amazon", "flipkart", "reviews", "warranty", "deal", "budget", "phone", "camera", "battery", "mobile"],
    role: "Act as a strict Indian shopping advisor.",
    context:
      "The user wants to compare products without getting misled by discounts, fake reviews, missing warranty details, weak alternatives, or hidden ownership costs.",
    output:
      "Return a comparison matrix, hidden-cost check, review-risk check, alternatives, final pick, and what not to buy.",
    example: "Example input: Best phone under Rs 25,000 for camera, battery, and 3 years use.",
    qualityScore: 92,
    conversionScore: 87,
    priorityScore: 110,
  },
  {
    id: "digital-canva-menu-design",
    category: "Digital Tools",
    useCase: "Canva menu design",
    title: "Canva Cafe Menu Design Director",
    anchorAny: ["canva", "template", "cafe menu", "menu design", "restaurant menu"],
    anchorBoost: 85,
    tags: ["canva", "template", "style", "cafe", "menu", "design", "brand", "food", "restaurant", "typography", "layout"],
    role: "Act as a Canva design director, cafe-brand strategist, and practical template editor.",
    context:
      "The user needs a Canva style direction for a cafe menu. Focus on brand vibe, readability, item hierarchy, pricing clarity, food photography, typography pairing, color palette, print/mobile formats, and avoiding clutter.",
    output:
      "Return 3 menu style directions, layout rules, typography/color guidance, Canva search keywords, section structure, mistakes to avoid, and final recommended template direction.",
    example: "Example input: Which Canva template style should I use for a cafe menu?",
    resources: ["Canva template search", "Restaurant menu readability examples", "Print size and margin checks"],
    guardrails: "Do not copy another cafe brand. Verify print dimensions, prices, allergens, and item names before publishing.",
    qualityScore: 96,
    conversionScore: 91,
    priorityScore: 80,
  },
  {
    id: "maps-airport-route-planner",
    category: "Maps & Local",
    useCase: "Airport route planning",
    title: "Airport Route Timing Planner",
    tags: ["route", "traffic", "airport", "maps", "commute", "time", "cab", "metro", "less", "fast", "delay"],
    role: "Act as a local route planner and airport timing risk advisor.",
    context:
      "The user wants the best route to the airport with less traffic. Focus on origin, terminal, departure time, traffic risk, cab vs metro vs self-drive, buffer time, luggage, parking/drop-off, and live-map verification.",
    output:
      "Return clarifying questions, route options, time buffers, traffic-risk windows, live checks to perform, backup route, and final leave-time recommendation.",
    example: "Example input: Find the best route with less traffic to the airport.",
    resources: ["Google Maps", "official airport/metro/transit updates", "live traffic and ride-hailing estimates"],
    guardrails: "Do not invent live traffic or airport status. Tell the user to verify live route, terminal, and transit disruptions before leaving.",
    qualityScore: 96,
    conversionScore: 91,
    priorityScore: 80,
  },
  {
    id: "food-high-protein-vegetarian-dinner",
    category: "Food & Drink",
    useCase: "High-protein vegetarian meal plan",
    title: "Indian High-Protein Vegetarian Meal Planner",
    tags: ["high", "protein", "vegetarian", "dinner", "meal", "plan", "paneer", "dal", "chana", "tofu", "healthy", "budget"],
    role: "Act as an Indian vegetarian meal planner and practical nutrition assistant.",
    context:
      "The user wants a high-protein vegetarian dinner plan. Focus on protein sources, Indian ingredients, cooking time, budget, taste, digestion, calorie goal, leftovers, and simple weekly rotation.",
    output:
      "Return clarifying questions if needed, 7 dinner options, protein logic, grocery list, prep shortcuts, swaps, cautions, and final recommended dinner.",
    example: "Example input: Make a high-protein vegetarian dinner plan.",
    resources: ["Nutrition labels", "credible dietitian content", "doctor/dietitian review for medical conditions"],
    guardrails: "Do not give medical diet advice for diagnosed conditions. Ask the user to verify allergies, medical restrictions, and exact nutrition from labels.",
    qualityScore: 96,
    conversionScore: 91,
    priorityScore: 80,
  },
  {
    id: "health-fitness-plan",
    category: "Health & Fitness",
    useCase: "Weight-loss routine",
    title: "Practical Indian Fitness Planner",
    tags: ["weight", "fitness", "diet", "nutrition", "workout", "habit", "fat", "protein", "vegetarian"],
    role: "Act as a careful fitness planning assistant for Indian routines and food habits.",
    context:
      "The user needs a safe habit plan based on age, height, weight, medical limits, routine, food preference, budget, and available time.",
    output:
      "Return clarifying questions, weekly routine, Indian meal structure, habit tracker, safety notes, and progress review plan.",
    example: "Example input: Vegetarian weight loss plan for office worker with 30 minutes daily.",
    qualityScore: 91,
    conversionScore: 84,
    priorityScore: 80,
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

const categoryProfiles = [
  {
    category: "Auto, Cars & Bikers",
    expert: "automotive advisor, ownership-cost analyst, and India-aware mobility creator strategist",
    focus:
      "cars, bikes, EVs, used vehicles, ownership cost, comparisons, service, insurance, resale, road-trip fit, commuting, creator channels, automotive aesthetics, and safe content production",
    resources: ["official brand pages", "service-center information", "recent owner reviews", "YouTube Creator Academy", "credible automotive review channels"],
  },
  {
    category: "Search & Research",
    expert: "research strategist and source-quality analyst",
    focus: "search strategy, source comparison, fact-checking, research briefs, citations, query planning, and decision-ready summaries",
    resources: ["Google Search Help", "Perplexity-style source comparison workflows", "Google Scholar for deeper research"],
  },
  {
    category: "Social Media",
    expert: "ethical social media strategist and creator positioning expert",
    focus: "profile positioning, content pillars, visual identity, hooks, captions, audience fit, analytics, and growth experiments",
    resources: ["Instagram Creators", "Meta creator resources", "YouTube tutorials on profile audits and content hooks"],
  },
  {
    category: "Video & Streaming",
    expert: "video strategist, YouTube planner, and streaming-content analyst",
    focus: "video ideas, channel positioning, episode structure, watchlists, thumbnails, retention, scripts, and Shorts strategy",
    resources: ["YouTube Creator Academy", "Think Media", "Film Booth", "official platform creator resources"],
  },
  {
    category: "Weather & Planning",
    expert: "weather-aware trip and event planning assistant",
    focus: "weather risk, travel timing, packing, outdoor event planning, safety, and contingency plans",
    resources: ["IMD updates", "weather app forecasts", "local authority advisories"],
  },
  {
    category: "Shopping & Retail",
    expert: "Indian buying advisor and product-comparison analyst",
    focus: "product comparisons, warranties, reviews, fake discount checks, ownership cost, alternatives, and buy/no-buy decisions",
    resources: ["official product pages", "warranty documents", "credible long-term reviews"],
  },
  {
    category: "AI Tools",
    expert: "AI workflow architect and model-selection advisor",
    focus: "model choice, prompt systems, automations, tool comparisons, productivity workflows, and evaluation criteria",
    resources: ["OpenAI docs", "Anthropic docs", "Google Gemini docs", "official tool documentation"],
  },
  {
    category: "Email & Communication",
    expert: "professional communication strategist",
    focus: "emails, replies, negotiation messages, follow-ups, tone, clarity, escalation, and relationship-safe communication",
    resources: ["Harvard Business Review communication articles", "plain-language writing guides"],
  },
  {
    category: "Translation & Language",
    expert: "localization editor and bilingual writing coach",
    focus: "translation accuracy, tone preservation, localization, bilingual copy, cultural context, and rewrite options",
    resources: ["official dictionaries", "style guides", "native-speaker review workflows"],
  },
  {
    category: "Sports",
    expert: "sports analyst and match-context explainer",
    focus: "match previews, live-score context, player comparison, fantasy decisions, tactics, and sports news explainers",
    resources: ["official league sites", "ESPN/Cricbuzz-style scorecards", "team news sources"],
  },
  {
    category: "Travel & Transport",
    expert: "travel planner and transport decision advisor",
    focus: "itineraries, flights, hotels, routes, budgets, safety, local experiences, and travel tradeoffs",
    resources: ["Google Flights", "Skyscanner", "official tourism sites", "hotel review platforms"],
  },
  {
    category: "News & Media",
    expert: "news briefing analyst and media-literacy coach",
    focus: "summaries, timelines, source bias, context, stakeholder maps, and what changed/why it matters",
    resources: ["Reuters", "AP", "BBC", "official statements", "local credible outlets"],
  },
  {
    category: "Gaming",
    expert: "gaming recommendation strategist and gameplay coach",
    focus: "game discovery, strategy, builds, parental checks, monetization, esports basics, and setup decisions",
    resources: ["official game docs", "Steam reviews", "Metacritic/OpenCritic", "creator walkthroughs"],
  },
  {
    category: "Digital Tools",
    expert: "digital productivity and tool-comparison consultant",
    focus: "Canva, calculators, speed tests, software selection, workflow design, templates, and tool audits",
    resources: ["official software docs", "G2/Capterra-style reviews", "trusted tutorial channels"],
  },
  {
    category: "Maps & Local",
    expert: "local discovery and navigation planning assistant",
    focus: "routes, nearby discovery, commute tradeoffs, map searches, local business checks, and safety/time planning",
    resources: ["Google Maps", "official transit sites", "local reviews", "traffic updates"],
  },
  {
    category: "Jobs & Education",
    expert: "career coach and learning-plan designer",
    focus: "resumes, interviews, projects, coursework, skill gaps, study plans, and role-specific preparation",
    resources: ["LinkedIn Learning", "Coursera", "official job descriptions", "portfolio examples"],
  },
  {
    category: "Food & Drink",
    expert: "food planning assistant and restaurant/recipe advisor",
    focus: "meal planning, recipes, restaurant decisions, Indian food preferences, budget, nutrition basics, and grocery lists",
    resources: ["credible recipe sites", "restaurant reviews", "nutrition labels", "local delivery menus"],
  },
  {
    category: "Health & Fitness",
    expert: "careful habit-based fitness and nutrition planning assistant",
    focus: "fitness routines, nutrition, Indian meals, weight goals, habit tracking, safety, and progress review",
    resources: ["WHO physical activity guidance", "credible dietitian content", "doctor review for medical conditions"],
  },
  {
    category: "Music",
    expert: "music instrument, genre, learning, and creator strategy advisor",
    focus:
      "instrument buying, guitar, piano, keyboard, violin, tabla, flute, drums, sitar, ukulele, classical, Hindustani, Carnatic, jazz, rock, blues, pop, Bollywood, practice routines, music theory, playlists, artist discovery, and music creator strategy",
    resources: [
      "Adit's Guitar Lessons by Adit Kundra for guitar-related fundamentals",
      "Spotify and Apple Music editorial playlists for listening references",
      "music theory basics",
      "instrument-specific YouTube lessons and official brand pages",
    ],
  },
  {
    category: "Finance & Investing",
    expert: "conservative Indian personal finance and investing coach",
    focus: "budgeting, gold, stocks, SIPs, emergency funds, debt, risk profile, taxes, and decision frameworks",
    resources: ["SEBI investor education", "RBI resources", "AMFI basics", "official financial disclosures"],
  },
];

const musicInstruments = [
  {
    name: "guitar",
    aliases: ["guitar", "acoustic guitar", "electric guitar", "classical guitar", "nylon guitar", "fingerstyle guitar"],
    resources: [
      "Adit's Guitar Lessons by Adit Kundra for guitar fundamentals, technique, practice, and music theory.",
      "Adit's Guitar Lessons YouTube: https://www.youtube.com/c/AditsGuitarLessons",
      "JustinGuitar and Guitareo for structured beginner-to-intermediate guitar paths.",
    ],
  },
  {
    name: "piano",
    aliases: ["piano", "keyboard", "digital piano", "synth", "synthesizer"],
    resources: ["Hoffman Academy for beginner piano foundations.", "Pianote for structured modern piano lessons.", "Mangold Project for music theory and piano concepts."],
  },
  {
    name: "drums",
    aliases: ["drums", "drum kit", "drum set", "electronic drums", "e-drums"],
    resources: ["Drumeo for structured drum lessons, grooves, fills, and practice paths.", "Use a metronome app and record practice for timing review."],
  },
  {
    name: "bass",
    aliases: ["bass", "bass guitar", "electric bass"],
    resources: ["Scott's Bass Lessons for bass technique, groove, and music theory.", "Search YouTube for beginner bass groove, muting, and walking bass lessons."],
  },
  {
    name: "violin",
    aliases: ["violin", "fiddle"],
    resources: ["Red Desert Violin for structured beginner violin/fiddle lessons.", "Violin Lab for bowing, intonation, and technique-focused lessons."],
  },
  {
    name: "flute",
    aliases: ["flute", "bansuri", "indian flute", "western flute"],
    resources: ["Radhe Flutes for beginner flute and bansuri learning.", "Search YouTube for flute embouchure, breath control, and fingering lessons."],
  },
  {
    name: "tabla",
    aliases: ["tabla", "dayan", "bayan"],
    resources: ["Search YouTube for tabla bols, taal practice, and beginner tabla lessons.", "Use a lehra/metronome app for rhythm practice."],
  },
  {
    name: "sitar",
    aliases: ["sitar"],
    resources: ["Search YouTube for sitar posture, mizrab technique, raga basics, and beginner sitar lessons.", "Prefer teacher feedback for tuning and hand position."],
  },
  {
    name: "ukulele",
    aliases: ["ukulele", "uke"],
    resources: ["Bernadette Teaches Music for ukulele basics.", "Search YouTube for ukulele strumming, chord changes, and song tutorials."],
  },
  {
    name: "vocals",
    aliases: ["vocals", "singing", "voice", "singer", "vocal"],
    resources: ["Singeo for structured singing lessons.", "Search YouTube for vocal warmups, breath support, pitch, and ear training."],
  },
  {
    name: "harmonium",
    aliases: ["harmonium"],
    resources: ["Search YouTube for harmonium basics, scales, alankar, bhajan, ghazal, and raga accompaniment.", "Use teacher feedback for fingering and voice support."],
  },
  {
    name: "saxophone",
    aliases: ["saxophone", "sax"],
    resources: ["Better Sax for saxophone lessons and tone-building.", "Search YouTube for embouchure, reed setup, long tones, and beginner sax lessons."],
  },
  {
    name: "trumpet",
    aliases: ["trumpet"],
    resources: ["Search YouTube for trumpet embouchure, buzzing, long tones, and beginner trumpet lessons.", "Use teacher review for pressure and endurance issues."],
  },
  {
    name: "cello",
    aliases: ["cello"],
    resources: ["Search YouTube for cello posture, bow hold, intonation, and beginner cello lessons.", "Use teacher feedback for bow arm and left-hand setup."],
  },
  {
    name: "viola",
    aliases: ["viola"],
    resources: ["Search YouTube for viola posture, bowing, clef reading, and beginner viola lessons.", "Use teacher feedback for intonation and ergonomics."],
  },
  {
    name: "clarinet",
    aliases: ["clarinet"],
    resources: ["Search YouTube for clarinet embouchure, reed setup, tone, and beginner clarinet lessons.", "Verify reeds and mouthpiece choices locally."],
  },
  {
    name: "harmonica",
    aliases: ["harmonica", "mouth organ"],
    resources: ["Search YouTube for harmonica bending, breath control, blues harp, and beginner harmonica lessons.", "Check key selection before buying."],
  },
  {
    name: "cajon",
    aliases: ["cajon"],
    resources: ["Search YouTube for cajon grooves, hand technique, flamenco patterns, and pop accompaniment.", "Use slow metronome practice for clean tone separation."],
  },
  {
    name: "dholak",
    aliases: ["dholak"],
    resources: ["Search YouTube for dholak theka, folk rhythms, bhajan patterns, and hand technique.", "Use slow tempo practice for clean dayan/bayan separation."],
  },
  {
    name: "mridangam",
    aliases: ["mridangam"],
    resources: ["Search YouTube for mridangam sollukattu, Carnatic tala basics, and beginner mridangam lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "veena",
    aliases: ["veena", "saraswati veena"],
    resources: ["Search YouTube for veena posture, gamaka, Carnatic basics, and beginner veena lessons.", "Teacher feedback is important for technique."],
  },
  {
    name: "sarod",
    aliases: ["sarod"],
    resources: ["Search YouTube for sarod basics, right-hand technique, raga practice, and beginner sarod lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "mandolin",
    aliases: ["mandolin"],
    resources: ["Mandolessons for mandolin basics and tunes.", "Search YouTube for mandolin picking, tremolo, chords, and beginner lessons."],
  },
  {
    name: "banjo",
    aliases: ["banjo"],
    resources: ["Search YouTube for banjo rolls, clawhammer, bluegrass basics, and beginner banjo lessons.", "Choose 5-string/tenor based on genre."],
  },
  {
    name: "recorder",
    aliases: ["recorder"],
    resources: ["Team Recorder for recorder technique and repertoire.", "Search YouTube for recorder fingering, breath control, and beginner lessons."],
  },
  {
    name: "oboe",
    aliases: ["oboe"],
    resources: ["Search YouTube for oboe reed basics, embouchure, tone, and beginner oboe lessons.", "Teacher guidance is important for reed setup."],
  },
  {
    name: "bassoon",
    aliases: ["bassoon"],
    resources: ["Search YouTube for bassoon reed setup, posture, fingering, and beginner bassoon lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "trombone",
    aliases: ["trombone"],
    resources: ["Search YouTube for trombone slide positions, buzzing, long tones, and beginner trombone lessons.", "Use tuner and drone practice for intonation."],
  },
  {
    name: "french horn",
    aliases: ["french horn", "horn"],
    resources: ["Search YouTube for French horn embouchure, partials, tone, and beginner horn lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "tuba",
    aliases: ["tuba"],
    resources: ["Search YouTube for tuba breathing, buzzing, tone, and beginner tuba lessons.", "Use long-tone and breath-control practice."],
  },
  {
    name: "xylophone",
    aliases: ["xylophone", "marimba", "mallet percussion"],
    resources: ["Search YouTube for mallet grip, scales, marimba basics, and xylophone technique.", "Use slow accuracy practice with a metronome."],
  },
  {
    name: "conga",
    aliases: ["conga", "congas", "bongo", "bongos"],
    resources: ["Search YouTube for conga tones, tumbao, bongo martillo, and Latin percussion basics.", "Prioritize relaxed hands and tone clarity."],
  },
  {
    name: "djembe",
    aliases: ["djembe"],
    resources: ["Search YouTube for djembe bass/tone/slap, West African rhythms, and beginner djembe lessons.", "Use teacher feedback for hand safety."],
  },
  {
    name: "music production",
    aliases: ["music production", "producer", "beat making", "fl studio", "ableton", "logic pro", "garageband", "daw"],
    resources: ["Ableton official learning resources.", "FL Studio official tutorials.", "YouTube searches for beginner DAW workflow, mixing basics, and arrangement."],
  },
  {
    name: "djing",
    aliases: ["dj", "djing", "turntable", "controller", "rekordbox", "serato"],
    resources: ["Crossfader for DJ basics and transitions.", "Search YouTube for beatmatching, phrasing, EQ mixing, and controller setup."],
  },
  {
    name: "tanpura",
    aliases: ["tanpura", "tambura"],
    resources: ["Search YouTube for tanpura tuning, drone practice, and Hindustani/Carnatic listening basics.", "Use tanpura apps for daily swara practice."],
  },
  {
    name: "shehnai",
    aliases: ["shehnai"],
    resources: ["Search YouTube for shehnai basics, reed control, raga phrasing, and beginner lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "accordion",
    aliases: ["accordion"],
    resources: ["Search YouTube for accordion bass buttons, bellows control, and beginner accordion lessons.", "Verify instrument size and tuning before buying."],
  },
  {
    name: "harp",
    aliases: ["harp"],
    resources: ["Search YouTube for harp posture, hand position, beginner harp lessons, and tuning basics.", "Check lever/pedal harp needs before buying."],
  },
  {
    name: "oud",
    aliases: ["oud"],
    resources: ["Oud for Guitarists and YouTube oud lessons for maqam, picking, and tuning basics.", "Verify local availability and setup before buying."],
  },
  {
    name: "sarangi",
    aliases: ["sarangi"],
    resources: ["Search YouTube for sarangi basics, bowing, tuning, and Hindustani raga practice.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "melodica",
    aliases: ["melodica"],
    resources: ["Search YouTube for melodica breath control, keyboard fingering, and beginner songs.", "Use keyboard basics for theory transfer."],
  },
  {
    name: "kalimba",
    aliases: ["kalimba", "thumb piano"],
    resources: ["Search YouTube for kalimba tuning, tabs, beginner songs, and maintenance.", "Check key layout and tuning before buying."],
  },
  {
    name: "handpan",
    aliases: ["handpan", "hang drum"],
    resources: ["Search YouTube for handpan scales, touch technique, rhythm patterns, and beginner handpan lessons.", "Verify tuning, scale, and maker reputation before buying."],
  },
  {
    name: "erhu",
    aliases: ["erhu"],
    resources: ["Search YouTube for erhu bowing, intonation, posture, and beginner erhu lessons.", "Teacher guidance is strongly recommended."],
  },
  {
    name: "koto",
    aliases: ["koto"],
    resources: ["Search YouTube for koto tuning, right-hand technique, and beginner koto lessons.", "Verify string setup and teacher access."],
  },
  {
    name: "didgeridoo",
    aliases: ["didgeridoo"],
    resources: ["Search YouTube for didgeridoo drone, circular breathing, rhythm, and beginner lessons.", "Practice breath control safely."],
  },
  {
    name: "beatboxing",
    aliases: ["beatbox", "beatboxing"],
    resources: ["Swissbeatbox and beatbox tutorial channels for sounds, patterns, and battles.", "Record practice to check timing and clarity."],
  },
  {
    name: "bagpipes",
    aliases: ["bagpipe", "bagpipes"],
    resources: ["Search YouTube for bagpipe chanter basics, tuning, maintenance, and beginner lessons.", "Start with practice chanter before full pipes."],
  },
  {
    name: "ocarina",
    aliases: ["ocarina"],
    resources: ["Search YouTube for ocarina fingering, breath control, tuning, and beginner songs.", "Check range and tuning before buying."],
  },
];

const musicIntentFamilies = [
  {
    id: "learning",
    useCase: "Instrument learning path",
    titleSuffix: "Learning Path Builder",
    tags: ["learn", "learning", "beginner", "start", "best", "thing", "improve", "skill", "roadmap", "coach"],
    output:
      "Return the highest-leverage habit, skill roadmap, daily practice template, weekly progression, common mistakes, resource searches, progress metrics, and next action.",
  },
  {
    id: "buying",
    useCase: "Instrument buying advice",
    titleSuffix: "Buying Advisor",
    tags: ["buy", "best", "budget", "price", "model", "brand", "beginner", "intermediate", "gear", "instrument"],
    output:
      "Return clarifying questions, best type to buy, buying checklist, budget bands, models/brands to research, red flags, accessories, and final recommendation.",
  },
  {
    id: "practice",
    useCase: "Practice routine",
    titleSuffix: "Practice Routine Builder",
    tags: ["practice", "routine", "daily", "drill", "habit", "speed", "timing", "tone", "technique", "consistency"],
    output:
      "Return a diagnostic checklist, 20/30/60-minute routines, weekly structure, drills, progress metrics, and mistakes to avoid.",
  },
  {
    id: "genre",
    useCase: "Genre and style learning",
    titleSuffix: "Genre Coach",
    tags: ["genre", "style", "classical", "jazz", "rock", "blues", "hindustani", "carnatic", "pop", "bollywood", "metal", "edm", "lofi"],
    output:
      "Return genre overview, required techniques, listening references, repertoire ladder, theory concepts, practice drills, and 30-day plan.",
  },
  {
    id: "maintenance",
    useCase: "Care and maintenance",
    titleSuffix: "Care and Maintenance Guide",
    tags: ["maintenance", "care", "clean", "repair", "setup", "tuning", "strings", "reed", "skin", "service", "humidity"],
    output:
      "Return care checklist, maintenance schedule, setup checks, warning signs, what a beginner can do, what needs a technician/teacher, and buying-care mistakes.",
  },
  {
    id: "accessories",
    useCase: "Accessory and setup advice",
    titleSuffix: "Accessory Setup Advisor",
    tags: ["accessory", "accessories", "setup", "amp", "case", "stand", "tuner", "metronome", "pick", "strings", "mic", "interface"],
    output:
      "Return essential accessories, optional upgrades, budget priorities, setup steps, mistakes to avoid, and what to verify before buying.",
  },
  {
    id: "recording",
    useCase: "Recording and sound setup",
    titleSuffix: "Recording Setup Builder",
    tags: ["record", "recording", "mic", "audio", "sound", "interface", "daw", "mix", "video", "cover", "home studio"],
    output:
      "Return recording setup options, room/sound checklist, mic/interface guidance, phone setup, DAW workflow, quality checks, and next upgrades.",
  },
  {
    id: "creator",
    useCase: "Creator channel strategy",
    titleSuffix: "Creator Channel Builder",
    tags: ["youtube", "channel", "instagram", "creator", "content", "reels", "shorts", "aesthetic", "brand", "cover", "lesson"],
    output:
      "Return niche positioning, audience promise, content pillars, 20 video ideas, hook/title formulas, filming checklist, posting rhythm, and monetization path.",
  },
  {
    id: "performance",
    useCase: "Performance preparation",
    titleSuffix: "Performance Prep Coach",
    tags: ["performance", "stage", "gig", "concert", "audition", "exam", "nerves", "repertoire", "practice", "confidence"],
    output:
      "Return performance checklist, repertoire prep, stage anxiety plan, warm-up, run-through schedule, gear checklist, and day-before/day-of plan.",
  },
  {
    id: "theory",
    useCase: "Music theory and ear training",
    titleSuffix: "Theory and Ear Training Coach",
    tags: ["theory", "ear", "scale", "chord", "interval", "rhythm", "notation", "harmony", "raga", "tala"],
    output:
      "Return the theory concepts to learn, instrument-specific examples, ear-training drills, rhythm work, practice sequence, and resources.",
  },
];

const newsDomainProfiles = [
  {
    id: "politics-elections",
    title: "Politics and Election Result Explainer",
    useCase: "Politics and election analysis",
    anchorAny: ["election", "vote", "seat", "bjp", "congress", "tmc", "aap", "minister", "cm", "pm", "mla", "mp", "lok sabha", "assembly"],
    tags: ["politics", "election", "vote", "seat", "party", "campaign", "alliance", "leader", "result", "why", "reason"],
    role: "Act as a political news analyst, election-result explainer, and source-verification editor.",
    context:
      "The user is asking about a political event, party result, leader claim, vote shift, or election outcome. First verify the election/date/seat/result, then explain plausible reasons using turnout, alliances, local issues, campaign strategy, leadership, anti-incumbency, and source reliability.",
    output:
      "Return a premise check, result timeline, key actors, voter/seat context, plausible reasons, competing interpretations, source-check list, and cautious bottom line.",
    resources: ["Election Commission of India", "Reuters", "AP", "BBC", "The Hindu", "Indian Express", "credible local outlets"],
  },
  {
    id: "geopolitics-security",
    title: "Geopolitical Crisis Explainer",
    useCase: "Geopolitical and security analysis",
    anchorAny: ["war", "border", "military", "navy", "sanction", "sanctions", "iran", "china", "russia", "us", "usa", "israel", "gaza", "ukraine", "strait", "hormuz"],
    tags: ["geopolitics", "war", "security", "military", "diplomacy", "sanctions", "oil", "shipping", "reason", "why"],
    role: "Act as a geopolitical news analyst, security-risk explainer, and source-verification editor.",
    context:
      "The user is asking about a geopolitical or security development. Explain actor incentives, military/diplomatic constraints, economic stakes, regional impact, India impact where relevant, and what needs current verification.",
    output:
      "Return a plain-English brief, key actors, possible motives, escalation risks, economic impact, India angle, what is confirmed vs uncertain, and source-check list.",
    resources: ["Reuters", "AP", "BBC", "official government statements", "credible regional outlets"],
  },
  {
    id: "markets-economy",
    title: "Market and Economy News Explainer",
    useCase: "Market and economy explanation",
    anchorAny: ["stock", "stocks", "market", "sensex", "nifty", "crash", "rally", "inflation", "rbi", "fed", "gdp", "rupee", "oil price", "gold price"],
    tags: ["market", "stock", "crash", "economy", "inflation", "rate", "rbi", "fed", "nifty", "sensex", "why", "today"],
    role: "Act as a market-news explainer, macroeconomics translator, and source-verification editor.",
    context:
      "The user is asking about a market or economy move. Explain possible drivers without pretending certainty: global cues, rates, inflation, earnings, currency, commodities, policy, flows, sentiment, and what current data must be checked.",
    output:
      "Return a plain-English summary, likely drivers, what data to verify, India impact, investor cautions, source-check list, and what to watch next.",
    resources: ["RBI releases", "SEBI resources", "exchange data", "Reuters", "AP", "Bloomberg/market wires if available", "company filings"],
  },
  {
    id: "policy-law",
    title: "Policy and Law News Explainer",
    useCase: "Policy or law explanation",
    anchorAny: ["law", "bill", "court", "supreme court", "policy", "rule", "ban", "tax", "government order", "regulation"],
    tags: ["law", "policy", "court", "bill", "rule", "regulation", "tax", "ban", "rights", "impact"],
    role: "Act as a policy-news analyst, legal-context explainer, and source-verification editor.",
    context:
      "The user is asking about a law, policy, court decision, regulation, or government order. Explain what changed, who is affected, what is confirmed, what is contested, and where official text must be checked.",
    output:
      "Return a simple summary, legal/policy context, affected groups, timeline, practical impact, official-source checklist, and cautious next step.",
    resources: ["official gazettes/orders", "court websites", "government ministry releases", "Reuters", "AP", "credible legal explainers"],
  },
  {
    id: "corporate-business",
    title: "Company and Business News Explainer",
    useCase: "Company or business news analysis",
    anchorAny: ["company", "startup", "ceo", "ipo", "layoff", "merger", "acquisition", "earnings", "profit", "loss", "funding"],
    tags: ["company", "business", "startup", "earnings", "ipo", "layoff", "merger", "funding", "why", "impact"],
    role: "Act as a business-news analyst, company-story explainer, and source-verification editor.",
    context:
      "The user is asking about a company or business event. Explain the business model, financial incentives, stakeholder impact, market reaction, and what filings/statements must be checked.",
    output:
      "Return a business brief, key facts to verify, possible reasons, stakeholder impact, risks, source-check list, and practical bottom line.",
    resources: ["company filings", "official press releases", "stock exchange disclosures", "Reuters", "AP", "credible business outlets"],
  },
  {
    id: "disaster-safety",
    title: "Disaster and Safety News Explainer",
    useCase: "Disaster or safety news explanation",
    anchorAny: ["earthquake", "flood", "cyclone", "landslide", "accident", "fire", "storm", "evacuation", "warning", "alert"],
    tags: ["disaster", "safety", "alert", "warning", "damage", "risk", "evacuation", "weather", "impact"],
    role: "Act as a disaster-news explainer, public-safety information checker, and source-verification editor.",
    context:
      "The user is asking about a disaster, accident, or public-safety event. Prioritize confirmed facts, official advisories, safety steps, affected areas, misinformation risk, and what to verify now.",
    output:
      "Return confirmed vs unconfirmed facts, safety guidance, affected areas, official-source checklist, misinformation warnings, and next action.",
    resources: ["official disaster management agencies", "local authorities", "IMD where relevant", "Reuters", "AP", "credible local outlets"],
  },
  {
    id: "public-figures-celebrity",
    title: "Public Figure News Explainer",
    useCase: "Public figure or celebrity news analysis",
    anchorAny: ["actor", "actress", "celebrity", "famous", "politician", "leader", "influencer", "statement", "controversy", "viral"],
    tags: ["celebrity", "public", "figure", "controversy", "viral", "statement", "claim", "timeline", "reputation"],
    role: "Act as a public-figure news analyst, timeline builder, and misinformation-risk editor.",
    context:
      "The user is asking about a public figure, viral claim, statement, or controversy. Build a cautious timeline, separate facts from claims, explain incentives, and avoid defamatory certainty.",
    output:
      "Return a verified timeline, claims vs facts, stakeholder map, possible interpretations, reputation impact, source-check list, and cautious bottom line.",
    resources: ["official statements", "Reuters", "AP", "BBC", "credible local outlets", "platform posts only as primary claims"],
  },
];

const categoryDomainProfiles = [
  {
    category: "Auto, Cars & Bikers",
    domains: [
      { id: "car-comparison", title: "Car Comparison Decision Engine", anchorAny: ["compare", "comparison", "versus", "vs", "both cars", "car", "cars", "suv", "sedan", "hatchback", "hyundai", "i20", "i10", "scorpio", "thar"], focus: "variant, engine, safety, mileage, service, resale, EMI, family/highway/city fit, and 5-year ownership cost" },
      { id: "bike-comparison", title: "Bike Ownership Decision Engine", anchorAny: ["bike", "motorcycle", "scooter", "commute", "touring"], focus: "rider use case, comfort, mileage, service access, safety gear, resale, city/highway split, and ownership cost" },
      { id: "used-vehicle", title: "Used Vehicle Risk Audit", anchorAny: ["used", "second hand", "resale", "inspection", "odometer"], focus: "documents, accident risk, service history, ownership transfer, insurance, loan hypothecation, and negotiation" },
      { id: "auto-creator", title: "Auto Creator Production Planner", anchorAny: ["youtube", "vlog", "reel", "shorts", "cinematic", "asmr", "channel"], focus: "niche, shoot plan, safe filming, POV/rollers, sound, titles, thumbnails, and authentic automotive storytelling" },
      { id: "ev-ownership", title: "EV Ownership Reality Checker", anchorAny: ["ev", "electric", "battery", "charging", "range"], focus: "charging access, real range, battery warranty, city/highway use, resale, service network, and running cost" },
    ],
  },
  {
    category: "Search & Research",
    domains: [
      { id: "source-quality", title: "Source Quality Research Brief", anchorAny: ["source", "sources", "reliable", "credible", "evidence"], focus: "source hierarchy, bias checks, primary vs secondary evidence, citations, and confidence grading" },
      { id: "academic", title: "Academic Research Finder", anchorAny: ["paper", "papers", "study", "research", "scholar", "journal"], focus: "research question, keyword strategy, Google Scholar/PubMed-style search, inclusion criteria, and synthesis" },
      { id: "web-search", title: "Web Search Strategy Builder", anchorAny: ["find", "search", "google", "website", "where"], focus: "query operators, source types, comparison workflow, and result validation" },
      { id: "fact-check", title: "Claim Fact-Check Engine", anchorAny: ["true", "fake", "claim", "fact", "verify"], focus: "claim decomposition, evidence trail, contradiction checks, and verdict with uncertainty" },
      { id: "competitor", title: "Competitor Research Planner", anchorAny: ["competitor", "market", "brand", "industry"], focus: "competitor map, positioning, pricing, reviews, content channels, and opportunity gaps" },
    ],
  },
  {
    category: "Social Media",
    domains: [
      { id: "instagram-aesthetic", title: "Instagram Aesthetic Identity Builder", anchorAny: ["instagram", "insta", "ig", "aesthetic", "feed"], focus: "profile positioning, visual mood, bio, highlights, reels, captions, color, typography, and ethical attraction" },
      { id: "content-calendar", title: "Social Content Calendar Architect", anchorAny: ["calendar", "content", "posts", "reels", "schedule"], focus: "content pillars, 30-day plan, hooks, formats, posting rhythm, and review metrics" },
      { id: "growth-audit", title: "Social Growth Audit Engine", anchorAny: ["followers", "growth", "reach", "engagement", "analytics"], focus: "profile clarity, retention, hook quality, audience fit, analytics, and experiments" },
      { id: "personal-brand", title: "Personal Brand Positioning Coach", anchorAny: ["personal brand", "brand", "bio", "profile", "positioning"], focus: "audience promise, credibility, tone, content pillars, proof, and profile conversion" },
      { id: "dm-reply", title: "Social DM Reply Writer", anchorAny: ["dm", "reply", "comment", "message"], focus: "tone, boundaries, relationship safety, conversion, and concise response variants" },
    ],
  },
  {
    category: "Video & Streaming",
    domains: [
      { id: "shoot-plan", title: "Video Shoot Plan Director", anchorAny: ["shoot", "angle", "camera", "lighting", "broll", "b-roll"], focus: "shot list, angles, light, audio, location, safety, gear, and editing rhythm" },
      { id: "youtube-channel", title: "YouTube Channel Strategy Builder", anchorAny: ["youtube", "channel", "vlog", "creator"], focus: "niche, audience promise, video pillars, titles, thumbnails, retention, upload system, and monetization" },
      { id: "script", title: "Video Script and Hook Writer", anchorAny: ["script", "hook", "intro", "voiceover", "storyboard"], focus: "opening hook, narrative arc, retention beats, CTA, and platform-native structure" },
      { id: "watchlist", title: "Streaming Watchlist Curator", anchorAny: ["watch", "netflix", "series", "movie", "film"], focus: "mood, genre, runtime, language, platform, critic/audience fit, and spoiler-safe recommendations" },
      { id: "asmr", title: "ASMR Video Production Planner", anchorAny: ["asmr", "ambient", "sound", "pov"], focus: "sound texture, mic/phone placement, pacing, silence, close-ups, safety, and retention" },
    ],
  },
  {
    category: "Weather & Planning",
    domains: [
      { id: "trip-weather", title: "Trip Weather Window Planner", anchorAny: ["trip", "travel", "spiti", "goa", "mountain", "beach"], focus: "season, forecast checks, road/route risk, packing, daylight, buffers, and go/wait decision" },
      { id: "event-weather", title: "Outdoor Event Weather Planner", anchorAny: ["event", "wedding", "outdoor", "party", "match"], focus: "rain/heat/wind risk, backup plan, guest safety, setup timing, and contingency triggers" },
      { id: "daily-forecast", title: "Daily Weather Decision Assistant", anchorAny: ["today", "tomorrow", "forecast", "rain", "weather"], focus: "commute, clothing, umbrella, health risk, outdoor timing, and uncertainty" },
      { id: "safety-alert", title: "Weather Safety Alert Explainer", anchorAny: ["storm", "cyclone", "flood", "heatwave", "warning", "alert"], focus: "official warnings, severity, affected areas, emergency kit, and safety actions" },
      { id: "photo-light", title: "Weather and Light Shoot Planner", anchorAny: ["sunrise", "sunset", "golden hour", "photography", "shoot"], focus: "light direction, clouds, haze, rain, wind, location timing, and backup shots" },
    ],
  },
  {
    category: "Shopping & Retail",
    domains: [
      { id: "phone", title: "Phone Buying Decision Matrix", anchorAny: ["phone", "mobile", "camera", "battery", "android", "iphone"], focus: "camera, battery, performance, software updates, service, warranty, resale, and alternatives" },
      { id: "appliance", title: "Home Appliance Buying Matrix", anchorAny: ["ac", "fridge", "washing machine", "tv", "mixer"], focus: "capacity, energy use, service network, warranty, installation, hidden costs, and long-term reliability" },
      { id: "fashion", title: "Fashion Purchase Stylist", anchorAny: ["shirt", "jeans", "shoes", "outfit", "watch"], focus: "fit, occasion, fabric/material, wardrobe match, price-value, and care" },
      { id: "reviews", title: "Review and Deal Risk Checker", anchorAny: ["review", "reviews", "deal", "discount", "amazon", "flipkart"], focus: "fake-review signals, seller risk, warranty, return policy, price history, and alternatives" },
      { id: "gift", title: "Gift Buying Advisor", anchorAny: ["gift", "birthday", "anniversary", "present"], focus: "recipient taste, budget, usefulness, personalization, delivery risk, and fallback options" },
    ],
  },
  {
    category: "AI Tools",
    domains: [
      { id: "pdf-docs", title: "AI PDF and Document Workflow", anchorAny: ["pdf", "document", "summarize", "summary", "notes"], focus: "file size, citations, privacy, extraction, summary depth, Q&A, and accuracy checks" },
      { id: "image-video", title: "AI Image and Video Tool Selector", anchorAny: ["image", "photo", "video", "generate", "edit"], focus: "visual goal, style control, rights, output quality, editing workflow, and platform choice" },
      { id: "coding", title: "AI Coding Assistant Workflow", anchorAny: ["code", "coding", "app", "website", "debug", "api"], focus: "task breakdown, repo context, test strategy, model choice, and safe code review" },
      { id: "automation", title: "AI Automation System Designer", anchorAny: ["automate", "workflow", "agent", "zapier", "make"], focus: "trigger, data flow, tool choice, failure handling, human review, and ROI" },
      { id: "ads-marketing", title: "AI Ads and Marketing Tool Selector", anchorAny: ["ads", "ad", "advertising", "marketing", "campaign", "leads"], focus: "business goal, city/local market, budget, channel fit, creative workflow, landing page, tracking, and policy checks" },
      { id: "prompting", title: "AI Prompt Improvement Coach", anchorAny: ["prompt", "chatgpt", "gemini", "claude", "perplexity"], focus: "role, context, constraints, output format, examples, evaluation, and model-specific tuning" },
    ],
  },
  {
    category: "Email & Communication",
    domains: [
      { id: "follow-up", title: "Follow-Up Message Writer", anchorAny: ["follow up", "follow-up", "reminder", "payment"], focus: "polite urgency, relationship safety, clarity, CTA, and escalation timing" },
      { id: "complaint", title: "Complaint and Escalation Writer", anchorAny: ["complaint", "escalate", "refund", "issue", "service"], focus: "facts, timeline, evidence, firm tone, remedy requested, and escalation path" },
      { id: "negotiation", title: "Negotiation Message Coach", anchorAny: ["negotiate", "salary", "offer", "discount", "deal"], focus: "positioning, ask, tradeoffs, fallback, tone, and next message" },
      { id: "apology", title: "Apology and Repair Message Writer", anchorAny: ["sorry", "apology", "apologize", "mistake"], focus: "ownership, repair, boundary, sincerity, and avoiding overexplaining" },
      { id: "professional-reply", title: "Professional Reply Polisher", anchorAny: ["reply", "email", "message", "whatsapp"], focus: "tone, brevity, clarity, recipient relationship, and variants" },
    ],
  },
  {
    category: "Translation & Language",
    domains: [
      { id: "premium-english", title: "Premium English Rewrite Editor", anchorAny: ["premium english", "polished", "rewrite", "translate", "english"], focus: "meaning, tone, audience, natural phrasing, cultural nuance, and variants" },
      { id: "hindi-english", title: "Hindi-Hinglish Translation Editor", anchorAny: ["hindi", "hinglish", "translate", "meaning"], focus: "literal meaning, emotional tone, audience, idioms, and natural English/Hindi variants" },
      { id: "localization", title: "Localization and Market Copy Editor", anchorAny: ["localize", "local", "market", "copy", "ad"], focus: "culture, platform, audience, offer, tone, and market-safe wording" },
      { id: "language-learning", title: "Language Learning Coach", anchorAny: ["learn english", "vocabulary", "grammar", "fluency", "speaking"], focus: "level, daily practice, mistakes, speaking drills, reading/listening plan, and feedback" },
      { id: "tone-change", title: "Tone Rewrite Specialist", anchorAny: ["formal", "casual", "romantic", "professional", "premium"], focus: "same meaning, different tones, audience fit, and word choice" },
    ],
  },
  {
    category: "Sports",
    domains: [
      { id: "player-comparison", title: "Player Comparison Analyst", anchorAny: ["compare", "vs", "virat", "rohit", "messi", "ronaldo"], focus: "era, format, role, stats to verify, context, strengths, limitations, and fair comparison" },
      { id: "match-preview", title: "Match Preview and Tactics Analyst", anchorAny: ["match", "preview", "today", "lineup", "playing xi"], focus: "team form, tactics, injuries, conditions, matchup edges, and source verification" },
      { id: "fantasy", title: "Fantasy Sports Decision Coach", anchorAny: ["fantasy", "dream11", "captain", "vice captain"], focus: "risk, roles, pitch/weather, recent form, ownership, and safe decision framework" },
      { id: "live-score", title: "Live Score Context Explainer", anchorAny: ["score", "live", "points table", "standings"], focus: "match state, table impact, qualification scenarios, and what changed" },
      { id: "rules", title: "Sports Rules Explainer", anchorAny: ["rule", "rules", "offside", "lbw", "drs"], focus: "simple explanation, examples, edge cases, and common confusion" },
    ],
  },
  {
    category: "Travel & Transport",
    domains: [
      { id: "itinerary", title: "Trip Itinerary Builder", anchorAny: ["trip", "itinerary", "goa", "manali", "days"], focus: "route, budget, stays, food, experiences, safety, buffers, and day-by-day plan" },
      { id: "flights", title: "Flight Booking Strategy Advisor", anchorAny: ["flight", "flights", "ticket", "airport"], focus: "timing, baggage, layovers, fare rules, airport transfer, and verification" },
      { id: "hotels", title: "Hotel and Stay Decision Matrix", anchorAny: ["hotel", "stay", "hostel", "airbnb", "room"], focus: "location, safety, reviews, cancellation, transport, hidden fees, and fit" },
      { id: "visa-docs", title: "Travel Documents Checklist", anchorAny: ["visa", "passport", "permit", "documents"], focus: "official requirements, timeline, documents, fees to verify, and risk checks" },
      { id: "commute", title: "Transport and Commute Planner", anchorAny: ["train", "bus", "cab", "metro", "route"], focus: "time, cost, reliability, luggage, safety, backup route, and live checks" },
    ],
  },
  {
    category: "Gaming",
    domains: [
      { id: "game-choice", title: "Game Recommendation Engine", anchorAny: ["game", "games", "roblox", "minecraft", "poki"], focus: "age, platform, genre, safety, cost, multiplayer, and replay value" },
      { id: "parental-safety", title: "Gaming Safety and Parental Control Guide", anchorAny: ["kids", "child", "safe", "parent", "parental"], focus: "privacy, chat, spending, age rating, controls, and family rules" },
      { id: "strategy-build", title: "Gameplay Strategy Coach", anchorAny: ["build", "strategy", "level", "rank", "tips"], focus: "role, mechanics, progression, mistakes, practice, and fair-play constraints" },
      { id: "setup", title: "Gaming Setup Advisor", anchorAny: ["pc", "console", "controller", "setup", "fps"], focus: "budget, performance, display, controls, comfort, and upgrade path" },
      { id: "monetization-risk", title: "Game Spending Risk Checker", anchorAny: ["skin", "coins", "robux", "in app", "loot"], focus: "spend controls, value, scams, account safety, and alternatives" },
    ],
  },
  {
    category: "Digital Tools",
    domains: [
      {
        id: "phone-camera-video",
        title: "Phone Camera and Video Comparator",
        anchorAny: ["phone", "mobile", "iphone", "samsung", "ultra", "pro max", "photography", "video shooting", "camera"],
        focus: "phone camera systems, video workflow, stabilization, lenses, low light, color science, storage, editing ecosystem, creator use case, India price/service, and current spec verification",
        output:
          "Return a camera/video comparison table, creator-use recommendation, photo vs video winner, low-light/stabilization/lens analysis, editing ecosystem tradeoffs, India price/service checks, what specs/reviews must be verified, and a final pick by user type.",
        resources: [
          "Apple and Samsung official product pages for current specs.",
          "Recent India price/service/warranty pages.",
          "Current camera comparisons from credible reviewers with sample photos and video tests.",
          "Creator workflow checks: storage, accessories, editing apps, stabilization, microphone support, and transfer speed.",
        ],
      },
      { id: "canva", title: "Canva Design Director", anchorAny: ["canva", "template", "poster", "menu", "design"], focus: "format, audience, layout, typography, colors, brand fit, and export checks" },
      { id: "speed-test", title: "Internet Speed Diagnostic Coach", anchorAny: ["speed", "internet", "wifi", "broadband", "ping"], focus: "speed test method, router, ISP, device, signal, and escalation checklist" },
      { id: "calculator", title: "Calculator and Estimate Builder", anchorAny: ["calculator", "calculate", "estimate", "emi", "percentage"], focus: "inputs, formula, assumptions, output table, and error checks" },
      { id: "software-choice", title: "Software Selection Matrix", anchorAny: ["software", "tool", "app", "alternative"], focus: "use case, pricing, integrations, learning curve, support, and migration" },
      { id: "template-workflow", title: "Template Workflow Builder", anchorAny: ["template", "workflow", "notion", "sheet"], focus: "repeatable process, fields, statuses, automations, and quality checks" },
    ],
  },
  {
    category: "Maps & Local",
    domains: [
      { id: "route", title: "Route and Traffic Planner", anchorAny: ["route", "traffic", "airport", "commute", "drive"], focus: "origin, destination, timing, live traffic, alternatives, buffer, and safety" },
      { id: "nearby", title: "Nearby Place Finder", anchorAny: ["near me", "nearby", "restaurant", "cafe", "shop"], focus: "intent, distance, rating quality, hours, reviews, photos, and value" },
      { id: "local-business", title: "Local Business Review Checker", anchorAny: ["review", "reviews", "rating", "local business"], focus: "review authenticity, recency, service risk, price signals, and call/checklist" },
      { id: "public-transport", title: "Public Transport Planner", anchorAny: ["metro", "bus", "train", "station"], focus: "route options, walking, transfers, fare checks, last-mile, and delays" },
      { id: "safety-local", title: "Local Safety Planner", anchorAny: ["safe", "safety", "night", "area"], focus: "time, area, transport, crowds, lighting, emergency options, and verification" },
    ],
  },
  {
    category: "Jobs & Education",
    domains: [
      { id: "interview", title: "Role-Specific Interview Coach", anchorAny: ["interview", "hiring", "round", "hr"], focus: "role fit, likely questions, STAR stories, project explanation, gaps, and mock plan" },
      { id: "resume", title: "Resume and LinkedIn Optimizer", anchorAny: ["resume", "cv", "linkedin", "profile"], focus: "role targeting, bullets, keywords, proof, projects, and ATS readability" },
      { id: "career-switch", title: "Career Switch Roadmap Builder", anchorAny: ["career", "switch", "job change", "role"], focus: "target role, skill gaps, projects, portfolio, timeline, and networking" },
      { id: "coursework", title: "Coursework and Study Planner", anchorAny: ["coursework", "assignment", "exam", "study"], focus: "topic breakdown, schedule, resources, practice, and academic integrity" },
      { id: "skill-plan", title: "Skill Learning Roadmap", anchorAny: ["learn", "skill", "roadmap", "course"], focus: "current level, target outcome, curriculum, projects, practice, and proof of work" },
    ],
  },
  {
    category: "Food & Drink",
    domains: [
      { id: "recipe", title: "Recipe and Cooking Planner", anchorAny: ["recipe", "cook", "dinner", "lunch", "breakfast"], focus: "ingredients, time, taste, equipment, substitutions, and step-by-step cooking" },
      { id: "restaurant", title: "Restaurant Decision Advisor", anchorAny: ["restaurant", "cafe", "near me", "eat"], focus: "occasion, cuisine, budget, reviews, distance, dietary needs, and booking" },
      { id: "meal-plan", title: "Meal Plan Builder", anchorAny: ["meal plan", "diet", "protein", "vegetarian", "grocery"], focus: "nutrition goal, Indian meals, budget, prep time, grocery list, and swaps" },
      { id: "budget-food", title: "Budget Food Planner", anchorAny: ["cheap", "budget", "affordable", "monthly food"], focus: "cost per meal, staples, batch cooking, nutrition, and waste reduction" },
      { id: "drinks", title: "Drink and Beverage Planner", anchorAny: ["drink", "coffee", "tea", "cocktail", "mocktail"], focus: "taste, ingredients, equipment, presentation, and occasion fit" },
    ],
  },
  {
    category: "Health & Fitness",
    domains: [
      { id: "weight-loss", title: "Weight-Loss Habit Planner", anchorAny: ["weight loss", "fat loss", "lose weight", "belly"], focus: "safe habits, food routine, workouts, sleep, tracking, medical caveats, and weekly review" },
      { id: "workout", title: "Workout Routine Builder", anchorAny: ["workout", "gym", "exercise", "strength", "cardio"], focus: "goal, equipment, time, progression, form, recovery, and injury prevention" },
      { id: "nutrition", title: "Nutrition Structure Coach", anchorAny: ["nutrition", "diet", "protein", "calorie", "vegetarian"], focus: "meal structure, protein/fiber, Indian food, labels, consistency, and medical caveats" },
      { id: "habit", title: "Health Habit Tracker Designer", anchorAny: ["habit", "routine", "sleep", "steps", "water"], focus: "small habits, tracking, triggers, friction, review, and realistic progression" },
      { id: "fitness-safety", title: "Fitness Safety Checker", anchorAny: ["pain", "injury", "medical", "safe"], focus: "red flags, doctor/physio review, safer alternatives, and recovery-friendly planning" },
    ],
  },
  {
    category: "Finance & Investing",
    domains: [
      { id: "budget", title: "Monthly Budget and Savings Planner", anchorAny: ["budget", "salary", "saving", "expense"], focus: "income, fixed/variable expenses, debt, emergency fund, goals, and monthly allocation" },
      { id: "investing", title: "Investment Decision Framework", anchorAny: ["invest", "investment", "sip", "mutual fund", "stock", "gold"], focus: "goal, horizon, risk, asset allocation, liquidity, tax verification, and product fit" },
      { id: "debt", title: "Debt and EMI Payoff Planner", anchorAny: ["debt", "loan", "emi", "credit card"], focus: "interest, cash flow, payoff order, emergency fund, refinancing, and risk" },
      { id: "tax", title: "Tax Planning Checklist", anchorAny: ["tax", "itr", "deduction", "80c"], focus: "official rules, documents, deadline, deduction fit, and CA review triggers" },
      { id: "market-news", title: "Finance News Impact Explainer", anchorAny: ["market", "crash", "rbi", "inflation", "rate"], focus: "current data checks, portfolio impact, risk control, and what not to do impulsively" },
    ],
  },
];

const categoryQuestionModes = [
  {
    id: "decision",
    label: "Decision support",
    title: "Decision Prompt",
    tags: ["decide", "choose", "best", "recommend", "option", "should", "which"],
    output: "Return decision criteria, weighted tradeoffs, best option by user type, risks, and a final recommendation.",
  },
  {
    id: "comparison",
    label: "Comparison",
    title: "Comparison Prompt",
    tags: ["compare", "comparison", "versus", "vs", "difference", "better"],
    output: "Return a comparison table, key differences, who each option is for, hidden tradeoffs, and final pick.",
  },
  {
    id: "buying",
    label: "Buying guidance",
    title: "Buying Prompt",
    tags: ["buy", "purchase", "price", "budget", "model", "brand", "deal", "warranty"],
    output: "Return buying criteria, budget bands, shortlist logic, red flags, verification checklist, and final buy/no-buy advice.",
  },
  {
    id: "learning",
    label: "Learning path",
    title: "Learning Prompt",
    tags: ["learn", "learning", "beginner", "start", "course", "study", "skill"],
    output: "Return current-level diagnosis, learning roadmap, practice plan, resources, milestones, and next action.",
  },
  {
    id: "strategy",
    label: "Strategy",
    title: "Strategy Prompt",
    tags: ["strategy", "plan", "roadmap", "growth", "system", "framework"],
    output: "Return strategic options, priorities, 30-day plan, metrics, risks, and execution sequence.",
  },
  {
    id: "audit",
    label: "Audit",
    title: "Audit Prompt",
    tags: ["audit", "review", "score", "fix", "improve", "diagnose"],
    output: "Return a scorecard, bottlenecks, priority fixes, examples, and a before/after improvement plan.",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    title: "Troubleshooting Prompt",
    tags: ["problem", "issue", "not working", "fix", "error", "stuck", "why"],
    output: "Return likely causes, diagnostic steps, safe fixes, escalation triggers, and prevention plan.",
  },
  {
    id: "checklist",
    label: "Checklist",
    title: "Checklist Prompt",
    tags: ["checklist", "steps", "process", "before", "after", "verify"],
    output: "Return a staged checklist, must-check items, optional checks, red flags, and completion criteria.",
  },
  {
    id: "research",
    label: "Research brief",
    title: "Research Prompt",
    tags: ["research", "sources", "find", "latest", "facts", "evidence", "data"],
    output: "Return search plan, source-quality rules, key questions, synthesis format, and what must be verified.",
  },
  {
    id: "content",
    label: "Content ideas",
    title: "Content Prompt",
    tags: ["content", "ideas", "posts", "reels", "youtube", "shorts", "calendar"],
    output: "Return positioning, content pillars, idea bank, hooks, format mix, production checklist, and posting plan.",
  },
  {
    id: "script",
    label: "Script writing",
    title: "Script Prompt",
    tags: ["script", "caption", "email", "message", "copy", "hook", "rewrite"],
    output: "Return audience, tone, structure, draft copy, variants, and editing notes.",
  },
  {
    id: "budget",
    label: "Budget planning",
    title: "Budget Prompt",
    tags: ["budget", "money", "cost", "cheap", "premium", "affordable", "emi"],
    output: "Return cost drivers, budget bands, priority spending, avoidable costs, and value recommendation.",
  },
  {
    id: "risk",
    label: "Risk analysis",
    title: "Risk Prompt",
    tags: ["risk", "safe", "danger", "red flag", "legal", "privacy", "avoid"],
    output: "Return risk map, severity, warning signs, safer alternatives, and decision rule.",
  },
  {
    id: "resources",
    label: "Resources",
    title: "Resource Prompt",
    tags: ["resources", "books", "courses", "youtube", "links", "tools", "pdf"],
    output: "Return resource types to search, quality filters, starter list, practice/application plan, and verification notes.",
  },
  {
    id: "local",
    label: "India/local context",
    title: "Local Context Prompt",
    tags: ["india", "indian", "near me", "local", "city", "market", "availability"],
    output: "Return India-aware considerations, local verification steps, alternatives, constraints, and final recommendation.",
  },
  {
    id: "automation",
    label: "Workflow automation",
    title: "Automation Prompt",
    tags: ["automate", "workflow", "template", "tool", "system", "repeat"],
    output: "Return repeatable workflow, tools, template, quality checks, failure points, and maintenance plan.",
  },
  {
    id: "negotiation",
    label: "Negotiation",
    title: "Negotiation Prompt",
    tags: ["negotiate", "deal", "discount", "salary", "offer", "convince"],
    output: "Return negotiation position, script, fallback options, boundaries, and next message.",
  },
  {
    id: "personalized",
    label: "Personalized recommendation",
    title: "Personalized Prompt",
    tags: ["personalized", "for me", "my situation", "custom", "tailor", "recommend"],
    output: "Return focused clarifying questions, assumptions, tailored options, and a recommendation based on user constraints.",
  },
  {
    id: "beginner",
    label: "Beginner guide",
    title: "Beginner Prompt",
    tags: ["beginner", "new", "first", "start", "basics", "simple"],
    output: "Return simplest starting path, first mistakes to avoid, starter checklist, and first 7-day plan.",
  },
  {
    id: "advanced",
    label: "Advanced optimization",
    title: "Advanced Prompt",
    tags: ["advanced", "optimize", "expert", "scale", "pro", "deep"],
    output: "Return advanced diagnosis, leverage points, experiments, metrics, and optimization plan.",
  },
  {
    id: "timeline",
    label: "Timeline planning",
    title: "Timeline Prompt",
    tags: ["timeline", "schedule", "30 day", "weekly", "daily", "deadline"],
    output: "Return timeline, milestones, daily/weekly actions, dependencies, and review checkpoints.",
  },
  {
    id: "template",
    label: "Template creation",
    title: "Template Prompt",
    tags: ["template", "format", "structure", "outline", "sample", "example"],
    output: "Return reusable template, filled example, customization rules, and quality checklist.",
  },
  {
    id: "explanation",
    label: "Clear explanation",
    title: "Explanation Prompt",
    tags: ["explain", "understand", "meaning", "how", "why", "simple"],
    output: "Return simple explanation, examples, mental model, common confusion, and practical application.",
  },
  {
    id: "trend",
    label: "Trend and current-source check",
    title: "Trend Prompt",
    tags: ["trend", "latest", "current", "new", "popular", "viral", "ranking"],
    output: "Return what to check in current sources, trend signals, stale-information risks, and decision guidance.",
  },
  {
    id: "quality",
    label: "Quality improvement",
    title: "Quality Prompt",
    tags: ["quality", "better", "premium", "aesthetic", "professional", "authentic"],
    output: "Return quality criteria, examples, improvement plan, review checklist, and next upgrade.",
  },
];

const userContextLenses = [
  { id: "general", label: "Everyday User", tags: [], guidance: "an everyday user with unknown constraints; infer only what the request clearly says and ask focused questions for missing details" },
  { id: "beginner", label: "Beginner", tags: ["beginner", "new", "first"], guidance: "a beginner who needs simple steps and low confusion" },
  { id: "intermediate", label: "Intermediate", tags: ["intermediate", "some experience"], guidance: "an intermediate user who needs sharper tradeoffs and next-level improvement" },
  { id: "advanced", label: "Advanced", tags: ["advanced", "expert", "pro"], guidance: "an advanced user who needs depth, constraints, and optimization" },
  { id: "student", label: "Student", tags: ["student", "college", "school"], guidance: "a student with limited budget, time, and experience" },
  { id: "professional", label: "Working Professional", tags: ["job", "office", "working professional"], guidance: "a working professional balancing time, quality, and practical outcomes" },
  { id: "business", label: "Small Business", tags: ["business", "startup", "shop", "client"], guidance: "a small business or startup user who needs ROI and repeatable process" },
  { id: "creator", label: "Creator", tags: ["creator", "youtube", "instagram", "content"], guidance: "a creator who needs audience fit, authenticity, and repeatable publishing" },
  { id: "family", label: "Family", tags: ["family", "parents", "kids", "home"], guidance: "a family decision with safety, budget, and long-term usability concerns" },
  { id: "budget", label: "Budget-Sensitive", tags: ["cheap", "budget", "affordable", "low cost"], guidance: "a budget-sensitive user who needs value and must avoid waste" },
  { id: "premium", label: "Premium", tags: ["high end", "luxury buyer"], guidance: "a premium user who cares about quality, longevity, and experience" },
  { id: "metro", label: "India Metro", tags: ["delhi", "mumbai", "bangalore", "hyderabad", "pune", "metro"], guidance: "an Indian metro-city user with more options but higher noise and price variation" },
  { id: "tier-two", label: "Tier-2 India", tags: ["tier 2", "small city", "local"], guidance: "an Indian tier-2 or smaller-city user where availability and service access matter" },
  { id: "urgent", label: "Urgent", tags: ["urgent", "today", "quick", "fast"], guidance: "an urgent situation where speed matters but bad shortcuts must be avoided" },
  { id: "long-term", label: "Long-Term", tags: ["long term", "future", "years"], guidance: "a long-term decision where durability, habit, and upgrade path matter" },
  { id: "weekend", label: "Weekend User", tags: ["weekend", "hobby", "casual"], guidance: "a casual or weekend user who needs enjoyable, realistic action" },
  { id: "daily", label: "Daily Use", tags: ["daily", "everyday", "routine"], guidance: "a daily-use situation where friction, consistency, and maintenance matter" },
  { id: "online", label: "Online-First", tags: ["online", "app", "website", "remote"], guidance: "an online-first user who needs tools, verification, and digital workflow" },
  { id: "offline", label: "Offline/Local", tags: ["offline", "local", "near me", "store"], guidance: "an offline/local user who needs in-person checks and local options" },
  { id: "safety", label: "Safety-Critical", tags: ["safe", "risk", "legal", "privacy"], guidance: "a safety-critical situation where risk control and verification come first" },
  { id: "growth", label: "Growth-Focused", tags: ["growth", "scale", "viral", "followers"], guidance: "a growth-focused user who needs experiments, metrics, and ethical scaling" },
];

const generatedMusicInstrumentPromptLibrary = musicInstruments.flatMap((instrument) =>
  musicIntentFamilies.map((family) => ({
    id: `music-${instrument.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${family.id}`,
    category: "Music",
    useCase: family.useCase,
    title: `${instrument.name.replace(/\b\w/g, (letter) => letter.toUpperCase())} ${family.titleSuffix}`,
    instrument: instrument.name,
    intentFamily: family.id,
    tags: [...instrument.aliases, ...family.tags, "music", "instrument"].flatMap(tokenize),
    role: `Act as a ${instrument.name} ${family.useCase.toLowerCase()} coach, India-aware music mentor, and practical gear/practice advisor.`,
    context: `The user is asking about ${instrument.name}. Infer whether they need buying, learning, practice, genre, care, recording, creator, performance, or theory help from their wording. Give advice specific to ${instrument.name}, skill level, budget, genre, practice time, and available resources.`,
    output: family.output,
    example: `Example input: Help me with ${instrument.name} ${family.useCase.toLowerCase()} in a practical way.`,
    resources: instrument.resources,
    guardrails:
      "Do not invent current prices, model specs, teacher rankings, or availability. Recommend checking official brand pages, recent reviews, teacher feedback, and safe technique.",
    qualityScore: 91,
    conversionScore: 86,
  })),
);

const generatedNewsDomainLibrary = newsDomainProfiles.map((domain) => ({
  id: `news-${domain.id}`,
  category: "News & Media",
  useCase: domain.useCase,
  title: domain.title,
  anchorAny: domain.anchorAny,
  anchorBoost: 75,
  tags: domain.tags,
  role: domain.role,
  context: domain.context,
  output: domain.output,
  example: `Example input: Help me understand this ${domain.useCase.toLowerCase()} story without assuming unverified facts.`,
  resources: domain.resources,
  guardrails:
    "Do not invent current facts, quotes, dates, legal claims, election results, market data, casualty figures, or official positions. Separate confirmed facts from claims and analysis.",
  qualityScore: 94,
  conversionScore: 90,
  priorityScore: 50,
}));

const generatedCategoryDomainLibrary = categoryDomainProfiles.flatMap((profile) =>
  profile.domains.map((domain) => ({
    id: `${profile.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${domain.id}`,
    category: profile.category,
    useCase: domain.title,
    title: domain.title,
    anchorAny: domain.anchorAny,
    anchorBoost: 72,
    tags: [...domain.anchorAny, ...tokenize(domain.focus), ...tokenize(profile.category)],
    role: `Act as a ${domain.title.toLowerCase()}, India-aware practical advisor, and source-verification editor.`,
    context: `The user is asking about ${profile.category}. Personalize around ${domain.focus}. Infer only what the request clearly says; ask focused questions for missing details that materially change the answer.`,
    output:
      domain.output ||
      "Return a tailored brief, clarifying questions only if needed, decision criteria, practical steps, tradeoffs, red flags, resources to verify, and a clear next action.",
    example: `Example input: Help me with ${profile.category.toLowerCase()} using a ${domain.title.toLowerCase()} approach.`,
    resources: domain.resources || categoryProfiles.find((item) => item.category === profile.category)?.resources || ["official sources", "credible recent reviews", "current local information"],
    guardrails:
      "Do not invent current facts, prices, rankings, availability, laws, platform rules, specs, or medical/financial certainty. Tell the user what must be verified.",
    qualityScore: 92,
    conversionScore: 88,
    priorityScore: 45,
  })),
);

const generatedCategoryQuestionLibrary = categoryProfiles.flatMap((profile) =>
  categoryQuestionModes.flatMap((mode) =>
    userContextLenses.map((lens) => ({
      id: `${profile.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${mode.id}-${lens.id}`,
      category: profile.category,
      useCase: lens.id === "general" ? mode.label : `${mode.label} for ${lens.label}`,
      title: lens.id === "general" ? `${profile.category} ${mode.title}` : `${profile.category} ${mode.title} for ${lens.label}`,
      modeId: mode.id,
      lensId: lens.id,
      lensTags: lens.tags,
      tags: [...mode.tags, ...tokenize(profile.category), ...tokenize(profile.focus)],
      role:
        lens.id === "general"
          ? `Act as a ${profile.expert} specializing in ${mode.label.toLowerCase()} for everyday users.`
          : `Act as a ${profile.expert} specializing in ${mode.label.toLowerCase()} for ${lens.label.toLowerCase()} users.`,
      context: `The user needs ${mode.label.toLowerCase()} in ${profile.category}. Tailor the answer for ${lens.guidance}. Focus on ${profile.focus}.`,
      output: mode.output,
      example:
        lens.id === "general"
          ? `Example input: Help me with ${profile.category.toLowerCase()} ${mode.label.toLowerCase()} in a practical way.`
          : `Example input: Help me with ${profile.category.toLowerCase()} ${mode.label.toLowerCase()} for a ${lens.label.toLowerCase()} situation.`,
      resources: profile.resources,
      guardrails:
        "Do not invent current facts, prices, rankings, availability, laws, or platform rules. Ask the user to verify time-sensitive details with current official or high-quality sources.",
      qualityScore: 84,
      conversionScore: 80,
    })),
  ),
);

const generatedPromptLibrary = categoryProfiles.flatMap((profile) => [
  {
    id: `${profile.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-advisor`,
    category: profile.category,
    useCase: "Smart category advisor",
    title: `${profile.category} Smart Prompt Builder`,
    tags: ["best", "help", "guide", "plan", "recommend", "compare", "strategy", "ideas", ...tokenize(profile.focus)],
    role: `Act as a ${profile.expert}.`,
    context: `The user needs category-specific help for ${profile.category}. Focus on ${profile.focus}.`,
    output:
      "Return clarifying questions if needed, a tailored strategy, practical steps, examples, tools/resources to check, risks, and a clear next action.",
    example: `Example input: Help me with a ${profile.category.toLowerCase()} decision and make it practical for my situation.`,
    resources: profile.resources,
    guardrails: "Keep advice honest, legal, consent-based, current-source-aware, and practical. Ask the user to verify time-sensitive facts.",
    qualityScore: 88,
    conversionScore: 82,
  },
  {
    id: `${profile.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-creator`,
    category: profile.category,
    useCase: "Creator and content strategy",
    title: `${profile.category} Creator Strategy Builder`,
    tags: ["youtube", "channel", "instagram", "content", "creator", "aesthetic", "authentic", "brand", "reels", "shorts", "calendar", ...tokenize(profile.focus)],
    anchorAny: ["youtube", "channel", "vlog", "instagram", "content", "creator", "reels", "shorts", "calendar"],
    anchorBoost: 70,
    role: `Act as a ${profile.category} creator strategist and audience-positioning expert.`,
    context: `The user wants to create content in ${profile.category}. Focus on authentic positioning, audience promise, visual identity, content pillars, hooks, formats, platform fit, and repeatable production.`,
    output:
      "Return niche positioning, audience persona, aesthetic direction, content pillars, 15 content ideas, hook/title formulas, format mix, production checklist, posting rhythm, and a 30-day launch plan.",
    example: `Example input: I want to build an authentic aesthetic ${profile.category.toLowerCase()} YouTube channel.`,
    resources: ["YouTube Creator Academy", "platform creator resources", ...profile.resources],
    guardrails: "Avoid fake claims, copied content, unsafe advice, spam growth tactics, and misleading hooks.",
    qualityScore: 90,
    conversionScore: 84,
  },
]);

const promptLibrary = [
  ...specificPromptLibrary,
  ...generatedMusicInstrumentPromptLibrary,
  ...generatedNewsDomainLibrary,
  ...generatedCategoryDomainLibrary,
  ...generatedCategoryQuestionLibrary,
  ...generatedPromptLibrary,
];

const promptTokenCache = new WeakMap();

function tokenize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function getPromptTokens(prompt) {
  const cached = promptTokenCache.get(prompt);
  if (cached) return cached;

  const tokens = new Set([...prompt.tags, prompt.title, prompt.useCase, prompt.context].flatMap(tokenize));
  promptTokenCache.set(prompt, tokens);
  return tokens;
}

function normalizeText(text = "") {
  return ` ${tokenize(text).join(" ")} `;
}

function phraseMatches(normalizedHaystack, phrase) {
  const normalizedNeedle = tokenize(phrase).join(" ");
  return normalizedNeedle ? normalizedHaystack.includes(` ${normalizedNeedle} `) : false;
}

function detectMusicInstruments(intent = "") {
  const normalizedIntent = normalizeText(intent);
  return musicInstruments
    .filter((instrument) => instrument.aliases.some((alias) => phraseMatches(normalizedIntent, alias)))
    .map((instrument) => instrument.name);
}

function detectMusicIntentFamily(intent = "") {
  const tokens = new Set(tokenize(intent));
  const normalizedIntent = normalizeText(intent);

  if (["buy", "purchase", "price", "budget", "model", "brand", "brands", "gear"].some((token) => tokens.has(token))) return "buying";
  if (["record", "recording", "mic", "microphone", "audio", "interface", "daw", "mix", "studio"].some((token) => tokens.has(token))) return "recording";
  if (["youtube", "channel", "instagram", "creator", "content", "reels", "shorts", "aesthetic", "brand"].some((token) => tokens.has(token))) return "creator";
  if (["practice", "routine", "daily", "drill", "timing", "speed", "consistency"].some((token) => tokens.has(token))) return "practice";
  if (["maintenance", "care", "clean", "repair", "setup", "tuning", "strings", "reed", "service", "humidity"].some((token) => tokens.has(token))) {
    return "maintenance";
  }
  if (["accessory", "accessories", "amp", "case", "stand", "tuner", "metronome", "pick"].some((token) => tokens.has(token))) return "accessories";
  if (["performance", "stage", "gig", "concert", "audition", "exam", "nerves"].some((token) => tokens.has(token))) return "performance";
  if (["theory", "ear", "scale", "scales", "chord", "chords", "interval", "rhythm", "notation", "harmony", "raga", "tala"].some((token) => tokens.has(token))) {
    return "theory";
  }
  if (["classical", "jazz", "rock", "blues", "hindustani", "carnatic", "pop", "bollywood", "metal", "edm", "lofi"].some((token) => tokens.has(token))) {
    const learningLanguage = ["learn", "learning", "start", "beginner", "improve"].some((token) => tokens.has(token));
    const buyingLanguage = tokens.has("best") && !learningLanguage;
    if (buyingLanguage && detectMusicInstruments(intent).length > 0) return "buying";
    return "genre";
  }
  if (phraseMatches(normalizedIntent, "best thing") || ["learn", "learning", "start", "beginner", "improve", "skill"].some((token) => tokens.has(token))) return "learning";
  if (tokens.has("best") && detectMusicInstruments(intent).length > 0) return "buying";
  return "";
}

function detectCategoryQuestionMode(intent = "") {
  const tokens = new Set(tokenize(intent));
  const normalizedIntent = normalizeText(intent);
  let bestMode = "";
  let bestScore = 0;

  for (const mode of categoryQuestionModes) {
    const score = mode.tags.reduce((total, tag) => {
      const tagTokens = tokenize(tag);
      if (tagTokens.length > 1) return total + (phraseMatches(normalizedIntent, tag) ? 3 : 0);
      return total + (tokens.has(tag) ? 2 : 0);
    }, 0);

    if (score > bestScore) {
      bestMode = mode.id;
      bestScore = score;
    }
  }

  return bestMode;
}

function detectUserContextLens(intent = "") {
  const tokens = new Set(tokenize(intent));
  const normalizedIntent = normalizeText(intent);

  for (const lens of userContextLenses) {
    if (lens.id === "general") continue;
    const matched = lens.tags.some((tag) => {
      const tagTokens = tokenize(tag);
      if (tagTokens.length > 1) return phraseMatches(normalizedIntent, tag);
      return tokens.has(tag);
    });

    if (matched) return lens.id;
  }

  return "";
}

function buildScoreContext(intent = "") {
  return {
    intentTokens: new Set(tokenize(intent)),
    normalizedIntent: normalizeText(intent),
    detectedMode: detectCategoryQuestionMode(intent),
    detectedLens: detectUserContextLens(intent),
    detectedMusicInstruments: detectMusicInstruments(intent),
    detectedMusicFamily: detectMusicIntentFamily(intent),
  };
}

function scoreAnchorMatch(prompt, intent = "", context = null) {
  if (!prompt.anchorAny?.length) return 0;

  const normalizedIntent = context?.normalizedIntent || normalizeText(intent);
  const hasAnchor = prompt.anchorAny.some((anchor) => phraseMatches(normalizedIntent, anchor));

  if (!hasAnchor) return -240;
  return prompt.anchorBoost || 70;
}

function scorePrompt(prompt, category, useCase, intent, context = null) {
  const intentTokens = context?.intentTokens || new Set(tokenize(intent));
  const promptTokens = getPromptTokens(prompt);
  const tagHits = [...intentTokens].filter((token) => promptTokens.has(token)).length;
  const categoryScore = prompt.category === category ? 45 : prompt.category === "Any" ? 10 : 0;
  const useCaseScore = useCase && prompt.useCase === useCase ? 25 : 0;
  const intentScore = Math.min(tagHits * 6, 36);
  const qualityScore = prompt.qualityScore * 0.14;
  const conversionScore = prompt.conversionScore * 0.08;
  let musicScore = 0;
  let categoryRoutingScore = 0;
  const anchorScore = scoreAnchorMatch(prompt, intent, context);

  if (category === "Music") {
    const detectedInstruments = context?.detectedMusicInstruments || detectMusicInstruments(intent);
    const detectedFamily = context?.detectedMusicFamily || detectMusicIntentFamily(intent);

    if (detectedInstruments.length > 0) {
      if (prompt.instrument && detectedInstruments.includes(prompt.instrument)) {
        musicScore += 80;
      } else if (prompt.instrument) {
        musicScore -= 80;
      } else {
        musicScore -= 12;
      }
    }

    if (detectedFamily) {
      if (prompt.intentFamily === detectedFamily) {
        musicScore += 45;
      } else if (prompt.intentFamily) {
        musicScore -= 12;
      }
    }
  }

  if (prompt.modeId || prompt.lensId) {
    const detectedMode = context?.detectedMode || detectCategoryQuestionMode(intent);
    const detectedLens = context?.detectedLens || detectUserContextLens(intent);

    if (detectedMode) {
      categoryRoutingScore += prompt.modeId === detectedMode ? 42 : -18;
    }

    if (detectedLens) {
      categoryRoutingScore += prompt.lensId === detectedLens ? 34 : -28;
    } else if (prompt.lensId) {
      categoryRoutingScore += prompt.lensId === "general" ? 24 : -36;
    }
  }

  return Math.round(categoryScore + useCaseScore + intentScore + qualityScore + conversionScore + musicScore + categoryRoutingScore + anchorScore + (prompt.priorityScore || 0));
}

function getLanguageInstruction(language = "English") {
  const normalizedLanguage = String(language || "English").toLowerCase();

  if (normalizedLanguage.includes("hinglish")) {
    return "Write the answer in natural Hinglish: simple Hindi-English mix, Indian-user friendly, with important technical terms kept clear.";
  }

  if (normalizedLanguage.includes("hindi")) {
    return "Write the answer in simple Hindi. Use Devanagari where natural, and keep product names, tools, brands, and technical terms in English when useful.";
  }

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

export function generateBestPrompt({ category, useCase, intent = "", language = "English" }) {
  const eligiblePrompts = promptLibrary.filter((prompt) => prompt.category === category || prompt.category === "Any");
  const scoreContext = buildScoreContext(intent);
  const ranked = eligiblePrompts
    .map((prompt) => ({
      prompt,
      rawScore: scorePrompt(prompt, category, useCase, intent, scoreContext),
    }))
    .sort((a, b) => {
      if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
      const aAnchor = a.prompt.anchorAny?.length ? scoreAnchorMatch(a.prompt, intent, scoreContext) : 0;
      const bAnchor = b.prompt.anchorAny?.length ? scoreAnchorMatch(b.prompt, intent, scoreContext) : 0;
      if (bAnchor !== aAnchor) return bAnchor - aAnchor;
      return (b.prompt.priorityScore || 0) - (a.prompt.priorityScore || 0);
    });
  const best = ranked[0];
  const displayScore = Math.max(0, Math.min(100, best.rawScore));
  const detectedLens = detectUserContextLens(intent);
  const alternatives = ranked
    .slice(1)
    .filter((item) => detectedLens || !item.prompt.lensId || item.prompt.lensId === "general")
    .slice(0, 3);

  return {
    source: "backend",
    title: best.prompt.title,
    category: best.prompt.category,
    useCase: best.prompt.useCase,
    promptId: best.prompt.id,
    score: displayScore,
    tags: best.prompt.tags.slice(0, 5),
    language,
    generatedPrompt: assemblePrompt(best.prompt, intent, language),
    alternatives: alternatives.map((item) => ({
      title: item.prompt.title,
      promptId: item.prompt.id,
      score: Math.max(0, Math.min(100, item.rawScore)),
    })),
  };
}

export { promptLibrary };
