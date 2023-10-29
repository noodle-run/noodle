FROM node:18-alpine AS base
RUN npm i -g pnpm
RUN apk add --no-cache libc6-compat sqlite gcompat
ENV DATABASE_URL file:./dev.db

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc ./
RUN pnpm i --frozen-lockfile
COPY . .
RUN pnpm build

FROM base
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/server ./.next/server
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
