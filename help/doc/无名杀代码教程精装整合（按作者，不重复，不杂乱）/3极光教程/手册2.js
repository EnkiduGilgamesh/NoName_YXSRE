5.标记：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 marktext:"状",//标记显示文本，一般为一个字
 locked:true,//是否实时更新
 intro:{
 content:'cards',//标记显示内容，为cards时显示标记内的牌
 /*标记显示内容为文本写法：
 content:function(storage,player,skill){//返回值（文本）即为标记显示内容
 return '当前有'+storage+'个标记'//标记显示内容为当前有多少个标记
 },*/
 },
 mark:true,//获得技能时是否显示此标记，若为false，可以用markSkill()来显示此标记
6.获得技能和失去技能时：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 init:function(player){//获得技能时发动
 player.gainMaxHp();//例子，获得此技能时，玩家增加一点体力上限
 },
 onremove:function(player){//失去技能时发动
 player.loseMaxHp();//例子，失去此技能时，玩家失去一点体力上限
 },
7.技能组与子技能：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 group:["mashu"],//技能组，拥有这个技能时相当于拥有技能组内的技能
 subSkill:{//子技能，你不会拥有写在这里面的技能，可以调用，可以用技能组联系起来
 "子技能":{//子技能名字:“主技能_子技能”，翻译为主技能翻译
 //技能内容
 },
 },
8.mod类锁定技：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 mod:{
 globalFrom:function(from,to,distance){
 returndistance-1; //例子，进攻距离+1
 },//from：玩家；to：目标；distance：进攻距离
 globalTo:function(from,to,distance){
 returndistance+1; //例子，防御距离+1
 },//to：玩家；from：目标；distance：防御距离
 maxHandcard:function(player,num){
 return num+1; //例子，手牌上限+1
 },// player：玩家；num：手牌上限
 targetEnabled:function(card,player,target){
 if(player.sex=='male')return false; //例子，你不能成为男性角色的牌的目标
 },//card：牌；player：使用牌的角色；target：玩家
 selectTarget:function(card,player,range){
 if(card.name=='sha')range[1]+=1; //例子，你的杀可以额外选择一名角色
 },//card：牌；player：玩家；range[1]：目标个数; range：不清楚
 targetInRange:function(card,player,target){
 if(card.name=='sha')return true;//例子，你使用的杀可以指定所有角色
 },//card：牌；player：玩家；target：目标
 cardDiscardable:function(card,player){
 if(card.name=='sha')return false; //例子，你无法弃置杀
 },//card：牌；player：玩家
 cardEnabled:function(card,player){//要与cardUsable一起使用
 if(get.suit(card)=='heart')return false;//例子：你无法使用红桃牌
 },//card：牌；player：玩家
 cardUsable:function(card,player){//要与cardEnabled一起使用
 if(get.suit(card)=='heart')return false; //例子：你无法使用红桃牌
 },//card：牌；player：玩家
 cardRespondable:function(card,player){
 if(get.suit(card)=='heart')return false; //例子：你无法使用红桃牌来响应
 },//card：牌；player：玩家
 cardSavable:function(card,player){
 if(get.suit(card)=='heart')return false; //例子：你无法使用红桃牌来救人
 },//card：牌；player：玩家
 /*后4种卡牌禁言类mod技与视为技冲突的解决方法：
 判定内加入_status.event.skill!='冲突视为技'
 意思为你无法使用牌，除非使用这个视为技视为无法使用的牌
 */
 },
9.配音的添加：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 //数字为配音数量，从1开始
 //配音命名方法：技能名+这是第几个配音
 audio:2,//使用无名杀目录\audio\skill内的配音
 audio:"ext:扩展名:1",//使用无名杀录目\extension \扩展名内的配音
10.主公技：
(注：可接视为框架、主动框架或触发框架)
 基本框架：
 zhuSkill:true,//将这个技能设置为主公技
11.全局技能：
(注：可接视为框架、主动框架或触发框架)
(注：无论是否拥有此技能，此技能都为全局技能写法：技能名前+_)
 基本框架：
 global:'技能',你用有此技能时，所有角色拥有技能（global的值）
12.触发内容分步：
(注：写在触发内容中)
 基本框架：
 'step0'
 //此步骤触发的内容
 'step1'
 //此步骤触发的内容
与步骤有关的函数：
(1)evevt.finish() 触发后步骤不再往下走，终止于evevt.finish()所在步骤
(2)event.goto(num) num为步骤数，返回第几步
(3)event.redo() 重新执行这个步骤
注意：
(1)引号要相同，不要'step 0' "step 1"
(2)使用与步骤有关的函数，这个步骤依旧会进行到底
(3)var定义的东西不能在步骤中传递，可以储存到evevt中
(4)函数的result元素可以在相邻的步骤中传递
(5)步骤必须从0开始
(6)step和数字之间有一个空格，word文档中不易看出来
例子：
 "step0"//步骤0
 player.chooseTarget('请选择一名角色',function(card,player,target){
 returnplayer!=target;
 }).ai=function(target){
 return get.attitude(player,target);//告诉ai选择队友
 };//选择一名其他角色
 "step1"//步骤1
 if(result.bool){//如果有选择角色
 event.target=result.targets[0];//将选择的角色储存到event.target中
 player.chooseCard('请选择给予牌',2,'h').set('ai',function(card){
 return1;//告诉ai可以选择所有手牌
 });//选择两张手牌
 }else{//否则
 event.finish();//步骤将于这里终止
 };
 "step2"//步骤2
 if(result.bool){//如果有选择手牌
 player.$give(result.cards.length,event.target);
 event.target.gain(result.cards,player);//被选择的角色获得这两张牌
 };