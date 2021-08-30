import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.send(`
    <h1>Home page</h1>

    <a href="/login">Login Page</a>
  `)
});

export { router as home };