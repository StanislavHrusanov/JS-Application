import { deleteIdea, getIdeaById } from "../api/data.js";

const view = document.getElementById('detailsView');
view.remove();

let ctx = null;
export async function showDetails(context, id) {
    ctx = context;
    context.showView(view);

    const idea = await getIdeaById(id);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const isOwner = userData && userData._id == idea._ownerId;

    const detailedIdea = createDetailedIdea(idea, isOwner);
    view.innerHTML = detailedIdea;

    if (isOwner) {
        view.addEventListener('click', (e) => {
            let target = e.target;
            if (target.tagName == 'A') {
                e.preventDefault();
                if (target.textContent == 'Delete') {
                    deleteIdea(idea._id);
                    ctx.goTo('/dashboard');
                }
            }
        });
    }

}

function createDetailedIdea(idea, isOwner) {
    let html = `
<img class="det-img" src="${idea.img}"/>
<div class="desc">
    <h2 class="display-5">${idea.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${idea.description}</p>
</div>`;

    if (isOwner) {
        html += `
    <div class="text-center">
        <a data-set="${idea._id}"class="btn detb" href="">Delete</a>
    </div>`
    }
    return html;
}
