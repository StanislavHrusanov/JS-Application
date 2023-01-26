export function initialize(views) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        showView,
        goTo,
        updateNav
    };

    return context;

    function showView(view) {
        main.replaceChildren(view);
    }

    function onNavigate(e) {
        let target = e.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            e.preventDefault();
            const url = new URL(target.href);
            goTo(url.pathname);
        }
    }

    function goTo(name, ...params) {
        const handler = views[name];

        if (typeof handler == 'function') {
            handler(context, ...params);
        }
    }

    function updateNav() {
        const userData = localStorage.getItem('userData');

        if (userData) {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        }
    }
}