前言：
 (1)每写一个对象前，请确认是否有这一对象，没有的话请自行定义
 (2)检测bug用lib.node.debug()
 (3)具体触发内容看game.js内lib.element.event内的函数
 (4)本教程只教框架
1.触发：
 基本框架：
 trigger:{//触发时机
 global:'damageBefore',//例子，任意一名角色受到伤害前
 player:'damageBefore',//例子，玩家受到伤害前
 player:['damageBefore','recoverAfter'], //例子，玩家受到伤害前或玩家恢复体力后
 },
 priority:1,//同时机技能发动的优先度
 check:function(event,player){//告诉ai是否发动这个技能，返回true则发动此技能
 //无例子，因为不同时机evevt参数内的元素不同
 //要了解evevt参数内的元素，具体看game.js内lib.element.event内的函数 
 },
 frequent:true,//此技能是否可以被设置为自动发动（不询问）
 forced:true,//此技能是否能固定触发，true为固定触发（锁定技）
 popup:false,//player是否logSkill('此技能')
 direct:true,//相当于上面两行相加
 filter:function(event,player){//触发条件，返回true则发动此技能
 //无例子，因为不同时机evevt参数内的元素不同
 //要了解evevt参数内的元素，具体看game.js内lib.element.event内的函数
 },
 content:function(){//触发内容，分步执行会在后面讲到
 //参数trigger相当于filter:function(event,player){}内的event
 player.recover()//例子，玩家回复一点体力
 },
2.主动：
 基本框架：
 enable:"phaseUse",//出牌阶段使用
 usable:1,//每回合限制使用次数 
 //限制使用次数为变量时需写在filter:function(event,player){}内
 filter:function(event,player){//发动条件，返回true则可以发动此技能
 /*限制使用次数为变量时:
 if(player.getStat().skill['技能名']>=变量) return false;（变量可以写player.hp等）
 return true;
 */
 returnplayer.hp<2;//例子，玩家体力小于2时可以发动
 },
 filterCard:function(card){//选择的牌需要满足的条件
 return get.color(card)=='red';//例子，只能选择红色牌
 },
 position:'hej',//可以选择什么位置的牌
 //写入其中的字符：'h'：手牌区, 'e'：装备区, 'j'：判定区
 selectCard:2,//需要选择多少张牌才能发动
 //为-1时，选择所有牌
 //为数组时，这个数组就是选择牌数的区间
 /*为变量时（具体情况具体分析）:
 function(card){//例子，变量为玩家体力时
 var pl=get.owner(card);//pl定义为选择牌中的牌的拥有者，即“你”
 return [pl.hp,Infinity];//返回可选手牌数为你的体力值到无限
 },
 */
 check:function(card){//ai应该如何选牌，返回值为正则此牌可选，反之，此牌不可选
 /*在check中定义玩家（你）：
 var player=get.owner(card);
 */
 return6-get.value(card);//例子，ai可选价值小于6的卡牌
 },
 discard:false,//是否弃牌，若没有这一行，选择牌发动技能后，被选择的牌都要弃置
 prepare:'give',//不弃牌，准备用这些牌来干什么
 filterTarget:function(card,player,target){//选择的目标需要满足的条件
 return target!=player;//例子，目标不是玩家
 },
 selectTarget:1,//需要选择多少个目标才能发动
 //为-1时，选择全部人
 //为数组时，这个数组就是选择目标数的区间
 multitarget:true,//是否每个目标都结算一次，true为否
 targetprompt:[],//选择的目标武将牌上出现什么字，数组第几元素对应第几个目标
 line:true,//选择目标，发动技能后，玩家指向目标
 content:function(){//触发内容，分步执行会在后面讲到
 //当有filterCard时，有参数cards
 //当有filterTarget时，有参数target和targets
 player.recover()//例子，玩家回复一点体力
 },
