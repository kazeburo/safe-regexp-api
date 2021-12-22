FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN apk add --no-cache tini

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "index.mjs" ]
