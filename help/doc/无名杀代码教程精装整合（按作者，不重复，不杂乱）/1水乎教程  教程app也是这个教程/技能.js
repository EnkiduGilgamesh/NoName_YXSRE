【技能教程介绍】
本教程转载自无名杀著名技能设计者可乐加冰的教程，本手册已获得授权，未经原作者允许请不要转载分割【一、引言】
 制作武将的过程就是将我们常常看到的技能描述“翻译”成程序能够看懂的语言。只要你有一点基础，你爱钻研，相信你一定可以制作出属于你自己的武将。
 武将导入的几点声明：1、所有分享的武将都是zip格式的，不要解压。在选项-自定义-导入武将-选择zip文件包即可
2、导入武将后点击编辑武将包 两次 。即可把武将放到自定义里面，然后再自行打包拆分都可以。
分割【二、技能分类】
 在无名杀中，我们常用的技能分为：触发类、主动使用类、mod类和viewAs（视为）类。
分割【2.1 触发类 trigger】 什么样的技能该写成触发类？就像我们常常看到的，回合开始阶段，回合结束阶段，指定一名目标后，都是触发类，这类技能占了大多数。
模板：
audio:['guidao',2],
trigger:{player:'phaseBegin'},
 //这片区域填写 forced:true,direct:true,等等一些需要声明的
filter:function(event,player){
if() return true;
return false;
},
content:function(){
'step 0'
.
.
'step 1'
.
.
}
分割【2.1.1 audio 配音】
一般情况下，写在技能框体的第一行。
audio:['peiyin',2],这么写之后，把配音命名成 peiyin1 peiyin2 放到noname\resources\app\audio\skill文件夹下即可生效。如果你有多个配音，更改数字即可。
若是单个配音，就 audio:'peiyin', 配音命名成 peiyin即可
若要引用已有技能配音 audio:'paoxiao',
分割【2.1.2 trigger】
这个也就是触发这个技能的条件
首先写好 trigger:{xxx1:'xxx2'},
xxx1:可替换内容 player global target source
xxx2:拥有的触发条件经我回忆，有这么几种
gameDrawAfter 所有人摸牌结束之后，游戏开始
phaseBofore 回合开始前
phaseBegin 回合开始阶段
phaseJudgeBegin 判定阶段开始时
phaseJudgeBefore判定阶段开始前
phaseJudge 判定阶段
phaseDrawBefore摸牌之前
phaseDrawBegin摸牌之时
phaseDrawEnd摸牌结束
phaseUseBefore出牌阶段之前
phaseUseBegin出牌阶段开始时
phaseUseEnd出牌阶段结束时
phaseDiscardBefore弃牌阶段之前
phaseDiscardBegin弃牌阶段开始时
phaseDiscardEnd弃牌阶段结束时
phaseEnd回合结束时
loseEnd失去一张牌时
gainEnd获得一张牌后
chooseToRespondBegin打出一张牌响应之前
chooseToUseBegin使用一张牌后
damageEnd
（触发条件有很多，可能不全，欢迎补充）
比如你要写 
玩家失去一张牌之后 trigger:{player:'loseEnd'},
同理若你有多个触发条件
玩家失去或获得一张牌后trigger:{player:['loseEnd','gainEnd']},
附加说明：
global 代表所有人 比如全场其他角色摸牌阶段开始时触发 trigger:{global:'phaseDrawBegin'},
target 代表你成为目标 当你成为【杀】目标的时候 trigger:{target:'shaBefore'},
source 代表来源是你 当你造成伤害之后 trigger:{source:'damageEnd'},
分割【2.1.3 filter:function(){}】,
在这里就是触发之后需要判断的条件了。
比如你要写个技能： 回合开始阶段，你可以弃置一张牌然后获得“咆哮”直到回合结束。
这个也就是玩家回合开始阶段 trigger:{player:'phaseBegin'},
要发动这个技能你需要手手牌 那就判断玩家手牌数是否大于0
filter:function(event,player){
return player.num('h')>0;
},
在这个函数体里，如果返回值为真，就执行content的内容。
在content里面，开始执行后，先让玩家弃置一张牌：player.chooseToDiscard();
如果玩家弃置了牌，那么获得咆哮，否则事件结束：
if(result.bool){
player.addTempSkill('paoxiao','phaseAfter');
}else{
event.finish();
}
那么完成之后就是这样：
audio:['paoxiao',2],
trigger:{player:'phaseBegin'},
filter:function(event,player){
return player.num('h')>0;
},
content:function(){
'step 0'
player.chooseToDiscard();
'step 1'
if(result.bool){
player.addTempSkill('paoxiao','phaseAfter');
}else{
event.finish();
}
}
就是这么逐字逐句的翻译，就能实现技能效果。需要注意的时逗号不能少，每一区块和下一区块之间不能缺少 , (逗号)
 
