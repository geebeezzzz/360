// JavaScript Document



//
//
//
//const app = document.getElementById('root')
//
//
//
//
//
//
//
//
//
//
//
//
//
///////////////////////////////////////////////////////////////////GET URL INFO OUT/////////////////////////////////////////////	



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


//                https://youthful-feynman-7811c2.netlify.com/?slug=david-pedersen

/////////////////////////////////////////////////////////////////GET URL INFO OUT/////////////////////////////////////////////	



// Create a request variable and assign a new XMLHttpRequest object to it.
var mrSlug = 'startState'

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://staging-api.tonsser.com/50/users/' + getQueryVariable("slug"), true) // getting the user slug from the metaData
// request.open('GET', 'https://staging-api.tonsser.com/50/users/david-pedersen', true) // original api call

request.onload = function () {
	
	var data = JSON.parse(this.response)
	
	{
	mrSlug = data.response;
	}
	
	console.log(mrSlug);
	
  if (request.status >= 200 && request.status < 400) {
/////////////////////////////////////////////////////////////////PLACE TO RUN USING API DATA/////////////////////////////////////////////	  
	
	  
	  console.log(data.response.firstname);
	  
/////////////////////////////////////////////////////////////////PLACE TO RUN USING API DATA/////////////////////////////////////////////	 	  
	  
	  
    
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
	
	
	
  }

// Send request
request.send()
//
//
//
setTimeout(myWaiter, 800);
//
//
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
//			
//			//////////////////////////////////CHANGING////////////////////////
			myObj = data;
			console.log(myObj);
			
			// myObj.v.layers.t.d.k.s.t = mrSlug.shield.title_text;
			
			
			// console.log(myObj.v.layers.t.d.k.s.t);
			// console.log(mrSlug.shield.title_text);
			
			///////////////////IMAGE//////////////////
			
			imgURL = mrSlug.profile_picture;
			console.log(imgURL.substr(0,imgURL.lastIndexOf('/')) + '/');
			console.log(imgURL.replace(/^.*[\\\/]/, ''));
			
			myObj.assets[0].u = imgURL.substr(0,imgURL.lastIndexOf('/')) + '/';
			myObj.assets[0].p = imgURL.replace(/^.*[\\\/]/, '');
			
			
			
//			myObj = data[0]; 
//			myObj.firstName = 'ola';
//			console.log(myObj);
//		
//			myOtherObj = data[1];
//			myOtherObj.firstName = mrSlug.firstname;
//			myOtherObj.lastName = mrSlug.lastname;
//			console.log(myOtherObj);
//			console.log(mrSlug);
//			////////////////////////////////////////////////////////////////
//			
//            for (var i = 0; i < data.length; i++) {
//                var div = document.createElement("div");
//                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//                mainContainer.appendChild(div);
//            }
//			
//			console.log(data[0].firstName);		
//			
//			//https://staging-api.tonsser.com/50/users/david-pedersen
//				
//			//			myObj = data[0]; 
//			//			myObj.firstName = "bad";
//			//			console.log(myObj);		
		}
	
	var animation = bodymovin.loadAnimation({
	  container: document.getElementById('POTW'),
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  path: 'data.json'
	})
	
}


