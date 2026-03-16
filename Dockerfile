FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json* ./

RUN npm ci --omit=dev && npm install -g serve

EXPOSE 3000

CMD ["sh", "-c", "serve dist -l ${PORT:-3000}"]
