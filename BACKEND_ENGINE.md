# Genius Prompts Backend Engine

The current website is a static MVP. It shows categories, previews, pricing, UPI checkout, and a manual unlock flow. It does not yet have a real backend that dynamically finds the best prompt.

This is the backend engine we should build next. A first deterministic version now runs in `backend/server.mjs` and the browser calls `POST /api/generate-prompt`. The frontend still has a fallback engine for offline demos.

## Goal

When a customer selects a category, the system should return the best prompt for their intent, not just a random prompt from a list.

Example:

- Category: Auto, Cars & Bikers
- User intent: "I want to compare Royal Enfield Hunter 350 and TVS Ronin"
- Engine output: a structured comparison prompt tuned for Indian bikes, ownership cost, mileage, service, resale, EMI, use case, and final recommendation.

## Core Data Model

Each prompt should be stored with metadata:

```json
{
  "id": "auto-bike-comparison-001",
  "category": "Auto, Cars & Bikers",
  "use_case": "Bike ownership comparison",
  "intent_tags": ["bike", "comparison", "ownership-cost", "emi", "resale"],
  "difficulty": "beginner",
  "model_fit": ["ChatGPT", "Gemini", "Claude"],
  "quality_score": 94,
  "conversion_score": 88,
  "prompt": "Act as an Indian auto advisor..."
}
```

## Prompt Selection Flow

1. User selects category.
2. User optionally enters what they want to do.
3. Backend normalizes the intent.
4. Backend filters prompts by category.
5. Backend ranks prompts using:
   - tag match
   - use-case match
   - quality score
   - popularity or conversion score
   - freshness
6. Backend returns the best prompt preview.
7. After payment, backend unlocks the full prompt.

## Strategies Used

The engine uses prompt-engineering strategies that are stable across the videos and official prompting guides:

- Persona: assign the model a useful expert role.
- Task: say exactly what the user wants done.
- Context: add category-specific buying, planning, or decision context.
- Format: force a clear output structure.
- Examples: include a small example so the AI understands the pattern.
- Delimiters: separate prompt blocks with tags like `<role>`, `<task>`, and `<context>`.
- Clarifying questions: ask only when missing information changes the answer.
- Anti-hallucination guardrails: tell the model not to invent facts, prices, specs, or current rates.
- Evaluation: every prompt has quality and conversion scores so the engine can rank options.

## Ranking Formula

Simple first version:

```text
score =
  tag_match * 40
  + use_case_match * 25
  + quality_score * 0.20
  + conversion_score * 0.10
  + freshness_score * 5
```

The highest-scoring prompt wins.

## Prompt Assembly

The best system is not just stored prompt text. It should assemble prompts from reusable blocks:

```text
ROLE + CATEGORY_CONTEXT + USER_INTENT + CONSTRAINTS + OUTPUT_FORMAT + QUALITY_CHECK
```

For Auto:

```text
ROLE:
Act as an Indian auto advisor.

CATEGORY_CONTEXT:
Focus on on-road price, mileage, service cost, comfort, safety, resale value,
EMI pressure, city/highway usage, and 5-year ownership cost.

OUTPUT_FORMAT:
Give me a comparison table, risk notes, best choice by user type, and final recommendation.
```

This makes prompts consistent, premium, and easier to improve.

## Current Local Backend

- `backend/server.mjs`: local Node API and static file server.
- `backend/prompt-engine.mjs`: prompt library, ranking formula, and prompt assembler.
- `POST /api/generate-prompt`: accepts `category`, `useCase`, `intent`, and `language`; returns the best generated prompt.
- `GET /api/health`: health check.
- `success.html`: demo post-payment dashboard with shared expert AI request credits across all categories.

## MVP Backend Stack

Lowest-cost serious setup:

- Frontend: current static site
- Database: Supabase free tier
- Auth/unlock: email or WhatsApp + transaction ID
- Payments: manual UPI first, Razorpay/Cashfree later
- API: Supabase Edge Functions or a small Node/Express API
- Prompt storage: `prompts` table
- Purchases: `orders` table
- Usage: `prompt_unlocks` table

## Tables

`prompts`

- id
- category
- use_case
- intent_tags
- title
- preview
- full_prompt
- quality_score
- conversion_score
- status

`orders`

- id
- contact
- plan_id
- amount
- upi_reference
- status
- created_at

`prompt_unlocks`

- id
- order_id
- prompt_id
- category
- created_at

## Important Truth

We should not claim the app is automatically finding the best prompt until this backend exists. Right now it is a curated static prompt preview system. The next build step is to turn this blueprint into the actual prompt engine.
