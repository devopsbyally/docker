# Stage 1: Build React app
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx to Serve React App and API Proxies
FROM nginx:1.19-alpine

# Define environment variables for dynamic configuration
ENV NGINX_PORT=80
ENV GOA_API_URL=goa-service.internal
ENV RAJASTHAN_API_URL=rajasthan-service.internal

# Copy Nginx template
COPY nginx/templates /etc/nginx/templates/

# Copy React app build
COPY --from=build /app/build /usr/share/nginx/html

# Expose Nginx port
EXPOSE ${NGINX_PORT}

# Start Nginx with dynamic configuration substitution
CMD ["nginx", "-g", "daemon off;"]
