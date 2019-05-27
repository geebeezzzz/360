


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
			data.assets[3].layers[1].t.d.k[0].s.t = mrSlug.shield.title_text; //Player Name
			//var toReplace = data.assets[3].layers[1].t.d.k[0].s.t;
			//var replaceMe = toReplace.replace(mrSlug.shield.title_text);
			
			console.log(data.assets[3].layers[1].t.d.k[0].s.t);
		import ('https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie.js');
//            var mainContainer = document.getElementById("myData");
//			myObj = data;
//			console.log(myObj);
//			imgURL = mrSlug.profile_picture;
//			console.log(imgURL.substr(0,imgURL.lastIndexOf('/')) + '/');
//			console.log(imgURL.replace(/^.*[\\\/]/, ''));
//			myObj.assets[0].u = imgURL.substr(0,imgURL.lastIndexOf('/')) + '/';
//			myObj.assets[0].p = imgURL.replace(/^.*[\\\/]/, '');
//			
//			//////////////TEXT////////////////////////////////////////
//			myObj.assets[3].layers[1].t.d.k[0].s.t = mrSlug.shield.title_text //Player Name
//			myObj.assets[3].layers[0].t.d.k[0].s.t = mrSlug.shield.subtitle_text //Club Name
//			myObj.layers[7].t.d.k[0].s.t = mrSlug.team.league.name //League Name
//			myObj.layers[11].t.d.k[0].s.t = mrSlug.team.league.name //League Name
		
//					anim.renderer.elements[2].elements[2].assetData.p = imgURL.replace(/^.*[\\\/]/, '');
//					anim.renderer.elements[2].elements[2].assetData.u = imgURL.substr(0,imgURL.lastIndexOf('/')) + '/';	
									
//					console.log(mrSlug);
//					console.log(anim.renderer);
//					console.log(anim.renderer.layers);
//					console.log(anim.renderer.layers[2].layers[1]);

				
//					console.log(anim.renderer.elements[2].elements[2].assetData.p);
		
		
		
		
		setTimeout(myLottieWaiter, 3000);
		
		
		
		
		const imageChange = document.getElementById("Profile");
		//imageChange.firstChild.href.baseVal = imageInfo;
		//imageChange[0].firstChild.href.baseVal = circles[i].thumbnail;
		console.log(imageChange);
		
//function dynamicallyLoadScript(url) {	
//	var lottie = document.createElement("lottie");  // create a script DOM node
//	lottie.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie.js'  // set its src to the provided URL
//	document.body.appendChild(script); 
//}
		
	
		
		
	function myLottieWaiter(){
		
		console.log(data);
		
	
		
			
		var animData = {
				  container: document.getElementById('POTW'),
				  renderer: 'svg',
				  loop: true,
				  autoplay: false,
				  path: 'data.json',
				  assetsPath: './images/',
				  rendererSettings: {
					  clearCanvas: true,
					//  progressiveLoad: true,
				  }
				};
			


			var anim = lottie.loadAnimation(animData);

			anim.addEventListener("DOMLoaded", function() {
				console.log(anim.renderer);
//				anim.renderer.elements[7].updateDocumentData({t:mrSlug.team.league.name}); //LEAUGE NAME
//				anim.renderer.elements[11].updateDocumentData({t:mrSlug.team.league.name}); //LEAUGE NAME
				anim.renderer.elements[2].elements[2].updateDocumentData({t:mrSlug.shield.title_text}); //Player Name
				anim.renderer.elements[2].elements[1].updateDocumentData({t:mrSlug.shield.subtitle_text}); //Club Name
				anim.renderer.elements[2].elements[0].updateDocumentData({t:mrSlug.shield.user.primary_position.localized_abbreviation}); //Player Position
				
				anim.renderer.elements[4].elements[2].updateDocumentData({t:mrSlug.shield.title_text}); //Player Name
				anim.renderer.elements[4].elements[1].updateDocumentData({t:mrSlug.shield.subtitle_text}); //Club Name
				anim.renderer.elements[4].elements[0].updateDocumentData({t:mrSlug.shield.user.primary_position.localized_abbreviation}); //Player Position
				
				
				//IMAGES
				anim.renderer.globalData.imageLoader.images[0].p = mrSlug.profile_picture.replace(/^.*[\\\/]/, '');
				anim.renderer.globalData.imageLoader.images[0].u = mrSlug.profile_picture.substr(0,mrSlug.profile_picture.lastIndexOf('/')) + '/';
				anim.renderer.globalData.imageLoader.images[1].p = mrSlug.profile_picture.replace(/^.*[\\\/]/, '');
				anim.renderer.globalData.imageLoader.images[1].u = mrSlug.profile_picture.substr(0,mrSlug.profile_picture.lastIndexOf('/')) + '/';
				
				
				anim.renderer.animationItem.assets[0].p = mrSlug.profile_picture.replace(/^.*[\\\/]/, '');
				anim.renderer.animationItem.assets[0].u = mrSlug.profile_picture.substr(0,mrSlug.profile_picture.lastIndexOf('/')) + '/';	
				anim.renderer.animationItem.assets[1].p = mrSlug.profile_picture.replace(/^.*[\\\/]/, '');
				anim.renderer.animationItem.assets[1].u = mrSlug.profile_picture.substr(0,mrSlug.profile_picture.lastIndexOf('/')) + '/';	
				//testing is text change change the same way//
						anim.renderer.elements[7].data.t.d.k[0].s.t = mrSlug.team.league.name; //LEAUGE NAME
						anim.renderer.elements[11].data.t.d.k[0].s.t= mrSlug.team.league.name; //LEAUGE NAME	
				
//				anim.destroy(); //MIGHT NEED TO MOVE
			
				anim.play(); //MIGHT NEED TO MOVE
			})
				
//			anim.addEventListener("destroy", function(){
//				
//				console.log("im destroyed");
//				
//						var animData = {
//						  container: document.getElementById('POTW'),
//						  renderer: 'html',
//						  loop: true,
//						  autoplay: false,
//						  path: 'data.json',
//						  assetsPath: './images/',
//						  rendererSettings: {
//						  clearCanvas: true,
//						  progressiveLoad: true,
//						  }
//						};
//					var anim = lottie.loadAnimation(animData);
//					anim.play(); //MIGHT NEED TO MOVE
//				})
				
				
				
			}
		}
					
	}



