<?php
require("./PHPMailer/src/PHPMailer.php");
require("./PHPMailer/src/SMTP.php");
 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->IsSMTP(); // enable SMTP
 $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "br264.hostgator.com.br";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $site_name = "Mauro"; // Nome do Site
 $mail->Username = "contato@mauroborgesjunior.com.br";
 $mail->Password = "M@uro2502";
 $mail->SetFrom("contato@mauroborgesjunior.com.br");


// Mudar abaixo caso adicione masi campos:
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];


$mail->Subject = "Formulário - " . $site_name . " - " . $nome;
 
 $mail->CharSet = 'UTF-8';
 $mail->Body = "$mensagem<br><br>---------------<br><br>$nome<br><br>$telefone<br><br>$email";
 $mail->AddAddress("contato@mauroborgesjunior.com.br");
    if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
       echo "Mensagem enviada com sucesso";
    }
    
?>