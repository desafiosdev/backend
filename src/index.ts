import express from 'express';
import { Router } from 'express'
import addRoutes from './routes';

const app = express();
let router = Router();
router = addRoutes(router);

const url = process.env.URL || 'http://localhost';
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`App listening on: ${url}:${port}`)
});
