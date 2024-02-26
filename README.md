# SERVER-SIDE COMMERCE



## Badges
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)



## Table of Contents
- [License](#license)
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)



## License
This project was made using the MIT license. [License Link](LICENSE)



## Description

This project serves as the backend infrastructure for an e-commerce platform, operating on the server-side and utilizing Express.js and Sequelize as the ORM (Object-Relational Mapping) to facilitate interactions with a MySQL database. Designed to streamline the management of products, categories, and tags, it offers a robust and organized system. With seamless integration capabilities, it empowers developers to build sophisticated front-end e-commerce applications.



## Technologies Used

- Express.js: Used as the web application framework for Node.js to handle server-side logic and routing.
- Sequelize: An ORM (Object-Relational Mapping) for Node.js, used to interact with the MySQL database.
- MySQL: A relational database management system used to store data for the e-commerce application.
- dotenv: A module used to load environment variables from a .env file into process.env, commonly used for storing sensitive information like database credentials.
- JavaScript: The primary programming language used for server-side logic and client-side interactions.
- Postman: Used for testing the API endpoints by sending requests (GET, POST, PUT, DELETE) and verifying responses.
- Git/GitHub: Version control system and code hosting platform used for collaboration and managing project codebase.
- Markdown: Used for writing the README file in a structured and formatted manner.
- npm: The package manager for JavaScript, used to install and manage project dependencies.
- YouTube: Used for hosting and sharing walkthrough videos demonstrating the functionality of the e-commerce backend.



## Installation and Usage

To install and use the Server-Side Commerce Application:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running npm install.
4. Seed the database by running npm run seed.
5. Start the server by running node server.
6. Use Postman to interact with the API endpoints and explore the features of the Server-Side Commerce Application.



## Usage
Enter `node server.js or node server` in the terminal, and the site will load at `http://localhost:3001`. 
Requests can be made using the appropriate API routes.

### API Endpoints

#### Categories

- **GET /api/categories**: Fetch all categories.
- **GET /api/categories/:id**: Fetch a single category by ID.
- **POST /api/categories** Create a new category.
- **PUT /api/categories/:id**: Update a category by ID.
- **DELETE /api/categories/:id**: Delete a category by ID.

#### Products

- **GET /api/products**: Fetch all products.
- **GET /api/products/:id**: Fetch a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

#### Tags

- **GET /api/tags**: Fetch all tags.
- **GET /api/tags/:id**: Fetch a single tag by ID.
- **POST /api/tags**: Create a new tag.
- **PUT /api/tags/:id**: Update a tag by ID.
- **DELETE /api/tags/:id**: Delete a tag by ID.



## Tests

I used CRUD tests to ensure that my API endpoints were functioning correctly and reliably for my application. CRUD (Create, Read, Update, Delete) operations are often the focus of testing in web applications, including API routes. Testing CRUD operations ensures that your application can effectively perform these basic database operations and handle various scenarios.




![ssc01](https://github.com/Lychnian/server-side-commerce/assets/140586279/f696e716-0508-4622-8852-e0c340e78d09)




![ssc02](https://github.com/Lychnian/server-side-commerce/assets/140586279/414571ee-f57a-4422-9605-06e2b8334b46)




![ssc05](https://github.com/Lychnian/server-side-commerce/assets/140586279/7fa83dab-21c7-4499-b9c6-1d33d82dd2f8)




![ssc06](https://github.com/Lychnian/server-side-commerce/assets/140586279/6f375d4e-f781-4e1f-8931-7647c68d622d)




![ssc08](https://github.com/Lychnian/server-side-commerce/assets/140586279/a841df89-6ecf-4fc3-91e8-4f1c1f2fa357)




![ssc10](https://github.com/Lychnian/server-side-commerce/assets/140586279/c2f3d747-aece-43ec-afc6-971c2d07d20a)




![ssc12](https://github.com/Lychnian/server-side-commerce/assets/140586279/a4a3930d-a10c-4bbf-bba0-237d355d2ce4)




![ssc13](https://github.com/Lychnian/server-side-commerce/assets/140586279/e523d684-be8f-43f3-984e-f57dac1f5c5c)



![ssc14](https://github.com/Lychnian/server-side-commerce/assets/140586279/07a9b4a8-72c8-421c-95d6-c12f0c298d10)




![ssc16](https://github.com/Lychnian/server-side-commerce/assets/140586279/fbb2179d-5a3a-4100-b158-d596d83959a6)




![ssc17](https://github.com/Lychnian/server-side-commerce/assets/140586279/be9f4b63-6d34-41c4-9596-2fd0d40fc212)




## Demo

The demo video provides an illustrative walkthrough showcasing the functionality and features of the Server-Side Commerce Application, highlighting its seamless integration with Express.js, Sequelize ORM, and MySQL database to manage products, categories, and tags effectively.

YouTube demo video: https://www.youtube.com/watch



## Screenshots





## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)  




## Questions
For further inquiries or assistance, feel free to reach out:
- GitHub: [Lychnian](https://github.com/Lychnian)
