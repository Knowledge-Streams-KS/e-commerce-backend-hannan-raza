const {models} = require("../model/definations")
const jwtSecret = require('../config.json')
const { token } = require("morgan")
const jwt = require('jsonwebtoken')

let refreshTokens=[]
function generatAccessToken(user){
    return jwt.sign(user,jwtSecret.jwt.secret,{expiresIn:'3000s'})
}
module.exports = {
    createRole: async function(body){
        // return body;
        const result = await models.Roles.create({...body});
        return result;
    },
    login:async function(body){
        let user =await models.User.findOne({
            where:{
                userName:body.userName
            }
        })
        user=user.dataValues;
        const accessToken=generatAccessToken(user)
        const token=jwt.sign(user,jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken:accessToken,refreshTokens:token})
    }
}
