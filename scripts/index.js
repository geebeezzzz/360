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
