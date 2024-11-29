# Use the React.js image for development (ensure it has Node.js and npm)
FROM premlaks/reactjs:payment-NOV-26-2024

# Install Node.js and npm (in case they are not in the base image)
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose port 3500 for development
EXPOSE 3500

# Run the React development server
CMD ["npm", "start"]