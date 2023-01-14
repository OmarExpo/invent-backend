# Invent-App Backend

## Note: this is the backend repository part of a full stack Inventory Management Application. The frontend repository is available here:

Here is the repo for the frontend: [https://github.com/OmarExpo/invent-frontend]

<hr/>

- Inventory Management system is a SaaS-based web application that enables users to create,store and manage stock (i.e, products).

- The application also provides some other features like Bug reporting, security, and the ability for user to change its informations.

- The application only allow logged in users and, if not, offer registration

- It is a management system that helps to manage products and users.

<hr/>

## Tools & Technology used :

REACT JS (frontend)

NODE JS (backend)

EXPRESS (backend)

MONGO DB Atlas(backend - NoSQL for data persistence)

JWT Authentication (backend)

Cloudinary (backend - for media management such as images & videos)

Visual Studio for IDE of choice

<hr/>

### Two main category of RestAPIs

Products and Users available at this endpoint:

<li>api/products</li>  
  all CRUD operations available (GET - POST - UPDATE - DELETE)

<li>api/users</li>
 This endpoint is protected (thus can only be accessed by logged in users)

<hr/>

How to run this project in a local development machine

Make sure you install node modules in both frontend and backend using npm install command

create .env file (this file is not present here due to security best practices but that's

where you store your evironments variables)

(note: Here I am using mondo DB Atlas which provides a free cloud-based database so you can paste the URL provided by the atlas or you can install your own database)

### npm run dev

run both projects with the npm start & npm run dev command

<hr/>

### Deployment

This full stack application was deployed separately:

\_ backend in Render and

\_ frontend in Vercel (also in Amplify)

All available in the report.
