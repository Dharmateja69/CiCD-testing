# Frontend/Dockerfile
FROM node:18-alpine AS build

WORKDIR /app

# Copy only frontend's package.json and lock
COPY Frontend/package*.json ./

RUN npm install

# Copy the entire frontend source code
COPY Frontend ./

# Build React/Vite app
RUN npm run build

# Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
