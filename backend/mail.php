<?php
// definisco mittente e destinatario della mail
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$nome_mittente = strval($request->name);
$mail_mittente = strval($request->email);

$mail_destinatario = "roberto_cazzaniga@yahoo.com";

// definisco il subject
$mail_oggetto = "Messaggio di prova";

// definisco il messaggio formattato in HTML
$mail_corpo = <<<HTML
<html>
<head>
  <title>Una semplice mail con PHP formattata in HTML</title>
</head>
<body>
Questo è un messaggio di prova l'<b>invio di mail in HTML</b> con la funzione mail() di PHP
</body>
</html>
HTML;

// aggiusto un po' le intestazioni della mail
// E' in questa sezione che deve essere definito il mittente (From)
// ed altri eventuali valori come Cc, Bcc, ReplyTo e X-Mailer
$mail_headers = "From: " .  $nome_mittente . " <" .  $mail_mittente . ">\r\n";
$mail_headers .= "Reply-To: " .  $mail_mittente . "\r\n";
$mail_headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Aggiungo alle intestazioni della mail la definizione di MIME-Version,
// Content-type e charset (necessarie per i contenuti in HTML)
$mail_headers .= "MIME-Version: 1.0\r\n";
$mail_headers .= "Content-type: text/html; charset=iso-8859-1";

if (mail($mail_destinatario, $mail_oggetto, $mail_corpo, $mail_headers))
  echo "Messaggio inviato con successo a " . $mail_destinatario. " +++ ". $nome_mittente ." +++  ".$mail_mittente;
else
  echo "Errore. Nessun messaggio inviato.";
?>