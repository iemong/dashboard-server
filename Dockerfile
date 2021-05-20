FROM node:15.12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
COPY .env ./

RUN yarn

COPY . .

RUN yarn build
RUN cd frontend && yarn && yarn build