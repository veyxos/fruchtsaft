var getData = {};
for (var i = 0; i < window.location.search.substring(1).split("&").length; i++) {
  getData[window.location.search.substring(1).split("&")[i].split("=")[0]] = window.location.search.substring(1).split("&")[i].split("=")[1];
}

String.prototype.replaceAll = function(search,replace) {
  return this.replace(new RegExp(search, "g"), replace);
};

$(document).ready(function(){

  $(".tooltipped").tooltip({html:true});
  $(".button-collapse").sideNav();

  var clipboard = new Clipboard(".clipboard");

  clipboard.on("success",function(e) {
    Materialize.toast("In Zwischenablage kopiert",4000);
    e.clearSelection();
  });
  clipboard.on("error",function(e) {
    Materialize.toast("Konnte nicht kopiert werden",4000);
  });

});
