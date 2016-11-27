/**
 * Created by Administrator on 2016/11/25.
 */

 var seeWead=function () {
     this.rootX=[];
     this.headX=[];
     this.headY=[];
     this.deg=0;
     this.fudu=[]
     this.seeWeadNum=50;
     this.init();
 }
 seeWead.prototype.init=function () {

         //console.log("init SeeWead");
         for (var i=0;i<this.seeWeadNum;i++)
         {
             this.rootX[i]=i*16+Math.random()*20;
             this.headX[i]=this.rootX[i];
             this.headY[i]=conHeight-250+Math.random()*60;
             this.fudu[i]=Math.random()*50+20;
         }

 }
 seeWead.prototype.draw=function () {
    // console.log("drawSeeWead"+context2);
     this.deg+=intervalTime*0.0009;
     var l=Math.sin(this.deg);
     var self=this;
     context2.save();
     context2.globalAlpha=0.5;
     for (var i=0;i<this.seeWeadNum;i++)
     {
         context2.beginPath();
         context2.moveTo(this.rootX[i],conHeight);
         this.headX[i]=this.rootX[i]+l*this.fudu[i];
         context2.quadraticCurveTo(this.rootX[i],conHeight-110,this.headX[i],this.headY[i]);
         context2.lineCap="round";
         context2.lineWidth=18;
         context2.strokeStyle="#c906ec";
         context2.stroke();
     }
     context2.restore();
   /*  context2.beginPath();
     context2.moveTo(50,600);
     context2.lineTo(50,500);
     context2.lineWidth=18;
     context2.stroke();*/
 };
