export async function get() {

    try {
        const res = await fetch('http://localhost:3030/jsonstore/advanced/table');

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}