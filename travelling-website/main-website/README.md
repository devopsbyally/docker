Main Website
This project sets up a React-based website served through an Nginx web server. The application includes API proxying for Goa and Rajasthan services, leveraging Nginx templates for dynamic configurations during container runtime.

Features
React Frontend: A React application served through Nginx.
Dynamic Nginx Configuration: Uses Nginx templates to dynamically inject environment variables for API endpoints.
API Proxy: Routes /goa and /rajasthan requests to their respective backend services.
Directory Structure

main-website/
├── public/                   # Static files for React app
├── src/                      # React app source code
├── nginx/
│   └── templates/
│       └── default.conf.template  # Nginx configuration template
├── Dockerfile                # Multi-stage Docker build file
├── package.json              # React dependencies
├── yarn.lock                 # Dependency lock file
└── README.md                 # Documentation (this file)
Prerequisites
Docker
Node.js (optional, for local development)
Setup and Build
1. Install Dependencies (Optional)
To develop or test the React app locally:


npm install
# or if using Yarn:
yarn install
2. Build and Run Docker Container
Build the Docker image:


docker build -t main-website:latest .
Run the container with environment variables:


docker run -d -p 80:80 \
-e NGINX_PORT=80 \
-e GOA_API_URL=backend-goa-url \
-e RAJASTHAN_API_URL=backend-rajasthan-url \
main-website:latest
Replace backend-goa-url and backend-rajasthan-url with the appropriate backend service URLs.

Environment Variables
Variable	Description
NGINX_PORT	Port on which Nginx listens.
GOA_API_URL	Backend URL for Goa service.
RAJASTHAN_API_URL	Backend URL for Rajasthan service.
Nginx Configuration
The default.conf.template file dynamically configures Nginx using the environment variables at runtime.

Example Template
nginx
Copy code
server {
    listen ${NGINX_PORT};

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri /index.html;
    }

    location /goa {
        proxy_pass http://${GOA_API_URL}/goa;
    }

    location /rajasthan {
        proxy_pass http://${RAJASTHAN_API_URL}/rajasthan;
    }
}
Development
Running Locally
Start the React app:

npm start
# or if using Yarn:
yarn start
Access the app at http://localhost:3000.
Deployment
This project uses a multi-stage Docker build:

Stage 1: Builds the React application using Node.js.
Stage 2: Copies the build artifacts and serves them with Nginx.
Troubleshooting
Common Issues
Template File Not Found: Ensure nginx/templates/default.conf.template exists in the Docker build context.
Environment Variables Not Applied: Verify that environment variables are correctly passed during docker run.
Debugging
Inspect logs:


docker logs <container-id>