3.视为：
（1）转化为一张卡牌：
 基本框架：
 name:'技能',//技能按钮名字，不写则默认为此技能的翻译
 enable:['phaseUse','chooseToRespond'],//发动视为技的时机，现在为出牌阶段和响应时
 viewAsFilter:function(player){//视为技按钮出现条件（即发动条件）
 return player.maxHp==4;//例子，玩家体力上限为4时可以发动
 },
 filterCard:{type:'basic'},//选择的牌需要满足什么条件
 /*上面那种是简便写法，多次判断的话还是要写回旧格式：
 filterCard:function(card){
 return get.color(card)=='black';//例子，只能选择黑色牌
 },
 */
 position:'hej',//可以选择什么位置的牌，和主动的position相同，不解释
 selectCard:2,//需要选择多少张牌才能发动，和主动的selectCard相同，不解释
 check:function(card){//ai应该如何选牌，和主动的check相同，不解释
 return1;//例子，ai可以所有所有手牌
 },
 viewAs:{name:'tao'},//目标卡牌
 prompt:'将一张基本牌当桃使用或打出',//选择时弹出的提示
 onuse:function(result,player){//使用视为牌时触发内容，result.cards是视为前的牌
 player.recover();//例子，使用视为牌时玩家回复一点体力
 },
（2）转化为多张卡牌：
 基本框架：
 enable:'phaseUse',//发动视为技的时机，现在为出牌阶段
 usable:1,//每回合限制使用次数，和主动的usable相同，不解释
 filter:function(event,player){//发动条件，和主动的filter相同，不解释
 returnplayer.countCards('h')>0//例子，玩家手牌数大于0时可以发动
 },
 chooseButton:{//选择按钮（牌）
 dialog:function(){//选择内容，一般为选择卡牌，有能力的可以写成选择其他东西
 returnui.create.dialog([['sha','shan'],'vcard']);//可以选择杀和闪（卡牌）
 },
 filter:function(button,player){//卡牌选择条件
 returnlib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
 //例子，你可以选择你可以使用的卡牌
 },
 check:function(button){//ai如何选牌
 /*定义player：
 var player=_status.event.player;
 */
 if(button.link=='sha')return 1;//ai选择杀
 },
 backup:function(links,player){//返回视为（1）部分
 return {//例子
 filterCard:false,//不用弃牌
 selectCard:0,//弃牌数为零
 viewAs:{name:links[0][2]},//视为你使用你选择的牌
 };
 },
 prompt:function(links,player){//选择时弹出的提示
 return'请选择'+get.translation(links[0][2])+'的目标';
 //例子，弹出提示：选择你选择的牌的目标
 },
 },
4.AI：
 (注：可接视为框架、主动框架或触发框架)
 (注2：这部分我不是很熟悉，所以只能简单地说一下)
 基本框架：
 ai:{
 save:true, //此技能可以用于自救
 respondTao:true, //此技能可以用于救人，一般用于视为技
 respondShan:true,//此技能可以响应闪，一般用于视为技
 respondSha:true,//此技能可以响应杀，一般用于视为技
 order:8, //ai发动技能的优先度
 /*比什么先：
 order:function(){//例子，比打出杀的优先度高1
 return get.order({name:'sha'})+1;
 },
 */
 expose:0.2, //发动技能是身份暴露度（0~1，相当于概率）
 maixie:true, //卖血技
 threaten:0.5,//嘲讽值
 result:{//主动技专属
 target:function(player,target){//ai如何选择目标
 //返回负，选敌人，返回正，选队友
 //没有返回值则不选
 //写了这个就不用写player:function(player){}了
 //因为player可以在这里进行判断
 If(player.hp>2)return -1;//例子，玩家体力大于2时，发动技能并选择敌人
 },
 player:function(player){//ai是否发动此技能，返回正，发动，否则不发动
 if(player.countCards('h')<2)return 1;//例子，玩家手牌数小于2时，发动 },
 },
 effect:{//影响ai出牌（例如什么时候不出杀）等
 //没有深入研究，不讲
 },
 skillTagFilter:function(player){//视为技专属，ai什么时候可以发动视为技
 return player.countCards('h',{type:'basic'})>0;
 //例子，手牌中有基本牌时，ai发动技能
 },
 },