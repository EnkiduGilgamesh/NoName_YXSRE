1. ��չ�Ļ�����ʽ
��չΪzip��ʽ������extension.js

extension.js�ĸ�ʽ��
game.import('extension',{
name:'��չ����',
content:function(config){
//��չ����
},
image:['xxx.png','xxx.png'],//��չ��������ͼƬ��
config:{
//����չ�����ṩ��ѡ���Ϊcontent�����Ĳ���
},
help:{
//������������ʾ������
}
});

2. content����
content��������ʱ��Ϊ��Ϸ�������ʱ���������޸���Ϸ��������ݡ�
��Ҫ�޸����е��佫���Ƶ����ݣ������չ������Ϻ��ٴ�����д������
lib.arenaReady.push(function(){
//Ҫִ�е�����
})

3. ����佫
ͨ����չ��ӵ��佫���佫���в����������Ĺ���ʽ���Դ��佫��ͬ�������ɾ��������ĸ������佫�����򴴽����佫����
ʾ����
name:'xxx',
content:function(config){
if(config.x_caocao){
lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']]
}
lib.translate.x_caocao='�ܲ�';
lib.skill.x_jianxiong={
//�Զ��弼��
}
dlib.translate.x_jianxiong='����';
lib.translate.x_jianxiong_info='��������';
},
image:['x_caocao.jpg'],
config:{
x_caocao:{
name:'���òܲ�',
init:true
}
}
����
'db:extension-xxx:x_caocao.jpg'��ʾ�佫ͼΪ�����ͼƬ
'zhu'��ʾ����һ����������
config���ʾ����չ�����һ��ѡ���content�е�config.x_caocao����init:true��ʾ���ѡ��Ĭ��Ϊtrue

3.1 ���佫����һ����չ��
3.1.1����һ�����佫��
var caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']];
lib.character.x_caocao=caocao;
lib.characterPack.mode_extension_xxx={x_caocao:caocao};
lib.translate.mode_extension_xxx_character_config='ʾ��';
mode_ǰ׺��������һ������չ�������佫�����������佫ҳ��ر�

3.1.2����һ�����е��佫����
lib.packageReady.push(function(){
//���佫�����׼��
lib.characterPack.standard.x_caocao=lib.character.x_caocao
});
packageReady����ʱ��Ϊ��չ������ϣ����洴��֮ǰ
arenaReady����ʱ��Ϊ���洴�����
���ڴ����˵�ʱ�õ����佫���������޸������佫����ʱ��Ϊ���洴��֮ǰ����packageReady

3.2 �佫����������
��Ϊboss��lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu','boss']]
��Ϊboss�ҿ�������ģʽ�г��֣�lib.character.x_caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu','boss','bossallowed']]
����ai��ѡ��lib.config.forbidai.push('x_caocao')
����˫����ѡ��lib.config.forbiddouble.push('x_caocao')
�����佫ǿ��
��Ӱ�첿��ai����������ʱ������c�����µ��佫������ǿ��ʱ������ap�����ϵ��佫��
ǿ�ȷ�Ϊ9���ȼ���s>ap>a>am>bp>b>bm>c>d
lib.arenaReady.push(function(){
lib.rank.s.push('x_caocao');//��ǿ����ΪS��
})
���������ںϣ�
lib.arenaReady.push(function(){
if(!lib.perfectPair.x_caocao) lib.perfectPair.x_caocao=[];
lib.perfectPair.x_caocao.push('dianwei');//�������Τ�����ں�
})

3.3 ����佫�ļ��д��
game.addCharacter('x_caoca',{
sex:'male',
translate:'�ܲ�',
skills:['x_jianxiong'],
tags:['zhu']
});
�ȼ���
var caocao=['male','wei',4,['x_jianxiong'],['db:extension-xxx:x_caocao.jpg','zhu']];
lib.character.x_caocao=caocao;
lib.translate.x_caocao='�ܲ�';
lib.characterPack.mode_extension_xxx={x_caocao:caocao};
lib.translate.mode_extension_xxx_character_config='xxx';

4. ��ӿ���
lib.card.yuanshengfazhang={
fullimage:true,
image:'db:extension-ʾ����չ:yuanshengfazhang.jpg',
enable:true,
type:'trick',
filterTarget:true,
content:function(){
target.damage('thunder');
}
}
lib.translate.yuanshengfazhang='ԭ������';
lib.translate.yuanshengfazhang_info='���1���׵��˺�';
var n=parseInt(config.yuanshengfazhang);
while(n--){
lib.card.list.push(['club',3,'yuanshengfazhang']);
}
lib.cardPack.mode_extension_example=['yuanshengfazhang'];
lib.translate.mode_extension_example_card_config='ʾ��';


�ȼ�д����
game.addCard('yuanshengfazhang',{
fullimage:true,
enable:true,
type:'trick',
filterTarget:true,
content:function(){
target.damage('thunder');
}
},
translate:'ԭ������',
description:'���1���׵��˺�',
number:parseInt(config.yuanshengfazhang)
});


fullskin������fullimage���ң�

4. ����ģʽ
name:'��ģʽ',
content:function(config){
game.addMode('xxmode',{
//ģʽ����
}
},{
translate:'��ģʽ',
config:{
xxx:{
name:'һ��ѡ��',
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
'��ģʽ':'��������'
}
},
onremove:function(){
game.clearModeConfig('xxmode');},
image:['xxmode.jpg']


����
imageӦ������ģʽͬ����ͼƬ����xxmode.jpg���������ڿ�ʼ������ʾ
configΪģʽѡ��˵��е�ѡ�������չ�˵��е�ѡ��
onremoveΪ����չ��ɾ��ʱ�Ĳ�����ģʽ��ӵ�ѡ�����ֶ�ɾ����clearModeConfig��

4.1 ��������ģʽ������

'step 0'
game.loadMode('identity');
'step 1'
for(var i in result.ai.get){
ai.get[i]=result.ai.get[i];
}
//�������ģʽ��ai

1.9д���ı䣺


1. ���/�Ƴ����ܱ���ʹ��addSkill/removeSkill��addAdditionalSkill/removeAdditionalSkill����
2. ���/�Ƴ�ȫ�ּ��ܱ���ʹ��addGlobalSkill/removeGlobalSkill����
3. ����/���ü��ܱ���ʹ��disableSkill/enableSkill����
4. ����Ƿ���ĳ���ܱ���ʹ��hasSkill����
5. װ��������ֱ��ͨ��appendChild������ӣ�Ҳ������ͨ��remove�����Ƴ�
6. ʹ��createEvent�����¼����¼���content������setContent���


