const express = require('express');
const app = express()
const port = 4000
const routes = require('./routes/router');
const cors = require("cors");
var bodyParser = require('body-parser'); 
const corsOptionsDelegate = require("./routes/cors");

app.use(cors(corsOptionsDelegate))
app.use(bodyParser.json());
app.use('/api', routes)

app.listen(port, () => {
  console.log(`complaint-app-api listening on port ${port}`)
})
