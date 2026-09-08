const formAgenda = document.getElementById("formAgenda");

formAgenda.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const comentario = document.getElementById("mensaje").value.trim();

    if (
        !nombre ||
        !telefono ||
        !servicio ||
        !comentario
    ) {
        alert("Por favor, completá todos los campos.");
        return;
    }

    const mensajeWhatsApp =
`Hola Noelia 

Vi tu página web y me gustaría reservar un turno.

*Datos de la reserva:*

 Nombre y apellido: ${nombre}
 Teléfono: ${telefono}
 Servicio: ${servicio}

 Comentario:
${comentario}

Quedo a la espera para coordinar día y horario `;

    const numeroWhatsApp = "59896136381";

    const enlaceWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.location.href = enlaceWhatsApp;
});