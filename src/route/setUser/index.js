var exports = require('express');
const setUserDatabase = require('../../api/setUser');
var route = exports.Router();


route.put('/user', setUserDatabase);


module.exports = route;