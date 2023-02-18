export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function getFormDataAsObj(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataAsObj = Object.fromEntries(formData.entries());

    for (let key in dataAsObj) {
        const currField = dataAsObj[key];
        currField.trim();

        if (currField == '') {
            alert('All fields are required!');
            throw new Error('All fields are required!');
        }
    }

    return dataAsObj;
}

export async function allGamesWrapper(dataPromise, catalogTemplate) {
    const data = await dataPromise();

    return catalogTemplate(data);
}

export async function recentGameWrapper(dataPromise, catalogTemplate) {
    let data = await dataPromise();

    if (data.length > 3) {
        data = data.slice(0, 3);
    }

    return catalogTemplate(data);
}

export async function detailsWrapper(user, gameId, gameDetailsPromise, commentsPromise, detailsTemplate, onDelete, onComment) {
    const gameDetails = await gameDetailsPromise(gameId);
    const comments = await commentsPromise(gameId);

    return detailsTemplate(user, gameDetails, comments, detailsTemplate, onDelete, onComment);
}