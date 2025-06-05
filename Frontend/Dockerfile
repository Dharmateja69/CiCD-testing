FROM node:18-alpine AS build

WORKDIR /app

COPY Frontend/package*.json ./

RUN npm install

COPY Frontend ./

RUN npm run build

FROM nginx:alpine

# Copy Vite build output (in /app/dist) to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# Note: This Dockerfile assumes that the frontend code is in a folder named 'Frontend'
# and that the build output is in a folder named 'build'.