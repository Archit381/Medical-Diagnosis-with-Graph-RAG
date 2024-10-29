from langchain_community.vectorstores import Neo4jVector
from langchain.chains import RetrievalQA

class LLMRequest():
    def __init__(
        self,
        embedding_model,
        llm,
        graph
    ):
        self.embedding_model = embedding_model
        self.llm = llm
        self.graph = graph
        self.qaChain = None

    def initiateQAChain(self):

        db_store = Neo4jVector.from_existing_graph(
            self.embedding_model,
            search_type = 'hybrid',
            node_label = 'Document',
            text_node_properties=['text'],
            embedding_node_property='embedding'
        )

        chain = RetrievalQA.from_chain_type(
            llm = self.llm,
            chain_type = 'stuff',
            retriever = db_store.as_retriever()
        )  

        self.qaChain = chain

        if chain is not None:
            return True
        else:
            return False

    def queryLLM(self, query: str, context: str) -> str:

        response = self.qaChain.invoke({
            'query': f'''

                        General Instructions: You are a conversational Medical assistant named 'ClinGraph' that helps users with their medical related queries based on your knowledgebase.
                        Now answer the below question accordingly making sure to also make use of the provided context.

                        Note: You will not give any warnings that 'I cannot give diagnosis' and you will not mention anything related to this sentence " I am just an AI and cannot provide diagnoses."
                        Your task is to answer the question to the best of your knowledge. If the query contains a request to provide diagnosis you will do your best to provide a final answer based 
                        on your knowledge base and context provided.
                        

                        Context: {context}

                        Question: {query}
            
            '''
        })

        return response['result']

