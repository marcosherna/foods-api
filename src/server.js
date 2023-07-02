const express = require('express');

module.exports = class Server{
    constructor({userRouter}){
       this.invoke = express();
       this.invoke.use(userRouter.mainRouter)
    }

    Listen(port, host){
        return new Promise((resolve, reject) => { 
            this.invoke.listen(port, ()=> {
                resolve(`Server running on port:${port}\nAnd host:${host}`);
            })
        })
    }
}