import { render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";
import { template } from "./template.js";

start();

function start() {
    const contactsDiv = document.getElementById('contacts');

    render(contacts.map(template), contactsDiv);

}


export function onDetails(e) {
    const target = e.target;
    if (target.tagName == 'BUTTON') {

        const detailsDiv = target.parentElement.children[2];

        if (detailsDiv.className == 'details') {
            detailsDiv.className = '';
        } else {
            detailsDiv.className = 'details';
        }
    }
}