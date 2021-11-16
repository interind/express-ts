import { Router } from "express";
import { home } from "./home";
import { login } from "./login";
import { logout } from './logout';

const router = Router();

router.use(home);
router.use(login);
router.use(logout);

export {router as routes};