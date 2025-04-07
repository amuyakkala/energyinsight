from fastapi import APIRouter, Query
from typing import Optional
from datetime import datetime, timedelta

router = APIRouter()

# Mock data with a default "source" for demonstration
mock_data = [
    {
        "timestamp": (datetime.utcnow() - timedelta(hours=i)).isoformat(),
        "consumption": i * 10,
        "generation": i * 8,
        "source": ["solar", "wind", "grid"][i % 3]  # Rotates sources
    }
    for i in range(24)
]

@router.get("/")
def get_energy_data(
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    source: Optional[str] = Query(None)
):
    filtered = mock_data

    # Filter by date range if provided
    if start_date:
        start = datetime.fromisoformat(start_date)
        filtered = [d for d in filtered if datetime.fromisoformat(d["timestamp"]) >= start]

    if end_date:
        end = datetime.fromisoformat(end_date)
        filtered = [d for d in filtered if datetime.fromisoformat(d["timestamp"]) <= end]

    # Filter by source if provided
    if source:
        filtered = [d for d in filtered if d["source"] == source]

    return filtered 