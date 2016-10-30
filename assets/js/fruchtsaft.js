function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded",fn);
  }
}

var quotes;
var getValue = [];
var codes = [];

ready(function(){

  var hashes = window.location.search.slice(1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    var hash = hashes[i].split("=");
    getValue.push(hash[0]);
    getValue[hash[0]] = hash[1];
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "/assets/js/fruchtsaft.json", true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      quotes = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < quotes["quote"].length; i++) {
        codes.push(quotes["quote"][i]["c"]);
        codes[quotes["quote"][i]["c"]] = i;
      }
      function random_q(max) {
        var q;
        q = Math.round(Math.random() * max);
        if (getValue["not"] && getValue["not"] >= 0 && getValue["not"] < quotes["quote"].length) {
          while (q == getValue["not"]) {
            q = Math.round(Math.random() * max);
          }
        } else if (getValue["n"] && getValue["n"] >= 0 && getValue["n"] < quotes["quote"].length) {
          while (q == getValue["n"]) {
            q = Math.round(Math.random() * max);
          }
        }
        return q;
      }
      var q = getValue["q"] && getValue["q"] >= 0 && getValue["q"] < quotes["quote"].length ? getValue["q"] : (getValue["c"] && codes.indexOf(getValue["c"]) > -1 ? codes[getValue["c"]] : random_q(quotes["quote"].length - 1));

      document.getElementById("quote").innerHTML = quotes["quote"][q]["q"];
      document.getElementById("cite").innerHTML = "– " +  quotes["by"][0][quotes["quote"][q]["by"]] + ", " + quotes["quote"][q]["y"];

      document.getElementById("link__new_quote").href = "./?n=" + q + "";
      document.getElementById("link__tweet").href = "https://twitter.com/intent/tweet?text=" + encodeURI(quotes["quote"][q]["q"].replace(/<br>/g,"\n").replace(/<strong>/g,"").replace(/<\/strong>/g,"")) + "&hashtags=fruchtsaft,quote&url=" + encodeURI("https://fruchtsaft.veyxos.de/?c=" + q) + "&via=TheEmerl&related=TheEmerl%3ADer%20Typ%20um%20den%27s%20hier%20geht%2CVeyxos%3AEr%20hat%20das%20alles%20hier%20verbrochen!";
      document.getElementById("link__copy").setAttribute("data-clipboard-text","http://fruchtsaft.veyxos.de/?c=" + q);

      console.log("q=" + q);
      console.log(quotes);
    }
  };
  xmlhttp.send(null);

  new Clipboard('#link__copy');
  document.getElementById("link__tweet").addEventListener("click",function(event){
    event.preventDefault();
    window.open(this.href, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
  });

  document.body.removeChild(document.getElementById("nojs"));

});
