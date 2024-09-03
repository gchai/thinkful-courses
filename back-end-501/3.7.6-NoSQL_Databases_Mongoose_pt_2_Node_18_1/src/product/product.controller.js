const Product = require("./product.model");

async function list(req, res) {
  // TODO: Write your code here
  const productDocuments = await Product.find();
  console.log(productDocuments);
  res.json(productDocuments);
  res.send("");
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
  //TODO: Write your code here
  const { data } = req.body;
  const newProduct = await Product.create(data);
  res.status(201).json({ data: newProduct });
}

module.exports = {
  list,
  create: [bodyDataHas("name"), bodyDataHas("cost"), create],
};
