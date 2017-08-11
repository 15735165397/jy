/*
* @Author: Administrator
* @Date:   2017-05-16 17:57:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-01 00:57:40
*/

'use strict';

let audio=document.querySelector('audio')
let geming=document.querySelector('.geming');
let geshou=document.querySelector('.geshou');
console.log(geming);
let geci=document.querySelector('.geci ul');
console.log(geci)
let shge=document.querySelectorAll('.left i')[0];
let bfzt=document.querySelectorAll('.left i')[1];
let xiage=document.querySelectorAll('.left i')[2];
let geming2=document.querySelectorAll('span')[0];
let geshou2=document.querySelectorAll('span')[1];
let xianshi=document.querySelectorAll('span')[2];
let zongshi=document.querySelectorAll('span')[3];
let jindu=document.querySelector('.jindu')
let jd=document.querySelector('.jd')
let chdu=jindu.offsetWidth;
let img=document.querySelector('img');
let index=0;
console.log(zongshi)


chushi(database[index]);

function chushi(obj){
    audio.src=obj.src;
    geming.innerText=obj.songs;
    geshou.innerText=obj.name;
    geming2.innerText=obj.songs;
    geshou2.innerText=obj.name;
    img.src=obj.photo;
    xianshi.innerText='00:00';
    zongshi.innerText='00:00';
    jd.style.width=0
    let string=''
    obj.lyrics.forEach(function(value){
        string+=`<li>${value.lyric}</li>` 
    })
    geci.innerHTML='';
    geci.innerHTML=string
   
}

bfzt.onclick=function(){
	
	if(audio.paused){
        // alert(1)
        audio.play();
        bfzt.classList.toggle('icon-zanting3');
    }else{
        audio.pause();
        bfzt.classList.toggle('icon-zanting3');
    }
}
shge.onclick=function(){
    index--;
    if(index<0){
        index=5
    }
    audio.pause();
    chushi(database[index]);
    bfzt.className='iconfont icon-zhibo zhibo';
    chushi(database[index]);
}

xiage.onclick=function(){
    index++;
    if(index>5){
        index=0
    }
    audio.pause();
    chushi(database[index]);
    bfzt.className='iconfont icon-zhibo zhibo';
    chushi(database[index]);
}

function shijian(time){
    let m=Math.floor(time/60)>=10?Math.floor(time/60):'0'+Math.floor(time/60);
    let s=Math.floor(time%60)>=10?Math.floor(time%60):'0'+Math.floor(time%60);
    return `${m}:${s}`;
}

let i=0,x=0;
audio.ontimeupdate=function(){
    let xianshij=shijian(audio.currentTime); 
    let zongshij=shijian(audio.duration);
    let w=audio.currentTime/audio.duration
    let string='';
    jd.style.width=w*chdu+'px'
    xianshi.innerText=xianshij;
    zongshi.innerText=zongshij;
    geci.innerHTML='';
    database[index]['lyrics'].forEach(function(value,index){
        if(value.time==xianshij){
            x=i=index;
        }
    })
    if(x<2){
        i=0
    }else{
        i=x-2;
    }
    for(let j=i;j<database[index]['lyrics'].length;j++){
        console.log(j,x)
        if(j==x){
            string+=`
                <li class="hot">
                    ${database[index]['lyrics'][j]['lyric']}
                </li>`;
        }else{
            string+=`
                <li >
                    ${database[index]['lyrics'][j]['lyric']}
                </li>`;
        }
    }
    geci.innerHTML=string;
}


