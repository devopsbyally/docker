# Use the React.js image for development
FROM premlaks/reactjs:payment-NOV-26-2024

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