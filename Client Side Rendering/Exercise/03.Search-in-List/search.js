import { render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
import { createUl } from './template.js';

const townsList = [];
towns.forEach(t => {
   townsList.push({ name: t, match: false });
});

const townsDiv = document.getElementById('towns');
const searchField = document.getElementById('searchText');
const result = document.getElementById('result');
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search);

start();

function start() {

   render(createUl(townsList), townsDiv);
}

function search(e) {
   e.preventDefault();

   let numberOfMatches = 0;
   const searched = searchField.value;

   townsList.forEach(t => {
      if (t.name.includes(searched)) {
         numberOfMatches++;
         t.match = true;
      } else {
         t.match = false;
      }
   });

   start();

   result.textContent = `${numberOfMatches} matches found`;
}
