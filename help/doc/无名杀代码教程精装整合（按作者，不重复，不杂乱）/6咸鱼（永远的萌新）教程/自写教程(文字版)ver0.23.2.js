						"//自写教程\\"
										"作者:永远的萌新"

		"第一章"		

"01"
"//最简单的主动技"
enable:"phaseUse",//出牌阶段发动
content:function(){//内容:
	player.draw();//你摸一张牌
},
"//最简单的触发技"
trigger:{//时机:
	player:"phaseBegin",//你的回合开始时
},
content:function(){//内容:
	player.draw();//你可以摸一张牌
},
"//最简单的视为技"
enable:"phaseUse",//出牌阶段发动
selectCard:1,//把一张
filterCard:true,//任意
position:"h",//手牌
viewAs:{//视为
	name:"wuzhong",//无中生有
},
viewAsFilter:function(player){//视为技的限制条件
	return player.countCards("h");//你有手牌时才能发动
},



"02"
"//最简单的限定技"
unique:true,//特殊技(限定技和觉醒技都是)
limited:true,//限定技
mark:true,//标记
intro:{//标记介绍
	content:"limited",//内容:未发动
},
skillAnimation:true,//有技能动画
init:function(player){//初始化
	player.storage.xx=false;//技能未发动(xx为技能名)
},
filter:function(event,player){//发动限制条件
	return player.storage.xx==false;//你没发动过这个技能
},
enable:"phaseUse",//出牌阶段发动
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.storage.xx=true;//技能发动过
	player.awakenSkill("xx");//技能文本变灰(失去技能，标记消失)
	"step 1"//第1步
	player.draw();//你摸一张牌
},



"03"
"//稍复杂的主动技"
enable:"phaseUse",//出牌阶段发动
usable:1,//每回合一次(因为回合外没有你的出牌阶段，实际为出牌阶段限一次)
selectCard:1,//弃置一张
filterCard:true,//任意
position:"h",//手牌
selectTarget:1,//选择一名
filterTarget:true,//任意目标
filter:function(event,player){//发动限制条件
	return player.countCards("h");//你有手牌时才能发动
},
content:function(){//内容:
	target.draw();//目标摸一张牌
},



"04"
"//稍复杂的触发技"
forced:true,//锁定技
usable:1,//每回合一次
trigger:{//时机:
	player:"damageEnd",//你受到伤害后
},
filter:function(event,player){//发动限制条件
	return player.countCards("h");//你有手牌时才能发动
},
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.chooseTarget();//你可以选择一个目标
	"step 1"//第1步
	if(result.bool){//如果选了目标(没取消)
		result.targets[0].draw();//(选的第一个)目标摸一张牌
	}
	else player.draw();//否则，你摸一张牌
},



"05"
"//比较复杂的主动技"
enable:"phaseUse",//出牌阶段发动
usable:1,//每回合一次(因为回合外没有你的出牌阶段，实际为出牌阶段限一次)
selectCard:[1,Infinity],//弃置一张以上
position:"h",//手牌中的
filterCard:function(card){//牌的限制条件
	return get.type(card)=="basic";//基本牌
},
selectTarget:1,//选择一名
filterTarget:function(card,player,target){//目标的限制条件
	return target.hp<player.hp;//体力比你少的目标
},
filter:function(event,player){//发动限制条件
	if(!player.countCards("h")){//如果你没有手牌
		return false;//不能发动
	}
	var tj=false;//定义变量tj，初始值为false
	tj=game.hasPlayer(function(current){//tj赋值为:场上是否有角色
		return current.hp<player.hp;//体力比你少
	});
	if(tj){//如果有
		return true;//可以发动
	}
},
content:function(){//内容:
	var num=cards.length;//定义变量num为弃置的牌的数量
	target.draw(num);//目标摸这么多牌
},



"06"
"//各种函数括号里的参数"
init:function(player,skill){},//获得技能时
onremove:function(player,skill){},//失去技能时
prompt:function(event){},//文字提示
logTarget:function(event,player){},//记录技能目标
targetprompt:function(target){},//选择目标时每个目标显示的文本
prepare:function(cards,player,targets){},//主动技的准备工作
filterCard:function(card,player){},//牌的限制条件
filterTarget:function(card,player,target){},//目标的限制条件
filter:function(event,player){},//发动限制条件
check:function(event,player){},//ai发动的限制条件(触发技)
check:function(card){},//ai选牌的限制条件(主动技)
check:function(button){},//ai选按钮的限制条件(视为技，chooseButton里，少见)
content:function(){},//内容
ai:{//技能ai
	order:function(){},//发动顺序优先级
	save:true,//可以求桃时发动
	skillTagFilter:function(player,tag,arg){},//技能标签的生效限制条件
	result:{//收益(只有主动技可以写)
		player:function(player,target){},//技能对玩家的收益
		target:function(player,target){},//技能对目标的收益
	},
	effect:{//效果影响
		player:function(card,player,target){},//牌对你的影响
		target:function(card,player,target){},
		//一名角色以你为牌的目标时对你的影响
	},
},



