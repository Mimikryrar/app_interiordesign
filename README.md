# λόγος
### *Reason. Space. Harmony.*

> An AI-powered interior design consultant combining timeless design principles with modern AI expertise.

## About

λόγος (Logos) is an AI interior design application. Upload a photo of your room and consult **χρέομαι** — your design oracle — to reimagine your space through the lens of proportion, harmony, and reason.

## AI Providers

λόγος supports two AI providers for image generation (BYOK — Bring Your Own Key):

### Google Gemini
- Model: gemini-3.1-flash-image-preview
- Best quality img2img — transforms your actual room photo
- Get your key: https://aistudio.google.com/apikey

### ModelsLab Interior
- Model: Specialized interior design Stable Diffusion model
- $0.004/image, free tier available
- Get your key: https://modelslab.com/dashboard/api-keys

### Demo Mode
- No API key required
- Simulated responses for testing the UI and chat flow

## Features

- **Room Visualization** — Upload any room photo and reimagine it in 5 curated design styles
- **χρέομαι AI Consultant** — Structured design analysis with actionable improvements and product picks
- **Style Selection** — Mid-Century Modern, Scandinavian, Industrial, Bohemian, Japandi
- **Before/After Comparison** — Interactive slider to compare original and reimagined spaces
- **Download** — Export your reimagined room
- **Mobile-first** — Tab-switch layout optimized for all screen sizes
- **BYOK Security** — Your API key stays in your browser, never stored on our servers

## Tech Stack

- React + TypeScript + Vite
- Google Gemini 2.0 Flash (Chat/Consultation)
- ModelsLab Interior / Gemini 3.1 Flash Image (Image Generation)
- Express.js Backend Proxy
- Tailwind CSS + Framer Motion
- Cormorant Garamond typography
- Google Cloud Run (Deployment)

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run frontend + backend: `npm run dev:all`
3. Open http://localhost:3000
4. Enter your API key or use Demo Mode

## Deploy

```bash
gcloud run deploy logos-interior \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated
```

---

*© 2026 λόγος. All rights reserved.*
