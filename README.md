# Overview

This is an API builded with TS, Express and Mysql. The goal of the project is to have an API to track daily tasks.

# Requirements

MySQL / MariaDB server

Node 18.12.0 || 20.18.0

# Installation

git clone https://github.com/Riper3/to-do-api.git

cd to-do-api

npm install

Create a .env with the following values and filled with your data:

DB_HOST =
DB_USER =
DB_PASS =
DB_NAME =

npm run create-database

npm start

# Serverless framework

npm i serverless -g

serverless

serverless deploy

# Scripts

### npm start

Start the API, you have to run a build before running npm start

### npm run build

Output a build on ./dist

### npm run dev

Runs the project with no need of a build

### npm run create-database

Creates an empty database schema with the sturcture needed for the project, be careful, this script deletes your current datase. The database name would be the one specified on your .env

# Endpoints

All the endpoints follow this desing, url/api/module/endpoint

### GET api/tasks/get-all

This endpoint returns all your tasks

### POST api/tasks/insert

This endpoint inserst a new task linked to your user

| Params  | Type |
| ------------- |:-------------:|
| name      | string     |
| due_date      | string     |

### PUT api/tasks/update:id

This endpoint update the status of the task, if it is active (1) it will change to 0 and the opposite.