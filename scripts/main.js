import { films } from '../data/films.js';
import { people } from '../data/people.js';

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

const men = people.filter(person => person.gender === "male");
const women = people.filter(person => person.gender === "women");
const other = people.filter(person => (person => person.gender === "n/a") || (person => person.gender === "none") || (person => person.gender === "hermaphrodite"));

console.log()