function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded",fn);
  }
}
ready(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","/assets/js/quotes.json",true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var quotes = JSON.parse(xmlhttp.responseText);
      var fruchtsaft = [];
      for (var i = 0; i < quotes["fruchtsaft"].length; i++) {
        fruchtsaft.push(quotes["fruchtsaft"][i]["c"]);
      }
      fruchtsaft.sort();
      var anni = [];
      for (var i = 0; i < quotes["anni"].length; i++) {
        anni.push(quotes["anni"][i]["c"]);
      }
      anni.sort();
      for (var i = 0; i < fruchtsaft.length; i++) {
        var item = document.createElement("LI");
        var code = document.createElement("PRE");
        code.innerHTML = fruchtsaft[i];
        item.appendChild(code);
        document.getElementById("fruchtsaftCodes").appendChild(item);
      }
      for (var i = 0; i < anni.length; i++) {
        var item = document.createElement("LI");
        var code = document.createElement("PRE");
        code.innerHTML = anni[i];
        item.appendChild(code);
        document.getElementById("anniCodes").appendChild(item);
      }
    }
  };
  xmlhttp.send(null);
});
