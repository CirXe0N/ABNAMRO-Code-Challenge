## ABN AMRO - Coding Challenge

This is a project based on an assignment given by ABN AMRO. 
The assignment description can be found [here](#assignment-description).

### Table of contents:
- [Prerequisites](#prerequisites)
- [Backend: Express.JS Server](#backend-expressjs-server)
    - [Backend: Installation](#backend-installation)
    - [Backend: Usage](#backend-usage)
- [Frontend: Vue.JS Client App](#frontend-vuejs-client-app)
    - [Frontend: Installation](#frontend-installation)
    - [Frontend: Usage](#frontend-usage)
- [Assignment Description](#assignment-description)
    - [User Story](#user-story)
    - [Design](#design)
    - [Functional Requirements](#functional-requirements)
    - [Migration](#migration)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Additional Points](#additional-points)
    - [Assessment Requirements](#assessment-requirements)
    
### Prerequisites:
- [Node v14.15+](https://nodejs.org/en/)
- [NPM 6.14+](https://www.npmjs.com/get-npm)
- [Neo4J 4.1.5](https://neo4j.com/download-center)

### Backend: Express.JS Server
#### Backend: Installation
1. Make sure `Node.JS` and `NPM` are installed on the system.
1. Make sure `Neo4J` database is set up and running properly.
1. Open the terminal and change to the folder `backend` of the project.
1. Create `.env` file in the folder `backend`.
1. Add the following lines in the `.env` file and in case necessary change the values according to your Neo4J configurations:
    ```
    NEO4J_PROTOCOL=bolt
    NEO4J_HOST=localhost
    NEO4J_USERNAME=neo4j
    NEO4J_PASSWORD=password
    NEO4J_PORT=7687
    NEO4J_DATABASE=neo4j
    NEO4J_ENCRYPTION=ENCRYPTION_OFF
    ```
1. Run the following command in the folder `backend` to install the project dependencies:
    ```commandline
    $ npm install
    ```
1. Run the following command in the folder `backend` to migrate the initial data to Neo4J database:
    ```commandline
    $ npm run migrate
    ```

#### Backend: Usage
1. Follow the instructions of the [installation paragraph](#backend-installation) first.
1. Run the following command in the folder `backend` to start the project:
    ```commandline
    $ npm run start
    ```

#### Backend: Run Tests
1. Follow the instructions of the [installation paragraph](#backend-installation) first.
1. Run the following command in the folder `backend` to start the project:
    ```commandline
    $ npm run test
    ```

### Frontend: Vue.JS Client App
#### Frontend: Installation
1. Make sure `Node.JS` and `NPM` are installed on the system.
1. Make sure the `backend` application is running properly.
1. Open the terminal and change to the folder `frontend` of the project.
1. Create `.env` file in the folder `frontend`.
1. Add the following lines in the `.env` file and in case necessary change the values accordingly:
    ```
    VUE_APP_BACKEND_HOST='http://127.0.0.1:8000'
    ```
1. Run the following command in the folder `frontend` to install the project dependencies:
    ```commandline
    $ npm install
    ```

#### Frontend: Usage
1. Follow the instructions of the [installation paragraph](#frontend-installation) first.
1. Run the following command in the folder `frontend` to start the project:
    ```commandline
    $ npm run serve
    ```

#### Frontend: Run Tests
1. Follow the instructions of the [installation paragraph](#frontend-installation) first.
1. Run the following command in the folder `frontend` to start the project:
    ```commandline
    $ npm run test
    ```   

### Assignment Description

#### User Story
As a user, I would like to see the hierarchy of the provided data. If I click one of the nodes, I
would like to see the detail of that node.

#### Design
This is an opportunity to show what you’re capable of, so don’t hold back. The image below
shows a very rough sketch of how the data hierarchy works, but our stakeholders would
love to see some more creativity.

#### Functional Requirements
This task should contain all code in one repository. You can separate this task into 3 phases.
Data import, Backend API, Frontend.

#### Migration
- It needs to be a single Node.js file (migration.js) which only stores the data. It would
be a separate code which we can run it with “npm run migrate” command.
- You can read the data from the gist link or copy the data into your code.
- As a database we recommend you to use graph database (neo4j). If you are
comfortable with other databases you can use them also.
  
#### Backend
- We expect from you to create a express.js server which has a GET endpoint which
serves the data with correct hierarchy.
- Read the data from database and serve it to frontend with JSON format.

#### Frontend 
- Read the data from Backend via GET endpoint.
- Please feel free to use a front-end visualization library like D3.js.
- You can use plain VanillaJS or VueJS.
- Usage of TypeScript, Sass, Webpack is your consideration.
- Hierarchy should be visible and understandable by the user.
- Tree layout could be from top to right or left to right.
- If user clicks one of the nodes, description and the name should be visible in a
sidebar or popup. Selected node should be visible on the layout.
- User should be able to deselect a node. (In the sample design, user can click the
cross icon and deselect it)

#### Additional Points 
- Read the data from Backend via GET endpoint.
- Please feel free to use a front-end visualization library like D3.js.
- You can use plain VanillaJS or VueJS.
- Usage of TypeScript, Sass, Webpack is your consideration.
- Hierarchy should be visible and understandable by the user.
- Tree layout could be from top to right or left to right.
- If user clicks one of the nodes, description and the name should be visible in a
sidebar or popup. Selected node should be visible on the layout.
- User should be able to deselect a node. (In the sample design, user can click the
cross icon and deselect it)

#### Assessment Requirements
- Share a public git repository with source code
- Git Repo should contain a README that describes how to use the application.
