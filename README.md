MSIT 3404 DevOps Project
Containerized Web Application with Microservices Architecture
Project Team: Manusha Thatikonda and Karthik K
Course: MSIT 3404 - DevOps

Project Overview
This project demonstrates a complete DevOps pipeline with containerized frontend and backend microservices, deployed on Kubernetes with proper service discovery and load balancing.

Project Structure
msit-3404-devops-project/
│
├── frontend-sample/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── nginx.conf
│
├── backend-sample/
│   ├── Dockerfile
│   ├── app.py
│   ├── requirements.txt
│   └── sample.jpg
│
└── kubernetes/
    ├── frontend-deployment.yaml
    ├── frontend-service.yaml
    └── backend-service.yaml

Architecture
User Browser
    ↓
Minikube Service (Port 30002)
    ↓
Frontend Service (myapp-service)
    ↓
Frontend Pods (4 replicas - Nginx)
    ↓
    [Nginx Reverse Proxy]
    ↓
Backend Service (Internal DNS: http://backend:5000)
    ↓
Backend Pods (3 replicas - Flask)

Quick Start Commands:
Part 1: Docker Build & Push
# Build images
docker build -t mthatikonda/backend:latest ./backend-sample
docker build -t mthatikonda/frontend:latest ./frontend-sample

# Push to Docker Hub
docker push mthatikonda/backend:latest
docker push mthatikonda/frontend:latest

Part 2: Kubernetes Deployment
# Start Minikube
minikube start

# Deploy backend (3 replicas)
kubectl create deployment backend --image=mthatikonda/backend:latest --replicas=3

# Deploy frontend (4 replicas)
kubectl apply -f kubernetes/frontend-deployment.yaml

# Create services
kubectl apply -f kubernetes/frontend-service.yaml
kubectl apply -f kubernetes/backend-service.yaml

# Verify
kubectl get pods
kubectl get svc
kubectl get deployments

Part 3: Access Services
# Open frontend
minikube service myapp-service

# Open backend
minikube service backend

Key Components

Frontend (Nginx - 4 Replicas)
Image: mthatikonda/frontend:latest
Port: 80
NodePort: 30002
Function: Serves web UI, acts as reverse proxy to backend

Backend (Flask - 3 Replicas)
Image: mthatikonda/backend:latest
Port: 5000
NodePort: 30001
Function: Serves images via REST API

Nginx Reverse Proxy
location /api/image {
    proxy_pass http://backend:5000/image;
}

Docker Hub:
Repository: https://hub.docker.com/u/mthatikonda

Images:
mthatikonda/frontend:latest
mthatikonda/backend:latest

Verification Commands:
# Check all resources
kubectl get all

# View pod labels
kubectl get pods --show-labels

# Describe services (see endpoints)
kubectl describe svc myapp-service
kubectl describe svc backend

# Check pod logs
kubectl logs -l app=frontend
kubectl logs -l app=backend

Key Features Demonstrated

✅ Docker containerization
✅ Multi-replica deployments
✅ Kubernetes service discovery
✅ Nginx reverse proxy pattern
✅ Load balancing across pods
✅ Fixed NodePort configuration
✅ Infrastructure as Code (YAML)