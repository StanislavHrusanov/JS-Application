import { get } from './api.js';
import { render } from './node_modules/lit-html/lit-html.js';
import { template } from './template.js';

async function solve() {

   const data = Object.values(await get());

   render(data.map(template), document.querySelector('tbody'));

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const inputField = document.getElementById('searchField');

   function onClick(e) {
      e.preventDefault();

      const tableRows = document.querySelectorAll('tbody tr');
      tableRows.forEach(tr => tr.removeAttribute('class'));

      const cells = document.querySelectorAll('td');
      cells.forEach(c => {
         if (c.textContent.toLowerCase().includes(inputField.value.toLowerCase())) {
            c.parentElement.setAttribute('class', 'select');
         }
      });
      inputField.value = '';
   }
}
solve();