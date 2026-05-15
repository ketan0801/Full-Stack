FROM node:18-alpine

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# copy app source
COPY . ./

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "server.js"]
