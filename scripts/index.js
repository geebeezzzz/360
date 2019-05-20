// JavaScript Document
const app = document.getElementById('root')





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
			
			//////////////////////////////////CHANGING////////////////////////
	

			// Create a request variable and assign a new XMLHttpRequest object to it.
			var request = new XMLHttpRequest()

			// Open a new connection, using the GET request on the URL endpoint
			request.open('GET', 'https://staging-api.tonsser.com/50/users/david-pedersen', true)

			request.onload = function () {

				var userName = JSON.parse(this.response)
			  if (request.status >= 200 && request.status < 400) {
			/////////////////////////////////////////////////////////////////PLACE TO RUN USING API DATA/////////////////////////////////////////////	  


				  console.log(userName.response.firstname);
				  
				  
				  
				  			myObj = data[0]; 
							myObj.firstName = userName.response.firstname;
							console.log(myObj);
			/////////////////////////////////////////////////////////////////PLACE TO RUN USING API DATA/////////////////////////////////////////////	 	  
	  
	  
    
			  } else {
				const errorMessage = document.createElement('marquee')
				errorMessage.textContent = `Gah, it's not working!`
				app.appendChild(errorMessage)
			  }



			  }

			// Send request
			request.send()
			
			
			
			////////////////////////////////////////////////////////////////
			
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
			
			console.log(data[0].firstName);		
			
			//https://staging-api.tonsser.com/50/users/david-pedersen
				
//			myObj = data[0]; 
//			myObj.firstName = "bad";
//			console.log(myObj);		
		}
