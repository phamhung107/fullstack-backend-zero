const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./route/web");
const apiRoutes = require("./route/api");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//congif req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB", error);
  }
})();
