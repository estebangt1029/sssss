document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.create-account-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Capturar los datos del formulario
      const fullName = document.getElementById('full-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const description = document.getElementById('description').value;
  
      // Validar que las contraseñas coincidan
      if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
  
      // Crear un objeto de usuario
      const user = {
        fullName,
        lastName,
        email,
        phone,
        address,
        password: newPassword,
        description
      };
  
      // Obtener y validar la lista de usuarios del local storage
      let users = JSON.parse(localStorage.getItem('users'));
  
      if (!Array.isArray(users)) {
        users = [];
      }
  
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Limpiar el formulario
      form.reset();
  
      alert('Usuario creado exitosamente');
    });
  });
  