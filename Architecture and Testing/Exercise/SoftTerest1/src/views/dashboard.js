import { getIdeasData } from "../api/data.js";

const view = document.getElementById('dashboard-holder');
view.addEventListener('click', onDetails);
view.remove();

let ctx = null;
export async function showDashboard(context) {
    ctx = context;
    context.showView(view);
    const ideas = await getIdeasData();

    if (ideas.length == 0) {
        view.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
    } else {
        view.replaceChildren(...ideas.map(createIdea))
    }
}

function createIdea(idea) {
    const divCurrentCard = document.createElement('div');
    divCurrentCard.setAttribute('class', 'card overflow-hidden current-card details');
    divCurrentCard.style.width = '20rem';
    divCurrentCard.style.height = '18rem';
    const divCardBody = document.createElement('div');
    divCardBody.setAttribute('class', 'card-body');
    const p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.textContent = idea.title;
    divCardBody.appendChild(p);
    divCurrentCard.appendChild(divCardBody);
    const img = document.createElement('img');
    img.setAttribute('class', 'card-image');
    img.setAttribute('src', idea.img);
    img.setAttribute('alt', 'Card image cap');
    divCurrentCard.appendChild(img);
    const a = document.createElement('a');
    a.setAttribute('class', 'btn');
    a.href = '';
    a.id = idea._id;
    a.textContent = 'Details';
    divCurrentCard.appendChild(a);

    return divCurrentCard;
}

export function onDetails(e) {

    let target = e.target;

    if (target.tagName == 'A') {
        e.preventDefault();
        if (target.textContent == 'Details') {
            const id = target.id;
            ctx.goTo('/details', id);
        }
    }
}