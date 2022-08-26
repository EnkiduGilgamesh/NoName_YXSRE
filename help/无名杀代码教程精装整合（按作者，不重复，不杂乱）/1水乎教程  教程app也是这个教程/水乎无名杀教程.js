1. 扩展的基本格式
扩展为zip格式，包含extension.js

extension.js的格式：
game.import('extension',{
name:'扩展名称',
content:function(config){
//扩展内容
},
image:['xxx.png','xxx.png'],//扩展包内所有图片名
config:{
//在扩展界面提供的选项，作为content函数的参数
},
help:{
//帮助界面中显示的内容
}
});

2. content函数
content函数调用时机为游戏最初载入时，可用来修改游戏本身的内容。
若要修改现有的武将或卡牌的内容，须等扩展载入完毕后再触发，写法如下
lib.arenaReady.push(function(){
//要执行的内容
})

3. 添加武将
通过扩展添加的武将与武将包有部分区别，它的管理方式与自带武将相同，可自由决定放在哪个现有武将包（或创建新武将包）
示例：
name:'xxx',
content:function(config){
if(config.x_caocao){
lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']]
}
lib.translate.x_caocao='曹操';
lib.skill.x_jianxiong={
//自定义技能
}
dlib.translate.x_jianxiong='奸雄';
lib.translate.x_jianxiong_info='技能描述';
},
image:['x_caocao.jpg'],
config:{
x_caocao:{
name:'启用曹操',
init:true
}
}
其中
'db:extension-xxx:x_caocao.jpg'表示武将图为导入的图片
'zhu'表示这是一个常备主公
config里表示在扩展界面加一个选项（即content中的config.x_caocao），init:true表示这个选项默认为true

3.1 将武将放入一个扩展包
3.1.1创建一个新武将包
var caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']];
lib.character.x_caocao=caocao;
lib.characterPack.mode_extension_xxx={x_caocao:caocao};
lib.translate.mode_extension_xxx_character_config='示例';
mode_前缀代表这是一个由扩展创建的武将包，不能在武将页面关闭

3.1.2放入一个现有的武将包中
lib.packageReady.push(function(){
//将武将放入标准包
lib.characterPack.standard.x_caocao=lib.character.x_caocao
});
packageReady发动时机为扩展载入完毕，界面创建之前
arenaReady发动时机为界面创建完毕
由于创建菜单时用到了武将包，所以修改现有武将包的时机为界面创建之前，即packageReady

3.2 武将的其它设置
设为boss：lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu','boss']]
设为boss且可在正常模式中出现：lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu','boss','bossallowed']]
设置ai禁选：lib.config.forbidai.push('x_caocao')
设置双将禁选：lib.config.forbiddouble.push('x_caocao')
设置武将强度
（影响部分ai，屏蔽弱将时不出现c及以下的武将，屏蔽强将时不出现ap及以上的武将）
强度分为9个等级：s>ap>a>am>bp>b>bm>c>d
lib.arenaReady.push(function(){
lib.rank.s.push('x_caocao');//将强度设为S级
})
设置珠联壁合：
lib.arenaReady.push(function(){
if(!lib.perfectPair.x_caocao) lib.perfectPair.x_caocao=[];
lib.perfectPair.x_caocao.push('dianwei');//设置与典韦珠联壁合
})

3.3 添加武将的简便写法
game.addCharacter('x_caoca',{
sex:'male',
translate:'曹操',
skills:['x_jianxiong'],
tags:['zhu']
});
等价于
var caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']];
lib.character.x_caocao=caocao;
lib.translate.x_caocao='曹操';
lib.characterPack.mode_extension_xxx={x_caocao:caocao};
lib.translate.mode_extension_xxx_character_config='xxx';

4. 添加卡牌
lib.card.yuanshengfazhang={
fullimage:true,
image:'db:extension-示例扩展:yuanshengfazhang.jpg',
enable:true,
type:'trick',
filterTarget:true,
content:function(){
target.damage('thunder');
}
}
lib.translate.yuanshengfazhang='原生法杖';
lib.translate.yuanshengfazhang_info='造成1点雷电伤害';
var n=parseInt(config.yuanshengfazhang);
while(n--){
lib.card.list.push(['club',3,'yuanshengfazhang']);
}
lib.cardPack.mode_extension_example=['yuanshengfazhang'];
lib.translate.mode_extension_example_card_config='示例';


等价写法：
game.addCard('yuanshengfazhang',{
fullimage:true,
enable:true,
type:'trick',
filterTarget:true,
content:function(){
target.damage('thunder');
}
},
translate:'原生法杖',
description:'造成1点雷电伤害',
number:parseInt(config.yuanshengfazhang)
});


fullskin（左）与fullimage（右）

4. 创建模式
name:'新模式',
content:function(config){
game.addMode('xxmode',{
//模式内容
}
},{
translate:'新模式',
config:{
xxx:{
name:'一个选项',
init:'a',
item:{
a:'A',
b:'B',
c:'C'
},
frequent:true,
restart:true,
}
},
});
},
help:{
'新模式':'帮助内容'
}
},
onremove:function(){
game.clearModeConfig('xxmode');},
image:['xxmode.jpg']


其中
image应包含与模式同名的图片（即xxmode.jpg），用于在开始界面显示
config为模式选择菜单中的选项，不是扩展菜单中的选项
onremove为此扩展被删除时的操作，模式添加的选项需手动删除（clearModeConfig）

4.1 载入现有模式的内容

'step 0'
game.loadMode('identity');
'step 1'
for(var i in result.ai.get){
ai.get[i]=result.ai.get[i];
}
//引用身份模式的ai

1.9写法改变：


1. 添加/移除技能必须使用addSkill/removeSkill或addAdditionalSkill/removeAdditionalSkill函数
2. 添加/移除全局技能必须使用addGlobalSkill/removeGlobalSkill函数
3. 禁用/启用技能必须使用disableSkill/enableSkill函数
4. 检查是否有某技能必须使用hasSkill函数
5. 装备不再能直能通过appendChild函数添加，也不再能通过remove函数移除
6. 使用createEvent创建事件，事件的content必须用setContent添加


