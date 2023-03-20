// je cible mon bouton
const btnLoadRecipe = document.querySelector(".btn-load-recipe");

// au click sur le bouton
btnLoadRecipe.addEventListener("click", () => {
  // je veux créer un element de type h1
  // donc j'utilise la fonction createElement
  // avec en paramètre le type de balise que je veux créer
  const titleToCreate = document.createElement("h1");
  // je modifie le contenu de mon élément
  // avec la propriété textContent pour lui ajouter du texte
  titleToCreate.textContent = "Ma recette";

  // je cible ma div qui va contenir mes recettes
  const recipesContainer = document.querySelector("#recipes");

  // j'insère dans cette div, mon élément h1
  // pour ça, j'utilise la fonction appendChild sur la variable
  // qui contient ma div parent
  recipesContainer.appendChild(titleToCreate);
});
