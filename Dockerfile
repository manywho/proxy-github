FROM node:10-alpine

WORKDIR /usr/src/app

# Install any packages first, as this should be cached if nothing's changed
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install

ADD src src

ENTRYPOINT ["yarn", "start"]
