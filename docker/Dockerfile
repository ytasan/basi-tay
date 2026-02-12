# Node 16 required: --openssl-legacy-provider is disallowed in NODE_OPTIONS on Node 18+
FROM node:16-alpine
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install && yarn cache clean
COPY . /app
# Node 16: no --openssl-legacy-provider needed (only Node 17+)
CMD ["node", "node_modules/.bin/vue-cli-service", "serve"]
EXPOSE 8080
