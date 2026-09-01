# Contractor & Trade Services Template

Reusable Next.js + Tailwind landing page for general contractors and trade businesses.

## Customize a client

1. Edit `src/lib/site.ts` — business name, phone, service area, headlines, services, hours, and metadata.
2. Replace placeholder media in `public/placeholders/` with client photos in `public/images/`.
3. Optional: add `/public/videos/featured-project.mp4` and set `site.proof.videoSrc`.
4. Update `site.phoneTel` to a real `tel:` link before launch.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npx vercel --prod
```

Create a new Vercel project for each client. Do not reuse an old client project name.
