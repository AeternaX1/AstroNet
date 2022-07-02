/****************
	ASTEROID
****************/

//API KEY: 0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5

//Click the button to send the request to the NASA Asteroids NeoWs API. 
//Request API data only when the button is clicked, rather than constantly requesting each time the page loads
let consoleAsteroidButton = document.querySelector("#consoleAsteroidButton");

//Event listener used to wait for the user to clickthe associated button, which then calls the function to request data from the API
consoleAsteroidButton.addEventListener("click", sendAsteroidApiRequestConsole);

function sendAsteroidApiRequestConsole(){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
	  if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(typeof xhr.responseText);
		console.log(xhr.responseText);
	  }
	};
	
	//NEO FEED
	//xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5", true);
	
	//NEO LOOKUP
	//xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5", true);
	
	//NEO BROWSE
	xhr.open("GET", "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5", true);
	
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.send(null);
}


let displayAsteroidButton = document.querySelector("#displayAsteroidButton");
displayAsteroidButton.addEventListener("click", sendAsteroidApiRequestDisplay);

//Function to fetch data from NASA API
//Async functions used with APIs as we are sending out a request, and wait for data to come back
async function sendAsteroidApiRequestDisplay(){
	//URL with personal API key
	let response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5");
	
	console.log(response);
	let data = await response.json();
	console.log(data);
	useAsteroidApiDataDisplay(data);
}