分割【2.1.4 content:function(){} 技能函数体】
 完成了2.1.3的触发，条件检测就可以执行技能函数体里的功能了。

分割【2.2.1 enable】 的位置和trigger相同，trigger是触发，enable就是主动施放类的技能了。
enable能使用的时机一般有： 出牌阶段使用（大部分）、用以响应（龙胆、武圣、看破等等）、濒死使用（涅槃）
phaseUse
chooseToRespond
chooseToUse
主动技能一般情况下要求选择目标，弃置卡牌等等
分割【2.2.2 实例技能】：出牌阶段你可以弃置一张牌，并选择两名其他角色，令一名角色对另一名角色出一张杀，若不能这么做的人弃置所有手牌。
出牌阶段使用
enable:'phaseUse',
分割【2.2.3 filter:function()】
因为需要选择两名其他角色，所以判断玩家数是否足够，需要除了你之外的两人，也就是至少有三人在场上。而且你需要弃置一张牌，那么你的手牌和装备牌的数目必须大于0
filter:function(event,player){
return game.players.length>=3&&player.num('he')>0;
},
(PS:h代表手牌，e代表装备区的牌，j代表判定区的牌)
分割【2.2.4 filterCard】
需要弃置一张牌就要加上一句 filterCard:true,
但是如果你想要弃置一张黑色牌的时候，就可以更改filterCard
filterCard:function(card){
return get.color(card)=='black';
},
这张牌必须是黑色的才能选，你选择的牌可以是手牌或者装备区的牌
position:'he', 同理如果你想要可以弃置判定区、装备区、手牌
position:'hej',
分割【2.2.5 filterTarget】
你需要选择目标，目标必须有手牌，而且你不能成为目标。而且必须要有两个目标：selectTarget:2,当你选择一名目标之后，第二个目标必须是你选择目标能出杀的目标。target.canUse({name:'sha'},ui.selected.targets[0])。ui.selected.targets[0]代表你刚才选择的第一个目标。综上：
selectTarget:2,
multitarget:true,//可选择多名目标
filterTarget:function(card,player,target){
if(player==target) return false;
if(ui.selected.targets.length==1){
return target.canUse({name:'sha'},ui.selected.targets[0]);
}
return true;
},
现在我们需要一个标识符来显示哪名角色需要出杀
targetprompt:['出杀','出闪'],依次就是你点击第一个角色后在其旁边显示出杀，第二个角色显示出闪
分割【2.2.6 content】:function()
技能主体。完成了上面的准备工作，就等着生效吧。我们需要的效果是，第一个目标对第二个目标出杀。第一个目标是targets[0],第二个目标是targets[1]。值得注意的是，只有在主体函数之外选的目标才能直接用targets[i]
一般情况下，你使用chooseTarget函数选目标需要用result.targets[0]才可以。
完成!
content:function(){
'step 0'
targets[0].chooseToUse({name:'sha'},targets[1]);
'step 1'
if(result.bool==false&&targets[0].num('h')>0){
targets[0].discard(targets[0].get('h'),true);
}else{
event.finish();
}
},

