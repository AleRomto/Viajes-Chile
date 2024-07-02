// Smooth
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Boton reservar
let btnEnviarAlCorreo = document.getElementById('reservar'); 

// Función boton Enviar
$(function() {
   
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

 // Evento de envío del formulario
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = document.getElementById('name').value;
        var correo = document.getElementById('email').value;
        var mensaje = document.getElementById('message').value;

 // Valideishon
        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, completa todos los campos");
            return;
        }

 // Alerta de envío exitoso
        alert('El mensaje fue enviado correctamente');
    });
});
