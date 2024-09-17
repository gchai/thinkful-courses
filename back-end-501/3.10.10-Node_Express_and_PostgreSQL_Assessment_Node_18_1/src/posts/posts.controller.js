const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function postExists(req, res, next) {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function update(req, res) {
  const post = { ...req.body.data, post_id: res.locals.post.post_id };
  const data = await service.update(post);
  const update = data[0];
  res.json({ data: update });
}

async function destroy(req, res) {
  const { post } = res.locals;
  await service.delete(post.post_id);
  res.status(204).send("No Content");
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
