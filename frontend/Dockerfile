FROM node:20.0-alpine AS expo-build

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

RUN mkdir /opt/the-void
WORKDIR /opt/the-void
ENV PATH /opt/the-void/.bin:$PATH

COPY . .
RUN npm install
RUN npx expo export:web

WORKDIR /opt/the-void/web-build
