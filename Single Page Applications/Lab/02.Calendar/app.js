import { showYears } from "./yearsView.js";
import { showMonths } from "./monthsView.js";
import { showDays } from "./daysView.js";

showYears();

document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'DIV') {
        if (target.className === 'date') {
            const text = target.textContent;
            const section = target.parentElement.parentElement.parentElement.parentElement.parentElement;
            const sectionId = section.id;
            if (section.className == 'yearsCalendar') {
                showMonths(text);
            } else if (section.className == 'monthCalendar') {
                showDays(text, sectionId);
            }
        }
    } else if (target.tagName == 'CAPTION') {
        const text = target.textContent;
        const section = target.parentElement.parentElement;
        if (section.className == 'monthCalendar') {
            showYears();
        } else if (section.className == 'daysCalendar') {
            showMonths(text);
        }
    }
});
