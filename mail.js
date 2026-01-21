document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_gmail", "template_sdxtweq", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    }).then(
        () => alert("Mensagem enviada com sucesso!"),
        (error) => alert("Erro ao enviar: " + error.text)
    );
});