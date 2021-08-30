"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var home_1 = require("./home");
var login_1 = require("./login");
var router = express_1.Router();
exports.routes = router;
router.use(home_1.home);
router.use(login_1.login);
