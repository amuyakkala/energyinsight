# Entry point for FastAPI backend
from fastapi import FastAPI
from auth import router as auth_router
from energy_data import router as energy_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include authentication and energy data routes
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(energy_router, prefix="/energy", tags=["Energy Data"])

@app.get("/")
def home():
    return {"message": "Welcome to the Energy Dashboard API"}