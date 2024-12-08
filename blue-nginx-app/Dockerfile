# Use official Nginx image as base image
FROM nginx:alpine

# Create the /blue folder in the container
RUN mkdir -p /blue

# Copy the custom nginx.conf into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the index.html to the /blue directory
COPY index.html /blue/index.html

# Expose port 80 for the container
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]