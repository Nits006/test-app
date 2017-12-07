<?php
echo get_include_path() . PATH_SEPARATOR . "src/";
die;
set_include_path(get_include_path() . PATH_SEPARATOR . "src/");

require_once "autoload.inc.php";

$dompdf = new DOMPDF();

$html = <<<'ENDHTML'
<html>
 <body>
  <h1>Hello Dompdf</h1>
 </body>
</html>
ENDHTML;

$dompdf->load_html($html);
$dompdf->render();

$dompdf->stream("pdf-files/hello.pdf");

?>