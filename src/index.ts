import express from 'express';
import * as path from 'path';
import { Router } from 'express'
import addRoutes from './routes';

const app = express();
const port = process.env.PORT || 3000;
let router = Router();
router = addRoutes(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`App listening on: http://localhost:${port}`)
});
