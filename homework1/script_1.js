var  a, i;
var b=0;
a=prompt("vvedite strok");

for ( i = 0; i < a.length; i++) {

   if ( a[i]== '(' )
   {
       b=b+1;
       
   }
     else 
        if (a[i]== ')' )
     {
         b=b-1;
         
     }
     
 
       if (b<0)  {
           break 
       }
     }
        
  
    if (b==0) {
        confirm('scobki prav')}
        else  
        confirm ('ne prav');
    