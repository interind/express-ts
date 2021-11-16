"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.logout = router;
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
