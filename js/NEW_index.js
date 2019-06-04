


////////////GET SLUG////////////////
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

console.log(getQueryVariable("slug"));
////////////GET SLUG////////////////

var mrSlug = 'startState';


//////////TONSSER API REQUEST//////////////
var request = new XMLHttpRequest()
request.open('GET', 'https://staging-api.tonsser.com/50/users/' + getQueryVariable("slug"), true) // getting the user slug from the metaData

request.onload = function () {
	
	var data = JSON.parse(this.response){
		mrSlug = data.response;
	}
	
	if (request.status >= 200 && request.status < 400) {
		console.log(data.response.firstname);  
  	}
	else {
    	const errorMessage = document.createElement('marquee')
    	errorMessage.textContent = `Gah, it's not working!`
    	app.appendChild(errorMessage)
  	}
	console.log(mrSlug);
}
request.send()
//////////TONSSER API REQUEST//////////////


setTimeout(myWaiter, 800);
setTimeout(myLottieWaiter, 3000);


/////////////////////GET LOTTIE DATA.JSON////////////////////
function myWaiter() {
	fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
	
	function appendData(data) {
			
            var mainContainer = document.getElementById("myData");
			myObj = data;
			console.log(myObj);
			imgURL = mrSlug.profile_picture;
			console.log(imgURL.substr(0,imgURL.lastIndexOf('/')) + '/');
			console.log(imgURL.replace(/^.*[\\\/]/, ''));
			myObj.assets[0].u = imgURL.substr(0,imgURL.lastIndexOf('/')) + '/';
			myObj.assets[0].p = imgURL.replace(/^.*[\\\/]/, '');
			
			//////////////TEXT////////////////////////////////////////
			myObj.assets[3].layers[1].t.d.k[0].s.t = mrSlug.shield.title_text //Player Name
			myObj.assets[3].layers[0].t.d.k[0].s.t = mrSlug.shield.subtitle_text //Club Name
			myObj.layers[7].t.d.k[0].s.t = mrSlug.team.league.name //League Name
			myObj.layers[11].t.d.k[0].s.t = mrSlug.team.league.name //League Name
			
			

			var animData = {
				  container: document.getElementById('POTW'),
				  renderer: 'svg',
				  loop: true,
				  autoplay: false,
				  path: 'data.json',
//				  path: data,
				  assetsPath: './images/',
				  rendererSettings: {
						progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
						hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
				  }
			};
			
			var anim = lottie.loadAnimation(animData);

			anim.addEventListener("DOMLoaded", function() {
				anim.play(); //MIGHT NEED TO MOVE
			})
	}
		
function myLottieWaiter(){
	
//	MOVE LOTTIE HERE
}