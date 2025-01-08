
        // JavaScript para manejar el envío del formulario
        const form = document.getElementById("contactForm");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            try {
                const response = await fetch("/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                });

                if (response.ok) {
                    alert("Correo enviado exitosamente.");
                    form.reset();
                } else {
                    alert("Error al enviar el correo. Inténtalo nuevamente.");
                }
            } catch (error) {
                alert("Error en la conexión con el servidor.");
            }
        });