var express = require('express');
var router = express.Router();

const IndexController = require('../controller/indexController')

router.get('/', IndexController.getAuthPage)

module.exports = router;
