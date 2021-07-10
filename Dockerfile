FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY ormconfig.ts ./
COPY src ./src

RUN yarn install
RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]