"07"
"//各种函数括号里的参数②"
mark:true,//一直有标记
intro:{//标记介绍
	content:function(storage,player,skill){},//标记介绍内容
	mark:function(dialog,content,player){},//内容补充
},
onChooseToUse:function(event){},//需要使用牌时的触发内容
onCompare:function(player){},//拼点时的触发内容
chooseButton:{//选择按钮
	dialog:function(event,player){},//按钮内容
	check:function(button){},//ai选按钮的限制条件
	filter:function(button,player){},//按钮的限制条件
	backup:function(links,player){//之后发动的内容
		return{
			filterCard:function(card){},//牌的限制条件
			viewAs:{},//视为
			viewAsFilter:function(player){},//视为技的限制条件
			onuse:function(result,player){},//视为技为使用时的触发内容
			precontent:function(){},//技能发动前的内容
		};
	},
	prompt:function(links,player){},//选按钮后的提示
},
"//另外补充一些常见函数的参数"
player.chooseTarget(function(card,player,target){//请选择一个目标
	return player!=target;//限制条件:不能选你
}).set("ai",function(target){//ai选目标的限制条件
	var player=get.player();//定义变量player为选目标的发起者(不懂可以先不写)
	return get.attitude(player,target);//选友军
});
player.chooseControl("回血","摸牌",true).set(//选择摸牌回血
"ai",function(event,player){});
game.hasPlayer(function(current){});//场上有角色怎么怎么样



"08"
"//content:function(){},的分步写法"
"如果技能处理的两步可以同时处理，可并为一步，否则需要分步"
"(例如:回血摸牌可以并为一步，选目标并弃置目标手牌就不能并为一步)"
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	player.chooseTarget();//选目标
	"step 1"//第1步
	if(result.bool){//如果上一步没取消
		result.targets[0].draw();//目标摸一张牌
		if(result.targets[0].countCards("h")>3){//如果目标手牌数大于3
			event.finish();//这一步结束后，整个事件结束
		}
		if(result.targets[0].countCards("h")<2){//如果目标手牌数小于2
			event.goto(0);//这一步结束后，返回第0步
		}
	}
	"step 2"//第2步
	player.draw();//你摸一张牌
	if(player.countCards("h")<2){//如果你的手牌数小于2
		event.redo();//这一步结束后，再进行这一步
	}
},



"09"
"//全局变量"
"用var 定义的变量是局部变量，只能在此函数或此步使用，而有的时候会需要这个变量能跨step，或者在整局游戏有效，多个技能中"
"有效，这就需要全局变量登场了。"
"//第①种，event.xx(只在此技能内有效)"
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	player.chooseTarget(true);//必须选一个目标
	"step 1"//第1步
	event.targets=result.targets;//用event.targets记录选的目标
	"step 2"//第2步
	event.targets[0].draw(2);//(选的第1个)目标摸2张牌
	"step 3"//第3步
	event.targets[0].damage();//(选的第1个)目标受到一点伤害
},
"//第②种，标记，player.storage.xx(整局游戏有效)"
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	player.storage.num=player.hp;//用player.storage.num记录你的体力
	"step 1"//第1步
	player.draw(player.storage.num);//你摸你体力值张牌
},
"//第③种，不用var 定义的变量是全局变量(只要不重启，一直有效)"
//注意，这种全局变量最好不要出现在技能里面
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	cards=player.getCards("h");//用全局变量cards记录你的手牌
	"step 1"//第1步
	player.discard(cards);//你弃置所有手牌
},



"10"
"//判定"
player.judge(名字，函数);
"第1个参数为判定时显示的文字，默认为技能名"
event.judgestr="闪电";//用event.judgestr记录"闪电"
player.judge(event.judgestr);//你进行名字为闪电的判定
//注意，event.judgestr是judge()里面的变量，不能用其他变量记录
"第2个参数为判定时判断结果的函数"
"返回值大于0时，你头像上出现“洗具”，返回值小于0时，你头像上出现“杯具”。"
//注意:这个参数是用来教ai改判的
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	player.judge(function(card){//你进行一次判定
		return card.color=="red"?1:-1;//红色返回1，否则返回-1
	});
},
"判定的result比较多，还以上面的为例，假如判定牌是黑桃6青釭剑"
result.card=="qinggang";//result.card为黑桃6青釭剑
result.suit=="spade";//result.suit为黑桃
result.color=="black";//result.color为黑色
result.number==6;//result.number为6
result.judge==-1;//result.judge为-1
result.bool==false;//result.bool为false
/*注意:
当result.judge大于0时，result.bool为true
当result.judge等于0时，result.bool为null*/
"如果判定的结果很多(例如每种花色一个不同效果)，可以用switch(){}"
content:function(){//内容:
	"step 0"//必须从0开始，引号可以是单引号，但是整个技能里面不能变
	player.judge();//你进行一次判定
	"step 1"//第1步
	switch(result.suit){//根据判定牌的花色
		case "spade":player.loseHp();break;//黑桃:你失去一点体力
		case "heart":player.draw();break;//红桃:你摸一张牌
		case "club":player.damage();break;//梅花:你受到一点伤害
		default:player.insertPhase();//其他情况:你进行一个额外回合
	}
},



