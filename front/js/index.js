document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.getElementById('navbar');

    function checkSession() {
        const sessionData = JSON.parse(sessionStorage.getItem('userSession'));
        if (sessionData) {
            const now = new Date();
            if (now.getTime() > sessionData.expiryTime) {
                sessionStorage.removeItem('userSession');
                return null;
            }
            return sessionData.email;
        }
        return null;
    }

    function updateLoginButtons() {
        const userEmail = checkSession();
        const loginButtons = document.querySelectorAll('.btn-se-connecter, .btn-se-connecter-horizontal');
        if (userEmail) {
            loginButtons.forEach(button => {
                button.textContent = 'Se déconnecter';
                button.onclick = () => {
                    sessionStorage.removeItem('userSession');
                    location.reload();
                };
            });
        } else {
            loginButtons.forEach(button => {
                button.textContent = 'Se connecter';
                button.onclick = () => {
                    location.href = 'login.html';
                };
            });
        }
    }

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    updateLoginButtons();
});
