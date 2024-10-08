const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const fetchCriticDetails = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

async function read(review_id) {
  return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("c.*", "r.*")
    .where({ review_id })
    .first()
    .then(fetchCriticDetails);
}

async function getCriticReview(reviewId) {
  const result = await knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .first();

  const updatedReview = fetchCriticDetails(result);
  return updatedReview;
}

function update(updatedReview) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("c.*", "r.*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*");
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

function list() {
  return knex("reviews").select("*");
}

module.exports = {
  update,
  getCriticReview,
  read,
  destroy,
  list,
};