"11"
"//选目标"
"这里只介绍触发技的选目标写法，主动技的请看主动技框架"
player.chooseTarget(提示,数量,强制,条件,ai);
"第1个参数为选目标时的提示，默认为“请选择#个目标”"
player.chooseTarget("请选择一个目标");//选择1个目标，提示为“请选择一个目标”
"第2个参数为选目标的个数，默认为1"
player.chooseTarget(2);//选2个目标
player.chooseTarget([1,2]);//选1到2个目标
player.chooseTarget([1,Infinity]);//选1个以上目标
"第3个参数为强制，默认为false"
player.chooseTarget(true);//必须选1个目标
"第4个参数为限制条件，默认没有条件"
player.chooseTarget(function(card,player,target){//选1个目标
	return player!=target;//限制条件:你不是目标
});
"第5个参数为ai，默认第2个函数参数是ai，如果怕混淆，用set()"
player.chooseTarget(function(card,player,target){//选1个目标
	return player!=target;//限制条件:你不是目标
},function(target){//ai:
	var player=get.player();//定义变量player为选目标的发起者(不懂可以先不写)
	return -get.attitude(player,target);//选敌人
});
player.chooseTarget().set("ai",function(target){//设置ai:
	return get.attitude(player,target);//选友军
});
"选目标的result"
result.bool//是否选了目标，选了为true，没选为false
result.targets//选择的目标，为数组，result.targets[0]为选的第1个目标
"还是拿之前的作为例子"
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.chooseTarget();//你可以选择一个目标
	"step 1"//第1步
	if(result.bool){//如果选了目标(没取消)
		result.targets[0].draw();//(选的第一个)目标摸一张牌
	}
	else player.draw();//否则，你摸一张牌
},



"12"
"//比较复杂的视为技"
"出牌阶段，你可以将一张手牌当杀或顺手牵羊或过河拆桥使用"
enable:"phaseUse",//出牌阶段发动
chooseButton:{//选择按钮
	dialog:function(){//显示
		return ui.create.dialog([["sha","shunshou","guohe"],"vcard"]);
		//显示"杀"，"顺手牵羊"，"过河拆桥"的虚拟按钮
	},
	filter:function(button,player){//选按钮的限制条件
		return lib.filter.filterCard({name:button.link[2]},player,_status.event.parent);
		//你能选择现在能使用的牌的虚拟按钮
	},
	backup:function(links,player){//视为技部分
		return{
			selectCard:1,//把一张
			filterCard:true,//任意(手牌)
			viewAs:{//视为
				name:links[0][2],//名字和选择按钮的牌相同的牌
			},
		};
	},
	prompt:function(links,player){//提示:
		return "请选择"+get.translation(links[0][2])+"的目标";
		//请选择+(牌名)+的目标
	},
},



"13"
"//标记视为技(例子:邓艾的\"急袭\")"
enable:"phaseUse",//出牌阶段发动
filter:function(event,player){//发动限制条件
	return player.storage.tuntian.length>0;//你屯的田没用完
},
chooseButton:{//选择按钮
	dialog:function(){//显示
		return ui.create.dialog("急袭",player.storage.tuntian,"hidden");
		//显示"急袭"和屯田的牌
	},
	backup:function(links,player){//视为技部分
		return{
			selectCard:-1,//把所有(手牌)
			filterCard:function(){return false},//牌限制条件:都不符合
			viewAs:{//视为
				name:"shunshou",//顺手牵羊
			},
			cards:links,//定义cards为选的按钮
			onuse:function(result,player){//视为技使用牌时执行的内容
				result.cards=lib.skill[result.skill].cards;
				//视为前的牌变为这个视为技的cards
				var card=result.cards[0];//定义变量card为视为前的牌
				player.storage.tuntian.remove(card);//移除此"田"
				player.syncStorage("tuntian");//同步"屯田"的标记
			},
		};
	},
	prompt:function(links,player){//提示:
		return "选择急袭的目标";//选择急袭的目标
	},
},



