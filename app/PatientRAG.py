from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_experimental.graph_transformers import LLMGraphTransformer
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.graphs import Neo4jGraph
from langchain_community.vectorstores import Neo4jVector
from langchain.chains import RetrievalQA

load_dotenv()

class PatientRAG():
    def __init__(
        self, 
        file_name: str, 
        llm_id: str, 
        embed_model_id: str,
        clear_prev_graph: bool,
        node_label: str,
        search: str
    ):

        self.file_name = file_name
        self.llm_id = llm_id
        self.llm = ChatGroq(groq_api_key = os.getenv('groq_api'), model_name=self.llm_id)
        self.llm_transformer = LLMGraphTransformer(llm=self.llm)
        self.embedding_model = HuggingFaceEmbeddings(model_name = embed_model_id)
        self.clear_prev = clear_prev_graph
        self.node = node_label
        self.searchType = search
        self.hybrid_qa = None

    
    def load_data(self):

        file_path = "../dataset/pdf_data/" + self.file_name

        loader = PyPDFLoader(file_path)
        pages = loader.load_and_split()


        return pages

    def create_graph_docs(self, pages):

        graph_docs = self.llm_transformer.convert_to_graph_documents(pages)

        return graph_docs


    def addGraph_to_neo4j(self, graph_docs):

        graph = Neo4jGraph()

        if(self.clear_prev):
            clear_graph_query = "MATCH (n) DETACH DELETE n"
            graph.query(clear_graph_query)

        graph.add_graph_documents(
            graph_docs,
            baseEntityLabel=True,
            include_source=True
        )
    
    def getStore_from_neo4jdb(self):

        db_store = Neo4jVector.from_existing_graph(
                        self.embedding_model,
                        search_type = self.searchType,
                        node_label = self.node,
                        text_node_properties=['text'],
                        embedding_node_property='embedding'
                    )

        return db_store

    def set_retrieval_chain(self, db_store):

        chain = RetrievalQA.from_chain_type(
            llm = self.llm, 
            chain_type='stuff', 
            retriever = db_store.as_retriever()
        )

        if chain is None:
            raise ValueError("Failed to create RetrievalQA chain, chain is None")

        self.hybrid_qa = chain
    
    def query_db(self, query: str):

        r = self.hybrid_qa.invoke(
                {
                    "query": query
                }
            )
        
        return r["result"]





        





    