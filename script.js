const btnLoadRecipe = document.querySelector(".btn-load-recipe");

const recipes = [
  {
    title: "Ma recette 1",
    image: "https://picsum.photos/200/300",
    content: "Bonjour la piscine blablazblzlbla 1",
  },
  {
    title: "Ma recette 2",
    image: "https://picsum.photos/300/300",
    content: "Bonjour la piscine blablazblzlbla 2",
  },
  {
    title: "Ma recette 3",
    image: "https://picsum.photos/400/300",
    content: "Bonjour la piscine blablazblzlbla 3",
  },
];

const displayRandomRecipe = () => {
  const recipesContainer = document.querySelector("#recipes");
  recipesContainer.innerHTML = "";

  // génére une clé aléatoire dans le tableau recipes
  // pour récupérer une recette aléatoire
  const randomIndex = Math.floor(Math.random() * recipes.length);

  // créé un titre h1 avec le titre de la recette
  const titleToCreate = document.createElement("h1");
  titleToCreate.textContent = recipes[randomIndex].title;

  // créé un paragraphe avec le contenu de la recette
  const paragraphToCreate = document.createElement("p");
  paragraphToCreate.textContent = recipes[randomIndex].content;

  // créé une image avec l'image de la recette
  const imgToCreate = document.createElement("img");
  imgToCreate.src = recipes[randomIndex].image;

  // insère les éléments dans le DOM

  recipesContainer.append(titleToCreate, paragraphToCreate, imgToCreate);
};

btnLoadRecipe.addEventListener("click", () => {
  displayRandomRecipe();
});
