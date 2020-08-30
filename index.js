const express = require("express");
const mongoose = require("mongoose");
const app = express();
const helmet = require("helmet");
const config = require("config");
const db = config.get("mongoURI");
const path = require("path");
//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(fileupload());

//use helmet
app.use(helmet());
//DB config
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to database"))
  .catch((error) => console.log("not connected to db : ", error));

//use routes
app.use((req, res, next) => {
  //console.log(req.headers["user-agent"]);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
    return res.status(200).json({});
  }
  next();
});
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", require("./routes/api/item"));
app.use("/api/auth", require("./routes/api/auth"));

//Serve our static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
