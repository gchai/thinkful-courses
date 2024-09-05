const knex = require("../db/connection");

async function averageRating() {
  const avgRating = await knex("restaurants")
    .avg("rating as average_rating")
    .first();
  avgRating.average_rating = Number(avgRating.average_rating);
  console.log(avgRating);
  return avgRating;
}

async function count() {
  const result = await knex("restaurants").count("restaurant_id").first();
  result.count = Number(result.count);
  return result;
}

function create(newRestaurant) {
  return knex("restaurants")
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex("restaurants").where({ restaurant_id }).del();
}

function list() {
  return knex("restaurants").select("*");
}

function read(restaurant_id) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

function readHighestRating() {
  return knex("restaurants").max("rating as max_rating").first();
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  read,
  readHighestRating,
  update,
};
