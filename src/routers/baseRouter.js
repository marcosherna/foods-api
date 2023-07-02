const { Router } = require("express")

module.exports = class BaseRouter{
    constructor(namePath,router){
        this.mainRouter = Router();
        this.routerAux = Router();

        this.routerAux.use(namePath, router)
        this.mainRouter.use('/api', this.routerAux);
    }
}



