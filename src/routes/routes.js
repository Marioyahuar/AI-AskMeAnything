const express = require("express");
const router = express.Router();
const generator = require("../helpers/generator");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/generate/:subject/:pregunta", (req, res) => {
  const { subject, pregunta } = req.params;
  generator
    .askMeAnything(subject, pregunta)
    .then((respuesta) => {
      console.log(respuesta);
      return res.status(400).send(respuesta);
    })
    .catch((error) => {
      console.error("Error obteniendo respuesta");
    });
});

module.exports = router;
