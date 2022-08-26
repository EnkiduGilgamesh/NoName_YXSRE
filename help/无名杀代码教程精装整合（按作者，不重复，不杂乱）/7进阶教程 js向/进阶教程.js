一、=，==，===的区别及运算速度
①=是赋值号，并不能用来比较，例如下面这段语句
var num=1;
k=function(){return 1};
if (k()=num) num=2;
那么他就会报错，报错原因为：Invalid left-hand side in assignment（左侧赋值无效）
也就是说，=无论是否出现在if或是while或是其他语句中，依旧充当赋值号的作用，不进行比较，那么问题来了
现有如下程序段：
var k,s;
k=0;
s=1;
if (k=s) console.log(k);
请问：已知控制台有输出，请问控制台输出的k的值是____。（答案：1）
var k,s;
k=0;
s=1;
if (k=s&&true) console.log(k);
请问：已知控制台有输出，请问控制台输出的k的值是____。（答案：true）
var k,s;
k=0;
s=1;
if (k=s||true) console.log(k);
请问：已知控制台有输出，请问控制台输出的k的值是____。（答案：1）
②==和===，这两个为比较用符号，但这两个有略微的区别，==可以跨类型比较，而===必须值和类型均相符才为真，下面是几个例子
1==1 //true
1===1 //true
'1'==1 //true
'1'===1 //false
undefined==undefined //true
undefined===undefined //true
大致了解了？那来做几道简单判断吧
有三条语句如下
var a,b,c,d;
a=function(){return true};
b='return true';
c='function(){return true}';
d='true';
请判断
a==b (答案：false)
a==c (答案：false)
a==d (答案：true)
a===c (答案：false)
a===d (答案：false)
但是#(滑稽) 涉及到小数，也就是所谓的浮点数呢，就要小心了
1==1.0 (答案：true)
1===1.0 （答案：true）
1.0+2.0==3.0 (答案：true)
1.0+2.0===3.0 （答案：true）
0.1+0.2==0.3 （答案：false）
0.1+0.2===0.3 （答案：false）
0.2-0.1==0.3-0.2 （答案：false）
0.3/0.1==3 （答案：false）
以上，大家应该了解这几个符号的区别了吧，那么他们的在比较中的运算速度是这么样的呢？（答案：===快于==）是不是令人震惊？为什么比较更严格，运算速度反而更快，占用内存更小？这个问题留给评论区人才了#(滑稽) 明天公布答案
二、闭包相关
类似数学中的定义域，函数有自己作用的范围，而这个范围仅为定义这个函数时使用的范围，下面是一个例子
var a,b,c;
a=1;
b=function(){
console.log(a);
};
c=function(){
var a=2;
b();
}
那么，一直这个函数有输出，请问输出的是几呢？（答案：1）
可能有人看了这个例子不懂，那么我们换成无名杀来试试
skill={
enable:'phaseUse',
content:function(){
game.a=function(){
player.damage();
};
var player=game.zhu;
game.a();
},
}
那么请问谁会受到伤害，主公还是自己？相必这下很多人就看得出来是自己了吧，那么，下面送大家几道阅读题
var x,y;
x=function(){
 console.log(a);
};
y=function(x){
 var a=2;
 x();
}
y(x)
已知控制台有输出，请问输出结果是___？（答案：undefined）
var a;
a=function(){
 var x = 1;
var b= function(){
 console.log(x);
 }
 return b;
}
var x = 2;
var f = a();
f()
已知控制台有输出，请问输出结果是___？（答案：1）
三、数据的加减
有人觉得这还用说么，那么这里直接上例子#(滑稽) 
阅读以下程序，回答问题（共4小题，每小题8分，共32分）（等等这奇怪的画风是。。）
var a=3;
console.log(a--)
输出的结果是___。
var a=3;
console.log(a-=1)
输出的结果是___。
var a=3;
console.log(a-1)
输出的结果是___。
var a=3;
console.log(--a)
输出的结果是___。
答案（3，2，2，2）
这下看出区别了吧，加号也是同理
四、初始值的设定
在自定义函数中，我们常会用到一些参数，或者用arguement代替，对于一些没有按规矩使用函数的就会很头疼，这时，初始值就发挥作用了
请比较下面两个例子
var a=function(a,b,c,d,e){
if (!a) a=1;
if (!b) b=1;
if (!c) c=1;
if (!d) d=1;
if (!e) e=1;
return [a,b,c,d,e]
}
var b=function(a,b,c,d,e){
a=a||1;
b=b||1;
c=c||1;
d=d||1;
e=e||1;
return [a,b,c,d,e]
}
觉得哪个高大上就自己领走吧#(滑稽) 
上接教程1
一、运算
常见的一些运算符
+,-,*,/,%（求余）,?(条件)
下面很简单的几个例子
0*1 输出0
1/0 输出NaN
但是这里有几点需要注意：
①window.Infinity(可简写为Infinity)最好不要乱用，原因：Infinity*0是NaN而不是0；Infinity-Infinity也是NaN
②相乘的两个数不要过大，否则自动变成Infinity,如9*9e+9999999999999的值为Infinity
二、循环
相信大家编技能编多了，应该都会for，for...in，while之类的，这里只介绍continue和break，有效运用这两个语句可以提高你代码的运行速度
continue:退出当前这个循环并开始下一个循环
例如 for (var i=0;i<game.players.length;i++){
if (game.players[i]==game.me) continue;
game.players[i].damage();
}//对除你以外的其他角色造成一点伤害
这样就可以有效跳过自己
break:退出整个循环，例如
 for (var i=0;i<game.players.length;i++){
if (game.players[i]==game.me) continue;
game.players[i].damage();
}//对序号在你之前的角色造成一点伤害（并不一定是座位号）
三、数据交换
在编写技能过程中，我们常常需要将不同的属性赋予不同的另外属性的值，而那些另外属性可能有时又要被复写，详见下面几个例子
var a=1,b=2;
如果要交换a,b的值，那么一般我们会怎么做呢？（以下方法均适用于所有类型，包括但不限于数字）
下面是第一种做法
①var a=1,b=2;
var c=a;
a=b;b=c;
这应该也是普遍使用的方法，下面我们来看第二种方法
②var a=1;b=2;
a = [b, b=a][0];
这种方法可以减少一个变量，也是各大网页普遍使用的写法，那么我们来看第三种方法
③var a=1,b=2;
[a,b]=[b,a];
这种方法代码编写量少,偷懒者必备,下面是第四种方法
④var a=1;b=2;
a = {a : b, b : a};b = a.b;a = a.a;
这种方法是看起来比较高大上的写法，至少你写在技能里萌新想用没那么容易了#(滑稽)  下面在看第五种
⑤var a=1,b=2;
a=(function(){;
 try{return b}
 finally{b=a}}
)();
这种方法是最大材小用的方法，但是看起来高大上啊对吧#(滑稽)  
下面是运行速度排名（由快到慢）：①>③≈④＞②＞⑤自取
1.switch函数的运用
switch其实是一个很好用的函数，下面直接上例子
假如我们要做一个技能，当我们手牌数分别为1，2，3，4，5时获得各不相同的效果，那么，应该怎么写呢
写法①
if (player.num('h')===1) code;
if (player.num('h')===2) code;
.
.
.
if (player.num('h')===5) code;
写法②
if (player.num('h')===1) code;
else if (player.num('h')===2) code;
else if 
.
.
.
else code;
这两种写法中，写法①没有容错，即玩家手牌为6时不会触发任何效果，写法②能在玩家手牌为6时也触发效果（可能容错在这个情境下没有用，但是在某些情况下，尤其是某些破坏大王手中，容错就非常有用了）
但是，这样一步步判断不但写起来繁琐，运行速度还比较慢，那么我们怎么写可以有效解决这个问题呢
switch(player.num('h')){
case 1:
//如果手牌数是1
code;
break;
//跳出，防止执行接下来的case
case 2:
.
.
.
case 5:
code;
break;
default:code//设置容错，均不符合则执行
}
二、createEvent函数的运用
(这里不介绍createTrigger函数，因为于某些扩展连用可能出bug)在游戏中，我们常会yy#(滑稽) 一些技能，比如场上有角色复活时发动等等，这些时机老大并没有给出，这时候createEvent函数就发挥作用了
另外，当你想自己定义时机或者某个事件时也可发动，这里介绍两个例子
第一个例子：来源于吉尔伽美什扩展的王之财宝
吉尔伽美什的技能“王之财宝”创建了一个名为王之财宝的时机，并且卫宫士郎扩展武将卫宫士郎可以针对该时机进行投影，下面是“王之财宝”创建事件过程源码
 var next=game.createEvent('王之财宝');
