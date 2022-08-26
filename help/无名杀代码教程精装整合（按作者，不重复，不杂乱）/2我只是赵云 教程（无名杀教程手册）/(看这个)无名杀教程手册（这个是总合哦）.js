
无名杀教程手册

序言
　　无名杀是一款三国杀类策略卡牌游戏，含有大量游戏角色，模式丰富，可diy武将。
　　游戏主要由js编写，css布局。
　　下载地址：【无名杀下载地址及FAQ】
　　贴吧原帖：http://tieba.baidu.com/p/4206202301?share=9105&fr=share
　　安卓客户端修改工具：【安卓工具】
　　mt管理器
　　下载地址:http://mobile.baidu.com/#/item?docid=7895548&source=aladdin@wise_app_13@button&ala=wise_app@strong@mt%E7%AE%A1%E7%90%86%E5%99%A8
　　apk编辑器
　　下载地址:http://mobile.baidu.com/#/item?pid=1096855&from=1011077w
　　re管理器
　　下载地址:http://mobile.baidu.com/#/item?pid=1482773&from=1011512c
　　照片编辑器
　　下载地址:http://mobile.baidu.com/#/item?docid=8880150&source=aladdin@wise_ex_app_43@item@1&ala=wise_ex_app@strong@%E7%85%A7%E7%89%87%E7%BC%96%E8%BE%91%E5%99%A8
　　PS TOUCH
　　下载地址:http://mobile.baidu.com/#/item?docid=7321464&source=aladdin@wise_app_13@title&ala=wise_app@strong@PS%20TOUCH
　　Xposed
　　下载地址:http://mobile.baidu.com/#/item?docid=7815786&source=aladdin@wise_app_13@title&ala=wise_app@strong@X-posed
　　re管理器，mt管理器，apk编辑器，Xposed是编辑文件的软件，PS TOUCH,照片编辑器是处理图片的软件
　　注:百度云游戏下载说明
　　下载安装文件：
　　windows：noname-windows.zip
　　mac：noname-mac.dmg
　　android：noname-android.apk
　　android（英特尔处理器）：noname-android-x86.apk
　　ios：noname-ios.ipa
　　ios（源文件）：noname-ios-source.zip
　　安装及更新：
　　首次打开将进入游戏文件下载界面，文件（约4MB）下载完成后才能进入游戏
　　在菜单—帮助—检查更新中可检查更新和下载素材包
　　后续更新均在游戏内完成，不用再次下载安装文件
　　手动添加素材：
　　下载asset.zip，解压后放入对应文件夹
　　windows：resources/app
　　mac：contents/resources/app
　　android：android/data/com.widget.noname
　　ios：documents（itunes—应用—文件共享）
　　本章主要介绍基础内容，正式内容下章开始。
　　第一卷内容为基本语法
　　第二卷开始武将技能编写
　　第三卷美化主题

