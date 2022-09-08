### BASE ###
FROM node:gallium-alpine as base

# Expose port 80 & allow Node.js to use priviliged ports
EXPOSE 80
RUN apk add libcap && setcap CAP_NET_BIND_SERVICE=+eip /usr/local/bin/node

# Install latest npm version
RUN npm global upgrade --silent npm@latest

# Setup dependencies
RUN mkdir /app && chown node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json npm.lock .npmrc ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm cache clean

### BUILDER STAGE ###
FROM base as builder

# Install dependencies
RUN npm install --silent

# Copy source code
RUN mkdir /app/server
WORKDIR /app/server
COPY ./ ./

# Build source code
RUN npm run build

### RUN STAGE ###
FROM base as run

# Install dependencies (production only)
RUN npm install --production --silent

# Copy built source code
RUN mkdir /app/server
WORKDIR /app/server
COPY --chown=node:node --from=builder /app/server/dist ./

CMD node /app/server/src/main.js
