const { Router } = require("express");
const BaseRouter = require("./baseRouter");

module.exports = class UserRouter extends BaseRouter{
    constructor({userController}){
        super('/User', Router()
            .get('/', userController.getAll)
        )
    }
}