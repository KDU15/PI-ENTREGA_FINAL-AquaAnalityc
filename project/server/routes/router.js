const router = require("express").Router();

const reservRouter = require('./services')

router.use("/", reservRouter)

module.exports = router;