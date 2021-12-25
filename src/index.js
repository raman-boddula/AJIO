const express = require('express');
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser")
const app = express();
const passport = require("./configs/passport");

const registerController= require("./controllers/register.controller")
const loginController = require("./controllers/login.controller")
const productController = require("./controllers/product.controller");
const wishlistController = require("./controllers/wishlist.controller")
const cartController = require("./controllers/cart.controller");
const userController=require("./controllers/user.controller");


app.use(express.json());
app.use(passport.initialize());
passport.serializeUser(function ({ user, token }, done) {
    done(null, { user, token });
});
passport.deserializeUser(function (user, done) {
    done(err, user);
});
app.use(cors());
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/products", productController);

app.use("/register", registerController);

app.use("/login", loginController);

app.use("/cart", cartController);

app.use("/wishlist",wishlistController)

app.use("/users", userController);


app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
);
  
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/auth/google/failure",
    }),
    function (req, res) {
        console.log(req.user.user.username)
        return res.redirect(`/?user_name=${req.user.user.username}`)
     // return res.status(201).json({ user: req.user.user, token: req.user.token });
    }
);



app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
});

  
module.exports = app;
