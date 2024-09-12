const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// TODO: Add your routes here
router.use("/reviews", reviewsRouter);
router.use("/theaters", theatersRouter);

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router.route("/:movieId/reviews")
    .get(controller.listReviews)
    .all(methodNotAllowed);

router.route("/:movieId/theaters")
    .get(controller.listTheaters)
    .all(methodNotAllowed);

module.exports = router;

module.exports = router;
