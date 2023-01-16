export function initialize(views) {
    const nav = document.querySelector('nav');
    document.addEventListener('click', onNavigate);

    const context = {
        showView,
        goTo,
        updateNav
    }

    return context;

    function showView(view) {
        document.querySelectorAll('.view-section').forEach(e => e.style.display = 'none');
        view.style.display = '';
    }

    function onNavigate(e) {
        let target = e.target;
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
        const user = JSON.parse(localStorage.getItem('user'));
        const welcomeMsg = document.getElementById('welcome-msg');
        const addMovieBtn = document.getElementById('add-movie-button');

        if (user) {
            welcomeMsg.textContent = `Welcome, ${user.email}`;
            nav.querySelectorAll('.user').forEach(e => e.style.display = '');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
            addMovieBtn.style.display = '';
        } else {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = '');
            addMovieBtn.style.display = 'none';
        }
    }

}