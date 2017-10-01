var a, b, c;

a=prompt("vvedite a");
b=prompt("vvedite b");
c=prompt("vvedite 1-slo, 2-vich, 3-umn, 4- del");

switch (c)
{
case '1':
{
c=a+b;
confirm(c);
break;
}
case '2':
{
    c=a-b;
    confirm(c);
    break;
}
case '3':
{
    c=a*b;
    confirm(c);
    break;
}
case '4':
{
    c=a/b;
    confirm(c);
    break;
}
default:

confirm ("nepravilno");
}

