import { films } from './films.js'
import {people} from './people.js'

const intro = document.querySelector('.intro')

films.sort ((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )



films.forEach((film)=> {
    let titleElement = document.createElement('h1')
    let crawlElement = document.createElement('h3')
    let lineBreak = document.createElement ('hr')
    intro.appendChild (lineBreak)

    titleElement.textContent = film.title
    crawlElement.textContent = film.opening_crawl

    intro.appendChild(titleElement)
    intro.appendChild(crawlElement)
    intro.appendChild(document.createElement('hr'))
})


// let titleElement = document.querySelector('.title')
// let crawlElement = document.querySelector('.crawl')

// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl