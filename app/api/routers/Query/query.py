from fastapi import APIRouter, Depends
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.graphs import Neo4jGraph
import os
from utils.LLMRequest import LLMRequest

router = APIRouter(prefix="/query")

global rag

@router.on_event('startup')
def instantiate_dependencies():

    embedding_model = HuggingFaceEmbeddings(model_name = 'NeuML/pubmedbert-base-embeddings')
    llm = ChatGroq(groq_api_key=os.getenv('groq_api'), model_name='gemma2-9b-it')
    
    graph = Neo4jGraph(
        url = os.getenv('NEO4J_URI'),
        username = os.getenv('NEO4J_USERNAME'),
        password = os.getenv('NEO4J_PASSWORD'),
    )

    global rag 
    rag = LLMRequest(embedding_model=embedding_model, llm=llm, graph=graph)
    response = rag.initiateQAChain()

    if (response):
        print('RAG Initialized and ready for Q-A')

@router.get('/{query}')
def query_llm(query: str) -> dict:
    
    global rag
    llm_response = rag.queryLLM(query)

    return {'result': llm_response}