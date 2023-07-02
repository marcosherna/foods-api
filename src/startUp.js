module.exports = class StartUp{
    #server
    constructor({server}){
        this.#server = server;
    }

    Init(){
        return new Promise((resolve, reject) => { 
            this.#server.Listen(3000, 'localhost')
                .then( response => resolve(response))
                .catch( reason => reject(reason))
        })
    }
}