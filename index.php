<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width, height=device-height">
    <link rel="shortcut icon" href="img/fruchtsaft-256.png" type="image/png">
    <link rel="stylesheet" href="app.css">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#ff5f2e">
    <title>Fruchtsaft!</title>
  </head>
  <body>
    <?php
      $quotes = json_decode(file_get_contents("quotes.json"),true);
      $codes = array();
      $count = count($quotes["quote"]) - 1;
      for ($i = 0; $i <= $count; $i++) {
        array_push($codes, $quotes["quote"][$i]["c"]);
      }
      $random = rand(0, $count);
      if ($_GET["not"] && $_GET["not"] <= $count + 1 && $_GET["not"] >= 1) {
        while ($random + 1 == $_GET["not"]) {
          $random = rand(0, $count);
        }
      }
      if ($_GET["q"] && $_GET["q"] >= 1 && $_GET["q"] <= $count + 1) {
        $q = $_GET["q"] - 1;
      } elseif ($_GET["c"]) {
        for ($i = 0; $i <= $count; $i++) {
          if ($_GET["c"] == $codes[$i]) {
            $q = $i;
            break;
          } else {
            $q = $random;
          }
        }
      } else {
        $q = $random;
      }
    ?>
    <main>
      <div id="quoteWrapper">
        <?php print "<blockquote>" . $quotes["quote"][$q]["q"] . "</blockquote><cite>– " . $quotes["by"][0][$quotes["quote"][$q]["by"]] . ", " . $quotes["quote"][$q]["y"] . "</cite>"; ?>
      </div>
    </main>
    <footer>
      <div id="copyright">
        &copy; 2016 Mike Kühnapfel
      </div>
      <ul>
        <?php
          $linkNo = $q + 1;
          print "<li><a href=\"http://veyxos.de/fruchtsaft?not=" . $linkNo . "\">Neues Zitat</a></li>";
          print "<li><a id=\"twttr\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=" . urlencode(str_replace("<br>","\n",$quotes["quote"][$q]["q"])) . "&hashtags=fruchtsaft,quote&url=" . urlencode("http://veyxos.de/fruchtsaft?q=$linkNo") . "&via=TheEmerl&related=TheEmerl%3ADer%20Typ%20um%20den%27s%20hier%20geht%2CVeyxos%3AEr%20hat%20das%20alles%20hier%20verbrochen!\">Twittern</a>";
          print "<li><a id=\"copyLink\">Link kopieren</a></li>";
        ?>
      </ul>
      <a href="https://github.com/veyxos/fruchtsaft">GitHub</a>
    </footer>
  </body>
  <script>
    function ready(fn){
      if (document.readyState != 'loading') {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded',fn);
      }
    }
    ready(function(){
      document.getElementById('copyLink').addEventListener('click',function(){
        window.prompt("Zum Kopieren Strg + C drücken", "<?php echo "http://veyxos.de/fruchtsaft?q=$linkNo"; ?>");
      });
      document.getElementById('twttr').addEventListener('click',function(evt){
        evt.preventDefault();
        window.open(this.href, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
      });
    });
  </script>
</html>
