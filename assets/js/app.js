var getData = {};
for (var i = 0; i < window.location.search.substring(1).split("&").length; i++) {
  getData[window.location.search.substring(1).split("&")[i].split("=")[0]] = window.location.search.substring(1).split("&")[i].split("=")[1];
}

String.prototype.replaceAll = function(search,replace) {
  return this.replace(new RegExp(search, "g"), replace);
};

var quotes, codenames = {"fruchtsaft":{},"anni":{}};

$(document).ready(function(){

  $(".tooltipped").tooltip({html:true});
  $(".button-collapse").sideNav();
  $(".modal").modal();

  $.getJSON("https://fruchtsaft-data.veyxos.de",function(data){
    quotes = data;

    for (var i = 0; i < quotes.fruchtsaft.length; i++) {
      codenames["fruchtsaft"][quotes["fruchtsaft"][i]["codename"]] = i;
    }
    for (var i = 0; i < quotes.anni.length; i++) {
      codenames["anni"][quotes["anni"][i]["codename"]] = i;
    }
  });

  var clipboard = new Clipboard(".clipboard");

  clipboard.on("success",function(e) {
    Materialize.toast("In Zwischenablage kopiert",4000);
    e.clearSelection();
  });
  clipboard.on("error",function(e) {
    Materialize.toast("Konnte nicht kopiert werden",4000);
  });

});
