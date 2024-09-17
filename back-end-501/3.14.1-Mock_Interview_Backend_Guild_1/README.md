# Back End Development: Mock Interview Coding Challenge

Here at North Pole Holiday Call Center, we have a custom database with details about employees, customers, and calls handled by the customer support team. They're looking for a way to get visibility into their data and have tasked your backend engineering team to create an API to make the database more accessible.

## Instructions

For this challenge, you will be configuring GET and POST endpoints for the customer table. The challenge is completed when all tests pass.

Here's an ERD representation of the Call Center Database to use as reference while you build your endpoints.  
![image.png](http://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ae5dc26d3357c1471d7a72bb92a514d5-image.png)

### Existing files

|file path|description|
|---|---|
|`src/app.js`|Contains the app's routers. You do not need to edit this file.|
|`src/server.js`|The server file that runs the app. Place your server code here.|
|`src/customers/customers.controller.js`|This file has starter code. Write your code to configure the endpoint here.|
|`src/customers/customers.router.js`|This file has starter code. You'll finish building the routes as part of the challenge.|
|`src/employees/employees.controller.js`|The logic to handle requests for the employee API endpoints. You do not need to edit this file.|
|`src/employees/employees.router.js`|Handles the routing of the /employee API endpoints. You do not need to edit this file.|
|`src/tickets/tickets.controller.js`|The logic to handle requests for the tickets API endpoints. You do not need to edit this file.|
|`src/tickets/tickets.router.js`|Handles the routing of the /tickets API endpoints. You do not need to edit this file.|
|`test/candidate.test.js`|The tests your code will run against. You do not need to edit this file.|

### Tasks

1. Configure the `src/customers/customers.router.js` file to respond to the route `GET /customers/:customerId` and the route `POST /customers`. The functions are declared in the `src/customers/customers.controller.js` file
2. Create the `read` function in `src/customers/controller.js` to GET a customer based on a customer's id. The endpoint should return all details of the customer record and a `200` status code.
3. Create the `create`function in `src/customers/controller.js` to create a customer record in the customer table on POST. The endpoint should return the newly created record and a `201` status code.

### Documentation

For this challenge, you may refer to official documentation resources such as the [Node.js reference documentation](https://nodejs.org/en/docs/), the [Express.js Documentation](http://expressjs.com/en/api.html) and the [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).