const express = require('express');


module.exports = (app) => {
    app.use("/", require("./bbb"));
    //app.use("/home", require("./home"));
    //app.use("/about", require("./about"));
};
