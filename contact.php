<!DOCTYPE html> 
<html lang="en">
	<head>
		<title>AstroNet</title>
		<meta charset="utf-8">	
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<!-- Popper JS -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<!--Viewport-->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--CSS-->
		<link rel="stylesheet" href="styles.css">
		<link rel="shortcut icon" href="img/ico/favicon.ico" type="image/x-icon">
	</head>

	<body>
		<?php
			include "nav.php";
		?>
		
		<div class = "header">
			<h1 id = "jumbo">AstroNet</h1>
		</div>
		
		<div id = "contact-text">
			<h5>I can be contacted at this address:</h5>
			<h4><b><u><a href = "mailto: 1805531@uad.ac.uk">1805531@uad.ac.uk</a></u></b></h4><br><br>
			
			<h5>This information is also contained at the footer of all site pages.<br>
			Have a question or possible improvements?<br>
			Fill in the form below to leave feedback.<br><br>
			Thanks!</h5><br><br><br>
			
			<form>
			  <label for="fname">First name:</label><br>
			  <input type="text" id="fname" name="fname" placeholder="Please enter your first name" style="width:50%; padding:1%; background-color:#000000; color:#ffffff; border-radius:10px;"><br><br><br>
			  
			  <label for="lname">Last name:</label><br>
			  <input type="text" id="lname" name="lname" placeholder="Please enter your last name" style="width:50%; padding:1%; background-color:#000000; color:#ffffff; border-radius:10px;"><br><br><br>

			  <label for="feedback">Submit your question or give feedback</label><br>
			  <textarea id="feedback" name="feedback" rows="4" cols="50" style="width:50%; background-color:#000000; color:#ffffff; border-radius:10px;">
			  </textarea>
			  
			  <input id="contact-submit-button" type="submit" value="Submit">
			</form> 
			
		</div>
		
		<div id = "footer-image">
			<img src = "img/NASA_logo_large.jpg" alt="NASA Logo" style="height:200px;width:250px;">
		</div>
		
		<div id = "copyright">
			<h6>The NeoWs, Exoplanet and APOD APIs, as well as the images used on this site are the strict property of NASA.<br><br>This application has been produced for educational purposes only.<br></h6>
		</div>
		
		<footer>
			<h6>Patrick Welsh | BSc (Hons) Computing</h6>
		</footer>
	</body>
</html>
