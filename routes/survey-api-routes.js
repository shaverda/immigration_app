var db = require("../models");

module.exports = function(app) {
  app.get("/api/index", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Survey.findAll({
      include: [db.User]
    }).then(function(response) {
      res.json(response);
      console.log(response);
    });
  });
};
