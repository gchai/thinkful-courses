const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const methodNotAllowed = require("../errors/methodNotAllowed");

async function reviewExists(request, response, next) {
  const { reviewId } = request.params;
  const review = await service.read(reviewId);
  if (review) {
    response.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found.` });
}

async function destroy(request, response) {
  const { review } = response.locals;
  await service.delete(review.review_id);
  response.sendStatus(204);
}

async function list(request, response) {
  const { movieId } = request.params;
  const data = await service.list(movieId);
  response.json({ data });
}

function hasMovieIdInPath(request, response, next) {
  if (request.params.movieId) {
    return next();
  }
  methodNotAllowed(request, response, next);
}

function noMovieIdInPath(request, response, next) {
  if (request.params.movieId) {
    return methodNotAllowed(request, response, next);
  }
  next();
}

async function update(request, response) {
  const { review } = response.locals;
  const updatedReview = {
    ...review,
    ...request.body.data,
  };
  await service.update(updatedReview);
  response.json({ data: updatedReview });
}

module.exports = {
  destroy: [
    noMovieIdInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(destroy),
  ],
  list: [hasMovieIdInPath, asyncErrorBoundary(list)],
  update: [
    noMovieIdInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(update),
  ],
};
