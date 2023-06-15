start:  # Start the server
	./start_server.sh

test:  # Run unit tests
	python -m unittest

lint:  # Lint the code
	flake8 .

format:  # Format the code
	black .

deps:  # Install dependencies
	pip install -r requirements.txt

.PHONY: start test lint format deps
