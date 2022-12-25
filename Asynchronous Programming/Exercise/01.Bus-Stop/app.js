async function getInfo() {
    const stopIdField = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdField.value}`;
    stopName.textContent = '';
    Array.from(busesUl.children).forEach(b => b.remove());

    try {
        const response = await fetch(url);

        if (response.ok === false) {
            stopName.textContent = 'Error';
        }
        const data = await response.json();

        const { buses, name } = data;

        stopName.textContent = name;

        Object.keys(buses).forEach(b => {
            const li = document.createElement('li');
            li.textContent = `Bus ${b} arrives in ${buses[b]} minutes`;
            busesUl.appendChild(li);
        });

        stopIdField.value = ''
    } catch (error) {
        stopName.textContent = 'Error';
    }
}