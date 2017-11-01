var fraim = {
	append: function(e1, e2){
		return el1.appendChild(e2);
	},
	
	prepend: function(e1, e2){
			return e2.insertBefore(e1, e2.firstChild);
	},
	remove: function(el){
		return e.remove();
	},
	create: function(e){
		return document.createElement(e);
	},
	
	Get: {
		byId: function(i){
			return document.getElementById(i);
		},
		byTag: function(t){
			return document.getElementsByTagName(t);
		},
		byClass: function(cl){
			return document.getElementsByClassName(cl);
		},
		bySelector: function(se){
			return document.querySelector(se);
		},
		bySelectorAll: function(sal){
			return document.querySelectorAll(sal);
		}
	},
	
	Event: {
		add: function(type, el, fun){
			if(typeof(el.addEventListener)=="function"){
               el.addEventListener(type, fun);
            }
				
			else{
                el.attachEvent("on"+type, fun);
            }	
		},
		remove: function(type, el, fun){
			if(typeof(el.removeEventListener)=="function"){
                el.detachEvent("on"+type, fun);
            }
            else
            {
                el.removeEventListener(type, fun);
            }
		},
		dispatch: function(type,el){
            var ev=document.createEvent("event");
            ev.initEvent(type);
            el.dispatchEvent(event);
		}
	}
}