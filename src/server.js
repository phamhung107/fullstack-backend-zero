const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./route/web");
const connection = require("./config/database");
const Kitten = require("./model/Kitten");

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

const cat = new Kitten({ name: "Hoi dan IT dog" });
cat.save();

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
