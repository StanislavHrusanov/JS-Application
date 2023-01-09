const sections = [...document.querySelectorAll('.daysCalendar')];
sections.forEach(s => s.remove());

export function showDays(text, id) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const indexOfSection = months.indexOf(text);
    const chosenSection = sections.find(s => s.id == `month-${id.slice(-4)}-${indexOfSection+1}`);

    document.querySelector('body').replaceChildren(chosenSection);
}