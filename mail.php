<?php
//get data from form  

$name = $_REQUEST['fullname'];
$email= $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message= $_REQUEST['message1'];


$txt ="Name = ". $name . "\r\n  Email = ". $email . "Subject = ". $subject . "\r\n Message =" . $message;

mail($to,$subject , $txt , "From: $name < $email>" );
if(empty($name) || empty($email) || empty($subject) || empty($message) )
{
    echo "Please fill all the feilds";    
}
else
{
    mail("itzaayushmail@gmail.com",$subject , $txt , "From: $name < $email>" );
    echo "<script type='text/javascript'>alert('your message sent sucessfully');
    window.history.log(-1);
    </script>";
    
}

?>