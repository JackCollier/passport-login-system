const express = require("express");
const {
  getStaticPage,
  getLogin,
  getRegister,
  postRegister,
} = require("./controllers/server-controllers");

// for production connect to DB - definitely don't store them here...
const users = [];

const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", getStaticPage);

app.get("/login", getLogin);

app.get("/register", getRegister);

app.post("/register", postRegister);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
