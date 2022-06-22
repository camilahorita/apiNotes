const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");


// function myMiddleware(request, response, next) {
//   console.log("You passed for the Middle");

// if (!request.body.isAdmin) {
//   return response.json({message: "user unauthorized"});
// }
//   next();

// }

//instantiate a class

const usersController = new UsersController();

usersRoutes.post("/" , usersController.create);

usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;