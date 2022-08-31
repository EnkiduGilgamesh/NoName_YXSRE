作者：新萌
作者按：本教程为什么叫新萌的教程呢？不是写给新萌的，而是因为作者是新萌。

mod:{
	//注意：以下的“你”皆指的是技能的拥有者，以下的now参数初始值为'unchanged'//
	//注意：本教程未收录扩展的mod技能//
	/*具体参考game.checkMod()函数，机制：对某个角色所有有该mod的技能，依次判断结果，上一个技能mod函数判断后的结果会成为下一个技能mod函数的最后一个参数*/
	
	aiOrder:function(player,card,num){
		/*更改AI使用卡的顺序(player为你，card为要判断的牌，num为上次判断后的order值)
		参考技能【渐营】【奋音】【联翩】*/
	},
	
	aiValue:function(player,card,num){
		/*更改AI对牌回合内使用价值的判断(player为你，card为要改变value的卡，num为上次判断后的value值)
		参考技能【立牧】【新服缮甲】*/
	},
	
	attackFrom:function(from,to,distance){
		/*更改你与别的角色的攻击距离(from为你，to为其他角色，distance为上次判断后你与别的角色的攻击距离)
		参考技能【烈弓】【焚天】*/
	},
	
	attackTo:function(from,to,distance){
		/*更改别的角色与你的攻击距离(from为其他角色，to为你，distance为上次判断后别的角色与你的攻击距离)
		参考技能【诏缚】*/
	},
	
	globalFrom:function(from,to,distance){
		/*更改你与别的角色的距离，相当于-1马(from为你，to为其他角色，distance为上次判断后你与别的角色的距离)
		参考技能【义从】【奇谋】【屯田】【奋迅】【撷芳】*/
	},
	
	globalTo:function(from,to,distance){
		/*更改别的角色与你的距离，相当于+1马(from为其他角色，to为你，distance为上次判断后别的角色与你的距离)
		参考技能【义从】【避乱】【飞影】*/
	},
	
	maxHandcard:function(player,num){
		/*更改你的手牌上限(player为你,num为上次判断后的手牌上限)
		参考技能【血裔】【绝境】【约俭】【界英姿】【界不屈】*/
	},
	
	ignoredHandcard:function(card,player,bool){
		/*你的某种手牌不计入手牌上限(card为某张手牌,player为你,bool为上次判断后的结果)
		参考技能【洛神】【黠慧】【羽化】【腹鳞】【界陷阵】*/
	},
	
	canBeGained:function(card,player,target,name,now){
		/*你的卡是否能被获得，通常用于player.gainPlayerCard函数的判断(card为要判断的牌，player为获得事件的来源，target为你，
		name为当前获得事件的parent事件的名字，例如对方使用顺手牵羊你的牌，这里的name就指的是'shunshou'；now为上次判断后的结果)
		参考技能【国战·聚宝】*/
	},
	
	canBeDiscarded:function(card,player,target,name,now){
		/*你的卡是否能被弃置，通常用于player.discardPlayerCard函数的判断(card为要判断的牌，player为弃置事件的来源，target为你，
		name为当前弃置事件的parent事件的名字，例如对方使用过河拆桥拆你的牌，这里的name就指的是'guohe'；now为上次判断后的结果)
		参考技能【奇才】【玲珑】*/
	},
	
	cardDiscardable:function(card,player,name,now){
		/*你能否弃置某张卡，通常用于弃牌阶段或player.chooseToDiscard函数(card为要判断的牌，player为你
		name为当前弃置事件的parent事件的名字，例如弃牌阶段准备弃牌，这里的name就指的是'phaseDiscard'；now为上次判断后的结果)
		参考技能【界陷阵】【界洛神】【黠慧】【羽化】【鸡肋】*/
	},
	
	cardEnabled2:function(card,player,now){
		/*你能否使用或打出某牌，注：该mod优先级高于cardEnabled，cardRespondable和cardSavable
		（card为要判断的牌，player为你，now为上次判断后的结果）；
		参考技能【雄乱】【奋钺】【黠慧】【复难】【潜袭】*/
	},
	
	cardEnabled:function(card,player,now){
		/*你能否使用某牌，注：若没有牌经过cardEnabled2的判断这个
		（card为要判断的牌，player为你，now为上次判断后的结果）；
		参考技能【大喝】【陷阵】【禁酒】【往烈】【完杀】*/
	},
	
	cardRespondable:function(card,player,now){
		/*你能否打出某牌，注：若没有牌经过cardEnabled2的判断才判断这个
		（card为要判断的牌，player为你，now为上次判断后的结果）；
		参考技能【老义绝】【大喝】【鸡肋】【醉乡】【旧魅步】*/
	},
	
	cardSavable:function(card,player,now){
		/*某角色濒死时,你能否对其使用某张有savable标签的牌（如桃，酒），注：若没有牌经过cardEnabled2的判断才判断这个
		(card为要判断的牌,player为你,now为上次判断后的结果)
		参考技能【禁酒】【完杀】【内伐】【醉乡】【鏖战】*/
	},
	
	cardUsable:function(card,player,num){
		/*出牌阶段，你还能使用某种牌的数量(技能转化的也包括);(card为要判断的牌，player为你，num为上次判断还能使用该牌的数量)
		参考技能【龙怒·阴】【劫营】【咆哮】【诈降】【绝堰】*/*/
	},
	
	cardname:function(card,player,name){
		/*通常用于锁定技中某种牌视为该牌名(card为要判断的牌，player为你，name为上次判断后的牌的名字)
		参考技能【龙怒】【武神】【禁酒】【矢志】*/
	},
	
	cardnature:function(card,player,nature){
		/*通常用于锁定技中某种牌的属性视为另一种属性(card为要判断的牌，player为你，nature为上次判断后的牌的属性)
		参考技能【龙怒】【武神】*/
	},
	
	suit:function(card,suit){
		/*通常用于锁定技中某种牌的花色视为另一种花色(card为要判断的牌，suit为上次判断后的牌的花色)参考技能【红颜】*/
	},
	
	judge:function(player,result){
		/*更改判定结果(player为你,result为上次判断后的判定结果)参考技能【思蜀】*/
	},
	
	playerEnabled:function(card,player,target,now){
		/*你能否以某角色为目标使用某卡(card为要判断的牌，player为你，target为牌的目标，now为上次判断后的结果)
		参考技能【掣政】【雉盗】【雄乱】【陷阵】【征辟】*/
	},
	
	targetEnabled:function(card,player,target,now){
		/*你能否成为某牌的目标(card为要判断的牌，player为牌的来源，target为你，now为上次判断后的结果)
		参考技能【父荫】【帷幕】【缜略】【谦节】【拒战】*/
	},
	
	selectTarget:function(card,player,range){
		/*更改牌能指定的目标数量的范围(card为要判断的牌，player为你,range为上次判断后的牌的目标数量的区间)
		注：range初始值为card里的selectTarget属性转化的有两个元素的数组如铁索连环的range就是[1,2]，
		range[0]为最少能选择的目标数，range[1]为最多能选择的目标数
		参考技能【界连环】【乱战】【天义】【奔袭】*/
	},
	
	targetInRange:function(card,player,target,now){
		/*你准备使用某牌时，其他角色是否处于该牌的使用范围内，通常用于使用牌不受距离限制
		(card为要判断的牌，player为你，target为牌的目标，now为上次判断后的结果)
		参考技能【武神】【奇才】【龙怒·阳】【狂才】【魅步】*/
	},
	
	wuxieEnabled:function(card,player,target,current,now){
		/*你能否使用无懈。(card为现在正在使用的牌,player为牌的来源,target为牌的目标,current为你,now为上次判断后的结果)
		参考技能：无。PS：由于现在有了event.nowuxie和event.directHit，这个mod技都没用了*/
	},
	
	wuxieRespondable:function(card,player,target,current,now){
		/*你的牌能否被无懈。(card为现在正在使用的牌,player为你,target为牌的目标,current为场上角色,now为上次判断后的结果)
		参考技能【新战意·锦囊】【界奔袭】【探虎】*/
	},
	
	wuxieJudgeEnabled:function(card,player,current,now){
		/*延时锦囊判定时，你能否使用无懈。(card为正在结算的延时锦囊牌,player为正在判定的角色,current为你,now为上次判断后的结果)
		参考技能：无*/
	},
	
	wuxieJudgeRespondable:function(card,player,current,now){
		/*你作为延时锦囊的目标进行判定时，场上角色能否使用无懈。(card为正在结算的延时锦囊牌,player为你,current为场上角色
		,now为上次判断后的结果)参考技能：无*/
	},
	
	chessMove:function(player,move){
		/*战棋模式和塔防模式。更改回合内的移动距离(player为你,move为上次判断后回合内的移动距离)
		参考技能：【战棋·风行】【战棋·无影】*/
	},
},
