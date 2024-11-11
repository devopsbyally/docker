# Use the official Node.js image from the Docker Hub
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Command to start the app
CMD ["node", "app.js"]
