var exports = require('express');
const classData = require('../../api/ClassPost/postCLass');
const getTheClassData = require('../../api/ClassPost/getClass');
const getClassOne = require('../../api/ClassPost/getOneClass');
const sortFewClassData = require('../../api/ClassPost/sortClassData');
var route = exports.Router();

route.get('/getAllClass', getTheClassData)
route.get('/sortFewData', sortFewClassData)
route.get('/getClassOne/:id', getClassOne)
route.post("/addedClass", classData)


module.exports = route;