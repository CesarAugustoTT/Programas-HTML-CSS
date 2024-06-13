<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar e sanitizar os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $number = htmlspecialchars($_POST['number']);
    $dob = htmlspecialchars($_POST['dob']);
    $curso = htmlspecialchars($_POST['curso']);

    // Destinatário do email
    $to = "cesaraugusto210306@gmail.com";  // Substitua pelo seu endereço de email

    // Assunto do email
    $subject = "Nova Pré-Matrícula Recebida";

    // Mensagem do email
    $message = "
    <html>
    <head>
        <title>Nova Pré-Matrícula Recebida</title>
    </head>
    <body>
        <h2>Detalhes da Pré-Matrícula:</h2>
        <p><strong>Nome Completo:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Número de contato:</strong> $number</p>
        <p><strong>Data de Nascimento:</strong> $dob</p>
        <p><strong>Curso:</strong> $curso</p>
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
        echo "Pré-Matrícula enviada com sucesso!";
    } else {
        echo "Erro ao enviar Pré-Matrícula.";
    }
} else {
    echo "Método de solicitação inválido.";
}
?>
