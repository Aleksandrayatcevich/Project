    function Minutes(){
        var now = new Date(); 
        var c = new Date();
        c.setHours(24, 0, 0, 0);
        var d = ((c-now)/60000);
        document.write('До конца дня осталось '+ d.toFixed(0)+' минут');
    }
    Minutes();