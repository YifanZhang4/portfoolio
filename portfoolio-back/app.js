const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
require("./DB/mongoose");

app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server up on ${port}!`);
});
