function attachEvents() {
    const loadBtn = document.getElementById('btnLoadPosts');
    const selectPostOption = document.getElementById('posts');
    const viewBtn = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');
    postTitle.textContent = 'Unit Testing And Modules';
    postBody.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores eligendi quos quidem ex numquam hic. Eos quos similique voluptates accusamus quae voluptas magni ad a ipsum, quia enim debitis cumque quibusdam exercitationem architecto sint nostrum dolorum dolor repudiandae nulla deserunt, dolorem itaque!';

    loadBtn.addEventListener('click', async (e) => {
        Array.from(selectPostOption.children).forEach(ch => ch.remove());

        const loadResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const data = await loadResponse.json();
        const ids = Object.keys(data);
        ids.forEach(id => {
            selectPostOption.appendChild(elementCreator('option', data[id].title.toUpperCase(), 'value', id));
        });
    });

    viewBtn.addEventListener('click', async (e) => {
        if (!selectPostOption.value) {
            return;
        }
        const choice = Array.from(selectPostOption.querySelectorAll('option')).find(o => o.selected);

        const titleResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${choice.value}`);
        const titleData = await titleResponse.json();

        Array.from(commentsUl.children).forEach(ch => ch.remove());

        postTitle.textContent = titleData.title.toUpperCase();
        postBody.textContent = titleData.body;

        const commentsResponse = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        const commentsData = await commentsResponse.json();

        for (let key in commentsData) {
            const currId = commentsData[key].id;
            const currPostId = commentsData[key].postId;
            const currText = commentsData[key].text;
            if (currPostId === choice.value) {
                commentsUl.appendChild(elementCreator('li', currText, 'id', currId));
            }
        }
    });

    function elementCreator(type, text, attribute, attrName) {
        const newElement = document.createElement(type);
        if (attribute) {
            newElement.setAttribute(attribute, attrName);
        }
        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
}
attachEvents();