/*
* @Author: Administrator
* @Date:   2017-04-27 22:35:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-09 22:40:30
*/

'use strict';

// alert('1')


function $(cen,qwert=document){
  	let typf=typeof cen;
    if(typf=='string'){
    	let cens=cen.trim();
    	let first=cens.charAt(0);
    	if(first=='.'){
    		return qwert.getElementsByClassName(cens.substr(1));
    	}else if(first=='#'){
    		return qwert.getElementsById(cens.substr(1));
    	}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(cens)){
    		return qwert.getElementsByTagName(cens);
    	}
    }else if(typf=='function'){
    	window.onload=function(){
    		cen();
    	}
    }
}

function getStyle(obj,attr){
	if (window.getComputedStyle) {
		return getComputedStyle(obj,null)[attr]
	}else{
		return obj.currentStyle[attr]
	}
}
function html(obj,content){
	if(content){
		obj.innerHTML=content
	}else{
		return obj.innerHTML
	}
}


/*function $(selector){
		let type=typeof selector;
		if(type=="string"){
			let select=selector.trim();
			let first=select.charAt(0);
			 if(first=='.'){
				return document.getElementsByClassName(select.substr(1))
			}
			 if(first=='#'){
				return document.getElementById(select.substr(1))
			}
			 if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
				return document.getElementsByTagName(select)				
			}
		}
		else if(type=="function"){
			window.onload=function(){
				selector();
			}
		}
	}*/
 function mouseWheel(obj,upFn,downFn){
	obj.addEventListener('mousewheel',fn,false);
	function fn(e){
		e.preventDefault();
		let dir=e.wheelDelta;
		if(dir==120||dir==150||dir==180){
			upFn.call(obj);
		}else if(dir==-120||dir==-150||dir==-180){
			downFn.apply(obj);
		}
	}
}