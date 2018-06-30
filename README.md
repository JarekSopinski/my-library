# my-library
A full stack web application that keeps track of books read by a user.

---

#### Overview

This CRUD app combines Node / Express backend with React frontend. Data are kept in MongoDB hosted on mLab. Redux is responsible for handling state and api calls, while Semantic UI provides basic styling.

---

#### Server

In development there are two servers: Webpack dev server (client side code, port 3000) and Express server (backend API, port 8080). Of course, only the second one is used for production. Nodemon provides auto reloading in development.

---

#### Structure

Backend files:

>src/server

Frontend files:

>src/client

---

#### Installation - NPM users

Clone this repository and navigate to my-library folder. Choose from the following commands:

Install dependencies

> npm install

Run development (ports 3000 and 8080)

> npm run dev

Create production build in the /dist folder:

> npm run build

Start production server on port 8080:

> npm start

---

#### Installation - Yarn users

Clone this repository and navigate to my-library folder. Choose from the following commands:

Install dependencies

> yarn

Run development (ports 3000 and 8080)

> yarn dev

Create production build in the /dist folder:

> yarn build

Start production server on port 8080:

> yarn start

---

&copy; 2018 Jarosław Sopiński
