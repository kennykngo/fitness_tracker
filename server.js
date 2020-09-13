const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// connecting mongoose
mongoose.connect("mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const apiRoutes = require("./routes/fitness-routes");
app.use(apiRoutes);

const clientRoutes = require("./routes/client-routes");
app.use(clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
