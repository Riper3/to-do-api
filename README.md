# Overview

This is an API built with TS, Express and Mysql. The goal of the project is to have an API to track daily tasks.

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

The project assumes the database is deployed in an external server, your .env is setup properly and you have a AWS account

npm run build

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

Creates an empty database schema with the sturcture needed for the project, be careful, this script deletes your current database. The database name would be the one specified on your .env

# Endpoints

All the endpoints follow this design, url/api/module/endpoint

### GET api/tasks/get-all

This endpoint returns all your tasks

### POST api/tasks/insert

This endpoint inserts a new task linked to your user

| Params  | Type |
| ------------- |:-------------:|
| name      | string     |
| due_date      | string     |

### PUT api/tasks/update:id

This endpoint update the status of the task, if it is active (1) it will change to 0 and the opposite

### POST api/auth/new-device

This endpoint returns a token and store in the database from a device id

| Params  | Type |
| ------------- |:-------------:|
| device_id      | string     |

# Thoughts / Next steps

## Data storage

At the moment, the project is using MySQL on the API and has implemented redux-persist on the frontend to manage API keys from responses, etc.

## Authentication between the front and back end

Currently, there is no authentication. The idea is that signup is not compulsory. The app, once initialized, asks for a temporary token linked to the user device. If the user is not already signed in, unfortunately, this technique on the website only works until the user leaves, as the device ID is unknown. The user will have the option to sign in with email, password, name, etc., to be able to log in from other devices.

For users without an account, the authentication will use a static, unencrypted token generated by UUID. For users with accounts, I will use the bearer token system, generating a basic token to log in to the app with the user data, make a request to the API, and obtain a bearer token with an expiry date.

## Automated testing

All the services on the API are suitable for automated testing. You should use /modules/{module}/services, recreate a request object, and check the desired result.

I usually use GitLab Runner (https://docs.gitlab.com/runner/) for CI/CD, deployment, and testing.

## Monorepo or separate repos

I lost interest in monorepos a long time ago because using the same API for three websites and two apps with a monorepo API integrated with another frontend could be messy.

My preferred approach is separate repos.

## Project / Code structure

For an API, I usually use this structure:

|bin <br />
|----------scripts <br />
|modules <br />
|----------module <br />
|--------------------controller <br />
|--------------------services <br />
|--------------------routes <br />
|router <br />
|----------main-router <br />
|utils <br />
|----------share-functions <br />

For React Native, I am quite new to the technology and still learning about it.

## Code Linting

Nowadays, my favorite linting tool is Visual Studio Code. If you install the proper extensions, you will quickly notice what is happening or why your code is not working as expected.