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
var mrJson = "Fake API testing Data";
var mrData = "data, am i data?";

//////////FAKE TONSSER API REQUEST//////////////

fetch('./scripts/API_Data.json')
            .then(function (response) {
                return response.json();
				            })
            .then(function (mrData) {
                mrAppendData(mrData);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
	
	globalThis.mrData;
	
function mrAppendData(mrData) {
console.log(mrData);
							
	var ratingSort = [mrData.player01, mrData.player02, mrData.player03, mrData.player04, mrData.player05, mrData.player06, mrData.player07, mrData.player08, mrData.player09, mrData.player10, mrData.player11];
							
	ratingSort.sort(function(a, b){
		return a.overall_rating-b.overall_rating
	});
	console.log(ratingSort);
	//console.log(ratingSort.overall_rating);
	
//////////FAKE TONSSER API REQUEST//////////////

/*
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

*/

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
				import ('https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.1/lottie.js');



			setTimeout(myLottieWaiter, 2000);




			const imageChange = document.getElementById("Profile");
			console.log(imageChange);





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
								progressiveLoad: false
//								clearCanvas: true;
		  					  }	
								
					};



						var anim = lottie.loadAnimation(animData);

						anim.addEventListener("DOMLoaded", function() {
							console.log(anim.renderer);
							
							var clubLogo0 = ratingSort[0].away_club_logo;
							//var mySplicer = clubLogo0.slice
							
							console.log('https' + ratingSort[0].away_club_logo.slice(4));
							
							
//							2, 5, 7, 9, 10, 12, 14, 15, 18, 21, 23
//							console.log(ratingSort[10].away_club_result);
							anim.renderer.elements[2].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[0].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[2].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[0].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[2].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[0].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[2].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[0].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[2].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[0].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[2].elements[11].updateDocumentData({t:ratingSort[0].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[2].elements[12].updateDocumentData({t:ratingSort[0].player_name});								//12 - #Name
							anim.renderer.elements[2].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[0].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[2].elements[15].updateDocumentData({t:ratingSort[0].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[2].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[0].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 02 - Rating //
							anim.renderer.elements[5].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[1].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[5].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[1].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[5].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[1].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[5].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[1].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[5].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[1].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[5].elements[11].updateDocumentData({t:ratingSort[1].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[5].elements[12].updateDocumentData({t:ratingSort[1].player_name});								//12 - #Name
							anim.renderer.elements[5].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[1].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[5].elements[15].updateDocumentData({t:ratingSort[1].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[5].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[1].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 03 - Rating //
							anim.renderer.elements[7].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[2].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[7].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[2].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[7].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[2].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[7].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[2].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[7].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[2].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[7].elements[11].updateDocumentData({t:ratingSort[2].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[7].elements[12].updateDocumentData({t:ratingSort[2].player_name});								//12 - #Name
							anim.renderer.elements[7].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[2].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[7].elements[15].updateDocumentData({t:ratingSort[2].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[7].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[2].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 04 - Rating //
							anim.renderer.elements[9].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[3].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[9].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[3].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[9].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[3].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[9].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[3].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[9].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[3].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[9].elements[11].updateDocumentData({t:ratingSort[3].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[9].elements[12].updateDocumentData({t:ratingSort[3].player_name});								//12 - #Name
							anim.renderer.elements[9].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[3].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[9].elements[15].updateDocumentData({t:ratingSort[3].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[9].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[3].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 05 - Rating //
							anim.renderer.elements[10].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[4].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[10].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[4].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[10].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[4].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[10].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[4].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[10].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[4].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[10].elements[11].updateDocumentData({t:ratingSort[4].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[10].elements[12].updateDocumentData({t:ratingSort[4].player_name});								//12 - #Name
							anim.renderer.elements[10].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[4].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[10].elements[15].updateDocumentData({t:ratingSort[4].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[10].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[4].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 06 - Rating //
							anim.renderer.elements[12].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[5].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[12].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[5].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[12].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[5].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[12].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[5].home_club_logo.slice(4);			// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[12].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[5].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[12].elements[11].updateDocumentData({t:ratingSort[5].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[12].elements[12].updateDocumentData({t:ratingSort[5].player_name});								//12 - #Name
							anim.renderer.elements[12].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[5].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[12].elements[15].updateDocumentData({t:ratingSort[5].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[12].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[5].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 07 - Rating //
							anim.renderer.elements[14].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[6].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[14].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[6].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[14].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[6].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[14].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[6].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[14].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[6].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[14].elements[11].updateDocumentData({t:ratingSort[6].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[14].elements[12].updateDocumentData({t:ratingSort[6].player_name});								//12 - #Name
							anim.renderer.elements[14].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[6].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[14].elements[15].updateDocumentData({t:ratingSort[6].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[14].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[6].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 08 - Rating //
							anim.renderer.elements[15].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[7].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[15].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[7].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[15].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[7].away_club_logo.slice(4);			// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[15].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[7].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[15].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[7].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[15].elements[11].updateDocumentData({t:ratingSort[7].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[15].elements[12].updateDocumentData({t:ratingSort[7].player_name});								//12 - #Name
							anim.renderer.elements[15].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[7].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[15].elements[15].updateDocumentData({t:ratingSort[7].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[15].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[7].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 09 - Rating //
							anim.renderer.elements[18].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[8].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[18].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[8].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[18].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[8].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[18].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[8].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[18].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[8].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[18].elements[11].updateDocumentData({t:ratingSort[8].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[18].elements[12].updateDocumentData({t:ratingSort[8].player_name});								//12 - #Name
							anim.renderer.elements[18].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[8].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[18].elements[15].updateDocumentData({t:ratingSort[8].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[18].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[8].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG

							// PLAYER 10 - Rating //
							anim.renderer.elements[21].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[9].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[21].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[9].home_club_result)}); 			// 1 - #Score1
							anim.renderer.elements[21].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[9].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[21].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[9].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[21].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[9].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[21].elements[11].updateDocumentData({t:ratingSort[9].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[21].elements[12].updateDocumentData({t:ratingSort[9].player_name});								//12 - #Name
							anim.renderer.elements[21].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[9].club_logo_url.slice(4);			// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[21].elements[15].updateDocumentData({t:ratingSort[9].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[21].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[9].profile_picture.slice(4);				// 17 - Profile_Holder 1 - PNG

							// PLAYER 11 - Rating //
							anim.renderer.elements[23].elements[0].updateDocumentData({t:JSON.stringify(ratingSort[10].away_club_result)});			// 0 - #Score2
							anim.renderer.elements[23].elements[1].updateDocumentData({t:JSON.stringify(ratingSort[10].home_club_result)}); 		// 1 - #Score1
							anim.renderer.elements[23].elements[3].elements[1].innerElem.href.baseVal = 'https' + ratingSort[10].away_club_logo.slice(4);				// 3 - #ClubLogo 3 1 - PNG
							anim.renderer.elements[23].elements[5].elements[1].innerElem.href.baseVal = 'https' + ratingSort[10].home_club_logo.slice(4);				// 5 - #ClubLogo 2 1 - PNG
							anim.renderer.elements[23].elements[9].updateDocumentData({t:JSON.stringify(ratingSort[10].overall_rating)}); 			// 9 - #Rating
							anim.renderer.elements[23].elements[11].updateDocumentData({t:ratingSort[10].club_name}); 								// 11 - #ClubName
							anim.renderer.elements[23].elements[12].updateDocumentData({t:ratingSort[10].player_name});								// 12 - #Name
							anim.renderer.elements[23].elements[13].elements[1].innerElem.href.baseVal = 'https' + ratingSort[10].club_logo_url.slice(4);				// 13 - #ClubLogo 1 - PNG
							anim.renderer.elements[23].elements[15].updateDocumentData({t:ratingSort[10].localized_abbreviation}); 					// 15 - #Position
							anim.renderer.elements[23].elements[17].elements[1].innerElem.href.baseVal = 'https' + ratingSort[10].profile_picture.slice(4);			// 17 - Profile_Holder 1 - PNG
							// 27-37 AE Layers 
							// 0 - #Position
							// 2 - #ClubName
							// 3 - #Name
							// 4 - #ClubLogo 1 - PNG
							// 7 - Profile_Holder
							
							
							console.log(mrData);
							// PLAYER 01 //
							anim.renderer.elements[27].elements[0].textContainer.innerHTML = mrData.player01.localized_abbreviation; // #Position
							anim.renderer.elements[27].elements[2].textContainer.innerHTML = mrData.player01.club_name; // #ClubName
							anim.renderer.elements[27].elements[3].textContainer.innerHTML = mrData.player01.player_name; // #Name
							anim.renderer.elements[27].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player01.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[27].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player01.profile_picture.slice(4); // Profile_Holder
							// PLAYER 02 //
							anim.renderer.elements[28].elements[0].textContainer.innerHTML = mrData.player02.localized_abbreviation; // #Position
							anim.renderer.elements[28].elements[2].textContainer.innerHTML = mrData.player02.club_name; // #ClubName
							anim.renderer.elements[28].elements[3].textContainer.innerHTML = mrData.player02.player_name; // #Name
							anim.renderer.elements[28].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player02.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[28].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player02.profile_picture.slice(4); // Profile_Holder
							// PLAYER 03 //
							anim.renderer.elements[29].elements[0].textContainer.innerHTML = mrData.player03.localized_abbreviation; // #Position
							anim.renderer.elements[29].elements[2].textContainer.innerHTML = mrData.player03.club_name; // #ClubName
							anim.renderer.elements[29].elements[3].textContainer.innerHTML = mrData.player03.player_name; // #Name
							anim.renderer.elements[29].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player03.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[29].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player03.profile_picture.slice(4); // Profile_Holder
							// PLAYER 04 //
							anim.renderer.elements[30].elements[0].textContainer.innerHTML = mrData.player04.localized_abbreviation; // #Position
							anim.renderer.elements[30].elements[2].textContainer.innerHTML = mrData.player04.club_name; // #ClubName
							anim.renderer.elements[30].elements[3].textContainer.innerHTML = mrData.player04.player_name; // #Name
							anim.renderer.elements[30].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player04.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[30].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player04.profile_picture.slice(4); // Profile_Holder
							// PLAYER 05 //
							anim.renderer.elements[31].elements[0].textContainer.innerHTML = mrData.player05.localized_abbreviation; // #Position
							anim.renderer.elements[31].elements[2].textContainer.innerHTML = mrData.player05.club_name; // #ClubName
							anim.renderer.elements[31].elements[3].textContainer.innerHTML = mrData.player05.player_name; // #Name
							anim.renderer.elements[31].elements[4].elements[1].innerElem.href.baseVal = 'https' + mrData.player05.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[31].elements[7].elements[1].innerElem.href.baseVal = 'https' + mrData.player05.profile_picture.slice(4); // Profile_Holder
							// PLAYER 06 //
							anim.renderer.elements[32].elements[0].textContainer.innerHTML = mrData.player06.localized_abbreviation; // #Position
							anim.renderer.elements[32].elements[2].textContainer.innerHTML = mrData.player06.club_name; // #ClubName
							anim.renderer.elements[32].elements[3].textContainer.innerHTML = mrData.player06.player_name; // #Name
							anim.renderer.elements[32].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player06.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[32].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player06.profile_picture.slice(4); // Profile_Holder
							// PLAYER 07 //
							anim.renderer.elements[33].elements[0].textContainer.innerHTML = mrData.player07.localized_abbreviation; // #Position
							anim.renderer.elements[33].elements[2].textContainer.innerHTML = mrData.player07.club_name; // #ClubName
							anim.renderer.elements[33].elements[3].textContainer.innerHTML = mrData.player07.player_name; // #Name
							anim.renderer.elements[33].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player07.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[33].elements[7].elements[1].innerElem.href.baseVal =  'https' +  mrData.player07.profile_picture.slice(4); // Profile_Holder
							// PLAYER 08 //
							anim.renderer.elements[34].elements[0].textContainer.innerHTML = mrData.player08.localized_abbreviation; // #Position
							anim.renderer.elements[34].elements[2].textContainer.innerHTML = mrData.player08.club_name; // #ClubName
							anim.renderer.elements[34].elements[3].textContainer.innerHTML = mrData.player08.player_name; // #Name
							anim.renderer.elements[34].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player08.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[34].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player08.profile_picture.slice(4); // Profile_Holder
							// PLAYER 09 //
							anim.renderer.elements[35].elements[0].textContainer.innerHTML = mrData.player09.localized_abbreviation; // #Position
							anim.renderer.elements[35].elements[2].textContainer.innerHTML = mrData.player09.club_name; // #ClubName
							anim.renderer.elements[35].elements[3].textContainer.innerHTML = mrData.player09.player_name; // #Name
							anim.renderer.elements[35].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player09.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[35].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player09.profile_picture.slice(4); // Profile_Holder
							// PLAYER 10 //
							anim.renderer.elements[36].elements[0].textContainer.innerHTML = mrData.player10.localized_abbreviation; // #Position
							anim.renderer.elements[36].elements[2].textContainer.innerHTML = mrData.player10.club_name; // #ClubName
							anim.renderer.elements[36].elements[3].textContainer.innerHTML = mrData.player10.player_name; // #Name
							anim.renderer.elements[36].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player10.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[36].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player10.profile_picture.slice(4); // Profile_Holder

							// PLAYER 11 //
							anim.renderer.elements[37].elements[0].textContainer.innerHTML = mrData.player11.localized_abbreviation; // #Position
							anim.renderer.elements[37].elements[2].textContainer.innerHTML = mrData.player11.club_name; // #ClubName
							anim.renderer.elements[37].elements[3].textContainer.innerHTML = mrData.player11.player_name; // #Name
							anim.renderer.elements[37].elements[4].elements[1].innerElem.href.baseVal =  'https' + mrData.player11.club_logo_url.slice(4); // #ClubLogo
							anim.renderer.elements[37].elements[7].elements[1].innerElem.href.baseVal =  'https' + mrData.player11.profile_picture.slice(4); // Profile_Holder



							lottie.setSpeed(0);
							lottie.setQuality(1);
							anim.addEventListener("loaded_images", function() {
								console.log("now!")
								anim.play(); //MIGHT NEED TO MOVE
							})
					  })

				}
			}
		}
}



