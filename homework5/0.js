var tag =0;
var comment=0;
var text = 0;

var summ = function(sost){
	switch(sost.nodeType){
		case 1: tag++; 
			break;
		case 3: text++; 
			break;
		case 8: comment++; 
			break;
	
	}
	if(sost.hasChildNodes()){
		for (var i = 0; i < sost.childNodes.length; i++) {
			summ(sost.childNodes[i]);
		}
	}
}
summ(document);
alert("Тэги: " + tag);
alert("Комментарии: " + comment);
alert("Текст: " + text);