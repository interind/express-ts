import { Router, Request, Response, NextFunction } from "express";
const { EMAIL, PASSWORD } = process.env;

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('Access is denied');
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response): void => {
  res.send(`
    <form method="POST" novalidate>
      <div>
        <label>Email</label>
        <input name="email" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <a href="/">Go back home</a>
  `).type('html');
});

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const {email, password} = req.body;
  if (email && password && email === EMAIL && password === PASSWORD) {
    req.session = { loggedIn: true, email: email.toLowerCase() };
    res.redirect('/');
  } else {
    req.session = undefined;
    res.status(401).send('invalid email or password');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome');
});

export { router as login };