import * as express from 'express';
import {join as pathJoin} from 'path';

const port = 4200;
const app = express();

// Serve the Angular application:
app.get(['/', '/about', '/home'], (req, res, next) => {
  req.url = '/index.html';
  next();
});
app.use(express.static(pathJoin(__dirname, 'dist', 'dashboard')));

// Listen to the standard Angular port.
app.listen(port, () => console.log(`Listening on port: ${port}`));
