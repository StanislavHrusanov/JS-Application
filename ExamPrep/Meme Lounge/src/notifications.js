export function showNotification(msg) {
    const notification = document.getElementById('errorBox');
    const message = notification.querySelector('span');

    message.textContent = msg;
    notification.style.display = 'block';

    setTimeout(() => notification.style.display = 'none', 3000);
}