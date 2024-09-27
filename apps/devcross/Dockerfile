FROM node:20-slim AS development

WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl
RUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install 

COPY . .



RUN pnpm run build

FROM node:20-slim AS production

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --production

COPY --from=development /usr/src/app/dist ./dist  

CMD ["node", "dist/apps/devcross/main.js"]