"use strict";

var btnLoadRecipe = document.querySelector(".btn-load-recipe");
var recipes = [{
  title: "Ma recette 1",
  image: "https://picsum.photos/200/300",
  content: "Bonjour la piscine blablazblzlbla 1"
}, {
  title: "Ma recette 2",
  image: "https://picsum.photos/300/300",
  content: "Bonjour la piscine blablazblzlbla 2"
}, {
  title: "Ma recette 3",
  image: "https://picsum.photos/400/300",
  content: "Bonjour la piscine blablazblzlbla 3"
}];

var displayRandomRecipe = function displayRandomRecipe() {
  // sélectionne la div qui va contenir les recette
  var recipesContainer = document.querySelector("#recipes"); // vide la div pour éviter que les recettes s'empilent à chaque click

  recipesContainer.innerHTML = ""; // génére une clé aléatoire dans le tableau recipes
  // pour récupérer une recette aléatoire

  var randomIndex = Math.floor(Math.random() * recipes.length); // créé un titre h1 avec le titre de la recette

  var titleToCreate = document.createElement("h1");
  titleToCreate.textContent = recipes[randomIndex].title; // créé un paragraphe avec le contenu de la recette

  var paragraphToCreate = document.createElement("p");
  paragraphToCreate.textContent = recipes[randomIndex].content; // créé une image avec l'image de la recette

  var imgToCreate = document.createElement("img");
  imgToCreate.src = recipes[randomIndex].image; // insère les éléments dans le DOM

  recipesContainer.append(titleToCreate, paragraphToCreate, imgToCreate);
};

btnLoadRecipe.addEventListener("click", function () {
  displayRandomRecipe();
});