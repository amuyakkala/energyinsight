# EnergyInsight Documentation

## Project Overview
EnergyInsight is a full-stack web application built to visualize renewable energy data through an interactive dashboard. It includes user authentication, data filtering, and detailed analytics presented through intuitive charts.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, Chart.js
- **Backend:** FastAPI (Python), JWT Authentication
- **Database:** SQLite (development-friendly)
- **Deployment:** Docker, Docker Compose

## Project Structure
```
energyinsight-main/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Dashboard, auth pages
│   │   ├── services/    # API handling
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── main.py          # API entry point
│   ├── routers/         # API endpoints
│   ├── models/          # DB models
│   ├── schemas/         # Validation schemas
│   └── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Setup Instructions (Local)

**Requirements:**
- Node.js
- Python 3.8+
- Docker & Docker Compose

**Frontend Setup:**
```bash
cd frontend
npm install
npm run start
```
- Open: `http://localhost:3000`

**Backend Setup:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
- API Docs: `http://localhost:8000/docs`

## Docker Deployment (Easy to run):

Running the project is simple with Docker:

```bash
docker-compose up --build
```

Then access the app directly:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`

## API Usage

### User Authentication:
- `POST /auth/register`
  - Payload: `{ "username": "", "password": "" }`
  - Returns: User details & JWT token.

- `POST /auth/login`
  - Payload: `{ "username": "", "password": "" }`
  - Returns: JWT token.

### Dashboard Data:
- `GET /api/data`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Returns: Dashboard data.

- `GET /api/data?filter=solar`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Returns: Filtered data.
  - **Note:** Due to limited dataset entries, please verify the available date range in the dataset before testing filters to ensure functionality.

## Assumptions Made:
- SQLite is used as a simple, local database suitable for development/testing.
- Docker containers expose standard local ports (`3000`, `8000`).
- JWT tokens have a default expiry (24 hrs) suited to typical authentication scenarios.

## Future Improvements:
- Real-time data updates using WebSockets or SSE.
- Extended filtering (by location, timeframes, etc.).
- Robust production-level database integration (PostgreSQL/MySQL).
- Enhanced security measures (rate limiting, stronger JWT management).
- Comprehensive automated testing (unit and integration tests).