"14"
"拼点"
player.chooseToCompare(目标);
"首先得有能拼点的目标"
filter:function(event,player){//发动限制条件
	return game.hasPlayer(function(current){//场上有角色
		return player.canCompare(current);//你能和他拼点
	});
},
"拼点的result"
//假如player的拼点牌为青釭剑，目标的为古锭刀
result.bool==true;//6>1
result.tie==false;//不是平局
result.player  //你的拼点牌
result.target  //目标的拼点牌
result.num1==6   //你的点数为6
result.num2==1   //目标的点数为1
"改变拼点用的牌"
onCompare:function(player){//拼点时拼点牌为
	return game.cardsGotoSpecial(get.cards()).cards;//牌堆顶一张牌
},//摘自秦宓的"天辩"
"其他少见的操作"
player.chooseToCompareMultiple(目标数组);//同时和多人拼点
//player.chooseToCompareMultiple的目标拼点牌为result.targets
player.chooseToCompare(targets).callback=lib.skill.gushe.callback;
//摘自王朗的"鼓舌"
callback:function(){
	"step 0"
	//和content的写法一样，event.num1为player的点数，event.num2为目标的点数
},
ai:{
	noCompareTarget:true,//不能成为拼点目标(技能标签，告诉ai的)
},



"15"
"//标记(用来记录东西，非标记技能也有用处)"
"这里只简单介绍，后面还会有更详细的内容"
mark:true,//获得这个技能时markSkill，可以用unmarkSkill不显示标记
marktext:"暴",//标记名字为"暴"，可以填1个汉字或2个英文字符(因为地方不够)
intro:{//标记介绍
	name:"暴怒",//标记说明的名字，默认为技能名
	content:"mark",//内容:你有(数)个标记
},
init:function(player){//初始化(好习惯)，获得这个技能时执行的内容
	player.storage.baonu=2;//初始为2个暴怒标记
	player.syncStorage("baonu");//同步标记(每当标记变动都要写这句)
	//注:标记名必须和技能名相同
},
onremove:true,//失去这个技能时销毁标记
"其他的content样式"
content:"card",//一张牌
content:"cards",//多张牌
content:"limited",//限定技，觉醒技专用
content:"time",//剩余发动次数
content:"turn",//剩余回合数
content:"cardCount",//牌数
content:"info",//技能描述
content:"character",//武将牌
content:function(storage,player,skill){},//自定义
"相关函数"
player.markSkill(技能名);//显示该技能的标记
player.unmarkSkill(技能名);//不显示该技能的标记
player.syncStorage(技能名);//同步该技能标记
player.updateMarks();//同步所有技能的标记
player.hasMark(技能名);//是否有该技能的标记
player.countMark(技能名);//有多少该技能的标记(若标记为数组，返回数组长度)
player.addMark(技能名,数量,log);//添加标记(只适用于标记是数字);
player.removeMark(技能名,数量,log);//移除标记(只适用于标记是数字);



"16"
"//比较简单的武将牌上牌技能"
/*摘自原创武将，詹台洛的"排兵"
出牌阶段，你可将任意张手牌放武将牌上称为"兵"
*/
mark:true,//获得这个技能时markSkill，可以用unmarkSkill不显示标记
marktext:"兵",//标记名字为"兵"，可以填1个汉字或2个英文字符(因为地方不够)
intro:{//标记介绍
	content:"cards",//内容:武将牌上的牌
},
init:function(player){//初始化(好习惯)，获得这个技能时执行的内容
	player.storage.paibing=[];//初始没有牌
},
filter:function(event,player){//发动限制条件
	return player.countCards("h");//你有手牌时才能发动
},
enable:"phaseUse",//出牌阶段发动
selectCard:[1,Infinity],//选择一张以上
filterCard:true,//任意
position:"h",//手牌
discard:false,//不弃置
prepare:"throw",//准备内容:播放throw的动画
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.storage.paibing.addArray(cards);//将选的牌放武将牌上
	player.syncStorage("paibing");//同步"排兵"标记(每当标记变动都要写这句)
},



