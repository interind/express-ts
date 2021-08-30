import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
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
  `)
});

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const {email, password} = req.body;

  res.send(`
    <h2>email: ${email ? email.toUpperCase() : 'your email: undefined'}</h2>
    </br>
    <p> password: ${password}</p>
    </br>
    <a href="/login">Go back login</a>
  `);
})

export { router as login };