// Interactive Button Logic for CI Demo
document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('action-btn');
    const statusMessage = document.getElementById('status-message');

    if (actionButton && statusMessage) {
        actionButton.addEventListener('click', () => {
            statusMessage.textContent = 'GitHub Actions CI is working!';
            statusMessage.classList.add('visible');
        });
    }
});
