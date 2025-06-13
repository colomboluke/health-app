## Frontend: React, TypeScript
- Displays info to user, collects user inputs
## Backend: Python, FastAPI, psycopg2
- Combines user input, health data, and local resources to produce the top 3 interventions
## Database: PostgreSQL
- Stores historical health data, with ARR scores
- Stores local resources links for each zip code

#
### Frontend -> Backend
- React sends a POST request to an endpoint on the backend, containing user's demographic data as JSON
### Backend -> DB
- Python uses psycopg2 to connect to the DB and query for relevant health data and local resource data
### Backend -> Frontend
- Python sends a JSON response back to React with the top 3 interventions