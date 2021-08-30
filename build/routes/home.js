"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.home = router;
router.get('/', function (req, res) {
    res.send("\n    <h1>Home page</h1>\n\n    <a href=\"/login\">Login Page</a>\n  ");
});
