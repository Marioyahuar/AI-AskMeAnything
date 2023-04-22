function fetchRespuesta(pregunta) {
  fetch(`/generate/${pregunta}`)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.getElementById("respuesta").innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}
