【基础教程介绍】
本教程转载自无名杀开发者水乎的帖子，水乎大大已授权本手册，未经原作者允许请不要转载
分割【示例武将下载】
：http://pan.baidu.com/s/1pKfVMJL
分割【创建武将】
武将名和头像为必填，更改武将名即视为创建一个新武将 
参考现有代码：https://github.com/libccy/noname ，character文件夹
分割【编辑武将】
点击武将头像进行编辑，再次点击取消编辑。所有更改只有在点编辑武将按钮之后才会保存。
分割【导出武将包】
创建武将后武将默认开启，若想以武将包的形式管理武将，可选择将其导出。点导出武将后点想要导出武将的头像选择要导出的武将，不选则会全部导出。
导出后会出现一个zip文件（安卓版1.7.8后支持），用来分享或重新导入。被导出的武将同其他武将包的武将一样，单击可禁用，但不能编辑。若要再次编辑，点两次编辑武将包。
分割【导入武将包】
文件为导出武将包时生成的zip格式文件，不能与现有武将包重名。若有武将出现重名，会弹出警告并跳过此武将。
分割【武将及技能的命名规则】
若只有自已使用，无重名问题，则可随便命名。
若要分享给他人，为保证不重名，采用id+冒号+名称的命名方式。id及冒号仅作为区分标记，不会在游戏中显示

如：test:曹操；test:奸雄，在游戏中会显示为曹操及奸雄，但不会与其它命名为曹操的DIY造成冲突。

自1.7.4开始，引用现有配音方法改为技能内容里加audio:技能名，如audio:'wusheng'

自1.7.6开始，配音可以引用文件名，如果文件名为xingwu1、xingwu2，代码为audio:['xingwu',2]

分割【技能编写】
编写技能需对html及javascript有一定的了解，个人推荐两个学习网站：w3school和mdn


分割【创建一个简单的改名技能】
若技能内容与现有技能相同，只想换一个名称，代码如下
inherit:'技能名'
如：inherit:'paoxiao'

分割【触发技能】
通过某个事件触发的技能。触发条件的写法为事件角色+事件名+事件时机，事件时机分为开始前（Before）、开始时（Begin）、结束时（End）及结束后（After）
举例：英姿
trigger:{player:'phaseDrawBegin'},
content:function(){
trigger.num++;
}
player：触发时件中，技能拥有者的角色为事件的发起者
phaseDraw：摸牌阶段
Begin：事件时机为开始时
content：技能内容，trigger为触发此技能的事件，即摸牌阶段，该事件的摸牌数为num，trigger.num++即让摸牌阶段的摸牌数+1
举例：激昂（杀）
trigger:{player:'shaBegin',target:'shaBegin'},
filter:function(event,player){
return get.color(event.card)=='red';
},
content:function(){
player.draw();
}
player:'shaBegin',target:'shaBegin'：代表技能拥有者作为事件（杀）的使用者或事件的目标时皆可触发
举例：旧秘计（仅摸牌部分）
trigger:{player:['phaseBegin','phaseEnd']},
filter:function(event,player){
return player.hp<player.maxHp;
},
content:function(){
'step 0'
player.judge();
'step 1'
if(result.color=='black'){
player.draw(player.maxHp-player.hp);
}
}
['phaseBegin','phaseEnd']：多个触发事件用数组表示

分割【主动技能】
在出牌阶段使用：enable:'phaseUse'；在任意用牌时机使用：enable:'chooseToUse'；在需打出牌时使用：enable:'chooseToRespond'
举例：苦肉
enable:'phaseUse',
content:function(){
"step 0"
player.loseHp(1);
"step 1"
player.draw(2);
}
举例：制衡
enable:'phaseUse',
usable:1,
filterCard:true,
position:'he',
selectCard:[1,Infinity],
prompt:'弃置任意张牌并摸等量的牌',
content:function(){
player.draw(cards.length);
},
usable：出牌阶段可发动的次数
filterCard：什么样的牌可被选，true为没限制
position：要选择卡牌的区域，h为手牌；he为手牌和装备牌；hej为手牌、装备牌和判定牌
selectCard：需选择卡牌数，[1,Infinity]代表最少为1,最大无上限，若定义了filterCard，则默认为[1,1]
promot：选择技能后的提示框
举例：结姻
enable:'phaseUse',
filterCard:true,
selectCard:2,
filterTarget:function(card,player,target){
if(target.sex!='male') return false;
if(target.hp>=target.maxHp) return false;
if(target==player) return false;
return true;
},
content:function(){
player.recover();
target.recover();
}
selectCard：2代表最少选两张，最多选两张
filterTarget：选择目标需满足的条件
selectTarget：类似selectCard，由于定义了filterTarget，默认为[1,1]，所以已省略


