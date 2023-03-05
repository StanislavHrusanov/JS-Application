export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function getFormDataAsObj(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataAsObj = Object.fromEntries(formData.entries());

    for (let key in dataAsObj) {
        const input = dataAsObj[key];
        input.trim();

        if (input == '') {
            alert('All fields are required!');
            throw new Error('All fields are required!');
        }
    }

    return dataAsObj;
}