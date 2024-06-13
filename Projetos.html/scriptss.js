function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.text())
    .then(responseText => {
        if (responseText.includes('Matrícula enviada com sucesso!')) {
            document.getElementById('message').style.display = 'block';
            form.reset(); // Limpa o formulário
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    })
    .catch(error => {
        document.getElementById('error-message').style.display = 'block';
    });
}