# Assessment: Robust server architecture

**4 hours**Average completion time

#### Overview

###### In this lesson, you'll apply your new skills to complete an assessment.

This is your final lesson in this module! You've developed a lot of new skills in this module, so get ready to put them into action as you tackle this challenge.

## Robust server structure: URL shortener service

### Instructions

Your task is to build a URL shortener service API using Node.js and Express. It should allow users to submit a URL and receive a shortened code, or ID, that can be used to retrieve the original URL later. It should also keep track of how often each shortened URL is retrieved so that you can calculate the most popular URLs.

### What is a URL shortener?

The ecommerce company that you work for sells many different products under different categories. Here's an example: www.shoppingsite.com/category/shoe/product/nike132032.

If a customer wants to share a link to the product on X, formerly known as Twitter, they might run into restrictions on the text length.

A URL shortener service overcomes this issue by shortening www.shoppingsite.com/category/shoe/product/nike/132032 to www.shoppingsite.com/8d13lk2k.

## Existing files

You will only need to edit the src folder and follow code organization principles you learned in this module.

Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the data in the same shape.

## Tasks

### Create routes and handlers to create, read, update, delete, and list short URLs

You will need to create the following API endpoints for the url resources:

| HTTP verb | Path                     | Description                                             |
| --------- | ------------------------ | ------------------------------------------------------- |
| POST      | /urls                    | Create a new short URL                                  |
| GET       | /urls/:urlId             | Retrieve a short URL by ID                              |
| PUT       | /urls/:urlId             | Update a short URL by ID                                |
| GET       | /urls                    | Retrieve a list of all short URLs                       |
| GET       | /urls/:urlId/uses        | Retrieve a list of use metrics for a given short URL ID |
| GET       | /urls/:urlId/uses/:useId | Retrieve a use metric by ID for a given short URL ID    |

Short URLs cannot be deleted after they are created, because this would break existing links.

Note: You have five tasks to complete for this assessment. These tasks are described below.

#### Create

Task 1: In the src/urls/urls.controller.js file, complete the create() handler so that you can create a new URL.

The following Postman screenshot shows the data posted to /urls and the response from the server.

![A screenshot of Postman showing the the data posted to /urls and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/PgGHtonfG8jrcc7A1TokB/469b20bcd422540e61bbff609b67c4f7/Eng-Robust_server_structure_001.png)

POST { data: {"href":"www.some-url.com"} } to /urls should assign an id to the object, save it, and return the saved object as a response to the client.

#### Read

The following Postman screenshot shows a GET request to /urls/:urlId and the response from the server.

Additionally, use records are created as a side effect of a GET request to /urls/:urlId. Each use record contains an id, a urlId that corresponds to the ID of the URL being tracked by the use metric, and a time property (set to Date.now()) indicating when the use metric was recorded.

![A screenshot of Postman showing a GET request to /urls/:urlId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/71Mj3wEWUTX2huXqqezyeS/dfa8f64a90dbbcfda2fbb1a5ed71b7d0/Eng-Robust_server_structure_002.png)

Note: The read() method has already been completed for you.

#### Update

Task 2: In the src/urls/urls.controller.js file, complete the update() handler so that you can update the href property of an existing url.

The following Postman screenshot shows a PUT request to /urls/:urlId and the response from the server.

![A screenshot of Postman showing a PUT request to /urls/:urlId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/fIxrWpy8A4EHcrj7MymxZ/40fac6930013bd814149fe0b6972aaf5/Eng-Robust_server_structure_003.png)

#### List

Task 3: In the src/urls/urls.controller.js file, complete the list() handler so that it responds with a list of all urls.

The following Postman screenshot shows a GET request to /urls and the response from the server.

![A screenshot of Postman showing a GET request to /urls and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/3wVZ3GSw2q8zUpyoX1BG5a/bd860815b0099a0db67c248217674edf/Eng-Robust_server_structure_004.png)

#### Delete

The following Postman screenshot shows a DELETE request to /urls/:urlId and the response from the server.

![A screenshot of Postman showing a DELETE request to /urls/:urlId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/4tRLysVj7Cbc7zbfJXnkfx/8f3e3fae5d3743a79313edd0751de3c4/Eng-Robust_server_structure_005.png)

#### List short URL uses

The following Postman screenshot shows a GET request to /urls/:urlId/uses and the response from the server.

