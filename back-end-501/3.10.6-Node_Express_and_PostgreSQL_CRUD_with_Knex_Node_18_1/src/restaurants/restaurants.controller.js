const restaurantsService = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const VALID_PROPERTIES = ["restaurant_name", "address", "cuisine"];

function propertyValidator(req, res, next) {
  const { data = {} } = req.body;

  const invalidProps = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidProps.length) {
    return next({
      status: 400,
      message: `Invalid properties(s): ${invalidProps.join(", ")}`,
    });
  }
  next();
}

function bodyValidator(property) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (!data[property]) {
      return next({
        status: 400,
        message: `Body must contain valid ${property}.`,
      });
    }
    next();
  };
}

async function restaurantExists(req, res, next) {
  const { restaurantId } = req.params;

  const restaurant = await restaurantsService.read(restaurantId);

  if (restaurant) {
    res.locals.restaurant = restaurant;
    return next();
  }
  next({ status: 404, message: `Restaurant cannot be found.` });
}

async function list(req, res, next) {
  const data = await restaurantsService.list();
  res.json({ data });
}

async function create(req, res, next) {
  const data = await restaurantsService.create(req.body.data);
  res.status(201).json({ data });
}

async function update(req, res, next) {
  const updatedRestaurant = {
    ...res.locals.restaurant,
    ...req.body.data,
    restaurant_id: res.locals.restaurant.restaurant_id,
  };

  const data = await restaurantsService.update(updatedRestaurant);

  res.json({ data });
}

async function destroy(req, res, next) {
  const { restaurant } = res.locals;
  await restaurantsService.delete(restaurant.restaurant_id);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    propertyValidator,
    bodyValidator("restaurant_name"),
    bodyValidator("cuisine"),
    bodyValidator("address"),
    asyncErrorBoundary(create),
  ],
  update: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(destroy)],
};
