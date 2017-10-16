/*таблица умножения*/
var cd  = '<table cellpadding="6" cellspacing="3" border="1">\n';
cd += '<tr>\n';
var a=prompt("vvedite 1 pyfxtybt");
var b=prompt("vvedite 2 pyfxtybt");

for (var i = a; i <= b; i++) 
    cd += '<td align="right"><font color="red">&nbsp;' + ((i == 1) ? '' : i) + '</font></td>\n';
for (i = a; i <= b; i++)
    {
    cd += '<tr>\n';
    for (var j = a; j <= b; j++)
    cd += '<td align="right">' + ((j == 1) ? ('<font color="red">&nbsp;' + i + '</font>') : i * j) + '</td>\n';
    cd += '</tr>\n';
    }
    cd += '</table>';
with (document) open (), write (cd), close ();


