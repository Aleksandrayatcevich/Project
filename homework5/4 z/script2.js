/*12 городов*/
var Countrey ={};
var arr=[
	{name:"Belarus ", flag:'<img src="belarus.jpg" width="150" height="70">', kod:"+375", people:9.505},
	{name:"Russia", flag:'<img src="russia.jpg" width="150" height="70">', kod:"+7", people:146.804},
	{name:"Bolgaria", flag:'<img src="bolg.jpg" width="150" height="70">', kod:"+359", people:7.101},
	{name:"Ukrain", flag:'<img src="ukr.jpg" width="150" height="70">', kod:"+380", people:42.353},
	{name:"USA", flag:'<img src="usa.jpg" width="150" height="70">', kod:"+1", people:+325.850},
	{name:"UK", flag:'<img src="uk.jpg" width="150" height="70">', kod:"+44", people:63.395},
	{name:"Poland", flag:'<img src="pol.jpg" width="150" height="70">', kod:"+48", people:38.627},
	{name:"Australia", flag:'<img src="aust.jpg" width="150" height="70">', kod:"+61", people:24.067},
	{name:"Moldova", flag:'<img src="mold.jpg" width="150" height="70">', kod:"+373", people:3.550},
	{name:"Litva", flag:'<img src="lit.jpg" width="150" height="70">', kod:"+370", people:2.826},
	{name:"Latvia", flag:'<img src="lat.jpg" width="150" height="70">', kod:"+371", people:1.958},
	{name:"France", flag:'<img src="par.jpg" width="150" height="70">', kod:"+33", people:66.991}
	]

 document.write("<table border=2 width=50%><tr bgcolor=beige><th>Name</th><th>Flag</th><th>Kod</th><th>People(milion)</th></tr>"); 
  for(var i = 0; i<arr.length; i++){ 
 document.write("<tr><th>" + arr[i].name + "</th><th>" + arr[i].flag + "</th><th>" + arr[i].kod + "</th><th>" + arr[i].people + "</th></tr>"); 
 
  }
  document.write("</table>");