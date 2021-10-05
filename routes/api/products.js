const router = require("express").Router();

const productcontroller = require("../../controllers/productcontroller");

router.route("/")
.get(productcontroller.findAll)

router.route("/:id")
    .get(productcontroller.findById)

module.exports = router

