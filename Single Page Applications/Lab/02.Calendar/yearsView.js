const section = document.getElementById('years');

section.remove();

export function showYears() {
    document.querySelector('body').replaceChildren(section);
}

