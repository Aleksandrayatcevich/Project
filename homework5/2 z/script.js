/*Определить сколько времени осталось до конца дня*/
var tomorrow = new Date().setHours(24, 0, 0);

(function foo() {
  var now = new Date();
  var seconds = parseInt(tomorrow - now) / 1000;
  var hh = parseInt( seconds / 3600 );
  	if(hh<10)
  	hh="0"+hh;
  var mm = parseInt( (seconds % 3600) / 60 );
 	if (mm<10)
  	mm="0"+mm;
  var ss = parseInt( (seconds % 3600) % 60 ); 
  	if (ss<10)
	  ss="0"+ss;
	  
		clock.innerHTML = hh + ":" + mm + ":" + ss ;
  		setTimeout(foo, 1000);
})();
