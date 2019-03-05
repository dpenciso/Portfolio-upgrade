import { people } from '/data/people.js';

const men = people.filter(person => person.gender === "male");
const women = people.filter(person => person.gender === "women");
const other = people.filter(
    person => (person.gender === "n/a") || 
    (person.gender === "none") || 
    (person.gender === "hermaphrodite"));

console.log(men, women, other)

const main = document.querySelector('.container')

men.forEach(man => {
 let manDiv = document.createElement('div')
 manDiv.className = 'box'
 let name = document.createElement('p')
 let eyeColor = document.createElement('p')
 name.textContent = man.name
 eyecolor.textContent = man.eye_color
 manDiv.appendChild(name)
 manDiv.appendChild(eyeColor)
 
 main.appendChild(manDiv)
})

// const foundPlanet = (arr, planetUrl) => {
//   const foundIt = {}
//     arr.find((element) => {
//         console.log(element, planetUrl)
//         if (element.homeworld === planetUrl) {
//         foundIt = element
//       }
//     })
// }

// console.log(foundPlanet(men, 'https://swapi.co/api/planets/1/'))