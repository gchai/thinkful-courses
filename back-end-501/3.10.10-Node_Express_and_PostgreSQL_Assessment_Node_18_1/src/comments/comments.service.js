const knex = require("../db/connection");

function list() {
  return knex("comments").select("*");
}

function listCommenterCount() {
  return knex("comments as c")
    .join("users as u", "u.user_id", "c.commenter_id")
    .select("u.user_email as commenter_email")
    .count("u.user_email")
    .groupBy("commenter_email")
    .orderBy("commenter_email");
}

function read(commentId) {
  return knex("comments as c")
    .join("posts as p", "p.post_id", "c.post_id")
    .join("users as u", "u.user_id", "c.commenter_id")
    .where("c.comment_id", commentId)
    .select(
      "c.comment_id",
      "c.comment",
      "u.user_email as commenter_email",
      "p.post_body as commented_post"
    )
    .first();
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
