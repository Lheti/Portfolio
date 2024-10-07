window.addEventListener('DOMContentLoaded', (event) => {
  // Récupérer le thème stocké
  var theme = localStorage.getItem('theme');

  // Appliquer les classes en fonction du thème sélectionné
  var contFond = document.getElementById("cont");
  var titre = document.getElementById("titre");
  var gif = document.getElementById("loadinggif");
  var loadBarFond = document.getElementById("lb");
  var loadBarRemp = document.getElementById("pb");
  var ss1 = document.getElementById("ss1");
  var ss2 = document.getElementById("ss2");
  var ss3 = document.getElementById("ss3");
  var ss4 = document.getElementById("ss4");
  var ss5 = document.getElementById("ss5");

  if (theme === 'sombre') {
    // Appliquer le thème sombre
    contFond.classList.remove("container");
    contFond.classList.add("dark_container");

    titre.classList.remove("chargement");
    titre.classList.add("dark_chargement"); 
    
    gif.classList.remove("gif");
    gif.classList.add("dark_gif");

    loadBarFond.classList.remove("loading-bar");
    loadBarFond.classList.add("dark_loading-bar");

    loadBarRemp.classList.remove("progress-bar");
    loadBarRemp.classList.add("dark_progress-bar");

    ss1.classList.remove("phrases");
    ss1.classList.add("dark_phrases");

    ss2.classList.remove("phrases");
    ss2.classList.add("dark_phrases");

    ss3.classList.remove("phrases");
    ss3.classList.add("dark_phrases");

    ss4.classList.remove("phrases");
    ss4.classList.add("dark_phrases");

    ss5.classList.remove("phrases");
    ss5.classList.add("dark_phrases");
  } else {
      // Appliquer le thème clair
    contFond.classList.remove("dark_container");
    contFond.classList.add("container");

    titre.classList.remove("dark_chargement");
    titre.classList.add("chargement");

    gif.classList.remove("dark_gif");
    gif.classList.add("gif");

    loadBarFond.classList.remove("dark_loading-bar");
    loadBarFond.classList.add("loading-bar");

    loadBarRemp.classList.remove("dark_progress-bar");
    loadBarRemp.classList.add("progress-bar");

    ss1.classList.remove("dark_phrases");
    ss1.classList.add("phrases");

    ss2.classList.remove("darphrases");
    ss2.classList.add("phrases");

    ss3.classList.remove("dark_phrases");
    ss3.classList.add("phrases");

    ss4.classList.remove("dark_phrases");
    ss4.classList.add("phrases");

    ss5.classList.remove("dark_phrases");
    ss5.classList.add("phrases");
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
  // Récupérer l'élément de la barre de progression
  var progressBar = document.getElementById('pb');

  // Ajouter un écouteur pour l'événement 'animationend'
  progressBar.addEventListener('animationend', function() {
    // Rediriger vers une nouvelle page après la fin de l'animation
    window.location.href = "../Portfolio/index.html"; // Remplace par l'URL de la nouvelle page
  });
});