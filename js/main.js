const form = document.getElementById("form");
const comenzarButton = document.getElementsByName("comenzarButton")[0];
const greeting = localStorage.getItem("username")
  ? `Hola ${localStorage.getItem("username")} 🚀`
  : `no-name`;

//Validando que comenzarButton existe para no generar un ERROR
if (comenzarButton) {
  comenzarButton.addEventListener("click", goTrivia);
}

/*Función del botón para ir hacia trivia.html */
function goTrivia() {
  const inputUserName = document.getElementsByName("userName")[0].value;
  const goToTrivia = window.location.href.includes("index.html")
    ? window.location.href.replace("/index.html", "/")
    : window.location.href;

  //alert("url-location", goToTrivia);

  if (inputUserName === "") {
    alert("Por favor, no te olvides de ingresar tu nombre 😁 .");
  } else {
    window.location.assign(goToTrivia + "pages/trivia.html");
    //guardar nombre en el local storage
    localStorage.setItem("username", inputUserName);
  }
}

//Añadir el nombre del usuario en el header de trivia.html
if (greeting !== "no-name") {
  document.getElementsByClassName("greeting")[0].innerHTML = greeting;
}

/*Funciones para la página de Trivia Pelis */
form.onsubmit = function (e) {
  e.preventDefault();
  //alert("Puede tener tres valores 🙂.");
  const answer = [
    "una-pesadilla-en-la-calle-Elm",
    "nueve-peliculas",
    "the-conjuring",
  ];
  let total = 3;
  let correctAnswers = 0;
  let userAnswers = [];

  //Obteniendo las respuestas del usuario
  userAnswers[0] = document.querySelectorAll(
    'input[name="qOne"]:checked'
  )[0].value;
  userAnswers[1] = document.querySelectorAll(
    'input[name="qTwo"]:checked'
  )[0].value;
  userAnswers[2] = document.querySelectorAll(
    'input[name="qThree"]:checked'
  )[0].value;

  console.log("Respuestas del usuario:", userAnswers);

  //comparando las respuestas
  for (let j = 0; j < 3; j++) {
    if (answer[j] === userAnswers[j]) {
      correctAnswers++;
    }
  }

  //Resultados
  let results = document.getElementById("results");
  results.innerHTML =
    "Respondiste <span>" +
    correctAnswers +
    "</span> de <span>" +
    total +
    "</span>";

  return false;
};

/*Función para mostrar las respuestas */
function showAnswer() {
  //alert("El botón funciona");
  const answers = [
    "Una pesadilla en la calle Elm",
    "Nueve películas",
    "The conjuring",
  ];
  let list = document.getElementById("answer__list");
  list.innerHTML = ""; //Limpiar
  for (let listItem = 0; listItem < answers.length; listItem++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = answers[listItem];
    list.appendChild(newLi);
  }
}
