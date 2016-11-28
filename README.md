# html5fishGame
>利用html5的convas标签结合javascript写的小游戏
###主要原理
>利用 window.requestAnimationFrame对动画的每一帧不停的在画布convas上画图
>相对于interval自定义的调用时间，requestAnimationFrame能根据网络状况来决定
>调用时间，以这样的时间间隔来给动画加速度，动画会更加平滑
###游戏规则
>果实由海藻随机产生，大鱼吃果实，然后喂给小鱼，小鱼在没有果实的状态下会慢慢变白
>小鱼完全变白时，游戏结束。一共两种果实，黄的100分/个 蓝色200分/个
###不足之处
- 结构有点混乱
- 各种变量，js文件之间全局变量一坨
- 加载的慢，占用内存空间大
