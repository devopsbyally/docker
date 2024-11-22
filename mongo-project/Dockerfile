# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the Node.js app
CMD ["node", "index.js"]
