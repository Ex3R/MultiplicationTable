<html>
<head>
<title>Multiplication Table</title>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css">
<link rel="shortcut icon" href="favicon3.jpg" type="image/png">
<script src="scripts/jquery-1.11.3.js"></script>
<script src="scripts/highlight.js"></script>
</head>
<body>
<div id="fon">
<?php
//Вывод заголовка таблицы и первой строки
	$s="<div id='ta'><table  onclick='l(event)'><caption>Multiplication Table</caption><tr><td></td>"; echo $s;
		for($i=1;$i<=12;$i++)
			echo "<td>".$i."</td>";
	$s="</tr>";
//вывод основной таблицы, переменная col-номер столбца(для дублирования)
	for($i=1;$i<=10;$i++)
	{
		echo "<tr><td>".$i."</td>";
		for($j=1;$j<=12;$j++)
			echo "<td>".$i*$j."</td>";
		echo "</tr>";
	}
    $s="</table></div>";echo $s;
	?>

	<footer>
	 <div class="me">©2015-2016 <a class="highlighted" target="_blank" href="http://vk.com/id80661110">Терехов Роман</a> 143 группа.</div>
   </footer>
</div>


</body>
</html>
