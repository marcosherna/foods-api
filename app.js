const container = require("./src/container");

const application = container.resolve('startUp');


application.Init()
    .then( response => console.log(response))
    .catch( reason => console.log(reason))