function useAsteroidApiDataDisplay(data){
	//API data will be styled here
	//Some json is nested.
	//Base elements accessed via data.example
	//Other elemenets are accessed via data.example.nested_example

	//Base Data
	document.querySelector(".contentAsteroid").innerHTML = 
	"<h2>" + data.name + "</h2><br><br>" +
	"<u><b>" + "Base Data" + "</u></b>" + "<br>" +
	"Name: " + data.name + "<br>" +
	"Designation: " + data.designation + "<br>" +
	"ID: " + data.id + " " + "<br>" +
	"Absolute Magnitude: " + data.absolute_magnitude_h + "<br>" +
	"<b>POTENTIALLY HAZARDOUS: " + data.is_potentially_hazardous_asteroid + "</b><br>" +
	"Is Sentry Object: " + data.is_sentry_object + "<br>" +
	"Links: " + data.links.self + "<br>" +
	"NASA JPL URL: " +  data.nasa_jpl_url + "</a><br>" +
	"NEO Reference ID: " + data.neo_reference_id + "<br><br><br>" +


	//Diameter Nested JSON
	"<u><b>" + "Estimated Diameter" + "</u></b>" + "<br>" +
	"Maximum Estimated Diameter in Feet: " + data.estimated_diameter.feet.estimated_diameter_max + "<br>" +
	"Minimum Estimated Diameter in Feet: " + data.estimated_diameter.feet.estimated_diameter_min + "<br><br>" +

	"Maximum Estimated Diameter in Kilometers: " + data.estimated_diameter.kilometers.estimated_diameter_max + "<br>" +
	"Minimum Estimated Diameter in Kilometers: " + data.estimated_diameter.kilometers.estimated_diameter_min + "<br><br>" +

	"Maximum Estimated Diameter in Metres: " + data.estimated_diameter.meters.estimated_diameter_max + "<br>" +
	"Minimum Estimated Diameter in Metres: " + data.estimated_diameter.meters.estimated_diameter_min + "<br><br>" +

	"Maximum Estimated Diameter in Miles: " + data.estimated_diameter.miles.estimated_diameter_max + "<br>" +
	"Minimum Estimated Diameter in Miles: " + data.estimated_diameter.miles.estimated_diameter_min + "<br><br><br>" +

	//Orbital Data Nested JSON
	"<u><b>" + "Orbital Data" + "</u></b>" + "<br>" +
	"Aphelion Distance: " + data.orbital_data.aphelion_distance + "<br>" +
	"Ascending Node Longitude: " + data.orbital_data.ascending_node_longitude + "<br>" +
	"Data Arc In Days: " + data.orbital_data.data_arc_in_days + "<br>" +
	"Eccentricity: " + data.orbital_data.eccentricity + "<br>" + 
	"Epoch Osculation: " + data.orbital_data.epoch_osculation + "<br>" + 
	"Equinox: " + data.orbital_data.equinox + "<br>" + 
	"First Observation Date: " + data.orbital_data.first_observation_date + "<br>" + 
	"Inclination: " + data.orbital_data.inclination + "<br>" + 
	"Jupiter Tisserand Invariant: " + data.orbital_data.jupiter_tisserand_invariant + "<br>" + 
	"Last Observation Date: " + data.orbital_data.last_observation_date + "<br>" + 
	"Mean Anomaly: " + data.orbital_data.mean_anomaly + "<br>" +
	"Mean Motion: " + data.orbital_data.mean_motion + "<br>" + 
	"Minimum Orbit Intersection: " + data.orbital_data.minimum_orbit_intersection + "<br>" + 
	"Observations Used: " + data.orbital_data.observations_used + "<br>" + 
	"Orbit Determination Date: " + data.orbital_data.orbit_determination_date + "<br>" + 
	"Orbit ID: " + data.orbital_data.orbit_id + "<br>" + 
	"Orbit Uncertainty: " + data.orbital_data.orbit_uncertainty + "<br>" + 
	"Orbital Period: " + data.orbital_data.orbital_period + "<br>" + 
	"Perihelion Argument: " + data.orbital_data.perihelion_argument + "<br>" + 
	"Perihelion Distance: " + data.orbital_data.perihelion_distance + "<br>" + 
	"Perihelion Time: " + data.orbital_data.perihelion_time + "<br>" +
	"Semi-Major Axis: " + data.orbital_data.semi_major_axis + "<br><br><br>"+ 


	//Orbit Class Nested JSON
	"<u><b> Orbit Class" + "</u></b>" + "<br>" + 
	"Orbit Class Description: " + data.orbital_data.orbit_class.orbit_class_description+ "<br>"+ 
	"Orbit Class Range: " + data.orbital_data.orbit_class.orbit_class_range+ "<br>"+ 
	"Orbit Class Type: " + data.orbital_data.orbit_class.orbit_class_type+ "<br><br><br>" +

	//Close Appraoch Data Nested JSON
	//Nested JSON arrays
	//Loop through this, rather than typing 282 times.
	//The information below is the first close approach data for 2010 PK9, indicated by position 0 in the JSON array of which there are 282 further records
	"<u><b> Close Approach Data" + "</u></b>" + "<br>" + 
	"<b>Close Approach Date:" + data.close_approach_data[0].close_approach_date + "<br></b>" +
	"Close Approach Date Full:" + data.close_approach_data[0].close_approach_date_full + "<br>" +
	"Epoch Date Close Approach:" + data.close_approach_data[0].epoch_date_close_approach  + "<br>" +
	"Miss Distance - Astronomical:" + data.close_approach_data[0].miss_distance.astronomical  + "<br>" +
	"Miss Distance - Kilometers:" + data.close_approach_data[0].miss_distance.kilometers  + "<br>" +
	"Miss Distance - Lunar:" + data.close_approach_data[0].miss_distance.lunar  + "<br>" +
	"Miss Distance - Miles:" + data.close_approach_data[0].miss_distance.miles  + "<br>" +
	"Orbiting Body:" + data.close_approach_data[0].orbiting_body  + "<br>" +

	"Relative Velocity - Km/hr: " + data.close_approach_data[0].relative_velocity.kilometers_per_hour  + "<br>" +
	"Relative Velocity - Km/s: " + data.close_approach_data[0].relative_velocity.kilometers_per_second  + "<br>" +
	"Relative Velocity - Miles/hr: " + data.close_approach_data[0].relative_velocity.miles_per_hour  + "<br>"; 
}
