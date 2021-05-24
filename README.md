# Demo healthcare backend application

## General info

This project was made to introduce how great the TypeGraphQL and Prisma work together. It is only a backend application which connects to a database and make possible to run queries and mutations from the GraphQL playground.

## Technologies

Project was created with:

- TypeScript
- TypeGraphQL
- Apollo Server
- Prisma
- PostgreSQL

## Setup

To run this project

- Install the package dependencies with `yarn`
- Set the `.env` file as it is in the `.env.example` file
- Start the database in docker `docker-compose up`
- Run the migrations if necessary `yarn run prisma:migrate`
- Run the application `yarn run dev`
