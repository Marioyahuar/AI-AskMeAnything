var subject = "";

function fetchRespuesta(pregunta) {
  document.getElementById("answerOutput").innerHTML = "Generando respuesta...";
  fetch(`/generate/${subject}/${pregunta}`)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.getElementById("answerOutput").innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function pickSubject(tema) {
  subject = tema;
  changePage();
  console.log(subject);
}

function changePage() {
  var pickScreen = document.getElementsByClassName("pickScreen")[0];
  var askScreen = document.getElementsByClassName("questionScreen")[0];
  pickScreen.style.display = "none";
  askScreen.style.display = "block";
}

function regresar() {
  var pickScreen = document.getElementsByClassName("pickScreen")[0];
  var askScreen = document.getElementsByClassName("questionScreen")[0];
  var answerOutput = document.getElementById("answerOutput");
  var questionInput = document.getElementById("questionInput");
  answerOutput.innerHTML = "";
  questionInput.value = "";
  pickScreen.style.display = "block";
  askScreen.style.display = "none";
}
