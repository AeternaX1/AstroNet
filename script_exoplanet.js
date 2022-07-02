//****************
//	EXOPLANET
//***************

//API KEY: 0l52G4phuR2NBdUyrWSnezI4VRrbg75k59PfALt5

let exoConsole = document.querySelector("#exoConsole");
exoConsole = exoplanetConsole.addEventListener("click", sendExoplanetApiRequestConsole);

function sendExoplanetApiRequestConsole(){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
	  if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(typeof xhr.responseText);
		console.log(xhr.responseText);
	  }
	};
	
	xhr.open("GET", "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1", true);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.send(null);
}