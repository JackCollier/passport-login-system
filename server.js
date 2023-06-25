if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const {
  getStaticPage,
  getLogin,
  getRegister,
  postRegister,
} = require("./controllers/server-controllers");

const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", getStaticPage);

app.get("/login", getLogin);

app.get("/register", getRegister);

app.post(
  "/register",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
