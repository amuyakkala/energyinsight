from database import Base, engine
import models  # Ensure models are imported so they get registered

print("Creating database tables...")
Base.metadata.create_all(engine)
print("Database tables created successfully.")