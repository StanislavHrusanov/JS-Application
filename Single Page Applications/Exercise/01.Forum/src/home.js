import { showDetails } from "./details.js";

const homeSection = document.getElementById('homeView');
homeSection.querySelector('div.topic-title').addEventListener('click', showDetails);
const form = homeSection.querySelector('form');
form.addEventListener('submit', onSubmit);
const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', clearInputFields);
const containter = homeSection.querySelector('.topic-container');
homeSection.remove()

export async function showHome(e) {
    e?.preventDefault();
    document.getElementById('main').replaceChildren('Loading...');

    try {

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const posts = await res.json();

        containter.replaceChildren(...Object.values(posts).map(createPostPreview));

        document.getElementById('main').replaceChildren(homeSection);

    } catch (error) {
        alert(error.message);
    }
}

function createPostPreview(post) {
    const element = document.createElement('div');
    element.className = 'topic-name-wrapper';
    element.innerHTML = `
    <div class="topic-name">
        <a href="/details" class="normal" id="${post._id}">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.dateCreated}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>


        </div>
    </div>`;

    return element;
}

function clearInputFields() {
    form.reset();
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();

    try {
        if (title == '' || username == '' || content == '') {
            throw new Error('All fields are required!');
        }

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                username,
                content,
                dateCreated: new Date()
            })
        });

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        form.reset();
        showHome();

    } catch (error) {
        error.message;
    }
}