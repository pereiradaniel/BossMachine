const express = require('express');
const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const apiRouter = require('./server/api');
app.use('/api', apiRouter);


// This conditional is here for testing purposes:
if (!module.parent) { 
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
