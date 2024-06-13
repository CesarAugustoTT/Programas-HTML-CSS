<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar e sanitizar os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $email = htmlspecialchars($_POST['email']);
    $dob = htmlspecialchars($_POST['dob']);
    $course = htmlspecialchars($_POST['course']);

    // Destinatário do email
    $to = "cesaraugusto210306@gmail.com";  // Substitua pelo seu endereço de email

    // Assunto do email
    $subject = "Nova Matrícula Recebida";

    // Mensagem do email
    $message = "
    <html>
    <head>
        <title>Nova Matrícula Recebida</title>
    </head>
    <body>
        <h2>Detalhes da Matrícula:</h2>
        <p><strong>Nome Completo:</strong> $name</p>
        <p><strong>Número de Contato:</strong> $contact</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Data de Nascimento:</strong> $dob</p>
        <p><strong>Curso:</strong> $course</p>
    </body>
    </html>
    ";

    // Cabeçalhos do email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Enviar email
    if (mail($to, $subject, $message, $headers)) {
        echo "Matrícula enviada com sucesso!";
    } else {
        echo "Erro ao enviar matrícula.";
    }
} else {
    echo "Método de solicitação inválido.";
}
?>
