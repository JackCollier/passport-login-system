const express = require("express");
const {
  getStaticPage,
  getLogin,
  getRegister,
} = require("./controllers/server-controllers");

const app = express();

app.set("view-engine", "ejs");

app.get("/", getStaticPage);

app.get("/login", getLogin);

app.get("/register", getRegister);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
