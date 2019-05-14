///////////////////////////////////////////////////LOAD////////////////////////////////////

var my_rating = fetch('data.json')
	.then(response => response.json())
	.then(json => json.layers[1].t.d.k[0].s.t);
	

var boi
var json = fetch('data.json')
	.then(response => {
	  this.boi = response.json()
	  this.boi.layers[1].t.d.k[0].s.t = "huh"
console.logt(his.boi.layers[1].t.d.k[0].s.t)
	})

//var new_json = json.then(function(result) {
//	result => {
//		result.layers[1].t.d.k[0].s.t = "huh"
//		
//	},
//	error => {
//		
//	}
//}).await()

console.log(json)
	// .then(json => console.log(json))
	//.then(json.layers[1].t.d.k[0].s.t = "huh")



///////////////////////////////////////////////////LOAD ANIMATION////////////////////////////////////

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: boi
	//path: 'data.json'
  
})

{path: 'data.json'}

console.log(5 + 6);

//document.getElementById("bm").innerHTML = 5 + 6;

document.getElementById("bm").innerHTML = "Page location is " + window.location.href;

console.log(window.location);

document.getElementById("whatnow").innerHTML = "Page search is " + window.location.search.substring(1).replace("slug=","");








//var mrJson = localStorage.getItem("data.json");
//console.log(mrJson.layers);
//animation.layers.t.d.k.s.t = "Mercedes";




