const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const movies = require("./routes/moviesRoutes")
app.use("/movies", movies);

// http://localhost:8000/movies/all

module.exports = app;