/*
* @Author: Administrator
* @Date:   2017-05-20 21:55:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-01 18:42:51
*/

'use strict';



function Palette(obj,ctx,mask){
	this.obj=obj;
	this.ctx=ctx;
	this.mask=mask;
	this.width=this.obj.width;
	this.height=this.obj.height;
	this.history=[];
	this.lineWidth=2;
	this.fillStyle='#000';
	this.strokeStyle='#000';
	this.lineCap='round';
	this.bian=5;
	this.jiao=5;
	this.size=10;
	this.rrr=5
	this.type='stroke'
	this.text='20px sans-serif';
	this.textAlign='center';
	this.textBaseLine='center';
}
Palette.prototype={
	init:function(){
		//初始化样式
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.lineCap=this.lineCap;
	},
	line:function(){
		// alert(3)
		let self=this;
        self.init();
        mask.onmousedown=function(e){
		let ox=e.offsetX,oy=e.offsetY;
		mask.onmousemove=function(e){
			let mx=e.offsetX,my=e.offsetY;
			ctx.clearRect(0, 0, 1000, 500);
			if(self.history.length>0){
				ctx.putImageData(self.history[self.history.length-1],0,0);
			}
			ctx.beginPath();
			ctx.moveTo(ox, oy);
			ctx.lineTo(mx,my);
			ctx.stroke()
			}
			mask.onmouseup=function(){
				self.history.push(ctx.getImageData(0,0,self.width,self.height))
				mask.onmousemove=null;
				mask.onmouseup=null;
			}
		}
    },
    qianbi:function(){
    	let self=this;
    	mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
				ctx.beginPath();
				ctx.moveTo(ox, oy);
			mask.onmousemove=function(e){
				let mx=e.offsetX,my=e.offsetY;
				ctx.lineTo(mx,my);
				ctx.stroke()
			}
			mask.onmouseup=function(){
				self.history.push(ctx.getImageData(0,0,self.width,self.height))
				mask.onmousemove=null;
				mask.onmouseup=null;
			}
		}
    },
    juxing:function(){
    	let self=this;
		mask.onmousedown=function(e){
        self.init();
        console.log(self)
			let ox=e.offsetX,oy=e.offsetY;
			ctx.lineWidth=1;
			mask.onmousemove=function(e){
				let mx=e.offsetX,my=e.offsetY;
				ctx.clearRect(0, 0, 1000, 500);
				if(self.history.length>0){
				ctx.putImageData(self.history[self.history.length-1],0,0);
				}
				ctx.beginPath();
				ctx.rect(ox,oy,mx-ox,my-oy);
                ctx.closePath();
                ctx[self.type]();
                console.log(self.type)
			}
			mask.onmouseup=function(){
				self.history.push(ctx.getImageData(0,0,self.width,self.height))
				mask.onmousemove=null;
				mask.onmouseup=null;
			}
		}
    },
    yuan:function(){
    	let self=this;
        self.init();
		mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			ctx.lineWidth=1;
			mask.onmousemove=function(e){
				let mx=e.offsetX,my=e.offsetY;
				let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
				ctx.clearRect(0, 0, 1000, 500);
				if(self.history.length>0){
				ctx.putImageData(self.history[self.history.length-1],0,0);
		        }
				ctx.beginPath();
				ctx.arc(ox,oy,r,0,Math.PI*2,false);
                ctx.closePath();
                ctx[self.type]();
			}
			mask.onmouseup=function(){
				self.history.push(ctx.getImageData(0,0,self.width,self.height))
				mask.onmousemove=null;
				mask.onmouseup=null;
			}
		}	
	},
	duobianxing:function(){
		let self=this;
		mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			ctx.lineWidth=1;
			mask.onmousemove=function(e){
				let mx=e.offsetX,my=e.offsetY;
				let angle=(360/self.bian)/180*Math.PI;
				let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
				ctx.clearRect(0, 0, 1000, 500);
				if(self.history.length>0){
				ctx.putImageData(self.history[self.history.length-1],0,0);
				}
				ctx.beginPath();
				for(let i=0;i<self.bian;i++){
                    ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i))
                }
                ctx.closePath();
                ctx.closePath();
                ctx[self.type]();
			}
			mask.onmouseup=function(){
				self.history.push(ctx.getImageData(0,0,self.width,self.height))
				mask.onmousemove=null;
				mask.onmouseup=null;
			}
		}
	},
	duojiaoxing:function(){
        let self = this;
        mask.onmousedown=function(e){
            let ox = e.offsetX,oy = e.offsetY;
            mask.onmousemove=function(e){
                let mx = e.offsetX,my = e.offsetY;
                ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length > 0){
                    ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                let r = Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
                let rd = r/3;
                let angle = Math.PI/self.jiao;


                self.ctx.beginPath();
                for(let i=0;i<self.jiao*2;i++){
                    if(i%2==0){
                        ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i))
                    }else{
                        ctx.lineTo(ox+rd*Math.cos(angle*i),oy+rd*Math.sin(angle*i))
                    }
                }
                ctx.closePath();
                ctx[self.type]();

            }
            mask.onmouseup=function(){
                self.history.push(ctx.getImageData(0,0,self.width,self.height))
                mask.onmousemove = null;
                mask.onmouseup = null;
            }
        }
    },
    xiangpi:function(){
        let self=this;
        mask.onmousedown=function(e){
            if(self.history.length > 0){
                ctx.putImageData(self.history[self.history.length-1],0,0)
            }
            eraserBtn.style.display='block';
            eraserBtn.style.width = self.size+'px';
            eraserBtn.style.height = self.size+'px';
            eraserBtn.style.border = '1px solid red';
            mask.onmousemove=function(e){
                let mx = e.offsetX-self.size/2, my = e.offsetY-self.size/2;
                if(mx>=self.width-self.size){
                    mx=self.width-self.size;
                }
                if(mx<=0){
                    mx=0;
                }
                if(my>=self.height-self.size){
                    my=self.height-self.size;
                }
                if(my<=0){
                    my=0;
                }
                eraserBtn.style.left = mx+'px';
                eraserBtn.style.top = my+'px';
                ctx.clearRect(mx,my,self.size,self.size);

            }
            mask.onmouseup=function(){
            	// alert(1)
                self.history.push(ctx.getImageData(0,0,self.width,self.height))
                eraserBtn.style.display='none';
                mask.onmousemove = null;
                mask.onmouseup = null;
            }
        }
    },
    yuanjiaojuxing:function(){
        let self=this;
        // console.log(self.rrr)
        mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            // console.log(ox)
            mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                ctx.clearRect(0,0,self.width,self.height);
	            if(self.history.length > 0){
	            	ctx.putImageData(self.history[self.history.length-1],0,0)
	            }
                arcRect1(ox,oy,mx,my,parseInt(self.rrr));
                // console.log(mx)
                // arcRect1(20,30,100,100,20);
                function arcRect1(a,b,w,h,r){
                	// console.log(a,b,w,h,r)
                    ctx.beginPath();
                    ctx.moveTo(r+a,b);
                    ctx.lineTo(w-r,b);
                    ctx.quadraticCurveTo(w,b,w,b+r);
                    ctx.lineTo(w,h-r);
                    ctx.quadraticCurveTo(w,h,w-r,h);
                    ctx.lineTo(r+a,h);
                    ctx.quadraticCurveTo(a,h,a,h-r);
                    ctx.lineTo(a,b+r);
                    ctx.quadraticCurveTo(a,b,r+a,b);
                    ctx.closePath();
                    ctx[self.type]();
                }
            }
            mask.onmouseup=function(){
                self.history.push(ctx.getImageData(0,0,self.width,self.height))
                mask.onmousemove = null;
                mask.onmouseup = null;
            }
        }

    },
    clip:function(quyu){
        let self=this;
        mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let mx,my,minx,miny,w,h;
            mask.onmousemove=function(e){
                 mx=e.offsetX;
                 my=e.offsetY;
                 minx = ox>mx?mx:ox;
                 miny = oy>my?my:oy;
                 w=Math.abs(mx-ox);
                 h= Math.abs(my-oy);
                //
                self.ctx.font = self.font;
                quyu.style.cssText=`
                width:${w}px;height:${h}px;
                position: absolute; top: ${miny}px;left: ${minx}px;
                border:1px dashed #000000;
                `
            }
            mask.onmouseup=function(){
                mask.onmouseup = null;
                mask.onmousemove = null;
                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h);
                self.history.push(self.ctx.getImageData(0, 0, self.width,self.height));
                self.ctx.putImageData(self.temp, minx, miny);
                // alert(2)
                self.drag(minx, miny, w, h, quyu);
            }

        }
    },
    drag:function(x,y,w,h,target){
        let self=this;
        mask.onmousemove =function(e){
            var ox=e.offsetX;
            var oy=e.offsetY;
            if (ox>x&&ox<w+x&&oy>y&&oy<h+y){
                mask.style.cursor='move';
            }else{
                mask.style.cursor='default';
            }
        }
        self.mask.onmousedown =function(e){
            var ox=e.offsetX;
            var oy=e.offsetY;
            var cx=ox-x;
            var cy=oy-y;
            if (ox>x&&ox<w+x&&oy>y&&oy<h+y){
                mask.style.cursor='move';
            }else{
               mask.style.cursor='default';
                return;
            }
            mask.onmousemove = function (e){
                ctx.clearRect(0, 0,self.width,self.height);
                if (self.history.length>0) {
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                var endx=e.offsetX;
                var endy=e.offsetY;
                var left=endx-cx;
                var top=endy-cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }
                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                target.style.left=left+'px';
                target.style.top=top+'px';
                x=left;
                y=top;
                ctx.putImageData(self.temp,left,top);
            }
            self.mask.onmouseup=function(){
                target.style.border=0
                mask.onmouseup=null;
                mask.onmousemove=null;
                self.drag(x,y,w,h,target);



            }
        }
    },
    wenzi:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`min-width:300px;
            min-height:30px;position:absolute;
            left:${ox}px;top:${oy}px;word-wrap:break-word;
            background:#fff;border:1px solid #000;outline:none;
            `
            div.contentEditable=true;
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area=div;
            let lefts=ox,tops=oy;
            self.area.onmousedown=function(e){
                self.area.onmousemove=function(e){
                    self.area.style.left=`${ox}px`;
                    self.area.style.top=`${oy}px`;
                }
                self.area.onmouseup=function(){
                    self.area.onmousemove=null;
                    self.area.onmouseup=null;   
                }
            }
            self.area.onblur=function(){
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
            }
        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    chexiao:function(){
        if(this.history.length==1){
        this.ctx.putImageData(this.history[0],0,0);
        }else if(this.history.length<1){
            this.ctx.clearRect(0,0,1000,500);
        }else{
            let last = this.history.pop();
            this.ctx.putImageData(last,0,0);
        }
        
    }
}