//创建一个名为王之财宝的事件
 next.setContent(info.onEquip);
//设置王之财宝事件所执行的内容
 next.player=player;
//设置trigger.player
 next.trigger.card=card;
//设置trigger.card
该事件顺带创建时机，故可以被
trigger:{global:'王之财宝Begin',},content:function(){trigger.cancel()},响应
下面我们来看第二个例子：来源于作者包扩展的欧皇模式
作者包扩展欧皇模式给所有玩家添加一个置于判定阶段之前的阶段意外阶段，时机为phaseYiWai，下面我们来看该创建事件过程源码
var next=game.createEvent('phaseYiwai');
//创建事件
next._triggered=trigger; 
//设置_triggered属性，只有设置了这个属性的函数，才能通过_triggered=null来不触发技能，否则有些手机卡死
next.player=player; 
//设置trigger.player
 next.setContent(player.phaseYiwai);
//设置事件内容
 return next; 
//返回这个事件
三、乱斗模式的制作
乱斗模式制作需要基本模板，模板如下
以作者包时慕的矿山模式为例
lib.brawl.smdks= {
 name:'时慕的矿山',
//乱斗模式名称
 mode:'Identity',
//对战模式
 intro:[
'游戏开始时，玩家变为作者「时慕」。',
'该模式下，通过「时慕」技能获取的作者币会大大提高。',
 ],
//介绍
content:{
//内容
gameStart:function(){
//游戏开始时触发事件
game.me.init('zuozhe时慕');
}
},
};
四、平级模式的制作
平级模式的制作一样需要模板，他可以创建一个与身份、国战、挑战等平级的模式并出现在游戏主界面中，也可在菜单栏被选择，下面是模板
以作者包内测版宠物对战模式为例(由于源码过长，这里只负责模板)
content:function(config){
game.addMode('zzbpetmode',{
//模式内容
},{translate:'zzbpetmode',});},
onremove:function(){
game.clearModeConfig('zzbpetmode');},
image:['zzbpetmode.jpg']