"17"
"//比较简单的标记技能"
/*节选自原创武将，一方通行的"矢控"
锁定技:游戏开始时你获得2个"障"，你受到伤害前移除1个"障"取消伤害。。。
*/
marktext:"障",//标记名字为"障"，可以填1个汉字或2个英文字符(因为地方不够)
group:"shikong_dm",//拥有子技能"dm"
intro:{//标记介绍
	content:"你拥有#个障",//内容:你拥有(标记数量)个障
},
init:function(player){//初始化(好习惯)，获得这个技能时执行的内容
	player.storage.shikong=2;//初始获得2个"障"
	player.markSkill("shikong");//显示标记
	player.syncStorage("shikong");//同步标记(每当标记变动都要写这句)
	game.log(player,"获得了2个“障”");//游戏记录:玩家获得了2个"障"
},
subSkill:{//子技能
	dm:{//子技能名字为"dm"
		trigger:{//时机:
			player:"damageBefore",//你受到伤害前
		},
		forced:true,//锁定技
		filter:function(event,player){//发动限制条件
			return player.storage.shikong>0;//你有"障"
		},
		content:function(){//内容:
			"step 0"//第0步(必须从0开始)
			player.storage.shikong--;//"障"-1
			player.syncStorage("shikong");//同步标记(每当标记变动都要写这句)
			game.log(player,"移除了1个“障”");//游戏记录:玩家移除了1个"障"
			if(player.storage.shikong==0){//如果没有"障"
				player.unmarkSkill("shikong");//不显示标记
			}
		},
	},
},



"18"
"//技能组与子技能"
group:["quanji","zili"],//拥有技能"权计"，"自立"
//注:发动技能时显示该技能名(权计，自立)
group:["longdan_sha","longdan_shan"],//拥有"龙胆"的2个子技能
//发动技能时显示"龙胆"
/*特别注意:不能group一个未定义技能，或含有group的技能*/
"假设技能名为jn"
subSkill:{//子技能
	sha:{//子技能名字为"sha"
		sub:true,//是子技能
	},
	"1":{//子技能名字为"1"
		sub:true,//是子技能
		content:function(){//内容:
			player.draw();//你摸一张牌
		},
	},
},
enable:"phaseUse",//出牌阶段发动
content:function(){//内容:
	player.addTempSkill("jn_sha");//你获得子技能"杀"直至该回合结束
	player.useSkill("jn_1");//你发动子技能"1"
},
/*注:
1.sub:true,如果不写会自动补上
2.自己group的子技能的mark:true,不会显示标记，可以用markSkill显示
3.子技能和主技能共用技能名，但不共用技能描述
4.多个子技能可以有不同配音
5.如果主技能不是锁定技，子技能会被界马超封，即使子技能是锁定技
*/



"19"
"//常见trigger"
//任何时机都能通过添加"Before","Begin","End","After"获得不同时间点的新时机
//任何事件函数都有时机(例如:draw,recover,chooseToDiscard,changeHp)
//任何牌都有时机(例如:taoAfter,"juedouAfter","huogongAfter")
//注1:init其实是global:"gameStart"和player:"enterGame",时机
//注2:没有changeHujia这个时机，但有changeHujiaBegin等时机(因为没trigger)
//注3:changeHp没有changeHpBegin等时机(因为false了)
global:"gameDrawAfter",//游戏发牌后
global:"roundStart",//一轮开始时
player:"phaseBegin",//回合开始时(已被"phaseZhunbeiBegin"取代)
player:"phaseEnd",//回合结束时(已被"phaseJieshuBegin"取代)
player:"phaseJudgeEnd",//判定阶段结束时
player:"phaseDrawEnd",//摸牌阶段结束时
player:"phaseUseEnd",//出牌阶段结束时
player:"phaseDiscardEnd",//弃牌判定阶段结束时
player:"damageEnd",//受到伤害结束时
source:"damageEnd",//造成伤害结束时
player:"shaBegin",//你使用杀结算开始时
target:"shaBegin",//你成为杀的目标结算开始时
player:"dyingBegin",//你的濒死阶段开始时
player:"dieBegin",//确定死亡开始时
player:"useCardEnd",//使用牌结束时
player:"useCardToEnd",//你使用牌对目标结算结束时
player:"chooseToRespondBegin",//需要响应牌开始时
player:"chooseToUseBegin",//需要使用牌开始时
player:"chooseToCompareAfter",//拼点后
player:"judge",//判定时
player:"chooseCard",//选牌时
player:"respond",//响应时
player:"loseEnd",//失去牌结束时
player:"gainEnd",//获得牌结束时
player:"linkAfter",//连环后
player:"turnOverAfter",//翻面后



