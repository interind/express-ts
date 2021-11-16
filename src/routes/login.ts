import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
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
  if (email && password && email === 'interind@yandex.ru' && password === '727431') {
    req.session = { loggedIn: true, email: email.toLowerCase() };
    res.redirect('/');
  } else {
    req.session = undefined;
    res.status(401).send('invalid email or password');
  }
})

export { router as login };