const logInfos = (text, author) => {
  console.log("Texte à afficher: " + text + " par " + author);
};

const textToLog = "Hello World";
const author = "John Doe";

logInfos(textToLog, author);

const textToLog2 = "Le js à la piscine";
const author2 = "David Robert";

logInfos(textToLog2, author2);

logInfos("au revoir", "yoann");
