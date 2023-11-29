var exports = require('express');
const teacherRequestData = require('../../api/teacher/teacherRequest');
const getTeacherRequest = require('../../api/teacher/getTeacherRequest');
const getAllRequest = require('../../api/teacher/getAllRequest');
const update = require('../../api/teacher/updateRole');
var route = exports.Router();

route.post('/teacherRequest', teacherRequestData)
route.get('/userRequest/:email', getTeacherRequest)
route.get('/userRequest', getAllRequest)
route.patch('/closeRequest/:id', update)

module.exports = route;