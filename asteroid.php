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
		
		<div class = "searchAsteroid">
			<h5>Search for an asteroid: </h5>
			<input id="searchAsteroidInput" type="text"><br><br>
			<button id="searchAsteroidButton">Search</button>
		</div>
		
		<div class = "consoleAsteroid">
			<h5>Open the console via the following instructions: <br><br>
			Right Click > Inspect > Console<br><br>
			Then hit "View Asteroid Data on Console" to populate the console with asteroid data.<br><br>
			This will be in raw JSON format.</h5><br>
			
			<button id="consoleAsteroidButton">View Asteroid Data on Console</button>
		</div>
		
		<div class = "displayAsteroid">
			<button id="displayAsteroidButton">Display Asteroids</button>
		</div>
		
		
		<!--When the API data is received, the asteroid name will be fetched and stored in this div-->
		<div class="name">
		
		</div>
		
		
		<!--When the API data is received, other asteroid data will be fetched and stored in this div, such as orbital data-->
		<div class="contentAsteroid">
		
		</div>
		
		<script type="text/javascript" src="script_asteroid.js"></script>
		
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
