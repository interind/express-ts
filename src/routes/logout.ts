import { Router, Request, Response } from "express";

const router = Router();

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
})

export {router as logout};