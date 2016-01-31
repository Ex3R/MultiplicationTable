//Удаление классов всех элементов
            function l(event) {
            	$(document).ready(function() {
      			$('td').removeClass('on');
      			$('td').removeClass('chosen');
       										});
            //Отслеживание области клика
                var el = event.target || event.srcElement;
            //столбец таблицы
                m=el.parentNode.rowIndex;
            //ячейка таблицы
                cel=el.cellIndex;
                if (((m!=0 ) && (cel)) || ((cel!=0 ) && (m))){
                	el.offsetParent.rows[m].cells[el.cellIndex].className = "chosen";
                											 }
                //console.log(m);
                //console.log(cel);
            //Проверка на невыделение подобных <th>
            	if (((m!=0 ) && (cel)) || ((cel!=0 ) && (m))){
                for(var i = el.parentNode.rowIndex-1; i >= 0; i--) {
                    el.offsetParent.rows[i].cells[el.cellIndex].className = "on";
                                                                   }
                
                for(var i = el.cellIndex-1; i >= 0; i--) {
                    el.offsetParent.rows[el.parentNode.rowIndex].cells[i].className = "on";
                                                         }
                                         }
                             }

            


            //просто не потерять
            function sleep(milliseconds) {

  			   var start = new Date().getTime();
 			   for (var i = 0; i < 1e7; i++) {
    		    if ((new Date().getTime() - start) > milliseconds){
     		    break;
    				}
  											  }
			}
			