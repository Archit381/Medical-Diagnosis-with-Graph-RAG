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

    def queryLLM(self, query: str) -> str:

        response = self.qaChain.invoke({
            'query': query
        })

        return response['result']

