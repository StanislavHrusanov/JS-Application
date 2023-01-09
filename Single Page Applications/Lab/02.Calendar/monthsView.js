const sections = [...document.querySelectorAll('.monthCalendar')];
sections.forEach(s => s.remove());

export function showMonths(text) {
    let year = text;

    if (text.includes(' ')) {
        text = text.split(' ');
        year = text[1];
    }
    document.querySelector('body').replaceChildren(sections.find(s => s.id == `year-${year}`));
}


