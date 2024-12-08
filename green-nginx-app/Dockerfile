# Use official Nginx image as base image
FROM nginx:alpine

# Create the /green folder in the container
RUN mkdir -p /green

# Copy the custom nginx.conf into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the index.html to the /green directory
COPY index.html /green/index.html

# Expose port 80 for the container
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
