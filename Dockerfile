# Build Stage 1
# This build created a staging docker image
#
FROM node:16-alpine3.14 AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./
RUN yarn
COPY ./src ./src
RUN yarn build
# Build Stage 2
# This build takes the production build from staging build
#
FROM node:16-alpine3.14
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --production
COPY --from=appbuild /usr/src/app/dist ./dist
EXPOSE 3003
CMD yarn start