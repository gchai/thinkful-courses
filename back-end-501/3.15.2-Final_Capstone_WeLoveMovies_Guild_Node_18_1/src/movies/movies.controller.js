const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
}

async function read(req, res, next) {
  const data = res.locals.movie;
  res.json({ data: data });
}

async function list(req, res) {
  const allMovies = await service.list();
  const currentlyShowing = await service.isShowing();
  const isShowing = req.query.is_showing;
  const data = isShowing ? currentlyShowing : allMovies;
  res.json({ data });
}

async function fetchTheaters(req, res, next) {
  const { movieId } = req.params;
  const data = await service.fetchTheaters(movieId);
  res.json({ data });
}

async function fetchReviews(req, res, next) {
  const { movieId } = req.params;
  const data = await service.fetchReviews(movieId);
  res.json({ data });
}

module.exports = {
  list,
  read: [asyncErrorBoundary(movieExists), read],
  fetchTheaters: [asyncErrorBoundary(movieExists), fetchTheaters],
  fetchReviews: [asyncErrorBoundary(movieExists), fetchReviews],
};
