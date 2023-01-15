import { getAllMovies } from "../api/data.js";

const view = document.getElementById('home-page');
const movieList = document.getElementById('movies-list');
view.addEventListener('click', goToDetails);

let ctx = null;
export async function showHome(context) {
    ctx = context;
    context.showView(view);

    const movies = await getAllMovies();

    if (movies.length > 0) {
        movieList.replaceChildren(...movies.map(createMovePreview));
    }
}

function createMovePreview(movie) {

    const user = JSON.parse(localStorage.getItem('user'));

    const li = document.createElement('li');
    li.setAttribute('class', "card mb-4");
    const img = document.createElement('img');
    img.setAttribute('class', 'card-img-top');
    img.src = movie.img;
    img.alt = "Card image cap";
    img.width = "400";
    li.appendChild(img);
    // const divBody = document.createElement('div');
    // divBody.setAttribute('class', 'card-body');
    const title = document.createElement('h4');
    title.setAttribute('class', 'card-title');
    title.textContent = movie.title;
    li.appendChild(title);
    // li.appendChild(divBody);

    if (user) {
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'card-footer');
        const a = document.createElement('a');
        a.setAttribute('class', 'btn btn-info');
        a.setAttribute('id', movie._id);
        a.setAttribute('href', '#');
        a.textContent = 'Details';
        btnDiv.appendChild(a);
        li.appendChild(btnDiv);
    }
    return li;
}

function goToDetails(e) {
    let target = e.target;
    if (target.tagName == 'A') {
        e.preventDefault();
        if (target.textContent == 'Details') {
            const id = target.id;
            ctx.goTo('/details', id);
        }
    }
}