const express = require("express");
const insertRoute = express.Router();
const {postVodCheckin, testInsert} = require('../controller/insertDataController');

insertRoute.post('/data-checkin', postVodCheckin);

module.exports = insertRoute;