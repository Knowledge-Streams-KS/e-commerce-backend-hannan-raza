var express = require('express');
var router = express.Router();


const { createRole,login } = require('../controller/index');



router.post('/createRole',createRole)
router.post('/login',login)
module.exports = router;