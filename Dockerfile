FROM node:current-alpine

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm ci

COPY ./ /app

ENTRYPOINT ["node", "index.js"]
