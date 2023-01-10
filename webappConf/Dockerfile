FROM node
WORKDIR /projet

RUN npm install -g pnpm

COPY package*.json ./
RUN pnpm install