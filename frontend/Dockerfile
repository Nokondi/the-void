FROM node:20.0-alpine AS expo-client

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/the-void
WORKDIR /opt/the-void
ENV PATH /opt/the-void/.bin:$PATH
# COPY ./package.json ./package-lock.json ./
COPY . .
RUN npm install
RUN npx expo export:web

WORKDIR /opt/the-void/web-build

#ENTRYPOINT ["npm", "run"]
#CMD ["web"]

FROM nginx:alpine AS nginx-proxy

#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=expo-client /opt/the-void/web-build /usr/share/nginx/html

EXPOSE 80