"20"
"//数组操作"
//数组是用"[]"括起来的，元素用","隔开的一种数据类型。可以存放多个数据"
var list=[];//定义变量list为空数组
var list=[true,"yingzi"];//定义变量list为数组[true,"yingzi"]
var list=[0,1,3,2];//定义变量list为数组[0,1,3,2]
"判断是不是数组"
if(Array.isArray(list))game.log("变量list是数组");
"数组的属性"
list.length  //数组的长度，即元素个数
list[0]      //数组的第1个元素(数组的下标从0开始)
list[1]      //数组的第2个元素(下标为1)
"数组的函数"  //注:这里的函数其实是方法，只是便于理解
//var list=[0,1,3,2];
"1.//javascript自带的"
数组1.concat(数组2);//将数组1和数组2合并成一个数组
"例:"list.concat([0,1]);//返回[0,1,3,2,0,1]
数组.includes(数值);//判断数组中是否含有这个数值
"例:"list.includes(1);//判断list中是否有1这个元素，返回true
数组.indexOf(数值,起始下标);//返回数组中这个数值最早出现的下标，没找到返回-1
"例:"list.indexOf(1);//返回list中最早出现1的下标，返回1
"例:"list.indexOf(1,2);//从下标2开始，返回list中最早出现1的下标，返回-1
数组.push(数值);//给数组末尾添加一个值为数值的元素
"例:"list.push(3);//在list末尾添加一个元素3，返回[0,1,3,2,3]
数组.slice(起始下标,结束下标);//截取数组中从起始下标到结束下标之间的内容
"例:"list.slice(1,2);//截取list的下标1到下标2之间的内容，返回[1,3]
"例:"list.slice(0);//截取list的所有内容，返回[0,1,3,2]
"例:"list.slice(0,-2);//截取list的下标0到倒数下标2之间的内容，返回[0,1]
数组.splice(下标,数量);//删除数组从下标起的数量个元素
"例:"list.splice(1,2);//删除list的下标1起的2个元素，返回[0,2]
数组.pop();//删除数组的最后一个元素并返回
"例:"list.pop();//list变成[0,1,3]，返回2
数组.shift();//删除数组的第一个元素并返回
"例:"list.shift();//list变成[1,3,2]，返回0



"21"
"//函数介绍chooseCard()"
player.chooseCard(数量,位置,提示,强制,限制,ai);
"第一个参数为数量，默认为1"
player.chooseCard(2);//选两张手牌
"第二个参数为位置，默认为手牌"
player.chooseCard("e");//选一张装备区的牌
//注:判定区的牌点不到，请用choosePlayerCard()或chooseButton()
"第三个参数为提示，默认为请选择x张牌"
player.chooseCard("请选择一张手牌");//提示为:请选择一张手牌
"第四个参数为强制，默认为false"
player.chooseCard(true);//必须选一张手牌
"第五个参数为限制，默认为无"
player.chooseCard({color:"red"});//选择一张红色手牌
player.chooseCard(function(card){//注:新版本添加了参数player
	return card.name=="sha";//选择手牌中的一张杀
});
"第六个参数为ai，默认为无,最好用set"
player.chooseCard().set("ai",function(card){
	return get.value(card);//选择价值高的牌
});
"结果result"
result.bool   //是否选择了牌。如果点了取消，就是false
result.cards  //选择的牌，为数组
"简单的例子"
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.chooseCard("he").set("ai",function(card){//选择一张牌
		if(card.name=="sha")return 1;//如果牌名字是杀，返回1(大于0代表选)
		else return 0;//否则返回0(即不选)
	});
	"step 1"//第1步
	if(result.bool){//如果上一步没取消
		if(result.cards[0].name=="sha"){//如果选的(第一张)牌名字是"杀"
			player.draw();//你摸一张牌
		}
	}
},



"22"
"//函数介绍damage()"
player.damage(数量,属性,来源,牌);
"第一个参数为数量，默认为1"
player.damage(1);//受到1点伤害
"第二个参数为属性，默认为无"
player.damage("fire");//受到1点火焰伤害
"第三个参数为来源，默认为当前事件的角色"
target.damage(player);//target受到你造成的1点伤害
"第四个参数为牌，默认为当前事件弃置的牌"
player.damage({name:"sha"});//受到杀造成的1点伤害
"/			一些少见的参数			/"
player.damage("nosource");//受到1点无来源伤害
player.damage("nocard");//受到1点非牌造成的伤害
player.damage("notrigger");//受到一点神圣伤害
/*注:
1.你的技能里面，你为伤害来源
2.主动技里面，牌为主动技弃置的牌(例如:强袭、黩武弃置的牌，所以要加"nocard")*/
"另外讲一下damage事件"
event.player  //受到伤害的角色
event.source  //伤害来源
event.num   //伤害大小
event.nature  //伤害的属性
event.card  //造成伤害的虚拟牌
event.cards  //造成伤害的实体牌
//可以看到，函数和事件是一一对应的
"时机"
player:"damageBefore",//受到伤害前，免疫伤害的技能
player:"damageBegin",//受到伤害时，旧时机就不多讲了
player:"damageZero",//受到0点伤害时，触发这个就不触发别的
source:"damageBegin1",//造成伤害时1，可以改变伤害大小，例如裸衣
source:"damageBegin2",//造成伤害时2，不能改变伤害大小，例如寒冰剑
player:"damageBegin3",//受到伤害时1，可以改变大小，可以转移(标天香)
player:"damageBegin4"//受到伤害时2，不能改变大小，可以取消(界天香)
player:"damage",//受到伤害，此时血量已经减少了
source:"damageSource",//造成伤害后，此时目标的血量已经减少了
player:"damageEnd",//受到伤害后，此时血量已经减少了，卖血技的时机



