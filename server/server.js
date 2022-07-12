const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("../client/dist"));
app.use(express.urelencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.long(`Now listening on port: ${PORT}`);
});
