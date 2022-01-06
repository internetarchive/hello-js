FROM denoland/deno:alpine

WORKDIR /app
COPY . .

USER deno
CMD deno run --allow-net index.js
