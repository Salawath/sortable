const User = require("../models/User");

exports.getUsers = (req, res, next) => {
  User.fetchAll()
    .then(([rows, fieldData]) => {
      console.log(rows);
      //console.log(fieldData);
      res.render("index", {
        users: rows,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getUserForm = (req, res, next) => {
  res.render("userForm", {
    pageTitle: "users",
    path: "users",
  });
};

exports.userAdd = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const position = 0;
  const user = new User(null, name, email, password, position);
  user
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.sort = async (req, res, next) => {
  let positions = JSON.parse(req.body.positions);
 // console.log(positions);
  positions.forEach(async (position, index) => {
   // console.log(position[0], position[1]);
    await User.sortupdate(position[0], position[1]);
  });
};
