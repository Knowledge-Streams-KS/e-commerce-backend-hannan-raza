var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config.json');

async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

const { createUser,getUser,updateUser,deleteUser,getUserById } = require('../controller/index');


router.post('/createUser',createUser)
router.get('/getUser', authenticateToken ,getUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser',deleteUser)
router.get('/getUserById',getUserById)
module.exports = router;
