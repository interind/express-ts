"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.login = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" type=\"text\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n\n    <a href=\"/\">Go back home</a>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send("\n    <h2>email: " + (email ? email.toUpperCase() : 'your email: undefined') + "</h2>\n    </br>\n    <p> password: " + password + "</p>\n    </br>\n    <a href=\"/login\">Go back login</a>\n  ");
});
