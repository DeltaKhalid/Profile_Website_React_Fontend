<?php 

header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
//require 'SMTP.php';
require 'POP3.php';
require 'form_setting.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'] ?? '';
	$email = $_POST['email'] ?? '';
	$message = $_POST['message'] ?? '';

	if (!$name || !$email || !$message) {
		print json_encode(array('status' => 0));
		exit;
	}
	
	$messages  = "<h3>New message from the site " .$fromName. "</h3> \r\n";
	$messages .= "<ul>";
	$messages .= "<li><strong>Name: </strong>" .$name."</li>";
	$messages .= "<li><strong>Email: </strong>" .$email."</li>";
	$messages .= "<li><strong>Message: </strong>" .$message."</li>";
	$messages .= "</ul> \r\n";

	$mail = new PHPMailer;

	$mail->From = $from;
	$mail->FromName = $fromName;
	$mail->addAddress($to, 'Admin');
	$mail->addReplyTo($email, $name);

	$mail->isHTML(true); 
	$mail->CharSet = $charset;

	$mail->Subject = $subj;
	$mail->Body    = $messages;

	if(!$mail->send()) {
	    print json_encode(array('status'=>0));
	} else {
	    print json_encode(array('status'=>1));
	}

}
	
?>