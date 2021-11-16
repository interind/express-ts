"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.home = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <h1>Hello " + req.session.email + "</h1>\n      <a href=\"/logout\">Exit Page</a>\n    ");
    }
    else {
        res.send("\n      <h1>Home page</h1>\n\n      <a href=\"/login\">Login Page</a>\n    ");
    }
});
