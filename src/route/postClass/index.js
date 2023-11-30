var exports = require('express');
const classData = require('../../api/ClassPost/postCLass');
const getTheClassData = require('../../api/ClassPost/getClass');
const getClassOne = require('../../api/ClassPost/getOneClass');
const sortFewClassData = require('../../api/ClassPost/sortClassData');
const classFindOneAndUpdate = require('../../api/ClassPost/updateClassOne');
const findOneEmail = require('../../api/ClassPost/emailOneFind');
const classDelete = require('../../api/ClassPost/classDelete');
var route = exports.Router();

route.get('/getAllClass', getTheClassData)
route.get('/sortFewData', sortFewClassData)
route.get('/getClassOne/:id', getClassOne)
route.get('/getClassOneAndEmail/:email', findOneEmail)
route.patch('/updateClassOne/:id', classFindOneAndUpdate)
route.post("/addedClass", classData)
route.delete("/myClassDelete/:id", classDelete)


module.exports = route;