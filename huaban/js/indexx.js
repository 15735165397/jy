/*
* @Author: Administrator
* @Date:   2017-05-21 21:55:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-01 18:32:50
*/

'use strict';



let canvas=document.querySelector('canvas');
let ctx=canvas.getContext("2d");
let mask=document.querySelector('.mask');
let line=document.querySelector('.icon-line');
let qianbi=document.querySelector('.icon-qianbi');
let juxing=document.querySelector('.icon-changfangxing');
let yuan=document.querySelector('.icon-circle');
let duobianxing=document.querySelector('.icon-iconfontwubianxing');
let duojiaoxing=document.querySelector('.icon-kongwujiaoxing');
let yuanjiaojuxing=document.querySelector('.icon-yuanjiaojuxing');
let wenzi=document.querySelector('.icon-wenzi');
let xiangpi=document.querySelector('.icon-xiangpica');
let eraserBtn=document.querySelector('.eraser');
let button=document.querySelector('.icon-baocun');
let chexiao=document.querySelector('.icon-chexiao');
let caijian=document.querySelector('.icon-caijian');
let clip=document.querySelector('.clip');
let palette=new Palette(canvas,ctx,mask);
let youqi=document.querySelector('.youqi')
let youqibtn=document.querySelector('.icon-youqi');
let miaobian=document.querySelector('.miaobian')
let miaobianbtn=document.querySelector('.icon-miaobian')
let img=document.querySelector('img');
console.log(youqi)

line.onclick=function(){
    palette.line()
};
qianbi.onclick=function(){
    palette.qianbi()
};
juxing.onclick=function(){
    palette.juxing()
};
yuan.onclick=function(){
    palette.yuan()
};
duobianxing.onclick=function(){
	// palette.duobianxing(prompt('边数','5'));
	palette.bian = prompt('请输入边数','5');
    palette.duobianxing()
};
duojiaoxing.onclick=function(){
	palette.jiao = prompt('请输入角数','5');
    palette.duojiaoxing()
};
xiangpi.onclick=function(){
	palette.size = prompt('请输入大小','5');
    palette.xiangpi()
};
yuanjiaojuxing.onclick=function(){
    palette.rrr= prompt('请输入半径','10');
    palette.yuanjiaojuxing()
};
caijian.onclick=function(){
    palette.clip(clip);
}
wenzi.onclick=function(){
    palette.wenzi();
}
 

 //描边、填充
youqibtn.onclick=function(){
    palette.type = 'fill';
    console.log(palette.type)
}
miaobianbtn.onclick=function(){
        palette.type = "stroke";
}
//描边、填充的样式
youqi.onchange = function () {
    palette.fillStyle = youqi.value;
    console.log(youqi.value)
}
miaobian.onchange = function () {
    palette.strokeStyle = miaobian.value;
}
button.onclick=function(){
    let data=canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');
    img.src=data;
    location.href=data;
}
chexiao.onclick=function(){
    palette.chexiao();
}