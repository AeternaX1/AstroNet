/**************
	APOD		 
/**************/

//API KEY: 0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5

//Call API request function
sendApodApiRequest();

//Function to fetch data from NASA API
//Async functions used with APIs as we are sending out a request, and need to wait for the data to come back
async function sendApodApiRequest(){
	//URL with personal API key
	let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5");
	
	console.log(response);
	let data = await response.json();
	console.log(data);
	useApodApiData(data);
}

//Function for styling the API data once received
function useApodApiData(data){
	//API data will be styled here
	//Some json is nested.
	//Base elements accessed via data.example
	//Other elemenets are accessed via data.example.nested_example

	//Base Data
	document.querySelector(".contentApod").innerHTML = 
	"<h3><br>" + data.title + " " + "</h3><br><br>" +
	"<img src=" + data.url + " style='border-radius: 30px; width: 75%; height: 75%;'>" + "<br><br>" +
	data.explanation + " " + "<br><br>" +
	"Copyright: " + data.copyright + "<br>" +
	//"HD URL: " + data.hdurl + " " + "<br>" +
	"Date: " + data.date + "<br>" +
	"Media Type: " + data.media_type + " " + "<br>" +
	"Service Version: " + data.service_version + " " + "<br>";
}

/*
//******************************************************************************
//This commented code was used to view the API data on the browser console.
//******************************************************************************

let apodConsole = document.querySelector("#apodConsole");
apodConsole = apodConsole.addEventListener("click", sendApodApiRequestConsole);

function sendApodApiRequestConsole(){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
	  if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(typeof xhr.responseText);
		console.log(xhr.responseText);
	  }
	};
	
	xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5", true);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.send(null);
}
*/
