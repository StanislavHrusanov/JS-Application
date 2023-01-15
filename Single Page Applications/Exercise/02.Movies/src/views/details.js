import { getMovieById, like, getAllLikes, deleteMovie, getCountOfLikesFromUser } from "../api/data.js";

const view = document.getElementById('movie-example');

let ctx = null;

export async function showMovieDetails(context, id) {
  ctx = context;
  context.showView(view);
  const movie = await getMovieById(id);

  const user = JSON.parse(localStorage.getItem('user'));


  const isOwner = user && user._id == movie._ownerId;

  const detailedMovie = await createMovieDetails(movie, isOwner);
  view.replaceChildren(detailedMovie);

  view.addEventListener('click', async (e) => {
    const target = e.target;

    if (target.tagName == 'A') {
      e.preventDefault();
      let button = target.textContent;
      if (user && button == 'Delete') {
        await deleteMovie(id);
        ctx.goTo('/');
      } else if (user && button == 'Edit') {
        ctx.goTo('/editMovie', movie._id);
      } else if (user && button == 'Like') {
        await like(movie._id);
        ctx.goTo('/details', movie._id);
      }
    }
  });

}

async function createMovieDetails(movie, isOwner) {
  const user = JSON.parse(localStorage.getItem('user'));
  const countOfLikesFromUser = await getCountOfLikesFromUser(movie._id, user._id);
  const countOfLikes = await getAllLikes(movie._id);

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'container');
  const divRow = document.createElement('div');
  divRow.setAttribute('class', 'row bg-light text-dark');
  const title = document.createElement('h1');
  title.textContent = `Movie title: ${movie.title}`;
  divRow.appendChild(title);
  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'col-md-8');
  const img = document.createElement('img');
  img.setAttribute('class', 'img-thumbnail');
  img.src = movie.img;
  img.alt = "Movie";
  imgDiv.appendChild(img);
  divRow.appendChild(imgDiv);
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'col-md-4 text-center');
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'my-3');
  h3.textContent = 'Movie Description';
  descriptionDiv.appendChild(h3);
  const description = document.createElement('p');
  description.textContent = movie.description;
  descriptionDiv.appendChild(description);


  if (isOwner) {
    const deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('class', 'btn btn-danger');
    deleteBtn.href = '#';
    deleteBtn.textContent = 'Delete';
    descriptionDiv.appendChild(deleteBtn);
    const editBtn = document.createElement('a');
    editBtn.setAttribute('class', 'btn btn-warning');
    editBtn.href = '#';
    editBtn.textContent = 'Edit';
    descriptionDiv.appendChild(editBtn);
    const span = document.createElement('span');
    span.setAttribute('class', 'enrolled-span');
    span.textContent = `Liked ${countOfLikes}`;
    descriptionDiv.appendChild(span);

  } else {

    const span = document.createElement('span');
    span.setAttribute('class', 'enrolled-span');
    span.textContent = `Liked ${countOfLikes}`;
    if (countOfLikesFromUser.length != 0) {
      descriptionDiv.appendChild(span);
    } else {
      const likeBtn = document.createElement('a');
      likeBtn.setAttribute('class', 'btn btn-primary');
      likeBtn.href = '#';
      likeBtn.textContent = 'Like';
      descriptionDiv.appendChild(likeBtn);
    }

  }


  divRow.appendChild(descriptionDiv);
  divContainer.appendChild(divRow);

  return divContainer;
}




// async function numberOfLikes(movie) {
//   let likes = 0;
//   const user = JSON.parse(localStorage.getItem('user'));
//   const allLikes = await getAllLikes();
//   allLikes.forEach(m => {
//     if (movie.title == m.title && m)
// })

// }