const knex = require("../db/connection");

const tableName = "customer";

function read(customer_id) {
  // Complete the implementation of this method.
  return { customer_id };
}

function create(newCustomer) {
  // Complete the implementation of this method.
  return newCustomer;
}

module.exports = {
  create,
  read,
};
