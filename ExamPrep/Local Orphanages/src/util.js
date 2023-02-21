export function getUser() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function submit(e) {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        const dataAsObj = Object.fromEntries(formData.entries());

        for (let key in dataAsObj) {
            dataAsObj[key] = dataAsObj[key].trim();

            if (dataAsObj[key] == '') {
                throw new Error('All fields are required!');
            }
        }

        return dataAsObj;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}