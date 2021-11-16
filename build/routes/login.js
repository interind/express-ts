"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.login = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\" novalidate>\n      <div>\n        <label>Email</label>\n        <input name=\"email\" type=\"text\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n\n    <a href=\"/\">Go back home</a>\n  ").type('html');
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'interind@yandex.ru' && password === '727431') {
        req.session = { loggedIn: true, email: email.toLowerCase() };
        res.redirect('/');
    }
    else {
        req.session = undefined;
        res.status(401).send('invalid email or password');
    }
});