"23"
"//函数介绍draw()"
player.draw(数量);
"第一个参数为数量，默认为1"
player.draw(2);//摸两张牌
"/			一些少见的参数			/"
player.draw(target);//target令你摸一张牌
player.draw().log=false;//无记录
player.draw("bottom");//从牌堆底摸一张牌
player.draw("nodelay");//没有摸牌动画
player.draw("visible");//摸一张牌并展示
"结果result"
result   //摸到的牌，为数组，result[0]是摸到的第一张牌
"简单的例子"
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.draw("visible");//摸一张牌并展示
	"step 1"//第1步
	event.card=result[0];//用event.card记录摸到的第一张牌
	"step 2"//第2步
	if(event.card.name=="sha"){//如果摸到的牌是"杀"
		player.recover();//你回复一点体力
	}
},
"draw事件"
event.player   //摸牌的人
event.num   //摸牌数
event.result   //摸到的牌
event.source   //摸牌来源角色
"另外讲一下phaseDraw事件，注意和draw事件的区别"
event.player   //进行摸牌阶段的人
event.num   //摸牌数
event.cards   //摸到的牌
event.numFixed   //放弃摸牌
event.attachDraw   //要额外摸到的牌
//注:draw是gain的一种，gain获得的牌是event.cards




		"第二章"		
//本章讲骚操作，有兴趣的可以看看，基础牢固了再用
"01"
player.chooseTarget().set("ai",function(target){
	var player=get.player();
});
/*
①事件函数的返回值通常是该事件，例如chooseTarget()返回的是chooseTarget事件。
事件类型的数据可以用set()来创建属性和对应的值。
set()函数的返回值是修改过的该事件，所以可以继续用set()函数来创建属性和对应的值。
例如:*/
player.chooseTarget().set("prompt","选人").set("selectTarget",2);
/*
②var player=get.player();这句在前面出现过，现在可以讲这句的作用了。
get.player()的返回值是_status.event.player，_status.event是当前事件，
这里指的就是chooseTarget事件，_status.event.player指的就是要选目标的人，
也就是你。所以，get.player()的作用是得到当前事件的人。
如果是trigger.player.chooseTarget()，get.player()指的就是trigger.player。
*/
trigger.player.chooseTarget().set("ai",function(target){
	var pl=_status.event.pl;
}).set("pl",player);
/*这样给chooseTarget增加一个pl属性，属性的值是player。
那么里面的_status.event.pl指的就是player了。*/
"//本节总结"
"1.事件函数的返回值通常是该事件"
"2.事件类型的数据可以用set()来创建属性和对应的值"
"3.set()函数的返回值是修改过的该事件"
"4.一个事件可以连续加多个set()"
"5.get.player()的作用是得到当前事件的人"
"6.通过set()函数增加的属性和值，可以在ai的function里面用"



"02"
player[player.storage.x?"markSkill":"unmarkSkill"]("x");
/*
①*/player.draw();
/*和*/
player["draw"]();
/*是同一个意思。下面的写法较长，通常不用。
一个点可以换成一对方括号加一对双引号。
*/
/*
②问号的用法。问号语句相当于一个简化的if语句*/
player.hasSkill("yingzi")?player.draw():player.loseHp();
/*和*/
if(player.hasSkill("yingzi"))player.draw();
else player.loseHp();
/*是同一个意思。用上面的写法可以节省很多代码。
赋值也用的上，例如:*/
var pl=player.isDamaged()?player:target;
//如果你已受伤，pl指的是你，否则pl指的是目标
/*
③最上面那句的意思是，如果player.storage.x为true，就markSkill("x")
否则unmarkSkill("x")。这句是标记技能里面比较常用的写法。
④*/
var pl=target||player;
/*和*/
var pl=target?target:player;
/*是同一个意思。上面这句通常用来设置一个变量的初始值*/
//注:不要和var pl=(target||player);弄混了，加了括号完全不一样
"//本节总结"
"1.有2种方式访问一个对象的属性"
"2.问号语句相当于一个简化的if语句"
"3.问号语句可以用于赋值语句，节省代码"
"4.变量初始化是好习惯，用||语句可以设置一个变量的初始值"




		"第三章"		
