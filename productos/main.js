    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.boton__cantidad, .boton__cantidad01')) {
            const action = event.target.getAttribute('data-action');
            const productElement = event.target.closest('.product');
            const inputCantidad = productElement.querySelector('.input__cantidad');
            let currentValue = parseInt(inputCantidad.value);
            
            if (action === 'increase') {
                inputCantidad.value = currentValue + 1;
            } else if (action === 'decrease') {
                inputCantidad.value = Math.max(1, currentValue - 1);
            }
        }
    });
