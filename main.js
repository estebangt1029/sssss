const loginForm = document.querySelector('.from__principal');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === username && user.password === password);

    if (!user) {
        alert('Credenciales incorrectas');
        return;
    }

    if (username === 'admin@gmail.com' && password === '123') {
        window.location.href = 'admin.html'; // Página para admin
    } else {
        window.location.href = 'pagina principal/pagina principal.html'; // Página para clientes
    }
});
