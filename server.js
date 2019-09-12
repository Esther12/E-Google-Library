const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const config = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
//}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(config.db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connection successful!"))
  .catch(err => console.error(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
