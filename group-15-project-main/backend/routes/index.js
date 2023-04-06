const express = require("express");
const router = express.Router();

router.use('/events', require("../api/events/routes/eventRoutes"));
router.use('/user_details', require("../api/user_details/routes/routes"));
router.use("/products", require("../api/products/routes/ProductRoutes"));
router.use('/blog', require("../api/blogs/routes/routes"));

module.exports = router;
