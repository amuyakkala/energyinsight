# ⚡ Energy Insight Dashboard

A full-stack energy dashboard that provides visual insights into energy consumption and generation. Built with **React**, **FastAPI**, and **Docker**, it supports filtering by date and energy source.

## 🚀 Features
- ✅ User authentication (Register/Login)
- 📅 Filter data by date range
- 🔌 Filter data by energy source (Solar, Wind, Grid)
- 📈 Interactive charts for trends in consumption/generation
- 🐳 Fully containerized using Docker

## 🛠 Tech Stack
- **Frontend:** React + TypeScript + Tailwind CSS + Chart.js
- **Backend:** FastAPI (Python)
- **Authentication:** Bearer token-based
- **Deployment:** Docker + Docker Compose

## 📦 Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- Python 3.10+ (only if running backend locally without Docker)

## 💻 Running Locally (Without Docker)

### 1. Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Access API at: http://localhost:8000

### 2. Frontend
cd frontend
npm install
npm start

App will run at: http://localhost:3000

## 🐳 Running with Docker (Recommended)

### 1. Build the containers
docker-compose build

### 2. Start the app
docker-compose up

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## 🔐 Auth Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | /auth/register   | Register a user     |
| POST   | /auth/login      | Login and get token |

## ⚡ Energy Data API

Endpoint: /energy/  
Supports optional filters via query params:

- start_date=YYYY-MM-DD
- end_date=YYYY-MM-DD
- source=solar | wind | grid




