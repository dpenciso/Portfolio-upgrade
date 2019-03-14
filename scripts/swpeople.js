import { people } from '../data/people.js';
import { planets } from '../data/planets.js';
import { films } from '../data/films.js'


// characters
const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2

    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return  {
        name: person.name,
        home: foundWorld.name,
        eye_color:person.eye_color,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
    }
})



const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach (person => {
 let personElement = document.createElement('div')
 let planetElement = document.createElement('p')
 let imageElement = document.createElement ('img')

 personElement.className = 'box'
 personElement.textContent = person.name
 planetElement.textContent = person.home
 imageElement.src = person.imagePath

 personElement.appendChild(planetElement)
 personElement.appendChild(imageElement)
 mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)


// films
const intro = document.querySelector(".intro");

films.sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1));

films.forEach(film => {
  let tile = document.createElement('div')
  
  let titleElement = document.createElement('h1')
  tile.appendChild(titleElement)
  titleElement.textContent = film.title
  
  let crawlElement = document.createElement('div')
  tile.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl

  intro.appendChild(tile);
 
});