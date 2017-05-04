var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(result) {
      res.render("index",result);
    });

});

router.post("/", function(req, res) {
    db.Burger.create({burger_name: req.body.name}).then(function(result) {
      res.redirect("/");
    });
});

router.put("/:id", function(req, res) {

 var burgerID = "id = " + req.params.id;

  db.Burger.update({devoured: false, 
    where:{
      id: burgerID
    }
  }).then( function(result) {
    
    res.redirect("/");

  });

});

// Export routes for server.js to use.
module.exports = router;
