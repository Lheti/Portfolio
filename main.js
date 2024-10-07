var theme = "themeClair";
var boutonThemeClair = document.getElementById("themeClair");
var boutonThemeSombre = document.getElementById("themeSombre");
var contFond = document.getElementById("cont");
var titre = document.getElementById("titre");
var box = document.getElementById("box");
var boutonEntrer = document.getElementById("entrer");


boutonThemeClair.addEventListener('click', themeClair);
boutonThemeSombre.addEventListener('click', themeSombre);


function themeClair() {
  theme = "themeClair";

  contFond.classList.remove("dark_container");
  contFond.classList.add("container");

  titre.classList.remove("dark_bienvenue");
  titre.classList.add("bienvenue");
  
  box.classList.remove("dark_box");
  box.classList.add("box");

  boutonThemeClair.classList.remove("dark_boutonRadio");
  boutonThemeClair.classList.add("boutonRadio");

  boutonThemeSombre.classList.remove("dark_boutonRadio");
  boutonThemeSombre.classList.add("boutonRadio");

  boutonEntrer.classList.remove("dark_boutonRetro");
  boutonEntrer.classList.add("boutonRetro");
}

function themeSombre() {
  theme = "themeSombre";

  contFond.classList.remove("container");
  contFond.classList.add("dark_container");

  titre.classList.remove("bienvenue");
  titre.classList.add("dark_bienvenue");

  box.classList.remove("box");
  box.classList.add("dark_box");

  boutonThemeClair.classList.remove("boutonRadio");
  boutonThemeClair.classList.add("dark_boutonRadio");

  boutonThemeSombre.classList.remove("boutonRadio");
  boutonThemeSombre.classList.add("dark_boutonRadio");

  boutonEntrer.classList.remove("boutonRetro");
  boutonEntrer.classList.add("dark_boutonRetro");
}