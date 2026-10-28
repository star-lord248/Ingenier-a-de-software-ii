
const botones = document.querySelectorAll(".boton-detalle");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const principio = boton.dataset.principio;
        const detalle = document.getElementById(`detalle-${principio}`);

        if (!detalle) return;

        const estaAbierto = !detalle.hidden;
        detalle.hidden = estaAbierto;

        boton.textContent = estaAbierto
            ? "Ver explicación"
            : "Ocultar explicación";
    });
});