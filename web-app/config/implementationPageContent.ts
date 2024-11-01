export type ImplementationPageContent = typeof ImplementationPageContent


export const ImplementationPageContent = {

    section_1: {
        heading: "Building ClinGraph: ",
        subHeading: 'A Complete Walkthrough',
        paragraph: "Medical diagnosis is a major application of AI, especially for complex conditions. This project focuses on using a Hybrid Retrieval-Augmented Generation (RAG) system, an approach that combines retrieving relevant medical knowledge with AI-driven reasoning to enhance diagnostic accuracy",
    },

    section_2: {
        heading: "How Does a RAG System Enhance Medical Diagnosis?",    
        paragraph_1: "A Retrieval-Augmented Generation (RAG) system is an architectural approach that leverages a dedicated knowledge base to retrieve relevant information, enhancing accuracy and depth in complex tasks like medical diagnosis",
        paragraph_2: "RAG systems retrieve specific, up-to-date medical information by directly accessing a dedicated knowledge base containing multiple medical literatures.",
        paragraph_3: "Unlike standard LLMs, which rely solely on pre-trained knowledge, a RAG model pulls the latest information, enabling it to respond to diagnostic queries with highly relevant and current data.", 
        paragraph_4: "This targeted retrieval allows the system to answer questions with more precision, drawing on the specific medical literature or protocols most pertinent to the case.",
        paragraph_5: "RAG models provide answers tailored to specific clinical queries by retrieving relevant information from their knowledge base, ensuring alignment with the case's nuances.",
        paragraph_6: "In contrast, LLMs generate responses based on learned patterns, which may overlook specific details, resulting in less precise or overly generalized answers.", 
        paragraph_7: "RAG systems can provide evidence-backed responses by citing specific studies or guidelines from their knowledge base, enhancing the trustworthiness of the information. In contrast, finetuning LLMs might generate plausible-sounding answers without any citations or reference to current evidence, making it harder for clinicians to verify the accuracy of the information.",
    },

    section_3: {
        heading: "Implementation of hybrid RAG",
        paragraph_1: "Traditional chunking methods that rely on character limits often fall short, as they may separate semantically connected sentences merely based on size rather than meaning. To create coherent, meaningful sections for our AI to process, we’ve implemented a more advanced approach—semantic chunking.",
        paragraph_2: "First, the system reads through each page of the medical literature, extracting all text into a raw form. This text undergoes semantic chunking using a sliding window algorithm to ensure the content remains logically connected. In each pass, we take a sequence of five paragraphs and analyze their combined context, maintaining meaning and relevance across paragraphs.",
        paragraph_3: "With each chunk, we send the content to the language model (LLM) to determine if the current paragraph grouping retains semantic similarity or if a new chunk should begin. The LLM assesses each segment in a simple binary response, answering “yes” or “no” to whether the grouping should continue or a break is needed.",
        paragraph_4: "By the end, we achieve chunks that are cohesive and contextually sound, vastly improving the AI's comprehension and ensuring that information is accurately and meaningfully segmented for further processing.",
        paragraph_5: "After the chunking process, each chunk is then processed through an LLM (Llama 3.2 running locally via Ollama) to extract relevant entities and relationships, following a custom prompt that specifies the desired output format along with some examples. This approach allows us to structure the extracted data into nodes and relationships, which form the basis for building a graph document.",
        paragraph_6: "Next, the extracted entities and relationships are parsed from the LLM's response and formatted into a graph document compatible with Langchain. This document, once fully constructed, represents the document's knowledge structure. We then import this graph document into Neo4j, a graph database management system, where it integrates into the larger diagnostic database",
        paragraph_7: "With the database complete, we set up a retrieval chain that uses the graph database, an embedding model (NeuML/pubmedbert-base-embeddings), and an LLM (Gemma2 9b). The retrieval chain is designed to locate specific information from the graph database and embed relevant contextual insights for the diagnostic query.",
        paragraph_8: "The retrieval chain fetches relevant information from the graph, passing it to the LLM, which synthesizes a response. The advantage of this setup is that the LLM can generate answers that are both contextually enriched and backed by the graph database, ensuring precise and well-informed diagnostic support."

    }
    
}