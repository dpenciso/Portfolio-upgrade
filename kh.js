import { people } from "./kh-characters.js";

console.log();

const person = people;

const destiny = people.filter(person => person.group === "Destiny Trio");
const wayfinder = people.filter(person => person.group === "Wayfinder Trio");
const seasalt = people.filter(person => person.group === "Seasalt Trio");

const mainContainer = document.createElement("div");

mainContainer.className = "container";

destiny.forEach(destiny => {
  let characterElement = document.createElement("div");
  let homeworldElement = document.createElement("p");
  let imageElement = document.createElement("img");

  characterElement.className = "box";
  characterElement.textContent = destiny.name;
  homeworldElement.textContent = destiny.homeworld;
  imageElement.src = destiny.img_url;

  mainContainer.appendChild(characterElement);
  characterElement.appendChild(homeworldElement);
  characterElement.appendChild(imageElement);
});

document.body.appendChild(mainContainer);

const secondContainer = document.createElement("div");
secondContainer.className = "containerTwo";

seasalt.forEach(seasalt => {
  let characterElement = document.createElement("div");
  let homeworldElement = document.createElement("p");
  let imageElement = document.createElement("img");

  characterElement.className = "box";
  characterElement.textContent = seasalt.name;
  homeworldElement.textContent = seasalt.homeworld;
  imageElement.src = seasalt.img_url;

  secondContainer.appendChild(characterElement);
  characterElement.appendChild(homeworldElement);
  characterElement.appendChild(imageElement);
});

document.body.appendChild(secondContainer);

const thirdContainer = document.createElement("div");
thirdContainer.className = "containerThree";

wayfinder.forEach(wayfinder => {
  let characterElement = document.createElement("div");
  let homeworldElement = document.createElement("p");
  let imageElement = document.createElement("img");

  characterElement.className = "box";
  characterElement.textContent = wayfinder.name;
  homeworldElement.textContent = wayfinder.homeworld;
  imageElement.src = wayfinder.img_url;

  thirdContainer.appendChild(characterElement);
  characterElement.appendChild(homeworldElement);
  characterElement.appendChild(imageElement);
});

document.body.appendChild(thirdContainer);

console.log(seasalt);
