# UtahPlumbCode

**2021 IPC + Utah Statewide Amendments — reference app for Utah licensed plumbers.**

Full-text code browser, gas pipe sizing calculator, water service sizing calculator,
bookmarks, flashcard study mode, and an AI assistant that knows every Utah amendment.

---

## Deploy in 10 minutes

### 1. Install dependencies
```bash
cd utahplumbcode
npm install
```

### 2. Add your API key
Create `.env.local` in the project root:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

### 4. Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Then add your env variable:
```bash
vercel env add ANTHROPIC_API_KEY
vercel --prod
```

---

## Before charging money
Contact ICC for a content license: innovations@iccsafe.org
Utah amendments (Utah Code Title 15A) are public law — free to use.

---

## Adding Stripe paywall
1. `npm install stripe @stripe/stripe-js`
2. Add `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY` to `.env.local`
3. Create a one-time payment product in Stripe (~$39)
4. Add `/api/checkout` route + wrap app in auth check
5. Use Stripe webhooks to mark users as paid

---

## Adding content
Edit `src/data/chapters.ts` to add sections. Each section:
```typescript
{
  id: '704.1',
  h: 'Section heading',
  b: 'Section body text...',
  utah: true,
  uc: 'Utah Code § 15A-3-307',
  ut: 'What Utah changed...'
}
```

---

## Tech stack
Next.js 14 · TypeScript · Tailwind CSS · Anthropic SDK · Vercel
