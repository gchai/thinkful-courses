const WeatherStatus = require("./weather.model");

async function list(req, res) {
  // TODO: Task 2 - GET /weather - list all the weather documents
  const weatherDocs = await WeatherStatus.find();
  console.log(weatherDocs)
  res.json(weatherDocs);
}

function bodyDataHas(propertyName) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({
      status: 400,
      message: `Must include a ${propertyName}`,
    });
  };
}

async function create(req, res) {
  // TODO: Task 3 POST /weather - add a new weather status
  const { data } = req.body;
  const newWeatherStatus = await WeatherStatus.create(data);
  res.status(201).json({ data: newWeatherStatus });
}

async function weatherStatusExists(req, res, next) {
  const { weatherStatusId } = req.params;
  const foundWeatherStatus = await WeatherStatus.findOne({
    _id: weatherStatusId,
  });
  if (foundWeatherStatus) {
    res.locals.weatherStatus = foundWeatherStatus;
    return next();
  }
  next({
    status: 404,
    message: `Weather Status id not found: ${weatherStatusId}`,
  });
}

function read(req, res, next) {
  //TODO: Task 4 GET /weather/:weatherStatusId - get the weather status with a specific id
  const weatherStatus = res.locals.weatherStatus;
  res.json({ data: weatherStatus });
}

async function update(req, res) {
  // TODO: Task 5 PUT /weather/:weatherStatusId - update the weather status with a specific id
  const { data } = req.body;
  const weatherStatus = res.locals.weatherStatus;

  Object.assign(weatherStatus, data);

  const newWeatherStatus = await weatherStatus.save();

  res.json({ data: newWeatherStatus });
}

async function destroy(req, res) {
  // TODO: Task 6 DELETE /weather/:weatherStatusId - delete the weather status with a specific id
  const weatherStatus = res.locals.weatherStatus;
  await weatherStatus.remove();
  res.sendStatus(204);
}

module.exports = {
  list,
  create: [
    bodyDataHas("date"),
    bodyDataHas("city"),
    bodyDataHas("state"),
    bodyDataHas("country"),
    bodyDataHas("temperature"),
    bodyDataHas("condition"),
    create,
  ],
  read: [weatherStatusExists, read],
  update: [
    weatherStatusExists,
    bodyDataHas("date"),
    bodyDataHas("city"),
    bodyDataHas("state"),
    bodyDataHas("country"),
    bodyDataHas("temperature"),
    bodyDataHas("condition"),
    update,
  ],
  delete: [weatherStatusExists, destroy],
};
