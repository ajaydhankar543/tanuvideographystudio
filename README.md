# Tanu Videography Studio - Full Stack Application

[![CI](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/ci.yml)
[![Docker Build](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/docker-build.yml/badge.svg)](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/docker-build.yml)
[![Deploy to AWS](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/deploy-aws.yml/badge.svg)](https://github.com/YOUR_USERNAME/tanuvideography/actions/workflows/deploy-aws.yml)

A modern full-stack web application with Vite + Tailwind CSS (frontend) and Node.js/Express (backend), featuring automated CI/CD deployment to AWS.

## 📁 Project Structure

\`\`\`
tanuvideography/
├── frontend/          # Vite + Tailwind CSS app
│   ├── src/
│   │   ├── main.js   # Main app with menubar navigation
│   │   ├── style.css # Tailwind styles
│   │   └── index.html
│   └── package.json
├── backend/          # Node.js/Express server
│   ├── server.js     # API server
│   └── package.json
└── README.md
\`\`\`

## 🚀 How to Run

### Terminal 1: Start Backend Server

\`\`\`bash
cd backend
npm start
\`\`\`

The backend will run at \`http://localhost:3000\`

**Available Endpoints:**
- \`GET /\` - Welcome message with available endpoints
- \`GET /api/data\` - Returns sample JSON data
- \`GET /api/health\` - Health check endpoint

### Terminal 2: Start Frontend Dev Server

\`\`\`bash
cd frontend
npm run dev
\`\`\`

The frontend will run at \`http://localhost:5173\`

## 🐳 Docker Deployment

### Available Docker Images
- Backend: \`abhaypratapsingh7704866570/tanuvideography-backend:latest\`
- Frontend: \`abhaypratapsingh7704866570/tanuvideography-frontend:latest\`

### Run with Docker Compose

\`\`\`bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
\`\`\`

## 🌐 AWS Deployment

Deploy to AWS EC2 with automated script:

\`\`\`bash
chmod +x deploy-aws.sh
./deploy-aws.sh
\`\`\`

For detailed AWS deployment instructions, see [AWS_DEPLOYMENT.md](AWS_DEPLOYMENT.md)

## 🔄 CI/CD with GitHub Actions

Automated workflows run on every push to \`main\`:
1. ✅ Run tests and linting
2. 🐳 Build and push Docker images
3. �� Deploy to AWS EC2

**Setup Instructions:** See [GITHUB_ACTIONS_SETUP.md](GITHUB_ACTIONS_SETUP.md)

### Required GitHub Secrets:
- \`DOCKER_USERNAME\` - Docker Hub username
- \`DOCKER_PASSWORD\` - Docker Hub password/token
- \`EC2_HOST\` - AWS EC2 public IP
- \`EC2_USERNAME\` - SSH username (ubuntu)
- \`EC2_SSH_KEY\` - Private key (.pem) content

## 🏗️ Architecture

\`\`\`
Internet → Nginx Reverse Proxy → Backend API (/api/*)
                               → Frontend (/)
\`\`\`

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js, CORS  
**Frontend:** Vite, Tailwind CSS 4, Vanilla JS  
**DevOps:** Docker, Docker Compose, GitHub Actions, AWS EC2, Nginx

## 📚 Documentation

- [AWS Deployment Guide](AWS_DEPLOYMENT.md)
- [GitHub Actions CI/CD Setup](GITHUB_ACTIONS_SETUP.md)
- [Nginx Complete Guide](NGINX_COMPLETE_GUIDE.md)
- [Project Documentation](PROJECT_DOCUMENTATION.md)

## 👤 Author

Tanu Videography Studio  
Docker Hub: [@abhaypratapsingh7704866570](https://hub.docker.com/u/abhaypratapsingh7704866570)

---

**Made with ❤️ by Tanu Videography Studio**

Enjoy building! 🎉


