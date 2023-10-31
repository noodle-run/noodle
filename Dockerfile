FROM node:18-alpine AS base
RUN npm i -g pnpm
RUN apk add --no-cache libc6-compat
ENV DATABASE_URL file:./dev.db

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc ./
RUN pnpm i --frozen-lockfile
RUN pnpm i --force @libsql/linux-x64-musl --prefix /tmp/libsql_bundle
COPY . .
RUN pnpm build

FROM base
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/dev.db .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/server ./.next/server
COPY --from=builder /tmp/libsql_bundle/node_modules/@libsql/linux-x64-musl /app/node_modules/@libsql/linux-x64-musl
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
