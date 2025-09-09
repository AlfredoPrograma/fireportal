CREATE TABLE incidents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    incident_type TEXT NOT NULL,
    location TEXT,
    description TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);