<?php
$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        //submit form
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'jaegarls@icloud.com';
        $subject = 'Portfolio Contact Form Submission';

        $body .= 'Name: ' . $name . "\r\n";
        $body .= 'Email: ' . $email . "\r\n";
        $body .= 'Message: ' . $message . "\r\n";
        $headers = "From: jaegarls@icloud.com";
        mail($to, $subject, $body, $headers);

        $message_sent = true;
    }
}
if ($message_sent == true) {
    echo "<script type='text/javascript'>alert('Your message has been sent!');</script>";
}

?>