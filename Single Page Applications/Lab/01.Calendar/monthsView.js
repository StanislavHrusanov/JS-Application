export function showMonths() {
    const yearSection = document.getElementById('years');
    const yearsTd = yearSection.querySelectorAll('td');

    yearsTd.forEach(y => y.addEventListener('click', (e) => {
        yearSection.style.display = 'none';
        const year = y.children[0].textContent;
        const choise = document.getElementById(`year-${year}`)
        choise.style.display = '';

        const currentYear = choise.querySelector('caption');
        currentYear.addEventListener('click', (e) => {
            choise.style.display = 'none';
            yearSection.style.display = '';
        });

    }));
}