第一卷 第一章 js语法规则和css
　　js是一种网页编程语言，本章是我在网上查阅大量相关资料后，自己整理改写的，加上了一些自己的理解和心得，让js更容易被学习。
　　1：变量(自由改变的数字)
　　"        "或者'       '将数字括起来
　　2:运算符
　　输出  return
　　真(成立/正确)true
　　假(不成立/错误)false
　　加+
　　减-
　　乘*
　　除/
　　取模%
　　数值加1         ++
　　数值减1          --
　　小于<
　　等于=
　　大于>
　　大于等于>=
　　与&
　　与之后赋值&=
　　或之后赋值|=
　　小于等于<=
　　等于等于==
　　不等于!=
　　绝对值abs()
　　四舍五入round()
　　空值null
　　//这个符号是解释用的，无实际意义，符号后不翻译，但仅隐藏一行文字或数据
　　2.1常量：
　　无穷大，最大
　　lnfinity
　　负无穷
　　-lnfinity
　　不能和自己比较的唯一值
　　NaN：    not a number
　　2.2number的特殊常量
　　number.MAX_VALUE最大值
　　number.MIN_VALUE最小值
　　number.NaN空值
　　2.3:语句(共5种，目前介绍一种)
　　if:加上判断条件，如果成立(成立用true表示)则执行
　　else:不成立(用false表示)则执行
　　例：
　　if(1==1&&6>3)
　　{
　　alert(return true);
　　}
　　else
　　{
　　alert(return false);
　　}
　　执行语句:Function{
　　}
　　2.35算数式
　　var pingguo=6;
　　var lizi=3;
　　var huaqian=pingguo+li;
　　document.write(“花费：”=huaqian)
　　//苹果6元，李子3元，花钱=苹果和李子加起来，输出花钱=
　　2.4赋值语句：
　　var a=10;
　　//赋值让a=10
　　var x=1/0;
　　//x==lnfinity
　　var y=-1/0;
　　//y==-lnfinity
　　var x=0/0;
　　//x==NaN
　　var m=0+“1”;
　　//m==1
　　var n=0+“string”;
　　//n==NaN
　　注：首字母大写，区分大小写，不大写和大写分别表示二个意义
　　工具电脑版：firebox和firebug
　　编辑器：
　　Aptana
　　记事本
　　WebStrom
　　DreamWeaver
　　……
　　第二章
　　简易css
　　外部样式：<link href="layout.css" rel="stylesheet" type="text/css" />
　　内部样式：<style>
　　h2 { color:#f00;} </style>
　　属性名：内容(content)、填充(padding)、边框(border)、边界(margin)， CSS盒子模式都具备这些属性。
　　本章暂时写到这里，更复杂的在以后会添加，此章节是为了高难度技能打基础，不会的可以先看武将技能那些然后结合本章理解，我会让教程更加完善。

番外篇 AI教程
　　AI教程
　　『1』名词解释:
　　1.1 基本名词
　　order:『优先级』,用来设定技能发动的优先程度,此程度以卡牌使用的优先级为参考。
　　为了实现合理的牌序(例如先拆后顺再杀),须将每种卡牌设定一个优先级,优先级越大的
　　卡牌ai会优先使用,技能也是如此,例如枪舞,新苦肉等技能的优先级须高一些,因为等你杀
　　了一刀再判“枪舞”或者酒红杀都用了再“苦肉”是没什么意义的。合理的优先级如下图:
　　例如拆的优先级为9,顺为7,杀为4:
　　-10(枪舞)--9(拆)--8(苦肉)--7(顺)--6--5--4(杀)--;
　　expose:『身份暴露程度』,取值范围为0~1,用于帮助AI判断身份,AI中未写expose其他AI将会无法判断其身份;
　　threaten:『嘲讽值』,嘲讽值越大的角色越容易遭受到敌方的攻击,默认为1,一般在0~4中取值即可(缔盟threaten值为3);
　　respondShan:true,『响应闪』,作用是告诉AI手里没『闪』也可能出『闪』,防止没『闪』直接掉血;
　　respondSha:true,与respondShan类似;
　　save:true,告诉AI可能救人,防止没桃xxx;
　　maixie:true,技能标签『卖血』,用于其他AI检测是否是卖血流(if(target.hasSkillTag('maixie')))。并非加了这个AI就会卖血;
　　noh:true,技能标签『无牌』,目前只出现在“连营”和“伤逝”中,用于其它AI检测是否含有标签『无牌』,从而告诉其他AI不要拆迁(因为生生不息)。
　　1.2 AI获取(玩家):
　　ai.get.attitude(玩家1,玩家2):『态度值检测』检测玩家1对玩家2的态度值;
　　ai.get.effect(target,content,player,viewer):『效果检测』检测卡牌/技能对目标角色的效果值,content代表卡牌或者技能,例如
　　{name:'sha'}/'挑衅';viewer代表视角,一般填player或者target,例如我方杀敌方满血『曹丕』,对我方来说是负效果,但对敌方是正效果,
　　视角决定效果的正负。
　　ai.get.damageEffect(玩家1,玩家2,viewer,nature):『检测伤害效果』这里检测的是[玩家2对玩家1]的伤害效果,nature代表属性(雷/火);
　　ai.get.recoverEffect(玩家1,玩家2,viewer):『检测回复效果』 与上段类似;
　　1.3 AI获取(卡牌)：
　　useful：回合外留牌的价值(弃牌阶段按useful顺序选)
　　value：牌的使用价值(五谷按value顺序选)
　　举例:ai.get.useful(card)/ai.get.value(card)
　　『2』AI的分类与写法：
　　2.1 AI的合理位置
　　1.AI须选择角色/卡牌/按钮等等时
　　2.check中检测条件时的收益时
　　3.主动技的结尾,用来检测是否发动和对谁发动
　　4.需要声明有某技能时某牌的使用效果发生改变时(大部分是卖血技)
　　2.2 不同位置的AI写法
　　2.2.1 选择(choose类):
　　target.chooseToDiscard().ai=function(card){
　　return 8-ai.get.value(card);
　　}
　　return 8-ai.get.value(card)这句是告诉AI如果手里有价值小于8的牌就弃置,否则不弃置
　　弃置的规则是价值越小的牌优先丢,一个return 5和return 3 AI会选return 5的卡牌。
　　当return值不大于0时,例如最后一张手牌价值为9 (return 8-9)=-1,AI将会放弃。
　　target.chooseTarget().ai=function(target){
　　return ai.get.attitude(player,target);
　　}
　　同理,att值越大的会优先选。注意att值只与身份有关,一个鲁肃一个于禁队友,并不一定会选鲁肃。
　　player,chooseControl('摸牌','回血').ai=function(event,player){
　　if(player.hp>=2) return '摸牌';
　　return '回血';
　　}
　　2.2.2 检测(check类)：
　　举例：『魅步』
　　check:function(event,player){
　　if(ai.get.attitude(player,event.player)>=0) return false;
　　//对当前角色态度大于等于0,不发动;
　　var e2=player.get('e','2');
　　//定义一个变量e2代表获取玩家的装备区的防具;
　　if(e2){
　　if(e2.name=='tengjia') return true;
　　if(e2.name=='bagua') return	true;
　　//有藤甲和八卦就发动。。。老大这是瞧不起仁王吗。。。。
　　}
　　return player.num('h','shan')>0;
　　//如果上述条件均不满足,如果玩家手里有『闪』 发动,否则不发动;
　　},
　　发动技能规则:check最终的return值大于0;
　　举例:『峻刑』(这是个主动技,不过也需要check决定是否发动)
　　check:function(card){
　　if(ui.selected.cards.length) return -1;
　　//告诉AI只选一张牌;
　　if(get.type(card)=='basic') return 8-ai.get.value(card);
　　//只有价值小于8的基本牌可被选;
　　return 5-ai.get.value(card);
　　//如果手中有价值小于5的牌就发动,否则不发动;
　　},
　　2.2.3 主动技结尾
　　一般格式为:
　　ai:{
　　order:xx,
　　threaten:xx,
　　//上述为定义/标签
　　result:{
　　player:xx;
　　target:xx;
　　}
　　//收益值
　　}
　　2.2.4 卖血技能
　　一般格式为:
　　ai:{
　　maixie:true,
　　threaten:xx,
　　//上述为定义/标签
　　effect:{
　　xx;
　　}
　　//效果值的重新定义
　　}
　　更多内容详见第三章『收益论』;
　　『3』收益论
　　3.1 收益论用途
　　1.告诉AI会发动技能,
　　2.告诉AI会卖血,
　　3.告诉AI倾向于卡牌/行为,
　　3.2 收益论名词:
　　result:『收益』收益值未在AI声明默认为0(对玩家对目标均是如此).收益值可以直接在AI声明;
　　result在player部分里声明就是对玩家的收益,在target部分里声明就是对目标的收益;
　　effect:『效果』效果值为正代表正效果,反之为负效果,AI会倾向于最大效果的目标/卡牌;
　　attitude:『态度』态度只由identity决定。不同身份对不同身份的att不同。例如在身份局中,主对忠att值为6,
　　忠对主att值为10;
　　3.3 收益论应用:
　　3.3.1 【主动技】:
　　?如果技能发动无须指定目标: effect=result*ai.get.attitude(player,player);
　　即: 总效果=收益值*使用者对自己的att;
　　举例『制衡』:
　　ai:{
　　result:{
　　player:1
　　}}
　　*由于制衡基本是每回合都会发动,所以AI中将『收益值』直接定为1,假设孙权对自己的att为10,这将代表：
　　总效果=(1)收益值*(10)=10;由于效果值为正(正收益) 所以AI将会发动『制衡』
　　举例『急袭』:
　　ai:{
　　order:10,
　　result:{
　　player:function(player){
　　return player.storage.tuntian.length-1;
　　}}}
　　*这个很容易看出来,只有一个田就不发动了...只要田大于1,对使用者就是正收益,再乘以对自己的att,也是正效果,所以AI将会发动『急袭』
　　?如果技能发动须指定目标
　　总效果=对使用者的收益值*使用者对自己的att+对目标的收益值*使用者对目标的att;
　　实际还会考虑嘲讽值,这里简化了;
　　举例『挑衅』:
　　ai:{
　　order:4,
　　expose:0.2,
　　threaten:1.1,
　　result:{
　　target:-1,
　　//直接定义目标的收益值为-1,
　　player:function(player,target){
　　if(target.num('h')==0) return 0;
　　if(target.num('h')==1) return -0.1;
　　if(player.hp<=2) return -2;
　　if(player.num('h','shan')==0) return -1;
　　return -0.5;
　　//上述表示目标角色不同的情况,玩家将会return不同的收益值;
　　}}}
　　『挑衅』是一个作死技,技能发动对自己没有正收益,只会给目标角色带来负收益。所以
　　player部分中收益值最大也不会超过0,因为是弃置对方一张牌,所以直接将目标角色的收益
　　定为了-1;如果对自己的负收益大于对敌方的负收益的话,姜维将不会发动『挑衅』
　　举例『排异』:
　　ai:{
　　order:1,
　　result:{
　　target:function(player,target){
　　if(player!=target) return 0;
　　if(player.num('h')+2<=player.hp+player.storage.quanji.length) return 1;
　　return 0;
　　}}}
　　『排异』为什么没有声明player部分呢,因为除非你排异自己,否则你自己是没收益的,只是对你选择的目标
　　有收益(摸2牌)。
　　3.3.2 【卖血技】
　　总效果=对使用者的收益值*使用者对自己的att+对目标的收益值*使用者对目标的att;
　　实际还会考虑嘲讽值,这里简化了;
　　ai.effect：告诉ai有某技能时某牌的使用效果发生改变,
　　设对目标的原收益为n,对使用者的原收益为n',n>0代表正收益,n<0代表负收益;
　　函数传入4个参数,分别为卡牌、使用者、目标以及n;
　　返回值可有3种形式
　　1. 一个数a,对目标总的收益为a*n;
　　2. 一个长度为2的数组[a,b],对目标的总收益为a*n+b;
　　3. 一个长度为4的数组[a,b,c,d],对目标的总收益为a*n+b,对使用者的总收益为c*n'+d;
　　假设n代表火杀对目标的效果
　　1. 技能为防止火焰伤害：return 0;
　　2. 技能为防止火焰伤害并令目标摸一张牌：return [0,1];
　　3. 技能为防止火焰伤害并令使用者弃置一张牌：return [0,0,1,-1];
　　举例『遗计』:
　　ai:{
　　maixie:true,
　　effect:{
　　target:function(card,player,target){
　　if(get.tag(card,'damage')){
　　if(player.skills.contains('jueqing')) return [1,-2];
　　if(!target.hasFriend()) return;
　　//如果没有存活队友,也就是说你方阵营就你一个活着的了,直接跳出effect,避免单挑永远不杀你;
　　if(target.hp>=4) return [1,get.tag(card,'damage')*2];
　　if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
　　if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
　　//以『杀』为例,杀对目标角色为-1.5收益,计算效果得:
　　4血及以上:-1.5*1+2=0.5 正收益;
　　3血:-1.5*1+1.5=0 无收益;
　　2血:-1.5*1+0.5=-1 负收益;
　　}}}}
　　这个get.tag是什么意思呢？其实和技能标签一样,卡牌也有自己的标签,例如
　　杀:{
　　tag:{
　　respond:1,
　　respondShan:1,
　　damage:function(card){
　　if(card.nature=='poison') return;
　　return 1;
　　}}}
　　为了方便删了一些tag,那么『杀』有如下tag:respond;respondShan;damage等等,所以get.tag(card,'damage')
　　代表有伤害属性的卡牌,例如杀,南蛮,决斗等等。
　　*特别注意ai里面的effect是上帝视角,target不代表目标角色,player也不代表拥有此技能的玩家本身,
　　因为effect是写给别的AI看的,所以target代表玩家本身,player代表其他人,可以是正在犹豫是否要杀
　　你的任何一位玩家。
　　那么队友会杀卖血流队友还是杀敌方呢？还是套公式:
　　总效果=对使用者的收益值*使用者对自己的att+对目标的收益值*使用者对目标的att;
　　因为『杀』对使用者是没收益的,所以公式变为:
　　总效果=对目标的总收益值*使用者对目标的att;
　　比如杀对目标角色的收益是-1.5,满血曹丕的effect是return [0.5,1],那最终的收益是0.25,如果对曹丕的attitude是1,对某白板敌人的attitude是-1,那杀曹丕的效果为1*0.25,
　　杀敌人的效果为-1*-1.5,所以最终会选敌人(实际稍复杂点,详见ai.get.effect函数)
　　3.3.2 【倾向技】
　　这个占比例非常少,略说明一下
　　举例『忘隙』:
　　ai:{
　　effect:{
　　player:function(card,player){
　　if(card.name=='nanman'||card.name=='wanjian') return [1,3];
　　}}}
　　这里的意思是尽量放南蛮万剑之类,类似的,激昂也是强调AI尽量用红杀;
　　因为上述AI中effect里面的为player,所以代表的是对使用者的收益。
　　更多问题可以提问

第一卷 第三章 武将编写
　　1：武将格式如下
　　caocao:['male','wei',4,['hujia','jianxiong'],['zhu']],
　　武将名字：['性别','势力',生命,['技能']],
　　性别有男和女
　　男male
　　女female
　　势力
　　魏wei
　　蜀shu
　　吴wu
　　群qun
　　设置主公选将
　　,['zhu']
　　复制到技能后面即可
　　武将名字用_这个设置前缀，前缀是不显示的，用于区别武将名字，然后_后面的是武将显示的名字，可以在自由选将的拼音里找到，武将名字不能重复，否则会出bug
　　性别如果不写则视为无性别，国家可以自由改，如果你要弄的的武将包，
　　技能的添加'jineng','jineng2'在第一个技能后面用,再加'技能'就行,用'      '括起来，加多个也如此。
　　注：这些是内部文件改法，制作扩展比较简单。
　　2：武将背景故事
　　caocao:'魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。',
　　代码：武将名字：'背景故事内容',
　　2.5武将名字翻译
　　caocao:'曹操',
　　加上这个在相应位置(在内部文件查看)。
　　3：图片和配音
　　图片名字为caocao.jpg
　　格式为jpg,名字是武将的拼音/其他英语
　　角色图片文件夹(image/character)
　　皮肤命名
　　1.jpg
　　2.jpg
　　…
　　按数值排序
　　皮肤文件夹(image/skin/武将名字)
　　死亡配音
　　caocao.mp3
　　武将名字.格式
　　mp3/ogg均可，但是不能重复
　　死亡配音文件夹(audio/die)

第一卷 第四章 初识技能mod
　　大概分触发类、主动使用类、mod类和viewAs（视为）类、觉醒类、变身类…
　　在这里不细分了。
　　mod：被动技能/锁定技能(类似技能的属性，无法改变)
　　不能含有变量
　　//可以改变数值的数据，只能是固定数值
　　//不可触发配音
　　这类技能就是马术，咆哮…
　　格式：
　　jineng:{
　　mod:{
　　:function:(                ){
　　return
　　}
　　}
　　},
　　//空格处加代码：类别、条件…function是功能。
　　举例：
　　【马术】：攻击距离+1
　　mashu:{
　　mod:{
　　globalFrom:function(from,to,distance){
　　return distance-1;
　　}          //from从，因为，来自。
　　}         //global全面的，整体的，全局的。
　　},
　　【飞影】：防御距离+1
　　feiying:{
　　mod:{
　　globalTo:function(from,to,distance){
　　return distance+1;
　　}        //to朝向，关于，属性。
　　}       //distance距离。
　　},
　　【咆哮】：杀的次数+最大
　　paoxiao:{
　　mod:{
　　cardUsable:function(card,player,num){
　　if(card.name=='sha') return Infinity;
　　}
　　},
　　},

解答篇 1扩展多开关
　　格式如下：
　　game.import('extension',{
　　name:'武将扩展名字',
　　//下面可以添加主题设置，不加也可。
　　//下面是分类武将包
　　if(config.武将扩展包的英文名){
　　game.addCharacterPack({
　　character:{
　　//下面是武将
　　技能
　　翻译
　　结尾
　　然后跳到下一个分类武将包
　　},'显示的名字');
　　}
　　if(config.英文名2){
　　game.addCharacterPack({
　　character:{
　　//下面是武将
　　技能
　　翻译
　　结尾
　　然后跳到下一个分类武将包
　　},'武将包名字2');
　　}
　　//以此类举，不断添加
　　//添加完武将包后，写最后的开关
　　//添加以下代码
　　},
　　config:{
　　武将扩展的英文名字:{
　　name:'显示的名字',
　　init:true,
　　},
　　//举例如下
　　sgk_sk:{
　　name:'SK武将',
　　init:true,
　　},
　　sgk_soul:{
　　name:'魂烈包',
　　init:true,
　　},
　　others:{
　　name:'武将补全',
　　init:true,
　　}
　　}
　　});
　　//init:true,是默认打开
　　//init:false,是默认关闭
　　有相关问题可以找我，QQ2691330040,解答篇将陆续更新…

第一卷 第五章 初识触发技能
　　0.5：简介
　　什么样的技能该写成触发类？就像我们常常看到的，回合开始阶段，回合结束阶段，指定一名目标后，都是触发类，这类技能占了大多数。
　　模板：
　　audio:2,
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
　　//这个技能删除了执行部分。
　　1.0：触发时机：//第二个单词要首字母大写、第三个也如此……
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
　　damageEnd受伤害后
　　shaMiss杀被闪避
　　（触发条件有很多，可能不全，欢迎补充）
　　比如你要写
　　玩家失去一张牌之后 trigger:{player:'loseEnd'},
　　同理若你有多个触发条件
　　玩家失去或获得一张牌后trigger:{player:['loseEnd','gainEnd']},
　　附加说明：
　　global 代表所有人 比如全场其他角色摸牌阶段开始时触发 trigger:{global:'phaseDrawBegin'},
　　target 代表你成为目标 当你成为【杀】目标的时候 trigger:{target:'shaBefore'},
　　source 代表来源是你 当你造成伤害之后 trigger:{source:'damageEnd'},
　　1.5：通过某个事件触发的技能。触发时机的写法为事件角色+事件名+事件时机，事件时机分为开始前（Before）、开始时（Begin）、结束时（End）及结束后（After）
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

第一卷 第五卷 初识主动技能
　　主动技能
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
　　//enable:'phaseUse',
　　上面的是主动使用
　　//usable:1,
　　上面是使用次数，如果想任意使用，删除代码即可。
　　注：//这个符号是解释说明用的，如果复制了会导致后面的代码无法使用。
　　编写阶段即将开始。

第一卷 终章 初识视为技能
　　主要代码viewAs:{"         卡牌名字"},
　　1.0：简介武圣：
　　audio:'xx',
　　enable:['chooseToRespond','chooseToUse'],
//使能够:[' 选择 向  响应','选择 向 使用'],

　　filterCard:function(card){
//过滤 卡牌:功能(卡牌)

　　return get.color(card)=='red';
//输出  得到.颜色(卡牌)=='红'

　　},
　　position:'he',
//位置:'手牌和装备'

　　viewAs:{name:'sha'},
//视为:{名:'杀'}

　　viewAsFilter:function(player){
//视为过滤:功能(它)

　　if(!player.num('he',{color:'red'})) return false;
//如果(他不是.数('手牌和装备{牌:'红'}))输出 失败

　　},


　　prompt:'将一张红色牌当杀使用或打出',
　　如果你只想把手牌当做某张牌，将position改为你想要的。前文提过：h代表手牌，e代表装备区的牌，j代表判定区的牌
　　position:'h', 手牌
　　position:'he',手牌+装备区
　　position:'hej', 手牌+装备区+判定区
　　无非这么三种,不写就是默认手牌。
　　2.0：半自动视为技能
　　龙胆
　　longdan:{
　　group:['longdan_sha','longdan_shan'],
　　subSkill:{
　　sha:{
　　audio:2,
　　enable:['chooseToUse','chooseToRespond'],
　　filterCard:{name:'shan'},
　　viewAs:{name:'sha'},
　　viewAsFilter:function(player){
　　if(!player.num('h','shan')) return false;
　　},
　　prompt:'将一张闪当杀使用或打出',
　　check:function(){return 1},
　　ai:{
　　effect:{
　　target:function(card,player,target,current){
　　if(get.tag(card,'respondSha')&&current<0) return 0.6
　　}
　　},
　　respondSha:true,
　　skillTagFilter:function(player){
　　if(!player.num('h','shan')) return false;
　　},
　　order:4,
　　useful:-1,
　　value:-1
　　}
　　},
　　shan:{
　　audio:2,
　　enable:['chooseToRespond'],
　　filterCard:{name:'sha'},
　　viewAs:{name:'shan'},
　　prompt:'将一张杀当闪打出',
　　check:function(){return 1},
　　ai:{
　　respondShan:true,
　　skillTagFilter:function(player){
　　if(!player.num('h','sha')) return false;
　　},
　　effect:{
　　target:function(card,player,target,current){
　　if(get.tag(card,'respondShan')&&current<0) return 0.6
　　}
　　},
　　order:4,
　　useful:-1,
　　value:-1
　　}
　　}
　　}
　　},
　　'chooseToRespond'这个是响应
　　'chooseToUse'这个是主动用
　　forced:true,自动发动，与被动技能差不多，但是国战可以触发亮将。
　　被动触发视为技能=被动技能mod

解答篇 2技能数值加标记
　　sizhan:{
　　group:['sizhan1','sizhan2'],
　　subSkill:{
　　sizhan1:{
　　audio:2,
　　trigger:{player:'damageBegin'},
　　forced:true,
　　content:function(){
　　trigger.untrigger();
　　trigger.finish();
　　if(player.storage.sizhan1==undefined){
　　player.markSkill('sizhan1');
　　player.storage.sizhan1=0;
　　}
　　player.storage.sizhan1+=trigger.num;
　　player.syncStorage('sizhan1');
　　},
　　intro:{
　　content:'mark'
　　}
　　},
　　sizhan2:{
　　trigger:{player:'phaseEnd'},
　　filter:function(event,player){
　　return player.storage.sizhan1>0;
　　},
　　forced:true,
　　content:function(){
　　player.loseHp(player.storage.sizhan1);
　　player.unmarkSkill('sizhan1');
　　delete player.storage.sizhan1;
　　}
　　}
　　}
　　shenli:{
　　trigger:{source:'damageBegin'},
　　filter:function(event){
　　return event.card&&(event.card.name=='sha')&&
　　event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
　　},
　　forced:true,
　　content:function(){
　　if(typeof player.storage.sizhan1=='number'){
　　trigger.num+=player.storage.sizhan1;
　　}
　　},
　　ai:{
　　sava:true,
　　},
　　例子是古之恶来
　　死战: 锁定技,当你受到伤害时，防止该伤害并获得与伤害点数等量的死战标记.
　　神力: 锁定技,出牌阶段,你使用【杀】造成的伤害+X,X为当前死战标记数
　　注：原神力如下
　　神力: 锁定技,出牌阶段,你使用【杀】造成的第一次伤害+X,X为当前死战标记数

扩充篇 第一卷 第一章1
　　下面的运算符是触发技能的判定条件用的，其他判断类也可。
　　&=或之后赋值
　　!反
　　!=不等于
　　|=不等于
　　||或
　　&与
　　&&且
　　或：是多个判断条件满足一个时发动
　　且：满足多个判断条件发动
　　小于等于<=
　　小于<

解答篇 觉醒文字3 
　　skillAnimation:true,
　　animationStr:'你们一起上吧！',
　　//你们一起上吧可以自己选择，加在技能里面用，最好是觉醒，限定技。
　　//建议做个连杀技能
　　例如：
　　skillAnimation:true,
　　animationStr:'一血 卧龙出山',

第二卷 准备阶段，基础词汇 
　　//第一种卡牌名字小写加首字母大写的时机
　　Before之前
　　Begin开始
　　End结束
　　After之后
　　gameStart游戏开始时
　　shaBefore杀之前
　　player.hp自己的血
　　maxHandcard最大手牌数
　　trigger.num触发的数值
　　player.draw();摸牌//在括号里添加数字就是摸几个牌
　　damageEnd受伤后
　　player.loseHp();失去体力
　　target目标//与player对应
　　player.gain(trigger.cards);获得该牌
　　equip1武器
　　equip2防具
　　equip3攻马
　　equip4防马
　　equip5法宝
　　dieAfter死后
　　maxHp生命上限
　　addSkill('技能');获得永久技能
　　addTempSkill('技能');获得临时技能
　　discard();失去牌
　　source伤害来源，对应目标target，玩家player
　　trigger.directHit=true;此伤害无法闪避
　　length最大值

解答篇 觉醒文字颜色 
　　2.0觉醒颜色
　　animationColor:'metal',
　　animationColor:'fire',
　　animanimationColor:'water',
　　animationColor:'thunder',
　　'       '里可以自己改颜色，例如黑色black

解答篇 4基本牌视为杀，被动触发 
　　龙胆
　　longdan:{
　　group:['longdan_sha','longdan_shan'],
　　subSkill:{
　　sha:{
　　audio:2,
　　enable:['chooseToUse','chooseToRespond'],
　　filterCard:{name:'shan'},
　　viewAs:{name:'sha'},
　　viewAsFilter:function(player){
　　if(!player.num('h','shan')) return false;
　　},
　　prompt:'将一张闪当杀使用或打出',
　　check:function(){return 1},
　　ai:{
　　effect:{
　　target:function(card,player,target,current){
　　if(get.tag(card,'respondSha')&&current<0) return 0.6
　　}
　　},
　　respondSha:true,
　　skillTagFilter:function(player){
　　if(!player.num('h','shan')) return false;
　　},
　　order:4,
　　useful:-1,
　　value:-1
　　}
　　},
　　shan:{
　　audio:2,
　　enable:['chooseToRespond'],
　　filterCard:{name:'sha'},
　　viewAs:{name:'shan'},
　　prompt:'将一张杀当闪打出',
　　check:function(){return 1},
　　ai:{
　　respondShan:true,
　　skillTagFilter:function(player){
　　if(!player.num('h','sha')) return false;
　　},
　　effect:{
　　target:function(card,player,target,current){
　　if(get.tag(card,'respondShan')&&current<0) return 0.6
　　}
　　},
　　order:4,
　　useful:-1,
　　value:-1
　　}
　　}
　　}
　　},
　　集智
　　jizhi:{
　　audio:2,
　　audioname:['jianyong'],
　　trigger:{player:'useCard'},
　　frequent:true,
　　filter:function(event){
　　return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
　　},
　　content:function(){
　　player.draw();
　　},
　　ai:{
　　threaten:1.4,
　　noautowuxie:true,
　　}
　　},
　　代码如下
　　viewAs:{name:'sha'},
　　触发技能被动形态
　　jineng:{
　　audio:true,
　　forced:true,
　　trigger:{player:'useCard'},
　　filter:function(event,player){
　　return (get.type(event.card)=='basic';
　　},
　　content:function(){
　　viewAs:{name:'sha'},
　　}
　　},
　　注：
　　filter:function(event,player){
　　return 判断条件
　　},
　　注：
　　content:function(){
　　执行代码
　　}
　　},
　　注：audio:2,
　　2可以自己改，技能发动时有配音
　　注：forced:true,
　　加了这个代码技能自己发动
　　注：	audioname:['caocao'],
　　这个代码意思是别人有此技能会触发不同配音。
　　延时锦囊牌delay
　　锦囊牌trick
　　基本牌basic
　　红桃heart
　　黑桃spade
　　草花club
　　方块diamond
　　红red
　　黑black
　　gain获得
　　recover恢复

DIY篇即将发布
　　如果谁有好的技能，或者想编写的技能可以发到我这里。QQ2691330040
　　QQ1448890505
　　反馈建议，询问问题均可…
 
第二卷 第一章触发技能格式 
　　//技能名字 	ganglie:{
　　//配音		audio:2,
　　//触发时机		trigger:{player:'damageEnd'},
　　//检测条件		filter:function(event,player){
　　return (event.source!=undefined);
　　},
　　//检测态度				check:function(event,player){
　　return (ai.get.attitude(player,event.source)<=0);
　　},
　　//	执行	content:function(){
　　执行代码;
　　}
　　},
　　//结束
　　被动触发
　　forced:true,
　　加在配音的下一行
　　更多内容可以自行研究或者找我提问，本章内容需要看以前内容，注意标点符号。
　　执行代码后面加;
　　英文字符;
　　audio:true,
　　一般结尾加,

