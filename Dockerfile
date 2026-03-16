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

CMD ["sh", "-c", "PORT=${PORT:=3000}; exec serve dist -l 0.0.0.0:$PORT"]
