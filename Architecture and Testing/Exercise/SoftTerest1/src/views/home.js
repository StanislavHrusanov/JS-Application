const view = document.getElementById('homeView');
view.remove();


export function showHome(context) {
    context.showView(view);
}