/* eslint-env es6 */

/*
 * Dependencies
 */
const express = require('express');

/*
 * Config
 */
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(`${__dirname}/public`));


/*
 * User Routes
 */

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

/*
 * Listen
 */
app.listen(process.env.PORT || port);
console.log(`app listening on port ${port}`);
