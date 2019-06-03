


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
var data = "data is not global";


//////////TONSSER API REQUEST//////////////
var request = new XMLHttpRequest()
request.open('GET', 'https://staging-api.tonsser.com/50/users/' + getQueryVariable("slug"), true) // getting the user slug from the metaData


request.onload = function(){
	var data = JSON.parse(this.response)
	{
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
	
	globalThis.data;
	
	function appendData(data) {
		//	data.assets[3].layers[1].t.d.k[0].s.t = mrSlug.shield.title_text; //Player Name			
		//	console.log(data.assets[3].layers[1].t.d.k[0].s.t);
			import ('https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie.js');

		
		
		setTimeout(myLottieWaiter, 3000);
		
		
		
		
		const imageChange = document.getElementById("Profile");
		console.log(imageChange);

		
	
		
		
		function myLottieWaiter(){

				console.log(data);




				var animData = {
						  container: document.getElementById('POTW'),
						  renderer: 'html',
						  loop: true,
						  autoplay: false,
						  path: 'data.json',
						  assetsPath: './images/',
				};



					var anim = lottie.loadAnimation(animData);

					anim.addEventListener("DOMLoaded", function() {
			/*			console.log(anim.renderer);
						anim.renderer.elements[2].elements[2].updateDocumentData({t:mrSlug.shield.title_text}); //Player Name
						anim.renderer.elements[2].elements[1].updateDocumentData({t:mrSlug.shield.subtitle_text}); //Club Name
						anim.renderer.elements[2].elements[0].updateDocumentData({t:mrSlug.shield.user.primary_position.localized_abbreviation}); //Player Position

						anim.renderer.elements[4].elements[2].updateDocumentData({t:mrSlug.shield.title_text}); //Player Name
						anim.renderer.elements[4].elements[1].updateDocumentData({t:mrSlug.shield.subtitle_text}); //Club Name
						anim.renderer.elements[4].elements[0].updateDocumentData({t:mrSlug.shield.user.primary_position.localized_abbreviation}); //Player Position

						//IMAGES
						anim.renderer.elements[2].elements[7].innerElem.href.baseVal = mrSlug.profile_picture.replace("http://","https://");				
						anim.renderer.elements[4].elements[7].innerElem.href.baseVal = mrSlug.profile_picture.replace("http://","https://");
						anim.renderer.elements[2].elements[3].innerElem.href.baseVal = mrSlug.club.logo_url.replace("http://","https://");
						anim.renderer.elements[4].elements[3].innerElem.href.baseVal = mrSlug.club.logo_url.replace("http://","https://");

						anim.renderer.elements[7].textContainer.innerHTML = mrSlug.team.league.name;
						anim.renderer.elements[11].textContainer.innerHTML = mrSlug.team.league.name; //WOOOOORKS!

								*/
						lottie.setQuality('low');
						anim.play(); //MIGHT NEED TO MOVE
				  })

			}
		}
					
	}



