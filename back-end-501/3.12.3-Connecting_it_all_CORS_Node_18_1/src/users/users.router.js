const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");
const corsGet = cors({methods:"GET"})

router
  .route("/:userId")
  .get(cors(),controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(),controller.list)
  .post(controller.create)
  .options(corsGet)
  .all(methodNotAllowed);

module.exports = router;
