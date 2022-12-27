function attachEvents() {
    const locationField = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const divCurrent = document.getElementById('current');
    const divUpcoming = document.getElementById('upcoming');

    const conditions = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }

    getWeatherBtn.addEventListener('click', (e) => {

        Array.from(divCurrent.children).forEach(ch => ch.remove());
        Array.from(divUpcoming.children).forEach(ch => ch.remove());


        let locationCode = '';

        forecastDiv.style.display = 'block';

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.forEach(l => {
                    if (l.name === locationField.value) {
                        locationCode = l.code;
                    }
                });
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {
                        const { name, forecast } = data;
                        const { low, high, condition } = forecast;

                        const divForecasts = elementCreator('div', '', 'class', 'forecasts');
                        divForecasts.appendChild(elementCreator('span', `${conditions[condition]}`, 'class', 'condition symbol'));
                        const forecastSpan = elementCreator('span', '', 'class', 'condition');
                        forecastSpan.appendChild(elementCreator('span', `${name}`, 'class', 'forecast-data'));
                        forecastSpan.appendChild(elementCreator('span', `${low}${conditions.Degrees}/${high}${conditions.Degrees}`, 'class', 'forecast-data'));
                        forecastSpan.appendChild(elementCreator('span', `${condition}`, 'class', 'forecast-data'));
                        divForecasts.appendChild(forecastSpan);
                        divCurrent.appendChild(divForecasts);
                    });
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {
                        const threeDaysForecast = data.forecast;

                        const divForecastInfo = elementCreator('div', '', 'class', 'forecast-info');

                        threeDaysForecast.forEach(d => {
                            const { condition, high, low } = d;
                            const spanUpcoming = elementCreator('span', '', 'class', 'upcoming');
                            spanUpcoming.appendChild(elementCreator('span', `${conditions[condition]}`, 'class', 'symbol'));
                            spanUpcoming.appendChild(elementCreator('span', `${low}${conditions.Degrees}/${high}${conditions.Degrees}`, 'class', 'forecast-data'));
                            spanUpcoming.appendChild(elementCreator('span', `${condition}`, 'class', 'forecast-data'));
                            divForecastInfo.appendChild(spanUpcoming);
                            divUpcoming.appendChild(divForecastInfo);
                        });
                    })
                    .catch(error => forecastDiv.textContent = 'Error');
            })



        function elementCreator(type, text, attribute, attrName) {
            const newElement = document.createElement(type);
            if (attribute) {
                newElement.setAttribute(attribute, attrName);
            }
            if (text) {
                newElement.innerHTML = text;
            }
            return newElement;
        }

    });
}

attachEvents();