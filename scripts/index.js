var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
  
  
})

console.log(5 + 6);

//document.getElementById("bm").innerHTML = 5 + 6;

document.getElementById("bm").innerHTML = "Page location is " + window.location.href;

console.log(window.location);



document.getElementById("whatnow").innerHTML = "Page search is " + window.location.search.substring(1);


//console.log('api.tonsser.com/50/users/db264873-b9d5-4b4c-8a06-4ae6e6f8fa5c');


var request = new XMLHttpRequest()

request.open('GET', 'https://api.tonsser.com/50/users/db264873-b9d5-4b4c-8a06-4ae6e6f8fa5c', true)
request.onload = function() {
	
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data.response.shield.rating.overall)
    }
	
   else {
    console.log('error')
  }
}

request.send()




