<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300italic,600' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="http://static-cdn.jtvnw.net/jtv_user_pictures/nocraptv-profile_image-676baad70c882607-300x300.png" type="image/png">
    <meta name="viewport" content="initial-scale=1,width=device-width,height=device-height">
    <meta name="theme-color" content="#96d36a">
    <title>Fruchtsaft!</title>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        font-family: "Raleway", sans-serif;
        font-size: 18pt;
        color: #352d3d;
      }
      main {
        padding: 2vw 5vw;
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      main blockquote {
        margin: 0 0 1rem 0;
        font-size: 1.8rem;
      }
      main cite {
        margin: 0;
        font-weight: 300;
        font-style: italic;
        font-size: .85rem;
      }
      main footer {
        position: absolute;
        bottom: .3rem;
        left: 50%;
        display: inline-block;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
      }
      main #gh {
        position: absolute;
        top: .3rem;
        right: .2rem;
        font-size: .7rem;
      }
      main a {
        text-decoration: none;
        color: #96d36a;
      }
      main a:hover {
        text-decoration: underline;
      }
      main strong {
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <main>
      <?php
        $quote = array(
          0 => "Die Tür geht auf. Licht flutet den Raum. Meine Augen sind so stark geblendet, dass ich für mindestens 30 Sekunden nichts sehen kann.<br>Da steht sie. Eine Siluette. Mit einem Glas Fruchtsaft in der Hand.",
          1 => "Man weiß nie, was in ihren Säften drin ist.",
          2 => "Meine Fresse bin ich scheiße.",
          3 => "Mama,<br>haben wir noch Curry King!?",
          4 => "Aber, haben Sie auch <strong>Senf</strong>?",
          5 => "Maximilian du Schwüppe.",
          6 => "Kollegah der Boss<br>EYYYYYY<br>EYYYYYYYYY<br>EYYYYYYYYYY",
          7 => "Der Moment, wenn man bei McDonald's in einen Chickenburger beißt, und man hat das Gefühl, man beißt auf einen Schnabel.",
          8 => "Auf einer Skala von eins bis Schande…<br>…bist du ein Hurensohn!",
          9 => "Ärmel wir lieben dich,<br>wegen dir lernen wir Leute kennen, die wir mehr mögen als dich!",
          10 => "Ich bin schon groß und vier,<br>komm doch und spiel mit mir,<br>ich lad dich ein,<br>ich bin Saitama.",
          11 => "Saitama ist das schlauste Brot im ganzen Commonwealth",
          12 => "Tischventilatoren sind toll,<br>die drehen sich!",
          13 => "Wie kriegen wir dieses Gesicht jetzt so hässlich wie möglich?",
          14 => "Die Hilde wird mich nicht aufhalten!",
          15 => "Kauf dir Battleborn, [Insert Name here]!",
          16 => "Ich kenne Ibach. Und naja … Ibach.",
          17 => "Wie viele Ibachs passen in ein Glas Milch?",
          18 => "Ibach 69, Ibach 69 🎶…",
          19 => "Ich bade in Weed."
        );
        $cite = array(
          0 => "emerl",
          1 => "emerl",
          2 => "emerl",
          3 => "emerl",
          4 => "emerl",
          5 => "emerl",
          6 => "emerl",
          7 => "emerl",
          8 => "emerl",
          9 => "darky",
          10 => "emerl",
          11 => "emerl",
          12 => "emerl",
          13 => "emerl",
          14 => "emerl",
          15 => "emerl",
          16 => "emerl",
          17 => "emerl",
          18 => "emerl",
          19 => "emerl"
        );
        $year = array(
          0 => "2015",
          1 => "2015",
          2 => "2015",
          3 => "2015",
          4 => "2015",
          5 => "2015",
          6 => "2014",
          7 => "2014",
          8 => "2015",
          9 => "2015",
          10 => "2015",
          11 => "2015",
          12 => "2015",
          13 => "2016",
          14 => "2016",
          15 => "2016",
          16 => "2016",
          17 => "2016",
          18 => "2016",
          19 => "2016"
        );
        $citeLink = array(
          "emerl" => '<a href="https://twitter.com/TheEmerl">TheEmerl</a>',
          "darky" => '<a href="https://twitter.com/Darkyyx">Darky</a>'
        );

        $maxQuote = 19;

        if($_GET["q"] && $_GET["q"] <= $maxQuote && $_GET["q"] >= 0) {
          $int = $_GET["q"];
        } else {
          $int = rand(0,$maxQuote);
          if($_GET["not"]) {
            for( ;$int == $_GET["not"]; ) {
               $int = rand(0,$maxQuote);
            }
          }
        }

        $thisLink = "http://veyxos.de/fruchtsaft?q=$int";
        $thisLinkEncoded = urlencode($thisLink);
        $quoteEncoded = urlencode(str_replace("<br>","\n",$quote[$int]));

        print "<blockquote>{$quote[$int]}</blockquote>
        <cite>{$citeLink[$cite[$int]]}, {$year[$int]}</cite>
        <footer><a href=\"http://veyxos.de/fruchtsaft?not=$int\">Ein neues Zitat raussuchen.</a> | <a id=\"twttr\" href=\"https://twitter.com/intent/tweet?text=$quoteEncoded&hashtags=fruchtsaft&url=$thisLinkEncoded&hashtag=quote&via=TheEmerl&related=TheEmerl%3ADer%20Typ%20um%20den%27s%20hier%20geht%2CVeyxos%3AEr%20hat%20das%20alles%20hier%20verbrochen!\">Twittern</a></footer>";
      ?>
      <a id="gh" href="https://github.com/veyxos/fruchtsaft">GitHub</a>
    </main>
    <script>
      function ready(fn) {
        if(document.readyState != 'loading') {
          fn();
        } else {
          document.addEventListener('DOMContentLoaded',fn);
        }
      }
      function w() {
        alert('THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.');
      }
      function c() {
        window.open('https://www.gnu.org/licenses/gpl-3.0','_blank')
      }
      ready(function(){
        console.log('Fruchtsaft v1.2.2#3\nZitat Nr. ' + Math.floor(<?php print $int; ?> + 1));
        console.log('\nFruchtsaft Copyright (C) 2016 Mike Kühnapfel\nThis program comes with ABSOLUTELY NO WARRANTY; for details type `w()\'.\nThis is free software, and you are welcome to redistribute it\nunder certain conditions; type `c()\' for details.');
        document.getElementById('twttr').addEventListener('click',function(evt){
          evt.preventDefault();
          window.open(this.href, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        });
      });
    </script>
  </body>
</html>
