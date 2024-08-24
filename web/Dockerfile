# Use an official Node.js image as the base
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple web server to serve the React app
RUN npm install -g serve

# Serve the React app
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
