var indeficator=1;
function tovar(indeficator, name, tip, cena, data){
	this.indeficator=1+indeficator;
	this.name=name;
	this.tip=tip;
	this.cena=cena;
	this.data=new Date(data);

}
function prod_tovar(indeficator, name, tip, cena, data, goden,srok)
{
	tovar.apply(this,arguments);
	this.goden=new Date(goden);
	Object.defineProperties(this, "shelflife", {
		get function(){
			return(this.goden-this.data);
		},
		writable:fasle
	})
	this.srok=srok;
}
function shop(nazv, adres, tovars, nacenka, doxod){
	this.nazv=nazv;
	this.adres=adres;
	this.tovars=tovars;
	this.nacenka=nacenka;
	this.doxod=doxod;
	Object.defineProperties(this,"sum",{
		get: function(){
			var summ=0;
			for(var i=0;i<tovars.length;i++){
				summ+=this.tovars.cena;
			}
			return summ;
		}
	})
}
