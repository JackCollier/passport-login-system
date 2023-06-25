const express = require("express");
const { getStaticPage } = require("./controllers/server-controllers");
const app = express();

app.set("view-engine", "ejs");

app.get("/", getStaticPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
