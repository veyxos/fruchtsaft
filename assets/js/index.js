$(document).ready(function(){

  var quotes, codenames = {"fruchtsaft":{},"anni":{}};
  $.getJSON("https://fruchtsaft-data.veyxos.de",function(data){
    quotes = data;

    for (var i = 0; i < quotes.fruchtsaft.length; i++) {
      codenames["fruchtsaft"][quotes["fruchtsaft"][i]["codename"]] = i;
    }
    for (var i = 0; i < quotes.anni.length; i++) {
      codenames["anni"][quotes["anni"][i]["codename"]] = i;
    }
  });

  var emerl__last_quote, anni__last_quote;

  setTimeout(function(){
    $(".progress").remove();

    if (getData.e in codenames.fruchtsaft) {
      var e = codenames["fruchtsaft"][getData.e];
    } else {
      var e = Math.round(Math.random() * (quotes.fruchtsaft.length - 1));
    }
    var emerl__url = "http://fruchtsaft.veyxos.de/?e=" + quotes["fruchtsaft"][e]["codename"];
    $("#emerl_quote").html(quotes["fruchtsaft"][e]["quote"]);
    $("#emerl_author").html(quotes["authors"][quotes["fruchtsaft"][e]["author"]]);
    $("#emerl_date").html(quotes["fruchtsaft"][e]["date"]);
    var emerl__share_twitter = document.createElement("A");
    emerl__share_twitter.innerHTML = "Twittern";
    emerl__share_twitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI("\"" + quotes["fruchtsaft"][e]["quote"].replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\"") + "&via=veyxos&hashtags=fruchtsaft&url=" + encodeURI(emerl__url) + "&related=" + encodeURI("veyxos:Der Typ der das alles hier verbrochen hat");
    emerl__share_twitter.id = "emerl__share_twitter";
    var emerl__share_link = document.createElement("A");
    emerl__share_link.innerHTML = "Link&nbsp;kopieren";
    emerl__share_link.classList = "clipboard";
    emerl__share_link.setAttribute("data-clipboard-text",emerl__url);
    emerl__share_link.id = "emerl__share_link";
    var emerl__share_mail = document.createElement("A");
    emerl__share_mail.href = "mailto:user@example.com?subject=Fruchtsaft&body=" + encodeURI("\"" + quotes.fruchtsaft[e].quote.replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\" – " + (quotes.authors[quotes.fruchtsaft[e].author].indexOf(">") > -1 ? quotes.authors[quotes.fruchtsaft[e].author].split(">")[1].split("<")[0] : quotes.authors[quotes.fruchtsaft[e].author]) + ", " + quotes.fruchtsaft[e].date) + "%0D%0A" + encodeURI(emerl__url);
    emerl__share_mail.innerHTML = "Per&nbsp;Mail&nbsp;teilen";
    emerl__share_mail.id = "emerl__share_mail";
    document.getElementById("emerl_actions").appendChild(emerl__share_twitter);
    document.getElementById("emerl_actions").appendChild(emerl__share_link);
    document.getElementById("emerl_actions").appendChild(emerl__share_mail);
    emerl__share_twitter.addEventListener("click",function(event){
      event.preventDefault();
      window.open(this.href,"_blank","height=400,width=600,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no");
    });

    emerl__last_quote = e;

    if (getData.a in codenames.anni) {
      var a = codenames["anni"][getData.a];
    } else {
      var a = Math.round(Math.random() * (quotes.anni.length - 1));
    }
    var anni__url = "http://fruchtsaft.veyxos.de/?a=" + quotes["anni"][a]["codename"];
    $("#anni_quote").html(quotes["anni"][a]["quote"]);
    $("#anni_author").html(quotes["authors"][quotes["anni"][a]["author"]]);
    $("#anni_date").html(quotes["anni"][a]["date"]);
    var anni__share_twitter = document.createElement("A");
    anni__share_twitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI("\"" + quotes["anni"][a]["quote"].replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\"") + "&via=veyxos&hashtags=fruchtsaft&url=" + encodeURI(anni__url) + "&related=" + encodeURI("veyxos:Der Typ der das alles hier verbrochen hat");
    anni__share_twitter.innerHTML = "Twittern";
    anni__share_twitter.id = "anni__share_twitter";
    var anni__share_link = document.createElement("A");
    anni__share_link.innerHTML = "Link&nbsp;kopieren";
    anni__share_link.classList = "clipboard";
    anni__share_link.setAttribute("data-clipboard-text",anni__url);
    anni__share_link.id = "anni__share_link";
    var anni__share_mail = document.createElement("A");
    anni__share_mail.href = "mailto:user@example.com?subject=Fruchtsaft&body=" + encodeURI("\"" + quotes.anni[a].quote.replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\" – " + (quotes.authors[quotes.anni[a].author].indexOf(">") > -1 ? quotes.authors[quotes.anni[a].author].split(">")[1].split("<")[0] : quotes.authors[quotes.anni[a].author]) + ", " + quotes.anni[a].date) + "%0D%0A" + encodeURI(anni__url);
    anni__share_mail.innerHTML = "Per&nbsp;Mail&nbsp;teilen";
    anni__share_mail.id = "anni__share_mail";
    document.getElementById("anni_actions").appendChild(anni__share_twitter);
    document.getElementById("anni_actions").appendChild(anni__share_link);
    document.getElementById("anni_actions").appendChild(anni__share_mail);
    anni__share_twitter.addEventListener("click",function(event){
      event.preventDefault();
      window.open(this.href,"_blank","height=400,width=600,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no");
    });

    anni__last_quote = a;

  },1500);

  function newQuote(type){
    if (type === "emerl") {
      do {
        var e = Math.round(Math.random() * (quotes.fruchtsaft.length - 1));
      } while (e === emerl__last_quote);
      var emerl__url = "http://fruchtsaft.veyxos.de/?e=" + quotes["fruchtsaft"][e]["codename"];
      $("#emerl_quote").html(quotes["fruchtsaft"][e]["quote"]);
      $("#emerl_author").html(quotes["authors"][quotes["fruchtsaft"][e]["author"]]);
      $("#emerl_date").html(quotes["fruchtsaft"][e]["date"]);
      emerl__last_quote = e;
      $("#emerl__share_twitter").attr("href","https://twitter.com/intent/tweet?text=" + encodeURI("\"" + quotes["fruchtsaft"][e]["quote"].replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\"") + "&via=veyxos&hashtags=fruchtsaft&url=" + encodeURI(emerl__url) + "&related=" + encodeURI("veyxos:Der Typ der das alles hier verbrochen hat"));
      $("#emerl__share_link").attr("data-clipboard-text","http://fruchtsaft.veyxos.de?e=" + quotes["fruchtsaft"][e]["codename"]);
      $("#emerl__share_mail").attr("href","mailto:user@example.com?subject=Fruchtsaft&body=" + encodeURI("\"" + quotes.fruchtsaft[e].quote.replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\" – " + (quotes.authors[quotes.fruchtsaft[e].author].indexOf(">") > -1 ? quotes.authors[quotes.fruchtsaft[e].author].split(">")[1].split("<")[0] : quotes.authors[quotes.fruchtsaft[e].author]) + ", " + quotes.fruchtsaft[e].date) + "%0D%0A" + encodeURI(emerl__url));
    } else if (type === "anni") {
      do {
        var a = Math.round(Math.random() * (quotes.anni.length - 1));
      } while (a === anni__last_quote);
      $("#anni_quote").html(quotes["anni"][a]["quote"]);
      $("#anni_author").html(quotes["authors"][quotes["anni"][a]["author"]]);
      $("#anni_date").html(quotes["anni"][a]["date"]);
      anni__last_quote = a;
      var anni__url = "http://fruchtsaft.veyxos.de/?a=" + quotes["anni"][a]["codename"];
      $("#anni__share_twitter").attr("href","https://twitter.com/intent/tweet?text=" + encodeURI("\"" + quotes["anni"][a]["quote"].replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\"") + "&via=veyxos&hashtags=fruchtsaft&url=" + encodeURI(anni__url) + "&related=" + encodeURI("veyxos:Der Typ der das alles hier verbrochen hat"));
      $("#anni__share_link").attr("data-clipboard-text","http://fruchtsaft.veyxos.de?a=" + quotes["anni"][a]["codename"]);
      $("#anni__share_mail").attr("href","mailto:user@example.com?subject=Fruchtsaft&body=" + encodeURI("\"" + quotes.anni[a].quote.replaceAll("<br>","\n").replaceAll("<strong>","").replaceAll("</strong>","") + "\" – " + (quotes.authors[quotes.anni[a].author].indexOf(">") > -1 ? quotes.authors[quotes.anni[a].author].split(">")[1].split("<")[0] : quotes.authors[quotes.anni[a].author]) + ", " + quotes.anni[a].date) + "%0D%0A" + encodeURI(anni__url));
    }
  };

  // Neues Zitat Button
  $("#emerl__new_quote").click(function(event){
    event.preventDefault();
    newQuote("emerl");
  });
  $("#anni__new_quote").click(function(event){
    event.preventDefault();
    newQuote("anni");
  });

});
