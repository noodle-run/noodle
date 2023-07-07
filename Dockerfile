FROM node:18.15.0
WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
COPY . .
RUN pnpm install
EXPOSE 3000
CMD [ "pnpm", "start" ]
