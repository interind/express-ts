require('dotenv').config();
import express from 'express';
import { routes } from './routes/routes';


const app = express();
const PORT = process.env.PORT ?? 3000;
const BASE_PATCH = `http://localhost:`;

app.use(express.urlencoded({ extended: true }));
app.use('/favicon.ico', express.static('./images/css-3-icon.png'));
app.use(routes);

async function server() {
  try {
    await app.listen(PORT, ():void => {
      console.log(`start server form ${BASE_PATCH + PORT}`);
    });
  } catch {
    console.log('error start server');
    process.exitCode = 1;
  }
}

server();