分割【2.3 mod类】
个人理解相当于被动技能。
分割【2.3.1 格式 】
mod:{
xxx:function(){
},
xxx2:function(){
}
}
xxx的位置用一些特定的函数代替
一般有以下几种：
cardEnabled:function(card,player) 卡牌能否被选择
cardUsable:function(card,player)卡牌能否被使用
cardRespondable:function(card,player) 卡牌能否被选择来响应
cardSavable:function(card,player)卡牌能否被用来救人
targetInRange:function(card)目标能否被选择
selectTarget:function(card,player,range){
if(card.name=='sha'&&range[1]!=-1) range[1]++;
}, 杀多指定一名目标。可更改为其他
attackFrom:function(from,to,distance){
return distance-num;
}, num为你想要【攻击距离】增加的数值。
globalFrom:function(from,to,distance){
return distance-1;
} 与其他人的距离始终-1 值得注意的是上面是攻击距离，下面是与他人的距离。加以区分
分割【2.3.2 代码位置：】
mod类代码可以加在触发类或者主动技能的下面
也可单独成为一个技能。
例：
audio:['guidao',2],
trigger:{player:'phaseBegin'},
filter:function(event,player){
if() return true;
return false;
},
content:function(){
'step 0'
.
'step 1'
.
},
mod:{
globalFrom:function(from,to,distance){
return distance-1;
} 
}
分割【2.3.3 常用mod】
mod:{
attackFrom:function(){
return -Infinity; //攻击距离无限
},
},
mod:{
globalFrom:function(from,to,distance){
return distance-1; //距离-1
} 
}
mod:{
globalTo:function(from,to,distance){
return distance+1;//距离+1
}
}
mod:{
targetEnabled:function(card){
if((card.name=='sha')
return false;//不能成为杀的目标
}
}

分割【2.4.1 武圣就是viewAs最好的例子】：
audio:'xx',
enable:['chooseToRespond','chooseToUse'],
filterCard:function(card){
return get.color(card)=='red';
},
position:'he',
viewAs:{name:'sha'},
viewAsFilter:function(player){
if(!player.num('he',{color:'red'})) return false;
},
prompt:'将一张红色牌当杀使用或打出',
如果你只想把手牌当做某张牌，将position改为你想要的。前文提过：h代表手牌，e代表装备区的牌，j代表判定区的牌
position:'h', 手牌
position:'he',手牌+装备区
position:'hej', 手牌+装备区+判定区
无非这么三种
分割【2.4.2 viewAs和ai的纠葛】
有时候我们是为打出桃，或者是为打出闪的时候，手里没桃没闪，就会直接掉血或者死了，不给我们机会发动技能，这里就要用到ai的一句话了，告诉ai我们能出杀，能出闪，能救人
能出杀:
ai:{
respondSha:true,
}
能出闪:
ai:{
respondShan:true,
}
能救人:
ai:{
save:true,
}
能无懈：（这个有所不同）
viewAsFilter:function(player){
return player.num('h',{color:'black'})>0;
},//你把能当做无懈的牌的条件写进去，比如你有黑色手牌的时候询问
2.5 逗号引发的错误。
,在每个模块之间都要添加，而且是英文的逗号。配音代码后面加，trigger代码 } 后面也要加，content函数完成如果下面还有其他的东西，也要加，在}后面加，写完代码发现不对先检查逗号。检查}后面的该加的逗号是不是没加

分割【3.1.1 player.storage.xxx】
记录 false true 作为技能能否发动的开关
player.storage.xxx相当于游戏开始你购买了一个箱子，这个箱子里面可以存放数据，目标，卡牌，bool值等等等等，在整个游戏中都可以用。在整场游戏中，只要有人能够弄到你的名字，就可以调用里面的数据。
比如一些限定技，在游戏开始时设置 player.storage.xxx=false;（个人理解player.storage.xxx在没有进行任何）
在发动限定技能的条件里添加判断 !player.storage.xxx 的真假，在执行后，在content里执行
player.storage.xxx=true;
现在这个值在整个游戏中就一直为真了。下次你想再次发动技能时候回检测player.storage.xxx。发现为真，那么!player.storage.xxx就为假了，技能就不会提示你发动了，这就是限定技的原理。！的意思取反。真变假，假变真
示例：
skillAnimation:'epic',//这两句是觉醒特效
animationColor:'fire',
enable:'phaseUse',
filter:function(event,player){
return !player.storage.fencheng;
},
.
content:function(){
"step 0"
player.storage.fencheng=true;
.
.
},
在焚城这个技能里，判断 !player.storage.fencheng ，就是之前所说的filter，这里面为真才能发动
在发动一次技能之后，player.storage.fencheng=true;那么下次你想发动的时候
filter:function(event,player){
return !player.storage.fencheng;
},就会返回假了，false。所以技能就不能发动
若想一直发动， return !player.storage.fencheng; 改为 return true; 即可
分割【3.1.2 player.storage.xxx】
 记录一个目标
 这里记录的目标，只要你不删除，在整场游戏中都是可用的。
