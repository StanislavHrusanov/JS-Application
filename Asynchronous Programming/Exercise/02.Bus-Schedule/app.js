function solve() {
    let stopId = {
        next: 'depot'
    };
    const infoSpan = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arrivetBtn = document.getElementById('arrive');

    async function depart() {
        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;
            const response = await fetch(url);
            const data = await response.json();

            infoSpan.textContent = `Next stop ${data.name}`;
            stopId = JSON.parse(JSON.stringify(data));
            departBtn.setAttribute('disabled', 'true');
            arrivetBtn.removeAttribute('disabled');

        } catch (error) {
            infoSpan.textContent = 'Error';
        }
    }

    function arrive() {

        infoSpan.textContent = `Arriving at ${stopId.name}`;

        arrivetBtn.setAttribute('disabled', 'true');
        departBtn.removeAttribute('disabled');

    }

    return {
        depart,
        arrive
    };
}

let result = solve();