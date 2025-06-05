FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/Backend

EXPOSE 5000

CMD ["node", "index.js"]

# Note: This Dockerfile assumes that the backend code is in a folder named 'backend'
# and that the entry point for the backend is 'index.js'.