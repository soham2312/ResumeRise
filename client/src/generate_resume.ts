// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const handler = require("./pages/api/generate-pdf");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
let handler = require("./pages/api/generate-pdf");

// dotenv.config({ path: "./config.env" });
// const app = require("./app");

// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );

// console.log(DB);

// mongoose
//   .connect(DB, {
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false
//   })
//   .then(() => console.log("DB connection successful!"));


app.post("/api/generate-pdf", async(req, res) => {
  // console.log("chl rha h");
  // await handle;
  await handler(req, res);
});

const port = 8181;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
