const express = require("express");
const router = express.Router();
const generator = require("../helpers/generator");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/generate/:pregunta", (req, res) => {
  const pregunta = req.params.pregunta;
  generator
    .askMeAnything(pregunta)
    .then((respuesta) => {
      console.log(respuesta);
      return res.status(400).send(respuesta);
    })
    .catch((error) => {
      console.error("Error obteniendo respuesta");
    });
});

module.exports = router;
