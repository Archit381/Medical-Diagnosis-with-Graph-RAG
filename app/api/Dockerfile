    FROM python:3.9

    RUN useradd -m -u 1000 user
    USER user
    ENV PATH="/home/user/.local/bin:$PATH"
    ENV GROQ_API_KEY=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
    ENV NEO4J_USERNAME=neo4j
    ENV NEO4J_PASSWORD=tYteIJBUYXbdgwSxKqZXWZ87b2XChS7wfB2Ijt7LLDs
    ENV NEO4J_URI=neo4j+s://2e177e83.databases.neo4j.io

    WORKDIR /app

    COPY --chown=user ./requirements.txt requirements.txt
    RUN pip install --no-cache-dir --upgrade -r requirements.txt

    COPY --chown=user . /app
    CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
