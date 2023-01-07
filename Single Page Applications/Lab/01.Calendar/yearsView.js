export function showYears() {
    const yearSection = document.getElementById('years');
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    yearSection.style.display = '';
}