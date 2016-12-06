function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded",fn);
  }
}

var quote_no,quotes,getValue=[],codes=[],quote_array=[];

ready(function(){
  var hashes = window.location.search.slice(1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    var hash = hashes[i].split("=");
    getValue.push(hash[0]);
    getValue[hash[0]] = hash[1];
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","/assets/js/quotes.json",true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      quotes = JSON.parse(xmlhttp.responseText);
      quote_array = window.location.pathname == "/" || window.location.pathname == "/index.html" ? quotes["fruchtsaft"] : quotes["anni"];
      for (var i = 0; i < quote_array.length; i++) {
        codes.push(quote_array[i]["c"]);
        codes[quote_array[i]["c"]] = i;
      }
      function get_q(max,not,new_quote) {
        if (getValue["q"] && getValue["q"] >= 0 && getValue["q"] <= max && new_quote != 1) {
          var q = getValue["q"];
        } else if (getValue["c"] && codes[getValue["c"]] >= 0 && codes[getValue["c"]] <= max && new_quote != 1) {
          var q = codes[getValue["c"]];
        } else {
          var q = Math.round(Math.random() * max);
          if (not) {
            while (q == not) {
              q = Math.round(Math.random() * max);
            }
          }
        }
        document.getElementById("link__new_quote").setAttribute("this_quote",q);
        return q;
      }
      quote_no = get_q(quote_array.length - 1,document.getElementById("link__new_quote").getAttribute("this_quote"));
      document.getElementById("link__new_quote").addEventListener("click",function(){
        quote_no = get_q(quote_array.length - 1,this.getAttribute("this_quote"),1);
        document.getElementById("quote").innerHTML = quote_array[quote_no]["q"];
        document.getElementById("cite").innerHTML = "– " + quotes["by"][0][quote_array[quote_no]["by"]] + ", " + quote_array[quote_no]["y"];
      });
      document.getElementById("link__tweet").href = "https://twitter.com/intent/tweet?text=" + encodeURI(quote_array[quote_no]["q"].replace(/<br>/g,"\n").replace(/<strong>/g,"").replace(/<\/strong>/g,"")) + "&hashtags=fruchtsaft,quote&url=" + encodeURI("https://fruchtsaft.veyxos.de/?q=" + quote_no) + "&via=TheEmerl&related=TheEmerl%3ADer%20Typ%20um%20den%27s%20hier%20geht%2CVeyxos%3AEr%20hat%20das%20alles%20hier%20verbrochen!";
      document.getElementById("link__copy").setAttribute("data-clipboard-text","http://fruchtsaft.veyxos.de/?q=" + quote_no);

      document.getElementById("quote").innerHTML = quote_array[quote_no]["q"];
      document.getElementById("cite").innerHTML = "– " + quotes["by"][0][quote_array[quote_no]["by"]] + ", " + quote_array[quote_no]["y"];

    }
  };
  xmlhttp.send(null);
  new Clipboard("#link__copy");
  document.getElementById("link__tweet").addEventListener("click",function(event){
    event.preventDefault();
    window.open(this.href,"_blank","location=yes,height=570,width=520,scrollbars=yes,status=yes");
  });
  document.body.removeChild(document.getElementById("nojs"));
});
