<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		<script src="lib/sweetalert-master/dist/sweetalert.min.js"></script>
		<link rel="stylesheet" type="text/css" href="lib/sweetalert-master/dist/sweetalert.css">
	</head>
	<body></body>
</html>

<?php

if(isset($_POST['submit'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "guner.zekerie@abv.bg";
    $email_subject = "From my website";
  
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
		?>
		<script>
			swal({
			  title: "Warning!",
			  text: "We are sorry, but there appears to be a problem with the form you submitted.",
			  type: "warning",
			  confirmButtonText: "OK",
			  closeOnConfirm: false
			},
			function(isConfirm){
			  if (isConfirm) {
				window.history.back();
			  }else {}
			});
		</script>
		<?php
		die();
    }
 
     
 
    $first_name = $_POST['first_name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.\n';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.\n';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.\n';
  }
 
  if(strlen($error_message) > 0) {
   ?>
   <script>
		swal({
		  title: "Warning!",
		  text: "<?=$error_message?>",
		  type: "warning",
		  confirmButtonText: "OK",
		  closeOnConfirm: false
		},
		function(isConfirm){
		  if (isConfirm) {
			window.history.back();
		  }else {}
		});
	</script>
	<?php
	die();
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->


<script>
	swal({
  title: "Thank you for contacting us!",
  text: "We will be in touch with you very soon.!",
  type: "success",
  confirmButtonText: "OK",
  closeOnConfirm: false
},
function(isConfirm){
  if (isConfirm) {
    window.location="/";
  }else {}
});
</script>
 
<?php
 
}
?>