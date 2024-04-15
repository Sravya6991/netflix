const express = require("express");
const movieController = require("../Controller/moviesController");
const userController = require("../Controller/userController");

const route = express.Router();

// get list of all movies
route.get("/movies", movieController.movies);

// get list of all shows
route.get("/shows", movieController.shows);

// get details of particular movie
route.get("/details/:name", movieController.details);

// get all movies-shows
route.get("/all", movieController.allContent);


// register
route.post("/register", express.json(), userController.register);

// login
route.post("/login", express.json() , userController.login);

// get particular user data
route.get("/userInfo", userController.userInfo);


module.exports = route;
