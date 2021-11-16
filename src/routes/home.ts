import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {

  if (req.session && req.session.loggedIn) {
    res.send(`
      <h1>Hello ${req.session.email}</h1>
      <a href="/logout">Exit Page</a>
    `)
  } else {
    res.send(`
      <h1>Home page</h1>

      <a href="/login">Login Page</a>
    `)
  }
});

export { router as home };