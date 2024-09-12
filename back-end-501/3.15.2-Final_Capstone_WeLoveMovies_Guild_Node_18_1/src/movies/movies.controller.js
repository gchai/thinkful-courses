const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const { movieId } = request.params;
  const movie = await service.read(movieId);
  if (movie) {
    response.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie not found" });
}

async function read(request, response) {
  const { movieId } = request.params;
  const data = await service.read(movieId);
  if (data) {
    response.json({ data });
  } else {
    response.status(404).json({ error: "Movie not found" });
  }
}

async function list(request, response) {
  const { is_showing } = request.query;
  const data = await service.list(is_showing);
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
