const userService = require('../../services/userService')
const Joi = require('joi');

const {
    StatusCodes,
} = require('http-status-codes');

const schema = Joi.object().keys({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().required(),
    userName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    firstName : Joi.string().required(),
    lastName: Joi.string().required(),
    roleId: Joi.number().required(),
});
module.exports= async function(req,res){
    try {
        const validate = await schema.validateAsync(req.body, {
            abortEarly: false,
        });
        
        if (validate.error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                data: {},
                message: err.message,
                error: err.stack,
            });
        }
        
    const data = await userService.createUser(req.body);
    res.status(StatusCodes.OK)
            .send({ message: 'Success', data, error: {} });
    }
    
    catch (err) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
        data: {},
        message: err.message,
        error: err.stack,
    });
    }
}