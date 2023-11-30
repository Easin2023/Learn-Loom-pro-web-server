var exports = require('express');
const setUserDatabase = require('../../api/setUser');
const getUserDatabase = require('../../api/getUser');
const getAllUser = require('../../api/getAllUser');
const userRoleUpdate = require('../../api/updateUserRole');
const updateMakeAdmin = require('../../api/updateUser2');
var route = exports.Router();


route.post('/user', setUserDatabase);
route.get('/user/:email', getUserDatabase);
route.get('/user', getAllUser);
route.patch('/user/:email', userRoleUpdate);
route.patch('/userMakeAdmin/:email', updateMakeAdmin);
// route.patch('/userMakeAdmin/:id', updateMakeAdmin);

module.exports = route;