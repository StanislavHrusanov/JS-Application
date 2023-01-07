export function showDays() {
    const monthsTd = Array.from(document.querySelectorAll('.monthCalendar td'));
    const allDaysView = Array.from(document.querySelectorAll('.daysCalendar'));


    for (let i = 0; i < monthsTd.length; i++) {
        const month = monthsTd[i];

        month.addEventListener('click', (e) => {
            const monthCalSection = month.parentElement.parentElement.parentElement.parentElement;
            monthCalSection.style.display = 'none';

            const choise = allDaysView[i];
            choise.style.display = '';

            const caption = choise.querySelector('caption');
            caption.addEventListener('click', (e) => {
                choise.style.display = 'none';
                monthCalSection.style.display = '';
            });
        });

    }
}