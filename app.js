const express = require('express');
const app = express()
const port = 4000
const routes = require('./routes/router');
const cors = require("cors");
const corsOptionsDelegate = require("./routes/cors");

app.use(cors(corsOptionsDelegate))
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