比如魅心：你可以弃置一张牌并选择一名其他男性角色，若如此做，本阶段当你使用一张基本牌后，你令其弃置一张牌；当你使用一张锦囊牌后，你获得其一张牌；当你使用一张装备牌后，你对其造成1点伤害。
也就是你出牌，该目标受到伤害，就需要用player.storage.xxx记录你选择的目标
enable:'phaseUse',
usable:1,
filter:function(event,player){
var num=0;
for(var i=0;i<game.players.length;i++){
if(game.players[i].sex=='male'&&game.players[i]!=player) num++
}
return num>0&&player.num('he')>0;
},
filterCard:true,
position:'he',
filterTarget:function(card,player,target){
if(player==target) return false;
if(target.sex!='male') return false;
return true;
},
selectTarget:1,
content:function(){
player.storage.meixin=targets[0]; //在这里就是把你选的目标记录到player.storage.meixin里面
player.storage.meixin2=true;
},
然后在你出牌之后产生效果（这里用到了group，后面会详细说明）
trigger:{player:'useCardAfter'},
audio:["meixin2",2],
forced:true,
filter:function(event,player){
return player.storage.meixin2&&_status.currentPhase==player;
},
content:function(){
if(get.type(trigger.card)=='basic')
player.storage.meixin.chooseToDiscard('he',true,1);
if(get.type(trigger.card)=='trick'||get.type(trigger.card)=='delay')
player.gainPlayerCard('he',player.storage.meixin,true);
if(get.type(trigger.card)=='equip')
player.storage.meixin.damage();
},
上面几句话中，我们可以看到，player.storage.meixin都是chooseToDiscard、damage的目标，也就是你刚才记录的角色，所以，功能就是这样。
分割【3.1.3 player.storage.xxx与mark、markSkill】
有些技能需要把牌放在武将的身上，称为某某，然后获得一个标记。比如权计、屯田。
还有我写的旱魃的 焚天：锁定技，回合结束阶段，若你的手牌数小于体力值，你选择一名你攻击范围内的角色，将其一张牌置于你的武将牌上，成为“焚”。
'step 0'
player.chooseTarget('选择一名目标将其一张牌置于你的武将牌上',function(card,player,target){
return player!=target&&get.distance(player,target,'attack')<=1&&target.num('he')>0;
},true);
'step 1'
event.targets=result.targets[0];
player.choosePlayerCard(result.targets[0],ai.get.buttonValue,'he',true);
'step 2'
if(result.bool){
player.storage['KL|焚天']=player.storage['KL|焚天'].concat(result.links);
player.markSkill('KL|焚天');
player.syncStorage('KL|焚天');
event.targets.lose(result.links,ui.special);
event.targets.$give(result.links,player);
}
值得说明的一点，因为上面用到了markSkill，而且storage里面存放的是卡牌，所以需要初始化storage
init:function(player){
player.storage['KL|焚天']=[];
},
intro:{
content:'cards',
},
上面两段分别为初始化与生命标记内容，如果是cards，你长按标记的时候就能看到里面的牌。
而且想要让标记角标和你的卡牌数量一致，你的storage必须和你的技能名字一致。
比如你写了个技能叫 混蛋 
你的storage必须为 
player.storage.混蛋=[];在init里声明，相当于初始化。
player.storage.混蛋=player.storage.混蛋.concat(result.cards);
player.markSkill('混蛋');
player.syncStorage('混蛋');
这样就能显示了。

