FROM denoland/deno:alpine

WORKDIR /app
COPY . .

USER deno
CMD deno run index.js
