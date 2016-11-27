/**
 * Created by Administrator on 2016/11/24.
 */

    var convas1,
        convas2,
        context1,
        context2,
        conWidth,
        conHeight,
        intervalTime,
        nowTime;
    var mouseX=0,
        mouseY=0;
    var backgroundPic=new Image(),
        myseeWead=null,
        myFruit=null,
        myBigFish=null,
        myBabyFish=null,
        myData=null,
        myWave=null,
        myDust=null;
    var startBtn=null;
window.onload=game();
    function game() {
        init();
        gameloop();
    }
    function init() {
        nowTime=new Date();
        convas1=document.getElementById("canvas1");
        convas2=document.getElementById("canvas2");
        context1=convas1.getContext("2d");//顶层画布 鱼 ui(分数) 吃到果实的圆圈效果
        context2=convas2.getContext("2d");//底层画布 海草 背景 果实
        conWidth=convas1.width;
        conHeight=convas1.height;
        startBtn=document.getElementById("btn");
        convas1.addEventListener("mousemove",function (e) {
            if(!myData.gameOver)
            {
                console.log("mousepove");
                mouseEnent(e);
            }
        });
        startBtn.addEventListener("click",function (e) {
            myData.reset();
            myData.gameOver=false;
            myBabyFish.fishBodyIndex=0;
            myBigFish.fishBodyIndex=0
            startBtn.style.display="none";

        });
        backgroundPic.src="./imgs/background.jpg";//加载背景图片
        myseeWead=new seeWead();
        myFruit=new fruit();
        myBigFish=new bigFish();
        myBabyFish=new babyFish();
        myData=new data();
        myWave=new wave();
        myDust=new dust();
    }
    function gameloop() {
       // console.log("loop");
        window.requestAnimationFrame(gameloop);//正确绑定上下文
        var time=new Date();
        intervalTime=time-nowTime;
        nowTime=time;
        if(intervalTime>40)intervalTime=40;
       // console.log("intervalTime"+intervalTime);
        drawPic();
        myseeWead.draw();
        myFruit.draw();
        context1.clearRect(0,0,this.conWidth,this.conHeight);
        myBigFish.draw();
        myBabyFish.draw();
        myBigFish.fishEatFruit();
        myBigFish.fishFeedBabyFish();
        myData.draw();
        myWave.draw();
        myWave.babydraw();
        myDust.draw();

    }
    function drawPic() {
        //console.log("drawPic");
        context2.drawImage(backgroundPic,0,0,conWidth,conHeight);
    }
   function mouseEnent(e) {
     //为了兼容浏览器，layerX是FF、chrome识别，offsetX是除了FF之外 相对于当前元素的坐标

           mouseX=e.offsetX || e.layerX;
           mouseY=e.offsetY||e.layerY;


   }