分割【3.2 最最重要的group】
在理解group之前，先看看什么是subSkill
我为什么没有和水乎一样，把group放到和其他类的技能平行的位置，那是因为在我看来他们的关系是层次关系，而不是平行的。
用前面的写法写好一个一个小技能，然后把他们用subSkill包起来。
比如一个技能有两个效果，或者一个阶段无法结算完毕，就可写两个独立的技能，分别调试成功之后。然后重点来了。
先写好subSkill{}的格式
subSkill:{
jineng1:{
独立技能1
},//这里的逗号千万别漏了
jineng2:{
独立技能2
}
}
把技能复制进去。这样就相当于你把两个技能放在武将身上了。但是这样技能是不能生效的。你要想拿出来给别人看，就把技能填在group里，没有填进去的就相当于隐藏了。
在group:[]里声明一下，就能生效了。为什么要这么来解释呢？因为这就是突然发现可以不用技能载体的关键！
比如你写了三个技能
subSkill:{
jineng1:{
独立技能1
},//这里的逗号千万别漏了
jineng2:{
独立技能2
},
jineng3:{
}
}
这么填好之后，如果你的jineng1和jineng2是想要一开始就拥有的，jineng3是你后面触发条件获得的
就这么写：(假如你的技能名字叫咆哮)
group:['咆哮_jineng1','咆哮_jineng2'],//逗号别忘了
subSkill:{
jineng1:{
独立技能1
},//这里的逗号千万别漏了
jineng2:{
独立技能2
},//这里的逗号千万别漏了
jineng3:{
}
}
这样写好之后，技能1和技能2一开始就生效了，比如你想在技能二触发的时候获取到技能3直到回合结束：
group:['咆哮_jineng1','咆哮_jineng2'],//逗号别忘了
subSkill:{
jineng1:{
独立技能1
},//这里的逗号千万别漏了
jineng2:{
.
.
content:function(){
player.addTempSkill('咆哮_jineng3','phaseAfter');//注意看里面的技能，不是jineng3而是 咆哮_jineng3，也就是说必须加上技能名字，才能正确获取
}
},//这里的逗号千万别漏了
jineng3:{
}
}
例：准备阶段，你可以失去一点体力。然后摸x+ 2张手牌，且你与所有角色的距离均视为1，直到回合结束。弃牌阶段，你可以令一名角色获得你的弃牌。（x为你已失去的体力值）
group:['KL|忠勇_zhongyong1','KL|忠勇_zhongyong2'],
subSkill:{
zhongyong1:{
audio:['zhongyong',2],
unique:true,
gainable:true,
trigger:{player:'phaseDiscardAfter'},
filter:function(event,player){
if(event.player.classList.contains('dead')==false&&event.cards&&event.cards.length>0)return true;
},
discard:false,
direct:true,
popup:false,
content:function(){
"step 0"
event.cards=trigger.cards.slice(0);
for(var i=0;i<event.cards.length;i++){
if(get.position(event.cards[i])!='d'){
event.cards.splice(i,1);i--;
}
}
if(event.cards.length>0){
player.chooseTarget('忠勇：选择一名目标获得你的弃牌',function(card,player,target){
return player!=target;
}).ai=function(target){
if(ai.get.attitude(player,target)>0) return true;
return false;
}
}else{
event.finish();
}
"step 1"
if(result.bool){
player.logSkill('KL|忠勇',result.targets[0]);
result.targets[0].gain(event.cards);
result.targets[0].$gain2(event.cards);
}
},
},
zhongyong2:{
audio:['zhongyong',2],
trigger:{player:'phaseBegin'},
filter:function(event,player){
return player.hp>0;
},
check:function(event,player){
if(player.hp<3) return false;
return true;
},
content:function(){
'step 0'
player.loseHp();
'step 1'
player.draw(2+player.maxHp-player.hp);
player.addTempSkill('KL|忠勇_zhongyong3','phaseAfter');
},
},
zhongyong3:{
mod:{
globalFrom:function(){
return -Infinity;
}
},
}
}
忠勇3是个mod技能，需要发动技能之后才能视为你的攻击距离无限，那么player.addTempSkill('KL|忠勇_zhongyong3','phaseAfter');就成功实现了。
分割【3.4 巧用subSkill写觉醒技能】
接上一步。我们知道，优衣库只是一种无奈之举，但是突然就看懂了subSkill，原来觉醒技一开始就能写的。
我们把一个觉醒技写好之后，想让他不生效，觉醒条件满足之后才生效，那么我们想一下刚才是怎么做到让技能不生效的？
我们只需要给他加个subSkill:{}就能把他藏起来了，虽然显示在面板上，但是不生效。
原来的觉醒技原封不动从你的载体上复制过来
subSkill:{
juexingji:{
技能代码放这里
}
}
然后再人物身上创建一个技能，就把把觉醒技的描述什么的都填好。编辑完技能之后我们发现人物身上虽然有这个技能，但是是不生效的。
这就和我们预期一致。
本来我们给玩家添加觉醒技是通过
 player.addSkill('xxx');
 现在我们只用把xxx改成觉醒技的名字
 subSkill:{
juexingji:{
技能代码放这里
}
}觉醒技代码是这样的，比如你的给这个技能的命名是 觉醒
那么
player.addSkill('觉醒_juexingji');
大功告成！
