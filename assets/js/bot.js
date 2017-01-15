$(document).ready(function(){

  $(".whitelist.badge").tooltip({
    tooltip: "Nur Nutzer auf der Whitelist können diesen Befehl ausführen",
    position: "left"
  });
  $(".whitelist-g.badge").tooltip({
    tooltip: "Nur Nutzer auf der globalen Whitelist können diesen Befehl ausführen",
    position: "left"
  });
  $(".whitelist-veyxos.badge").tooltip({
    tooltip: "Nur Veyxos kann diesen Befehl ausführen",
    position: "left"
  });
  $(".wip.badge").tooltip({
    tooltip: "Work In Progress<br>Dieser Befehl ist noch in der Entwicklung",
    position: "left",
    html: true
  });

  $("#toComs").click(function(event){
    event.preventDefault();
    $("#tab_commands").click();
  });

  $("#toControls").click(function(event){
    event.preventDefault();
    $("#tab_controls").click();
  });

  setTimeout(function() {
    var fruchtsaft_list = document.getElementById("fruchtsaft_list_list");
    var fruchtsaft_keys = [];
    for (key in codenames.fruchtsaft) {
      fruchtsaft_keys.push(key);
    }
    fruchtsaft_keys.sort();
    for (var i = 0; i < fruchtsaft_keys.length; i++) {
      var item = document.createElement("LI");
      item.classList = "collection-item",
      item.innerHTML = fruchtsaft_keys[i];
      fruchtsaft_list.appendChild(item);
    }
    var anni_list = document.getElementById("anni_list_list");
    var anni_keys = [];
    for (key in codenames.anni) {
      anni_keys.push(key);
    }
    anni_keys.sort();
    for (var i = 0; i < anni_keys.length; i++) {
      var item = document.createElement("LI");
      item.classList = "collection-item";
      item.innerHTML = anni_keys[i];
      anni_list.appendChild(item);
    }
  },1500);

});
