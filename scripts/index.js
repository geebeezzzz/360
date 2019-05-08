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


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("parsing").innerHTML = myObj.response.shield.rating.overall;
  }
};
xmlhttp.open("GET", "https://api.tonsser.com/50/users/db264873-b9d5-4b4c-8a06-4ae6e6f8fa5c", true);
xmlhttp.send();
