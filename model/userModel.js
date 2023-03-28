const {models} = require("../model/definations")
const { Op } = require("sequelize");
module.exports = {
    createUser: async function(body){

        const result = await models.User.create(body);
        return result;
    },
    getUser: async function(){

        const result = await models.User.findAll({
            include:models.Roles
        });
        return result;
    },
    getUserById: async function(ids){

        const result = await models.User.findAll({
            where:{id:ids},
            include:models.Roles
        });
        return result;
    },
    updateUser: async function(body){
        
        const result = await models.User.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    deleteUser: async function(id){
        
        const result = await models.User.destroy(
            {
                where : {id:id}
            }
       
        );
        return "Deleted a User";
    },
    //validation
    getUserByAttribute  : async function(body){
		const result = await models.User.findAndCountAll({
			where: {
				[Op.or]: [
				  { userName: body.userName },
				  { email: body.email },
				  { phoneNumber : body.phoneNumber}
				]
			  }
		});
		return result;
	},


}