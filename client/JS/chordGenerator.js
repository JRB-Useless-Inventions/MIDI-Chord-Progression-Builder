var http = new XMLHttpRequest();
var url = "/chords";


var keyDD = document.getElementById("key_NOTE");
var scaleDD = document.getElementById("key_SCALE");
var octaveDD = document.getElementById("OCTAVE");

keyDD.addEventListener("change", setValue, false)
scaleDD.addEventListener("change", setValue, false)
octaveDD.addEventListener("change", setValue, false)

function setValue(evt){
	var evt = evt.srcElement;
	var id = evt.id;
	var val = evt.options[evt.selectedIndex].value;
	var params = JSON.stringify({
		id : id,
		val : val
	})

	http.open("POST", url, true);
	http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	http.send(params);
}





http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        //console.log(JSON.parse(http.response).C[0]);
    }
}
