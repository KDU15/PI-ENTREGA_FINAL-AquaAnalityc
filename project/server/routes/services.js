const router = require("express").Router();

const reservController = require("../controllers/reservController")

router
    .route("/reserv")
    .post((req, res) => reservController.create(req, res));


router.route("/reserv").get((req,res) => reservController.getAll(req,res)); 


router.route("/reserv/:id").get((req,res) => reservController.get(req,res));

router.route("/reserv/:id").delete((req,res) => reservController.delete(req,res));

router.route("/reserv/:id").put((req, res) => reservController.update(req,res));


module.exports = router;