扩展篇 联机解锁
　　注：限制是联机的二个人的联机部分文件必须一致。
　　联机代码：
　　connect:true,
　　添加到内部文件的武将或者模式的名字下面。
　　例如标准包：
　　'use strict';
　　game.import('character',function(lib,game,ui,get,ai,_status){
　　return {
　　name:'sp',
　　connect:true,
　　//这里只复制部分代码，位置不要看错，注意事项在上面。

DIY 咆哮
　　作者：我只是赵云
　　paoxiao:{
　　audio:2,
　　trigger:{player:'useCard'},
//触发:{它:'使用  卡牌'}

　　forced:true,
//被迫:正确

　　filter:function(event,player){
//过滤:功能（事件,它）

　　return event.card.name=='sha';
//正确  事件.卡牌.名=='杀'
　　},

　　content:function(){
//内容:功能

　　player.getStat().card.sha--;
//它 得到 单位词().卡牌.杀＋1
　　},
}


番外篇 扩展联机教程 
　代码还是
　　connect:true,
　　位置添加到扩展名字下面
　　例如：
　　game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"列女传",content:function (config,pack){
    
    
    
    lib.config.lnzGXJZ;
game.saveConfig('lnzGXJZ',1);
lib.config.lnzGXJZ1=0;		
                if (config.lnz){
			for (var i in lib.characterPack['lnz']) {	
			if (lib.character[i][4].indexOf("forbidai")<0){
			lib.character[i][4].push("forbidai");
			}			
		}					
				};	    
    
},precontent:function (lnz){
       if(lnz.enable){		
            game.import('character',function(){
                var lnz = {
                    name: 'lnz',
                    connect:true,				
                    
                    character:{
                         "ln_hyy":["female","shu",3,["LX","dc","机巧"],["des:诸葛亮之妻，诸葛瞻之母，有奇才，上通天文，下察地理，精通兵法，近乎诸略无所不晓，善于发明制造，传授诸葛亮很多学识，在诸葛亮病逝之后不久也随之仙逝，死前以“忠孝”勉励其子诸葛瞻；"]],
            "ln_nw":["female","G",4,["SD","SN"],["des:上古传说中的人物，华胥氏之女，人首蛇身，有圣德(五行属土德)，与伏羲兄妹通婚，创造婚姻制度，结束了只知其母不知其父的原始社会，有补天造人、治水平乱等的传说，和伏羲一起治理族人，制造乐器等物品，对后世产生了极大的影响（由于女娲伏羲属于一家人，故而“三皇”中只选取其中一人为代表）；"]],
        
　　　

8.18更新预告
　　从今天起每周日会陆续更新，内容由各位读者决定，甚至可能会重写以前的内容。
　　联系方式QQ2691330040
　　在今天起到每周一到周日前，如果没人联系我的话就暂停更新。
