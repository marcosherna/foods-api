const { createContainer, asClass, Lifetime } = require('awilix');
const Server = require('./server.js');
const StartUp = require('./startUp.js');
const path = require('path');


const container = createContainer();

const PATH_NAME_ROUTERS = path.resolve(__dirname, 'routers')
const PATH_NAME_CONTROLLERS = path.resolve(__dirname, 'controllers')

container
.loadModules([`${PATH_NAME_ROUTERS}/**/*.js`, 
    `${PATH_NAME_CONTROLLERS}/**/*.js`], {resolverOptions:{
    lifetime: Lifetime.SINGLETON
}})
.register({
    server: asClass(Server).singleton(),
    startUp: asClass(StartUp).singleton()
})

module.exports = container;