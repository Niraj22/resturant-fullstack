const express = require("express");
const mongoose = require("mongoose");
const app = express();
const helmet = require("helmet");

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(fileupload());

//use helmet
app.use(helmet());
//DB config
mongoose
  .connect("mongodb://localhost/resturant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database"))
  .catch((error) => console.log("not connected to db : ", error));

//use routes
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
