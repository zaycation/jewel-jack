//Libraries
const express = require("express");
const app = express();
const cors=require('cors');

//
app.use(express.json())
app.use(cors());

//Listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen (8080, () => {
//   console.log(`listening at http://localhost:8080`);
// });

//End points
const contributors = require('./routes/routesContributors')
app.use('/contributors',contributors)

// create a GET route
app.get("/test", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

