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
		
		<div id = "index-intro-text">
			<h5>>>> Welcome to AstroNet! This service will allow you to search for asteroids, with the ability see to which ones are potentially hazardous,
			analyse and monitor exoplanet data from the Kepler Field,
			and view the current Astronomy Picture of the Day<br></h5>
		</div>
		
		
		<!--Asteroid images split up using Bootstrap-->
		<div class = "row">
			<div class = "col-lg-4">
				<img src = "img/idagaspra.jpg" alt="Ida and Gaspra" style="height:400px; width:250px;border-radius:10%;">
				<h5 style="margin-top:2%; margin-bottom:5%; color:#ffffff; font-family: 'Courier New', monospace;">Ida and Gaspra</h5>
			</div>
				
			<div class = "col-lg-4">
				<img src = "img/vesta.jpg" alt="4 Vesta" style="height:400px; width:250px;border-radius:10%;">
				<h5 style="margin-top:2%; margin-bottom:5%; color:#ffffff; font-family: 'Courier New', monospace;">4 Vesta</h5>
			</div>
			
			<div class = "col-lg-4">
				<img src = "img/eros.jpg" alt="Eros" style="height:400px; width:250px;border-radius:10%;">
				<h5 style="margin-top:2%; margin-bottom:5%; color:#ffffff; font-family: 'Courier New', monospace;">Eros</h5>
			</div>
		</div>
		
		<div id = "footer-image">
			<img src = "img/NASA_logo_large.jpg" alt="NASA Logo" style="height:200px;width:250px;">
		</div>
		
		<div id = "copyright">
			<h6>The NeoWs, Exoplanet and APOD APIs, as well as the images used on this site are the strict property of NASA.<br><br>This application has been produced for educational purposes only.<br></h6>
		</div>
		
		<footer>
			<h6>Patrick Welsh | BSc (Hons) Computing</h6>
			<h6>Email: <a href = "mailto: 1805531@uad.ac.uk">1805531@uad.ac.uk</a></h6>
		</footer>
	</body>
</html>
