# ReelBGM AI — Vercel-safe MVP

This version removes the `spawn ffprobe ENOENT` failure by not invoking ffprobe in Vercel functions.

Deploy to Vercel as a Next.js project. Add `MUBERT_CUSTOMER_ID` and `MUBERT_ACCESS_TOKEN` as server-side Environment Variables, then redeploy.

For production speech timing and final audio mixing, use a hosted media/transcription service or dedicated worker rather than assuming ffmpeg/ffprobe binaries exist in Vercel serverless functions.
