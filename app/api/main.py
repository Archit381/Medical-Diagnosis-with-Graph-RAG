from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware  
from routers.Query.query import router as query_router
from dotenv import load_dotenv

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.include_router(query_router)

@app.get('/')
def read_root():
    return Response('Server is running')