![A screenshot of Postman showing a GET request to /urls/:urlId/uses and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/1Thov7KSYxCApbJSunvU5H/82491b54fb05f9ad2de06b29d86c12b8/Eng-Robust_server_structure_006.png)

#### Read short URL use

The following Postman screenshot shows a GET request to /urls/:urlId/uses/:useId and the response from the server.

![A screenshot of Postman showing a GET request to /urls/:urlId/uses/:useId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/7A4zmcSwgsbJY84BGicaAr/eee483b04bc652dbd7b2bbbe967326d9/Eng-Robust_server_structure_007.png)

The service should return a 404 error if the :urlId and :useId are mismatched. For example, if you send a GET request to /42/uses/79, and useId 79 isn't associated with urlId 42, the server should respond with 404.

### Create routes and handlers to create, read, update, delete, and list use metrics related to short URLs

You will need to create the following API endpoints for the uses resources:

|HTTP verb|Path|Description|
|---|---|---|
|GET|/uses/:useId|Retrieve a use metric by ID|
|DELETE|/uses/:useId|Delete a use metric by ID|
|GET|/uses|Retrieve a list of all use metrics|

The uses resources have a path of /uses and are a record of every GET request for a specific short URL.

#### Create

Creating use records through the API is not allowed. Use records are created as a side effect of a GET request to /urls/:urlId.

The following Postman screenshot shows the data posted to /urls/:urlId and the response from the server.

![A screenshot of Postman showing the data posted to /urls/:urlId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/6xIXF2Zdbyg6AlsRoAIRNa/d6a628c9ff8d076a78f6d04a2265119c/Eng-Robust_server_structure_008.png)

#### Read

The following Postman screenshot shows a GET request to /uses/:useId and the response from the server.

![A screenshot of Postman showing a GET request to /uses/:useId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/6UiqqgAhGYKXzI5n5hT63m/c3460ef3bdbd0958b63f8950af7952bc/Eng-Robust_server_structure_009.png)

#### Update

The following Postman screenshot shows a PUT request to /uses/:useId and the response from the server.

![A screenshot of Postman showing a PUT request to /uses/:useId and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/7zXgY6XkPb8RzFjG9eWdb7/c27e963fc56ec65d9136823017801d27/Eng-Robust_server_structure_010.png)

#### Delete

Task 4: In the src/uses/uses.controller.js file, complete the destroy() handler so that you can delete an existing use if it exists.

The following Postman screenshot shows a DELETE request to /uses/:useId and the 204 response from the server.

![A screenshot of Postman showing a DELETE request to /uses/:useId and the 204 response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/23cS01xxFioENXkDoxy4C8/4b63f503f0385293b88981713440189d/Eng-Robust_server_structure_011.png)

#### List

The following Postman screenshot shows a GET request to /uses and the response from the server.

![A screenshot of Postman showing a GET request to /uses and the response from the server.](https://images.ctfassets.net/c7lxnbtvvcxm/6E2OPZP9E6YHgXJmLXDXnC/aa6e324d3fcff4ee91ad05b860055a3e/Eng-Robust_server_structure_012.png)

### Handle errors properly

- Return a 404 error for any nonexistent path or resource.
    
- Methods that are not allowed (for example, a DELETE request sent to /urls/:urlId) should return 405.
    

Task 5: In the src/errors/methodNotAllowed.js file, complete the methodNotAllowed() middleware so that it returns 405 for methods that are not allowed.

### Saving data

There is no database in use for this project. All changes are stored in-memory.

The short URL data is exported from /src/data/urls-data.js. The use data is exported from /src/data/uses-data.js. There is some existing data in each file to give you a starting place.

Add and remove data from the arrays using push() and splice(), respectively. When you restart your server, any changes made to these arrays will be lost.

### Assigning IDs

IDs are often assigned by the database. Since your API is not connected to a database, you can use array.length + 1 to assign IDs, as you can see below:

const newUrlId = urls.length + 1;

const newUseId = uses.length + 1;

However, note that this method of assigning IDs to your database records is not recommended in practice and is only used in this assessment for simplicity so that you can focus on building the API. Later on, in the backend module, you will learn about industry-standard databases and better ways to assign IDs to database records.

### Assigning time property

Use Date.now() to assign the time property of uses.