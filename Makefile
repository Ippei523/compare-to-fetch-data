# Makefile

.PHONY: dev build test clean

SERVER_DIR = sample-express-app
CLIENT_DIR = sample-react-app
CLIENT_PAGING_DIR = sample-paging-react-app

run-server:
	@echo "Starting development environment..."
	@cd $(SERVER_DIR) && npm run dev

run-client:
	@echo "Starting development environment..."
	@cd $(CLIENT_DIR) && npm start

run-client-paging:
	@echo "Starting development environment..."
	@cd $(CLIENT_PAGING_DIR) && npm start