//本章讲ai。主动技，触发技的ai是有很大区别的
"01"
"//触发技ai    01"
"你的准备阶段，你可以失去一点体力，然后摸两张牌"
trigger:{//时机:
	player:"phaseZhunbeiBegin",//你的准备阶段
},
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.loseHp();//你失去一点体力
	player.draw(2);//你摸两张牌
},
"现在这个技能没写ai，但是这个技能ai会无脑用"
/*原因:是否发动技能是一个chooseBool，不写chooseBool的ai的话，电脑会无脑选是
这个chooseBool的ai就是check
*/
check:function(event,player){//触发技ai，括号里参数是event,plater
	if(player.hp>1)return true;//如果你体力大于1就发动
	else return false;//否则不发动
},
"这样ai会在2血及以上时发动，1血不发动"
//frequent 自动发动(能自动发动，也就可以手动发动，肯定不是锁定技)
frequent:true,//设为自动发动
frequent:"check",//当check满足时自动发动，即ai会发动时你发动
frequent:function(event,player){
	return player.hp>2;//你体力大于2时自动发动
},
//effect 牌对你的影响(例如:你免疫伤害，伤害牌对你的影响就是0)
ai:{
	threaten:1.1,//嘲讽值为1.1，稍微注意点
	effect:{//牌的影响
		player:function(card,player,target){//你使用牌时对你的影响
			if(card.name=="tao"){//如果使用的牌是桃
				return 1.1;//影响比一般人大点
			}
		},
		target:function(card,player,target){//你成为牌的目标时对你的影响
			if(get.tag(card,"damage")){//如果牌能造成伤害
				return 1.1;//影响比一般人大点
			}
		},
	},
},

"02"
"//触发技ai    02"
"技能标签"
ai:{
	respondSha:true,//这个技能在需要使用或打出杀时可以发动
	respondShan:true,//这个技能在需要使用或打出闪时可以发动
	save:true,//这个技能在需要救人时可以发动
	maixie:true,//这是个卖血技能
	nofire:true,//你不会受到火焰伤害
	nothunder:true,//你不会受到雷电伤害
	skillTagFilter:function(player,tag,arg){//技能标签限制条件
		if(tag=="save"&&player.hp<0)return false;
		//当你血量低于0时，save标签失效
	},
},
"//effect的返回值"
//effect有3种可能的返回值,1个数字，长度为2的数组，长度为4的数组。
//1个数字n:收益*n
//长度为2的数组[a,b]:a*收益+b
//长度为4的数组[a,b,c,d]:对目标为a*收益+b，对使用者为c*收益+d
//*注意 zeroplayertarget 实际上是[0,0,0,0]  zerotarget  实际上是[0,0]
"下面以target:function(){},别人对你使用杀为例，括号里为可能的技能描述"
return -1;//负影响(杀对你造成伤害时改为等量回复)
return 0;//无影响(杀对你无效)
return 2;//2倍影响(杀对你的伤害翻倍)
return 0.5;//一半影响(杀对你的伤害减半)
return [1,1];//正常影响+1(成为杀的目标摸一张牌)
return [1,-1];//正常影响-1(成为杀的目标弃一张牌)
return [0,1];//无影响+1(杀对你造成伤害时改为摸一张牌);
return [0,-1];//无影响-1(杀对你造成伤害时改为弃一张牌)
return [1,0,0,-1];//对你正常影响，对使用者无影响-1(刚烈)
return [1,1,1,1];//对双方正常影响+1(你成为杀的目标时你和使用者各摸一张牌)


"03"
"//主动技ai    01"
"出牌阶段限一次，你可以弃置一张手牌，失去一点体力，然后摸3张牌"
enable:"phaseUse",//出牌阶段发动
usable:1,//限一次
selectCard:1,//选择一张
filterCard:true,//任意
position:"h",//手牌(弃置)
content:function(){//内容:
	"step 0"//第0步(必须从0开始)
	player.loseHp();//你失去一点体力
	player.draw(3);//你摸3张牌
},
"现在这个技能没写ai，这个技能ai不会用"
ai:{
	order:11,//主动技使用的先后，杀是3，酒是3.2。这个技能排在最前面
	result:{//主动技的收益
		player:1,//对你的收益为1，所以ai肯定会发动
	},
},
"这样ai就无脑发动了，这里需要改一下"
player:function(player,target){//注意，和effect里的参数不一样
	return player.hp-1.1;//血越多收益越高,1血不发动
},
"这样ai会在2血及以上时发动，1血不发动"
//check选牌ai(主动技选牌是一个chooseCard，check是这个chooseCard的ai)
check:function(card){//主动技选牌ai，括号里参数是card
	return 4-get.value(card);//弃置价值小于4的牌
},
"这样ai会弃置手牌里价值小于4的牌，如果没有就不发动"

"02"
"//主动技ai    02"
ai:{
	result:{//主动技的收益，返回值只能是1个数字
		player:function(player,target){//发动这个技能对你的收益
		
		},
		target:function(player,target){//发动这个技能对目标的收益
		
		},
	},
},