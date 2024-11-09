FROM nginx:latest

# Copy your website files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html 
COPY styles.css /usr/share/nginx/html
COPY cloud.jpg /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

#command to run nginx
CMD ["nginx", "-g", "daemon off;"]

