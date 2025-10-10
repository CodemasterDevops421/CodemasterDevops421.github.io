SHELL := /bin/bash

.PHONY: install dev build start lint test format docker-build docker-run

install:
	npm install
	npm run lint
	npm run test
	npm run build
	@echo "Install complete"

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

test:
	npm run test

format:
	npx prettier --write "**/*.{ts,tsx,js,jsx,md,json}"

docker-build:
	docker build -t portfolio:latest .

docker-run:
	docker run --rm -p 3000:3000 portfolio:latest
