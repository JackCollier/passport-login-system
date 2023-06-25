exports.getStaticPage = (req, res) => {
  res.render("index.ejs");
};

exports.getLogin = (req, res) => {
  res.render("login.ejs");
};

exports.getRegister = (req, res) => {
  res.render("register.ejs");
};
