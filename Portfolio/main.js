window.addEventListener('DOMContentLoaded', (event) => {
  // Récupérer le thème stocké
  var theme = localStorage.getItem('theme');

  // Appliquer les classes en fonction du thème sélectionné
  var contFond = document.getElementById("cont");

  if (theme === 'sombre') {
    // Appliquer le thème sombre
    contFond.classList.remove("container");
    contFond.classList.add("dark_container");

  } else {
    // Appliquer le thème clair
  contFond.classList.remove("dark_container");
  contFond.classList.add("container");
}
});