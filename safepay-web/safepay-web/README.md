# SafePay Web App

SafePay is a Vercel-ready Next.js web application starter for a wearable payment product. It includes:

- Landing page
- Admin dashboard
- Cards page
- Devices page
- Transactions page
- Settings page
- Mock API routes for cards, devices, and transactions
- Tailwind-based premium UI

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Route Handlers for mock APIs
- Vercel-friendly deployment structure

## Code map

```text
safepay-web/
├── app/
│   ├── api/
│   │   ├── cards/route.ts
│   │   ├── devices/route.ts
│   │   └── transactions/route.ts
│   ├── cards/page.tsx
│   ├── dashboard/page.tsx
│   ├── devices/page.tsx
│   ├── settings/page.tsx
│   ├── transactions/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── app-shell.tsx
│   ├── badge.tsx
│   ├── page-header.tsx
│   ├── quick-actions.tsx
│   ├── section-card.tsx
│   ├── sidebar.tsx
│   ├── stat-card.tsx
│   ├── topbar.tsx
│   └── transaction-list.tsx
├── lib/
│   ├── mock-data.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── .env.example
├── .gitignore
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`

## API endpoints

- `GET /api/cards`
- `GET /api/devices`
- `GET /api/transactions`

## GitHub push

```bash
git init
git add .
git commit -m "Initial SafePay web app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/safepay-web.git
git push -u origin main
```

## Vercel deploy

### Option A: GitHub integration
1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Add environment variables if needed.
4. Deploy.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Recommended next backend steps

- Replace mock data with database models
- Add authentication
- Add device pairing flow
- Add transaction analytics charts
- Add card freeze/unfreeze mutations
- Add real payment gateway integration

## Notes

This starter focuses on presentation layer + app structure so you can move quickly into GitHub and Vercel deployment, then build real backend logic on top.
