# Backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy root-level package.json & lock file (from /test)
COPY package*.json ./

RUN npm install

# Copy only backend folder contents
COPY Backend ./Backend

WORKDIR /app/Backend

EXPOSE 5000

CMD ["node", "index.js"]
