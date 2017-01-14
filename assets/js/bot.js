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

});
