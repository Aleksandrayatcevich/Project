/*2 задание*/ 
var Bugalt ={

};
var rab =[

{name:"Kseniya",age:23,otdel:"prog",stah:10,zarplata:300
},

{name:"Misha",age:29,otdel:"prog1",stah:35,zarplata:500
},

{name:"Alex",age:24,otdel:"prog1",stah:29,zarplata:1000
},

{name:"Badya",age:28,otdel:"prog",stah:3,zarplata:1200
}
]
	
/* Сортировка по возрастанию зарплаты работников */ 
    function CompareZarplata(p1,p2){
        return p1.zarplata-p2.zarplata;
    }
    var people=rab;
    people.sort(CompareZarplata);

    for(var i=0; i<people.length;i++){
        document.writeln(people[i].name);
    };
 /* Вычисление всей суммы */            
    var SumZ = rab.reduce(function(sum,arr){
        return sum + arr.zarplata;
    },0);
    document.write("Summa ="+SumZ);
/* Вычисление средней зарплаты */ 
    document.write("  Srednee ="+SumZ/i);