分割【视为技】
语法为viewAs:card
举例：倾国
enable:'chooseToRespond',
filterCard:function(card){
return get.color(card)=='black';
},
viewAs:{name:'shan'},
prompt:'将一张黑色牌当闪打出',
ai:{
respondShan:true,
}
respondShan：告诉游戏即使手牌里没闪也可能打出闪，防上被杀没闪时直接掉血
举例：武圣
enable:['chooseToRespond','chooseToUse'],
filterCard:function(card){
return get.color(card)=='red';
},
position:'he',
viewAs:{name:'sha'},
prompt:'将一张红色牌当杀使用或打出',
ai:{
respondSha:true,
}
举例：急救
enable:'chooseToUse',
filter:function(event,player){
return _status.currentPhase!=player;
},
filterCard:function(card){
return get.color(card)=='red';
},
position:'he',
viewAs:{name:'tao'},
prompt:'将一张红色牌当桃使用',
ai:{
save:true,
}

分割【其它类别技能】
即非主动使用也非触发的技能，有固定的格式
举例：马术
mod:{
globalFrom:function(from,to,distance){
return distance-1;
}
}
举例：飞影
mod:{
globalTo:function(from,to,distance){
return distance+1;
}
}
举例：红颜
mod:{
suit:function(card,suit){
if(suit=='spade') return 'heart';
}
}
举例：手牌上限+1
mod:{
maxHandcard:function(player,num){
return num+1;
},
}
举例：空城
mod:{
targetEnabled:function(card,player,target,now){
if(target.num('h')==0){
if(card.name=='sha'||card.name=='juedou') return false;
}
}
}
举例：天义成功
mod:{
targetInRange:function(card,player,target,now){
if(card.name=='sha') return true;
},
selectTarget:function(card,player,range){
if(card.name=='sha'&&range[1]!=-1) range[1]++;
},
cardUsable:function(card,player,num){
if(card.name=='sha') return num+1;
}
}
举例：奇才
mod:{
targetInRange:function(card,player,target,now){
var type=get.type(card);
if(type=='trick'||type=='delay') return true;
}
}
举例：武神
wushen:{
mod:{
cardEnabled:function(card,player){
if(card.name!='sha'&&get.suit(card)=='heart') return false;
},
cardUsable:function(card,player){
if(card.name!='sha'&&get.suit(card)=='heart') return false;
},
cardRespondable:function(card,player){
if(card.name!='sha'&&get.suit(card)=='heart') return false;
},
cardSavable:function(card,player){
if(card.name!='sha'&&get.suit(card)=='heart') return false;
},
targetInRange:function(card){
if(get.suit(card)=='heart'||_status.event.skill=='wushen') return true;
}
},
enable:['chooseToUse','chooseToRespond'],
filterCard:{suit:'heart'},
viewAs:{name:'sha'},
check:function(){return 1},
ai:{
respondSha:true,
}
}

分割【技能组】
多个技能的组合，用group定义技能级，subSkill定义子技能
举例：武圣+咆哮
group:['wusheng','paoxiao']
举例：龙胆
group:['longdan_sha','longdan_shan'],
subSkill:{
sha:
enable:['chooseToUse','chooseToRespond'],
filterCard:{name:'shan'},
viewAs:{name:'sha'},
prompt:'将一张闪当杀使用或打出',
ai:{respondSha:true,}
},
shan:{
enable:['chooseToRespond'],
filterCard:{name:'sha'},
viewAs:{name:'shan'},
prompt:'将一张杀当闪打出',
ai:{respondShan:true}
}
}
给子技能改名 name:xxx
给子技能添加描述 description:xxx
指定子技能的标记文字 marktext:xxx


分割【全局技能】
给场上所有角色添加一个技能，有两种添加方式：
1、技能以“_”开头，只要开启了武将包全局技能就会启动
2、技能内定义“global”，当有人拥有了此技能时全局技能才会启动
举例：同疾
global:'tongji_disable',
subSkill:{
disable:{
mod:{
targetEnabled:function(card,player,target){
if(player.skills.contains('tongji')) return;
if(card.name=='sha'){
if(target.skills.contains('tongji')) return;
for(var i=0;i<game.players.length;i++){
if(game.players[i].skills.contains('tongji')){
if(game.players[i].hp<game.players[i].num('h')&&
get.distance(player,game.players[i],'attack')<=1){
return false;
}
}
}
}
}
}
}
}

