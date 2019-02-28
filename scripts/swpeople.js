import { people } from '/data/people.js';

const men = people.filter(person => person.gender === "male");
const women = people.filter(person => person.gender === "women");
const other = people.filter (person => 
    (person => person.gender === "n/a") || 
    (person => person.gender === "none") || 
    (person => person.gender === "hermaphrodite"));

console.log(other)