game.import('extension',function(lib,game,ui,get,ai,_status){return {name:'RE：英雄杀',content:function (config,pack){
    lib.group.push('GXS_jun');
	lib.translate.GXS_jun='君';
	lib.translate.GXS_junColor='water';
	lib.group.push('GXS_chen');
	lib.translate.GXS_chen='臣';
	lib.translate.GXS_chenColor='soil';
	lib.group.push('GXS_min');
	lib.translate.GXS_min='民';
	lib.translate.GXS_minColor='wood';
	//lib.translate.standardTHK = "标准英雄";
	lib.translate.wc_wechatkill = "微信端";
    lib.translate.onlineherokill = "线上版";
    lib.translate.offlineherokill = "线下英雄";
    lib.translate.oldhero = "迟暮";   
    lib.translate.unfinishedhero = "货不对板"; 
    lib.translate.wc_diy = "DIY武将";
    lib.characterSort['mode_extension_RE：英雄杀']={    
    wc_wechatkill :['GXS_lishishi','GXS_luobinwang','GXS_wuzetian','GXS_chenyuanyuan',"GXS_chensheng",'GXS_zhangsunhuanghou','GXS_zhaofeiyan','GXS_baosi','GXS_shangguanwaner','GXS_zhangliang','GXS_dongfangshuo','GXS_quyuan','GXS_xiajie','GXS_weiqing','GXS_xuanzang','GXS_liqingzhao','GXS_vxlvzhi','GXS_daji','GXS_wenjiang','GXS_zhurong','GXS_wangzhaojun','GXS_xiaotaihou','GXS_yangyuhuan','GXS_yyuji','GXS_vxhuamulan','GXS_muguiying','GXS_zhuowenjun','GXS_simaxiangru','GXS_libai','GXS_dufu','GXS_weizifu','GXS_moxi','GXS_miyue',"GXS_liuche","GXS_goujian","GXS_luban","GXS_zhaoyong","GXS_qinqiong","GXS_liji","GXS_yuwenhuaji","GXS_sunwu","GXS_bole","GXS_guanyu","GXS_lvbu","GXS_diaochan","GXS_baiqi","GXS_yangguang","GXS_jiangshang","GXS_lanlingwang","GXS_sunquan","GXS_xiaohe","GXS_xcxzhaoyun","GXS_linchong","GXS_lizicheng","GXS_liguang","GXS_dayu","GXS_kongzi","GXS_mengtian","GXS_tantaiming","GXS_renhuanzhi","GXS_vxmurong","GXS_yuantiangang",'GXS_yangyanzhao','GXS_direnjie','GXS_vxlikui','GXS_xiangyu','GXS_jifa','GXS_huoqubing','GXS_hanxin','GXS_guiguzi','GXS_qihuangong','GXS_baozheng','GXS_jingke','GXS_liubowen','GXS_lishimin','GXS_yingzheng','GXS_tiemuzhen','GXS_menghuo','GXS_liubang','GXS_mozi','GXS_liyu','GXS_xcxzhangfei','GXS_luocheng','GXS_luzhishen','GXS_kangxi','GXS_xuxiake','GXS_chengyaojin','GXS_shangyang','GXS_shangzhou','GXS_shiqian','GXS_songjiang','GXS_tangbohu','GXS_wusong','GXS_zhuyuanzhang','GXS_xcxzhugeliang','GXS_zhaokuangying','GXS_zhangsanfeng','GXS_yuefei','GXS_panan',"GXS_rebianque","GXS_vxxiaoqiao","GXS_fanli",'GXS_xcxzhouyu','GXS_lianpochar','GXS_xcxsimayi','GXS_vxmachao','GXS_yuenv','GXS_xunzi','GXS_zhangyi'],
    onlineherokill :["GXS_bianque",'GXS_lvzhi','GXS_dyhuamulan','GXS_xishi','GXS_dyxiaoqiao','GXS_sudaji',"GXS_olliqingzhao","GXS_olmuguiying","GXS_zhubajie","GXS_change",'GXS_murong','GXS_dyzhaoyun','GXS_sbdks','GXS_dypanan','GXS_dylanlingwang','GXS_zhangliao','GXS_dyyangguang','GXS_dyqihuangong','GXS_dyyuwenhuaji','GXS_gaoqiu','GXS_zhitianxinchang','GXS_wusangui','GXS_xiaozhuang','GXS_taipinggongzhu','GXS_aijiyanhou','GXS_dyxiaotaihou',"GXS_dylvbu",'GXS_dymoxi','GXS_re_dywenjiang','GXS_dymiyue','GXS_dyliubei','GXS_dyguiguzi','GXS_rehuamulan','GXS_dianwei','GXS_mymiyue','GXS_rehuamulan'],
    offlineherokill :['GXS_nvwa','GXS_mhw','GXS_liuer','GXS_ninger','GXS_hunxiaoqiao','GXS_hundiaochan','GXS_hunlinchong','GXS_hunxiangyu'],
    wc_diy :['GXS_sgwe','GXS_hml','GXS_zj','GXS_wzt','GXS_ssqx','GXS_diychange','GXS_panjinlian','GXS_my','GXS_yyh','GXS_lb','GXS_luxueqi','GXS_zhangchuchen','GXS_huaqiangu','GXS_folkpanjinlian','GXS_diyzhende'],
    oldhero :['GXS_huamulan','GXS_dywenjiang'],
    unfinishedhero :['GXS_zhende','GXS_hunyangyuhuan'],
    }
    lib.arenaReady.push(function(){	
    if (get.mode()=='guozhan') {
    lib.character['GXS_simaxiangru'][4]=(['ext:RE：英雄杀/GXS_gz_simaxiangru.jpg']);
    lib.character['GXS_zhuowenjun'][4]=(['ext:RE：英雄杀/GXS_gz_zhuowenjun.jpg']);
    lib.character['GXS_xiangyu'][4]=(['ext:RE：英雄杀/GXS_gz_xiangyu.jpg']);
    lib.character['GXS_yyuji'][4]=(['ext:RE：英雄杀/GXS_gz_yuji.jpg']);
    }
    });
    lib.skill._GXS_cardaud={
    	trigger:{
        	player:"useCardBefore",
    	},
    	silent:true,
    	charlotte:true,
    	priority:null,
    	firstDo:true,
    	filter:function(event,player){
    		return (event.card.name=="sha"&&(event.card.nature=="GXS_blood"||event.card.nature=="GXS_darkness"))||event.card.name=="dz_zhen"||event.card.name=="GXS_touliang"||event.card.name=="dz_gean";
    	},
    	content:function (){        	
         trigger.audio=false;
         if (trigger.card.name=="dz_zhen"){
         game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_dz_zhen":"nan_dz_zhen"));
         }else if (trigger.card.name=="GXS_touliang"){
         game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"dz_touliangnv":"dz_touliangnan"));
         }else if (trigger.card.name=="dz_gean"){
         game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"dz_geannv":"dz_geannan"));
         }else{
         if (trigger.card.nature=="GXS_blood"){
         game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_sha_GXS_blood":"nan_sha_GXS_blood"));
         }else{
         game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_sha_GXS_darkness":"nan_sha_GXS_darkness"));
         }         
    	}
    	}
    };
    lib.skill._GXS_bsha={
    	trigger:{
        	source:"damage",
    	},
    	silent:true,
    	charlotte:true,
    	priority:null,
    	filter:function(event,player){
    		return event.name=="damage"&&event.card&&event.card.name=="sha"&&event.card.nature=="GXS_blood";
    	},
    	content:function (){        	
        	player.recover(trigger.num);
    	},
    };    	
    lib.skill._GXS_dsha={
    trigger:{
        player:"useCardToPlayered",
    },
    forced:true,
    filter:function(event,player){
    		return event.card.name=="sha"&&event.card.nature=="GXS_darkness";
    	},
    content:function(){
        trigger.target.addTempSkill('GXSshadiao','shaAfter'); 
    },
    };
    //看破一切——卡牌贴图术
    lib.skill._initShuXingsha={
    trigger:{
    global:"gameStart"
    },
    silent:true,
    content:function(){
    for(var i=0;i<ui.cardPile.childNodes.length;i++){
    var card=ui.cardPile.childNodes[i];
    if(card.name=='sha'){
    if (card.nature=='GXS_blood') card.node.image.setBackgroundImage('extension/RE：英雄杀/dz_xuesha.png');
    if (card.nature=='GXS_darkness') card.node.image.setBackgroundImage('extension/RE：英雄杀/dz_ansha.png');
    //(如果是完整的整张牌的图片那代码是card.setBackgroundImage)
    }
    }
    }
    };
    lib.skill.GXSshadiao={
    init:function(player,skill){
        player.addSkillBlocker(skill);
    },
    onremove:function(player,skill){
        player.removeSkillBlocker(skill);
    },
    charlotte:true,
    locked:true,
    skillBlocker:function(skill,player){
        return skill!='GXSshadiao'&&!lib.skill[skill].charlotte;
    },
   };
    lib.nature.addArray(["GXS_darkness","GXS_blood"]);
    lib.card.sha.nature.addArray(["GXS_darkness","GXS_blood"]);
  lib.linked.addArray(["GXS_darkness","GXS_blood"]);
  lib.translate.GXS_darkness="暗";
  lib.translate.GXS_blood="血";
  lib.translate.GXS_darknesssha="暗杀";
  lib.translate.GXS_bloodsha="血杀";
  var style2=document.createElement('style');
    style2.innerHTML=`
    
    .player>.damage[data-nature='GXS_blood'] {
        text-shadow: 0 0 10px rgb(0,140,0), 0 0 10px rgb(0, 102, 0), 0 0 10px rgb(0, 77, 0), 0 0 10px rgb(0, 51, 0);
    }
    `;
    document.head.appendChild(style2);
    
    lib.arenaReady.push(function(){	
    if(lib.config.extensions&&lib.config.extensions.contains('十周年UI')&&lib.config['extension_十周年UI_enable']&&decadeUI&&decadeUI.config.cardReplace){               
            var CAFst=lib.element.card.init.toString();
            var ins=function(str){
                str=str.replace('var card = cardInitFunction.call(this, param)', 'var card = lib.OriginCardInit.call(this, param)');
                str=str.replace('extensionName', '"十周年UI"');
                str=str.replace('switch (card.nature) {',
                `switch (card.nature) {
                    case 'GXS_darkness':
                    name = 'GXS_darkness' + name;
                    break;
                    case 'GXS_blood':
                    name = 'GXS_blood' + name;
                    break;
                    
                    `);
                    return str;
                    
                };
                //eval("lib.element.card.init=function(param){"+CAFst.newFedit(ins)+"}");
            };  
        });       
},precontent:function (){
    window.reTHK_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
    lib.init.js(lib.assetURL +'extension/RE：英雄杀/skin.js',null);//这一行代码加载扩展中的skin.js文件。
	lib.init.js(lib.assetURL +'extension/RE：英雄杀/cards.js',null,function(){
			//alert('导入成功');
		},function(){
			alert('英雄杀卡牌导入失败，请检查扩展文件夹名是否为 RE：英雄杀 或者是否丢失cards.js');
		});
		String.prototype.newFedit=function(ins){
            var CAFst=this;
            var CAFstr=CAFst.slice(CAFst.indexOf("{")+1).slice(0,-1);
            return ins(CAFstr);
        };
        ///////////////////////////////////////////////////////////////
        var CAFst=get.translation.toString();
        var ins=function(str){
            return str.replace(`if(str2=='杀'){`,
            `if(str2=='杀'){
                if(str.nature=='GXS_blood'){
                    str2='血'+str2;
                }
                else if(str.nature=='GXS_darkness'){
                    str2='暗'+str2;
                }
               
                else`);
            };
            eval("get.translation=function(str,arg){"+CAFst.newFedit(ins)+"}");
            
            
            //////////////////////////////////////////////////////////
            var CAFst=lib.element.card.init.toString();
            var ins=function(str){
                return str.replace(`if(card[2]=='sha'){`,
                `if(card[2]=='sha'){
                    if(card[3]=='GXS_blood'){
                        name='血'+name;
                        this.node.image.classList.add('GXS_blood');
                    }
                    else if(card[3]=='GXS_darkness'){
                        name='暗'+name;
                        this.node.image.classList.add('GXS_darkness');
                    }
                   
                    else
                    `);
                };
                eval("lib.element.card.init=function(card){"+CAFst.newFedit(ins)+"}");
                //////////////////////////////////////////////////////////
                lib.OriginCardInit=lib.element.card.init;
                //////////////////////////////////////////////////////////
},config:{		},help:{},package:{
    character:{
        character:{
        //'GXS_jiutianxn':['female','GXS_chen',4,['GXS_qianmou'],[]],    
        //标准        
            'GXS_bianque':['male','GXS_min',3,['GXS_huichun','GXS_liaoshang'],[]],    
            'GXS_lishishi':['female','GXS_min',3,['GXS_manwu','GXS_hongzhuang'],[]],
            
            'GXS_sudaji':['female','GXS_chen',3,['GXS_shixin','GXS_meiguo'],[]],
            'GXS_dyxiaoqiao':['female','GXS_min',3,['GXS_xintianxiang','GXS_guose'],['ext:RE：英雄杀/GXS_xiaoqiao.jpg']],               
            'GXS_huamulan':['female','GXS_chen',3,['GXS_yizhuang','GXS_mili'],[]],

            'GXS_lvzhi':['female','GXS_jun',4,['GXS_zhensha','GXS_xumou'],[]],

            'GXS_xishi':['female','GXS_min',3,['GXS_meihuo','GXS_chenyu'],[]],
            'GXS_murong':['female','GXS_jun',4,['GXS_diehun'],[]],                        
              
            //微信独有
        'GXS_goujian':["male","GXS_jun",3,["GXS_yinren","GXS_tuqiang"],[]],
        'GXS_chenyuanyuan':['female','GXS_min',3,['GXS_hongyan','GXS_chuchu'],[]],
        'GXS_zhaofeiyan':['female','GXS_chen',3,['GXS_yubu','GXS_qingying'],[]],
        'GXS_baosi':['female','GXS_chen',3,['GXS_zhiyu','GXS_fenghuo'],[]],
        'GXS_yangyanzhao':['male','GXS_chen',4,['GXS_tianlang','GXS_yinqiang'],[]],
        'GXS_direnjie':['male','GXS_chen',4,['GXS_jujian','GXS_shentan'],[]],
        'GXS_chensheng':['male','GXS_jun',4,['GXS_qiyi'],[]],
        'GXS_dongfangshuo':['male','GXS_chen',3,['GXS_cifu','GXS_zhisheng'],[]],    
        'GXS_quyuan':['male','GXS_chen',3,['GXS_shangguo','GXS_beifu'],[]],
		'GXS_xiajie':['male','GXS_jun',4,['GXS_jiabeng','GXS_shenli'],[]],
		'GXS_weiqing':['male','GXS_chen',4,['GXS_huguo','GXS_qiantui'],[]],
		'GXS_xuanzang':['male','GXS_min',3,['GXS_pudu','GXS_jiasha'],[]],
		'GXS_zhangliang':['male','GXS_chen',3,['GXS_mouci','GXS_xuzhi'],[]],
		'GXS_luobinwang':['male','GXS_chen',3,['GXS_yongwu','GXS_xiwen'],[]],
		'GXS_simaxiangru':['male','GXS_chen',3,['GXS_qiuhuang','GXS_jianlie'],[]],
		'GXS_libai':['male','GXS_min',3,['GXS_jiuxian','GXS_yaoyue'],[]],
		'GXS_dufu':['male','GXS_chen',3,['GXS_shisheng','GXS_beimin'],[]],
		'GXS_tantaiming':['male','GXS_chen',4,['GXS_aojian','GXS_xinmo'],[]],
		'GXS_renhuanzhi':['male','GXS_min',4,['GXS_xiadan','GXS_tianyi'],['ext:RE：英雄杀/GXS_renhuanzhi.jpg']],
		'GXS_vxmurong':['female','GXS_jun',4,['GXS_vxdiehun'],[]],
		'GXS_yuantiangang':['male','GXS_chen',3,['GXS_xiangshu','GXS_quji'],[]],
		"GXS_liuche":["male","GXS_jun",4,["GXS_xiongcai","GXS_zhengfa"],[]],
		"GXS_luban":["male","GXS_min",3,["GXS_guifu","GXS_shengong"],[]],
       "GXS_zhaoyong":["male","GXS_jun",4,["GXS_hufu","GXS_hanbei"],[]],
       "GXS_qinqiong":["male","GXS_chen",5,["GXS_fanji","GXS_menshen"],[]],
       "GXS_yuwenhuaji":["male","GXS_chen",4,["GXS_cuanni","GXS_jiandi"],[]],
       "GXS_sunwu":["male","GXS_chen",4,["GXS_bingsheng","GXS_qiji"],[]],
       "GXS_bole":["male","GXS_min",4,["GXS_shicai","GXS_xiangma"],[]],
       "GXS_guanyu":["male","GXS_chen",4,["GXS_wusheng","GXS_danqi","GXS_budao"],[]],
       "GXS_lvbu":["male","GXS_chen",4,["GXS_wushuang","GXS_fangtian","GXS_shenji"],[]],
       "GXS_baiqi":["male","GXS_chen",4,["GXS_jianmie","GXS_zhuiji"],[]],
         "GXS_yangguang":["male","GXS_jun",3,['GXS_ygjujian',"GXS_yaoyi"],[]],
       "GXS_jiangshang":["male","GXS_chen",3,["GXS_dudiao","GXS_taolve"],[]],
       "GXS_lanlingwang":["male","GXS_jun",3,["GXS_pojun","GXS_zhubei","GXS_yushuai"],[]],
       "GXS_sunquan":["male","GXS_jun",4,["GXS_zhiheng","GXS_beixi"],[]],
       "GXS_xiaohe":["male","GXS_chen",3,["GXS_yuefa","GXS_yunliang"],[]],
       "GXS_xcxzhaoyun":["male","GXS_chen",4,["GXS_guyong","GXS_huzhu"],[]],
       "GXS_linchong":["male","GXS_min",4,["GXS_baotou"],[]],
       "GXS_lizicheng":["male","GXS_jun",4,["GXS_yongchuang","GXS_lumang"],[]],
       "GXS_liguang":["male","GXS_chen",4,["GXS_feijiang","GXS_shanshe"],[]],
        "GXS_dayu":["male","GXS_jun",4,["GXS_zhuding","GXS_zhishui"],[]],
        "GXS_kongzi":["male","GXS_min",3,["GXS_chongru","GXS_shouli"],[]],
        "GXS_mengtian":["male","GXS_chen",3,["GXS_zhengzhao","GXS_haoling"],[]],
		'GXS_liqingzhao':['female','GXS_min',3,['GXS_yuci','GXS_shangli'],[]],
		'GXS_vxlvzhi':['female','GXS_jun',4,['GXS_vxxumou','GXS_vxzhensha'],[]],
		'GXS_daji':['female','GXS_chen',3,['GXS_vxshixin','GXS_vxmeiguo'],[]],
		'GXS_wenjiang':['female','GXS_chen',3,['GXS_zhenglve','GXS_beide'],[]],
		'GXS_zhurong':['female','GXS_chen',3,['GXS_huoshen','GXS_manhou'],[]],
		'GXS_wangzhaojun':['female','GXS_chen',3,['GXS_luoyan','GXS_heqin'],[]],
		'GXS_xiaotaihou':['female','GXS_jun',4,['GXS_juma','GXS_qinzheng'],[]],
		'GXS_yangyuhuan':['female','GXS_chen',3,['GXS_xiuhua','GXS_fengyan'],[]],
		'GXS_yyuji':['female','GXS_chen',3,['GXS_sheshen','GXS_juebie'],[]],
		'GXS_vxhuamulan':['female','GXS_chen',3,['GXS_remili','GXS_reyizhuang'],[]],
		'GXS_muguiying':['female','GXS_chen',3,['GXS_jiaozhen','','GXS_yinglie'],[]],
		'GXS_zhuowenjun':['female','GXS_chen',3,['GXS_qinxin','GXS_xiangshou'],[]],
		'GXS_shangguanwaner':['female','GXS_chen',3,['GXS_nvxiang','GXS_qicai'],[]],
		'GXS_zhangsunhuanghou':['female','GXS_chen',3,['GXS_jiandie','GXS_xianzhu'],[]],
		'GXS_wuzetian':['female','GXS_jun',3,['GXS_nvhuang','GXS_qiandu'],[]],
		'GXS_weizifu':['female','GXS_chen',4,['GXS_zhenlie','GXS_jiade'],[]],
		'GXS_moxi':['female','GXS_chen',3,['GXS_liebo','GXS_yaoji'],[]],
		'GXS_miyue':['female','GXS_chen',3,['GXS_youmie','GXS_zhangzheng'],[]],
		"GXS_diaochan":["female","GXS_min",3,["GXS_lijian","GXS_biyue"],[]],		
       "GXS_liji":["female","GXS_chen",4,["GXS_dihui","GXS_mimou"],[]],
       'GXS_vxlikui':['male','GXS_min',4,['GXS_vxfuchou'],[]],
        'GXS_xiangyu':['male','GXS_jun',4,['GXS_bawang','GXS_pofu'],[]],
        'GXS_jifa':['male','GXS_jun',4,['GXS_taofa','GXS_zhubao'],[]],
        'GXS_huoqubing':['male','GXS_chen',3,['GXS_tiandu','GXS_wangshen'],[]],
        'GXS_hanxin':['male','GXS_chen',3,['GXS_bingxian','GXS_gongxin'],[]],
        'GXS_guiguzi':['male','GXS_chen',3,['GXS_zongheng','GXS_yinju'],[]],
        'GXS_qihuangong':['male','GXS_jun',4,['GXS_zhiba','GXS_bazhu'],[]],
        'GXS_baozheng':['male','GXS_chen',3,['GXS_pingyuan','GXS_shenduan'],[]],
        'GXS_jingke':['male','GXS_min',4,['GXS_juesha','GXS_cike'],[]],
        'GXS_liubowen':['male','GXS_chen',3,['GXS_zhanbu','GXS_guiyin'],[]],
        'GXS_lishimin':['male','GXS_jun',4,['GXS_kongju','GXS_shenjun'],[]],
        'GXS_yingzheng':['male','GXS_jun',4,['GXS_jiquan'],[]],
        'GXS_tiemuzhen':['male','GXS_jun',4,['GXS_vxqianglve','vxqishe'],[]],
        'GXS_menghuo':['male','GXS_jun',4,['GXS_qizong','GXS_manwang'],[]],
        'GXS_liubang':['male','GXS_jun',4,['GXS_yuren'],[]],
        'GXS_mozi':['male','GXS_min',3,['GXS_feigong','GXS_jianai'],[]],
        'GXS_liyu':['male','GXS_jun',3,['GXS_chaotuo','GXS_houzhu'],[]],
        'GXS_xcxzhangfei':['male','GXS_chen',4,['GXS_shenyong','GXS_podi'],[]],
        'GXS_luocheng':['male','GXS_chen',4,['GXS_biaoqi','GXS_hanqiang'],[]],
        'GXS_luzhishen':['male','GXS_min',4,['GXS_kuangchan','GXS_dili'],[]],
        'GXS_kangxi':['male','GXS_jun',3,['GXS_mingcha','GXS_xuefan'],[]],//极度嫌弃的将
        'GXS_xuxiake':['male','GXS_chen',4,['GXS_chuyou','GXS_suyuan'],[]],
        'GXS_chengyaojin':['male','GXS_chen',4,['GXS_qixi','GXS_kuangfu'],[]],
        'GXS_shangyang':['male','GXS_chen',3,['GXS_fajia','GXS_bianfa'],[]],
        'GXS_shangzhou':['male','GXS_jun',4,['GXS_zhongpan','GXS_wudao'],[]],
        'GXS_shiqian':['male','GXS_min',3,['GXS_qingmin','GXS_feizei','GXS_shentou'],[]],
        'GXS_songjiang':['male','GXS_min',4,['GXS_shucai'],[]],
        'GXS_tangbohu':['male','GXS_min',3,['GXS_luobi','GXS_fengliu'],[]],
        'GXS_wusong':['male','GXS_min',4,['GXS_zuijiu','GXS_xingzhe'],[]],
        'GXS_zhuyuanzhang':['male','GXS_jun',4,['GXS_qiangyun'],[]],
        'GXS_xcxzhugeliang':['male','GXS_chen',3,['GXS_miaoji','GXS_dongcha'],[]],
        'GXS_zhaokuangying':['male','GXS_jun',4,['GXS_shiquan','GXS_lixian'],[]],
        'GXS_zhangsanfeng':['male','GXS_min',4,['GXS_ybudao','GXS_taiji'],[]],
         'GXS_yuefei':['male','GXS_chen',4,['GXS_longnu','GXS_wumu'],[]],
         'GXS_panan':['male','GXS_min',4,['GXS_qingmu','GXS_daowang'],[]],
         'GXS_xcxzhouyu':['male','GXS_chen',3,['GXS_liance','GXS_nishi'],[]],   
         'GXS_lianpochar':['male','GXS_chen',5,['GXS_lianpo','GXS_fujing'],[]],   
         'GXS_xcxsimayi':['male','GXS_chen',3,['GXS_langgu','GXS_zhuolve'],[]],   
         'GXS_fanli':['male','GXS_min',3,['GXS_quancai','GXS_shiyong'],[]],
         'GXS_rebianque':['male','GXS_min',3,['GXS_rehuichun','GXS_reliaoshang','GXS_yide'],['ext:RE：英雄杀/GXS_bianque.jpg']],
         'GXS_vxxiaoqiao':['female','GXS_min',3,['GXS_vxtianxiang','GXS_guose'],['ext:RE：英雄杀/GXS_xiaoqiao.jpg']],
         'GXS_vxmachao':['male','GXS_chen',4,['GXS_qingji','GXS_xiaoji'],[]],
           //线上独有
            GXS_olliqingzhao:["female","GXS_min",3,["GXS_olyuci","GXS_olshangli"],[]],
            GXS_olmuguiying:["female","GXS_min",4,["GXS_olyinglie","GXS_oljiaozhen","GXS_olguashuai"],[]],
            "GXS_dyzhaoyun":["male","GXS_chen",4,["GXS_dytujin","GXS_dylongdan"],[]],
            "GXS_sbdks":["male","GXS_min",4,["GXS_dyjiasuo","GXS_dyzaofan"],[]],
            "GXS_aijiyanhou":["female","GXS_jun",4,["GXS_seyou","GXS_sheshi"],[]],
            "GXS_dypanan":["male","GXS_min",4,["GXS_zirong","GXS_daowang"],['ext:RE：英雄杀/GXS_panan.jpg']],
            "GXS_dylanlingwang":["male","GXS_chen",4,["GXS_guimian","GXS_dyyuxue"],['ext:RE：英雄杀/GXS_lanlingwang.jpg']],            
            'GXS_zhangliao':['male','GXS_chen',4,['GXS_liangjiang'],[]],
            'GXS_dyyangguang':['male','GXS_jun',4,['GXS_dyjujian','GXS_dyyaoyi','GXS_dyshiqin'],['ext:RE：英雄杀/GXS_yangguang.jpg']],
            'GXS_dyqihuangong':['male','GXS_jun',4,['GXS_dyzhiba'],['ext:RE：英雄杀/GXS_qihuangong.jpg']],
            'GXS_dyyuwenhuaji':['male','GXS_chen',4,['GXS_dycuanquan','GXS_dylongluo'],['ext:RE：英雄杀/GXS_yuwenhuaji.jpg']],
            'GXS_gaoqiu':['male','GXS_chen',3,['yxsduji','yxszhuanquan'],[]],
            'GXS_zhitianxinchang':['male','GXS_chen',4,['GXS_dybuwu','GXS_dyyewang'],[]],
            'GXS_wusangui':['male','GXS_chen',4,['GXS_touji'],[]],
            'GXS_xiaozhuang':['female','GXS_chen',3,['GXS_youshui','GXS_tianming'],[]],
            'GXS_dyxiaotaihou':['female','GXS_jun',4,['GXS_dyjuma','GXS_qinzheng'],[]],
            'GXS_taipinggongzhu':['female','GXS_chen',3,['GXS_dyxiudao','GXS_dyzhenguo'],[]],
            'GXS_dylvbu':['male','GXS_chen',4,['GXS_dyxiaoyong','GXS_dywushuang'],['ext:RE：英雄杀/GXS_lvbu.jpg']],
            'GXS_dymoxi':['female','GXS_chen',3,['GXS_dyliebo','GXS_dyyaoji'],[]],
            'GXS_dywenjiang':['female','GXS_chen',3,['GXS_dyzhenglve','GXS_dybeide'],['ext:RE：英雄杀/GXS_wenjiang.jpg']],
            'GXS_re_dywenjiang':['female','GXS_chen',3,['GXS_xiezheng','GXS_wencai'],['ext:RE：英雄杀/GXS_wenjiang.jpg']],
            'GXS_dymiyue':['female','GXS_chen',3,['GXS_dyyoumie','GXS_dyzhangzheng'],[]],
            'GXS_dyliubei':['male','GXS_jun',3,['GXS_dyjieyi','GXS_dyrende'],[]],
            'GXS_rehuamulan':['female','GXS_chen',3,['GXS_dyyizhuang','GXS_mili'],['ext:RE：英雄杀/GXS_huamulan.jpg']],
            'GXS_dyguiguzi':['male','GXS_chen',3,['GXS_dyzongheng','GXS_dyyinju','GXS_qianmou'],['ext:RE：英雄杀/GXS_guiguzi.jpg']],
            'GXS_zhubajie':['male','GXS_chen',4,['GXS_tianpeng','GXS_jingtan'],[]],
            'GXS_change':['female','GXS_chen',4,['GXS_benyue','GXS_lingyao'],[]],
            'GXS_mymiyue':['female','GXS_chen',3,['GXS_myyoumie','GXS_myzhangquan'],[]],
            'GXS_yuenv':['female','GXS_min',3,['GXS_jiandao','GXS_shoujian','GXS_jianji'],[]],
            'GXS_xunzi':['male','GXS_min',3,['GXS_quyong','GXS_quanxue'],[]],
            'GXS_zhangyi':['male','GXS_chen',3,['GXS_vxyoushui','GXS_lianheng'],[]],
            'GXS_dianwei':['male','GXS_chen',4,['GXS_xuezhan'],[]],
            'GXS_zhangchuchen':['female','GXS_min',3,['GXS_feiren','GXS_yexing'],[]],
            //线下
            'GXS_zhende':['female','GXS_min',3,['GXS_retongfu','GXS_shengnv'],[]],
            'GXS_nvwa':['female','GXS_jun',4,['GXS_zaoren','GXS_wahuang','GXS_shenyou'],[]],
            'GXS_hunxiaoqiao':['female','shen',3,['GXS_chujia','GXS_zhijie'],[]],
            'GXS_hundiaochan':['female','shen',3,['GXS_fengyi','GXS_wange','GXS_kuixin'],[]],
            'GXS_ninger':['female','GXS_min',3,['GXS_bingxin','GXS_zhinan'],[]],
            'GXS_hunlinchong':['male','shen',4,['GXS_zhongwu','GXS_xiedao'],[]],
            'GXS_hunxiangyu':['male','shen',4,['GXS_hongmen','GXS_guixiong','GXS_hunpofu'],[]],
            'GXS_hunyangyuhuan':['female','shen',3,['GXS_yuxian','GXS_nichang'],[]],
            GXS_mhw:['male','GXS_chen',4,['GXS_fenshen','GXS_huoyan','GXS_tengyun'],[]],
		GXS_liuer:['female','GXS_min',4,['GXS_luanzhen','GXS_xuezui'],[]],
		GXS_folkpanjinlian:['female','GXS_min',3,['GXS_jndufu','GXS_shifu'],[]],
            //diy
            GXS_diyzhende:['female','qun',3,['GXS_wanrong','GXS_xundao'],[]],
            GXS_huaqiangu:['female','妖',3,['GXS_honghuang','GXS_fanshi','GXS_shenzun'],[]],
            GXS_panjinlian:['female','GXS_min',3,['GXS_pishuang','GXS_chuoyue'],[]],
            GXS_sgwe:['female','GXS_chen',3,['GXS_cangfeng','GXS_zhuanfa'],[]],
		    GXS_hml:['female','GXS_chen',3,['GXS_tujin','GXS_jianfeng'],[]],
		    GXS_zj:['female','GXS_chen',3,['GXS_luoshen','GXS_tanxi'],[]],
		    GXS_wzt:['female','GXS_jun',4,['GXS_zhicai','GXS_nvdi'],[]],
		    GXS_ssqx:['female','GXS_chen',4,['GXS_nvwushen'],[]],
		    GXS_my:['female','GXS_chen',3,['GXS_huanyi','GXS_anying'],[]],
		    GXS_yyh:['female','GXS_chen',3,['GXS_jinghong','GXS_wznichang'],[]],
		    GXS_lb:['male','GXS_min',3,['GXS_jiange','GXS_zuijian'],[]],
		    GXS_luxueqi:['female','GXS_min',4,['GXS_tianya','GXS_tianshu'],[]],
		    'GXS_diychange':['female','GXS_chen',4,['GXS_guqi','GXS_relingyao'],[]],
        },
        translate:{
        GXS_jun:'君',
        GXS_chen:'臣',
        GXS_min:'民',        	
        GXS_junColor:"#b0d0e2",
       	GXS_chenColor:"#ffddb9",
	    GXS_minColor:"#b2d9a9",      
	    GXS_jiutianxn:"九天玄女",
            'GXS_bianque':'OL扁鹊',   
            'GXS_lishishi':'李师师',   
            'GXS_sudaji':'苏妲己',
            'GXS_nvwa':'女娲',
            'GXS_dyxiaoqiao':'OL小乔',
            'GXS_vxxiaoqiao':'小乔',
            'GXS_hunxiaoqiao':'魂小乔',
            'GXS_zhende':'贞德',
            'GXS_hundiaochan':'魂貂蝉',
            'GXS_hunlinchong':"魂林冲",
            'GXS_hunxiangyu':'魂项羽',
            'GXS_hunyangyuhuan':'魂杨玉环',
            'GXS_zhubajie':'猪八戒',
            'GXS_change':"嫦娥",
            'GXS_diychange':"嫦娥",
            'GXS_ninger':"凝儿",
            'GXS_mhw':"孙悟空",
            'GXS_liuer':"六耳猕猴",
            'GXS_zhangchuchen':"张初尘",
            
            'GXS_huamulan':'旧花木兰',     
            GXS_rehuamulan:'OL花木兰',     
            'GXS_lvzhi':'OL吕雉',

            'GXS_xishi':'西施',
            'GXS_murong':'OL慕容',
            
            'GXS_olliqingzhao':'OL李清照',
            'GXS_olmuguiying':'OL穆桂英',
            'GXS_dyzhaoyun':'OL赵云',
            'GXS_sbdks':'斯巴达克斯',
            'GXS_dypanan':'OL潘安',
            'GXS_dylanlingwang':'OL兰陵王',
            'GXS_zhangliao':'张辽',
            'GXS_dyyangguang':'OL杨广',
            'GXS_dyqihuangong':'OL齐桓公',
            'GXS_dyyuwenhuaji':'OL宇文化及',
            'GXS_gaoqiu':'OL高俅',
            'GXS_zhitianxinchang':'织田信长',
            'GXS_wusangui':'SP吴三桂',
            'GXS_xiaozhuang':'孝庄',
            'GXS_taipinggongzhu':'太平公主',
            'GXS_dyxiaotaihou':'OL萧太后',
            "GXS_dylvbu":"OL吕布",
            'GXS_dymoxi':'OL妺喜',
            'GXS_dywenjiang':"旧文姜",
            'GXS_re_dywenjiang':"OL文姜",
            'GXS_dymiyue':"OL芈月",
            'GXS_dyliubei':"OL刘备",
            'GXS_aijiyanhou':"克利奥帕特拉",
            'GXS_dyguiguzi':"OL鬼谷子",
            'GXS_mymiyue':"新芈月",
            'GXS_dianwei':"典韦",

        'GXS_direnjie':'狄仁杰',    
        'GXS_baosi':'褒姒',
        'GXS_zhaofeiyan':'赵飞燕', 
        'GXS_chensheng':'陈胜',
        'GXS_chenyuanyuan':'陈圆圆',    
        'GXS_yangyanzhao':'杨延昭',
        'GXS_vxlikui':'李逵',
        'GXS_dongfangshuo':'东方朔',
		'GXS_quyuan':'屈原',
		'GXS_xiajie':'夏桀',
		'GXS_weiqing':'卫青',
		'GXS_xuanzang':'玄奘',
		'GXS_zhangliang':'张良',
		'GXS_luobinwang':'骆宾王',
		'GXS_libai':'李白',
		'GXS_dufu':'杜甫',
		'GXS_yuantiangang':'袁天罡',
		'GXS_liqingzhao':'李清照',
		'GXS_vxlvzhi':'吕雉',
		 'GXS_daji':'妲己',
		'GXS_wenjiang':'文姜',
		'GXS_zhurong':'祝融',
		'GXS_wangzhaojun':'王昭君',
		'GXS_xiaotaihou':'萧太后',
		'GXS_yangyuhuan':'杨玉环',
		'GXS_yyuji':'虞姬',
		'GXS_vxhuamulan':'花木兰',
		'GXS_muguiying':'穆桂英',
		'GXS_zhuowenjun':'卓文君',
		'GXS_shangguanwaner':'上官婉儿',
		'GXS_zhangsunhuanghou':'长孙皇后',
		'GXS_wuzetian':'武则天',
		'GXS_weizifu':'卫子夫',
		'GXS_moxi':'妺喜',
		'GXS_miyue':'芈月',
		'GXS_vxmurong':'慕容',
		'GXS_simaxiangru':'司马相如',
		'GXS_tantaiming':'澹台名',
		'GXS_renhuanzhi':'任桓之',
            "GXS_liuche":"刘彻",
            "GXS_goujian":"勾践",
            "GXS_luban":"鲁班",
            "GXS_zhaoyong":"赵雍",
            "GXS_qinqiong":"秦琼",
            "GXS_liji":"骊姬",
            "GXS_yuwenhuaji":"宇文化及",
            "GXS_sunwu":"孙武",
            "GXS_bole":"伯乐",
             "GXS_guanyu":"关羽",
             "GXS_lvbu":"吕布",
             "GXS_diaochan":"貂蝉",
             "GXS_baiqi":"白起",
             "GXS_yangguang":"杨广",
             "GXS_jiangshang":"姜尚",
             "GXS_lanlingwang":"兰陵王",
             "GXS_sunquan":"孙权",
             "GXS_xiaohe":"萧何",
             "GXS_xcxzhaoyun":"赵云",
             "GXS_linchong":"林冲",
             "GXS_lizicheng":"李自成",
             "GXS_liguang":"李广",
             "GXS_dayu":"大禹",
             "GXS_kongzi":"孔子",
             "GXS_mengtian":"蒙恬",
             'GXS_xiangyu':'项羽',
             'GXS_jifa':'姬发',
             'GXS_huoqubing':'霍去病',
             'GXS_hanxin':'韩信',
             'GXS_guiguzi':'鬼谷子',
             'GXS_qihuangong':'齐桓公',
             'GXS_baozheng':'包拯',
             'GXS_jingke':'荆轲',
             'GXS_liubowen':'刘伯温',
             'GXS_lishimin':'李世民',
             'GXS_yingzheng':'嬴政',
             'GXS_tiemuzhen':'铁木真',
             'GXS_menghuo':'孟获',
             'GXS_liubang':'刘邦',
             'GXS_mozi':'墨子',
             'GXS_liyu':'李煜',
             'GXS_xcxzhangfei':'张飞',
             'GXS_luocheng':'罗成',
             'GXS_luzhishen':'鲁智深',
             'GXS_kangxi':'康熙',
             'GXS_xuxiake':'徐霞客',
             'GXS_chengyaojin':'程咬金',
             'GXS_shangyang':'商鞅',
             'GXS_shangzhou':'商纣',
             'GXS_shiqian':'时迁',
             'GXS_songjiang':'宋江',
             'GXS_tangbohu':'唐伯虎',
             'GXS_wusong':'武松',
             'GXS_zhuyuanzhang':'朱元璋',
             'GXS_xcxzhugeliang':'诸葛亮',
             'GXS_zhaokuangying':'赵匡胤',
             'GXS_zhangsanfeng':'张三丰',
             'GXS_yuefei':'岳飞',
             'GXS_panan':'潘安',
             'GXS_xcxzhouyu':'周瑜',
             'GXS_lianpochar':'廉颇',
             'GXS_xcxsimayi':'司马懿',
             'GXS_fanli':'范蠡',
             'GXS_rebianque':'扁鹊',
             'GXS_vxmachao':'马超',
             'GXS_yuenv':'越女',
             'GXS_xunzi':'荀子',
             'GXS_zhangyi':'张仪',
             
             GXS_diyzhende:'贞德',
             GXS_huaqiangu:'花千骨',
             GXS_panjinlian:'潘金莲',
             GXS_folkpanjinlian:'潘金莲',
             GXS_sgwe:'上官婉儿',
		     GXS_hml:'花木兰',
		     GXS_zj:'甄姬',
		     GXS_wzt:'武则天',
		     GXS_ssqx:'上杉谦信',
		     GXS_my:'芈月',
		     GXS_yyh:'杨玉环',
		     GXS_lb:'李白',
		     GXS_luxueqi:'陆雪琪',
        },
        characterIntro:{
        'GXS_goujian':"勾践（本名姒鸠浅，别名菼执，约公元前520年-公元前465年），出生于大越（今浙江绍兴），夏禹后裔，越王允常之子，春秋末年越国国君。因其“卧薪尝胆”的典故，成为中华民族不惧失败与屈辱，敢于拼搏的楷模。",
        'GXS_chenyuanyuan':"陈圆圆（原名：邢沅，1623年4月3日-1695年5月16日），字圆圆、畹芳，江苏武进（今常州）人，为明末清初吴中名优，“秦淮八艳”之一。相传李自成攻破北京后，手下刘宗敏掳走陈圆圆，吴三桂遂引清军入关。",
        'GXS_zhaofeiyan':"赵飞燕（？-前1年），出生于长安（今陕西西安），西汉汉成帝的第二任皇后，汉哀帝时的皇太后，是一位颇具传奇色彩的女子。因其体态轻盈，身轻如燕，传说中能作掌上舞，所以得名“飞燕”。她和妹妹赵合德因貌美被汉成帝宠爱。赵飞燕告发许皇后蛊诅后宫女子，使许皇后被废。汉成帝力排众议立赵飞燕为皇后。汉成帝逝后，赵飞燕被尊为皇太后，与王氏一族不合。汉哀帝逝后，赵飞燕被废为庶人，后自杀，葬于延陵附近。",
        'GXS_baosi':"褒姒（姒姓，别称：襃姒、褎姒），褒国人，周幽王姬宫湦第二任王后，太子姬伯服的生母，周平王姬宜臼的后母。",
        'GXS_yangyanzhao':"杨延昭（本名杨延朗，别称杨六郎，958年-1014年），并州太原（今山西太原）人，杨业之子，北宋抗辽名将。自幼随父征战。在雍熙北伐时作为先锋，身中流矢而不惧，越战越勇，终于攻下朔州城。其父死后，担负起河北延边抗辽重任，在景州（今河北景县）、保州（今河北安新县）等地抵御辽军侵扰。他守卫的遂城被称为“铁遂城”，威震边庭。死后陪葬于永安县（今河南巩义宋英宗永厚陵）。",
        GXS_olmuguiying:"穆桂英，民间传说的杨家将人物，杨宗保之妻。原为穆柯寨穆羽之女，武艺超群，机智勇敢。因阵前与杨宗保交战，生擒宗保并招之成亲，归于杨家将之列，为杨门女将中的杰出人物。征辽时为帅，大破天门阵，击败辽军，迫使辽国遣使求和。 南方侬智高作乱，穆桂英与其夫杨宗保挂帅出征，平定叛乱。后佘太君百岁挂帅，穆桂英以五十岁高龄挂先锋印，深入险境，力战番将，最后大败西夏，迫使西夏议和臣服。",
            "GXS_sbdks":'斯巴达克斯是巴尔干半岛东北部的色雷斯人，罗马侵入北希腊时，他被俘虏，并被卖为角斗士奴隶，送到卡普亚城一所角斗士学校参训。他和他的同伴克雷斯和奥梅尼奥斯在角斗士学校的厨房发起暴动，逃到维苏威火山上发动起义。 起义队伍由七十余名角斗士很快发展为十余万人，并多次战胜罗马军队。“一位杰出的英雄，领导了最伟大的一次奴隶起义。”列宁曾如此评价古罗马英雄斯巴达克斯，可见斯巴达克斯的勇敢和领导力。',
            "GXS_dypanan":'潘安，西晋文学家，本名潘岳，字安仁，乳名檀奴。潘安之名始于杜甫《花底》诗句“恐是潘安县，堪留卫玠车”，中国古代最著名美男子之首、“金谷二十四友”之首。',
            "GXS_dylanlingwang":'兰陵王高长恭，南北朝时期文襄帝高澄四子，北齐大将。兰陵王为人品行高洁，一心报国。作为名将更是足智多谋,勇冠三军。每战必一马当先，冲阵破敌，以振军心，将个人生死置之度外，得到手下将士的忠诚与爱戴。史记兰陵王容貌极为俊美，可列古代四大美男，因而每战必以恶鬼面具遮面，威慑敌军，从而百战百胜。',            
            'GXS_zhangliao':'张辽（169年—222年），字文远，雁门马邑（今山西朔州市）人。汉末三国时期曹魏名将，聂壹的后人。东汉末年，张辽担任雁门郡吏。又先后跟随丁原、何进、董卓、吕布，恪尽职守，历尽坎坷。吕布败亡后，张辽归属曹操。对于张辽来说，在跟随吕布这位诸侯期间，和曹操阵营展开了激烈的较量。不过，对于才能卓著的张辽，曹操可谓不计前嫌，并不断重用。对于张辽这位降将来说，也没有辜负曹操的信任和期望。',
            'GXS_zhitianxinchang':'织田 信长（日语：おだ のぶなが，1534年6月23日-1582年6月21日），幼名吉法师，出生于尾张国的胜幡城或那古野城（现爱知县西部名古屋市 ，日本战国时代到安土桃山时代的大名、天下人，“日本战国三杰”之一。织田信长原本是尾张国的大名，于桶狭间合战中击破今川义元的大军而名震全国，后通过拥护室町幕府的末代将军足利义昭趁势上洛（割据地方的势力率军前往京都）逐渐控制京都，之后正式提出“天下布武”的纲领，将统一全日本作为目标；先后两次打破“信长包围网”，将各个有力敌对大名逐个击破，掌握了一大半的日本领土。他施行大量使用火枪的战术，实行兵农分离，鼓励自由贸易，整顿交通路线等革新政策，开拓了日本近代化的道路。他成功控制以近畿地方为主的日本政治文化核心地带，使织田氏成为日本战国时代中晚期最强大的大名，并使从应仁之乱起持续百年以上的战国乱世步向终结。元龟四年，（1573年）织田信长将室町幕府的末代将军足利义昭从京都放逐，至此室町幕府灭亡。天正十年（1582年）6月，在即将一统全国前夕，于京都本能寺之变中被心腹家臣明智光秀谋反而自杀。他死后，部将丰臣秀吉和德川家康在他奠定的基础上完成了统一全国的大业。',
        },
        perfectPair:{
        GXS_simaxiangru:["GXS_zhuowenjun"],
        GXS_yyuji:["GXS_xiangyu"],
        GXS_fanli:["GXS_xishi"],
        },
    },   
    skill:{
        skill:{        
			//武将技能
			"GXS_tianya":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        source:"damageBegin",
    },
    direct:true,
    filter:function(event,player){
    return event.nature==undefined&&player.hasCard(function(i){
		if(_status.connectMode) return true;
	    return get.suit(i,player)=='spade'&&get.number(i,player)>1&&get.number(i,player)<10;
	 },'h');
    },
    content:function(){
        "step 0"
        player.chooseToDiscard('是否弃置一张♠️2-9牌使伤害+1并转化雷属性？','h',function(card){
        return get.suit(card)=='spade'&&get.number(card)>1&&get.number(card)<10;
        }).ai=function(card){
            if(get.attitude(player,trigger.player)<0){
                return 7-get.value(card);
            }
        }
        "step 1"
        if(result.bool){
            player.logSkill('GXS_tianya');
            trigger.nature='thunder';
            trigger.num++;
        }
    },
                ai:{
                    threaten:1.1,
                    expose:0.25,
                },
			},
			"GXS_tianshu":{
			audio:"ext:RE：英雄杀:2",
			global:"GXS_tianshu2",
			initList:function(player){
        var list,skills=[];
        if(get.mode()=='guozhan'){
            list=[];
            for(var i in lib.characterPack.mode_guozhan) list.push(i);
        }
        else if(_status.connectMode) list=get.charactersOL();
        else{
            list=[];
            for(var i in lib.character){
                if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
                list.push(i);
            }
        }
        for(var i of list){
            if(i.indexOf('gz_jun')==0) continue;
            for(var j of lib.character[i][3]){
                if(j=='bolan'||j=='GXS_tianshu') continue;
                var skill=lib.skill[j];
                if(!skill||skill.zhuSkill) continue;
                if(skill.init||skill.ai&&(skill.ai.combo||skill.ai.notemp||skill.ai.neg)) continue;
                var info=lib.translate[j+'_info'];
                if(info&&info.indexOf('出牌阶段限一次')!=-1) skills.add(j);
            }
        }
        player.storage.tianshu=skills;
    },
    enable:"phaseUse",
    usable:1,
    filterTarget:function(card,player,target){
		return target!=player;
	},
    content:function(){
    "step 0"
    player.chooseToPSS(target);
    "step 1"
    if (result.tie) player.loseHp();
    else if (!result.bool) target.draw(2);
    else
       if(player.isIn()){
            if(!player.storage.tianshu) lib.skill.GXS_tianshu.initList(player);
            var list=player.storage.tianshu.randomGets(3);
            if(!list.length){
                event.finish();
                return;
            }
            event.videoId=lib.status.videoId++;
            var func=function(skills,id){
                var dialog=ui.create.dialog('forcebutton');
                dialog.videoId=id;
                dialog.add('天书：选择一个技能');
                for(var i=0;i<skills.length;i++){
                    dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
                }
                dialog.addText(' <br> ');
            }
            if(player.isOnline()) player.send(func,list,event.videoId);
            else if(player==game.me) func(list,event.videoId);
            player.chooseControl(list);
        }
        else event.finish();
        "step 2"
        if (result.control){
        game.broadcastAll('closeDialog',event.videoId);
        player.addTempSkill(result.control,'phaseUseEnd');
        }
    },
    ai:{
					basic:{
						order:9
					},
					result:{
						player:1,
						target:function(player,target){
                        if(target.countCards('h')<4) return 2;
                        return -1;
                        },
					},
				}
			},
			"GXS_tianshu2":{
    audio:"GXS_tianshu",
    enable:"phaseUse",
    usable:1,
    filter:function(event,player){
    if (player.hasSkill('GXS_tianshu')) return false;
        return game.hasPlayer(function(current){
            return current.hasSkill('GXS_tianshu');
        });
    },
    direct:true,
    prompt:function(){
        var player=_status.event.player;
        var list=game.filterPlayer(function(current){
            return current.hasSkill('GXS_tianshu');
        });
        var str='与'+get.translation(list);
        if(list.length>1) str+='中的一人猜拳';
        return str;
    },
    content:function(){
        "step 0"
        var targets=game.filterPlayer(function(current){
            return current.hasSkill('GXS_tianshu');
        });
        if(targets.length==1){
            event.target=targets[0];
            event.goto(2);
        }
        else if(targets.length>0){
            player.chooseTarget(true,'选择【天书】的目标',function(card,player,target){
                return _status.event.list.contains(target);
            }).set('list',targets).set('ai',function(target){
                var player=_status.event.player;
                return get.attitude(player,target);
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool&&result.targets.length){
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        "step 2"
        if(event.target){
            player.chooseToPSS(event.target);
        }
        else{
            event.finish();
        }
        delete _status.noclearcountdown;
        game.stopCountChoose();
        "step 3"        
       if (result.tie) player.loseHp();
       else if (!result.bool) event.target.draw(2);
    else
       if(player.isIn()){
            if(!event.target.storage.tianshu) lib.skill.GXS_tianshu.initList(event.target);
            var list=event.target.storage.tianshu.randomGets(3);
            if(!list.length){
                event.finish();
                return;
            }
            event.videoId=lib.status.videoId++;
            var func=function(skills,id){
                var dialog=ui.create.dialog('forcebutton');
                dialog.videoId=id;
                dialog.add('天书：选择一个技能');
                for(var i=0;i<skills.length;i++){
                    dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
                }
                dialog.addText(' <br> ');
            }
            if(player.isOnline()) player.send(func,list,event.videoId);
            else if(player==game.me) func(list,event.videoId);
            player.chooseControl(list);
        }
        else event.finish();
        "step 4"
        if (result.control){
        game.broadcastAll('closeDialog',event.videoId);
        player.addTempSkill(result.control,'phaseUseEnd');
        }
    },
    ai:{
        order:2,
        threaten:1.5,
        result:{
            player:function(player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('GXS_tianshu');
                });
                if(target){
                    return get.attitude(player,target);
                }
            },
        },
    },
			},
			"GXS_huanyi":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        source:"damageBegin",
    },
                check: function(event,player) {
                if (player.hp==1) return 0;
					 return -get.attitude(player,event.player);
				},
                filter:function(event,player){
                return event.card&&event.card.name=="sha";
                },
                content:function(){
                player.loseHp();
                trigger.num++;
                },
                ai:{
                    threaten:1.1,
                    expose:0.25,
                },
			},
           "GXS_anying":{
           audio:"ext:RE：英雄杀:2",
           marktext:"影",
				intro:{
				name:"暗影",
				content:'mark'
				},
           trigger:{
        player:"phaseEnd",
    },
    direct:true,
    filter:function(event,player){
       return player.countMark("GXS_anying")<1&&player.countCards("he")>0;
     },
    content:function(){
        "step 0"
        var next=player.chooseToDiscard(get.prompt2('GXS_anying'),'he');
            next.set('ai',function(card){
                return 6-get.value(card);
            });
        "step 1"
        if(result.bool){
        player.addMark('GXS_anying');
        }
        },
        group:"GXS_anying_yingwu",
        subSkill:{
          yingwu:{
          trigger:{
        player:"damageBegin4",
    },
    filter:function(event,player){
    if (_status.currentPhase==player) return false;
        return player.countMark("GXS_anying")>0;
    },
    check:function(event,player) {
	    return 1;
	},
    content:function(){
        trigger.cancel();
        player.removeMark('GXS_anying',1);
    },
          }
        }
           },
			"GXS_wznichang":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"damageAfter",
    },
    direct:true,
    content:function(){
        "step 0"
        player.chooseTarget(get.prompt2('GXS_wznichang')).set('ai',function(target){
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)>0){
                return 10+get.attitude(_status.event.player,target);
            }
            if(player.getDamagedHp()==1){
                return -1;
            }
            return 1;
        });
        "step 1"
        if(result.bool){
            player.logSkill(event.name,result.targets);
            event.target=result.targets[0];
                var str1='摸两张牌';
                var str2='弃两张牌';
                player.chooseControl(str1,str2,function(event,player){
                    return _status.event.choice;
                }).set('choice',get.attitude(player,event.target)>0?str1:str2);
                event.str=str1;
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.control==event.str){
            event.target.draw(2);
        }
        else{
            event.target.chooseToDiscard(2,true,'he');
        }
    },
    ai:{
        threaten:function(player,target){
            if(target.hp==target.maxHp) return 2;
            if(target.hp==2) return 1.5;
            if(target.hp==1) return 0.5;
            return 0.2;
        },
        maixie:true,
    },
   },
			"GXS_jinghong":{
			audio:"ext:RE：英雄杀:2",
			enable:'phaseUse',
			usable:1,
				filterTarget:true,
				content:function(){
					"step 0"
					event.targets=game.filterPlayer(function(current){
            return current!=target&&current!=player&&current.inRange(target);
        });
					event.targets.sort(lib.sort.seat);
					player.line(event.targets,'green');
					"step 1"
					if(event.targets.length){
						event.current=event.targets.shift();
						if(event.current.countCards('h','sha')){
							event.current.chooseToUse({name:'sha'},target,-1);
						}
						if (target.isAlive()) event.redo();
					}
					else{
						event.finish();
					}
				},
				ai:{
                    order:9,
                    result:{
                        target:-1,
                        },
                        threaten:2,
                },
			},
			"GXS_feiren":{
			audio:"ext:RE：英雄杀:true",
				enable:'phaseUse',
				viewAs:{name:'sha'},
				check:function(card){
					return 5.1-get.value(card);
				},
				filterCard:function(card){
					return card.name=='sha'||get.subtype(card)=='equip1';
				},
				filterTarget:function(card,player,target){
					if(player.inRange(target)) return false;
					return player.canUse('sha',target,false);
				},
				position:'hes',
				viewAsFilter:function(player){
					return player.countCards('hes',lib.skill.GXS_feiren.filterCard)>0&&game.hasPlayer(function(current){
						return !player.inRange(current)&&player.canUse('sha',current,false);
					});
				},
				group:'GXS_feiren_clear',
			},
			"GXS_feiren_clear":{
				trigger:{player:'useCardAfter'},
				forced:true,
				silent:true,
				charlotte:true,
				filter:function(event,player){
					return event.skill=='GXS_feiren'&&event.addCount!==false;
				},
				content:function(){
					trigger.addCount=false;
					if(player.stat[player.stat.length-1].card.sha>0){
						player.stat[player.stat.length-1].card.sha--;
					}
				},
			},
			"GXS_yexing":{
			audio:"ext:RE：英雄杀:true",
			trigger:{
        player:["damageBegin4"],
    },
    forced:true,
    filter:function (event,player,name){
        return event.num>1;
    },
    preHidden:true,
    content:function (){
        trigger.num=1;
    },
    ai:{
        filterDamage:true,
        skillTagFilter:function(player,tag,arg){
            if(arg&&arg.player){
                if(arg.player.hasSkillTag('jueqing',false,player)) return false;
                return true;
            }
            return false;
        },
    },
   },
			"GXS_jiange":{
    audio:"ext:RE：英雄杀:2",
    trigger:{
        player:["useCard","respond","loseAfter"],
    },
    frequent:true,
    filter:function(event,player){
        if(player==_status.currentPhase) return false;
        if(event.name!='lose') return event.card.name=='sha';
        if(event.type!='discard') return false;
        if(event.cards2){
            for(var i=0;i<event.cards2.length;i++){
                if(event.cards2[i].name=='sha') return true;
            }
        }
        return false;
    },
    content:function(){
        "step 0"
        event.count=1;
        if(trigger.name=='lose'){
            event.count=0;
            for(var i=0;i<trigger.cards2.length;i++){
                if(trigger.cards2[i].name=='sha') event.count++;
            }
        }
        "step 1"
        player.draw();
        event.count--;
        "step 2"
        if(event.count){
            player.chooseBool(get.prompt2('GXS_jiange')).set('frequentSkill','mingzhe');
        }
        else event.finish();
        "step 3"
        if(result.bool){
            player.logSkill('GXS_jiange');
            event.goto(1);
        }
    },
    ai:{
        threaten:0.2,
    },
},
			"GXS_zuijian":{  
                    ai:{
                        GXS_zuijianing:true,
                        directHit_ai:true,
                       skillTagFilter:function(player,tag,arg){
                            if(tag=='GXS_zuijianing') return true;
                        },  
                    },  
                    audio:"ext:RE：英雄杀:2",
                    trigger:{player:"shaBegin"},
                    check:function (event,player){
                        var att=get.attitude(player,event.target);
                        if(att>=0){
                            if(event.target.hasShan()) return false;    
                            return event.target.hasSha();
                        }
                        else if(att<0){
                            if(event.target.hasShan()&&event.target.hasSha()) return true;
                            if(event.target.hasShan()) return true;
                            return false;    
                        }
                        return true;
                    },
                    filter:function (event,player){
                        if(event.skipShan) return false;
                        if(event.directHit) return false;
                        return !event.tulongdaoed;
                    },
                    priority:-1,
                    content:function (){   
                        trigger.setContent(lib.skill.GXS_zuijian.contentSha);  
                        trigger.set('lbzuijian',true);  
                    },
                    contentSha:function(){
                        "step 0"
                        if(typeof event.shanRequired!='number'||!event.shanRequired||event.shanRequired<0){
                            event.shanRequired=1;
                        }
                        if(typeof event.baseDamage!='number') event.baseDamage=1;
                        if(typeof event.extraDamage!='number') event.extraDamage=0;
                        "step 1"
                        if(event.skipShan){
                            event._result={bool:true};
                        }
                        else if(event.directHit){
                            event._result={bool:false};
                        }
                        else{
                            var next=target.chooseToRespond('请打出一张杀或者锦囊牌抵消此杀',function(card,player,event){
                            return card.name=='sha'||get.type(card)=='trick';
                            });
                            if(event.shanRequired>1){
                                next.set('prompt2','（共需打出'+event.shanRequired+'张杀/锦囊）');
                            }
                            next.set('ai',function(card){
                                var evt=_status.event.getParent();
                                if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
                                if(_status.event.shanRequired>1&&!get.is.object(card)&&evt.target.countCards('h','sha')<_status.event.shanRequired){
                                    return -1;
                                }
                                if(evt.target.hasSkillTag('noShan')){
                                    return -1;
                                }
                                return 11-get.value(card);
                            });
                            next.set('shanRequired',event.shanRequired);
                            next.autochoose=lib.filter.autoRespondSha;		
                        }			
                        "step 2"
                        if(!result||!result.bool){
                            event.trigger('shaHit');
                        }
                        else{
                            event.shanRequired--;
                            if(event.shanRequired>0){
                                event.goto(1);
                            }
                            else{
                                event.trigger('shaMiss');
                                event.responded=result;
                            }
                        }
                        "step 3"
                        if((!result||!result.bool)&&!event.unhurt){
                            target.damage(get.nature(event.card),event.baseDamage+event.extraDamage);
                            event.result={bool:true}
                            event.trigger('shaDamage');
                        }
                        else{
                            event.result={bool:false}
                            event.trigger('shaUnhirt');
                        }
                    },
                },
			"GXS_dyzongheng":{
				group:['GXS_dyzongheng1','GXS_dyzongheng2']
			},
			GXS_dyzongheng1:{
				audio:true,
				enable:'chooseToUse',
				filter:function(event,player){
					return player.countCards('hs',{suit:'diamond'})>0;
				},
				position:'hs',
				filterCard:function(card){
					return get.suit(card)=='diamond';
				},
				viewAs:{name:'dz_hezong'},
				prompt:'将一张♦️牌当合纵连横使用',
				check:function(card){return 4.5-get.value(card)}
			},
			GXS_dyzongheng2:{
				audio:true,
				popup:'GXS_dyzongheng',
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h',{suit:'diamond'})>0;
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';
				},
				check:function(card){
					return 5-get.useful(card);
				},
				content:function(){
					player.draw();
					if (player.hasSkill("GXS_miaoji")){
					player.logSkill("GXS_miaoji");
					var next=game.createEvent('dyzongheng_miaoji');
						next.player=player;
						next.setContent(lib.skill.GXS_miaoji.content);
						}
				},
				discard:false,
				visible:true,
				loseTo:'discardPile',
				prompt:'将一张♦️牌置入弃牌堆并摸一张牌',
				delay:0.5,
				prepare:function(cards,player){
					player.$throw(cards,1000);
					game.log(player,'将',cards,'置入了弃牌堆');					
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:1,
					},
				}
			},
			 "GXS_dyyinju":{
                audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
                return player.countCards("h");
                },
                filterCard:true,
                position:"h",
                content:function(){
                var color=get.color(cards[0]);
                player.storage.GXS_dyyinju_buff=color;
                player.addTempSkill("GXS_dyyinju_buff",{player:"phaseBegin"});
                if (player.storage.GXS_dyyinju_buff=="red"){
                player.markSkillCharacter("GXS_dyyinju_buff", player, "红色", "不受红色牌伤害");
                }else{
                player.markSkillCharacter("GXS_dyyinju_buff", player, "黑色", "不受黑色牌伤害");
                }
                },
                ai:{
                    order:9,
                    result:{
                        player:2,
                    },
                },
                subSkill:{
                buff:{
                audio:"GXS_dyyinju",
                forced:true,
                trigger:{                    
                    player:"damageBegin",
                },
                onremove:function(player){
					delete player.storage.GXS_dyyinju_buff;
					player.unmarkSkill("GXS_dyyinju_buff");
				},
                priority:15,               
                filter:function(event,player){
                if(!player.storage.GXS_dyyinju_buff) return false;
                var color=player.storage.GXS_dyyinju_buff;
                return event.card&&get.color(event.card)==color;
                },
                content:function(){
                trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                       var color=target.storage.GXS_dyyinju_buff;
                       if(get.tag(card,'damage')&&get.color(card)==color) return 'zeroplayertarget';
                       },
                    },
                },
                sub:true,
            },   
                    },
                },
			"GXS_qianmou": {
			trigger:{
        player:"useCardAfter",
    },
    forced:true,
    filter:function(event,player){
        return get.type(event.card)=='delay';
     },
			content:function(){
			trigger.card.storage.nowuxie=true;
			}
			},
			"GXS_vxtianxiang": {
			  audio:"GXS_tianxiang",
				trigger: {
					global: "judge",
				},
				check: function(event, player) {
					if (get.type(event.card) != 'delay' && event.player == player) return false;
					if (ai.get.attitude(player, event.player) >= 0 && get.type(event.card) !=
						'delay') return false;
					if (ai.get.attitude(player, event.player) <= 0 && get.type(event.card) ==
						'delay') return false;
				},
				content: function() {
				if (get.suit(trigger.player.judging[0])=="diamond"){
				player.$gain2(trigger.player.judging[0]);
				player.gain(trigger.player.judging[0]);
					}
				},
				
				contentAfter: function() {
														var evt=trigger.getParent();
					if(evt){
						game.resetSkills();
						_status.event=evt;
						_status.event.cancel();
						_status.event.untrigger(true);
					}
					},
				ai: {
					result: {
						player: function(player) {
							if (event.player.hasSkill("bagua_skill")) return -1
						},
					}
				}
			},
			 "GXS_dyyizhuang":{
                audio: "GXS_yizhuang",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                selectCard:2,
                position:"he",
                check:function(card){
        var player=get.owner(card);
        if(player.countCards('h')>player.hp)
            return 10-get.value(card)
        if(player.hp<player.maxHp)
            return 8-get.value(card)
        return 6-get.value(card)
    },
                filter:function(event,player){
           var list=[];
           for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSex('male')){
              list.push(game.dead[i].name);
          }
}
          return list.length>0&&player.countCards('he')>1; 
      },
                content:function(){
                "step 0"
   var list=[];
           for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSex('male')){
              list.push(game.dead[i].name);
          }
} 
           player.chooseButton(true,ui.create.dialog('选择一名已死亡的男性角色,你失去迷离和易装并获得其武将牌上的所有技能',[list,'character']),function(button){
           for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
           return ai.get.attitude(_status.event.player,game.dead[i]);
      }); 
           "step 1" 
        if(result.bool){
            player.reinit(player.name,result.buttons[0].link,false);
            game.broadcastAll(function(user) {
			lib.translate[player.name] = lib.translate["GXS_rehuamulan"];
			user.node.name.innerHTML = get.slimName(user.name);
			}, player);
            var num=lib.character[result.buttons[0].link][2]-player.maxHp;
			if(num>0) player.gainMaxHp(num);
			else player.loseMaxHp(-num);
          }                        
     },
                ai:{
                    order:8,
                    expose:0.2,
                    result:{
                        player:1,
                    },
                    threaten:1.1,
                },
            },
						"GXS_xintianxiang": {
						audio:"GXS_tianxiang",
				trigger: {
					global: ['phaseJudge','judgeBegin'],
				},
				check: function(event, player) {
				if (event.card&&get.effect(event.player,event.card,event.player,_status.event.player)<0) return false;
				return -get.attitude(player,event.player);
				},
				filter: function(event, player) {
					return player.countCards('he');
				},
				content: function() {
					'step 0'
					if(event.triggername=='phaseJudge'){
					var next = player.chooseToDiscard('he', '是否弃置一张牌令' + get.translation(trigger.player) + (trigger.card.isCard?get.translation(trigger.card):get.translation(trigger.card,'viewAs')) +'判定取消？', true);
					next.ai = function(card) {
						if (player.hp == 1 || trigger.num > 1) {
							return 9 - ai.get.value(card);
						}
						if (player.hp == 2) {
							return 8 - ai.get.value(card);
						}
						return 7 - ai.get.value(card);
					};
				}else{
				var next = player.chooseToDiscard('he', '是否弃置一张牌令' + get.translation(trigger.player) + '判定取消？', true);
					next.ai = function(card) {
						if (player.hp == 1 || trigger.num > 1) {
							return 9 - ai.get.value(card);
						}
						if (player.hp == 2) {
							return 8 - ai.get.value(card);
						}
						return 7 - ai.get.value(card);
					};
				}
					'step 1'
					if (result.bool) {
					if(event.triggername=='phaseJudge'){
								trigger.untrigger();
								trigger.cancelled=true;
								if(get.type(trigger.card,false)=='delay'){
								trigger.player.addJudge(trigger.card);
								}else{ 
								trigger.player.addJudge(trigger.card.viewAs,trigger.card);
								}
							}else{
							var evt=trigger.getParent();
					if(evt){
						game.resetSkills();
						_status.event=evt;
						_status.event.cancel();
						_status.event.untrigger(true);
					}
							}
					}
				},
			},
		    GXS_bingxin:{
    trigger:{
        global:["equipAfter","addJudgeAfter","loseAfter","gainAfter","loseAsyncAfter"],
    },
    frequent:true,
    filter:function (event, player) {
    if (event.getParent('useCard')&&get.type(event.card)=="equip") return true;
        return game.hasPlayer(p => {
          var evt = event.getl(p);
          return evt && evt.es && evt.es.length;
        });
      },
    content:function(){
    player.draw();
    }
    },
    GXS_zhinan:{
    enable:'phaseUse',
    filter:function(event,player){
        return player.countCards("e")&&!player.hasSkill("GXS_zhinan2");
    },
    content:function(){
    'step 0'
    player.discard(player.getCards("e"));
    var list=lib.inpile.filter(function(i){
            var type=get.type(i);
            if(type=='equip') return true;
            return false;
        });
        for(var i=0;i<list.length;i++){
            list[i]=[get.type(list[i]),'',list[i]];
        }
        player.chooseButton([get.prompt('GXS_zhinan'),[list,'vcard']],true).set('ai',function(button){
            return Math.random();
        });
        'step 1'
        if(result.bool){
            var name=result.links[0][2];
            event.vcard=result.links;
            event.cardname=name;
            player.storage.GXS_zhinan=name;
			player.addSkill('GXS_zhinan2');
        }
        else{
            event.finish();
        }
      }
    },
			"GXS_zhinan2":{
				trigger:{
					global:["loseAfter","cardsDiscardAfter"],
				},
				direct:true,
				filter:function (event,player){
					var name=player.storage.GXS_zhinan;
					var cards=event.cards;
					for(var i=0;i<cards.length;i++){
						if(cards[i].name==name&&get.position(cards[i],true)=='d') return true;
					}
					return false;
				},
				content:function (){
					'step 0'
					event.cards=[];
					var name=player.storage.GXS_zhinan;
					var cards=trigger.cards;
					for(var i=0;i<cards.length;i++){
						if(cards[i].name==name&&get.position(cards[i],true)=='d') event.cards.push(cards[i]);
					}
					'step 1'					
					player.gain(event.cards,'gain2');
					player.logSkill("GXS_zhinan")
				},
			},
		                "GXS_dyjiasuo":{
				marktext:"🔒",
				intro:{
					name:'枷锁',
					name2:'🔒',
					content:'当前有#个“🔒”',
				},
				//mark:true,
				audio:"ext:RE：英雄杀:true",
	 trigger:{
player:"phaseUseBefore",
},
"prompt2":function (event,player){ 
return '是否跳过出牌阶段？'; 
},
filter:function(event,player){ 
return player.countMark('GXS_dyjiasuo')<3;
},
check:function(event,player){ 
if(!player.hasFriend()) return false; 
if(player.getHistory('skipped').length>0) return true; 
return player.isMinHp(false); 
},
content:function(){ 
game.log(player,'跳过了出牌阶段'); 
trigger.cancel(); 
player.addMark('GXS_dyjiasuo');
},							
mod:{
maxHandcard:function(player,num){
return num+player.countMark('GXS_dyjiasuo');
},
},
			},
     "GXS_dyzaofan":{
				trigger:{
					source:"damageBegin1",
				},
				audio:"ext:RE：英雄杀:true",
				filter:function (event,player){
					
if(!player.hasMark('GXS_dyjiasuo'))return false;
return event.card&&event.card.name=='sha'||event.card&&event.card.name=='juedou';
				},
				check:function (event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(event.player.hasSkillTag('filterDamage',null,{
						player:player,
						card:event.card,
					})) return false;
					return true;
					//return player.hasMark('GXS_dyjiasuo');
				},
				prompt2:function(event){
					return '弃置一个「枷锁」标记，令对'+get.translation(event.player)+'即将造成的伤害+1。';
				},
				logTarget:"player",
				content:function(){
					player.removeMark('GXS_dyjiasuo');
					trigger.num++;
				},
			},
"GXS_dylongdan":{
				audio:"ext:RE：英雄杀:true",
				trigger:{source:'damageBegin1'},
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				forced:true,
				filter:function(event,player){
					return event.getParent().name=='sha'&&get.distance(event.player,player)>1&&event.player==player.storage.GXS_dytujin2;
				},
				content:function(){
					trigger.num++;
				}
			},
		"GXS_dytujin":{
				audio:"ext:RE：英雄杀:true",
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					player.storage.GXS_dytujin2=target;
					player.addTempSkill('GXS_dytujin2');
				},
				check:function(card){
					if(card.name=='sha'&&_status.event.player.countCards('h','sha')<=1) return 0;
					return 6-get.value(card);
				},
				filterCard:true,
				ai:{
					order:4,
					result:{
						player:function(player,target){
							if(get.distance(player,target)<=1) return 0;
							var hs=player.getCards('h','shunshou');
							if(hs.length&&player.canUse(hs[0],target,false)){
								return 1;
							}
							var geteff=function(current){
								return player.canUse('sha',current,false,true)&&get.effect(current,{name:'sha'},player,player)>0;
							}
							if(player.hasSha()&&geteff(target)){
								var num=game.countPlayer(function(current){
									return current!=player&&get.distance(player,current)<=1&&geteff(current);
								});
								if(num==0){
									if(game.hasPlayer(function(current){
										return player.canUse('sha',current)&&geteff(current)&&current!=target;
									})){
										return 1;
									}
								}
								else if(num==1){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			},
"GXS_dytujin2":{
				mark:'character',
				onremove:true,
				intro:{
					content:'你对$使用牌无视距离'
				},
mod:{
targetInRange:function(card,player,target){
if(target==player.storage.GXS_dytujin2) return true;
},
				}
			},
		  "GXS_zhongwu":{
                   audio:2,
                trigger:{
                player:"useCard",
                    },
                frequent:true,
              filter:function (event,player){
          return event.card&&event.card.name=='sha';
            },
prompt:"是否发动【忠武】摸一张牌？",
content:function (){
player.draw();
},

mod:{ 
cardUsable:function (card,player,num){ 
if(card.name=='sha') return num+player.maxHp-player.hp; 
},
},
},	          
"GXS_xiedao":{
				mod:{
					targetInRange:function (card){
						if(get.color(card)=='red') return true;
					},
				},
},			
		 "GXS_zirong":{
               subSkill:{
            2:{
mark:true,
marktext:"❤️",
intro:{
content:function (storage,player,skill){
return "锁定技，你使用杀或决斗造成的伤害+1。";
},
},
audio:"GXS_zirong",
trigger:{
source:"damageBegin1",
},
filter:function(event){
return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
},
forced:true,
content:function(){
trigger.num++;
},
ai:{
damageBonus:true,
},

sub:true,
},
},
                audio:2,
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                usable:1,
                check:function(card){
return 9-get.value(card)
},
                filterTarget:function(card,player,target){
return target!=player&&target.sex=='female';    
},
                content:function(){
target.addTempSkill('GXS_zirong_2',{player:'phaseEnd'});
},
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                        if(target.countCards('h')>3) return 5;
                        return 2;
                        },
                        threaten:2,
                    },
                },
            },      
          "GXS_guimian":{
				mod:{
					cardUsableTarget:function(card,player,target){
						if(card.name=='sha'&&target.countMark("GXS_guimian2")>0) return true;
					}
				},
          audio:"ext:RE：英雄杀:true",
				trigger:{source:'damageSource'},
				forced:true,
				filter:function(event,player){
					return !event.player.countMark("GXS_guimian2")&&event.player.isAlive();
				},
				logTarget:'player',
				content:function(){
				trigger.player.addMark("GXS_guimian2",1);
				trigger.player.addTempSkill("GXS_guimian2");
				},
			},


				"GXS_guimian2":{
				mark:true,
				marktext:"<img style=width:26px src="+lib.assetURL+"extension/RE：英雄杀/guimian.png>",
				intro:{
					content:'mark'
				},
				onremove:function(player){
				player.removeMark("GXS_guimian2",player.countMark("GXS_guimian2"));
				},
			},


 "GXS_dyzhiba":{
audio:"GXS_zhiba", 
subSkill:{
tiaoqipai:{
mark:true,
marktext:"霸",
intro:{
content:function (storage,player,skill){
return "本回合你跳过弃牌阶段。";
},
},
audio:"GXS_zhiba",
trigger:{
player:"phaseDiscardBefore",
},
forced:true,
locked:true,
content:function (){
trigger.cancel();
},
sub:true,
},
},
enable:"phaseUse",
usable:1,
filterTarget:function(card,player,target){
return player.canCompare(target);
},
filter:function(event,player){
return player.countCards('h')>0;
},
content:function(){
"step 0"
player.chooseToCompare(target);
"step 1"
if(result.bool){
player.addTempSkill('GXS_dyzhiba_tiaoqipai');
}
 else{
           if(get.is.altered('GXS_dyzhiba')){
                    player.gain([result.target]);
                    player.$gain2([result.target]);
                }
                else{
                    player.gain([result.target]);
                    player.$gain2([result.target]);
                }
             
        }
},
ai:{
                    result:{
                        target:function (player,target){
                var cards=player.getCards('h');
                var num=target.countCards('h');
                if(num>cards.length+3&&player.hp>1) return -2;
                if(num>cards.length+1&&player.hp>1) return -1;
                if(num==cards.length-1&&player.hp>1&&!get.is.altered('pozhen')) return -1;
                for(var i=0;i<cards.length;i++){
                    if(cards[i].number>9) return num==1?-1:-0.5;
                }
                return 0;
            },
                    },
                    order:9,
                },
            },

"GXS_liangjiang":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player!=player&&event.player.isAlive()&&event.player.countGainableCards(player,'hej')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        player.gainPlayerCard(get.prompt('GXS_liangjiang',trigger.player),trigger.player,'hej','visibleMove').set('ai',function(card){
            var player=_status.event.player;
            var evt=_status.event.target;
            if(get.attitude(player,evt)>0&&get.position(card)=='j') return 4+get.value(card);
     return 3;
        }).set('logSkill',['GXS_liangjiang',trigger.player]);
        
        "step 1"
            if(result.bool==false){
                        
                            event.finish();
                        }
                     
                        
                    "step 2"            
                   event.card=result.cards[0];                        
 
   "step 3" 
        var source=target;
        player.chooseTarget('选择一个目标送出'+get.translation(event.card),function(card,player,target){
            return target!=player;
        }).ai=function(target){
            var att=get.attitude(player,target);
            if(att>3&&player.countCards('h')>target.countCards('h')){
                return att;
            }
            return 0;
        } 
        
        "step 4"
        if(result.bool){
            result.targets[0].gain(card,player);
            player.$give(1,result.targets[0]);
            player.line(result.targets,'green');
            game.delay();
        }
    },
            },
 "GXS_dyyaoyi":{
                audio:"ext:RE：英雄杀:true",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        

        var num=game.countPlayer(function(current){
            return    current.group=='GXS_min';
        })
event.num1=Math.min(3,num); 
         player.draw(1+event.num1);
    },
            },
  "GXS_dyjujian":{
                audio:"ext:RE：英雄杀:2",
                prompt:"出牌阶段限一次，若场上有臣势力的角色存活，你可以将一张牌交给一名角色，若如此做，直到你的下个回合开始，该角色无法对你使用锦囊牌。",
                enable:"phaseUse",
                usable:1,
                filter:function(event, player) { 
                return player.countCards('he')>0&&game.hasPlayer(function(current){
                return current.group=='GXS_chen';
                 });
                },
                discard:false,
                line:true,
                prepare:"give",
                position:"he",
                filterCard:true,
                filterTarget:function (card,player,target){ 
        return target!=player; 
    },
                check:function(card) { 
if (get.position(card) == 'e') return -1; 
return 5 - get.value(card); 
},
                content:function() { 
target.gain(cards, player); 
target.addSkill('GXS_dyjujian_debuff'); 
},
                ai:{
                    order:1,
                    result:{
                        target:function(player, target) { 
return -1; 
},
                    },
                },
                group:["GXS_dyjujian_delete"],
                subSkill:{
                    debuff:{
                        mark:true,
                        marktext:"👂🏻",
                        mod:{
                            playerEnabled:function(card,player,target){
if(target.hasSkill('GXS_dyjujian')&&get.type2(card)=='trick') return false;
return true;
},
                        },
                        intro:{
                            content:"不能使用对杨广使用锦囊牌。",
                        },
                        sub:true,
                    },
                    delete:{
                        trigger:{
                            player:["phaseBefore","die"],
                        },
                        forceDie:true,
                        forced:true,
                        direct:true,
                        popup:false,
                        filter:function(event, player) { 
return game.hasPlayer(function(current) { 
return current.hasSkill('GXS_dyjujian_debuff'); 
}); 
},
                        content:function() { 
for (var i = 0; i < game.players.length; i++) { 
if (game.players[i].hasSkill('GXS_dyjujian_debuff')) { 
player.line(game.players[i]); 
game.players[i].removeSkill('GXS_dyjujian_debuff'); 
} 
} 
},
                        sub:true,
                    },
                },
            },
  "GXS_dyshiqin":{
                audio:"ext:RE：英雄杀:true",
                trigger:{
                    source:"dying",
                },
                forced:true,
                filter:function(event, player) { 
return event.getParent().name == 'damage' && event.player.group == 'GXS_jun'; 
},
                logTarget:"player",
                content:function() { 
'step 0'
        game.delayx();
        trigger.player.die(trigger.reason);
        'step 1'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
},
            },
 "GXS_dycuanquan":{
                audio:"ext:RE：英雄杀:true",
                 trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
        "step 0"
player.chooseCard("是否发动“篡权”展示一张牌?","he");
"step 1"
if(result.cards){
player.showCards(result.cards);
event.suit1=get.suit(result.cards[0]);
}else event.finish();
       
"step 2"
 if(event.cards==undefined) event.cards=[];
        player.judge(function(card){
            if(get.suit(card)==event.suit1) return -1.5;
            return 1.5;
        },ui.special);
        "step 3"
        if(result.judge>0){
            event.cards.push(result.card);
             player.gain(event.cards,'gain2');
            event.goto(2);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:8,
                    expose:0.2,
                    result:{
                        player:1,
                    },
                    threaten:1.1,
                },
            },
 "GXS_dylongluo":{
                audio:"ext:RE：英雄杀:true",
                trigger:{
                    player:"phaseEnd",
                },
                priority:15,
                group:"GXS_dylongluo3",
                check:function(event,player){
                if (player.identity=='zhong') return 2;
                if (player.identity=='zhu') return 0;
                return player.hp>2;
                },
                filter:function (event,player){
        return game.players.length>1&&player.countCards("he")>0;
    },
                content:function (){
                "step 0"
                player.chooseCardTarget({
            prompt:"笼络:弃置任意张牌，选择等量名其他角色，若如此做，直到你的下个回合开始，每当这些角色受到伤害时，将伤害转移给你。",
            forced:true,
            selectCard:[1,Infinity],
            selectTarget:function(){
                return ui.selected.cards.length;
            },
            filterCard:true,
            filterTarget:function(card,player,target){
                return target!=player;
            },
            position:"he",
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
			   return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var player=_status.event.player;
                var num=target.hasSkillTag('maixie')?0:2;
				return get.attitude(player,target)-num;
            },
            complexSelect:true,
        });
        "step 1"
        player.discard(result.cards);
       var list=result.targets;
            list.sort(lib.sort.seat);
            player.line(list,'green');
                        game.log(list,'成为了','【笼络】','的目标');
              player.storage.GXS_dylongluo2=list;
                        player.addSkill('GXS_dylongluo2'); 
                        player.markSkill('GXS_dylongluo2'); 
    },
            },
           "GXS_dylongluo2":{
                audio:"GXS_dylongluo",
                marktext:"🍻",
                intro:{
                    content:"当$受到伤害时，将一点伤害转移给你",
                },
                nopop:true,
                priority:15,
                trigger:{
                    global:["damageBegin"],
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        if(event.player.isDead()||!player.storage.GXS_dylongluo2||!player.storage.GXS_dylongluo2.contains(event.player)||event.num<=0) return false;
        return true;
        
    },
                content:function (){ 
game.log('笼络将',trigger.player,'受到的伤害转移一点给了',player);
                 
if(trigger.source){
player.damage(trigger.source||trigger.name);
}    else player.damage('nosource');                trigger.num--;    
},
            },
 "GXS_dylongluo3":{
                trigger:{
                    player:["phaseBegin","dieBegin"],
                },
                silent:true,
                filter:function(event,player){
                    return game.hasPlayer(function(current){
return current.hasSkill('GXS_dylongluo2');
});
                },
                content:function(){
                 for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('GXS_dylongluo2')){
                    game.players[i].removeSkill('GXS_dylongluo2');
                    }
                    }
                },
                forced:true,
                popup:false,
            },
            "GXS_dyxiaoyong":{ 
				audio:true,
				trigger:{player:'useCard1'},
				forced:true,
				firstDo:true,
				filter:function(event,player){
					if(get.color(event.card)!='red'&&event.card.name!='sha'||get.mode()=='guozhan') return false;
					var card=event.card;
					var range;
					var select=get.copy(get.info(card).selectTarget);
					if(select==undefined){
						if(get.info(card).filterTarget==undefined) return false;
						range=[1,1];
					}
					else if(typeof select=='number') range=[select,select];
					else if(get.itemtype(select)=='select') range=select;
					else if(typeof select=='function') range=select(card,player);
					game.checkMod(card,player,range,'selectTarget',player);
					return range[1]!=-1&&event.targets.length>range[1];
				},
				content:function(){},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name!='sha') return;
						if(get.mode()=='guozhan') return;
						if(range[1]==-1) return;
						var cards=player.getCards('h');
						if(!cards.length) return;
						for(var i=0;i<cards.length;i++){
							if(cards[i].classList.contains('selected')==false)
								return;
						}
						if(get.color(card)=='red') range[1]+=2;
					}
				}
			},
			'GXS_dywushuang':{
				audio:2,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card,player){
					return get.color(card)=='black';
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
						if(!player.countCards('he',{color:'black'})) return false;
				},
				prompt:'将一张黑色牌当杀使用或打出',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
							if(!player.countCards('he',{color:'black'})) return false;
					},
					respondSha:true,
				}
			},			
            "GXS_dyjuma":{
 
           trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function(event,player){
                if(!event.target.getEquip(3)) return false; 
return event.card.name=='shunshou'||event.card.name=='sha'&&!event.audioed;
},
                
                content:function(){
					trigger.audioed=true;
				},
		audio:"GXS_juma",
			mod:{
        globalTo:function (from,to,distance){
            if(from.getEquip(4)) return distance+1;
        },
        globalFrom:function(from,to,distance){
						if(to.getEquip(3))	return distance-1;
						},
    },
		},
"GXS_guixiong":{
				audio:2,
				
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAs:{name:'dz_zhen'},
				viewAsFilter:function(player){
					if(!player.countCards('hs',{color:'black'})) return false;
				},
				prompt:'将一张黑色手牌当鸩使用',
				check:function(card){
					if(_status.event.type=='dying') return 1/Math.max(0.1,get.value(card));
					return 8-get.value(card);
				},
				ai:{
					threaten:1.5,
				}
			},
"GXS_hunpofu":{
		audio:2,
			trigger:{
source:"damageBegin1",
},
forced:true,
filter:function (event,player){
return player.isDamaged()&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
},
content:function (){
trigger.num++;
},
		},
"GXS_hongmen":{
audio:2,
	trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
				 return player.isDamaged();
				},
				direct:true,
content:function (){
'step 0'
event.num=player.maxHp-player.hp; player.chooseTarget(get.prompt('GXS_hongmen'),'令一名其他角色弃置'+get.cnNumber(event.num,true)+'张牌',function(card,player,target){
return player!=target;
},function(target){
var att=get.attitude(_status.event.player,target);
return -att;
});
'step 1'
if(result.bool){
player.logSkill('GXS_hongmen',result.targets[0]);
result.targets[0].chooseToDiscard(event.num,true,'he');
}
else{
event.finish();
} 
},
ai:{
threaten:1.2,
expose:0.4,
},
}, 

	"GXS_dyyuxue":{
				audio:"ext:RE：英雄杀:true",
				trigger:{source:'damageEnd'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return event.player.isIn()&&!event.player.hasSkill('GXS_dyyuxue2');
				},
				content:function(){
					trigger.player.addSkill('GXS_dyyuxue2');
				},
				subSkill:{
					clear:{
						trigger:{player:['phaseEnd','dieBegin']},
						forced:true,
						filter:function(event,player){
							var num=game.countPlayer(function(current){
								return current.hasSkill('GXS_dyyuxue2');
							});
							if(!num) return false;
							if(event.name=='die') return true;
							return num>=3;
						},
						content:function(){
							'step 0'
							var list=game.filterPlayer(function(current){
								return current.hasSkill('GXS_dyyuxue2');
							});
							list.sortBySeat();
							event.list=list;
							player.line(list,'green');
							'step 1'
							if(event.list.length){
								event.list.shift().removeSkill('GXS_dyyuxue2');
								event.redo();
							}
						}
					}
				},
				group:'GXS_dyyuxue_clear',
			},
			"GXS_dyyuxue2":{
				mark:true,
				intro:{
					content:'已获得浴血标记'
				},
				onremove:function(player){
					player.loseHp();
				}
			},
      yxsduji:{
                subSkill:{
               
                    judge:{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        forced:true,
                        mark:true,
                        nopop:true,
                        temp:true,
                        charlotte:true,
                        intro:{
                            content:"锁定技，回合开始时，你进行判定，若结果为红色，你受到1点无来源的伤害。",
                        },
                        content:function (){
                'step 0'
                player.judge(function(card){
                    var color=get.color(card);
                    if(color=='red') return -1;
                    return 1;
                });
                'step 1'
                if(result.color=='red'){
                    player.damage('nosource');
                }             
                player.removeSkill('yxsduji_judge');                   
            },
                        sub:true,
                    },
                },
                audio:true,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return target!=player&&!target.hasSkill('yxsduji_judge');
    },
                filterCard:{
                    color:"red",
                },
                filter:function (event,player){
        return player.countCards('he',{color:'red'})>0;
    },
                position:"he",
                check:function (card){
        return 9-get.value(card)
    },
                content:function (){
    target.addSkill('yxsduji_judge');
      
        
    },
                ai:{
                    order:9,
                    result:{
                        target:-2,
                    },
                    threaten:2,
                    expose:0.2,
                },
            },
            yxszhuanquan:{
            mod:{
        targetEnabled:function (card,player,target,now){
            if(!target.getEquip(2)&&card.name=='sha'&&get.color(card)=='black') return false;
        },
    },
   },	
   "GXS_dyyewang":{
				trigger:{source:'damageBefore'},
				forced:true,
				audio:true,
				//priority:16,
				check:function(){return false;},
filter:function(event,player){
					if(!player.isPhaseUsing()) return false;
return event.card&&event.card.name=='sha';
				},
				content:function(){		
trigger.cancel();
player.say('第六天魔王!');	
trigger.player.loseHp(trigger.num);
				},
				ai:{
					jueqing:true
				}
			},
	 "GXS_dybuwu":{
audio:"ext:RE：英雄杀:true",
locked:true,
trigger:{
player:"phaseEnd",
},
priority:15,
group:"GXS_dybuwu3",
onremove:true,
filter:function (event,player){
return game.players.length>1;
},

content:function (){
'step 0'
player.chooseTarget(get.prompt('GXS_dybuwu'),'请选择至多两名其他角色成为[布武]的目标',[1,2],function(card,player,target){
return player!=target;
},function(target){
var att=get.attitude(_status.event.player,target);
return att;
});
'step 1'
if(result.bool){
player.say('天下布武!');
player.logSkill('GXS_dybuwu',result.targets);
var list=result.targets;
            list.sort(lib.sort.seat);
       
                        player.line(list,'green');
                        game.log(list,'成为了','【布武】','的目标');
              player.storage.GXS_dybuwu2=list;
                        
player.addSkill('GXS_dybuwu2'); 
}
else{
event.finish();
} 
},
ai:{
threaten:1.2,
expose:0.4,
},
},	
"GXS_dybuwu2":{
 mark:"🔪",
                intro:{
                    content:"当$使用杀时，你可以弃置一张牌并令此杀不计入使用次数，若此杀为红色，你摸一张牌。",
                },
				audio:2,
				shaRelated:true,
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
				if(event.player.isDead()||!player.storage.GXS_dybuwu2||!player.storage.GXS_dybuwu2.contains(event.player)) return false;
	return event.card.name=='sha'&&player.countCards('he')>0&&event.player.isPhaseUsing();
				},
				content:function(){
					'step 0'
					game.delayx();
					var go=false;
					if(get.attitude(player,trigger.player)>0){
						if(get.color(trigger.card)=='red'){
							go=true;
						}
						else if(trigger.addCount===false||!trigger.player.isPhaseUsing()) go=false;
						else if(!trigger.player.hasSkill('paoxiao')&&
							!trigger.player.hasSkill('tanlin3')&&
							!trigger.player.hasSkill('zhaxiang2')&&
							!trigger.player.hasSkill('fengnu')&&
							!trigger.player.getEquip('zhuge')){
							var nh=trigger.player.countCards('h');
							if(player==trigger.player){
								go=(player.countCards('h','sha')>0);
							}
							else if(nh>=4){
								go=true;
							}
							else if(player.countCards('h','sha')){
								if(nh==3){
									go=Math.random()<0.8;
								}
								else if(nh==2){
									go=Math.random()<0.5;
								}
							}
							else if(nh>=3){
								if(nh==3){
									go=Math.random()<0.5;
								}
								else if(nh==2){
									go=Math.random()<0.2;
								}
							}
						}
					}
					var next=player.chooseToDiscard(get.prompt('GXS_dybuwu2'),'弃置一张牌'+(get.color(trigger.card)=='red'?'并摸一张牌':'')+'，令'+get.translation(trigger.player)+'本次使用的【杀】不计入使用次数','he');
					next.logSkill=['GXS_dybuwu2',trigger.player];
					next.set('ai',function(card){
						if(_status.event.go){
							return 6-get.value(card);
						}
						return 0;
					});
					next.set('go',go);
					'step 1'
					if(result.bool){
					player.say('天下布武!');
						if(trigger.addCount!==false){
							trigger.addCount=false;
							trigger.player.getStat().card.sha--;
						}
						if(get.color(trigger.card)=='red'){
							player.draw();
						}
						// player.logSkill('GXS_dybuwu2',trigger.player);
					}
				},
				ai:{
					expose:0.2
				}
			},
"GXS_dybuwu3":{
				trigger:{
					player:['phaseBegin','dieBegin'],
				},
				silent:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
            return current.hasSkill('GXS_dybuwu2');
        });
				},
				content:function(){
				 for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('GXS_dybuwu2')){
					game.players[i].removeSkill('GXS_dybuwu2');
					}
					}
				},
			},
		       GXS_touji:{
                audio:true,
                trigger:{
                    source:"damageBegin1",
                },
                forced:true,
                filter:function (event,player){
                return game.players.length>5&&event.card&&event.card.name=="sha";
                },
                content:function (){
        
            trigger.num++;
        
       },
                group:["GXS_touji2"],
            },
            "GXS_touji2":{
                audio:"GXS_touji",
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function (event,player){ 
                return game.players.length<=5&&event.card&&event.card.name=='sha';                  
                },
                content:function (){ 
        "step 0" 
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('投机：弃置一张杀，否则杀对'+get.translation(player)+'无效',function(card){ 
            return card.name=='sha'; 
        }).set('ai',function(card){ 
            if(_status.event.eff>0){ 
                return 10-get.value(card); 
            } 
            return 0; 
        }).set('eff',eff); 
        "step 1" 
        if(result.bool==false){ 
            trigger.getParent().excluded.add(player); 
        } 
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){ 
                if(card.name=='sha'&&get.attitude(player,target)<0){ 
                    if(_status.event.name=='GXS_touji2') return; 
                    var bs=player.getCards('h',{name:'sha'}); 
                    if(bs.length<2) return 0; 
                    if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return; 
                    if(bs.length<=3&&player.countCards('h','sha')<=1){ 
                        for(var i=0;i<bs.length;i++){ 
                            if(bs[i].name!='sha'&&get.value(bs[i])<7){ 
                                return [1,0,1,-0.5]; 
                            } 
                        } 
                        return 0; 
                    } 
                    return [1,0,1,-0.5]; 
                } 
            },
                    },
                },
            },
            "GXS_dyxiudao":{
                audio:2,
                trigger:{
                    player:"damageBegin3",
                },
                filter:function (event,player){ 
        return player.countCards('he')&&event.source&&event.source.sex=='male'; 
    },
                direct:true,
                content:function (){ 
        "step 0" 
        var next=player.chooseToDiscard('he','修道：是否弃置一张牌防止此伤害？'); 
        next.set('ai',function(card){ 
            var player=_status.event.player; 
            if(player.hp==1||_status.event.getTrigger().num>1){ 
                return 9-get.value(card); 
            } 
            if(player.hp==2){ 
                return 8-get.value(card); 
            } 
            return 7-get.value(card); 
        }); 
        next.logSkill='GXS_dyxiudao'; 
        "step 1" 
        if(result.bool){ 
            player.say(['本宫要涩涩！','不禁男色哟！'].randomGet());
            trigger.cancel(); 
        } 
    },
            },
            'GXS_dyzhenguo':{
    trigger:{
       global:"dieAfter",
    },
audio:"ext:RE：英雄杀:2",
    forced:true,
    content:function(){
player.say(['本宫乃镇国大公举！','有时候，si人比活人更有用！'].randomGet());
        player.draw(2);
    },
},
                       "GXS_dyzhenglve": {
				audio:2,
				trigger: {
					player: 'drawBegin'
				},
				frequent: true,
				priority: 5,
				content:function (){
"step 0"
var num=trigger.num;
event.cards=get.cards(1+num);
game.cardsGotoOrdering(event.cards);
event.videoId=lib.status.videoId++;
game.broadcastAll(function(player,id,cards){
var str;
if(player==game.me&&!_status.auto){
str='政略：获取'+num+'张牌';
}
else{
str='政略';
}
var dialog=ui.create.dialog(str,cards);
dialog.videoId=id;
},player,event.videoId,event.cards);
event.time=get.utc();
game.addVideo('showCards',player,['政略',get.cardsInfo(event.cards)]);
game.addVideo('delay',null,trigger.num);
"step 1"
var next=player.chooseButton(trigger.num,true);
next.set('dialog',event.videoId);
next.set('filterButton',function(button){
return true;
});
next.set('ai',function(button){
return get.value(button.link,_status.event.player);
});
"step 2"
if(result.bool&&result.links){
event.cards2=result.links;
}
else{
event.finish();
}
var time=1000-(get.utc()-event.time);
if(time>0){
game.delay(0,time);
}
"step 3"
game.broadcastAll('closeDialog',event.videoId);
var cards2=event.cards2;
 var gains=[];
for(var i=0;i<event.cards.length;i++){
  if(cards2.contains(event.cards[i])) gains.addArray(cards.splice(i--,1));
}
player.gain(gains,'log','gain2');
trigger.num=0;
 if(event.cards){
  ui.cardPile.insertBefore(event.cards[0],ui.cardPile.firstChild);
 }
},
ai:{
threaten:1,
},
},
"GXS_dybeide":{
audio:2,
trigger:{
        global:"useCardAfter",
    },
    forced:true,
    filter:function(event,player){
        return (get.type(event.card)=='trick'&&event.player!=player&&player!=_status.currentPhase&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o'&&player.countCards('h',{suit:get.suit(event.card)}));
    },
    direct:true,
    unique:true,
    gainable:true,
    content:function(){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"        
            var next=player.chooseToDiscard('h',{suit:get.suit(trigger.cards[0])});
            next.set('ai',function(card){
                return 6-get.value(card);
            });
        "step 2"
        if(result.bool){
            var yzk=["真正的天空,广阔且无论到哪里都紧紧相连。 而且,就算我们互相远离,但我们一直在同一片天空下","无论在什么地方,什么时候,在我们的头顶都是同样悠远的天穹,就好像是永远都无法分开的羁绊一样。","我们的心就像那天空一样,永不分离"];
            player.say(yzk.randomGet());
            player.gain(trigger.cards,'gain2','log');
            player.logSkill("GXS_dybeide");
        }
    },
    ai:{
        threaten:1.3,
    },
  },
   			"GXS_xiezheng": {
				audio: true,
				enable: 'phaseUse',
				usable: 1,				
				filterTarget: function(card, player, target) {
					return target != player && target.countCards('h') > 0;
				},
				filter:function(event,player){
				return player.countCards("h")>0;
				},
				content: function() {
					"step 0"
					var list=[];
					for (var i of player.getCards("h")){
					if (!list.contains(get.suit(i)+"2")) list.push(get.suit(i)+"2");
					};
					player.chooseControl(list).set('ai',function(){
					var masuit=0,misuit=0,maxval=0,minval=0;
					for (var i=0; i<list.length; i++){
					var j=list[i].split("2");
					if (i==0) {
					misuit=player.countCards("h",{suit:j});
					masuit=player.countCards("h",{suit:j});
					for (var k of player.getCards("h",{suit:j})) {
					maxval+=get.value(k);
					minval+=get.value(k);
					}
					}
					//根据价值
					var icpval=minval,acpval=maxval;
					for (var k of player.getCards("h",{suit:j})) {
					acpval-=get.value(k);
					icpval-=get.value(k);
					}
					if (icpval>=0){
					var minsuit=list[i];
					minval=minval-icpval;
					}
					if (acpval<=0){
					var maxsuit=list[i];
					maxval=maxval-acpval;
					}
					//根据数量
					/*if (player.countCards("h",{suit:j})<=misuit) {
					misuit=player.countCards("h",{suit:j});
					var minsuit=list[i];	
					  }else if(player.countCards("h",{suit:j})>=masuit){
					masuit=player.countCards("h",{suit:j});
					
					var maxsuit=list[i];
					  }*/
					}
					if (get.attitude(player,target)>0){
					return maxsuit;
					}else{
					return minsuit;
					}
					});
					"step 1"
					game.log(player, '选择了' + get.translation(result.control));
					event.choice = result.control.slice(0, result.control.length - 1);
					player.popup(result.control);
					target.popup(result.control);
					"step 2"
					var num1=player.getCards('h', {
							suit: event.choice
						});
						var num2=target.getCards('h', {
							suit: event.choice
						});
					player.swapHandcards(target,num1,num2);
				},
				ai: {
				order:8,
				result:{
				target:function(player,target){
				if (player.countCards("h")>5) {
				return 1/target.countCards("h");
				}else  return -target.countCards("h");
						},
					}
				}
			},
			"GXS_wencai": {
			mod:{
        maxHandcard:function(player,num){
             return num-2;
        },
    },
			audio:true,
    trigger:{
        player:"phaseDrawBegin2",
    },
    frequent:true,
    filter:function(event,player){
        return !event.numFixed;
    },
    content:function(){
        trigger.num+=trigger.num;
    },
    ai:{
        threaten:1.3,
    },
    },
               "GXS_dyzhangzheng":{
               audio:"ext:RE：英雄杀:2",
             group:['GXS_dyzhangzheng_notsha'],
             subSkill:{
             notsha:{
             audio:"GXS_dyzhangzheng",
             trigger:{
             player:"damageEnd",
             },
             forced:true,
             filter:function(event,player){
             if(event.card&&event.card.name=='sha')return false;
             return !player.hasSkill('GXS_dyyoumie2');
             },
             content:function(){
             player.draw();
             },
             sub:true,
             },
             },
                priority:15,
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                filter:function(event,player){
                if(event.source==player.storage.GXS_dyyoumie2) return false;
                return event.card&&event.card.name=='sha'&&event.num>0&&player.hasSkill('GXS_dyyoumie2');        
                },
                content:function (){ 
        "step 0"
        event.tar=player.storage.GXS_dyyoumie2;
        "step 1"
        trigger.player=event.tar;
        game.log('掌政将',player,'受到的伤害转移给了',event.tar);
        event.tar.draw();
              },
            },
                        "GXS_dyyoumie":{
                audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                prompt:"令一名其他男性角色获得诱灭状态",
                filter:function(event,player){
        return !player.hasSkill('GXS_dyyoumie2')&&game.hasPlayer(function(target){
        return target.sex=="male";
        });
    },
                filterTarget:function(card,player,target){
return target!=player&&target.sex=='male';    
},
                content:function(){
        "step 0"
        
						player.storage.GXS_dyyoumie2=target;
                        player.addSkill('GXS_dyyoumie2');
        "step 1"
        if(!target.storage.GXS_dyyoumie_mark) target.storage.GXS_dyyoumie_mark=[];
                    target.storage.GXS_dyyoumie_mark.add(player);
                    target.storage.GXS_dyyoumie_mark.sortBySeat();
                    target.markSkill('GXS_dyyoumie_mark');
    },
                ai:{
                    order:9,
                    expose:0.6,
                    result:{
                        target:-3,
                    },
                },
            },
                     "GXS_dyyoumie_mark":{
                marktext:"灭",
                intro:{
                    name:"诱灭",
                    content:"当你濒死时，$获得你的所有牌。$摸牌阶段开始时，$可以少摸一张牌令你受到一点无来源的伤害。",
                },
            },
                        "GXS_dyyoumie2":{

	group:['GXS_dyyoumie2_dying','GXS_dyyoumie3'],
subSkill:{
dying:{
                audio:"GXS_dyyoumie",
forced:true,
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
                    return event.player.countCards('he')>0&&player.storage.GXS_dyyoumie2&&player.storage.GXS_dyyoumie2.contains(event.player);
                },
                content:function(){
                    "step 0"
                    event.togain=trigger.player.getCards('he');
                    player.gain(event.togain,trigger.player,'giveAuto');
                },
                  sub:true,
                    },
                },

	charlotte:true,
				onremove:true,
				mark:'character',
				intro:{content:'$濒死时你立即获得其所有牌；摸牌阶段开始时，你可以少摸一张牌，令$受到一点无来源的伤害；你受到除$以外使用杀造成的伤害时，你令$摸一张牌，然后将此伤害转移给$。'},
audio:"GXS_dyyoumie",
    trigger:{
        player:"phaseDrawBegin",
    },
    check:function (event,player){ 
        var nh=player.num('h',{type:'trick'}); 
        if(nh<3) return true; 
if(player.countCards('h')>2) return true;
        return false; 
    },
  preHidden:true,
    filter:function(event,player){
        return !event.numFixed&&event.num>0&&player.storage.GXS_dyyoumie2;
 },
    content:function(){ 
       var target=player.storage.GXS_dyyoumie2;
        trigger.num--; 
        target.damage('nosource'); 
     
    },

onremove:function(player){
					if(!player.storage.GXS_dyyoumie2) return;
					game.countPlayer(function(current){
						if(player.storage.GXS_dyyoumie2.contains(current)&&current.storage.GXS_dyyoumie_mark){
							current.storage.GXS_dyyoumie_mark.remove(player);
							if(!current.storage.GXS_dyyoumie_mark.length) current.unmarkSkill('GXS_dyyoumie_mark');
							else current.markSkill('GXS_dyyoumie_mark');
						}
					});
					delete player.storage.GXS_dyyoumie2;
				},
                    
    
    ai:{
        threaten:1,
    },
},
            		GXS_dyyoumie3:{
				trigger:{global:'dieBegin'},
				silent:true,
				filter:function(event,player){
					return event.player==player||player.storage.GXS_dyyoumie2&&player.storage.GXS_dyyoumie2.contains(event.player);
				},
				                content:function(){
                 for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('GXS_dyyoumie2')){
                    game.players[i].removeSkill('GXS_dyyoumie2');
                    }
                    }
                },
                forced:true,
                popup:false,
            },
            "GXS_dyjieyi":{
            audio:"ext:RE：英雄杀:2",
            enable:"phaseUse",
            filter:function(event,player){
            if (!player.storage.GXS_dyjieyi2)return true;
            return !player.storage.GXS_dyjieyi2.isAlive()&&game.hasPlayer(function(target){
        return target.sex=="male";
        });
            },
            filterTarget:function(card,player,target){
            return target!=player&&target.sex=='male';    
            },
                content:function(){
                player.storage.GXS_dyjieyi2=target;
                player.addSkill('GXS_dyjieyi2');
                player.markSkill('GXS_dyjieyi2');
                },
            },
            "GXS_dyjieyi2":{
            audio:'GXS_dyjieyi',
				mark:true,
				marktext:'義',
				intro:{
					name:'结衣酱大胜利',
					content:'当你受到伤害后，弃红牌令$受到等量的伤害，当你回复体力后，弃红牌令$回复等量的体力'
				},
				trigger:{player:['damageEnd','recoverEnd']},
				direct:true,
				filter:function(event,player){
				    if (player.countCards("h",{color:"red"})==0) return false;
					if(!player.storage.GXS_dyjieyi2||!player.storage.GXS_dyjieyi2.isAlive()||event.num<=0) return false;
					if(event.name=='damage') return true;
					return player.storage.GXS_dyjieyi2.isDamaged();
				},
				logTarget:'player',
				content:function(){
					'step 0'					
					player.chooseToDiscard('h',function(card,player){
					return get.color(card)=="red";
					},get.prompt('GXS_dyjieyi')).ai=function(card){
				var att=get.attitude(player,player.storage.GXS_dyjieyi2);
			    if(trigger.name=='damage'){
			    if (att<0) return 7-ai.get.value(card);
			    return 0;
			    }else if(att>0) return 7-ai.get.value(card);
			    return 0;
                }; 
                'step 1'
                if (result.bool){
					var target=player.storage.GXS_dyjieyi2;
					target[trigger.name](trigger.num,'nosource');
					   }
					},
				group:'GXS_dyjieyi3',
			},
			GXS_dyjieyi3:{
				trigger:{global:'dieBegin'},
				silent:true,
				filter:function(event,player){
					return event.player==player.storage.GXS_dyjieyi2;
				},
				content:function(){
				delete player.storage.GXS_dyjieyi2;
				player.removeSkill('GXS_dyjieyi2');
				player.unmarkSkill('GXS_dyjieyi2');
				}
			},
            "GXS_dyrende":{
            audio:"ext:RE：英雄杀:2",
            trigger:{
        player:"useCardAfter",
    },
    filter:function(event,player){
        return get.type(event.card)=='trick';
    },
    direct:true,
            content:function(){
            'step 0'	
			player.chooseTarget('选一名角色摸牌',true,function(card,player,target){
			return target!=player;
			}).ai=function(target){
			return get.attitude(player,target);
			};
			'step 1'
			if(result.bool){
				result.targets[0].draw();
				player.logSkill("GXS_dyrende");
			}
				}
            },
       "GXS_liance":{
    audio:2,
    enable:"phaseUse",
    filter:function(event,player){
    if((player.getStat().skill.GXS_liance||0)>=3) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')>0;
        });
    },
  filterTarget:function (card,player,target){
        return target!=player&&target.countCards("h")>0;
    },   
    content:function(){
        'step 0'
            player.choosePlayerCard(target,'h',true);
         'step 1'
      event.card=result.cards[0];
player.chooseControl("red","black",true).set("ai",function(){
return [0,1].randomGet();
}).set("prompt","连策:请选择一个颜色进行吹jb!");

 'step 2'
 game.log(player,'选择了','#y'+get.translation(result.control),'来进行吹jb!');
var res=result.control;
if(get.color(event.card)==res){
player.say('吹jb成功!');
player.gain(event.card,'gain2');
event.finish();
}
else { 
player.say('吹jb失败!');
player.getStat().skill.GXS_liance+=2;
 player.chooseControlList('连策','将'+get.translation(event.card)+'置于牌堆顶','将'+get.translation(event.card)+'置于牌堆底',function(){
                if(get.attitude(event.target,player)<0) return 2;
                return 1;
            });
}
'step 3'
event.index=result.index;
if(event.index==0||event.index==1){
						var next=target.lose(event.card,ui.cardPile);
						if(event.index==0) next.insert_card=true;
						game.broadcastAll(function(player){
						var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx,1000,'nobroadcast');
						},target);
					}
					else event.finish();
'step 4'					
game.delay();
if(event.index==1){
game.log(player,'将牌置于牌堆底');
}else if(event.index==0){
game.log(player,'将牌置于牌堆顶');
}
    },
ai:{
        order:8,
        result:{
            target:-1,
         }
    }
 },  
            "GXS_nishi":{
audio:2,
trigger:{
global:"judge",
    },
check:function(event,player){
	var result=event.judge(event.player.judging[0]);
	var attitude=get.attitude(player,event.player);
	if(attitude==0||result==0) return 0;
	if(attitude>0){
	if (result<0) return 1;
	}
	else{
	if (result>0) return 1;
	}
	return 0;
},
content:function(){
"step 0"
var card=get.bottomCards()[0];
event.card=card;
game.cardsGotoOrdering(card).relatedEvent=trigger;
"step 1"
player.$throw(card);
if(trigger.player.judging[0].clone){
trigger.player.judging[0].clone.classList.remove('thrownhighlight');
game.broadcast(function(card){
if(card.clone){
card.clone.classList.remove('thrownhighlight');
}
},trigger.player.judging[0]);
game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
}
game.cardsDiscard(trigger.player.judging[0]);
trigger.player.judging[0]=event.card;
game.log(trigger.player,'的判定牌改为',card);
game.delay(2);
},
 ai:{
        rejudge:true,
        tag:{
            rejudge:0.3,
        },
    },
},
  "GXS_fujing":{
                audio:"ext:RE：英雄杀:2",
                usable:1,
                enable:"phaseUse",
                filterTarget:true,
                selectTarget:1,
                content:function(){
        player.loseHp();
        var card=get.cardPile(function(card){
                        return get.type(card,'trick')=='trick';
                    });
                    if(card) target.gain(card,'gain2');
    },
                ai:{
                    order:7,
                    result:{
                    target:2,
                    player:function(player){
							if(player.hp==1&&player.countCards('h','tao')>=1) return 1;
							if(player.hp>1) return 2;
							return -2;
						}
                        
                    },
                },
            },
            "GXS_lianpo":{
subSkill:{
off:{
sub:true,
},
},
trigger:{
source:"damageEnd",
},
direct:true,
audio:"ext:RE：英雄杀:1",
filter:function (event,player){ 
if(!event.isPhaseUsing(player)) return false;
return player.countCards('he')>0&&event.player.isAlive()&&!event.player.hasSkill('GXS_lianpo_off'); 
},
content:function(){
"step 0"
var next=player.chooseToDiscard('he','连破：是否弃置一张牌视为对'+get.translation(trigger.player)+'使用一张杀？');
next.logSkill=['GXS_lianpo',trigger.player];
var eff=get.effect(trigger.player,{name:'sha'},player,player);
next.ai=function(card){
if(eff>0){
return 8-get.value(card);
}
return 0;
}
"step 1"
if(result.bool){
player.useCard({ name: 'sha' }, trigger.player, false);
trigger.player.addTempSkill('GXS_lianpo_off');
}
},
ai:{
        expose:0.1,
    },
},
            "GXS_langgu":{
				audio:"ext:RE：英雄杀:1",
				trigger:{player:'damageEnd'},
				preHidden:true,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					if(!player.countCards('h')) event.finish();
					else player.showHandcards();
					"step 2"
					if(!trigger.source) return;
					var cards=player.getCards('h');
					var color=get.color(cards[0],player);
					for(var i=1;i<cards.length;i++){
						if(get.color(cards[i],player)!=color) return;
					}
					player.recover();
				},
				ai:{
					maixie_defend:true,
					threaten:0.9
				}
			},
					"GXS_zhuolve":{
				audio:"ext:RE：英雄杀:1",
				enable:'phaseUse',
				usable:1,
				delay:false,
				filter:function(event,player){
					if (player.countCards('h',{color:'black'})==0&&player.isHealthy()) return false;
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.showHandcards();
					game.delay(0.5);
					'step 1'
					var list=[];
					if (player.countCards('h',{color:'red'})&&player.isDamaged()) list.push('红色')
					if (player.countCards('h',{color:'black'})) list.push('黑色')
					if (list.length){
					player.chooseControl(list).set('ai',function(){
						var player=_status.event.player;
						if(player.countCards('h',{color:'red'})==1&&player.isDamaged()&&list.contains('红色')) return '红色';
						if (player.countCards('h',{color:'black'})==1&&list.contains('黑色'))return '黑色';
						return list.randomGet();
					});
					}
					'step 2'
					if (result.control){
					event.control=result.control;
					var cards;
					if(event.control=='红色'){
						cards=player.getCards('h',{color:'red'});
						player.discard(cards);
						player.recover();
						event.finish();
					}
					else{
						cards=player.getCards('h',{color:'black'});
						player.discard(cards);
						player.chooseUseTarget({name:'nanman',isCard:true},true); 
						event.finish();
					}		
				  }				
				},
contentAfter:function(){
	var list = game.filterPlayer(function(current) {
						return current.hp>player.hp;
					}).sortBySeat();
			
					if (list.length) {
if(player.getStat().skill.GXS_zhuolve>0) player.getStat().skill.GXS_zhuolve--;
            event.finish(); 
        }
},


				ai:{
					order:function(item,player){
						if(player.countCards('h',{color:'red'})==1) return 10;
						if(player.countCards('h',{color:'black'})==1) return 10;
						return 1;
					},
					result:{
						player:function(player,target){
							var eff=0;
							if (player.countCards('h',{color:'black'})==1){
						for(var i=0;i<game.players.length;i++){
						if (game.players[i]==player||get.distance(game.players[i],player)>1) continue;
						var nh=game.players[i].countCards('h');
						eff+=(get.attitude(game.players[i],player)>0?-1:1)*(3-nh);
						if(get.mode()=='identity'){
								if(game.players[i].isZhu&&game.players[i].hp<=1&&nh<=2&&get.attitude(player,game.players[i])>0) eff-=100;
							}
						}
						}
						if (player.countCards('h',{color:'red'})==1&&player.isDamaged()) eff+=10
						return eff;
						},
					}
				}
			},
            'GXS_youshui':{
            audio:true,
            enable:"phaseUse",
    usable:1,
    position:"h",
    filterTarget:function (card,player,target){
        return target!=player;
    },
    complexCard:true,
    complexSelect:true,
    selectTarget:function (){
        return ui.selected.cards.length;
    },
    filter:function(event,player){
        return player.countCards("h")>1&&game.players.length>2;
    },
    check:function(card){
		var player=_status.event.player;
		return player.countCards('h')>3?2:0;
	},
    filterCard:true,
    selectCard:2,
    targetprompt:['打工人','波士'],
	multitarget:true,
	delay:false,
    line:"thunder",
    content:function (){
        targets[0].addTempSkill('GXS_youshui_ysjob',{player:'phaseAfter'});
        targets[0].storage.GXS_youshui_ysjob=targets[1];
    },
    ai:{
					result:{
						player:function(player){
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>1&&get.attitude(players[i],player)>1){
									return player.countCards("h")-3;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(ui.selected.targets.length){
								if (get.attitude(player,target)>0) return target.getDamagedHp();
							}
							if (game.countPlayer(function (current){
							return current.isDamaged()&&get.attitude(player,current)>0;
							})>0) return -target.countCards('h');
							return 0;
						}
					},
					order:5,
					expose:0.2
				},
    subSkill:{
      'ysjob':{
      mark:true,
    intro:{
        content:'当你回合内伤害，$立即回复等量的伤害'
    },
      onremove:function(player){
	   delete player.storage.GXS_youshui_ysjob;
	  },
	  silent:true,
	  forced:true,
	  charlotte:true,
      trigger:{
        source:"damageSource",
    },
    filter:function(event,player){
    return _status.currentPhase==player;
    },
    content:function(){
    var target=player.storage.GXS_youshui_ysjob;
    target.recover(trigger.num);
    }
      }
    }
            },
            'GXS_tianming':{
            audio:3,
            enable:"phaseUse",
            filter:function(event,player){
        return player.countCards("h")>0;
    },
            filterTarget:function (card,player,target){
        return target!=player&&target.countCards("h")>0&&!target.hasSkill("GXS_tianming2");
    },
            content:function(){
            'step 0'
            player.chooseCard('天命弃牌',true).ai = function (card) {
          return 7-get.value(card);
        };
            'step 1'
            if (result.bool) event.card1=result.cards[0];
            target.chooseToDiscard('天命弃牌',true).ai = function (card) {
          return 7-get.value(card);
        };
            'step 2'
            player.discard(event.card1);
            if (get.suit(result.cards[0])==get.suit(event.card1)){
            target.skip('phaseDraw');
            target.addTempSkill('GXS_tianming2',{player:'phaseDrawSkipped'});
            }else target.say("Voglio violentare l’imperatrice Vedova Xiaozhuang");
        },
        ai:{
					order:4,
					result:{
						target:function(player,target){	
						if (game.players.length==2&&target.countCards('h')==1)	return -1;
						if (player.countCards('h')<=player.getHandcardLimit())  return 0;	
							if(0<target.countCards('h')<3) return -2;
							if(target.countCards('h')>=3) return -1;
							return 0;
						},
					},
				},
            },
            'GXS_tianming2':{
            mark:true,
    intro:{
        content:"跳过下回合的摸牌阶段",
    },
    },
            'GXS_dyliebo':{
            audio:"ext:RE：英雄杀:2",
            enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
    filter:function(event,player){
        return player.countCards("h")>0&&game.hasPlayer(function(current){
            return player!=current&&current.countCards('h')>0;
        });
    },
    content:function (){
    'step 0'
    player.chooseControl('全部手牌','等量手牌').set('dialog',['裂帛：选择交换项']).set('ai',function(){
		if(get.attitude(player,target)>0){
		if (target.countCards('h')>player.countCards('h')&&target.countCards('j')>0)return '全部手牌';
			return '等量手牌';
		}else{
		if (target.countCards('h')>player.countCards('h'))return '全部手牌';
		return '等量手牌';
		}			
	});
	'step 1'
	if(result.control=='全部手牌'){
	player.swapHandcards(target);
	event.finish();
	}
    else{
    var dialog=['请选择要交换的手牌','<div class="text center">目标手牌</div>',[target.getCards('h'),'blank'],'<div class="text center">自分手牌</div>',player.getCards('h')];
            var next=player.chooseButton(dialog,true);
            next.set('filterButton',function(button){
                var ss=target.getCards('h');
                var hs=_status.event.player.getCards('h');
                var sn=0;
                var hn=0;
                var ub=ui.selected.buttons;
                for(var i=0;i<ub.length;i++){
                    if(ss.contains(ub[i].link)) sn++;
                    else hn++;
                }
                return !(sn>=hs.length&&ss.contains(button.link)||hn>=ss.length&&hs.contains(button.link));
            });
            next.set('selectButton',function(){
                if(ui.selected.buttons.length==0) return 2;
                var ss=target.getCards('h');
                var hs=_status.event.player.getCards('h');
                var sn=0;
                var hn=0;
                var ub=ui.selected.buttons;
                for(var i=0;i<ub.length;i++){
                    if(ss.contains(ub[i].link)) sn++;
                    else hn++;
                }
                if(sn!=hn) return 2*Math.max(sn,hn);
                else{
                    if(sn==ss.length||hn==hs.length||sn==hs.length||hn==ss.length) return ub.length;
                    return [ub.length,ub.length+1];
                }
            });
            next.set('ai',function(){return -1});
        }
        'step 2'
        if(result.bool){
            var gains=[];
            var pushs=[];
            for(var i=0;i<result.links.length;i++){
                var card=result.links[i];
                if(target.getCards('h').contains(card)) gains.push(card);
                else pushs.push(card);
            }
            player.gain(gains,target,'giveAuto');
            target.gain(pushs,player,'giveAuto');
        }
    },
    ai:{
					order:4,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)>0&&target.countCards('j')>0) return 1;
							return -1;
						},
					},
				},
            },
            'GXS_dyyaoji':{
            audio:"ext:RE：英雄杀:2",
            trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){ 
        return event.num>0; 
    },
                content:function (){ 
                if (!trigger.source.hasSkill('GXS_dyyaoji2'))trigger.source.addSkill('GXS_dyyaoji2');
                }
            },
            'GXS_dyyaoji2':{
            mark:true,
    intro:{
        content:"既然追求刺激，那就贯彻到底啰",
    },
    trigger:{
        player:"phaseBegin",
    },
    filter:function (event, player) {
        return !player.hasJudge('lebu');
      },
    forced:true,
    silent:true,
    charlotte:true,
    content:function () {
        "step 0"
        player.judge(function(card){
            return get.suit(card)=='spade'?-1:1;
        });
        "step 1"
        if (result.judge<0) {
          player.skip('phaseUse');
          player.say('你好骚啊');
         }else {
         player.say('女人只会影响我拔剑的速度');
         }
         player.removeSkill('GXS_dyyaoji2');
       }
    },
       "GXS_duzun":{
    audio:2,
    trigger:{
        source:"damageSource",
    },

  filter:function(event,player){
        return event.getParent().name=='sha';
    },
    check:function(event,player){
        return player.isDamaged();
    },
    content:function(){
        'step 0'
        player.judge(function(card){
            var player=_status.event.getParent('pyzhuren_heart').player;
            if(player.isHealthy()&&get.color(card)=='red') return 0;
            return 2;
        });
        'step 1'
        if(result.color=='red') trigger.num++;
        
    },
},
             "GXS_weiwo":{
audio:2,
trigger:{
player:"phaseDrawBefore",
},
check:function(event,player){

if(player.countCards('h',{name:'sha'})&&player.countCards('h')>=2) return 2;
return 1;
},
content:function(){
trigger.cancel();
player.addTempSkill('weiwo_buff'); 
},

subSkill:{
buff:{
mark:true,
marktext:"💢",
intro:{
content:function (storage,player,skill){
return "本回合你使用杀不可闪避";
},
name:"唯我",
},
audio:"weiwo",
trigger:{
player:"shaBegin",
},
forced:true,

content:function (){
trigger.directHit=true;
},
sub:true,
},
},

},
      "GXS_olpozhen":{
        audio:2,
        trigger:{player:'shaMiss'},
        frequent:true,
        filter:function(event,player){
				return !event.target.storage.GXS_olzhen;
					},
					content:function (){
					trigger.target.markSkillCharacter('GXS_olpozhen',player,'阵','Warnning：你已被盯上了');
					trigger.target.storage.GXS_olzhen=true;
					},
					group:"GXS_olpozhen_2",
					subSkill:{
					"2":{
					frequent:true,
					trigger:{player:'useCardToTargeted'},
				logTarget:'target',
				filter:function(event,player){
					if(event.card.name!='sha') return false;
				return event.target.storage.GXS_olzhen==true;
					},
					content:function (){
					'step 0'
					player.chooseControl('无视防具','加伤害','cancel2').set('prompt',get.prompt2('GXS_olpozhen'));
					'step 1'
					if(result.control&&result.control!='cancel2'){
					trigger.target.unmarkSkill('GXS_olpozhen');
   delete trigger.target.storage.GXS_olzhen;
						player.logSkill('GXS_olpozhen',trigger.target);
						if(result.control=='无视防具'){
							player.draw();
						}
						else{
							var id=trigger.target.playerid;
						var map=trigger.getParent().customArgs;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!='number'){
							map[id].extraDamage=0;
						}
						map[id].extraDamage++;
						}
					}   
					},
					},
					}
        },
		        "GXS_olciyin":{
        audio:2,
		enable:"phaseUse",
    usable:1,
   filter:function (event,player){
        return !player.getEquip(2);
    },
    filterTarget:function (card,player,target){
        if(target==player) return false;
        return target.getEquip(2);
    },
    content:function (){
        var e2=target.getEquip(2);
        event.e2=e2;
        player.gain(event.e2);
        target.$give(event.e2,player);
		player.gainMaxHp();
		player.addSkill(['GXS_olyinglie','GXS_oljiaozhen','GXS_olguashuai']);
		player.removeSkill(['GXS_olpozhen','GXS_olciyin']);
		player.node.avatar.setBackgroundImage('extension/RE：英雄杀/GXS_olmuguiying.jpg');
    },
    ai:{
        order:8,
        result:{
            target:function (player,target){
                if(target.getEquip(2)&&!player.getEquip(2)){
                    return -2;
                }
                return -1;
            },
        },
    },
        },
        "GXS_olyinglie":{
        audio:'GXS_yinglie',
        trigger:{player:'damageBegin4'},
        filter:function(event,player){
			return event.num>1;
		},
		forced:true,
        content:function (){
        trigger.num=1;
         }
        },
        "GXS_oljiaozhen":{
			audio:'GXS_jiaozhen',
		filter:function (event,player){
        return player.countCards('h',{color:'black'})>0;
    },
    enable:"chooseToUse",
    filterCard:function (card){
        return get.color(card)=='black';
    },
    position:"h",
    viewAs:{
        name:"GXS_olshewo",
    },
    prompt:"将一张黑色牌当舍我其谁使用",
    check:function (card){return 6-get.value(card)},
    ai:{
        threaten:1.5,
    },
        },
        "GXS_olguashuai":{
        audio:'GXS_guashuai',
		enable:"phaseUse",
        usable:1,
		filter:function (event,player){
        return player.countCards('he');
    },
	content:function (){
		player.chooseToDiscard('he',true);
		player.loseMaxHp();
		player.addSkill(['GXS_olpozhen','GXS_olciyin']);
		player.removeSkill(['GXS_olyinglie','GXS_oljiaozhen','GXS_olguashuai']);
		player.node.avatar.setBackgroundImage('extension/RE：英雄杀/GXS_olmuguiyinghenshin.jpg');
	}
        },
		"GXS_olyuci1":{
		audio:'GXS_yuci',
    enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.countCards('he');
    },
    content:function (){
        'step 0'
        player.discardPlayerCard(target,'he',true);
        'step 1'
        if(result.bool){
            if(get.type(result.cards[0])=='basic'||get.type(result.cards[0])=='trick'){
                player.storage.GXS_olyuci.push(result.cards[0].name);
				 player.updateMarks();
            }
            else{
                if (player.countCards('he')) player.chooseToDiscard('he',true); 
            }
        }
    },
    ai:{
        order:8,
        result:{
            target:-1,
        },
    },
        },
		"GXS_olyuci2":{
    trigger:{
        player:"useCard",
    },
	direct:true,
    filter:function (event,player){
        if(!player.storage.GXS_olyuci) return false;
        return true;
    },
    content:function (){
         player.storage.GXS_olyuci=[];
         player.syncStorage('GXS_olyuci');        
         player.updateMarks();
    },
	subSkill:{
		rem:{
	trigger:{
        player:"phaseAfter",
    },
	direct:true,
    filter:function (event,player){
        if(!player.storage.GXS_olyuci) return false;
        return true;
    },
    content:function (){
         player.storage.GXS_olyuci=[];
         player.syncStorage('GXS_olyuci');        
         player.updateMarks();
    },
		}
	}
},
		"GXS_olyuci":{
    init:function (player){
        player.storage.GXS_olyuci=[];
    },
    mark:true,
    intro:{
        mark:function (dialog,storage,player){
            if(!storage.length) return '无';
            var list=[];
            for(var i=0;i<storage.length;i++){
                list.push(['玉词','',storage[i]]);
            }
            dialog.addAuto([list,'vcard']);  
        },
        markcount:function (storage,player){
            return storage.length;
        },
    },
    audio:'GXS_yuci',
    group:["GXS_olyuci1","GXS_olyuci2","GXS_olyuci2_rem"],
    enable:"phaseUse",
    usable:1,
    filter:function (event,player){
        if(!player.storage.GXS_olyuci) return false;
        for(var i=0;i<player.storage.GXS_olyuci.length;i++){
            if(event.filterCard({name:player.storage.GXS_olyuci[i]},player,event)) return player.countCards('h');
        }
        return false;
    },
    chooseButton:{
        dialog:function (event,player){
            var list=[];
            for(var i=0;i<player.storage.GXS_olyuci.length;i++){
                list.push(['玉词','',player.storage.GXS_olyuci[i]]);
            }
            return ui.create.dialog(get.translation('GXS_olyuci'),[list,'vcard']);
        },
        filter:function (button,player){
            var event=_status.event.getParent();
            return event.filterCard({name:button.link[2]},player,event);
        },
        check:function (button){
            var player=_status.event.player;
            return player.getUseValue({name:button.link[2]});
        },
        backup:function (links,player){
            return {
                filterCard:true,
                check:function(card){
                    var value=get.value(card);
                    return 8-value;
                },
                selectCard:1,
                popname:true,
                viewAs:{name:links[0][2]},
                onuse:function(result,player){                 
                    player.storage.GXS_olyuci.remove(result.card.name);
                    player.syncStorage('GXS_olyuci');      
                    player.updateMarks();
                },
            }
        },
        prompt:function (links,player){
            return '将一张手牌当作'+get.translation(links[0][2])+'使用';
        },
    },
    ai:{
        order:5,
        result:{
            player:function (player){
                if(!player.storage.GXS_olyuci) return 0;
                if(player.isDamaged()&&player.needsToDiscard()){
                    for(var i=0;i<player.storage.GXS_olyuci.length;i++){
                        if(player.hasValueTarget({name:player.storage.GXS_olyuci[i]})) return 1;
                    }
                }
                return -1;
            },
        },
        threaten:1.1,
    },
},
		"GXS_olshangli":{
			audio:'GXS_shangli',
			trigger:{
        player:["useCard","respond","loseAfter"],
    },
    frequent:true,
    filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if (player.storage.olshangli==2) return false;
        if(event.name!='lose') return get.color(event.card)=='red';
        if(event.type!='discard') return false;
        return true;
    },
    content:function (){
        "step 0"
        event.count=1;
        if(trigger.name=='lose'){
        event.count=0;
        event.count+=Math.min(2,trigger.cards2.length);
        }
        "step 1"
        player.draw();
        if (!player.storage.olshangli) player.storage.olshangli=0;
        player.storage.olshangli++;
        event.count--;
        if (player.storage.olshangli==2) event.count=0;
        "step 2"
        if(event.count>0){
            player.chooseBool(get.prompt2('GXS_olshangli')).set('frequentSkill','GXS_olshangli');
        }
        else event.finish();
        "step 3"
        if(result.bool){
            player.logSkill('GXS_olshangli');
            event.goto(1);
        }
    },
    ai:{
        threaten:0.7,
    },
    group:"GXS_olshangli_update",
    subSkill:{
     update:{
     trigger:{
        global:"roundStart",
       },
       forced:true,
       silent:true,
       filter:function (event,player){
       return player.storage.olshangli>0;
       },
       content:function (){
       player.storage.olshangli=0;
       },       
     sub:true,
     },
    }
		},
	            GXS_tianpeng:{
            enable:"phaseUse",
    usable:1,
    filter:function(event,player){
        return player.countCards('h')>0;
    },
    filterTarget:function(card,player,target){
        return target.countCards('h')>0&&target!=player&&target.sex=="female";
    },
    content:function(){
        "step 0"
        if(target.countCards('h')==0||player.countCards('h')==0){
            event.finish();
            return;
        }
        "step 1"
        var sendback=function(){
            if(_status.event!=event){
                return function(){
                    event.resultOL=_status.event.resultOL;
                };
            }
        };
        if(player.isOnline()){
            player.wait(sendback);
            event.ol=true;
            player.send(function(){
                game.me.chooseCard(true).set('glow_result',true).ai=function(){
                    return Math.random();
                };
                game.resume();
            });
        }
        else{
            event.localPlayer=true;
            player.chooseCard(true).set('glow_result',true).ai=function(){
                return Math.random();
            };
        }
        if(target.isOnline()){
            target.wait(sendback);
            event.ol=true;
            target.send(function(){
                var rand=Math.random()<0.4;
                game.me.chooseCard(true).set('glow_result',true).ai=function(card){
                    if(rand) return card.name=='shan'?1:0;
                    return card.name=='shan'?0:1;
                };
                game.resume();
            });
        }
        else{
            event.localTarget=true;
        }
        "step 2"
        if(event.localPlayer){
            event.card1=result.cards[0];
        }
        if(event.localTarget){
            var rand=Math.random()<0.4;
            target.chooseCard(true).set('glow_result',true).ai=function(card){
                if(rand) return card.name=='shan'?1:0;
                return card.name=='shan'?0:1;
            };
        }
        "step 3"
        if(event.localTarget){
            event.card2=result.cards[0];
        }
        if(!event.resultOL&&event.ol){
            game.pause();
        }
        "step 4"
        try{
            if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
            if(!event.card2) event.card2=event.resultOL[target.playerid].cards[0];
            if(!event.card1||!event.card2){
                throw('err');
            }
        }
        catch(e){
            console.log(e);
            event.finish();
            return;
        }
        if(event.card2.number>=10||event.card2.number<=4){
            if(target.countCards('h')>2){
                event.addToAI=true;
            }
        }
        game.broadcastAll(function(card1,card2){
            card1.classList.remove('glow');
            card2.classList.remove('glow');
        },event.card1,event.card2);
        "step 5"
        game.broadcastAll(function(){
            ui.arena.classList.add('thrownhighlight');
        });
        game.addVideo('thrownhighlight1');
        player.$compare(event.card1,target,event.card2);
        game.delay(4);
        "step 6"
        game.log(player,'展示了',event.card1);
        game.log(target,'展示了',event.card2);
        if(get.suit(event.card1)!=get.suit(event.card2)){
           var clone=event.card1.clone;
            if(clone){
                clone.style.transition='all 0.5s';
                clone.style.transform='scale(1.2)';
                clone.delete();
                game.addVideo('deletenode',player,get.cardsInfo([clone]));
            }
            game.broadcast(function(card){
                var clone=card.clone;
                if(clone){
                    clone.style.transition='all 0.5s';
                    clone.style.transform='scale(1.2)';
                    clone.delete();
                }
            },event.card1);
            player.discard(event.card1).set('animate',false);
            target.discard(event.card2).set('animate',false);
        }
        else{
            player.$gain2(event.card1);
            target.$gain2(event.card2);
        }
        game.broadcastAll(function(){
            ui.arena.classList.remove('thrownhighlight');
        });
        game.addVideo('thrownhighlight2');
    },
    ai:{
        order:6,
        result:{
            target:-1,
        },
    },
            },
            GXS_jingtan:{
            trigger:{
        global:["useCard","respond"],
    },
    filter:function(event,player){
        return event.player!=player&&event.card.name=='sha'&&_status.currentPhase!=player;
    },
    frequent:true,
    content:function(){
    player.draw()
    }
    },
		    GXS_benyue:{
      audio:true,
				enable:'phaseUse',
				usable:1,
				viewAsFilter:function(player){
					return player.countCards('he',{type:'equip'})>0;
				},
				viewAs:{name:'wuzhong'},
				filterCard:{type:'equip'},
				check:function(card){
					return 8-get.value(card);
				}
    },
    GXS_lingyao:{
    trigger:{
        player:"useCard",
    },
    filter:function(event,player){
        return event.card.name=="tao";
    },
    content:function(){
        "step 0"
        player.draw(2);
        "step 1"
        event.cards=result;
        "step 2"
        player.chooseCardTarget({
            filterCard:function(card){
                return _status.event.getParent().cards.contains(card);
            },
            selectCard:[1,event.cards.length],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 3"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player);
            player.$give(result.cards.length,result.targets[0]);
            for(var i=0;i<result.cards.length;i++){
                event.cards.remove(result.cards[i]);
            }
            if(event.cards.length) event.goto(2);
        }
    },
    },
            GXS_guqi:{
            mod:{
					maxHandcard:function(player,num){
					if (player.isMinHp(true)) return num+1;
					},
				},
            trigger:{
        player:"phaseDrawBegin2",
    },
    frequent:true,
    filter:function(event,player){
        return !event.numFixed&&player.isMinHp(true);
    },
    content:function(){
        trigger.num++;
    },
    ai:{
        threaten:1.3,
    },
            },
            GXS_relingyao:{
            enable:"chooseToUse",
    viewAsFilter:function(player){
        return player.countCards('h')>0;
    },
    filterCard:true,
    selectCard:function(){
        var player=_status.event.player;
		return player.getStat('skill').GXS_relingyao;
	},
    position:"h",
    viewAs:{
        name:"tao",
    },
    prompt:function(){
    var player=_status.event.player;
    var num=player.getStat('skill').GXS_relingyao;
    if (!num) num=1;
    return "将"+get.cnNumber(num)+"张手牌当桃使用";
    },
    check:function(card){return 15-get.value(card)},
    ai:{
        threaten:1.5,
        basic:{
            order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
            useful:[6.5,4,3,2],
            value:[6.5,4,3,2],
        },
        result:{
            target:2,
            "target_use":function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
        },
        tag:{
            recover:1,
            save:1,
        },
    },
    group:"GXS_relingyao_ziyu",
    subSkill:{
        ziyu:{
            trigger:{
                player:"useCard",
            },
            filter:function(event,player){
                var evt=event;
                return evt.card.name=='tao'&&evt.skill=='GXS_relingyao'&&evt.cards&&player.countCards('h')==0;
            },
            content:function(){
                player.loseMaxHp();
                player.recover();
            },
            sub:true,
        },
            },
                },
                "GXS_fenshen":{
                audio:2,
                trigger:{
        player:"damageBegin4",
    },
    filter:function (event,player){
        return event.num>0&&event.source&&player.countCards("h")>0;
    },
                content:function(){
        "step 0"
        trigger.source.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        });
        "step 1"
        game.log(trigger.source,'选择了'+get.translation(result.control));
        event.choice=result.control;
        trigger.source.popup(event.choice);
        trigger.source.discardPlayerCard(player,'h',true);
        "step 2"
        if(get.suit(result.links[0])+'2'!=event.choice) trigger.cancel();
    },
                },
                "GXS_huoyan":{
                audio:2,
                trigger:{
        player:"phaseBegin",
    },
    filter:function (event,player){
        return game.hasPlayer(function(current){
            return player!=current&&current.isMinHandcard()&&current.countCards('h')!=0;
        });
    },
    direct:true,
    content:function (){
        	'step 0'
			player.chooseTarget(get.prompt('GXS_huoyan'),function(card,player,target){
			return target!=player&&target.isMinHandcard()&&target.countCards('h')!=0;
			});
			'step 1'		
			if (result.bool){
			var target=result.targets[0];
            var cards=target.getCards('h');
            player.line(target);
            player.logSkill("GXS_huoyan",target);
            var content=[get.translation(target)+'的手牌',cards];
            game.log(player,'观看了',target,'的手牌');
            player.chooseControl('ok').set('dialog',content);
        }
    },
                },
                "GXS_tengyun":{
                audio:2,
                enable:'phaseUse',
                filter:function(event,player){
					return !player.hasSkill("GXS_tengyun_buff");
				},
                content:function (){
                'step 0'
                player.chooseToDiscard(get.prompt('GXS_tengyun'),2,'he').ai=function(card){
                return 7-ai.get.value(card);
                }; 
                'step 1'
                if (result.bool){
                player.addTempSkill("GXS_tengyun_buff")
                }
                },
                subSkill:{
                buff:{
                mod:{
        selectTarget:function(card,player,range){
            if(range[1]==-1) return;
            if(card.name=='sha') range[1]+=2;
        },
        targetInRange:function (card){
            if(card.name=='sha') return true;
        },
    },
                }
                }
                },
                "GXS_luanzhen":{
                audio:2,
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function(){
                'step 0'
                player.judge(function(card){
						if(get.color(card)=='red') return 1.5;
						return -1.5;
					},ui.special);
				'step 1'
			if(result.judge>0){
            var list=[];
            var skills=[];
            var map=[];
            for(var i=0;i<game.players.length;i++){
                var name=game.players[i].name;
                if(name.indexOf('zuoci')!=-1||name.indexOf('GXS_liuer')!=-1||name.indexOf('xushao')!=-1) continue;
                var skills2=lib.character[name][3];
                for(var j=0;j<skills2.length;j++){
                    if(skills.contains(skills2[j])||lib.skill.pingjian.phaseUse_special.contains(skills2[j])){
                        list.add(name);
                        if(!map[name]) map[name]=[];
                        map[name].push(skills2[j]);
                        skills.add(skills2[j]);
                        continue;
                    }
                    var list2=[skills2[j]];
                    game.expandSkills(list2);
                    for(var k=0;k<list2.length;k++){
                        var info=lib.skill[list2[k]];
                        if(!info||!info.enable||info.viewAs||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
                        if(info.enable=='phaseUse'||Array.isArray(info.enable)&&info.enable.contains('phaseUse')){
                            if(info.init||info.onChooseToUse||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
                            if(info.filter){
                                try{
                                    var bool=info.filter(event.getParent(2),player);
                                    if(!bool) continue;
                                }
                                catch(e){
                                    continue;
                                }
                            }
                            list.add(name);
                            if(!map[name]) map[name]=[];
                            map[name].push(skills2[j]);
                            skills.add(skills2[j]);
                            break;
                        }
                    }
                }
                if(list.length>2) break;
            }
            if(!skills.length){
                //player.draw();
                event.finish();
            }
            else{
                //skills.unshift('摸一张牌');
                player.chooseControl(skills).set('dialog',['请选择要获得的技能',[list,'character']]).set('ai',function(){return 0});
            }
        }
        else event.finish();
        'step 2'
        if(result.control=='摸一张牌'){
            player.draw();
            return;
        }
        player.addTempSkill(result.control);
    },
                },
                "GXS_xuezui":{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
    content:function (){
        'step 0'
        player.discardPlayerCard(target,'h',true);
        'step 1'
        if(result.bool){
            if(get.type(result.cards[0])=='basic'||get.type(result.cards[0])=='trick'){
                player.storage.GXS_xuezui=result.cards[0].name;
            }
        }
    },
    ai:{
        order:8,
        result:{
            target:-1,
        },
    },
    group:"GXS_xuezui_bozui",
    subSkill:{
    bozui:{
				mod:{
					cardname:function(card,player,storage,name){
					if (player.storage.GXS_xuezui) return player.storage.GXS_xuezui;
					},
					cardnature:function(card,player){
						if (player.storage.GXS_xuezui) return get.nature(player.storage.GXS_xuezui);
					},
				},
				trigger:{player:'useCard'},
				silent:true,
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return player.storage.GXS_xuezui;
				},
				content:function(){
				delete player.storage.GXS_xuezui;
				}
		}
    }
                },
                "GXS_jndufu":{
                trigger:{source:'damageBegin1'},
				direct:true,
				filter:function(event,player){
				if (event.player==player) return false;
					return player.countCards('h',{suit:'heart'})>0||player.countCards('h','dz_zhen')>0;
				},
				content:function(){
				'step 0'
	             player.chooseToDiscard(get.prompt('GXS_jndufu'),1,'h',function (card){
	    return get.suit(card)=='heart'||card.name=='dz_zhen';
	    }).ai=function(event,card){
	    if (get.attitude(player,event.player)>0) return 0;
		return 7-ai.get.value(card);
		}; 
		'step 1'
		if (result.bool){
		trigger.num++;
		player.logSkill("GXS_jndufu",trigger.player);
		}
				  }
                },
                "GXS_shifu":{
                trigger:{global:'useCardToPlayer'},
                filter:function(event,player){
					return event.player.sex=='male'&&event.player==event.target&&event.card.name=='tao'&&(player.countCards('h','tao')>0||player.countCards('h','dz_zhen')>0);
				},
				direct:true,
                content:function(){
				'step 0'
	             player.chooseToDiscard(get.prompt('GXS_shifu'),1,'h',function (card){
	    return card.name=='tao'||card.name=='dz_zhen';
	    }).ai=function(event,card){
	    if (get.attitude(player,event.player)>0) return 0;
	    if (event.player.hp<1) return 0;
		return 7-ai.get.value(card);
		}; 
		'step 1'
		if (result.bool){
		event.cardx=get.copy(trigger.card);
        event.cardx.name='dz_zhen';
        trigger.getParent().card=event.cardx;
        game.log(trigger.card,'被改为',event.cardx);
		player.logSkill("GXS_shifu",trigger.player);
		}
				  }
                },
					'GXS_manwu':{
				audio:2,
				trigger:{player:'damageBefore'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h',{suit:'heart'})>0&&event.num>0;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						filterCard:function(card,player){
							return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
							return 10-get.value(card);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							var trigger=_status.event.getTrigger();
							var da=0;
							if(_status.event.player.hp==1){
								da=10;
							}
							if(trigger.num>1){
								if(target.maxHp>5&&target.hp>1) return -att/10+da;
								return -att+da;
							}
							var eff=get.damageEffect(target,trigger.source,target,trigger.nature);
							if(att==0) return 0.1+da;
							if(eff>=0&&trigger.num==1){
								return att+da;
							}
							if(target.hp==target.maxHp) return -att+da;
							if(target.hp==1){
								if(target.maxHp<=4&&!target.hasSkillTag('maixie')){
									if(target.maxHp<=3){
										return -att+da;
									}
									return -att/2+da;
								}
								return da;
							}
							if(target.hp==target.maxHp-1){
								if(target.hp>2||target.hasSkillTag('maixie')) return att/5+da;
								if(att>0) return 0.02+da;
								return 0.05+da;
							}
							return att/2+da;
						},
						prompt:get.prompt('GXS_manwu')
					});
					'step 1'
					if(result.bool){
						player.logSkill(event.name,result.targets);
						trigger.untrigger();
						trigger.player=result.targets[0];
						trigger.player.addSkill('GXS_manwu2');
						player.discard(result.cards[0]);
					}
					else{
						event.finish();
					}
					'step 2'
					trigger.trigger('damageBefore');
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return;
							if(get.tag(card,'damage')&&target.countCards('h')>1) return 0.7;
						}
					},
					threaten:function(player,target){
						if(target.countCards('h')==0) return 2;
					}
				}
			},
			'GXS_manwu2':{
				trigger:{player:['damageAfter','damageCancelled','damageZero']},
				forced:true,
				popup:false,
				audio:'GXS_manwu',
				vanish:true,
				content:function(){
					if(player.hp<player.maxHp) player.draw(player.maxHp-player.hp);
					player.removeSkill('GXS_manwu2');
					player.popup('GXS_manwu');
				}
			},
					'GXS_hongzhuang':{
					audio:'GXS_hongzhuang',
				mod:{
					suit:function(card,suit){
						if(suit=='spade') return 'heart';
					}
				}
			},
				'GXS_liaoshang':{
				audio:3,
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				check:function(card){
					return 9-get.value(card)
				},
				filterTarget:function(card,player,target){
					if(target.hp>=target.maxHp) return false;
					return true;
				},
				content:function(){
					target.recover();
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(target.hp==1) return 5;
							if(player==target&&player.countCards('h')>player.hp) return 5;
							return 2;
						}
					},
					threaten:2
				}
			},
			'GXS_huichun':{
				audio:3,
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
				check:function(card){return 15-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('he',{color:'red'})>0&&_status.currentPhase!=player;
					},
					threaten:1.5,
					save:true,
					respondTao:true,
				}
			},
			"GXS_reliaoshang":{
audio:"GXS_liaoshang",
direct:true,
lastDo:true,
intro:{
    content:'你有病啊，我还有#颗💊',
},
trigger:{
global:["damageAfter","loseHpAfter"],
},
filter:function(event, player) {
return player.countCards('h')>0&&player.countMark('GXS_reliaoshang')>0&&event.player.isAlive();
},
check:function (event,player){ 
        return get.attitude(player,event.player)>0; 
},
content:function (){ 
"step 0" 
var next=player.chooseToDiscard('h','疗伤：是否弃置一张手牌令'+get.translation(trigger.player)+'恢复一点体力？'); 
next.set('ai',function(card){ 
var player=_status.event.player,target=_status.event.getTrigger().player;
var att=get.attitude(player,target); 
if (att<=0) return 0;
if(target.hp==1){ 
return 10-get.value(card); 
} 
if(target.hp==2){ 
return 8-get.value(card); 
} 
return 6-get.value(card); 
}); 
next.logSkill='GXS_reliaoshang'; 
"step 1" 
if(result.bool){ 
player.say(['恢复一下！','养精蓄锐！'].randomGet());
trigger.player.recover(); 
player.removeMark('GXS_reliaoshang',1);
} 
},
group:"GXS_reliaoshang_count",
subSkill:{
count:{
trigger:{
global:"roundStart",
},
forced:true,
silent:true,
charlotte:true,
content:function(){
if (player.countMark('GXS_reliaoshang')<2)player.addMark('GXS_reliaoshang',(2-player.countMark('GXS_reliaoshang'))); 
},
sub:true,
popup:false,
},
},
},                
"GXS_rehuichun":{
    audio:"GXS_huichun",
    trigger:{
        global:"dying",
    },
    filter:function(event,player){
        return event.player.hp<1;
    },
    limited:true,
    skillAnimation:true,
    animationColor:"wood",
    logTarget:"player",
    check:function(event,player){
        if(get.attitude(player,event.player)<4) return false;
        if(player.countCards('h',function(card){
            var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
            if(mod2!='unchanged') return mod2;
            var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
            if(mod!='unchanged') return mod;
            var savable=get.info(card).savable;
            if(typeof savable=='function') savable=savable(card,player,event.player);
            return savable;
        })>=1-event.player.hp) return false;
        if(event.player==player||event.player==get.zhu(player)) return true;
        return !player.hasUnknown();
    },
    content:function(){
        player.awakenSkill('GXS_rehuichun');
        trigger.player.recover(1-trigger.player.hp);
    },
    mark:true,
    intro:{
        content:"limited",
    },
    init:function(player,skill){
        player.storage[skill]=false;
    },
},
			            "GXS_yide":{
                trigger:{
                    global:["useCard"],
                },
                filter:function(event,player){
        return event.card&&event.card.name=='tao';
    },
                frequent:true,
                content:function(){
    player.draw()
    },
            },
          'GXS_qingmu':{
                audio:"ext:RE：英雄杀:4",
                trigger:{
                    player:"phaseUseBefore",
                },
                filter:function(event,player){
        return player.countCards('h')>0&&!player.hasSkill('GXS_qingmu3')&&game.hasPlayer(function(target){
        return target.sex=="female";
        })
    },
                direct:true,
                content:function(){
        "step 0"
        var fang=player.countMark('GXS_qingmu2')==0&&player.hp>=2&&player.countCards('h')<=player.hp+1;    
        player.chooseBool(get.prompt2('GXS_qingmu')).set('ai',function(){
            if(!_status.event.fang) return false;
            return game.hasPlayer(function(target){
                if(target.hasJudge('lebu')||target==player&&target.sex!="female") return false;
                if(get.attitude(player,target)>4){
                    return (get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)>0);
                }
                return false;
            });
        }).set('fang',fang);
        "step 1"
        if(result.bool){
            player.logSkill('GXS_qingmu');
            trigger.cancel();
            player.addTempSkill('GXS_qingmu2');
            player.addMark('GXS_qingmu2',1,false);
        }
    },
            },
           "GXS_qingmu2":{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                popup:false,
                audio:"ext:RE：英雄杀:false",
                onremove:true,
                content:function(){
                    "step 0"
                    event.count=player.countMark(event.name);
                    player.removeMark(event.name,event.count,false);
                    "step 1"
                    event.count--;
                    player.chooseToDiscard('是否弃置一张牌并令一名女性角色进行一个额外回合？').set('logSkill','GXS_qingmu').ai=function(card){
                        return 20-get.value(card);
                    };
                    "step 2"
                    if(result.bool){
                        player.chooseTarget('请选择进行额外回合的女性角色',true,function(card,player,target){
            return target!=player&&target.sex=='female';
        }).set('ai',function(target){
               if(target.hasJudge('lebu')) return -1;
                            if(get.attitude(player,target)>4){
                                return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
                            }
                            return -1;
        });

                    }else event.finish();
                    "step 3"
                    var target=result.targets[0];
                    player.line(target,'fire');
                    target.markSkillCharacter('GXS_qingmu',player,'倾慕','进行一个额外回合');
                    target.insertPhase();
                    target.addSkill('GXS_qingmu3');
                    if(event.count>0) event.goto(1);
                },
            },
         "GXS_qingmu3":{
                trigger:{
                    player:["phaseAfter","phaseCancelled"],
                },
                forced:true,
                popup:false,
                content:function(){
                    player.unmarkSkill('GXS_qingmu');
                    player.removeSkill('GXS_qingmu3');
                },
            },
			'GXS_daowang':{
				audio:"ext:RE：英雄杀:2",
				audioname2:{
                "GXS_dypanan":"GXS_dydaowang",
                },
				//unique:true,
				//gainable:true,
				trigger:{global:'die'},
				//priority:5,
				filter:function(event){
					return event.player.countCards('he')>0;
				},
				content:function(){
					"step 0"
					event.togain=trigger.player.getCards('he');
					player.gain(event.togain,trigger.player,'giveAuto');
				},
			},
			'GXS_dydaowang':{
				audio:"ext:RE：英雄杀:2",
			},
			'GXS_wumu':{
			audio:"ext:RE：英雄杀:2",
				group:['GXS_wumu_shan','GXS_wumu_sha']
			},
			'GXS_wumu_shan':{
		        audio:"GXS_wumu",	
				enable:'chooseToUse',
				filterCard:{type:'basic'},
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{type:'basic'})) return false;
				},
				prompt:'将一张基本牌当闪使用',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h',{type:'basic'})) return false;
					},
					respondShan:true,
				}
			},
			'GXS_wumu_sha':{
		       audio:"GXS_wumu",	
				enable:'chooseToUse',
				filterCard:{type:'basic'},
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{type:'basic'})) return false;
				},
				prompt:'将一张基本牌当杀使用',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h',{type:'basic'})) return false;
					},
					respondSha:true,
				}
			},
	        	'GXS_longnu':{
                 mod:{
					attackFrom:function(){
						return -3;
					},
				},
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					return player.canUse('sha',event.target,false)&&(player.hasSha()||_status.connectMode&&player.countCards('h'));
				},
				content:function(){
					"step 0"
					player.chooseToUse(get.prompt('GXS_longnu'),function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},trigger.target,-1).set('addCount',false).logSkill='GXS_longnu';
				}
			},
		    	'GXS_ybudao':{
				audio: 2,
				trigger: {
					player: 'phaseDrawBegin'
				},
				//check:function(event,player){
				//	if(player.hasFriend()) return true;
				//	return false;
				//},
				content: function() {
					trigger.num++;
					player.addTempSkill('GXS_ybudao2', 'phaseDrawAfter');
				},
				ai: {
					threaten: 1.3
				},
			},
			'GXS_ybudao2': {
				trigger: {
					player: "phaseDrawEnd",
				},
				forced: true,
				popup: false,
				filter: function(event) {
					return event.cards && event.cards.length;
				},
				content: function() {
					'step 0'
					event.cards = trigger.cards.slice(0);
					player.chooseCardTarget({
						filterCard: function(card) {
							return _status.event.getParent().cards.contains(card);
						},
						selectCard: 1,
						filterTarget: function(card, player, target) {
							return player != target;
						},
						ai1: function(card) {
							if (ui.selected.cards.length > 0) return -1;
							if (card.name == 'du') return 20;
							return (_status.event.player.countCards('h') - _status.event
								.player.hp);
						},
						ai2: function(target) {
							var att = get.attitude(_status.event.player, target);
							if (ui.selected.cards.length && ui.selected.cards[0].name ==
								'du') {
								return 1 - att;
							}
							return att - 4;
						},
						//forced:true,
						prompt: '将获得的一张牌交给一名其他角色，或点取消'
					});
					"step 1"
					if (result.bool) {
						player.line(result.targets, 'green');
						result.targets[0].gain(result.cards, player);
						player.$give(result.cards.length, result.targets[0]);
						game.delay(0.7);
					}
				},
			},
			    'GXS_taiji':{
				audio:"ext:RE：英雄杀:2",
				trigger: {
					player: ["useCard", "respond"],
				},
				filter: function(event, player) {
					return event.card.name == 'shan' && player.hasSha();
				},
				direct: true,
				content: function() {
					player.chooseToUse({
						name: 'sha'
					}, '太极：是否使用一张杀？').logSkill = '太极';
				},
			},
			    'GXS_shiquan':{
				audio:"ext:RE：英雄杀:2",
				enable: "chooseToUse",
				filterCard: function(card) {
					return get.color(card) == 'black';
				},
				position: "hes",
				viewAs: {
					name: "guohe",
				},
				viewAsFilter: function(player) {
					if (!player.countCards('hes', {
							color: 'black'
						})) return false;
				},
				prompt: "将一张黑色牌当釜底抽薪使用",
				check: function(card) {
					return 4 - get.value(card)
				},
				ai: {
					basic: {
						order: 9,
						useful: 1,
						value: 5,
					},
					yingbian: function(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (game.hasPlayer(function(current) {
								return !targets.contains(current) && lib.filter.targetEnabled2(
									card, player, current) && get.effect(current, card,
									player, player) > 0;
							})) return 6;
						return 0;
					},
					result: {
						target: function(player, target) {
							var att = get.attitude(player, target);
							var nh = target.countCards('h');
							if (att > 0) {
								var js = target.getCards('j');
								if (js.length) {
									var jj = js[0].viewAs ? {
										name: js[0].viewAs
									} : js[0];
									if (jj.name == 'guohe' || js.length > 1 || get.effect(target,
											jj, target, player) < 0) {
										return 3;
									}
								}
								if (target.getEquip('baiyin') && target.isDamaged() &&
									get.recoverEffect(target, player, player) > 0) {
									if (target.hp == 1 && !target.hujia) return 1.6;
									if (target.hp == 2) return 0.01;
									return 0;
								}
							}
							var es = target.getCards('e');
							var noe = (es.length == 0 || target.hasSkillTag('noe'));
							var noe2 = (es.filter(function(esx) {
								return get.value(esx, target) > 0;
							}).length == 0);
							var noh = (nh == 0 || target.hasSkillTag('noh'));
							if (noh && (noe || noe2)) return 0;
							if (att <= 0 && !target.countCards('he')) return 1.5;
							return -1.5;
						},
					},
					tag: {
						loseCard: 1,
						discard: 1,
					},
				},
			},
		  'GXS_lixian':{
                audio:"ext:RE：英雄杀:1",
                trigger:{
                    global:"loseAfter",
                },
                filter:function(event, player) {
            /*var evt=event.getParent('useCard'); 
            if(event.type!='discard'||event.player==player) return false; 
            for(var i=0;i<event.cards2.length;i++){
            if(get.suit(event.cards2[i],event.player)=='club'&&get.position(event.cards2[i],true)=='d'){
              if(evt.card&&evt.card.name=="guohe")  return true;
            }
        }*/
                    if (event.player==player) return false;
                    var evt=event;
					if(event.name=='lose'){
						if(event.type!='discard') return false;
						evt=event.getParent();
					}
					if(evt[event.name=='lose'?'notBySelf':'bySelf']!=true) return false;
					var evtx=event.getl(event.player);
					if (!evtx||!evtx.cards2) return false
					for(var i=0;i<evtx.cards2.length;i++){
            if(get.suit(event.cards2[i],event.player)=='club'&&get.position(event.cards2[i],true)=='d'){
            return true;
            }         
         };
    },
                direct:true,
                content:function(){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        for(var i=0;i<trigger.cards2.length;i++){
            if(get.suit(trigger.cards2[i],trigger.player)=='club'&&get.position(trigger.cards2[i],true)=='d'){
                cards.push(trigger.cards2[i]);
            }
        }
        if(cards.length){
            player.chooseButton(['礼贤：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
                return get.value(button.link,_status.event.player,'raw');
            });
        }
        "step 2"
        if(result.bool){
            player.logSkill(event.name);
            player.gain(result.links,'gain2','log');
        }
    },
            },
				'GXS_miaoji':{
				audio:"ext:RE：英雄杀:2",
				trigger: {
					player: "useCard",
				},
				frequent: true,
				filter: function(event) {
					return (get.type(event.card) == 'trick');
				},
				content: function() {
					player.draw();
				},
				ai: {
					threaten: 1.4,
					noautowuxie: true,
				},
			},			
			'GXS_dongcha':{
				trigger: {
					global: "useCard",
				},
				forced: true,
				filter: function(event, player, card) {
					if (get.suit(event.card) != 'spade') return false;
					return event.card.name == 'nanman' && player != event.player || event.card
						.name == 'wanjian' && player != event.player || event.card.name ==
						'taoyuan' && player.hp < player.maxHp || event.card.name == 'wugu';
				},
				content: function() {},
				mod: {
					targetEnabled: function(card) {
						if ((get.type(card) == 'trick' || get.type(card) == 'delay') &&
							get.suit(card) == 'spade') return false;
					},
				},
			},
			    'GXS_qiangyun':{
				audio:"ext:RE：英雄杀:2",
				trigger: {
					player: 'loseEnd'
				},
				frequent: true,
				filter: function(event, player) {
					if (player.countCards('h')) return false;
					for (var i = 0; i < event.cards.length; i++) {
						if (event.cards[i].original == 'h') return true;
					}
					return false;
				},
				content: function() {
					player.draw(2);
				},
				ai: {
					effect: {
						target: function(card) {
							if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
						}
					}
				}
			},
					'GXS_zuijiu':{
					audio:"ext:RE：英雄杀:1",
				trigger: {
					player: "phaseDrawBegin2",
				},
				check: function(event, player) {
					if (player.countCards('h') < 3) return false;
					if (!player.hasSha()) return false;
					return game.hasPlayer(function(current) {
						return get.attitude(player, current) < 0 && player.canUse('sha',
							current);
					});
				},
				filter: function(event, player) {
					return !event.numFixed && event.num > 0;
				},
				content: function() {
					player.addTempSkill('yzuijiu2', 'phaseJieshuBegin');
					trigger.num--;
				},
			},
			yzuijiu2: {
				trigger: {
					source: "damageBegin1",
				},
				filter: function(event) {
					return event.card && (event.card.name == 'sha' || event.card.name ==
						'juedou') && event.notLink();
				},
				forced: true,
				content: function() {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
	'GXS_xingzhe':{
	audio:"ext:RE：英雄杀:true",
    trigger: {
         player: 'phaseEnd'
		},
		filter:function(event,player){ 
        return player.countCards('h')<=2; 
    },
    frequent:true,
    content:function(){
    player.draw();
	},
},
				'GXS_fengliu':{
				audio:"ext:RE：英雄杀:2",
				trigger: {
					player: 'phaseDrawBegin'
				},
				filter: function(event, player) {
					return game.hasPlayer(function(current) {
						return current.sex == 'female';
					});
				},
				forced: true,
				content: function() {
					var num = game.countPlayer(function(current) {
						return current.sex == 'female';
					});
					if (num > 2) num = 2;
					trigger.num += num;
				},
				ai: {
					threaten: function() {
						var num = game.countPlayer(function(current) {
							return current.sex == 'female';
						});
						switch (num) {
							case 0:
								return 1;
							case 1:
								return 1.3;
							default:
								return 2;
						}
					}
				},
			},
			  'GXS_luobi':{
			  audio:"ext:RE：英雄杀:2",
				trigger: {
					player: 'phaseEnd'
				},
				filter: function(event, player) {
					return player.isDamaged();
				},
				content: function() {
					"step 0"
					player.draw(player.maxHp - player.hp);
					"step 1"
					event.cards = result;
					"step 2"
					player.chooseCardTarget({
						filterCard: function(card) {
							return _status.event.getParent().cards.contains(card);
						},
						selectCard: [1, event.cards.length],
						filterTarget: function(card, player, target) {
							return player != target;
						},
						ai1: function(card) {
							if (ui.selected.cards.length > 0) return -1;
							if (card.name == 'du') return 20;
							return (_status.event.player.countCards('h') - _status.event.player
								.hp);
						},
						ai2: function(target) {
							var att = get.attitude(_status.event.player, target);
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
								return 1 - att;
							}
							return att - 4;
						},
						prompt: '请选择要送人的卡牌'
					});
					"step 3"
					if (result.bool) {
						player.line(result.targets, 'green');
						result.targets[0].gain(result.cards, player);
						player.$give(result.cards.length, result.targets[0]);
						for (var i = 0; i < result.cards.length; i++) {
							event.cards.remove(result.cards[i]);
						}
						if (event.cards.length) event.goto(2);
					}
				},
			},
			     'GXS_shucai':{
				audio:"ext:RE：英雄杀:1",
				enable: "phaseUse",
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				delay: 0,
				filterTarget: function(card, player, target) {
					return player != target;
				},
				check: function(card) {
					if (ui.selected.cards.length > 1) return 0;
					if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
					if (!ui.selected.cards.length && card.name == 'du') return 20;
					var player = get.owner(card);
					var num = 0;
					var evt2 = _status.event.getParent();
					var num = 0;
					player.getHistory('lose', function(evt) {
						if (evt.getParent().skill == 'yshucai' && evt.getParent(3) == evt2)
							num += evt.cards.length;
					});
					if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
						if (ui.selected.cards.length) {
							return -1;
						}
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (players[i].hasSkill('haoshi') &&
								!players[i].isTurnedOver() &&
								!players[i].hasJudge('lebu') &&
								get.attitude(player, players[i]) >= 3 &&
								get.attitude(players[i], player) >= 3) {
								return 11 - get.value(card);
							}
						}
						if (player.countCards('h') > player.hp) return 10 - get.value(card);
						if (player.countCards('h') > 2) return 6 - get.value(card);
						return -1;
					}
					return 10 - get.value(card);
				},
				content: function() {
					target.gain(cards, player, 'giveAuto');
					var evt2 = event.getParent(3);
					var num = 0;
					player.getHistory('lose', function(evt) {
						if (evt.getParent(2).name == 'yshucai' && evt.getParent(5) == evt2)
							num += evt.cards.length;
					});
					if (num < 2 && num + cards.length > 1) player.recover();
				},
				ai: {
					order: function(skill, player) {
						if (player.hp < player.maxHp && player.storage.疏财 < 2 && player.countCards(
								'h') > 1) {
							return 10;
						}
						return 1;
					},
					result: {
						target: function(player, target) {
							if (target.hasSkillTag('nogain')) return 0;
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
								if (target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if (target.hasJudge('lebu')) return 0;
							var nh = target.countCards('h');
							var np = player.countCards('h');
							if (player.hp == player.maxHp || player.storage.疏财 < 0 || player
								.countCards('h') <= 1) {
								if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi'))
									return 0;
							}
							return Math.max(1, 5 - nh);
						},
					},
					effect: {
						target: function(card, player, target) {
							if (player == target && get.type(card) == 'equip') {
								if (player.countCards('e', {
										subtype: get.subtype(card)
									})) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i] != player && get.attitude(player, players[
												i]) > 0) {
											return 0;
										}
									}
								}
							}
						},
					},
					threaten: 0.8,
				},
			},
					'GXS_qingmin':{	
				mod: {
					targetEnabled: function(card, player, target, now) {
						if (card.name == 'shunshou') return false;
					},
				},
			},	
			      'GXS_feizei':{
				audio:"ext:RE：英雄杀:1",
				trigger:{
                    player:"useCardToPlayered",
                },
                firstDo:true,
                forced:true,
                filter:function(event,player){
                return event.card.name=='shunshou'&&get.distance(event.target,player)>1&&!event.audioed;
                },                
                content:function(){
					trigger.audioed=true;
				},
				mod: {
					targetInRange: function(card, player, target, now) {
						if (card.name == 'shunshou') return true;
					},
				},
			},			
		      'GXS_shentou':{
		      audio:"ext:RE：英雄杀:2",
				enable: 'chooseToUse',
				locked: false,
				filterCard: function(card) {
					return get.suit(card) == 'club';
				},
				filter: function(event, player) {
					return player.countCards('h', {
						suit: 'club'
					});
				},
				viewAs: {
					name: 'shunshou'
				},
				viewAsFilter: function(player) {
					if (!player.countCards('h', {
							suit: 'club'
						})) return false;
				},
				prompt: '将一张牌当探囊取物使用',
				check: function(card) {
					var player = _status.currentPhase;
					if (player.countCards('h', {
							subtype: get.subtype(card)
						}) > 1) {
						return 11 - get.equipValue(card);
					}
					if (player.countCards('h') < player.hp) {
						return 6 - get.value(card);
					}
					return 2 - get.equipValue(card);
				},
				mod: {
					targetInRange: function(card, player, target, now) {
						if (card.name == 'shunshou') return true;
					},
				},
				ai: {
					order: 9.5,
					threaten: 1.5
				}
			},
				'GXS_zhongpan':{
				audio:"ext:RE：英雄杀:2",
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: function(card, player) {
					return get.suit(card) == 'heart';
				},
				viewAs: {
					name: 'wanjian'
				},
				viewAsFilter: function(player) {
					if (!player.countCards('h', {
							suit: 'heart'
						})) return false;
				},
			},
			
		'GXS_wudao':{
    trigger:{
        source:"dieAfter",
    },
audio:"ext:RE：英雄杀:2",
filter:function(event,player){ 
        return player.countCards('h'<5); 
    },
    frequent:true,
    content:function(){
        player.drawTo(5);
    },
},
			'GXS_bianfa':{
				audio:"ext:RE：英雄杀:2",
				trigger: {
					global: "judge",
				},
				direct: true,
				filter: function(event, player) {
					return player.countCards('h') > 0;
				},
				content: function() {
					"step 0"
					player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr ||
							'') + '判定为' +
						get.translation(trigger.player.judging[0]) + '，' + get.prompt('GXS_bianfa'), 'he'
					).set('ai', function(card) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						var judging = _status.event.judging;
						var result = trigger.judge(card) - trigger.judge(judging);
						var attitude = get.attitude(player, trigger.player);
						if (attitude == 0 || result == 0) return 0;
						if (attitude > 0) {
							return result - get.value(card) / 2;
						} else {
							return -result - get.value(card) / 2;
						}
					}).set('judging', trigger.player.judging[0]);
					"step 1"
					if (result.bool) {
						player.respond(result.cards, 'GXS_bianfa', 'highlight', 'noOrdering');
					} else {
						event.finish();
					}
					"step 2"
					if (result.bool) {
						if (trigger.player.judging[0].clone) {
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card) {
								if (card.clone) {
									card.clone.classList.remove('thrownhighlight');
								}
							}, trigger.player.judging[0]);
							game.addVideo('deletenode', player, get.cardsInfo([trigger.player
								.judging[0].clone
							]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
						game.delay(2);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			   'GXS_fajia':{
			   audio:"ext:RE：英雄杀:2",
				priority: 20000,
				trigger: {
					player: "damageEnd",
				},
				check: function(event, player) {
					if (ai.get.attitude(player, event.player) >= 0) return false;
				},
				direct: true,
				filter: function(event, player) {
					return (event.source && event.source.countGainableCards(player, 'he') && event
						.num > 0 && event.source != player);
				},
				content: function() {
					console.log('执行法家...')
					player.gainPlayerCard(get.prompt('GXS_fajia', trigger.source), trigger.source, get
						.buttonValue, 'he').set('logSkill', ['GXS_fajia', trigger.source]);
				},
				ai: {
					"maixie_defend": true,
					effect: {
						target: function(card, player, target) {
							if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
								if (get.attitude(target, player) < 0) return [1, 1];
							}
						},
					},
				},
			},
               'GXS_qixi':{
				audio:"ext:RE：英雄杀:1",
				trigger:{source:'damageBegin1'},
				filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(event.player.countCards('h')==0) return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						player:function(card,player,target,current,isLink){
							if(card.name=='sha'&&!isLink&&target.countCards('h')==0&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
							})) return [1,0,1,-3];
						}
					}
				}
			},
	'GXS_suyuan':{
	audio:"ext:RE：英雄杀:2",
trigger:{player:['phaseDrawSkipped','phaseDrawCancelled','phaseUseSkipped','phaseUseCancelled']},
content:function(){
"step 0"
var cards=get.cards(game.countPlayer()+1);
var targets=game.filterPlayer().sortBySeat();
event.cards=cards;
event.togain=cards.slice(0);
event.targets=targets;
"step 1"
game.log(player,"亮出了",cards);
var dialog=ui.create.dialog('溯源',cards,true);
_status.dieClose.push(dialog);
dialog.videoId=lib.status.videoId++;
event.dialogID=dialog.videoId;
game.addVideo('cardDialog',null,['',get.cardsInfo(cards),dialog.videoId]);
game.broadcast(function(cards,id){
var dialog=ui.create.dialog('溯源',cards,true);
_status.dieClose.push(dialog);
dialog.videoId=id;
},cards,dialog.videoId);
"step 2"
if(targets.length>0&&event.togain.length>0){
var target=targets.shift();
event.target=target;
var next=target.chooseButton(true,function(button){
return get.value(button.link,_status.event.player);
});
next.set('dialog',event.dialogID);
next.set('closeDialog',false);
next.set('dialogdisplay',true);
next.set('cardFilter',event.togain.slice(0));
next.set('source',player);
next.set('selectButton',function(){
if(_status.event.player==_status.event.source) return 2;
return 1;
});
next.set('filterButton',function(button){
return _status.event.cardFilter.contains(button.link);
});
}else{
game.broadcastAll('closeDialog',event.dialogID);
event.finish();
};
"step 3"
event.target.gain(result.links,"gain2");
event.togain.removeArray(result.links);
game.log(event.target,"选择了",result.links);
"step 4"
game.delay();
event.goto(2);
},
},        
'GXS_chuyou':{
audio:"ext:RE：英雄杀:2",
trigger:{player:['phaseDrawBefore','phaseUseBefore']},
check:function(event,player){
        if(player.getHistory('skipped').length>0) return false;
         var num=(game.countPlayer(function(current) {
		return get.attitude(player,current)>0;
		})/game.countPlayer());
		return 3*num>1;
},
content:function(){
"step 0"
player.draw();
"step 1"
trigger.cancel();
"step 2"
var num=Math.min(2,8-player.countMark('GXS_chuyou_Hand'));
if(num>0) player.addMark('GXS_chuyou_Hand',num,false);
if(!player.hasSkill('GXS_chuyou_Hand',num)) player.addSkill('GXS_chuyou_Hand');
},
subSkill:{
"Hand":{
charlotte:true,
intro:{
content:'手牌上限+#'
},
mod:{
maxHandcard:function(player,num){
return num+player.countMark('GXS_chuyou_Hand');
},
},
},
},
},        
	'GXS_mingcha':{
	audio:"ext:RE：英雄杀:2",
enable:"phaseUse",
usable:1,
filter:function(event,player){
return player.countCards("he");
},
filterCard:function(event,player){
if(ui.selected.targets.length) return false;
if(!game.hasPlayer(function(i){
return i!=player&&i.countCards("h")>=ui.selected.cards.length+1;
})) return false;
return true;
},
position:'he',
selectCard:[1,Infinity],
complexSelect:true,
complexCard:true,
filterTarget:function(card,player,target){
return target!=player&&target.countCards("h")>0&&ui.selected.cards.length<=target.countCards("h");
},
check:function(card){
if(!ui.selected.cards||ui.selected.cards.length<2) return true;
},
content:function(){
"step 0"
var cardsT=target.getCards("h").randomGets(cards.length);
var num=0;
if(cardsT.filter(function(i){
return get.color(i)=="red";
}).length>0) num++;
if(cardsT.filter(function(i){
return get.color(i)=="black";
}).length>0) num++;
player.chooseCardButton('明察：请选择要获得的牌',true,cardsT,num).set('ai',function(button){
var player=_status.event.player;
return get.value(button.link,player);
}).set('filterButton',function(button){
if(!ui.selected.buttons||!ui.selected.buttons.length) return true;
return get.color(button.link)!=get.color(ui.selected.buttons[0].link);
});
"step 1"
var gain=result.links.filter(function(i){
return lib.filter.canBeGained(i,player,target);
});
var nogain=result.links.filter(function(i){
return !lib.filter.canBeGained(i,player,target);
});
if(gain.length>0) player.gain(gain,target,'giveAuto','bySelf');
if(nogain.length>0) game.log('但',nogain,'不能被',player,'获得！');
},
},        
    'GXS_xuefan':{
   audio:"GXS_mingcha",	
trigger:{player:"phaseDrawBegin2"},
filter:function(event,player){
return game.hasPlayer(function(i){
return i.hp>player.hp;
});
},
forced:true,
locked:true,              
content:function(){
var num=Math.min(2,game.countPlayer(function(i){
return i.hp>player.hp;
}));
trigger.num+=num;
},
},        
            'GXS_dili':{
            audio:"ext:RE：英雄杀:2",
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				content:function(){
					trigger.num+=Math.min(3, Math.ceil((player.maxHp-player.hp)));
				},
				ai:{
					threaten:function(player,target){
						var num=Math.min(3, Math.ceil((player.maxHp-player.hp)));
						if(num==2) return 2;
						if(num==1) return 1;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(target.maxHp<=3) return;
							if(get.tag(card,'damage')){
								if(target.hp==target.maxHp) return [0,1];
							}
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
			'GXS_kuangchan':{
			audio:"ext:RE：英雄杀:2",
    trigger:{
        player:"phaseBegin",
    },
    forced:true,   
filter:function(event,player){
					return player.hp>2;
				},

    content:function(){
        player.loseHp();
    },
},
'GXS_biaoqi':{
audio:"ext:RE：英雄杀:2",
    trigger:{
        player:"shaBegin",
    },
    forced:true,
 filter:function (event,player){ 
        return player.getAttackRange()>=2; 
    },
    content:function(){
        if(3>trigger.target.hp){
            trigger.directHit=true;
        }
        else if(2<trigger.target.hp){
            player.draw();
        }
    },
},
			'GXS_hanqiang':{
				mod: {
					attackFrom: function(from, to, distance) {
						if (!from.getEquip(1)) return distance - 1
					}
				}
			},
		 'GXS_shenyong':{
                audio:"ext:RE：英雄杀:1",
                direct:true,
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function(){
  "step 0"
        player.chooseControl('heart2','diamond2','club2','spade2').ai=function(event){
            switch(Math.floor(Math.random()*5)){
                case 0:return 'heart2';
                case 1:case 4:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        };
        "step 1"
        game.log(player,'选择了'+get.translation(result.control));
        event.choice=result.control.slice(0,result.control.length-1);
"step 2"
player.addTempSkill('GXS_shenyong1');  
    var suit=(event.choice);
                        player.storage.GXS_doushen2=[];
                        player.storage.GXS_doushen2.add(suit); 
            player.markSkill('GXS_shenyong1');
                    trigger.changeToZero();
    },
            },
            "GXS_shenyong1":{
                audio:"GXS_shenyong",
                enable:"chooseToUse",
                onremove:true,
                intro:{
                    content:"本回合你可以将$花色的牌当作决斗使用",
                },
                marktext:"⚔️",
                prompt:function(){
                    return '请选择【决斗】的目标';
                },
                viewAs:{
                    name:"juedou",
                },
                position:"hs",
                filterCard:function(card,player){
        return get.suit(card)==player.storage.GXS_doushen2;
    },
                check:function(card){
        return 8-get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5.5,
                    },
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    result:{
                        target:-1.5,
                        player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)){
                    return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
           'GXS_podi':{
                subSkill:{
                    "2":{
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        audio:"GXS_podi",
                        filter:function (event,player){ 
return event.player!=player&&!event.player.hasSkill('GXS_podi_debuff')&&event.card&&event.card.name=='juedou';
},
                        logTarget:"player",
                        content:function (){ 
trigger.player.addTempSkill("GXS_podi_debuff");

},
                        sub:true,
                    },
                    debuff:{
                    audio:"GXS_podi",
                        mark:true,
                        marktext:"🎯",
                        intro:{
                            content:function (storage,player,skill){
                    return "本回合拥有“破敌”技能的角色对你使用杀时，你的回闪量+1";
                },
                        },
                        sub:true,
                    },
                },
                group:["GXS_podi_2"],
                forced:true,
                locked:true,
                charlotte:true,
                audio:"ext:RE：英雄杀:1",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
return event.card.name=='sha'&&event.target.hasSkill('GXS_podi_debuff')&&!event.getParent().directHit.contains(event.target);
},
                logTarget:"target",
                content:function(){
var id=trigger.target.playerid;
var map=trigger.getParent().customArgs;
if(!map[id]) map[id]={};
if(typeof map[id].shanRequired=='number'){
map[id].shanRequired++;
}
else{
map[id].shanRequired=2;
}
},
            },
              'GXS_houzhu':{
				audio: 1,
				trigger: {
					player: ["useCard", "respond"],
				},
				filter: function(event, player) {
					return event.card.name == 'shan';
				},
				direct: true,
				content: function() {
					"step 0";
					player.chooseTarget(get.prompt2('后主')).ai = function(target) {
						if (target.hasSkill('红妆')) return 0;
						return get.damageEffect(target, _status.event.player, _status.event
							.player);
					};
					"step 1"
					if (result.bool) {
						player.logSkill('后主', result.targets);
						event.target = result.targets[0];
						event.target.judge(function(card) {
							if (get.suit(card) == 'spade') return -4;
							return 0;
						});
					} else {
						event.finish();
					}
					"step 2"
					if (result.bool == false) {
						event.target.damage(2);
					}
				},
				ai: {
					mingzhi: true,
					useShan: true,
					effect: {
						target: function(card, player, target, current) {
							if (get.tag(card, 'respondShan')) {
								var hastarget = game.hasPlayer(function(current) {
									return get.attitude(target, current) < 0;
								});
								if (target.countCards('h', 'shan') && target.countCards('e', {
										suit: 'spade'
									})) {
									return [0, hastarget ? target.countCards('he') / 2 : 0];
								}
								if (target.countCards('h', 'shan')) {
									return [1, hastarget ? target.countCards('he') / 2 : 0];
								}
								return [1, target.countCards('h') / 4];
							}
						},
					},
				},
			},
			'GXS_chaotuo':{
			audio:"ext:RE：英雄杀:1",
						trigger: {
					global: "judge",
				},
				filter: function(event, player) {
					return player.countCards('hes', {
						color: 'black'
					}) > 0;
				},
				direct: true,
				content: function() {

					'step 0'
					player.chooseBool('是否发动超脱？')

					"step 1"
					if (result.bool) {
						player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr ||
								'') + '判定为' +
							get.translation(trigger.player.judging[0]) + '，' + get.prompt('超脱'),
							'hes',
							function(card) {
								if (get.color(card) != 'black') return false;
								var player = _status.event.player;
								var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2',
									player);
								if (mod2 != 'unchanged') return mod2;
								var mod = game.checkMod(card, player, 'unchanged',
									'cardRespondable', player);
								if (mod != 'unchanged') return mod;
								return true;
							}).set('ai', function(card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result;
							} else {
								return -result;
							}
						}).set('judging', trigger.player.judging[0]);
					} else {
						event.goto(4);
					}
					"step 2"
					console.log('tep 2')
					if (result.bool) {
						player.respond(result.cards, 'highlight', 'GXS_chaotuo', 'noOrdering');
					} else {
						event.finish();
					}
					"step 3"
					console.log('tep 3')
					if (result.bool) {
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
					"step 4"
					console.log('tep 4')
					game.delay(2);
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
               'GXS_feigong':{
				audio:2,
				trigger:{global:'useCardToTargeted'},
				filter:function(event,player){
					return event.card.name=='sha'&&get.distance(player,event.target)<=1;
				},
				check:function(event,player){
					return get.attitude(player,event.target)>=0;
				},
				content:function(){
					"step 0"
					player.draw();
					if(trigger.target!=player){
						player.chooseCard(true,'he','交给'+get.translation(trigger.target)+'一张牌').set('ai',function(card){
							if(get.position(card)=='e') return -1;
							if(card.name=='shan') return 2;
							if(get.type(card)=='equip') return 0.5;
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 1"
					trigger.target.gain(result.cards,player,'give');
					game.delay();
				},
				ai:{
					threaten:1.1
				}
			},
		'GXS_jianai':{
		audio:"ext:RE：英雄杀:2",
    enable:"phaseUse",
    viewAs:{
        name:"wugu",
    },
    usable:1,
    filterCard:{
        suit:"diamond",
    },
    position:"hes",
    filter:function(event,player){
        return player.countCards('hes',{suit:'diamond'})>0;
    },
    check:function(card){
        return 8-get.value(card);
    },
    ai:{
        wuxie:function(){
            if(Math.random()<0.5) return 0;
        },
        basic:{
            order:3,
            useful:0.5,
        },
        result:{
            target:function(player,target){
                if(get.is.versus()){
                    if(target==player) return 1.5;
                    return 1;
                }
                if(player.hasUnknown(2)){
                    return 0;
                }
                return (1-get.distance(player,target,'absolute')/game.countPlayer())*get.attitude(player,target)>0?0.5:0.7;
            },
        },
        tag:{
            draw:1,
            multitarget:1,
        },
    },
},
			  'GXS_shentan':{
				mod:{
					aiValue:function(player,card,num){
						if(get.name(card)!='wuxie'&&get.color(card)!='black') return;
						var cards=player.getCards('hs',function(card){
							return get.name(card)=='wuxie'||get.color(card)=='black';
						});
						cards.sort(function(a,b){
							return (get.name(b)=='wuxie'?1:2)-(get.name(a)=='wuxie'?1:2);
						});
						var geti=function(){
							if(cards.contains(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						if(get.name(card)=='wuxie') return Math.min(num,[6,4,3][Math.min(geti(),2)])*0.6;
						return Math.max(num,[6,4,3][Math.min(geti(),2)]);
					},
					aiUseful:function(){
						return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
					},
				},
				
				audio:2,
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAsFilter:function(player){
					return player.countCards('hs',{color:'black'})>0;
				},
				viewAs:{name:'wuxie'},
				position:'hs',
				prompt:'将一张黑色手牌当无懈可击使用',
				check:function(card){
					var tri=_status.event.getTrigger();
					if(tri&&tri.card&&tri.card.name=='chiling') return -1;
					return 8-get.value(card)
				},
				threaten:1.2
			},
					'GXS_jujian': {
				audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                filterTarget:function (card,player,target){
        return target.countCards('he')>0&&get.distance(player,target)<=2;
    },
                check:function (card){
        return 8-get.value(card);
    },
                position:"he",
                content:function (){
        "step 0"
        var hs=target.getCards('he');
        if(hs.length){
            player.gainPlayerCard(target,true,'he');
            
        }
        else{
            event.finish();
        }
        "step 1"
        var source=target;
        event.card=result.cards[0];
        player.chooseTarget('选择一个目标送出'+get.translation(event.card),function(card,player,target){
            return target!=player;
        }).ai=function(target){
            var att=get.attitude(player,target);
            if(att>3&&player.countCards('h')>target.countCards('h')){
                return att;
            }
            return 0;
        }
        "step 2"
        if(result.bool){
            result.targets[0].gain(card,player);
            player.$give(1,result.targets[0]);
            player.line(result.targets,'green');
            game.delay();
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                        player:function (player,target){
                if(get.attitude(player,target)>0){
                    return 0;
                }
                return 1;
            },
                    },
                },
            },
					'GXS_yuren':{
				audio: 2,			
				enable: 'phaseUse',
				usable: 1,
				position: 'he',
				filterCard: true,
				selectCard: [1, Infinity],
				prompt: '弃置任意张牌并摸等量的牌',
				check: function(card) {
					return 6 - get.value(card)
				},
				content: function() {
					player.draw(cards.length);
				},
				ai: {
					order: 1,
					result: {
						player: 1
					},
					threaten: 1.5
				},
			},
'GXS_manwang':{
audio:1,
    enable:"phaseUse",
    viewAs:{
        name:"nanman",
    },
    filterCard:{
        name:"sha",
    },
   selectCard:2, filter:function(event,player){
        return player.countCards('hs','sha')>1;
    },
    
    group:'GXS_manwang_nanman',
    subSkill:{
        'nanman':{
            trigger:{
        target:"useCardToBefore",
    },
    forced:true,
    audio:'GXS_manwang',
    filter:function(event,player){
        return event.card.name=='nanman';
    },
    content:function(){
        trigger.cancel();
    },
            sub:true,
        },
    },
    ai:{
        wuxie:function(target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
        basic:{
            order:9,
            useful:1,
            value:5,
        },
        result:{
            "target_use":function(player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
            target:function(player,target){
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
        },
        tag:{
            respond:1,
            respondShan:1,
            damage:1,
            multitarget:1,
            multineg:1,
        },
    },
},
'GXS_qizong':{
audio:1,
 trigger:{
        player:"changeHp",
    },
forced:true,

content:function (){ 
var card=get.cardPile(function(card){
return card.name=='sha';
});
if(card){ player.gain(card,'gain2');
}else player.chat("TMD怎么连杀都没有了");
},
},
   'GXS_vxqianglve':{
    audio:2,
    trigger:{
        player:"shaMiss",
    },
    priority:-1,
    check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
    content:function (){
        'step 0'
        player.judge(function(card){
            return get.number(card)>=7?1:-1;
        });
        'step 1'
        if(result.bool){
            player.gainPlayerCard('he',trigger.target);
        }
 else {
            trigger.target.damage();
        }  
    
    },
},
	         		'vxqishe':{
					locked:true,
					forced:true,				
				intro:{
					content:'进攻距离+1'
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
		'GXS_jiquan':{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					"step 0"
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
						player.chooseControl('摸一张牌','获得对你造成伤害的牌','cancel2').set('prompt',get.prompt('GXS_jiquan')).ai=function(){
							var trigger=_status.event.getTrigger();
							if(trigger.cards.length==1&&trigger.cards[0].name=='sha') return 0;
							return 1;
						};
					}
					else{
						player.chooseControl('摸一张牌','cancel2').set('prompt',get.prompt('GXS_jiquan'));
					}
					"step 1"
					if(result.control=='获得对你造成伤害的牌'){
						player.logSkill('GXS_jiquan');
						player.gain(trigger.cards);
						player.$gain2(trigger.cards);
					}
					else if(result.control=='摸一张牌'){
						player.logSkill('GXS_jiquan');
						player.draw();
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target) return [1,0.6];
						}
					}
				}
			},
					'GXS_kongju':{
				 trigger:{
                    player:"phaseDiscardBegin",
                },
                audio:2,
                locked:true,
                forced:true,
                	content:function(){
					trigger.audioed=true;
				},
	filter:function(event,player){
					return !event.audioed;
				},
                      mod:{
                            maxHandcard:function (player,num){
            if(player.hp<4) return num+4-player.hp;
        },
targetEnabled:function (card,player,target,now){
            if(card.name=='shunshou'||card.name=='guohe') return false;
                        },
},
			},
					'GXS_shenjun':{
					locked:true,
					forced:true,				
				intro:{
					content:'进攻距离+1'
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
			'GXS_guiyin':{
			audio:"ext:RE：英雄杀:2",
				mod:{
					targetEnabled:function(card,player,target,now){
						if(target.countCards('h')==0){
							if(card.name=='sha'||card.name=='juedou') return false;
						}
					}
				},
				group:'kongcheng1',
				audio:"GXS_guiyin",	
				ai:{
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					}
				}
			},
			'kongcheng1':{
				audio:"GXS_guiyin",	
				trigger:{player:'loseEnd'},
				forced:true,
				firstDo:true,				
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){}
			},
       'GXS_zhanbu':{
       audio:2,
      trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				preHidden:true,
				content:function(){
					"step 0"
					var num=4;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','占卜：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var top=[];
						var judges=player.getCards('j');
						var stopped=false;
						if(!player.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return judge(b)-judge(a);
								});
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return get.value(b,player)-get.value(a,player);
							});
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					"step 1"
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai:{
					threaten:1.2
				}
			},
			'GXS_cike':{
				audio:"ext:RE：英雄杀:1",
				trigger: {
					player: "shaBegin",
				},
				check: function(event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				logTarget: "target",
				content: function() {
					"step 0"
					player.judge();
					"step 1"
					if (result.color == 'red') {
						trigger.directHit = true;
					} else {
					player.discardPlayerCard(trigger.target);
					}
				},
				ai: {
					threaten: 1.2,
				},
			},
			'GXS_juesha':{
				audio:"ext:RE：英雄杀:2",
				enable: "phaseUse",
				usable: 1,
				filterCard: function(card) {
					return get.subtype(card) == 'equip1';
				},
				selectCard:true,
				filterTarget: function(card, player, target) {
					return player!=target;
				},
				content: function() {
					target.damage();
				},
				check: function(card) {
					return 10 - get.value(card);
				},
				position: "he",
				ai: {
					damage: true,
					order: 8,
					result: {
						player: function(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target: function(player, target) {
							if (!ui.selected.cards.length) {
								if (player.hp < 2) return 0;
								if (player.hp == 2 && target.hp >= 2) return 0;
								if (target.hp > player.hp) return 0;
							}
							return get.damageEffect(target, player);
						},
					},
				},
				threaten: 1.3,
			},		  
    'GXS_shenduan':{
                audio:"ext:RE：英雄杀:2",
                direct:true,
                lastDo:true,
                marktext:'令',
                intro:{
                content:'令签剩余：#',
                },
                trigger:{
                    global:"judge",
                },
                filter:function(event, player, target) {
        return player.countCards('h',{color:'red'})>0&&player.countMark('GXS_shenduan')>0;
    },
    direct:true,
    content:function (){ 
        "step 0" 
        var str='目标'+(trigger.player.judgestr||'')+'判定为'+ 
        get.translation(trigger.player.judging[0])+'，是否修改判定结果？'; 
        event.suitx=['spade','club','heart','diamond'];
        event.suitx.remove(get.suit(trigger.player.judging[0]));
        player.chooseControl(event.suitx,'cancel2').set('prompt',str).set('ai',function(){ 
            //return '取消'; 
            var judging=_status.event.judging; 
            var trigger=_status.event.getTrigger(); 
            var res1=trigger.judge(judging); 
            var list=lib.suit.slice(0); 
            var attitude=get.attitude(player,trigger.player); 
            if(attitude==0) return 0; 
            var getj=function(suit){ 
                return trigger.judge({ 
                    name:get.name(judging), 
                    nature:get.nature(judging), 
                    suit:suit, 
                    number:get.number(judging), 
                }) 
            }; 
            list.sort(function(a,b){ 
                return (getj(b)-getj(a))*get.sgn(attitude); 
            }); 
            if((getj(list[0])-res1)*attitude>0) return list[0]; 
            return 'cancel2'; 
        }).set('judging',trigger.player.judging[0]); 
        "step 1" 
        if(result.control!='cancel2'){ 
            player.chooseToDiscard({color:"red"},true)
            player.logSkill('GXS_shenduan'); 
            //player.line(trigger.player); 
            game.log(trigger.player,'判定结果花色更改为','#g'+result.control);
            player.removeMark('GXS_shenduan',1);
            if(!trigger.fixedResult) trigger.fixedResult={};
      trigger.fixedResult.suit=result.control;
      if(result.control=='club'||result.control=='spade'){
       trigger.fixedResult.color='black';
      }
      else if(result.control=='heart'||result.control=='diamond'){
       trigger.fixedResult.color='red';
      }
      let chooseResult = result.control;
      trigger.player.judging[0].suit = chooseResult;
        } 
    },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:0.3,
                    },
                },
    group:"GXS_shenduan_count",
    subSkill:{
    count:{
    trigger:{
                global:"roundStart",
            },
            forced:true,
            silent:true,
            charlotte:true,
            content:function(){
            if (player.countMark('GXS_shenduan')<2)player.addMark('GXS_shenduan',(2-player.countMark('GXS_shenduan')));
            }
    }
    }
            },	
			  'GXS_pingyuan':{
              audio:"ext:RE：英雄杀:2",
               trigger:{
              player:"changeHp",
              },
              frequent:true,
              content:function(){
              player.draw();
              },
              },
           'GXS_bazhu':{
           audio:"ext:RE：英雄杀:1",
                trigger:{                 player:["chooseToCompareAfter","compareMultipleAfter"],                 target:["chooseToCompareAfter","compareMultipleAfter"],
                },                
                filter:function(event,player){
                    if(event.preserve) return false;
                    return [event.card1,event.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    }).length>0;
                },
                frequent:true,
                "prompt2":function(trigger,player){
                    var cards=[trigger.card1,trigger.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    });
                    cards.sort(function(a,b){
                        return b.number-a.number;
                    });
                    if(cards.length>1&&cards[0].number>cards[1].number) cards.splice(1);
                    return '获得'+get.translation(cards);
                },
                content:function(){
                    var cards=[trigger.card1,trigger.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    });
                    cards.sort(function(a,b){
                        return b.number-a.number;
                    });
                    if(cards.length>1&&cards[0].number>cards[1].number) cards.splice(1);
                    player.gain(cards,'gain2');
                },
            },
              'GXS_zhiba':{
                subSkill:{
                    jiashangxian:{
                     audio:"ext:RE：英雄杀:1",
                     locked:true,
                        mark:true,
                        charlotte:true,
                        marktext:"霸",
                        intro:{
                            content:function (storage,player,skill){
return "本回合你的手牌上限+2。";
},
                        },
                        mod:{
                            maxHandcard:function (player,num){ 
return num+2; 
},
                        },                      
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        content:function (){},
                        sub:true,
                    },
                },
                 audio:"ext:RE：英雄杀:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
                    return player.canCompare(target);
                },
                filter:function(event,player){
                    return player.countCards('h')>0;
                },
                content:function(){
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if(result.bool){
                        player.addTempSkill('GXS_zhiba_jiashangxian');
                    }
                    
                },
                ai:{
                    result:{
                        target:function (player,target){
                var cards=player.getCards('h');
                var num=target.countCards('h');
                if(num>cards.length+3&&player.hp>1) return -2;
                if(num>cards.length+1&&player.hp>1) return -1;
                if(num==cards.length-1&&player.hp>1&&!get.is.altered('pozhen')) return -1;
                for(var i=0;i<cards.length;i++){
                    if(cards[i].number>9) return num==1?-1:-0.5;
                }
                return 0;
            },
                    },
                    order:9,
                },
            },
		         'GXS_yinju':{
		         audio:"ext:RE：英雄杀:2",
		        locked:true,
                forced:true,
trigger:{
target:"useCardToBefore",
player:"damageBegin2",
},
forced:true,
priority:15,
check:function(event,player){
return get.effect(event.target,event.card,event.player,player) },
filter:function(event,player){

if(event.source&&get.distance(event.source,player)>1) return true;
if(event.card&&event.card.name=='sha'&&get.distance(event.player,player)>1) return true;
return false;
},
content:function(){
trigger.cancel();
},
ai:{
effect:{
target:function(card,player,target,current){
'zeroplayertarget';
},
},
},
},
		'GXS_zongheng':{
         audio:"ext:RE：英雄杀:2",
         enable:"phaseUse",
             usable:1,
                    filterCard:{
                       name:"sha",
                        },
                 selectCard:[1,Infinity],
                  discard:false,
                   lose:false,
                   delay:0,
                  filterTarget:function(card,player,target){
  return player!=target;
       },
 content:function(){
"step 0"
target.gain(cards,player,'giveAuto');
"step 1"
player.draw(cards.length+1);
},
},
           'GXS_gongxin':{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
                    if(player.countCards('h')<1) return false;
                    return target!=player&&target.countCards('h')>0;
                },
                content:function(){
                    "step 0"
                    if(target.countCards('h')==0){
                        event.finish();
                        return;
                    }
                    target.chooseCard(true).ai=function(card){
                        if(_status.event.getRand()<0.5) return Math.random();
                        return get.value(card);
                    };
                    "step 1"
                    event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
                    event.videoId=lib.status.videoId++;

                    game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
                    game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
                    event.card2=result.cards[0];
                    game.log(target,'展示了',event.card2);
                    event._result={};
                    player.chooseToDiscard({suit:get.suit(event.card2)},function(card){
                        var evt=_status.event.getParent();
                        if(get.damageEffect(evt.target,evt.player,evt.player)>0){
                            return 7-get.value(card,evt.player);
                        }
                        return -1;
                    }).set('prompt',false);
                    game.delay(2);
                    "step 2"
                    if(result.bool){
                        target.damage('nocard');
                    }
                    
                    event.dialog.close();
                    game.addVideo('cardDialog',null,event.videoId);
                    game.broadcast('closeDialog',event.videoId);
                },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            var eff=get.damageEffect(target,player);
                            if(eff>=0) return 1+eff;
                            var value=0,i;
                            var cards=player.getCards('h');
                            for(i=0;i<cards.length;i++){
                                value+=get.value(cards[i]);
                            }
                            value/=player.countCards('h');
                            if(target.hp==1) return Math.min(0,value-7);
                            return Math.min(0,value-5);
                        },
                    },
                },
            },
		   "GXS_bingxian":{
					trigger:{player:'gainAfter'},
						audio:2,
						forced:true,
								filter:function(event,player){
					if(event.name=='gain'&&event.player==player) return event.cards&&event.cards.length>1;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>1&&event.getParent(2).name!='GXS_bingxian';
						},
						content:function(){
							player.draw('nodelay');
						}
					
				},
		'GXS_wangshen':{
                audio:'ext:RE：英雄杀:2',
                enable:'phaseUse',
                usable:1,
                filterCard:true,
                check:function(card){
        return 8-get.value(card);
    },
                position:'he',
                content:function(){
        player.loseHp();
        player.draw(3);
    },
                ai:{
                    order:8,
                    result:{
                        player:function(player){
                if(player.hp<=2) return player.countCards('h')==0?1:0;
                if(player.countCards('h',{name:'sha'})) return 1;
                return player.countCards('h')<=player.hp?1:0;
            },
                    },
                },
            },
          'GXS_tiandu':{
                subSkill:{
                    debuff:{
                        trigger:{
                          player:"phaseDrawEnd",
                        },
                        forced:true,
                        content:function(){
 player.chooseToDiscard("天妒:请弃置一张牌",1,'he',true);
},
                        sub:true,
                    },
                },
                audio:2,
                trigger:{
                    player:"phaseDrawBegin2",
                },
                frequent:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num+=(2);
        player.addTempSkill('GXS_tiandu_debuff');
        
    },
                ai:{
                    threaten:1.3,
                },
            },
		 'GXS_zhubao':{
                audio:"ext:RE：英雄杀:2",
                order:1,
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){ 
        return event.player.getStat('damage')>=2&&event.player!=player; 
    },
                check:function (event,player){ 
        return get.damageEffect(event.player,player,player)>0; 
    },
                logTarget:"player",
              
                ai:{
                    expose:0.2,
                    threaten:1.3,
                },
                content:function (){ 
        trigger.player.damage(); 
    },
            },
            
            'GXS_taofa':{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                audio:"ext:RE：英雄杀:1",
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                filterTarget:function (card,player,target){ 
        return !target.hasSkill('taofa_off')&&target!=player; 
    },
                filter:function (event,player){ 
        return player.countCards('he')>0; 
    },
                discard:false,
                lose:false,
                delay:false,
                content:function (){ 
     
        target.gain(cards,player,'giveAuto');
    target.addTempSkill('taofa_off','phaseUseEnd');
        if(target.hp>=player.hp){
            target.damage();
        }
    },
                check:function (card){ 
        return 6-get.value(card); 
    },
                ai:{
               
                    result:{
                        target:function (player,target){ 
                if(target.hp>=player.hp) return -2; 
                return 2; 
            },
                    },
                },
            },
		      "GXS_pofu":{
				audio:"ext:RE：英雄杀:2",
				position:'h',
				enable:'phaseUse',
				filterCard:true,
				selectCard:-1,
				filter:function(event,player){
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i=0;i<hs.length;i++){
						var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
						if(mod2===false) return false;
					}
					return true;
				},
				viewAs:{name:'juedou'},
				ai:{	damage:true,
					order:1,},
			},
			
			GXS_bawang:{ 	
			audio:"ext:RE：英雄杀:2",
				forced:true,
				locked:true,
				group:['GXS_bawang1','GXS_bawang2']
			},
			GXS_bawang1:{
				audio:"GXS_bawang",
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return !event.directHit;
				},
				priority:-1,
				content:function(){
					if(typeof trigger.shanRequired=='number'){
						trigger.shanRequired++;
					}
					else{
						trigger.shanRequired=2;
					}
				}
			},
			GXS_bawang2:{
				audio:"GXS_bawang",
				trigger:{player:'juedou',target:'juedou'},
				forced:true,
				filter:function(event,player){
					return event.turn!=player;
				},
				priority:-1,
				content:function(){
					'step 0'
					var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
					next.set('prompt2','（共需打出2张杀）');
					next.autochoose=lib.filter.autoRespondSha;
					next.set('ai',function(card){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(trigger.turn,player)<0&&trigger.turn.countCards('h','sha')>1){
							return get.unuseful2(card);
						}
						return -1;
					});
					'step 1'
					if(result.bool==false){
						trigger.directHit=true;
					}
				},
				ai:{
					result:{
						target:function(card,player,target){
							if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
						}
					}
				}
			},
			'GXS_yinqiang':{
			audio:"ext:RE：英雄杀:2",
				inherit:'zhangba_skill'
            	},
			GXS_xiadan:{
				audio:"ext:RE：英雄杀:2",
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if(result.bool){
						player.addTempSkill('tianyi2');
					}
					else{
						player.addTempSkill('tianyi3');
					}
				},
				ai:{
					order:function(name,player){
						var cards=player.getCards('h');
						if(player.countCards('h','sha')==0){
							return 1;
						}
						for(var i=0;i<cards.length;i++){
							if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
								return 9;
							}
						}
						return get.order({name:'sha'})-1;
					},
					result:{
						player:function(player){
							if(player.countCards('h','sha')>0) return 0.6;
							var num=player.countCards('h');
							if(num>player.hp) return 0;
							if(num==1) return -2;
							if(num==2) return -1;
							return -0.7;
						},
						target:function(player,target){
							var num=target.countCards('h');
							if(num==1) return -1;
							if(num==2) return -0.7;
							return -0.5
						},
					},
					threaten:1.3
				}
			},
			"GXS_tianyi":{
            audio:"ext:RE：英雄杀:1",
                locked:true,
                forced:true,
                trigger:{
                    player:"compare",
                    target:"compare",
                },
                filter:function(event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return event.card1;
                }
                else{
                    return event.card2;
                }
                return false;
                },
                content:function(){
                if(player==trigger.player){
                trigger.num1+=3;
                }
                else{
                trigger.num2+=3;
                }
                },
            },
				 'GXS_zaoren':{
				 audio:2,
				trigger:{player:'phaseDrawBegin'},
				unique:true,
				filter:function(event,player){
				return event.num>0&&player.countMark('GXS_zaoren')<3;
                  },
                check:function (event,player){
        return player.countCards("h")>=3;
    },
				content:function(){
				trigger.num--;
				player.addMark('GXS_zaoren',1,false);
				},
			    marktext:"人",
				intro:{
				name:"造人",
				content:'mark'
				},
			},
			'GXS_wahuang':{			
			audio:2,
				group:['GXS_wahuang_more','GXS_wahuang_less'],
				subSkill:{
					more:{
					audio:'GXS_wahuang',
						trigger:{source:'damageBegin'},
						filter:function(event,player){
							return player.countMark('GXS_zaoren')>0;
						},
						check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
						content:function(){
						player.removeMark('GXS_zaoren',1);
							trigger.num++;
						}
					},
					less:{
					audio:'GXS_wahuang',
						trigger:{player:'damageBegin'},
						filter:function(event,player){
							return player.countMark('GXS_zaoren')>0;
						},
						check:function (event,player){
        return player.hp<=event.num;
    },
						content:function(){
						player.removeMark('GXS_zaoren',1);
							trigger.num--;							
						}
					}
				}
			},
			'GXS_shenyou':{
			audio:2,
  trigger:{player:'recoverBegin'},
 filter:function (event,player){
    return event.source==player&&event.card&&(event.card.name=='tao');
    },
    direct:true,
  content:function(){
							'step 0'
					player.chooseTarget(get.prompt('GXS_shenyou'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('GXS_shenyou',result.targets);
						result.targets[0].recover();
					}
				},
				ai:{
					threaten:0.8,
					expose:0.1
				}
					},  
					'GXS_tianxiang':{
                  audio:2,
				trigger:{global:'phaseBegin'},
				filter:function(event,player){
					return event.player.countCards('j')>0&&player.countCards('he');
				},
				check:function (event,player){
				 return get.attitude(player,event.player)>0;
                },
                content:function (){
        'step 0'
        var next=player.chooseToDiscard('he','弃置一张牌令'+get.translation(trigger.player)+'跳过判定阶段？',true);        
        next.ai=function(card){
            if(player.hp==1||trigger.num>1){
                return 9-ai.get.value(card);
            }
            if(player.hp==2){
                return 8-ai.get.value(card);
            }
            return 7-ai.get.value(card);
        };
        'step 1'
        if(result.bool){
            trigger.player.skip('phaseJudge');
        }
    },                
            },
					'GXS_guose':{
				audio:2,
				group:'GXS_guose_bagua',
				locked:true,
			},
			GXS_guose_bagua:{
				audio:'GXS_guose',
				equipSkill:true,
				noHidden:true,
				inherit:'bagua_skill',
				filter:function(event,player){
					if(!lib.skill.bagua_skill.filter(event,player)) return false;
					if(!player.isEmpty(2)) return false;
					return true;
				},
				ai:{
					respondShan:true,
					effect:{
						target:function(card,player,target){
							if(player==target&&get.subtype(card)=='equip2'){
								if(get.equipValue(card)<=7.5) return 0;
							}
							if(!target.isEmpty(2)) return;
							return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
						}
					}
				}
			},
			'GXS_chujia':{
			audio:true,
				enable:'phaseUse',
				filterCard:function(card){
					if(ui.selected.cards.length){
						return get.color(card)==get.color(ui.selected.cards[0]);
					}
					return true;
				},
				complexCard:true,
				usable:1,
				selectCard:2,
				check:function(card){
					return 6-get.value(card);
				},
				filterTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				content:function(){
					if(target.maxHp>target.hp){
						target.draw(target.maxHp-target.hp);
					}
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							var num=target.maxHp-target.hp;
							if(num>2) return num;
							return 0;
						}
					}
				}
			},
			'GXS_zhijie':{
			audio:true,
				enable:'phaseUse',
				viewAsFilter:function(player){
					return player.countCards('h',{suit:'heart'})>0;
				},
				viewAs:{name:'wuzhong'},
				filterCard:{suit:'heart'},
				check:function(card){
					return 8-get.value(card);
				}
			},
			GXS_bawang:{ 
			audio:"ext:RE：英雄杀:2",
				forced:true,
				locked:true,
				group:['GXS_bawang1','GXS_bawang2']
			},
			GXS_bawang1:{
				audio:2,
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return !event.directHit;
				},
				priority:-1,
				content:function(){
					if(typeof trigger.shanRequired=='number'){
						trigger.shanRequired++;
					}
					else{
						trigger.shanRequired=2;
					}
				}
			},
			GXS_bawang2:{
				audio:true,
				trigger:{player:'juedou',target:'juedou'},
				forced:true,
				filter:function(event,player){
					return event.turn!=player;
				},
				priority:-1,
				content:function(){
					'step 0'
					var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
					next.set('prompt2','（共需打出2张杀）');
					next.autochoose=lib.filter.autoRespondSha;
					next.set('ai',function(card){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(trigger.turn,player)<0&&trigger.turn.countCards('h','sha')>1){
							return get.unuseful2(card);
						}
						return -1;
					});
					'step 1'
					if(result.bool==false){
						trigger.directHit=true;
					}
				},
				ai:{
					result:{
						target:function(card,player,target){
							if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
						}
					}
				}
			},
			'GXS_aojian':{
				audio:2,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card,player){
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
						if(!player.countCards('he',{color:'red'})) return false;
				},
				prompt:'将一张红色牌当杀使用或打出',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
							if(!player.countCards('he',{color:'red'})) return false;
					},
					respondSha:true,
				}
			},			
			'GXS_xinmo':{
			mod:{
        targetInRange:function(card,player,target,now){
            if(get.color(card)=="red") return true;
        },
    },
  },
			'GXS_fengyi':{
			audio:true,
			trigger:{player:'damageEnd'},
				check:function(event,player){
					return get.attitude(player,event.source)<0
				},
				content:function(){
				'step 0'
        player.judge(function(card){
            return get.suit(card)!='heart'?1:-1;
        });
                'step 1'
				if (result.judge>0)event.getParent('phaseUse').skipped=true;
				},
				ai:{
					threaten:1.8
				}				
			},
			'GXS_wange':{
			audio:true,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					return game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&current.countCards('h');
					});
				},
				content:function(){
					trigger.num--;
					player.addSkill('GXS_wange2');
				},
				ai:{
					threaten:1.8
				}
			},
			'GXS_wange2':{
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					'step 0'
					var num=Math.max(1,player.maxHp-player.hp);
					player.chooseTarget('婉歌：获得至多'+get.cnNumber(num)+'名角色的一张手牌',[1,num],function(card,player,target){
						return target.countCards('h')&&target!=player;
					}).ai=function(target){
						return -get.attitude(player,target);
					};
					player.removeSkill('GXS_wange2');
					'step 1'
					if(result.bool){
						event.targets=result.targets;
						player.logSkill('GXS_wange',result.targets);
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets.length){
						player.gainMultiple(event.targets);
					}
					else{
						event.finish();
					}
					'step 3'
					game.delay();
				}
			},
			'GXS_kuixin':{
			audio:true,
			trigger:{
        player:"judgeEnd",
    },
    forced:true,
    filter:function(event,player){
        return get.position(event.result.card,true)=='o';
    },
    content:function(){
        player.gain(trigger.result.card,'gain2');
    },
    },
    GXS_seyou:{
    audio:"ext:RE：英雄杀:true",
				skillAnimation:true,
				unique:true,
				mark:true,
				limited:true,
				init:function(player){
					player.storage.GXS_seyou=false;
				},
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.GXS_seyou
				},
				intro:{
					content:'limited'
				},
				filterTarget:true,
				content:function(){
					"step 0"
					player.awakenSkill('GXS_seyou');
					player.storage.GXS_seyou=true;
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.remove(target);
					for(var i=0;i<event.targets.length;i++){
						if(event.targets[i].sex!='male'){
							event.targets.splice(i--,1);
						}
					}
					"step 1"
					if(event.targets.length){
						event.current=event.targets.shift();
						if(event.current.countCards('he')&&target.isAlive()){
							event.current.chooseToUse({name:'sha'},target,-1);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool==false){
						event.current.chooseCard('交给'+get.translation(player)+'一张手牌',true).ai=function(card){
						if(get.attitude(event.current,player)>0){
						return -1;
						}
						else{
						return 3-get.value(card);
						}
					  }
					}
					"step 3"
					if(result.bool){
					player.gain(result.cards[0]);
					event.current.$give(1, player);
					}
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							var players=game.filterPlayer();
							if(player.hp>1){
								if(game.phaseNumber<game.players.length) return 0;
								for(var i=0;i<players.length;i++){
									if(players[i].ai.shown==0) return 0;
									if(players[i].sex=='unknown') return 0;
								}
							}
							var effect=0;
							for(var i=0;i<players.length;i++){
								if(players[i].sex=='male'&&players[i]!=target&&players[i]!=player&&players[i].countCards('he'))
								effect+=get.effect(target,{name:'sha'},players[i],target);
							}
							return effect;
						}
					}
				}
			},
			GXS_sheshi:{
			audio:"ext:RE：英雄杀:true",
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					"step 0"
					if(event.isMine()){
						event.dialog=ui.create.dialog(get.prompt('GXS_sheshi'));
					}
					if(ui.cardPile.childNodes.length<4){
						var discardcards=get.cards(4);
						for(var i=0;i<discardcards.length;i++){
							discardcards[i].discard();
						}
					}
					player.chooseControl('heart2','diamond2','club2','spade2','cancel').ai=function(event){
						if(Math.random()<0.5) return 'club2';
						if(Math.random()<0.5) return 'spade2';
						if(Math.random<2/3) return 'diamond2';
						return 'heart2';
					};
					"step 1"
					if(event.dialog){
						event.dialog.close();
					}
					if(result.control&&result.control.indexOf('2')!=-1){
						player.logSkill('GXS_sheshi');
						game.log(player,'指定的花色为'+get.translation(result.control));
						var suit=result.control.slice(0,result.control.length-1);
						var cards=[];
						for(var i=0;i<ui.cardPile.childNodes.length;i++){
							var card=ui.cardPile.childNodes[i];
							cards.push(card);
							if(get.suit(card)==suit||i>=3){
								break;
							}
						}
						event.cards=cards;
						event.suit=suit;
						player.showCards(cards);
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.cards&&event.cards.length){
						if(get.suit(event.cards[event.cards.length-1])==event.suit){
							event.cards.pop().discard();
						}
						if(event.cards.length){
							player.gain(event.cards,'draw2');
						}
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [1,2];
								if(target.hp==3) return [1,1.5];
								if(target.hp==2) return [1,0.5];
							}
						}
					}
				}
			},
    'GXS_yuxian':{
    audio:"ext:RE：英雄杀:true",
    enable:"phaseUse",
    usable:1,
    filterTarget:function(card,player,target){
        return target.countCards("ej");
    },
    filterCard:true,
    filter:function(event,player){
	  return player.countCards('h')>0;
	},
    content:function(){
    'step 0'
     player.choosePlayerCard(target,'ej',get.prompt('GXS_yuxian',target)).set('ai',function(button){
                var evt=_status.event,val=get.value(button.link);
                if(evt.target.hasSkillTag('noe')) val-=4;
                if((evt.att>0)==(val>0)) return 0;
                return get.effect(evt.player,button.link,evt.player,evt.player);
            }).set('att',get.attitude(player,target));
        'step 1'
        if(result.bool){
            var card=result.links[0];
            target.removeEquipTrigger(card);
         }
      }
    },
    'GXS_nichang':{
    audio:"ext:RE：英雄杀:true",
    trigger:{
        player:"phaseDrawBegin1",
    },
    check:function(event,player){
        var cards=player.getCards('h');
        if(cards.length<1) return true;
        var color=get.color(cards[0]);
        for(var i=1;i<cards.length;i++){
            if(get.color(cards[i])!=color) return false;
        }
        return true;
    },
    content:function(){
        player.addTempSkill('GXS_nichangyuyi');
        trigger.changeToZero();
        }
    },
    'GXS_nichangyuyi':{
    audio:"GXS_nichang",
    trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function(){
    'step 0'
    player.showHandcards();
    event.suit=["spade","heart","club","diamond"];
    if (player.countCards("h")>0){
    for (var i of player.getCards("h")){
    if (event.suit.contains(get.suit(i))) event.suit.remove(get.suit(i))
    }
    }
    event.num=0;
    'step 1'
    if (event.suit.length&&event.num<event.suit.length){    
    player.draw();
    event.num++;
    event.redo();
    }
       }
    },
			'GXS_zhiyu':{
				audio:"ext:RE：英雄杀:2",
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				selectCard:2,
				check:function(card){
					var player=get.owner(card);
					if(player.countCards('h')>player.hp)
						return 8-get.value(card)
					if(player.hp<player.maxHp)
						return 6-get.value(card)
					return 4-get.value(card)

				},
				filter:function(event,player){
					return player.countCards('he')>1;
				},
				filterTarget:function(card,player,target){
					if(target.sex!='male') return false;
					if(target.hp>=target.maxHp) return false;
					if(target==player) return false;
					return true;
				},
				content:function(){
					player.recover();
					target.recover();
				},
				ai:{
					order:5.5,
					result:{
						player:function(player){
							if(player.hp<player.maxHp) return 4;
							if(player.countCards('h')>player.hp) return 0
							return -1;
						},
						target:4
					},
					threaten:2,
				}
			},
		'GXS_fenghuo':{
		audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					return player.countCards('e')>0;
				},
				filterCard:true,
				position:'e',
				viewAs:{name:'nanman'},
				prompt:'将一张装备区内的牌当南蛮入侵使用',
				check:function(card){
					var player=_status.currentPhase;
					if(player.countCards('he',{subtype:get.subtype(card)})>1){
						return 11-get.equipValue(card);
					}
					if(player.countCards('h')<player.hp){
						return 6-get.value(card);
					}
					return 2-get.equipValue(card);
				},
				ai:{
					order:9,
					threaten:1.1
				}
			},
			'GXS_yubu':{
				audio:"ext:RE：英雄杀:5",
    trigger:{
        player:"phaseZhunbeiBegin",
    },
    frequent:true,
    preHidden:true,
    content:function(){
        "step 0"
        if(event.cards==undefined) event.cards=[];
        var next=player.judge(function(card){
            if(get.color(card)=='black') return 1.5;
            return -1.5;
        });
        next.judge2=function(result){
            return result.bool;
        };
        if(get.mode()!='guozhan') next.set('callback',function(){
            if(event.judgeResult.color=='black'&&get.position(card,true)=='o') player.gain(card,'gain2');
        });
        else next.set('callback',function(){
            if(event.judgeResult.color=='black') event.getParent().orderingCards.remove(card);
        });
        "step 1"
        if(result.judge>0){
            event.cards.push(result.card);
            player.chooseBool('是否再次发动【玉步】？').set('frequentSkill','GXS_yubu');
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i],true)!='o'){
                    event.cards.splice(i,1);i--;
                }
            }
            if(event.cards.length){
                player.gain(event.cards,'gain2');
            }
            event.finish();
        }
        "step 2"
        if(result.bool){
            event.goto(0);
        }
        else{
            if(event.cards.length){
                player.gain(event.cards,'gain2');
            }
        }
    },
			},
			'GXS_qingying':{
				audio:"ext:RE：英雄杀:2",
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('hs',{color:'black'})) return false;
				},
				position:'hs',
				prompt:'将一张黑色手牌当闪使用或打出',
				check:function(){return 1},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('hs',{color:'black'})) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
			'GXS_tongfu':{
			audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.hasCard(function(card){
						return !get.info(card).unique;
					},'e');
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',true);					
					'step 1'					
					var cg=target.get('e');
        if(cg.length){
            var cg2=[];
            for(var i=0;i<cg.length;i++){
                cg2.push(game.createCard(cg[i].name,cg[i].suit,cg[i].number));
                     }           
         player.gain(cg2,'draw');        
        }       
  player.say(['那美好的仗我已经打过了，当跑的路我已经跑尽了，所信的道我已经守住了。','从此以后，有公义的冠冕为我存留，就是按着公义审判的主到了那日要赐给我的，不但赐给我，也赐给凡爱慕他显现的人。'].randomGet());					
				},
				ai:{
					order:9,
					threaten:1.5,
					result:{
						player:function(player){
							if(player.countCards('e')<3) return 1;
							return 0;
						}
					}
				}
			},
			'GXS_retongfu':{
			audio:"GXS_tongfu",
			enable:"phaseUse",
            filter:function(event,player){
            if (player.hasSkill('GXS_retongfu_temp')) return false;
            if (game.countPlayer(function(current){
            return current.hasSkill('GXS_retongfu_equip');
            })) return false;
            return true;
            },
    filterTarget:function (card,player,target){
        return target!=player;
    },
    content:function (){
        'step 0'
        if(Math.random()<0.5){
        event.goto(4);
        }
        'step 1'
        player.say('那美好的仗我已经打过了');
        game.delay(2);
        'step 2'
        player.say('当跑的路我已经跑尽了');
        game.delay(2);
        'step 3'
        player.say('所信的道我也已经守住了');
        game.delay(2);
        event.goto(7);
        'step 4'
        player.say('从此以后，有公义的冠冕为我存留');
        game.delay(2);
        'step 5'
        player.say('就是按着公义审判的主到了那日要赐给我的');
        game.delay(2);
        'step 6'
        player.say('不但赐给我，也赐给凡爱慕他显现的人');
        game.delay(2);
        'step 7'
		target.addSkill('GXS_retongfu_equip');
		if (target.countCards("e")){
		var equ=target.getCards("e");
		var cards=[];
		for(var i of equ) cards.push(i);
		target.lose(cards, ui.special)._triggered = null;
        target.storage.GXS_retongfu_equip = cards;
        target.syncStorage('GXS_retongfu_equip');
        }
        player.storage.GXS_retongfu=target;
        player.addTempSkill('GXS_retongfu_temp');
        'step 8'
        for (var i=1;i<6;i++){
         if (player.getEquip(i)){
         var card=game.createCard(player.getEquip(i));
         card._tongfued=true;
         target.equip(card)._triggered=null;
         }
         }
	},
	ai:{
        order:4,
        result:{
            target:function (player,target){
            if (!player.getEquip(2)&&!player.getEquip(3)) return -target.countCards('e');
            if (player.countCards('e')>=2&&get.attitude(player,target)>0) return 6-target.countCards('e');
            return 0;
            },
        },
        },
        group:['GXS_retongfu_1','GXS_retongfu_dying','GXS_retongfu_zbchange','GXS_retongfu_destroy'],
        subSkill:{
        'dying':{
        trigger:{
        global:'die',
         },
         forceDie:true,
         forced:true,
         charlotte:true,
         filter:function(event,player){
        if (player.storage.GXS_retongfu==undefined) return false;
        return event.player==(player||player.storage.GXS_retongfu);
        },
         content:function(){
         if (trigger.player==player){
         var targets=game.filterPlayer(function(current){
            return current.hasSkill('GXS_retongfu_equip');
         });
         if (targets){
         var target=targets[0];
         if (target.countCards('e')) {
		target.lose(target.getCards('e'),ui.special)._triggered=null;
		game.cardsGotoSpecial(target.getCards('e'));
		}
         if (target.storage.GXS_retongfu_equip){
		event.list=[];
        for(var i=0;i<target.storage.GXS_retongfu_equip.length;i++){
            var card=target.storage.GXS_retongfu_equip[i];
            if(get.type(card)=='equip'){
            target.equip(card,true)._triggered = null;
            }
        };
		}
		target.removeSkill('GXS_retongfu_equip');
		}
         }else if (player.storage.GXS_retongfu!=undefined){
         delete player.storage.GXS_retongfu;
         }
         },
        },
        'zbchange':{
        trigger:{
        global:["equipAfter","addJudgeAfter","loseAfter","gainAfter","loseAsyncAfter"],
    },
        filter:function(event,player){
        if (player.storage.GXS_retongfu==undefined) return false;
        if (event.parent.name=='GXS_retongfu_zbchange') return false;
        if (event.getParent('useCard')&&get.type(event.card)=="equip") return true;
        return game.hasPlayer(p => {
          var evt = event.getl(p);
          return evt && evt.es && evt.es.length;
        });
         },
         forced:true,
         lastDo:true,
         silent:true,
         content:function(){
         var target=player.storage.GXS_retongfu;
         for (var i=1;i<6;i++){
         if (!player.getEquip(i)&&target.getEquip(i)) target.lose(target.getEquip(i),ui.special)._triggered=null;
         if (player.getEquip(i)&&(!target.getEquip(i)||player.getEquip(i).name!=target.getEquip(i).name)){
         var card=game.createCard(player.getEquip(i));
         card._tongfued=true;
         target.equip(card)._triggered=null;
         }
         }
         }
        },
        '1':{
        audio:"GXS_tongfu",
        enable:"phaseUse",
    filterTarget:function (card,player,target){
        return target.hasSkill('GXS_retongfu_equip');
    },
    filter:function(event,player){
    if (player.hasSkill('GXS_retongfu_temp')) return false;
    if (player.countCards("he")==0) return false;
            return game.countPlayer(function(current){
            return current.hasSkill('GXS_retongfu_equip');
            });
    },
    content:function (){
        'step 0'
        delete player.storage.GXS_retongfu;
	    player.chooseToDiscard('he',true);
		'step 1'
		if (target.countCards('e')) {
		target.lose(target.getCards('e'),ui.special)._triggered=null;
		game.cardsGotoSpecial(target.getCards('e'));
		}
		if (target.storage.GXS_retongfu_equip){
		event.list=[];
        for(var i=0;i<target.storage.GXS_retongfu_equip.length;i++){
            var card=target.storage.GXS_retongfu_equip[i];
            if(get.type(card)=='equip'){
                target.equip(card,true)._triggered = null;
            }
        };
		}
		target.removeSkill('GXS_retongfu_equip');
		player.addTempSkill('GXS_retongfu_temp');
        },
        ai:{
        order:3,
        result:{
        player:function(player){
        if (player.countCards('e')>2&&game.countPlayer(function(current){
            return current.hasSkill('GXS_retongfu_equip')&&get.attitude(player,current)<0;
            })>0) return 1;
        return 0;
            }
          },
        },
	},
        },
			},
			'GXS_retongfu_equip':{
			mark:true,
			marktext:"福",
    intro:{
        mark:function (dialog, content, player) {
          if (content && content.length) {
              dialog.add(content);
          }
        },
        content:function (content, player) {
          if (content && content.length) {
              return get.translation(content);
          }
        },
    },
         mod:{
        cardEnabled:function(card,player){
            if(get.type(card)=='equip') return false;
        },
        cardUsable:function(card,player){
            if(get.type(card)=='equip') return false;
        },
    },
			},
			'GXS_retongfu_temp':{},
			GXS_retongfu_destroy:{
				trigger:{global:['loseEnd','cardsDiscardEnd']},
				forced:true,
				charlotte:true,
				lastDo:true,
				filter:function(event,player){
					var cs=event.cards;
					for(var i=0;i<cs.length;i++){
						if(cs[i]._tongfued==true&&get.position(cs[i],true)=='d') return true;
					}
					return false;
				},
				forceDie:true,
				content:function(){
					var list=[];
					var cs=trigger.cards;
					for(var i=0;i<cs.length;i++){
						if(cs[i]._tongfued==true&&get.position(cs[i],true)=='d'){
							list.push(cs[i]);
						}
					}
					game.log(list,'已被移出游戏');
					game.cardsGotoSpecial(list);
				},
			},
			'GXS_shengnv':{
			audio:2,
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('GXS_shengnv'),1,'h').set('ai',function(card){
								return 1;
    						});
							'step 1'
							if(result.bool){							    
							player.say('如果没有的话，希望上帝能赐予我；如果我已得到，希望上帝仍给予我。');
								event.card=result.cards[0];
								var col=get.color(event.card);
								player.showCards(event.card);
								trigger.source.chooseCard(1,'h',function(card,player){
						return get.color(card)==col;
					}).set('ai',function(card){
									if(get.attitude(trigger.source,player)>0) return 0;
									return 9-get.value(card);
    							});
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								var card=result.cards[0];
								trigger.source.discard(card);
							}else{
								player.recover();
							};
						},
					},
			'GXS_hongyan':{
			audio:"ext:RE：英雄杀:2",
				inherit:'lijian'
			},
			'GXS_chuchu':{
			audio:"ext:RE：英雄杀:2",
				inherit:'biyue'
			},
			'GXS_vxfuchou':{
			audio:"ext:RE：英雄杀:2",
				inherit:'ganglie'
			},
			'GXS_meihuo':{
			audio:"ext:RE：英雄杀:2",
				inherit:'guose'
			},
			'GXS_chenyu':{
			audio:"ext:RE：英雄杀:2",
				inherit:'liuli'
			},
			'GXS_tianlang':{
			audio:"ext:RE：英雄杀:1",
				inherit:'paoxiao'
			},
			GXS_vxdiehun:{
			audio:"ext:RE：英雄杀:2",
				filter:function(event,player){
					return event.card&&get.type(event.card)=='trick'&&event.targets&&event.targets.length>1;
				},
				check:function(event,player){
					return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
				},
				trigger:{target:'useCardToTargeted'},
				content:function(){
				'step 0'
					trigger.getParent().excluded.add(player);
				'step 1'	
					player.chooseTarget('选一名角色摸牌',true).ai=function(target){
								return get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								result.targets[0].draw();
							}
				},
				ai:{
					effect:{
						target:function(card,player,target){
						    if (player!=target&&get.attitude(player,target)<0){
							if(card.name=='dz_hezong') return [0,0];
							if(card.name=='tiesuo') return [0,0];
							if(card.name=='yihuajiemu') return [0,1];
							if(get.tag(card,'multineg')) return [0,2];
							}
						}
					}
				}
			},
					'GXS_diehun':{
			audio:2,
				filter:function(event,player){
					return event.card&&get.type(event.card)=='trick'&&event.targets&&event.targets.length>1;
				},
				check:function(event,player){
					return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
				},
				trigger:{target:'useCardToTargeted'},
				content:function(){
					trigger.getParent().excluded.add(player);
					player.draw();
					}
			},
			'GXS_qiyi':{
			audio:"ext:RE：英雄杀:2",
				trigger:{
        player:"phaseDrawBegin1",
    },
    direct:true,
    filter:function(event,player){
        return !event.numFixed;
    },
    content:function(){
        "step 0"
        var check;
        var i,num=game.countPlayer(function(current){
            return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
        });
        check=(num>=2);
        player.chooseTarget(get.prompt('GXS_qiyi'),'获得其他一至两名角色的各一张手牌',[1,2],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            if(!_status.event.aicheck) return 0;
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        }).set('aicheck',check);
        "step 1"
        if(result.bool){
            player.logSkill('GXS_qiyi',result.targets);
            player.gainMultiple(result.targets);
            trigger.changeToZero();
        }
        else{
            event.finish();
        }
        "step 2"
        game.delay();
    },
    ai:{
        threaten:2,
        expose:0.3,
    },
			},
			
			//微信英雄杀
		"GXS_cifu":{
		audio:"ext:RE：英雄杀:2",
		trigger:{
        player:"phaseBegin",
    },
    frequent:true,
    content:function(){  
     'step 0'
    player.judge();
    'step 1'
    event.card=result.card;
    switch(get.color(result.card)){
    case "black":player.chooseTarget('选择一名角色获得此牌').ai=function(target){
		return get.attitude(player,target);
	};break;
	case "red":if (get.position(event.card,true)=='d')player.chooseControlList('辞赋','将'+get.translation(event.card)+'置于牌堆顶','将'+get.translation(event.card)+'置于牌堆底',true).set('ai',function(){
                var num=[1,2].randomGet();
                return num;
            });break;
    }
    'step 2'
    if(result.targets&&result.targets.length){
            var target=result.targets[0];
            player.line(target,'green');
            target.gain(card,'gain2','log');
        }
        else if (get.position(event.card,true)=='d'){
			event.index=result.index;
            card.fix();
           if(event.index==1){
            game.log(player,'将判定牌置于牌堆底');
            ui.cardPile.appendChild(card);
        }
        else if(event.index==0){
            game.log(player,'将判定牌置于牌堆顶');
            ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
		}
		}
      }
		},
		"GXS_zhisheng":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"judgeEnd",
			},
			frequent:true,
			filter:function (event,player){
        return event.result.number<7;
    },
    content:function (){
        player.draw();
    },
		},
		"GXS_shangguo":{
		audio:"ext:RE：英雄杀:2",
			filter:function (event,player){
        return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card,'trick')=='trick');
    },
    logTarget:"player",
    check:function (event,player){
        if(event.getParent().excluded.contains(player)) return false;
        if(get.attitude(player,event.player)>0){
            return false;
        }
        if(get.tag(event.card,'respondSha')){
            if(player.countCards('h',{name:'sha'})==0){
                return true;
            }
        }
        else if(get.tag(event.card,'respondShan')){
            if(player.countCards('h',{name:'shan'})==0){
                return true;
            }
        }
        else if(get.tag(event.card,'damage')){
            if(player.countCards('h')<2) return true;
        }
        else if(event.card.name=='shunshou'&&player.hp>2){
            return true;
        }
        return false;
    },
    trigger:{
        target:"useCardToTargeted",
    },
    content:function (){
        "step 0"
        player.loseHp();
        "step 1"
        trigger.getParent().excluded.add(player);
        "step 2"
        player.draw()
    },
    ai:{
        expose:0.3,
    },
		},
		"GXS_beifu":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseJieshuBegin",
    },
	content:function (){
	'step 0'
        player.judge(function(card){
            return get.number(card)<7?1:-1;
        });
        'step 1'
         event.card=result.card;
        if(result.bool){
            player.chooseTarget('令一名角色回复体力',function(card,player,target){
            return target.isDamaged();
        }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(player==target) att/=2;
                return att;
            });
        }
			else{
			if (get.position(event.card,true)=='d'){
			player.chooseControlList('悲赋','将'+get.translation(event.card)+'置于牌堆顶','将'+get.translation(event.card)+'置于牌堆底',true).set('ai',function(){
                var num=[1,2].randomGet();
                return num;
            });
           }else event.finish();
        }
        'step 2'
        if(result.targets&&result.targets.length){
            var target=result.targets[0];
            target.recover();
        }
        else if (get.position(event.card,true)=='d'){
			event.index=result.index;
            card.fix();
           if(event.index==1){
            game.log(player,'将判定牌置于牌堆底');
            ui.cardPile.appendChild(card);
        }
        else if(event.index==0){
            game.log(player,'将判定牌置于牌堆顶');
            ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
		}
		}
		}
		},
		"GXS_jiabeng":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"die",
    },
    forceDie:true,
    content:function (){
        "step 0"
		player.chooseTarget(get.prompt('GXS_jiabeng'),[1,2],function(card,player,target){
            return true;
        },function(target){
            return -get.attitude(player,target)+0.5;
        });
        "step 1"
		if(result.bool){
            event.targets=result.targets;
            player.$skill('驾崩','epic','thunder',false);       
        }
        else{
            event.finish();
        }      
        "step 2"         
        if(event.targets.length){
        event.target=event.targets.shift();
        event.target.judge(function(card){
            if(get.suit(card)=='spade') return -10;
            return 10;
            });
        }
		"step 3" 
		if(result.bool==false){
        event.target.damage(3);
        }
        if (event.targets.length) event.goto(2);
    },
    ai:{
		order:8,
         threaten:function (player,target){
            if(target.hp==1) return 0.2;
            return 1.5;
        },
        effect:{
            target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
        },
    },
		},
		"GXS_shenli":{
		audio:"ext:RE：英雄杀:1",
			trigger:{
        source:"damageBegin1",
    },
    forced:true,
    filter:function (event,player){
    if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        return player.isDamaged()&&event.card&&event.card.name=='sha';
    },
    content:function (){
        trigger.num+=(player.maxHp-player.hp);
    },
		},
		"GXS_huguo":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseDrawBegin2",
    },
    frequent:true,
    content:function (){
		if(player.isMinHandcard(true)){
        trigger.num++;
		player.addTempSkill('GXS_huguobf1')
		}else{
		player.addTempSkill('GXS_huguobf2')	
		}
    },
    ai:{
        threaten:1.3,
    },
		},
		"GXS_huguobf1":{
			trigger:{
        player:"useCard",
    },
    forced:true,
    filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
    content:function (){
        trigger.directHit.addArray(game.players);
    },
		},
		"GXS_huguobf2":{
			 mod:{
        cardUsable:function (card,player,num){
            if(card.name=='sha') return num+1;
        },
    },
		},
		"GXS_qiantui":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseDiscardBegin",
    },
	frequent:true,
	content:function (){
	    'step 0'
	    player.chooseToDiscard(get.prompt('GXS_qiantui'),1,'h').ai=function(card){
		return 7-ai.get.value(card);
		}; 
		'step 1'
		if (result.bool){
		player.chooseTarget('令一名角色摸牌',true).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>2){
                if((target.maxHp-target.countCards('h'))>2) return 2*att;
                return att;
            }
            return att/3;
        });
		}
        'step 2'
        if(result.bool&&result.targets){
            result.targets[0].draw();
        }
	}
		},
		"GXS_pudu":{
		audio:"ext:RE：英雄杀:2",
	    enable:"phaseUse",
        usable:1,
		filter:function (event,player){
			return player.countCards('e');
		},
		popup:false,
		content:function () {
        'step 0'
        var cards = player.getCards('e');
        event.cards = cards;
        player.discard(cards);
        'step 1'
        player.chooseTarget(get.prompt2('GXS_pudu'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(event.cards.length==1&&target.countCards('he')==0){
                return 0;
            }
            if(get.attitude(_status.event.player,target)>0){
                return 10+get.attitude(_status.event.player,target);
            }
            if(event.cards.length==1){
                return -1;
            }
            return 1;
        });
        'step 2'
        if(result.bool){
            event.num=event.cards.length;
            player.logSkill('GXS_pudu',result.targets);
            event.target=result.targets[0];
                var str1='摸'+get.cnNumber(event.num,true);
                var str2='弃'+get.cnNumber(event.num,true);
                player.chooseControl(str1,str2,function(event,player){
                    return _status.event.choice;
                }).set('choice',get.attitude(player,event.target)>0?str1:str2);
                event.str=str1;
        }
        else{
            event.finish();
        }
        'step 3'
        if(result.control==event.str){
            event.target.draw(event.num);
        }
        else{
            event.target.chooseToDiscard(event.num,true,'he');
        }
    },
	ai:{
        order:8,       
    },
		},
		"GXS_jiasha":{
		audio:"ext:RE：英雄杀:2",
		trigger:{
        player:"damageEnd",
    },
    filter:function (event,player){
        return (event.source!=undefined)&&event.source!=player;
    },
    check:function (event,player){
        var att=get.attitude(player,event.source);
            if(att<0) return true;
            return false;
    },
    logTarget:"source",
    content:function (){
        player.draw();
        player.discardPlayerCard(trigger.source,'he',true);
    },
		},
		'GXS_mouci':{
			 enable:"phaseUse",
    usable:1,
    audio:"ext:RE：英雄杀:2",
    filter:function (event,player){
        return player.countCards('hej')>0&&game.players.length>2;
    },
    filterTarget:function (card,player,target){
        return player!=target;
    },
    ai:{
        order:function (skill,player){
            if(player.countCards('he',{subtype:'equip1'})>0){
                return 10;
            }
            return 1;
        },
        result:{
            target:function (player,target){
            	if(target.hasSkillTag('nogain')) return 0;
            	if (!ui.selected.targets.length) {
            	if (player.countCards('he',{subtype:'equip1'})>0) return 1;
            	if (get.attitude(player,target)>0) return target.getEquip(1);
            	if (player.countCards('h','du')>1&&get.attitude(player,target)<0) return 3-target.hp;
            	return 0;
            	}
                return -target.countCards('h');
            },
        },
    },
    content:function (){
        "step 0"
        event.target1=targets[0];
        var cards=player.getCards('hej'); 
        targets[0].gain(cards,player,'giveAuto');
        "step 1"
        if(!targets[0].countCards('h')){
            event.finish();
            return;
        }
        targets[0].chooseToDiscard({subtype:'equip1'},'he','弃置一张武器牌').set('ai',function(card){
                    if(get.attitude(_status.event.player,player)>0) return 7-get.value(card);
                    return 0;
                }).set('target',target);
        "step 2"
		if(result.bool){
        player.chooseTarget(true,'选择要伤害的目标',function(card,player,target){
            return target!=player&&target!=event.target1&&target.countCards('h');
        }).set('ai',function(target){
            var player=_status.event.player;
            var eff=get.damageEffect(target,_status.event.target1,player);
            var att=get.attitude(player,target);
            if(att>0){
                return (10-eff)/target.countCards("h");
            }
            return eff*target.countCards("h");
        }).set('target1',event.target1).set('forceDie',true);
		}else{
			event.finish();
            return;
		}
        "step 3"
        if(result.targets.length){
            event.target2=result.targets[0];
            event.target1.line(event.target2);
			var num=event.target2.countCards('h',{suit:'spade'});
			if (num>0){
			event.target2.damage(num,{name:'sha'},event.target1);
			} else event.target2.say('汝欲何为耶？');
        }
        else{
            event.finish();
        }
    },
		},
		'GXS_xuzhi':{
			trigger:{
        target:"useCardToTargeted",
    },
    round:1,
    audio:"ext:RE：英雄杀:2",
    filter:function (event,player){
        if(event.player.countCards('h')<player.countCards('h')) return false;
        if(event.card.name!='sha') return false;
        return !game.hasPlayer2(function(current){
            return current.getHistory('useCard',function(evt){
                return evt!=event.getParent()&&evt.card&&evt.card.name=='sha'&&evt.targets.contains(player);
            }).length>0;
        });
    },
    content:function (){
        trigger.getParent().excluded.add(player);
    },
		},
		'GXS_yongwu':{
			audio:"ext:RE：英雄杀:2",
			mod:{
			aiOrder:function(player,card,num){
                    if(typeof card.number!='number') return;
                    var history=player.getHistory('useCard',function(evt){
                        return evt.isPhaseUsing();
                    });
                    if(history.length==0) return num+10*(14-card.number);
                    var num=get.number(history[0].card);
                    if(!num) return;
                    for(var i=1;i<history.length;i++){
                        var num2=get.number(history[i].card);
                        if(!num2||num2<=num) return;
                        num=num2;
                    }
                    if(card.number>num) return num+10*(14-card.number);
                },
            },
            trigger:{
        player:"useCard",
    },
    frequent:true,
            filter:function (event,player){
                var history=player.getHistory('useCard',function(evt){
                return evt.isPhaseUsing()&&evt.card!=event.card;
                });
                if(history.length<1) return false;
                var num=get.number(event.card);
                if(!num) return false;
                for(var i=0;i<history.length;i++){
                    var num2=get.number(history[i].card);
                    if(num2&&num2>=num) return false;
                }
                return true;
            },
            content:function (){
                player.draw();
            },
            },
		'GXS_xiwen':{
			audio:"ext:RE：英雄杀:2",
			unique:true,
		    global:'GXS_xiwen2',
			enable:"phaseUse",
            usable:1,
    filterTarget:function (card,player,target){
        return target!=player;
    },
    content:function (){
		target.addSkill('GXS_xiwen_mark');
	},
	ai:{
        order:8,
        result:{
            target:-1,
        },
    },
	group:'GXS_xiwen_rem',
	subSkill:{
		rem:{
			trigger:{
                global:"roundStart",
            },
            forced:true,
			direct:true,
            filter:function (event,player){
				return game.hasPlayer(function(current){
                    return current.hasSkill('GXS_xiwen_mark');
                });
            },
            content:function (){
			game.filterPlayer(function(current){
                if (current.hasSkill('GXS_xiwen_mark')) current.removeSkill('GXS_xiwen_mark')
        });
            },
		},
		mark:{
			mark:true,
				marktext:"檄",
				intro:{
					content:function(){
                    return ["一抔之土未干，六尺之孤何托？","请看今日之域中，竟是谁家之天下！","人神之所同嫉，天地之所不容","犹复包藏祸心，窥窃神器","霍子孟之不作，朱虚侯之已亡"].randomGet();
                      },
					}
				},
		    }
		},
		GXS_xiwen2:{
				mod:{
					globalFrom:function(from,to){
						if(to.hasSkill('GXS_xiwen_mark')) return -Infinity;
					}
				}
			},
			'GXS_qiuhuang':{
			audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
                usable:1,
                delay:false,
                content:function(){
"step 0"
player.judge(function(card){
if(get.number(card)<7){
if(player.canUse("tao",player)){
return 2;
}else return 0;
};
return 1;
});
"step 1"
if(get.number(result.card)<7){
if(player.canUse("tao",player)) player.useCard({name:'tao'},player);
event.finish();
}else player.chooseTarget('你可以选择一名女性角色令其摸一张牌并交给你1~2张牌',function(card,player,target){
return target.sex=='female';
}).set('ai',function(target){
if (get.attitude(_status.event.player,target)>0) return target.countCards('h');
return true;
});
"step 2"
if(result.bool){
var target=result.targets[0];
event.target=target;
player.line(target);
target.draw();
target.chooseCard("交给"+get.translation(player)+"1~2张牌。","he",[1,2],true);
}else event.finish();
"step 3"
event.target.give(result.cards,player,true);
},
                ai:{
                    order:9,
                    result:{
                        player:2,
                        target:0,
                    },
                },
			},
			'GXS_jianlie':{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"phaseEnd",
    },
	filter:function (event,player){
        return game.hasPlayer(function(current){
			return current.countCards("h")<2;
		});
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('GXS_jianlie'),function(card,player,target){
            return target.countCards("h")<2;
        }).set('ai',function(target){
            return get.attitude(player,target)
        });
        "step 1"
        if(result.bool){
			result.targets[0].draw();
			player.logSkill('GXS_jianlie')
		}
    },
			},
			'GXS_jiuxian':{
			trigger:{
        target:"shaBefore",
    },
    audio:"ext:RE：英雄杀:2",
    filter:function(event,player){
        return (event.card.name=='sha'&&get.number(event.card)<=9)
    },
    frequent:true,
    content:function(){
        trigger.cancel();
    },
    ai:{
        effect:{
            target:function(card,player,target){
                if(card.name=='sha'&&get.number(card)<=9) return 'zerotarget';
            },
        },
    },
    group:"GXS_jiuxian_1",
    subSkill:{
    '1':{
    trigger:{
        player:"shaBegin",
    },
    audio:"GXS_jiuxian",
    filter:function(event,player){
        return get.number(event.card)>9;
    },
    content:function () {
        player.draw();
      },
    }
    },
  },
  'GXS_yaoyue':{
  audio:"ext:RE：英雄杀:2",
  trigger:{
        player:"useCardToPlayer",
    },
    filter:function(event,player){
        if(_status.currentPhase!=player) return false;
        if(event.skill=='GXS_yaoyue') return false;
        if(event.targets.length>1) return false;
        var card=event.card;
        if(card.name=='sha') return true;
        if(get.type(card)=='trick') return true;
        return false;
    },
    direct:true,
    content:function(){
        "step 0"
        player.chooseTarget(get.prompt2('GXS_yaoyue'),function(card,player,target){
            if(player==target) return false;
            var trigger=_status.event;
            if (trigger.card.name=="wuzhong") return player!=target;
            return player.canUse(trigger.card,target)&&trigger.targets.contains(target)==false;
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player)+0.01;
        }).set('targets',trigger.targets).set('card',trigger.card);
        "step 1"
        if(result.bool){
            game.delay(0,200);
            event.target=result.targets[0];
            game.log(event.target,'成为了',trigger.card,'的额外目标');
            player.logSkill('GXS_yaoyue',event.target);
            trigger.getParent().targets.push(event.target);
        }        
    },
  },
  'GXS_shisheng':{
  audio:"ext:RE：英雄杀:2",
  trigger:{
        player:"phaseDrawBegin1",
    },
    filter:function(event,player){
        return !event.numFixed;
    },
    content:function(){
        "step 0"
        trigger.changeToZero();
        event.cards=get.cards(4);
        game.cardsGotoOrdering(event.cards);
        event.videoId=lib.status.videoId++;
        game.broadcastAll(function(player,id,cards){
            var str;
            if(player==game.me&&!_status.auto){
                str='诗圣：获取花色各不相同的牌';
            }
            else{
                str='诗圣';
            }
            var dialog=ui.create.dialog(str,cards);
            dialog.videoId=id;
        },player,event.videoId,event.cards);
        event.time=get.utc();
        game.addVideo('showCards',player,['诗圣',get.cardsInfo(event.cards)]);
        game.addVideo('delay',null,2);
        "step 1"
        var next=player.chooseButton([0,4],true);
        next.set('dialog',event.videoId);
        next.set('filterButton',function(button){
            for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
            }
            return true;
        });
        next.set('ai',function(button){
            return get.value(button.link,_status.event.player);
        });
        "step 2"
        if(result.bool&&result.links){
            event.cards2=result.links;
        }
        else{
            event.finish();
        }
        var time=1000-(get.utc()-event.time);
        if(time>0){
            game.delay(0,time);
        }
        "step 3"
        game.broadcastAll('closeDialog',event.videoId);
        var cards2=event.cards2;
        player.gain(cards2,'log','gain2');
        if (cards2.length<2)player.say('南村群童欺我老无力')
    },
    ai:{
        threaten:1.2,
    },
   },
   'GXS_beimin':{
  audio:"ext:RE：英雄杀:2",
  trigger:{
        player:"phaseEnd",
    },
    content:function (){
    "step 0"
					player.judge(function(card){
						if(get.number(card)<7) return 2;
						return 0;
					}).judge2=function(result){
						return result.bool?true:false;
					};
					"step 1"
					if(result.bool){
						player.chooseTarget(get.prompt('GXS_beimin'),'令一名角色从牌堆中获得两张点数不小于7的牌').set('ai',function(target){
            if(target.hasSkillTag('nogain')&&target!=_status.currentPhase) return target.isDamaged()?0:1;
            var att=get.attitude(_status.event.player,target);
            if(target.hasJudge('lebu')) att=att/1.2;
            return att;
        });
        }		
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            var i=0;
        var list=[];
        while(i++<2){
            var card=get.cardPile2(function(card){
                if(get.number(card)<7) return false;
                return list.length==0||card!=list[0];
            });
            if(card) list.push(card);
        }
        if(list.length){
            event.list=list;
            if(event.list.length) result.targets[0].gain(event.list,'log','gain2');
            player.say('会当凛绝顶')
           }
        }
    },
    ai:{
        threaten:0.9,
    },
  },
  'GXS_xiangshu':{
  audio:"ext:RE：英雄杀:2",
  enable:"phaseUse",
    filterCard:true,
    position:"h",
    selectCard:1,
    check:function(card){
        if(ui.selected.cards.length) return 0;
        return 6-get.value(card)
    },
    filter:function (event,player){
    return player.getCards('h',function(card){
		return card.hasGaintag('GXS_xiangshu');
	  }).length<=0;
    },
    content:function(){
        'step 0'
        event.card2=get.bottomCards();
        event.card1=get.cards();
        var dialog=['茫茫天数此中求，世道兴衰不自由','<div class="text center">牌堆顶</div>',event.card1,'<div class="text center">牌堆底</div>',event.card2];
		player.chooseButton(dialog,true).set('ai',function(button){
		return get.value(button.link);
		});
		'step 1'
		if (result.bool){
		event.cards=result.links[0];		
		player.gain(event.cards,'draw');
		if (event.cards===event.card2[0]){
		ui.cardPile.insertBefore(event.card1[0],ui.cardPile.firstChild);
		}else ui.cardPile.appendChild(event.card2[0]);
		game.updateRoundNumber();
		}				
		'step 2'
		player.addGaintag(event.cards,'GXS_xiangshu');
		player.addTempSkill("GXS_xiangshu_2");
    },
    ai:{
        order:8,
        result:{
            player:1,
        },
    },
    subSkill:{
    '2':{
    onremove:function(player){
							player.removeGaintag('GXS_xiangshu');
						},
	  }
    }
  },
  "GXS_quji":{
  audio:"ext:RE：英雄杀:2",
  trigger:{
        player:"phaseEnd",
    },
    frequent:true,
    filter:function(event,player){
        return player.countUsed(null,true)>=player.maxHp;
    },
    content:function(){
        player.draw(2);
    },
  },
		
		"GXS_yuci":{
		audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
    content:function (){
        'step 0'
        player.discardPlayerCard(target,'h',true);
        'step 1'
        if(result.bool){
            if(get.type(result.cards[0],result.cards[0].original=='h'?player:false)=='basic'){
               if (player.countCards('he')) player.chooseToDiscard('he',true); 
            }
        }
    },
    ai:{
        order:8,
        result:{
            target:-1,
        },
    },
		},
		"GXS_shangli":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"loseAfter",
    },
    frequent:true,
    filter:function (event,player){
        if(player==_status.currentPhase) return false;
        if(event.cards2){
            for(var i=0;i<event.cards2.length;i++){
                if(get.color(event.cards2[i],player)=='red') return true;
            }
        }
        return false;
    },
    content:function (){
        "step 0"
        event.count=1;
        if(trigger.name=='lose'){
            event.count=0;
            for(var i=0;i<trigger.cards2.length;i++){
                if(get.color(trigger.cards2[i],player)=='red') event.count++;
            }
        }
        "step 1"
        player.draw();
        event.count--;
        "step 2"
        if(event.count){
            player.chooseBool(get.prompt2('GXS_shangli')).set('frequentSkill','GXS_shangli');
        }
        else event.finish();
        "step 3"
        if(result.bool){
            player.logSkill('GXS_shangli');
            event.goto(1);
        }
    },
    ai:{
        threaten:0.7,
    },
		},
		"GXS_vxxumou":{
	audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"phaseJieshuBegin",
    },
			filter:function (event,player){
				if(!event.player.getStat('damage')&&event.player.isIn())return true;
				return false;
				},
					check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
					content:function (){
					var card=get.cardPile('sha');
					if(card){
						trigger.player.gain(card,'gain2','log');
					}
					},
		},
		"GXS_vxzhensha":{
		audio:"ext:RE：英雄杀:2",
			global:"GXS_vxzhensha2",
    trigger:{
        global:"dying",
    },
    priority:15,
    forced:true,
    filter:function (event,player,name){
        return _status.currentPhase==player&&event.player!=player;
    },
    content:function (){},
		},
		"GXS_vxzhensha2":{
				mod:{
					cardSavable:function(card,player){
						if(!_status.currentPhase) return;
						if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('GXS_vxzhensha')&&_status.currentPhase!=player){
							if(card.name=='tao') return false;
						}
					},
					cardEnabled:function(card,player){
						if(!_status.currentPhase) return;
						if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('GXS_vxzhensha')&&_status.currentPhase!=player){
							if(card.name=='tao') return false;
						}
					}
				}
			},
					'GXS_xumou':{
		        audio:2,
				inherit:'jushou'
			},
			'GXS_zhensha':{
			 audio:2,
				trigger:{global:'dying'},
				priority:9,
				filter:function(event,player){
					return event.player.hp<=0&&(player.countCards('h','jiu')>0||player.countCards('h',{color:'black'})>=2)&&player!=event.player;
				},
				direct:true,
				content:function(){
					'step 0'
					var goon=(get.attitude(player,trigger.player)<0);
					var next=player.chooseToDiscard('鸠杀：是否弃置一张酒或两张黑色手牌令'+get.translation(trigger.player)+'立即死亡？');
					next.ai=function(card){
						if(ui.selected.cards.length){
							if(ui.selected.cards[0].name=='jiu') return 0;
						}
						if(goon){
							if(card.name=='jiu') return 2;
							return 1;
						}
						return 0;
					};
					next.filterCard=function(card){
						if(ui.selected.cards.length){
							return get.color(card)=='black';
						}
						return get.color(card)=='black'||card.name=='jiu';
					};
					next.complexCard=true,
					next.logSkill=['GXS_zhensha',trigger.player];
					next.selectCard=function(){
						if(ui.selected.cards.length){
							if(get.color(ui.selected.cards[0])!='black') return [1,1];
						}
						return [1,2];
					}
					'step 1'
					if(result.bool){
						trigger.player.die(trigger.reason);
					}
					else{
						event.finish();
					}
					'step 2'
					if(!trigger.player.isAlive()){
						trigger.cancel(true);
					}
				},
				ai:{
					threaten:1.5
				}
			},
		"GXS_vxshixin":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseJieshuBegin",
    },
	content:function (){
	    'step 0'
        player.judge();
        'step 1'
        if(get.color(result.card)=='red'){
			if (game.countPlayer(function(current){
			return current.sex=="male"
			})>0) player.chooseTarget('令一名男性角色获红桃牌',function(card,player,target){
            return target.sex=='male';
        }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(player==target) att/=2;
                return att;
            });
        event.goto(3)
		}else{
			if (game.countPlayer(function(current){
			return current.countCards('he')
			})>0) player.chooseTarget('弃置一名角色的一张牌',true,function(card,player,target){
            return target.countCards('he');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
		}
        'step 2'
        if(result.bool){
            var target=result.targets[0];
            player.discardPlayerCard(target,true,'he');
            player.line(target,'green');
            event.goto(4);
        }
		'step 3'
		if(result.bool){
            var target=result.targets[0];
			var card=get.cardPile2(function(cardx){
   return get.suit(cardx,'trick')=='heart';
            });
            if(card) target.gain(card,'log','gain2');
        }
        'step 4'
        event.finish();
		   }
		},
		"GXS_vxmeiguo":{
			mod:{
        targetEnabled:function (card,player,target,now){
            if(card.name=='sha'&&get.color(card)=='black') return false;
        },
    },
		},
	        'GXS_shixin':{
        audio:true,
                trigger:{
                    player:'damageAfter',
                },                 
                		filter:function(event,player){
					return (event.source&&player.countCards('he'));
				},         
				check:function (event,player){
                return get.attitude(player,event.source)<0;
                },      
                content:function (){
        'step 0'
        var next=player.chooseToDiscard('he','弃置一张牌令'+get.translation(trigger.source)+'受到同等伤害',true);        
        next.ai=function(card){
            if(player.hp==1||trigger.num>1){
                return 9-ai.get.value(card);
            }
            if(player.hp==2){
                return 8-ai.get.value(card);
            }
            return 7-ai.get.value(card);
        };
        'step 1'
        if(result.bool){
            trigger.source.damage(trigger.num);
        }
    },                
            },
            'GXS_meiguo':{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(player.hp<5){
							if(card.name=='sha') return false;
		  				}
	 				}
					},
						ai:{
					skillTagFilter:function(player,tag){
						if(tag=='h'){
							if(player.hp>=5) return false;
						}
					}
				}
				},
		"GXS_zhenglve":{
		audio:"ext:RE：英雄杀:2",
			 trigger:{
        player:"phaseDrawBegin2",
    },
    frequent:true,
    filter:function (event,player){
        return !event.numFixed;
    },
    content:function (){
		"step 0"
        trigger.num-=2;
        event.cards=get.cards(4);
        game.cardsGotoOrdering(event.cards);
        event.videoId=lib.status.videoId++;
        game.broadcastAll(function(player,id,cards){
            var str;
            if(player==game.me&&!_status.auto){
                str='政略：获取两牌';
            }
            else{
                str='政略';
            }
            var dialog=ui.create.dialog(str,cards);
            dialog.videoId=id;
        },player,event.videoId,event.cards);
        event.time=get.utc();
        game.addVideo('showCards',player,['政略',get.cardsInfo(event.cards)]);
        game.addVideo('delay',null,2);
        "step 1"
        var next=player.chooseButton(2,true);
        next.set('dialog',event.videoId);
        next.set('filterButton',function(button){
            return true;
        });
        next.set('ai',function(button){
            return get.value(button.link,_status.event.player);
        });
        "step 2"
        if(result.bool&&result.links){
            event.cards2=result.links;
        }
        else{
            event.finish();
        }
        var time=1000-(get.utc()-event.time);
        if(time>0){
            game.delay(0,time);
        }
        "step 3"
        game.broadcastAll('closeDialog',event.videoId);
        var cards2=event.cards2;
        player.gain(cards2,'log','gain2');
    },
    ai:{
        threaten:1,
    },
		},
		"GXS_beide":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        target:"useCardToTarget",
    },
    direct:true,
    filter:function (event,player){
        return event.card.name=='sha';
    },
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt2('GXS_beide'),function(card,player,target){
            return target!=player&&!_status.event.targets.contains(target)&&_status.event.playerx.canUse('sha',target,false);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,trigger.player,player)+0.1;
        }).set('targets',trigger.targets).set('playerx',trigger.player);
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('GXS_beide',target);
            event.target=target;
            trigger.getParent().targets.push(event.target);
            trigger.getParent().triggeredTargets2.push(event.target);
            game.log(event.target,'成为了额外目标');
        }
        else{
            event.finish();
        }
    },
    ai:{
        expose:0.2,
        effect:{
            target:function (card,player,target){
                if(card.name!='sha') return;
                var players=game.filterPlayer();
             if(get.attitude(player,target)<=0){
                 for(var i=0;i<players.length;i++){
                     var target2=players[i];
                     if(player!=target2&&target!=target2&&player.canUse(card,target2,false)&&
                         get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,target)>0&&
                         get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,player)<0){
                         if(target.hp==target.maxHp) return 0.3;
                         return 0.6;
                     }
                 }
                }
                else{
                    for(var i=0;i<players.length;i++){
                     var target2=players[i];
                     if(player!=target2&&target!=target2&&player.canUse(card,target2,false)&&
                         get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,player)>0){
                         if(player.canUse(card,target2)) return;
                         if(target.hp==target.maxHp) return [0,1];
                         return [0,0];
                     }
                 }
                }
            },
        },
    },
		},
'GXS_huoshen':{
   group:"GXS_huoshen_nanman",
    subSkill:{
        nanman:{
            trigger:{
        target:"useCardToBefore",
    },
    forced:true,
    audio:"GXS_huoshen",
    filter:function(event,player){
        return event.card.name=='nanman';
    },
    content:function(){
        trigger.cancel();
    },
            sub:true,
        },
    },

audio:2,
 trigger:{
        player:"phaseBegin",
    },
forced:true,

content:function (){ 
var card=get.discardPile(function(card){
return card.name=='nanman';
});
if(card){ player.gain(card,'gain2');
}else player.chat("TMD怎么连南蛮都没有");
},
},
		"GXS_manhou":{
		audio:"ext:RE：英雄杀:1",
			enable:"phaseUse",
				usable:1,
    viewAs:{
        name:"juedou",
    },
    filterCard:{
        name:"sha",
    },
    position:"he",
    viewAsFilter:function (player){
        if(!player.countCards('he',{name:'sha'})) return false;
    },
    check:function (card){
        return 6-get.value(card);
    },
    ai:{
        basic:{
            order:10,
            useful:1,
            value:5.5,
        },
        wuxie:function (target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
        result:{
            target:-1.5,
            player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
        },
        tag:{
            respond:2,
            respondSha:2,
            damage:1,
        },
    },
		},
		"GXS_luoyan":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"damageEnd",
    },
	check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
    filter:function (event,player){
        return event.source&&event.source.getEquip(1);
    },
    content:function (){
           trigger.source.discard(trigger.source.getEquip(1));
    },
    ai:{
        "maixie_defend":true,
    },
		},
		"GXS_heqin":{
			audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target.countCards('h')&&target.sex=='male';
    },
    content:function (){
        'step 0'
        player.swapHandcards(target);
        'step 1'
	    if(target.countCards('h')<player.countCards('h')){target.draw(2);}else if(target.countCards('h')>player.countCards('h')){player.draw(2)}
    },
    ai:{
        order:10,
        result:{
            target:function (player,target){
                if(!player.countCards('h',function(card){
                    return get.value(card)>=8;
                })&&player.countCards('h')-target.countCards('h')<=1){
                    if(target.hp==1||player.countCards('h',function(card){
                        return get.value(card)<0;
                    })){
                        return !get.damageEffect(target,player,target);
                    }
                }
                return 0;
            },
        },
    },
		},
		"GXS_juma":{
		audio:"ext:RE：英雄杀:2",
 trigger:{
           player:"phaseuse",
                },                
                forced:true,
                	content:function(){
					trigger.audioed=true;
				},
				filter:function(event,player){
					return !event.audioed;
				},
			mod:{
        globalTo:function (from,to,distance){
            if(from.getEquip(4)) return distance+1;
        },
    },
		},
		"GXS_qinzheng":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        source:"damageEnd",
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('GXS_qinzheng'),'令1名角色摸牌').set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>2){
                if((target.maxHp-target.countCards('h'))>2) return 2*att;
                return att;
            }
            return att/3;
        });
        "step 1"
        if(result.bool){      
            player.logSkill('GXS_qinzheng');
            result.targets[0].draw();
        }
        else event.finish();
    },
		},
		"GXS_xiuhua":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"judgeEnd",
    },
    frequent:function (event){
        if(event.result.card.name=='du') return false;
        return true;
    },
    check:function (event){
        if(event.result.card.name=='du') return false;
        return true;
    },
    filter:function (event,player){
        return event.player.sex=='male'&&get.color(event.result.card)=='black'&&get.position(event.result.card,true)=='o';
    },
    content:function (){
        player.gain(trigger.result.card,'gain2');
    },
		},
		"GXS_fengyan":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:["loseAfter","changeHp"],
    },
    frequent:true,
    filter:function (event,player){
        return player.countCards('h')<player.getDamagedHp();
    },
    content:function (){
        player.draw(player.getDamagedHp()-player.countCards('h'));
    },
    ai:{
        noh:true,
        skillTagFilter:function (player,tag){
            if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
                return false;
            }
        },
    },
		},
		"GXS_sheshen":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"damageEnd",
    },
    frequent:true,
    filter:function (event){
        return (event.num>0)
    },
    content:function (){
        "step 0"
        event.cards=get.cards(2*trigger.num);
        "step 1"
        if(event.cards.length>1){
            player.chooseCardButton('将“舍身”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                if(ui.selected.buttons.length==0) return 1;
                return 0;
            });
        }
        else if(event.cards.length==1){
            event._result={links:event.cards.slice(0),bool:true};
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            for(var i=0;i<result.links.length;i++){
                event.cards.remove(result.links[i]);
            }
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.enemy){
                    return -att;
                }
                else if(att>0){
                    return att/(1+target.countCards('h'));
                }
                else{
                    return att/100;
                }
            }).set('enemy',get.value(event.togive[0])<0);
        }
        "step 3"
        if(result.targets.length){
            if(player==game.me&&((player.name.indexOf('guojia')!=-1||
            player.name.indexOf('郭嘉')!=-1)||
            (player.name2!=undefined&&(player.name2.indexOf('guojia')!=-1||
            player.name2.indexOf('郭嘉')!=-1)))&&
            lib.config.achievement.wei.buyiyuli.finished!=true&&
            result.targets[0]!=player){
                if(_status.achievement1==undefined) _status.achievement1={};
                if(_status.achievement1.buyiyuli==undefined) _status.achievement1.buyiyuli=0;
                _status.achievement1.buyiyuli++;
            };
            result.targets[0].gain(event.togive,'draw');
            player.line(result.targets[0],'green');
            game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
            event.goto(1);
        }
    },
    ai:{
        maixie:true,
        "maixie_hp":true,
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(target.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
        },
    },
		},
		"GXS_juebie":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"dieBefore",
    },
	skillAnimation:true,
	animationStr:"虞兮虞兮奈若何",
    animationColor:"wood",
	direct:true,
    content:function (){
        'step 0'
       player.chooseTarget(get.prompt('GXS_juebie'),'令1名男性角色获牌',function(card,player,target){
            return target.sex=='male';
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if (player.countCards('he')<2&&player.countCards('j')>0) return -att;
            return att;
        });
        'step 1'
        if(result.bool){   
        player.logSkill('GXS_juebie');   
			var cards=player.getCards('he');
        if(cards.length){
			var target=result.targets[0];
            target.gain(cards,player);
            player.$giveAuto(cards,target);
        }
		if (player.getCards('j')) {
			var jc=player.getCards('j');
			for (var i = 0; i<jc.length; i++) {
				if (!target.hasJudge(jc[i])) target.addJudge(jc[i]);
			}
		   };
        }
    },
		},
		"GXS_remili":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"loseAfter",
    },
    frequent:true,
    filter:function (event,player){
        return event.es&&event.es.length>0;
    },
    content:function (){
        "step 0"
        event.count=trigger.es.length;
        "step 1"
        event.count--;
        player.draw(2);
        "step 2"
        if(event.count>0){
            player.chooseBool(get.prompt2('GXS_remili')).set('frequentSkill','GXS_remili').ai=lib.filter.all;
        }
        "step 3"
        if(result.bool){
            player.logSkill('GXS_remili');
            event.goto(1);
        }
    },
    ai:{
        noe:true,
        reverseEquip:true,
        effect:{
            target:function (card,player,target,current){
                if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
            },
        },
    },
		},
		"GXS_reyizhuang":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseAfter",
    },
    filter:function (event,player){
        return player.countCards('e')>0;
    },
    priority:-50,
    content:function (){
        player.chooseToDiscard('e',true);
        var card=get.cardPile(function(card){
			return get.type(card)=='equip';
		});
		if(card) player.gain(card,'gain2');
    },
    ai:{
        threaten:1.2,
    },
		},
				'GXS_yizhuang':{
			    audio:"ext:RE：英雄杀:2",
				trigger:{player:'phaseBegin'},
				group:'GXS_yizhuang2',
				direct:true,
				content:function(){
					'step 0'
					if(player.countCards('he')){
						player.chooseCardTarget({
							prompt:get.prompt('GXS_yizhuang'),
							filterCard:lib.filter.cardDiscardable,
							position:'he',
							filterTarget:function(card,player,target){
								if(target==player) return false;
								if(target.sex!='male') return false;
								var name=target.name.indexOf('unknown')==0?target.name2:target.name;
								if(name==player.storage.GXS_yizhuang) return false;

								var info=lib.character[name];
								if(info){
									var skills=info[3];
									for(var j=0;j<skills.length;j++){
										if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
											!lib.skill[skills[j]].unique&&!player.hasSkill(skills[j])){
											return true;
										}
									}
								}
								return false;
							},
							ai1:function(card){
								if(player.additionalSkills.GXS_yizhuang&&player.additionalSkills.GXS_yizhuang.length>0) return 0;
								return 7-get.value(card);
							},
							ai2:function(target){
								if(target.isMin()) return 0;
								return 6-target.maxHp;
							}
						});
					}
					else{
						event.finish();
					}
					'step 1'
					if(result.bool){
						player.unmark(player.storage.GXS_yizhuang+'_charactermark');
						player.discard(result.cards);
						player.logSkill('GXS_yizhuang',result.targets);
						var name=result.targets[0].name;
						if(name.indexOf('unknown')==0){
							name=result.targets[0].name2;
						}
						var list=[];
						var skills=lib.character[name][3];
						for(var j=0;j<skills.length;j++){
							if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
								!lib.skill[skills[j]].unique&&!player.hasSkill(skills[j])){
								list.push(skills[j]);
							}
						}
						player.addAdditionalSkill('GXS_yizhuang',list);
						player.markCharacter(name,null,true,true);
						game.addVideo('markCharacter',player,{
							name:'幻形',
							content:'',
							id:'GXS_yizhuang',
							target:name
						});
						player.storage.GXS_yizhuang=name;
					}
				},
				ai:{
					threaten:1.5
				}
			},
			'GXS_yizhuang2':{
			audio:2,
				trigger:{player:'damageAfter'},
				priority:-15,
				forced:true,
				filter:function(event,player){
					return player.additionalSkills.GXS_yizhuang&&player.additionalSkills.GXS_yizhuang.length>0;
				},
				content:function(){
					player.unmark(player.storage.GXS_yizhuang+'_charactermark');
					player.removeAdditionalSkill('GXS_yizhuang');
					delete player.storage.GXS_yizhuang;
					player.checkMarks();
				}
			},
			'GXS_mili':{
				audio:"ext:RE：英雄杀:2",
				trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='e') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].original=='e') num+=2;
					}
					player.draw(num);
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						}
					}
				}
			},
		"GXS_jiaozhen":{
		audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.inRange(player)&&target.countCards('he')>0;
    },
    content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},'叫阵：对'+get.translation(player)+'使用一张杀，或令其获得你的一张牌').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
            if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
            return lib.filter.filterTarget.apply(this,arguments);
        }).set('sourcex',player);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
             player.gainPlayerCard(target,'he');
        }
        else{
            event.finish();
        }
    },
    ai:{
        order:4,
        expose:0.2,
        result:{
            target:-1,
            player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
            },
        },
        threaten:1.1,
    },
		},
		"GXS_yinglie":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"damageEnd",
    },
	frequent:true,
    filter:function (event,player){
		return event.num>0;
		},
    content:function (){
		'step 0'
        player.judge(function(card){
            return get.color(card)=='red'?1:-1;
        });
        'step 1'
        if(result.bool){
			player.recover()
		}
	}
		},
		"GXS_qinxin":{
		audio:"ext:RE：英雄杀:2",
		enable:"phaseUse",
    usable:1,
    filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
    content:function (){
        var hs=target.getCards('h').randomGet();
        target.showCards(hs);
        if(get.color(hs)=='black'){
			target.damage()
		}else{
			player.gain(hs); 
            target.$give(hs,player); 
		}
	},
	 ai:{
        order:4,
        expose:0.2,
        result:{
            target:-1,
            player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                return -0.5;
            },
        },
        threaten:1.1,
    },
		},
		"GXS_xiangshou":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"recoverBegin",
    },
	frequent:true,
	popup:false,
    filter:function (event,player){
		return event.player.sex=='male'&&event.card&&event.card.name=='tao'&&player.countCards('h');
		},
    content:function (){
		'step 0' 
        player.chooseCard('是否交给'+get.translation(trigger.player)+'一张手牌？',1).ai=function(card){ 
            return get.attitude(_status.event.player,trigger.player)>0?1:-1;
        } 
        'step 1' 
        if(result.bool){ 
		    player.logSkill('GXS_xiangshou');
            trigger.player.gain(result.cards); 
            player.$give(result.cards,trigger.player); 
			if(get.color(result.cards)=='red') player.recover()
            game.delay(); 
        } 
	}
		},
		'GXS_nvxiang':{
			audio:"ext:RE：英雄杀:2",
			trigger:{
                global:"useCardToTargeted",
            },
            check:function (event,player){
                return get.attitude(player,event.player)<0;
            },
            filter:function (event,player){
            if(event.card.name!='sha'||!event.isFirstTarget) return false;
            return player.canCompare(event.player)&&event.player!=player;
            },
            prompt:function (event,player){
            return get.translation(event.targets)+'被杀了，是否对'+get.translation(event.player)+'发动【女相】';
            },
            content:function (){
                'step 0'
                player.chooseToCompare(trigger.player);
                'step 1'
                if(result.bool){
                for (var i of trigger.targets) trigger.getParent().excluded.add(i);
                }
            },
		},
		'GXS_qicai':{
			audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
			usable:1,
			content:function (){
        "step 0"
        if(event.cards==undefined) event.cards=[];
        player.judge(function(card){
            if(get.color(card)=='black') return -1.5;
            return 1.5;
        },ui.special);
        "step 1"
        if(result.judge>0){
            event.cards.push(result.card);
            event.goto(0);
        }
        else{
			event.cards.push(result.card);
            player.gain(event.cards,'gain2');
			player.chooseToDiscard('h',true);
            event.finish();
        }
    },
	ai:{
        order:8,
        expose:0.2,
        result:{
            player:1,
        },
        threaten:1.1,
    },
		},
		'GXS_jiandie':{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseEnd",
    },
	filter:function (event,player){
	if (player.countCards("h")==0) return false;
     return game.hasPlayer(function(current){
        return current!=player&&current.sex=='male'&&current.countCards("h")>0;
		});
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('GXS_jiandie'),function(card,player,target){
        return target.sex=='male'&&target!=player&&target.countCards("h")>0;
        }).set('ai',function(target){
            return get.attitude(player,target)
        });
        "step 1"
        if(result.bool){
            player.logSkill('GXS_jiandie',result.targets);
            player.swapHandcards(result.targets[0]);
			var nh=result.targets[0].countCards('h')-player.countCards('h');
			var nh2=Math.abs(nh);
			if(nh>0){
				result.targets[0].draw(nh2);
				}else if(nh<0){
					player.draw(nh2)
				}
        }
    },
		},
		'GXS_xianzhu':{
			enable:"phaseUse",
    audio:"ext:RE：英雄杀:2",
    usable:1,
    filter:function (event,player){
        return player.countCards('h')>0;
    },
    filterCard:true,
	check:function (card){
        var player=_status.currentPhase;
        if(player.countCards('h')>3){
            return 11-get.equipValue(card);
        }
        return 6-get.value(card);
    },
    discard:true,
    lose:true,
    delay:false,
	direct:true,
    content:function (){
        'step 0'
        event.card=get.cardPile(function(card){
            return get.type(card)=='equip';
        });
        if(!event.card){
            player.popup('贤助失败');
            game.log('牌堆中无装备');
            event.finish();
            return;
        }
        "step 1"
        player.chooseTarget('选择一名角色装备'+get.translation(event.card),true).set('ai',function(target){
            var att=get.attitude(player,target);
            if(target==player) att+=10;
            return att;
        });
        "step 2"
        if(result.bool){
            player.logSkill('GXS_xianzhu',result.targets[0]);
            result.targets[0].equip(event.card,true).set('delay',true);
            result.targets[0].$draw(event.card);
            result.targets[0].draw();
        }
	},
	ai:{
        basic:{
            order:10,
        },
        result:{
            player:function (player){
                if (player.countCards('h')>2) return 1;
                return 0;
            },
        },
        threaten:1.3,
    },
		},
		'GXS_nvhuang':{
			audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"phaseZhunbeiBegin",
    },
    check:function (event,player){
        if(get.attitude(player,event.player)<-2){
            var cards=player.getCards('h');
            if(cards.length>player.hp) return true;
            for(var i=0;i<cards.length;i++){
                var useful=get.useful(cards[i]);
                if(useful<5) return true;
                if(cards[i].number>9&&useful<7) return true;
            }
        }
        return false;
    },
    logTarget:"player",
    filter:function (event,player){
        return player.canCompare(event.player);
    },
    content:function (){
        "step 0"
        player.chooseToCompare(trigger.player);
        "step 1"
        if(result.bool){
            trigger.player.addTempSkill('GXSnotrick');
        }
    },
		},
		'GXS_qiandu':{
			audio:"ext:RE：英雄杀:1",
			trigger:{
        global:"judgeBegin",
    },
			content:function (){
        'step 0'
        event.cards=get.cards(2);
        'step 1'
        player.chooseCardButton(event.cards.length,true,event.cards,'按顺序将卡牌置于牌堆顶（先选择的在上）');
        'step 2'
        if(result.bool){
            var list=result.links.slice(0);
            while(list.length){
                ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
            }
            game.updateRoundNumber();
        }
    },
	ai:{
        expose:0.1,
        tag:{
            rejudge:0.5,
        },
    },
		},
		"GXS_zhenlie":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        global:"phaseUseBegin",
    },
    check:function (event,player){
        if(get.attitude(player,event.player)>0){
            return player.hp>2
        }
        return false;
    },
    content:function (){
		'step 0' 
		player.draw();
        if (trigger.player!=player) player.chooseCard('是否交给'+get.translation(trigger.player)+'一张手牌？',true).ai=function(card){ 
            return get.attitude(_status.event.player,trigger.player)>0?1:-1;
        } 
        'step 1' 
        if(result.bool){ 
            trigger.player.gain(result.cards); 
            player.$give(result.cards,trigger.player);
        } 
        trigger.player.addTempSkill('GXS_huguobf2');
        player.loseHp()
	}
		},
		"GXS_jiade":{
		audio:"ext:RE：英雄杀:2",
		trigger:{
        player:"phaseDiscardEnd",
    },
    direct:true,
    filter:function(event,player){ 
        return event.cards&&event.cards.length>0; 
    },
    content:function(){ 
        "step 0" 
        player.chooseTarget([1,trigger.cards.length+1],get.prompt('GXS_jiade')).set('ai',function(target){
            return get.attitude(player,target)
        });
        "step 1" 
        if(result.bool){ 
            player.logSkill('GXS_jiade'); 
            game.asyncDraw(result.targets);
        } 
    },
},
        "GXS_liebo":{
        audio:2,
    enable:"phaseUse",
    filter:function(event,player){
        return player.getHandcardLimit()>0;
    },
    marktext:'帛',
	intro:{
		content:'手牌上限-#',
	},
	content:function(){			
		player.addMark('GXS_liebo',1);
        player.draw();
        player.addTempSkill('GXS_liebo_num');
    },
    ai:{
        order:10,
        result:{
            player:function(player){
                if(!player.needsToDiscard(1)){
                    return 1;
                }
                return 0;
            },
        },
    },
    subSkill:{
    num:{    
      onremove:function(player){
			player.unmarkSkill('GXS_liebo');
			delete player.storage.GXS_liebo;
	  },
      mod:{
	    charlotte:true,
        maxHandcard:function(player,num){
            return num-player.countMark('GXS_liebo');
        },
    },
    }
    }
  },
  "GXS_yaoji":{
  audio:2,
  trigger:{
        player:"phaseDiscardEnd",
    },
    direct:true,
    filter:function(event,player){
    var cards=[];
        player.getHistory('lose',function(evt){
            if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
        }); 
        return game.players.length>2&&(player.countCards("h")<=1||cards.length>1);
    },
    content:function(){
         'step 0'
        player.chooseTarget(2,get.prompt('GXS_yaoji'),'选择角色A&B，视A对B使用一张杀',function(card,player,target){
            if(target==player) return false;
            if(!ui.selected.targets.length) return true;
			return ui.selected.targets[0].canUse('sha',target);
        }).set('complexTarget',true).set('ai',function(target){
            if(!ui.selected.targets.length){
            return get.attitude(_status.event.player,target);
            } 
            return get.attitude(_status.event.player,target)<0&&ui.selected.targets[0].canUse('sha',target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('GXS_yaoji',result.targets);
            result.targets[0].useCard({name:'sha',isCard:true},result.targets[1],false);
        }
    },
  },
  'GXS_youmie':{
  audio:2,
    enable:"phaseUse",
    usable:1,
    filter:function(event,player){
        return player.countCards('h')>0;
    },
    filterTarget:function(card,player,target){
        return player!=target;
    },
    filterCard:true,
    check:function(card){
        return 8-get.value(card);
    },
    discard:true,
    lose:true,
    delay:false,
    content:function(){
    var cards=target.getCards('h',{suit:get.suit(cards[0])});
     if(cards.length>0&&target.countCards("h")) {
        player.gain(cards,target,'giveAuto');
     }else{
            target.loseHp();
            event.finish();
        }
    },
    ai:{
        order:9,
        result:{
            target:function(player,target){
                return -target.countCards('h')-(player.countCards('h','du')?1:0);
            },
        },
        threaten:2,
    },
  },
  'GXS_zhangzheng':{
    trigger:{
        global:"judge",
    },
    audio:2,
    filter:function(event,player){
			return player.countCards('h')>0;
	},
	popup:false,
    content:function (){
     'step 0'
     player.chooseCard(true).ai=function(card){
     var card1=trigger.player.judging[0];
     var judge0=trigger.judge(card1);
     var judge1=0;
     var attitude=get.attitude(player,trigger.player);
     var ps=player.getCards('h'); 
     for (i=0;i<ps.length;i++){     
       var judge2=(trigger.judge({
           name:get.name(card1),
        number:ps[i].number,
        nature:get.nature(card1),
       })-judge0)*attitude;
       if(judge2>judge1){
        return get.number(card)==ps[i].number;
        judge1=judge2;
       }
     }
        };
        'step 1'
        player.showCards(result.cards);
        result.control=get.number(result.cards[0]);
      if(!event.logged){
       event.logged=true;
       player.logSkill(event.name,trigger.player);
      }
      game.log(trigger.player,'判定结果点数为','#g'+result.control);
      player.popup(result.control,'fire');
      if(!trigger.fixedResult) trigger.fixedResult={};           
      trigger.fixedResult.number=result.control; 
    },
},
//------------------某版本英雄杀d将---------------------//
		"GXS_cangfeng":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"shaMiss",
    },
	frequent:true,
	popup:false,
    filter:function (event,player){
		return player.countCards('he')>0;
		},
    content:function (){
		'step 0' 
        player.chooseToDiscard('是否弃置一张牌以获得'+get.translation(trigger.target)+'一张牌？','he').ai=function(card){ 
            return get.attitude(player,trigger.target)<0?1:-1;
        } 
        'step 1' 
        if(result.bool){ 
		    player.logSkill('GXS_cangfeng');
             player.gainPlayerCard(trigger.target,'he');
        } 
	}
		},
		"GXS_zhuanfa":{
		audio:"ext:RE：英雄杀:2",
			trigger:{
        player:"phaseBegin",
    },
	frequent:true,
    filter:function (event,player){
		return player.countCards('h')==0||player.hp==1&&player.isDamaged();
		},
    content:function (){
		if (player.countCards('h')==0&&player.hp==1&&player.isDamaged){
			player.draw(2)
			player.recover()
		}else if (player.countCards('h')==0){
			player.draw(2)
		}else{
			player.recover()
		}
	}
		},
		"GXS_tujin":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
				player:"phaseUseBegin",
			},
			force:true,
			direct:true,
			content:function (){  
			player.logSkill('GXS_tujin');			
			},
			mod:{
            globalFrom:function (from,to){
              if(to.countCards('h')>=from.countCards('h')) return -Infinity;
            },
			globalTo:function (from,to,distance){
               return distance+(from.countCards('h')>=to.countCards('h')?1:0);
            },
            },
		},
		"GXS_jianfeng":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
            source:"damageBegin",
		    },
            filter:function (event,player){  
			return event.card&&event.card.name=='sha'&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			check:function (event,player){   
			return ai.get.attitude(player,event.target)<1;
			},
			content:function (){            
				trigger.num+=trigger.player.countCards('e');                    
			},
			ai:{
				threaten:1.6,
			},
		},
		"GXS_luoshen":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
             target:"useCardToTargeted",
            },
			frequent:true, 
            filter:function (event,player){
            if(event.player == player)return false;
             return (event.card.name == 'sha' || get.type(event.card) == 'trick') && (event.player.countCards('h') >= player.countCards('h')||event.player.countCards('e') >= player.countCards('e'));
            },
			content:function (){
				player.draw()		
			}
		},
		"GXS_tanxi":{
			audio:"ext:RE：英雄杀:2",
			enable:"phaseUse",
    filterCard:true,
    selectCard:[1,Infinity],
    discard:false,
    lose:false,
    delay:0,
	usable:1,
    filterTarget:function (card,player,target){
        return player!=target;
    },
	filter:function (event,player){
             return player.countCards('h') > 0;
            },
    check:function (card){
        if(ui.selected.cards.length>1) return 0;
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        var num=0;
        var evt2=_status.event.getParent();
        var num=0;
        player.getHistory('lose',function(evt){
            if(evt.getParent().skill=='rende'&&evt.getParent(3)==evt2) num+=evt.cards.length;
        });
        if(player.hp==player.maxHp||num>1||player.countCards('h')<=1){
            if(ui.selected.cards.length){
                return -1;
            }
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hasSkill('haoshi')&&
                    !players[i].isTurnedOver()&&
                    !players[i].hasJudge('lebu')&&
                    get.attitude(player,players[i])>=3&&
                    get.attitude(players[i],player)>=3){
                    return 11-get.value(card);
                }
            }
            if(player.countCards('h')>player.hp) return 10-get.value(card);
            if(player.countCards('h')>2) return 6-get.value(card);
            return -1;
        }
        return 10-get.value(card);
    },
    content:function (){
        target.gain(cards,player,'giveAuto');
		target.addMark('GXS_tanxi_mark',1);
    },
    ai:{
        order:function (skill,player){
            if(player.hp<player.maxHp&&player.countCards('h')>1){
                return 10;
            }
            return 1;
        },
        result:{
            target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return -10;
                }
                if(target.hasJudge('lebu')) return 0;
                var nh=target.countCards('h');
                var np=player.countCards('h');
                if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
                    if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
                }
				if (get.attitude(player,target)>0&&nh==target.hp) return 0;
                return Math.max(1,5-nh);
            },
        },
        effect:{
            target:function (card,player,target){
                if(player==target&&get.type(card)=='equip'){
                    if(player.countCards('e',{subtype:get.subtype(card)})){
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i]!=player&&get.attitude(player,players[i])>0){
                                return 0;
                            }
                        }
                    }
                }
            },
        },
        threaten:0.8,
        },
		group:'GXS_tanxi_begin',
		subSkill:{
			begin:{
			audio:"GXS_tanxi",
				trigger:{
                global:"phaseBegin",
            },
            forced:true,
            filter:function (event,player){
                return player!=event.player&&event.player.hasMark('GXS_tanxi_mark')&&event.player.isAlive();
            },
            content:function (){
				if (trigger.player.countCards('h') > trigger.player.hp) trigger.player.damage(player);
				trigger.player.removeMark('GXS_tanxi_mark',trigger.player.countMark('GXS_tanxi_mark'));
			  }
			}
		},
		},
		'GXS_zhicai':{
			audio:"ext:RE：英雄杀:2",
         trigger:{
        source:"damageSource",
		player:"damage",
    },
    direct:true,
    filter:function (event,player){
        return (event.source==player&&event.player.countCards('he')>0)||(event.player==player&&event.source!=player&&event.source.countCards('he')>0);
    },
    content:function (){
		if (trigger.source==player){
        player.discardPlayerCard(get.prompt('GXS_zhicai',trigger.player),'he',trigger.player).set('logSkill',['GXS_zhicai',trigger.player]); 
		}else{
		player.discardPlayerCard(get.prompt('GXS_zhicai',trigger.source),'he',trigger.source).set('logSkill',['GXS_zhicai',trigger.source]); 	
		}		
    },
		},
		'GXS_nvdi':{
			audio:"ext:RE：英雄杀:2",
			mod:{
            targetEnabled:function (card,player,target,now){
            if(get.type(card)=='delay') return false;
            },
            },
		},
		"GXS_nvwushen":{
			audio:"ext:RE：英雄杀:2",
			trigger:{
                source:"damageSource",
                player:"phaseBegin",
            },
            forced:true,
				juexingji:true,
				derivation:['GXS_qianglve','GXS_chexuan'],
            filter:function (event,player){
            if (event.name!='damage'){
               return player.storage.GXS_nvwushen.length>=3; 
                } 
            return event.card&&(event.card.name=="sha"||event.card.name=="juedou")
            },
            init:function(player){
        if(!player.storage.GXS_nvwushen) player.storage.GXS_nvwushen=[];
    },
    marktext:"毘",
    intro:{
        content:"cards",
        onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
    },
    content:function(){
    if (trigger.name!='damage'){   
    player.storage.GXS_nvwushen.length=0;
    player.unmarkSkill('GXS_nvwushen');
    player.$skill('越后之龙来了！','fire','avatar');
    player.awakenSkill('GXS_nvwushen');
     player.addSkill('GXS_qianglve');
     player.addSkill('GXS_chexuan');
     player.loseMaxHp()
    }else{
        var card=game.cardsGotoSpecial(get.cards()).cards[0];
        player.$draw(card);
        game.delay();
        player.storage.GXS_nvwushen.push(card);
        player.markSkill('GXS_nvwushen');      
     }
    },
    mod:{
        globalFrom:function(from,to,distance){
            return distance-from.storage.GXS_nvwushen;
        },
    },
		},
		"GXS_qianglve":{
		trigger:{player:'shaMiss'},
				priority:-1,
				filter:function(event){
					return event.target.countCards('he')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				content:function(){
					'step 0'
					player.judge(function(card){
						return get.color(card)=='black'?1:-1;
					});
					'step 1'
					if(result.bool){
						player.gainPlayerCard('he',trigger.target);
					}
				}
		},
		"GXS_chexuan":{
		trigger:{
                player:"phaseBegin",
            },
            frequent:true, 
          content:function(){  
		 'step 0'
        player.judge();
        'step 1'
        switch(get.type(result.card)){
						case 'basic':player.addTempSkill('wc_GXS_huguobf2');break;
						case 'trick':player.addTempSkill('gongji2');break;
						case 'equip':player.addTempSkill('GXSbuf_shaer');break;
			}
			if (result.color=="black") player.gain(result.card,'gain2');
        }
		},
		"GXSbuf_shaer":{
		mod:{
        targetInRange:function(card){
            if(card.name=='sha') return true;
        },
        selectTarget:function(card,player,range){
            if(card.name=='sha'&&range[1]!=-1&&get.suit(card)=='club'){
                range[1]++;
            }
        },
    },
  },
  "GXS_pishuang":{
  audio:"ext:RE：英雄杀:true",
  trigger:{
        global:"phaseUseBegin",
    },
    filter:function(event,player){
        return event.player.sex=="male"&&event.player.isAlive()&&player.countCards('h')>0;
    },
    direct:true,
    preHidden:true,
    content:function(){
        "step 0"
        var nono=(Math.abs(get.attitude(player,trigger.player))<3);
        if(player==trigger.player||get.damageEffect(trigger.player,player,player)<=0){
            nono=true
        }
        else if(trigger.player.hp>2){
            nono=true;
        }
        else if(trigger.player.hp>1&&player.countCards('h')<3&&(trigger.player.canUse('sha',player)&&!player.countCards('h','shan')&&trigger.player.countCards('h')>=3)){
            nono=true;
        }
        var next=player.chooseToDiscard(get.prompt2('GXS_pishuang',trigger.player));
        next.set('ai',function(card){
            if(_status.event.nono) return -1;
            return 7-get.useful(card);
        });
        next.set('logSkill',['GXS_pishuang',trigger.player]);
        next.set('nono',nono);
        next.setHiddenSkill('GXS_pishuang');
        "step 1"
        if(result.bool){
        player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
          var rand = Math.ceil(Math.random() * 6);
          var suit = 'heart2';
          if ([1, 4].contains(rand)) {
            suit = 'diamond2';
          } else if ([2, 5].contains(rand)) {
            suit = 'club2';
          } else if (rand == 3) {
            suit = 'spade2';
          } else {
            suit = 'heart2';
          }
          return suit;
        });
       }
        "step 2"
        if(result.control){
        var message = `<span style="color: ${['heart2', 'diamond2'].contains(result.control) ? "#631515" : "rgba(0,0,0,0.8)"}; font-size: 200%;">${get.translation(result.control.slice(0, -1))}</span>`;
        // can't really chat this due to ban words restrictions
        player.say(message);
        trigger.player.storage.GXS_pishuang = result.control;
        trigger.player.storage.GXS_pishuang_source = player;
        trigger.player.addTempSkill('GXS_pishuang_scanning');
        }
    },
    subSkill:{
        scanning:{
            mark:true,
            intro:{
                content:function (storage, player) {
                  return `出牌阶段若你使用了${get.translation(player.storage.GXS_pishuang)}牌，\
弃牌阶段开始时受到来自${get.translation(player.storage.GXS_pishuang_source)}的1点伤害'`;
                },
            },
            audio:false,
            popup:false,
            forced:true,
            silent:true,
            trigger:{
                player:["phaseDiscardBegin"],
            },
            filter:function (event, player) {
                return player.getHistory('useCard',function(evt){
						return evt.isPhaseUsing()&&player.storage.GXS_pishuang === get.suit(evt.card)+'2';
					}).length>0;
              },
            content:function () {
            var panjinlian=player.storage.GXS_pishuang_source;
               game.playAudio("../extension/RE：英雄杀/GXS_pishuang_guanyao");
                player.damage(panjinlian);
                panjinlian.draw();
              },
            ai:{
                effect:{
                    player:function (card, player, target) {
                        if ((get.suit(card) + '2') != player.storage.GXS_pishuang)  return [1, -1.5];
                      },
                },
            },
            sub:true,
        },
    },
  },
  "GXS_chuoyue":{
  trigger:{
        player:"damageEnd",
    },
    frequent:true,
    audio:"ext:RE：英雄杀:2",
    filter:function(event,player){
        return event.source&&event.source.sex=="male";
    },
    content:function(){
        if(player.getHistory('damage',function(evt){
            return evt!=trigger
        }).length>0){
            player.draw();
        }
        else{
            player.recover();
        }
    },
  },
  'GXS_honghuang':{
  audio:"ext:RE：英雄杀:2",
  enable:"phaseUse",
    usable:1,
    filter:function(event,player){
        return player.countCards('h')>0;
    },
    filterTarget:function(card,player,target){
        return player!=target;
    },
    filterCard:true,
    check:function(card){
        return 8-get.value(card);
    },
    discard:false,
    lose:false,
    delay:false,
    content:function(){
        "step 0"
        target.gain(cards[0],player,'give');
        "step 1"
        target.chooseControl('令其摸牌','弃掉两牌').ai=function(event,player){
            return (target.countCards("he")==1||target.countCards("he")>4)&&get.attitude(target,player)<0?'弃掉两牌':'令其摸牌';
        }
        "step 2"
        if(result.control=='令其摸牌'){
            player.draw(2)
        }
        else{
            target.chooseToDiscard(2,"he",true)
        }
    },
    ai:{
        order:9,
        result:{
            target:function(player,target){
            if (target.countCards("h")<2) return 1;
            return -(player.countCards('h','du')?1:0);
            },
        },
        threaten:1.2,
    },
  },
  'GXS_fanshi':{
  audio:"ext:RE：英雄杀:2",
  trigger:{
                    player:'damageAfter',
                },                 
                		filter:function(event,player){
					return (event.source&&player.countCards('he'));
				},     
				check:function (event,player){
                return get.attitude(player,event.source)<0;
                },           
                logTarget:"source", 
                content:function (){
        'step 0'
        var next=player.chooseToDiscard('he','弃置一张牌令'+get.translation(trigger.source)+'受到同等伤害',true);        
        next.ai=function(card){
            if(player.hp==1||trigger.num>1){
                return 9-ai.get.value(card);
            }
            if(player.hp==2){
                return 8-ai.get.value(card);
            }
            return 7-ai.get.value(card);
        };
        'step 1'
        if(result.bool){
            trigger.source.damage(trigger.num);
        }
    }, 
     ai:{
        "maixie_defend":true,
        effect:{
            target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                return 0.8;
                // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
            },
        },
    },              
  },
  'GXS_shenzun':{
  mod:{
        maxHandcard:function(player,num){
            if(player.isDamaged()) return num+player.maxHp+player.getDamagedHp();
            return num+player.maxHp;
        },
    },
  },
  "GXS_wanrong":{
  trigger:{
                global:"useCardToTargeted",
            },
            check:function (event,player){
                return get.attitude(player,event.target)>0;
            },
            filter:function (event,player){
            if(event.card.name!='sha') return false;
            return true;
            },
            prompt:function (event,player){
            return '是否对'+get.translation(event.target)+'发动【挽戎】';
            },
  content:function(){
       'step 0'
        trigger.target.draw();
        'step 1'
        if(Array.isArray(result)&&result.length){
            var gained=result[0];
            trigger.target.showCards(gained);
            if(lib.filter.targetEnabled(gained,trigger.target,_status.currentPhase)&&gained.name=='sha'){
                var next=trigger.target.chooseToUse().set('filterTarget',function(card,player,target){
                    return target==_status.currentPhase;
                    });
                next.filterCard=function(card){
                    return card==gained;
                };
                next.prompt='是否对'+get.translation(_status.currentPhase)+'使用'+get.translation(gained)+'？';
            }
            else{
                event.finish();
            }
        }
        else{
            event.finish();
        }
     }
   },
  "GXS_xundao":{
  trigger:{
                player:"dying",
            },
            content:function(){
            'step 0'
            player.chooseTarget('选择任意名角色摸牌',[1,Infinity]).set('ai',function(target){
            return get.attitude(player,target)>0;
            });
            'step 1'
            if (result.bool)  game.asyncDraw(result.targets);
            }
  },
  "GXS_xiongcai":{
            audio:"ext:RE：英雄杀:1",
            trigger:{global:'phaseDiscardEnd'},
            /*filter:function(event,player){
            var evt=event.getParent('useCard'); 
            if(event.type!='discard'||event.player==player) return false; 
            if(evt.card&&evt.card.name=="guohe") return false;      
            return true;
            },*/
            filter:function(event,player){
        if(event.player!=player&&event.player.isIn()){
            return event.player.getHistory('lose',function(evt){
                return evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs.filterInD('d').length>0;
            }).length>0;
        }
        return false;
    },
    direct:true,
    preHidden:true,
    content:function(){
        "step 0"
        var cards=[];
        var cards2=[];
        game.getGlobalHistory('cardMove',function(evt){
            if(evt.name=='cardsDiscard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards.filterInD('d'));
        });
        game.countPlayer2(function(current){
            current.getHistory('lose',function(evt){
                if(evt.type!='discard'||evt.getParent('phaseDiscard')!=trigger) return;
                cards.addArray(evt.cards.filterInD('d'));
                if(current==trigger.player) cards2.addArray(evt.hs.filterInD('d'));
            })
        });
        event.cards=cards;        
"step 1"
if(event.cards.length>1){
player.chooseCardButton('【雄才】：请选择要分配的牌',true,event.cards,[1,event.cards.length]).set('ai',function(button){
if(ui.selected.buttons.length==0) return 1;
return 0;
});
}
else if(event.cards.length==1){
event._result={links:event.cards.slice(0),bool:true};
}
else{
event.finish();
}
"step 2"
if(result.bool){
for(var i=0;i<result.links.length;i++){
event.cards.remove(result.links[i]);
}
event.togive=result.links.slice(0);
player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(_status.event.enemy){
return -att;
}
else if(att>0){
return att/(1+target.countCards('h'));
}
else{
return att/100;
}
}).set('enemy',get.value(event.togive[0],player,'raw')<0);
}
"step 3"
if(result.targets.length){
result.targets[0].gain(event.togive,'draw');
player.line(result.targets[0],'green');
player.logSkill('GXS_xiongcai',result.targets[0]);
game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
event.goto(1);
}
},
            },
            
            "GXS_zhengfa":{
                audio:"ext:RE：英雄杀:1",
                enable:"phaseUse",
                usable:1,
                group:"GXS_zhengfa_1",
                filterTarget:function(event,player,target){
return target!=player;
},
                content:function(){
target.addMark("GXS_zhengfa");
},
ai:{
order:9,
result:{
player:-1,
target:-3,
},
},
                marktext:"伐",
                intro:{
                    name:"伐",
                    content:"mark",
                },
                subSkill:{
                    "1":{
                        trigger:{
                            global:"phaseEnd",
                        }, 
                        direct:true,
                        filter:function(event,player){
return event.player.hasMark("GXS_zhengfa")&&event.player.countCards("h");
},
                        content:function(){
"step 0"
var num=trigger.player.countMark("GXS_zhengfa");
event.num=num;
player.logSkill("GXS_zhengfa",trigger.player);
trigger.player.chooseToDiscard("【征伐】：请弃置"+get.cnNumber(num)+"张手牌",num,true,"h");
"step 1"
trigger.player.removeMark("GXS_zhengfa",event.num);
},
                        sub:true,
                    },
                },
            },
            "GXS_yinren":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                  player:"phaseDiscardBefore",
                },
                frequent:function (event,player){
        return player.needsToDiscard();
    },
                filter:function (event,player){
        if(player.getHistory('skipped').contains('phaseUse')) return true;
        var history=player.getHistory('useCard').concat(player.getHistory('respond'));
        for(var i=0;i<history.length;i++){
            if(history[i].card.name=='sha'&&history[i].isPhaseUsing()) return false;
        }
        return true;
    },
                content:function (){
        trigger.cancel();
        player.draw(1);
    },
            },
            "GXS_tuqiang":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event,player){
        return _status.currentPhase!=player&&event.card&&(event.card.name=='shan'||event.card.name=='sha');
    },
                frequent:true,
                content:function (){
        player.draw(1);
    },
                ai:{
                    mingzhi:false,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'respondShan')){
                    return 0.8;
                }
            },
                    },
                },
            },
            "GXS_guifu":{
                 audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('e')>0;
    },
                content:function (){
        'step 0'
        player.discardPlayerCard(target,'e',true);
        'step 1'
        game.asyncDraw([player,target]);
    },
                ai:{
                    order:8,
                    threaten:1.5,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
            },
            "GXS_shengong":{
                audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.hasCard(function(card){
            return !get.info(card).unique;
        },'e');
    },
                check:function (card){
        return 6-get.value(card);
    },
                filterCard:function (card){
        var info=lib.card[card.name];
        if(!info) return false;
        return !info.image&&!info.fullimage;
    },
                discard:false,
                lose:false,
                content:function (){
        'step 0'
        var next=player.choosePlayerCard(target,'e',true);
        next.ai=get.buttonValue;
        next.filterButton=function(button){
            return !get.info(button.link).unique;
        }
        'step 1'
        if(result.links[0]){
            cards[0].init([result.links[0].suit,result.links[0].number,result.links[0].name,result.links[0].nature]);
            event.card=cards[0];
            player.chooseTarget('选择一个角色装备'+get.translation(result.links),true).ai=function(target){
                if(!target.countCards('e',{subtype:get.subtype(event.card)})){
                    return get.attitude(player,target);
                }
                return 0;
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.targets&&result.targets[0]&&event.card){
            player.$give(event.card,result.targets[0]);
            game.delay();
            event.toequip=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 3'
        if(event.toequip){
            event.toequip.equip(event.card);
        }
    },
                ai:{
                    order:9,
                    threaten:1.5,
                    result:{
                        player:function (player){
                if(player.countCards('e')<3) return 1;
                return 0;
            },
                    },
                },
            },
            "GXS_hufu":{
                audio:"ext:RE：英雄杀:2",
				trigger:{player:'phaseDrawBegin'},
				filter:function(event,player){
					return !player.getEquip(2);
				},
				locked:true,
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.3
				},
				mod:{
					maxHandcard:function(player,num){
						if(player.getEquip(2)) return num+4;
					}
				}
			},
                "GXS_hanbei":{
                audio:"ext:RE：英雄杀:2",
				trigger:{player:'shaBegin'},
				locked:true,
				forced:true,
				filter:function(event,player){
					if(player.getEquip(1)||player.getEquip(3)||player.getEquip(4)) return true;
					return false;
				},
				content:function(){
					trigger.directHit=true;
				}
			},
			"GXS_fanji":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:12,
                filter:function (event,player){     
        return event.source&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
    },
                content:function (){    
                player.addTempSkill('GXS_fanji2','shaAfter');   
         player.chooseToUse({name:'sha'},trigger.source,'反击：是否对'+get.translation(trigger.source)+'使用一张杀？').logSkill='GXS_fanji';
    },
            },
            GXS_fanji2:{
                audio:2,
                trigger:{
                    player:"shaBegin",
                },
                direct:true,              
                filter:function (event,player){      
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='red';
    },
                content:function (){    
               trigger.directHit=true;
    },
            },
            "GXS_menshen":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                    player:"phaseEnd",
                },
                priority:15,
                group:"GXS_menshen3",
                onremove:true,
                filter:function (event,player){
        return game.players.length>1;
    },
                content:function (){
              "step 0"
     player.chooseTarget('选择【门神】的目标',lib.translate.GXS_menshen_info,true,function(card,player,target){
             return target!=player;
     }).set('ai',function(target){     
             if (get.attitude(player,target)>0) return true;
             return 0      
     });        
     "step 1"
     if(result.bool){           
        var target=result.targets[0];
                        player.line(target,'green');
                        game.log(target,'成为了','【门神】','的目标');
                        target.storage.GXS_menshen2=player;
                        target.addSkill('GXS_menshen2');
     }
    else {       
            event.finish(); 
    }                     
   },
                ai:{
                    expose:0.5,
                },
            },
            "GXS_menshen3":{
    trigger:{
        player:["phaseBegin","dieBegin"],
    },
    silent:true,
    filter:function(event,player){
        return game.hasPlayer(function(current){
return current.hasSkill('GXS_menshen2');
});
    },
    content:function(){
     for(var i=0;i<game.players.length;i++){
if(game.players[i].hasSkill('GXS_menshen2')){
        game.players[i].removeSkill('GXS_menshen2');
        }
        }
    },
    forced:true,
    popup:false,
},
            "GXS_menshen2":{
    audio:"GXS_menshen",
    mark:"character",
    intro:{
        content:"当你成为【杀】或【决斗】的目标后，改为$成为目标",
    },
    nopop:true,
    priority:15,
    trigger:{
        target:["shaBegin","juedouBegin"],
    },
    mod:{
					cardEnabled:function(card,player){
					if((player.storage.GXS_menshen2.hasSkill('kongcheng')||player.storage.GXS_menshen2.hasSkill('GXS_guiyin'))&&player.storage.GXS_menshen2.countCards('h')==0&&(card.name=='sha'||card.name=='juedou')) return false;
					}
				},
	charlotte:true,
    forced:true,
    popup:false,
    filter:function(event,player){
        return player.isAlive()&&player.storage.GXS_menshen2.isAlive();
    },
    content:function (){                             
          var target=player.storage.GXS_menshen2;
                        trigger.player.line(target,'green');
            trigger.targets.remove(player);
                          trigger.targets.push(target);    
                                trigger.target = target;                            
    },
},
            "GXS_dihui":{
                locked:true,
                forced:true,
                audio:"ext:RE：英雄杀:1",
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
if(event.card.name!="sha"||!event.player.isAlive()||event.player.hasSkill("GXS_dihui_2")) return false;
return true;
},
                content:function(){
trigger.player.addTempSkill("GXS_dihui_2",
{player:"damage"});
},
                ai:{
                    threaten:1.1,
                    expose:0.25,
                },
                subSkill:{
                    "2":{
                        trigger:{
                            player:"damageBegin3",
                        },
                        audio:"ext:RE：英雄杀:2",
                        forced:true,
                        locked:true,
                        onremove:true,
                        charlotte:true,
                        content:function(){
trigger.num+=1;
game.log(player,'受到的伤害+1');
player.removeSkill("GXS_dihui_2");
},
                        marktext:"➹",
                        mark:true,
                        intro:{
                            content:"受到的伤害+#直到下次受到伤害",
                        },
                        sub:true,
                        },
                    },
                },
                "GXS_mimou":{
               
                audio:"ext:RE：英雄杀:1",
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card);
    },
                position:"he",
                viewAs:{
                    name:"jiedao",
                },
                prompt:"将任意一张手牌当【借刀杀人】使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    basic:{
                        order:8,
                        value:2,
                        useful:1,
                    },
                    result:{
                        target:-1.5,
                        player:function (player){
                if(player.getCards('he',{subtype:'equip1'}).length) return 0;
                return 1.5;
            },
                    },
                    tag:{
                        gain:1,
                        use:1,
                        useSha:1,
                        loseCard:1,
                    },
                    wuxie:function(target,card,player,viewer){
                        if(player==game.me&&get.attitude(viewer,player)>0){
                            return 0;
                        }
                    },
                },
            },
            "GXS_cuanni": {
				    audio:"ext:RE：英雄杀:1",
				    		
					trigger:{						source:"damageBefore",
					},
					priority: 16,
					check: function () {
						return false;
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						var chat = ["得人心者得天下"].randomGet()
						player.say(chat);
						var ex = 0;
						if(trigger.card && trigger.card.name == 'sha') {
							if(player.hasSkill('jiu')) ex++;
							if(player.hasSkill('luoyi2')) ex++;
							if(player.hasSkill('reluoyi2')) ex++;
						}
						trigger.player.loseHp(trigger.num + ex);
					},
					ai: {
						jueqing: true,
					},
				},
				"GXS_jiandi":{
             audio:"ext:RE：英雄杀:1",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                position:"he",
                filter:function(event,player){
                return player.countCards("he");
                },
                check:function(card){
return 10-get.value(card);
},
                content:function(){
"step 0"
player.loseHp();
var list=game.filterPlayer(function(current){
return current!=player&&current.isAlive()&&current.countCards("hej");
});
list.sortBySeat();
event.targets=list;
player.line(event.targets);
"step 1"
var target=targets.shift();
event.target=target;
if(target.countCards("hej")&&target.isAlive()) player.gainPlayerCard("###GXS_jiandi###获得"+get.translation(target)+"区域内的一张牌",target,get.buttonValue,'hej',true);
if(event.targets.length>0) event.redo();
},
ai:{
order:10,
result:{
player:function(player,target){
if(player.hp>2)return 2;
},
},         
},
            },
            "GXS_bingsheng":{
            audio:"ext:RE：英雄杀:1",            
                shaRelated:true,
                trigger:{
                    global:"useCard",
                },
                direct:true,
                filter:function(event,player){
return event.card.name=='sha'&&event.player.isPhaseUsing()&&get.color(event.card)=="red";
},
                check:function(event,player){
var go=false;
if(get.attitude(player,trigger.player)>0){
if(get.color(trigger.card)=='red'){
go=true;
}
else if(trigger.addCount===false||!trigger.player.isPhaseUsing()) go=false;
else if(!trigger.player.hasSkill('paoxiao')&&
!trigger.player.hasSkill('tanlin3')&&
!trigger.player.hasSkill('zhaxiang2')&&
!trigger.player.hasSkill('fengnu')&&
!trigger.player.getEquip('zhuge')){
var nh=trigger.player.countCards('h');
if(player==trigger.player){
go=(player.countCards('h','sha')>0);
}
else if(nh>=4){
go=true;
}
else if(player.countCards('h','sha')){
if(nh==3){
go=Math.random()<0.8;
}
else if(nh==2){
go=Math.random()<0.5;
}
}
else if(nh>=3){
if(nh==3){
go=Math.random()<0.5;
}
else if(nh==2){
go=Math.random()<0.2;
}
}
}
}
return go;
},
                content:function(){
'step 0'
player.logSkill("GXS_bingsheng");
player.draw();
'step 1'
var next=player.chooseToDiscard('he',function(card,player){
return card!=player.getEquip('GXS_bingsheng');
},get.prompt(event.name,trigger.player),'弃置一张牌，令其杀的使用次数+1');
next.ai=function(card){
if(_status.event.goon) return 6-get.value(card);
return -1;
};
next.set('goon',get.attitude(player,trigger.player)>1&&!trigger.player.hasSkillTag('filterDamage',null,{
player:player,
card:trigger.card,
}));
next.logSkill=[event.name,trigger.player];
"step 2"
if(result.bool){
trigger.player.getStat().card.sha--;
}
},
ai:{
order:10,
result:{
player:function(player,target){
if(player.hp>2)return 2;
},
},       
},
},
              "GXS_qiji":{
			    audio:"ext:RE：英雄杀:1",
               
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				selectCard:2,
				check:function(card){
					return 8-get.value(card);
				},
				filterTarget:function(card,player,target){
					if(target.hp==Infinity) return false;
					if(target.hp>player.hp) return true;
					if(target.hp<player.hp&&target.hp<target.maxHp) return true;
					return false;
				},
				content:function(){
					var num=target.hp-player.hp;
					if(num>2){
						num=target.hp-player.hp;
					}
					if(num<-2){
						num=target.hp-player.hp;
					}
					if(num>0){
						target.loseHp(num);
					}
					else if(num<0&&target.hp<target.maxHp){
						target.recover(-num);
					}
				},
				ai:{
					order:8.5,
					result:{
						target:function(player,target){
							var num;
							if(player.hp>target.maxHp){
								num=player.hp-target.maxHp;
							}
							else{
								num=player.hp-target.hp;
							}
							if(target.hp==1&&num){
								return num+1;
							}
							return num;
						}
					}
				}
			},
			"GXS_shicai":{
            audio:"ext:RE：英雄杀:2",
               
                enable:"phaseUse", 
                usable:1,
                filter:function(event,player){
return player.countCards('h')>0;
},
                filterCard:true,
                position:"he",
                check:function(card,player){
                return card.name=="sha"
                },
                filterTarget:function(card,player,target){
return player!=target;
},
                discard:false,
                lose:false,
                delay:false,
                content:function(){
"step 0"
event.target=targets[0];
targets[0].gain(cards,player,'giveAuto');
"step 1"
if(game.hasPlayer(function(current){
return event.target.canUse('sha',current);
})) player.chooseTarget('选择出杀的目标',true,function(card,player,target){
return _status.event.target.canUse('sha',target,false);
}).set('ai',function(target){
return get.effect(target,{name:'sha'},_status.event.target,_status.event.player);
}).set('target',event.target);
"step 2"
if(result.bool&&result.targets.length){
game.log(player,'指定的出杀目标为',result.targets);
event.target.line(result.targets);
event.target.chooseToUse('对'+get.translation(result.targets)+'使用一张杀，或令'+get.translation(player)+'弃置你的两张牌',{name:'sha'},result.targets[0],-1);
}
else{
event.bool=true;
}
"step 3"
if(event.bool||result.bool==false){
player.discardPlayerCard('he',event.target,Math.min(2,event.target.countCards('he')),true);
}
},
ai:{
order:2,
result:{
player:2,
target:2,
},
},
            },
            "GXS_xiangma":{
				    locked:true,
				    forced:true,
					mod:{
  					 globalTo:function(from,to,distance){
							return distance+1;
						},
					},
				},
				"GXS_budao":{
             audio:"ext:RE：英雄杀:2",
                trigger:{
                    global:"damageEnd",
                },
                direct:true,
                filter:function(event,player){
if(_status.currentPhase!=player&&event.card&&event.card.name=="sha"&&(event.player==player||(player.inRange(event.player)&&player.canUse({name:'sha'},event.player)))&&event.player.isAlive()) return true;
return false;
},
                content:function(){
player.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'补刀：是否对'+get.translation(trigger.player)+'使用一张杀？').set('logSkill','GXS_budao').set('complexSelect',true).set('filterTarget',function(card,player,target){
if (target==player) return true;
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.targetEnabled.apply(this,arguments);
}).set('sourcex',trigger.player);
},
            },
            "GXS_wusheng":{
                trigger:{
                    global:["respond"],
                },
                frequent:true,
                filter:function(event,player){
if(event.card.name!="sha"||event.cards.length<1||event.player==player) return false;
return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o';
},
                content:function(){
player.gain(trigger.cards,'gain2');
},
            },
            "GXS_danqi":{
			        locked:true,
			        forced:true,
					mod:{
						globalFrom:function(from,to,distance){
							return distance-1;
						},
					},
				},
				"GXS_wushuang":{
            audio:"ext:RE：英雄杀:1",
                locked:true,
                forced:true,
                trigger:{
                    player:"compare",
                    target:"compare",
                },
                filter:function(event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.suit(event.card1)=='heart';
                }
                else{
                    return get.suit(event.card2)=='heart';
                }
                return false;
                },
                content:function(){
                if(player==trigger.player){
                trigger.num1+=99;
                }
                else{
                trigger.num2+=99;
                }
                },
            },
            "GXS_fangtian":{
                audio:"ext:RE：英雄杀:1",
                trigger:{
                  player:"useCardToPlayered",
                },
                check:function(event,player){
return get.attitude(player,event.target)<0;
},
                filter:function(event,player){
return event.card.name=='sha'&&player.canCompare(event.target);
},
                logTarget:"target",
                content:function(){
'step 0'
player.chooseToCompare(trigger.target);
'step 1'
if(result.bool){
trigger.getParent().directHit.add(trigger.target);
}
},
            },
            "GXS_shenji":{
             audio:"ext:RE：英雄杀:1",
               usable:1,
                trigger:{
                    source:"damageSource",
                },
                direct:true,
                filter:function (event,player){
if(event._notrigger.contains(event.player)) return false;
return event.card&&event.card.name=='sha';
},
                content:function(){
"step 0"
player.chooseTarget('选择至多两名角色视为对这些角色使用一张【杀】',function(card,player,target){
var tx=trigger.player;
if(player.canUse({name:'sha'},target)&&(tx.next==target||tx.previous==target)) return true;
return false;
},[1,2]).set('ai',function(target){
return get.effect(_status.event.player,{name:'sha'},target,target)
});
'step 1'
if(result.bool){
player.logSkill("GXS_shenji",result.targets);
player.useCard({name:"sha",isCard:true},result.targets,false,'noai');
}
},
            },
             "GXS_zhuiji":{
              forced:true,
               locked:true,
                shaRelated:true,
                audio:"ext:RE：英雄杀:1",
                trigger:{
                  player:"useCardToPlayered",
                },
                filter:function(event,player){
return event.card.name=='sha'&&event.target.countCards("h")<=3&&!event.getParent().directHit.contains(event.target);
},
                logTarget:"target",
                content:function(){
var id=trigger.target.playerid;
var map=trigger.getParent().customArgs;
if(!map[id]) map[id]={};
if(typeof map[id].shanRequired=='number'){
map[id].shanRequired++;
}
else{
map[id].shanRequired=2;
}
},
            },
            "GXS_jianmie":{
                audio:"ext:RE：英雄杀:1",
                trigger:{
                    source:"damageSource",
                },
                group:"GXS_jianmie_pd",
                logTarget:"player",
                check:function(event,player){
if(get.attitude(player,event.player)>0) return false;
return true;
},
                content:function (){
trigger.player.addMark("GXS_jianmie",1);
},
                intro:{
                    content:"mark",
                },
                subSkill:{
                    pd:{
                        audio:"ext:RE：英雄杀:2",
                        trigger:{
                            global:"phaseDrawBegin2",
                        },
                        logTarget:"player",
                        forced:true,
                        charlotte:true,
                        filter:function(event,player){
return event.player.hasMark('GXS_jianmie')&&!event.numFixed;
},
                        content:function (){
"step 0"
var num=trigger.player.countMark('GXS_jianmie');
trigger.num-=num;
trigger.player.removeMark("GXS_jianmie",num);
},
                        sub:true,
                    },
                },
            },
            "GXS_lijian":{
            audio:"ext:RE：英雄杀:2",  
               
               usable:1,
                enable:"phaseUse",
                filter:function(event,player){
return player.countCards('h')>0;
},
                filterCard:true,
                selectCard:-1,
                multitarget:true,
                selectTarget:2,
                filterTarget:function(card,player,target){
                if(player==target||target.sex!='male') return false;
                if(ui.selected.targets.length==1){
                return ui.selected.targets[0].canCompare(target);
                }else return game.hasPlayer(function(c){
                return target.canCompare(c);
                });
},
                discard:false,
                lose:false,
                delay:false,
                targetprompt:["获得牌","被拼目标"],
                ai:{
                    order:1,
                    result:{
                        player:3,
                        target:function(player,target){
if(target.hasSkillTag('nogain')) return 2;
if(player.countCards('h')>1){
return 1;
}
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].countCards('h')&&players[i]!=target&&players[i]!=player&&get.attitude(player,players[i])>5){
break;
}
}
if(i==players.length){
return 1;
}
return -2/(target.countCards('h')+1);
},
                    },
                },
                content:function(){
"step 0"
targets[0].gain(cards,player,'giveAuto');
"step 1"
if(targets[0].canCompare(targets[1])){
targets[0].chooseToCompare(targets[1]);
}else event.finish();
"step 2"
if(!result.tie){
if(result.bool){
if(targets[0].canUse({name:'sha',isCard:true},targets[1],false)) targets[0].useCard({name:'sha',isCard:true},targets[1]);
}
else if(targets[1].canUse({name:'sha',isCard:true},targets[0],false)){
targets[1].useCard({name:'sha',isCard:true},targets[0]);
}
}
},
            },
            "GXS_biyue":{
                audio:"ext:RE：英雄杀:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function(){
"step 0"
player.chooseTarget(get.prompt2('GXS_biyue'),function(card,player,target){
return target.countCards('h')<target.maxHp;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(att>2){
return Math.min(5,target.maxHp)-target.countCards('h');
}
return att/3;
});
"step 1"
if(result.bool){
player.logSkill('GXS_biyue',result.targets);
for(var i=0;i<result.targets.length;i++){
result.targets[i].drawTo(result.targets[i].maxHp);
}
}
},
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target,current){
if(get.tag(card,'damage')&&target.hp>1){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
var max=0;
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(get.attitude(target,players[i])>0){
max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
}
}
switch(max){
case 0:return 2;
case 1:return 1.5;
case 2:return [1,2];
default:return [0,max];
}
}
if((card.name=='tao'||card.name=='caoyao')&&
target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
},
                    },
                },
            },
            "GXS_yaoyi":{
            audio:"ext:RE：英雄杀:2",
                trigger:{
                    player:"damageAfter",
                },
                filter:function(event,player){
return game.countPlayer(function(current){
return current.isDamaged();
});
},
                content:function(){
"step 0"
player.draw(game.countPlayer(function(current){
return current.isDamaged();
}));
},
            },
            "GXS_ygjujian":{
            audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                group:["GXS_ygjujian_clear","GXS_ygjujian_exc"],
                filterCard:true,
                position:"he",              
                lose:false,
                discard:false,
                delay:0,
                init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                check:function(card){
                return card.name=="shandian"
                },
                filterTarget:function(card,player,target){
return player!=target&&!player.storage.GXS_ygjujian.contains(target);
},
                filter:function(event,player){
return player.countCards("he");
},
                content:function(){
"step 0"
target.gain(cards,player,'giveAuto');
"step 1"
player.storage.GXS_ygjujian.add(target);
},
ai:{
order:2,
result:{
player:2,
target:-2,
},
},
                subSkill:{
                    clear:{
                    audio:"ext:RE：英雄杀:2",
                    forced:true,
                    locked:true,
                    charlotte:true,
                        trigger:{                            player:"phaseBegin",
                        },                     
                        charlotte:true,
                        content:function(){
player.storage.GXS_ygjujian=[];
},
                        sub:true,
                    },
                    exc:{
                    audio:"ext:RE：英雄杀:2",
                    forced:true,
                    locked:true,
                    charlotte:true,
                        trigger:{                           target:"useCardToTargeted",
                        },
                        forced:true,
                        filter:function(event,player){
if(player.storage.GXS_ygjujian.contains(event.player)&&get.type(event.card,'trick')=='trick') return true;
return false;
},
                        content:function(){
trigger.getParent().excluded.add(player);
},
                        sub:true,
                    },
                },
            },
            "GXS_dudiao":{
                           
            audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
return player.countCards("h");
},
                check:function(){
return 1
},
                filterCard:true,
                lose:false,
                discard:false,
                content:function(){
"step 0"
player.showCards(cards);
"step 1"
var suit=get.suit(cards[0]);
player.storage.GXS_dudiao_buff=suit;
player.addTempSkill("GXS_dudiao_buff",{player:"phaseBegin"});
},
ai:{
order:9,
result:{
player:2,
target:0,
},
},
                subSkill:{
                    buff:{
                audio:"ext:RE：英雄杀:2",
                        trigger:{
                            global:["useCard","respond"],
                        },                 
                        forced:true,
                        filter:function(event,player){
if(!player.storage.GXS_dudiao_buff||event.player==player) return false;
if(!['trick','basic'].contains(get.type(event.card))) return false;
var suit=player.storage.GXS_dudiao_buff;
return get.suit(event.card)==suit&&get.position(event.cards[0],true)=='o';
},
                        content:function(){
player.gain(trigger.cards,"gain2");
},
                        sub:true,
                    },
                },
            },
            "GXS_taolve":{
                              
            audio:"ext:RE：英雄杀:2",
            round:1,          
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
                return player!=event.player&&player.countCards("h");
                },
                content:function(){
"step 0"
var x=player.countCards("h");
if(x>0){
event.cards=get.cards(x);
var dialog=['请选择要交换的手牌和牌堆顶的牌，或点「取消」','<div class="text center">牌堆顶</div>',event.cards,'<div class="text center">手牌区</div>',player.getCards('h')];
var next=player.chooseButton(dialog);
next.set('filterButton',function(button){
var ss=event.cards;
var hs=_status.event.player.getCards('h');
var sn=0;
var hn=0;
var ub=ui.selected.buttons;
for(var i=0;i<ub.length;i++){
if(ss.contains(ub[i].link)) sn++;
else hn++;
}
return !(sn>=hs.length&&ss.contains(button.link)||hn>=ss.length&&hs.contains(button.link));
});
next.set('selectButton',function(){
if(ui.selected.buttons.length==0) return 2;
var ss=event.cards;
var hs=_status.event.player.getCards('h');
var sn=0;
var hn=0;
var ub=ui.selected.buttons;
for(var i=0;i<ub.length;i++){
if(ss.contains(ub[i].link)) sn++;
else hn++;
}
if(sn!=hn) return 2*Math.max(sn,hn);
else{
if(sn==ss.length||hn==hs.length||sn==hs.length||hn==ss.length) return ub.length;
return [ub.length,ub.length+1];
}
});
next.set('ai',function(button){
return false;
});
}else event.goto(2);
"step 1"
if(result.bool){
var gains=[];
var pushs=[];
for(var i=0;i<result.links.length;i++){
var card=result.links[i];
if(event.cards.contains(card)) gains.push(card);
else pushs.push(card);
}
player.lose(pushs,ui.special);
player.gain(gains,'gain2','log');
event.cards.addArray(pushs);
event.cards.removeArray(gains);
}
"step 2"
player.chooseButton(event.cards.length,['【韬略】：按顺序将卡牌置于牌堆顶（先选择的在上）',event.cards]).set('ai',function(button){
var value=get.value(button.link);
if(_status.event.reverse) return value;
return -value;
}).set('reverse',_status.currentPhase?get.attitude(player,_status.currentPhase)>0:false);
"step 3"
player.logSkill("GXS_taolve");
if(result.bool){
var cards=result.links.slice(0);
while(cards.length){
var card=cards.pop();
card.fix();
ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
}
}else{
for(var i=event.cards.length-1;i>=0;i--){
event.cards[i].fix();
ui.cardPile.insertBefore(event.cards[i],ui.cardPile.childNodes[0]);
}
}
game.updateRoundNumber();
},
            },
            "GXS_pojun":{
            audio:"ext:RE：英雄杀:2",
                shaRelated:true,
                usable:1,
                trigger:{
                player:"useCardToPlayered",
                },
                filter:function(event,player){
if(event.card.name!='sha'||event.target.countDiscardableCards(player,'he')<=0||!player.isPhaseUsing()) return false;
return player.getHistory("useCard",function(evt){
return evt.card.name=="sha"&&evt.isPhaseUsing()&&evt!=event.getParent();
}).length==0;
},
                direct:true,
                content:function(){
'step 0'
player.discardPlayerCard(trigger.target,get.prompt('GXS_pojun',trigger.target)).set('logSkill',['GXS_pojun',trigger.target]).set('att',get.attitude(player,trigger.target)<=0);
},
            },
            "GXS_zhubei":{
                audio:"ext:RE：英雄杀:2",
                usable:1,
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
return event.player!=player&&_status.currentPhase==player;
},
                content:function(){
player.addTempSkill("GXS_zhubei_buff");
},
                subSkill:{
                    buff:{
                        mod:{
                            cardUsable:function(card,player,num){
if(card.name=='sha') return num+2;
},
                        },
                        sub:true,
                    },
                },
            },
            "GXS_yushuai":{
                audio:"ext:RE：英雄杀:2",
                usable:1,
                trigger:{
                    player:"phaseDrawBegin2",
                },
                direct:true,
                filter:function(event,player){
return !event.numFixed&&game.hasPlayer(function(e){
return e.sex=="female";
});
},
                content:function(){
"step 0"
event.targets=game.filterPlayer(function(target){
return target.sex=="female";
});
player.logSkill("GXS_yushuai",event.targets);
"step 1"
var target=event.targets.shift();
event.target=target;
if(target.isAlive()&&target.countCards("h")){
target.chooseCard('he','是否交给'+get.translation(player)+'一张牌？',
'若如此做'+get.translation(player)+'本阶段多摸2张牌').set('ai',function(card){
if(_status.event.goon) return 7-get.value(card);
return 0;
}).set('goon',get.attitude(target,player)>1);
}
"step 2"
if(result.bool){
event.target.give(result.cards,player,true);
trigger.num+=2;
event.finish();
}else if(event.targets.length>0) event.goto(1);
},
            },
            "GXS_zhiheng":{
			audio:"ext:RE：英雄杀:2",
			
				enable:'phaseUse',
				usable:1,
				multitarget:true,
				audio:2,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var num=target.countCards('h');
					if(ui.selected.targets.length){
						return num<ui.selected.targets[0].countCards('h');
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(num>players[i].countCards('h')) return true;
					}
					return false;
				},
				selectTarget:2,
				content:function(){
					'step 0'
					var gainner,giver;
					if(targets[0].countCards('h')<targets[1].countCards('h')){
						gainner=targets[0];
						giver=targets[1];
					}
					else{
						gainner=targets[1];
						giver=targets[0];
					}
					giver.chooseCard('选择一张手牌交给'+get.translation(gainner),true);
					event.gainner=gainner;
					event.giver=giver;
					'step 1'
					var card=result.cards[0];
					event.gainner.gain(card,event.giver,'giveAuto');
					'step 2'
					if(event.gainner.countCards('h')==event.giver.countCards('h')){
						player.chooseDrawRecover(true);
					}
				},
				ai:{
					order:10.5,
					threaten:1.6,
					result:{
						target:function(player,target){
							var num=target.countCards('h');
							var att=get.attitude(player,target);
							if(ui.selected.targets.length==0){
								if(att>0) return -1;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									var num2=players[i].countCards('h');
									var att2=get.attitude(player,players[i]);
									if(att2>=0&&num2<num) return -1;
								}
								return 0;
							}
							else{
								return 1;
							}
						},
						player:0.1
					}
				}
			},
			"GXS_beixi":{
                audio:"ext:RE：英雄杀:2",
                
                trigger:{
                    global:"useCard",
                },
                direct:true,
                filter:function(event,player){
return event.card.name=="sha"&&event.player.isAlive()&&event.player!=player&&event.player.countCards('h')<=3&&
lib.filter.targetEnabled({name:'sha'},player,event.player)&&(player.hasSha()||_status.connectMode&&player.countCards('h')>0);
},
                content:function(){
player.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'背袭：是否对'+get.translation(trigger.player)+'使用一张杀？').set('logSkill','GXS_beixi').set('complexSelect',true).set('filterTarget',function(card,player,target){
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.targetEnabled.apply(this,arguments);
}).set('sourcex',trigger.player);
},
            },
            "GXS_yuefa":{
                audio:"ext:RE：英雄杀:2",
               
                trigger:{
                  global:"useCardToPlayered",
                },
                filter:function(event,player){
if(event.getParent().triggeredTargets3.length>1) return false;
if(get.type(event.card)!='trick') return false;
if(get.info(event.card).multitarget) return false;
if(event.targets.length<2) return false;
return true;
},
                init:function(player){
player.storage.fenwei=false;
},
                direct:true,
                content:function(){
"step 0"
player.chooseTarget("【约法】：选择至多3个目标令"+get.translation(trigger.card)+"对这些目标无效。",
[1,Math.min(3,trigger.targets.length)],function(card,player,target){
return _status.event.targets.contains(target);
}).set('ai',function(target){
var trigger=_status.event.getTrigger();
return -get.effect(target,trigger.card,trigger.player,_status.event.player);
}).set('targets',trigger.targets);
"step 1"
if(result.bool){
player.logSkill('GXS_yuefa',result.targets);
trigger.getParent().excluded.addArray(result.targets);
game.delay();
}
},
            },
            "GXS_yunliang":{
			  audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                selectCard:1,
                filterCard:true,
                position:"he",
                selectTarget:1,
                filterTarget:true,
                filter:function(event,player){
return player.countCards("he");
},
                content:function(){
target.draw(2);
},
            },
            "GXS_guyong":{
                audio:"ext:RE：英雄杀:2",
                enable:["chooseToRespond","chooseToUse"],
                round:1,
                filter:function(event,player){
if(!_status.currentPhase||event.guyong) return false;
if(!event.filterCard({name:'shan',isCard:true},player,event)) return false;
if(event.name!='chooseToUse'&&!lib.filter.cardRespondable({name:'shan',isCard:true},player,event)) return false;
return true;
},
                delay:false,
                content:function(){
'step 0'
var targets=game.filterPlayer(function(current){
return current.isMaxHandcard();
})
if(targets.length==1){
event.onlytarget=targets[0];
}
else if(targets.length){
player.chooseTarget('选择一名角色弃置其一张牌',true,function(card,player,target){
return _status.event.targets.contains(target);
}).set('ai',function(target){
return -get.attitude(_status.event.player,target);
}).set('targets',targets);
}
else{
event.finish();
}
'step 1'
var evt=event.getParent(2);
var target;
if(event.onlytarget){
target=event.onlytarget;
}
else if(result.targets&&result.targets.length){
target=result.targets[0];
}
if(target){
player.line(target,'green');
player.discardPlayerCard(target,'he',true);
}
else{
evt.set('guyong',true);
evt.goto(0);
event.finish();
}
"step 2"
var evt=event.getParent(2);
if(result.bool){
if(get.type(result.cards[0])=="basic"){
evt.result={bool:true,card:{name:'shan',isCard:true},cards:[]};
evt.redo();
}else{
evt.set('guyong',true);
evt.goto(0);
}
}
},
                ai:{
                    respondShan:true,
                    effect:{
                        target:function(card,player,target,current){
if(get.tag(card,'respondShan')&&current<0){
var nh=player.countCards('h');
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].countCards('h')>nh) return 0.4;
}
}
},
                    },
                    order:8,
                    result:{
                        player:function(player){
return 1;
},
                    },
                },
                group:["GXS_guyong_roundcount"],
            },
            "GXS_huzhu":{
                audio:"ext:RE：英雄杀:2", 
                trigger:{
                    global:"useCardToTargeted",
                },
                filter:function(event,player){
                if(event.player==player||event.card.name!="sha") return false;
                return event.target!=player&&event.target.hp==1;
                },
                check:function (event,player){
                return get.attitude(player,event.target)>0;
                },
                content:function(){
                "step 0"
                trigger.targets.length=0;
                trigger.getParent().triggeredTargets1.length=0;
                "step 1"
                trigger.getParent().targets.push(player);
                },
                ai:{
                    threaten:1.1,
                    expose:0.25,
                },
            },
             'GXS_lumang':{
             audio:"ext:RE：英雄杀:2",
       filter:function (event,player){
       if(event.targets.length>1) return false;
        return event.player!=player&&event.card&&(get.type(event.card)=='trick'||get.type(event.card)=='delay');
    },
       logTarget:"player",
    check:function (event,player){
        if(get.attitude(player,event.player)>0){
            return false;
        }
        else if(event.card.name=='shunshou'&&player.hp>0){
            return true;
        }
        return false;
    },
    priority:10,
    trigger:{
        target:"useCardToBefore",
    },
    content:function (){
        trigger.cancel();
        player.useCard({name:'juedou'},_status.currentPhase);
    },
    ai:{
        expose:0.3,
    },
},
         'GXS_yongchuang':{
         audio:"ext:RE：英雄杀:2",
          enable:"chooseToRespond",
          filterCard:true,
          viewAs:{
         name:"sha",
         },
    viewAsFilter:function (player){
        if(!player.countCards('he')) return false;
    },
    prompt:"将一张牌当杀打出",
    ai:{
respondSha:true,
}
},
        'GXS_baotou':{
  audio:"ext:RE：英雄杀:4",
    trigger:{
        player:"shaBegin",
    },
    forced:true,
    logTarget:"target",
    content:function (){
        trigger.directHit=true;
    },
},
               "GXS_feijiang":{
                audio:"ext:RE：英雄杀:2",
                shaRelated:true,
                frequent:true,
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
return event.card.name=='sha';
},
                content:function(){
"step 0"
player.judge(function(card){
return 2;
});
"step 1"
if(result.color=="black"){
trigger.directHit.addArray(game.filterPlayer());
}else{
if(get.position(result.card,true)=='d') player.gain(result.card,"gain2");
};
},
            },
            "GXS_shanshe":{
                mod:{
                    attackFrom:function(from,to,distance){
var range=0;
var equips=from.getCards('e',function(card){
return !ui.selected.cards||!ui.selected.cards.contains(card);
});
for(var i=0;i<equips.length;i++){
var info=get.info(equips[i]).distance;
if(!info) continue;
if(info.attackFrom){
range+=info.attackFrom;
};
};
var num=2;
if(range<0) num+=range;
if(num>0) return distance-num;
},
                },
            },
            "GXS_shouli":{
                audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:2,
                discard:false,
                lose:false,
                delay:0,
                filterTarget:function(card,player,target){
return player!=target;
},
                content:function(){
"step 0"
target.gain(cards,player,'giveAuto');
"step 1"
player.draw();
},
            },
            "GXS_chongru":{
                audio:"ext:RE：英雄杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
return player.countCards("he");
},
                filterTarget:function(card,player,target){
return player!=target&&target.countCards("he");
},
                content:function(){
"step 0"
target.chooseCard("请展示一张牌","he",true);
"step 1"
if(result.cards){
target.showCards(result.cards);
event.color1=get.color(result.cards[0]);
}else event.finish();
"step 2"
player.chooseCard("请展示一张牌","he",true);
"step 3"
if(result.cards){
player.showCards(result.cards);
event.color2=get.color(result.cards[0]);
}else event.finish();
"step 4"
if(event.color1==event.color2){
if(player.isDamaged()) player.recover();
game.asyncDraw([player,target]);
}else{
player.discardPlayerCard(target,'he',true);
};
},
ai:{
order:9,
result:{
player:2,
target:0,
},
},
            },
            "GXS_zhuding":{
            audio:2,
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function(event,player){
return player.countCards("he",{color:"black"});
},
                content:function(){
"step 0"
player.chooseCardTarget({
position:'he',
filterCard:function(card){
if(get.color(card)!="black") return false;
return lib.filter.cardDiscardable.apply(this,arguments);
},
filterTarget:function(card,player,target){
return target.countMark("GXS_zhuding_buff")<5;
},
ai1:function(card){
return 1;
},
ai2:function(target){
return get.attitude(_status.event.player,target);
},
prompt:get.prompt('GXS_zhuding'),
prompt2:'你可以弃置一张黑色牌，令一名角色获得一枚“鼎”(每名角色至多拥有5枚)',
});
"step 1"
if(result.bool){
var target=result.targets[0];
player.logSkill(event.name,target);
player.discard(result.cards);
target.addSkill("GXS_zhuding_buff");
target.addMark("GXS_zhuding_buff");
};
},
ai:{
order:9,
result:{
player:3,
target:0,
},
},
                subSkill:{
                    buff:{
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        filter:function(event,player){
return player.hasMark("GXS_zhuding_buff");
},
                        forced:true,
                        charlotte:true,
                        content:function(){
trigger.num+=player.countMark("GXS_zhuding_buff");
},
                        marktext:"鼎",
                        intro:{
                            name:"铸鼎",
                            "name2":"鼎",
                            content:"当前有#个“鼎”",
                        },
                        sub:true,
                    },
                },
            },
            "GXS_zhishui":{
            audio:2,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
return event.player.countCards("h")>=3;
},
                direct:true,
                content:function(){
"step 0"
if(!trigger.player.hasMark("GXS_zhuding_buff")){
if(trigger.player!=player) player.discardPlayerCard(trigger.player,'he').set('logSkill',["GXS_zhishui",trigger.player]);
}else{
if(trigger.player.countMark("GXS_zhuding_buff")<5){
player.logSkill("GXS_zhishui",trigger.player);
trigger.player.addMark("GXS_zhuding_buff");
};
};
},
            },
            "GXS_haoling":{
            audio:2,
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
return event.card&&event.card.name=="sha"&&_status.currentPhase==player&&game.countPlayer()>2;
},
                usable:1,
                direct:true,
                content:function(){
"step 0"
player.chooseTarget(get.prompt2('GXS_haoling'),function(card,player,target){
var targets=_status.event.targets;
var bool=game.hasPlayer(function(x){
return targets.contains(x)&&target!=x&&target.canUse("sha",x);
});
return player!=target&&bool;
}).set('targets',trigger.targets);
"step 1"
if(result.bool){
event.target=result.targets[0];
var target=event.target;
var str=trigger.targets.length>1?"中的至少一名角色":"";
player.logSkill("GXS_haoling",target);
target.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'号令：是否对'+get.translation(trigger.targets)+str+'使用一张【杀】并摸一张牌？').set('complexSelect',true).set('filterTarget',function(card,player,target){
var targets=_status.event.targets;
if(!targets.contains(target)&&!game.hasPlayer(function(x){
return targets.contains(x)&&ui.selected.targets.contains(x);
})) return false;
return lib.filter.targetEnabled.apply(this,arguments);
}).set('targets',trigger.targets);
}else{
player.storage.counttrigger.GXS_haoling--;
event.finish();
};
"step 2"
if(result.bool) event.target.draw();
},
            },
            "GXS_zhengzhao":{
            audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
return target!=player&&target.countCards("h");
},
                content:function(){
"step 0"
game.me.chooseCardOL([player,target],"选择一张手牌交换",true);
"step 1"
player.swapHandcards(target,result[0].cards,result[1].cards);
"step 2"
player.chooseBool("是否令"+get.translation(target)+"获得一张【杀】？");
"step 3"
if(result.bool){
var card=get.cardPile(function(card){
return card.name=='sha';
});
if(card){
target.gain(card,'gain2');
}else player.chat("TMD怎么连杀都没有了");
};
},
            },
            'GXS_quancai':{
audio:"ext:RE：英雄杀:2",
enable:"phaseUse",
filter:function(event,player){
var wuzhong=(player.countCards("h",{color:"red"})>=2&&player.hasUseTarget("wuzhong")&&!player.hasSkill('GXS_quancai_wuzhong'));
var shunshou=(player.countCards("h",{color:"black"})>=2&&player.hasUseTarget("shunshou")&&!player.hasSkill('GXS_quancai_shunshou'));
var juedou=(player.countCards("h",{color:"red"})&&player.countCards("h",{color:"black"})&&player.hasUseTarget("juedou")&&!player.hasSkill('GXS_quancai_juedou'));
return wuzhong||shunshou||juedou;
},
selectCard:2,
complexCard:true,
filterCard:function(card,player){
var cards=ui.selected.cards;
if(!cards||cards.length==0) return true;
if(!player.hasSkill('GXS_quancai_wuzhong')&&get.color(cards[0])=="red"&&get.color(card)=="red") return true;
if(!player.hasSkill('GXS_quancai_shunshou')&&get.color(cards[0])=="black"&&get.color(card)=="black") return true;
if(!player.hasSkill('GXS_quancai_juedou')&&get.color(card)!=get.color(cards[0])) return true;
},
viewAs:function(cards,player){
var name=false;
if(cards.length!=2) return null;
switch(get.color(cards,player)){
case 'red':name='wuzhong';break;
case 'black':name='shunshou';break;
case 'none':name='juedou';break;
};
if(name) return {name:name};
return null;
},
precontent:function(){
var name=get.name(event.result.card);
player.addTempSkill('GXS_quancai_'+name,{player:"phaseUseEnd"});
},
check:function(card){
        return 6-get.value(card);
    },
    ai:{
        basic:{
            order:8.9,
            useful:1,
            value:5,
        },
           result:{
            target:2,
        },
    },
subSkill:{
wuzhong:{charlotte:true},
shunshou:{charlotte:true},
juedou:{charlotte:true},
},
},        
            "GXS_shiyong":{
            audio:"ext:RE：英雄杀:2",
            trigger:{
        player:"useCard",
    },
    frequent:true,
    usable:2,
    preHidden:true,
    filter:function(event){
        return event.card&&!event.card.isCard;
    },
    content:function(){
        player.draw();
    },
   },
   'GXS_myyoumie':{
   audio:"ext:RE：英雄杀:2",
   enable:"phaseUse",
    filter:function(event,player){
        return player.countCards('h',{suit:"spade"})>0&&game.hasPlayer(function(current){
        return current.sex=="male"
        });
    },
    filterTarget:function(card,player,target){
        return player!=target&&target.sex=="male";
    },
    filterCard:function(card){
    return get.suit(card)=="spade";
    },
    check:function(card){
        return 8-get.value(card);
    },
    discard:false,
    delay:false,
    content:function(){
    target.gain(cards[0],player,'give');
    target.addTempSkill("baiban");
    player.useCard({ name: 'sha' }, target, false);
    },
    ai:{
        order:9,
        result:{
            target:function(player,target){
                return get.effect(target,{name:'sha'},player,target);
            },
        },
        threaten:2,
    },
   },
   'GXS_myzhangquan':{
   audio:"ext:RE：英雄杀:2",
     trigger:{
        player:"damageEnd",
    },
    frequent:true,
    check:function(){
    return 1;
    },
    filter:function(event,player){
    return event.num>0&&event.source;
    },
    content:function(){
    "step 0"
    trigger.source.chooseToDiscard('h',get.prompt('GXS_myzhangquan'),'弃置一张手牌，否则'+get.translation(player)+'恢复一点体力').ai=function(card){
				var att=get.attitude(trigger.source,player);
			    if(att<0) return 8-ai.get.value(card);
			    return 0;
       }; 
    "step 1"
    if (result.bool){
    event.finish();
    }else{
    player.recover();
    }
    }
   },
   'GXS_qingji':{
   mod:{
        globalFrom:function(from,to,distance){
            if(_status.currentPhase==from){
                return distance-from.storage.GXS_qingji;
            }
        },
   },
   init:function(player){
        player.storage.GXS_qingji=0;
    },
    enable:"phaseUse",
    filterCard:true,
    position:"he",
    check:function(card){
   return 7-get.value(card);
   },
    filter:function(trigger,player){
        return game.hasPlayer(function(current){
            return get.distance(player,current)>1;
        });
    },
    content:function(){
    player.addTempSkill('GXS_qingji_xltq');
    player.storage.GXS_qingji++;
    },
    ai:{
        order:9,
        result:{
            player:function(player,target){
                return player.countCards('he')>=2&&game.countPlayer(function (target){
                return get.effect(target,{name:'sha'},player,target)&&get.distance(player,target)>1&&target.countCards('e',function(card){
			return card.name=='tengjia';
	             })==0;
                });
            },
        },
        threaten:0.8,
    },
  },
  'GXS_qingji_xltq':{
  onremove:function(player){
  delete player.storage.GXS_qingji;
  }
  },
   'GXS_xiaoji':{
   enable:"phaseUse",
   usable:1,
   selectTarget:function(){
                return [1,game.players.length-1];
   },
   filterCard:true,
   check:function(card){
   return 9-get.value(card);
   },
   filterTarget:function(card,player,target){
         return target!=player&&player.canUse({name:'sha'},target);
    },
    filter:function(trigger,player){
        return !game.hasPlayer(function(current){
            return get.distance(player,current)>1;
        });
    },
    content:function(){
    player.useCard({ name: 'sha' }, target, false);
    },
    ai:{
        order:9,
        result:{
            target:function(player,target){
                return get.effect(target,{name:'sha'},player,target);
            },
        },
        threaten:1.1,
    },
  },
  'GXS_jiandao':{
    audio:2,
    trigger:{
        player:"useCardToPlayered",
    },
    forced:true,
    logTarget:function(event){
        return event.parent.GXS_jiandao_targets.filter(function(target){
            return event.targets.contains(target);
        });
    },
    filter:function(event,player){
        if(event.card.name!='sha'||!event.isFirstTarget) return false;
        return event.parent.GXS_jiandao_targets!=undefined&&event.parent.GXS_jiandao_targets.length;
    },
    check:function(event,player){
        var targets=event.parent.GXS_jiandao_targets.filter(function(target){
            return event.targets.contains(target);
        }),att=0;
        for(var i of targets){
            att+=get.attitude(player,i);
        }
        return att<0;
    },
    content:function(){
        'step 0'
        event.targets=trigger.parent.GXS_jiandao_targets.filter(function(target){
            return trigger.targets.contains(target);
        });
        event.num=0;
        if (!player.storage.GXS_jiandaolist) player.storage.GXS_jiandaolist=[];
        if (event.targets.length==0){
        player.storage.GXS_jiandaolist=[];
        event.finish();
        }
        'step 1'
        var target=targets[num];
        if (player.storage.GXS_jiandaolist.length){
        var list=[];
        for (var j of player.storage.GXS_jiandaolist) list.push(j[0]);
        if (list.contains(target)){
        for (var i of player.storage.GXS_jiandaolist){
        if (i[0]==target) i[1]++;
        }
        }else player.storage.GXS_jiandaolist.add([target,1]);
        }else player.storage.GXS_jiandaolist.add([target,1]);
        'step 2'
        event.num++;
        if(event.num<targets.length) event.goto(1);
        else{
        for (var k of player.storage.GXS_jiandaolist){
         if (k[1]==3) lib.element.player.die.apply(k[0],[]);
          }
        }
    },
    group:"GXS_jiandao_count",
    subSkill:{
        count:{
            trigger:{
                player:"useCard1",
            },
            silent:true,
            firstDo:true,
            filter:function(event,player){
                return event.card&&event.card.name=='sha';
            },
            content:function(){
                if(player.storage.GXS_jiandao) trigger.GXS_jiandao_targets=player.storage.GXS_jiandao;
                player.storage.GXS_jiandao=trigger.targets;
            },
            sub:true,
            forced:true,
            popup:false,
        },
    },
},
   'GXS_shoujian':{
   audio:"ext:RE：英雄杀:2",
   enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:function (card){
				return get.type(card)=='equip';
				},
				selectCard:true,
				filterTarget:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				selectTarget:1,
				complexSelect:true,
				check:function(card){
					return 9-get.value(card);
	},
	content:function(){
   if (!target.hasSkill('GXS_shoujianbuff'))target.addSkill('GXS_shoujianbuff');
   target.addMark('GXS_shoujianbuff',1,false);
   var card=get.cardPile2(function(cardx){
		return get.name(cardx,'trick')=='sha';
	});
   if(card) target.gain(card,'log','gain2');
   },   
    ai:{
        order:9,
        result:{
            target:1,
        },
        threaten:1.1,
    },
   },
   'GXS_shoujianbuff':{
   charlotte:true,
   onremove:true,
   intro:{content:'出杀次数+#'},
   mod:{
        cardUsable:function(card,player,num){
            if(card.name=='sha') return num+player.countMark('GXS_shoujianbuff');
        },
    },
   },
   'GXS_jianji':{
   audio:"ext:RE：英雄杀:2",
   inherit:'hanbing_skill'
   },
   'GXS_quyong':{
   audio:"ext:RE：英雄杀:2",
   enable:'phaseUse',
   usable:1,
   content:function(){
   'step 0'
   var card=get.cardPile2(function(cardx){
		return get.color(cardx,'trick')=='black';
	});
   if(card) player.gain(card,'log','gain2');
   player.chooseTarget('请选择任意名有手牌的其他角色，获得这些角色的各一张牌。',[1,game.players.length-1],function(card,player,target){
		return target!=player&&target.countCards('h')>0;
  }).set('ai',function(target){
		return -get.attitude(_status.event.player,target)+0.5;
	});
	'step 1'
	if(result.bool&&result.targets){
	player.line(result.targets,'green');
	event.targets=result.targets;
	event.targets.sort(lib.sort.seat);
	}
	else{
		event.finish();
	}
	'step 2'
	if(player.isAlive()&&event.targets.length){
	for (var i of event.targets) player.gainPlayerCard(i,'h',true);
	}
	else event.finish();
	'step 3'
	if(event.targets&&event.targets.length){
	event.target=event.targets.shift();
	if (event.target.isAlive()){
	player.chooseCard('选择还给'+get.translation(event.target)+'的牌',true,'he').ai=function(card){ 
            if (get.attitude(_status.event.player,event.target)>=0) return 7-get.value(card);
            return 13-get.value(card);
        } 		
	  }else if(event.targets.length){
	  event.redo();
	  }			
	}
	'step 4'
	if(result.bool){
	event.target.gain(result.cards,player,'giveAuto');
	}
	if(event.targets.length) event.goto(3);
   },
   ai:{
        order:9,
        result:{
            player:1,
        },
        threaten:1.1,
    },
   },
   'GXS_quanxue':{
   audio:"ext:RE：英雄杀:2",
   enable:'phaseUse',
   usable:1,
   filterTarget:lib.filter.notMe,
   content:function(){
   target.draw();
   target.addTempSkill('GXS_quanxueffect',{player:'phaseJieshuBegin'});
   if(!target.storage.GXS_quanxueffect) target.storage.GXS_quanxueffect=[];
   target.storage.GXS_quanxueffect.push(player);
   },
   ai:{
        order:5,
        result:{
            target:function(player,target){
            if (target.hasSkill('GXS_quanxueffect')) return 0;
             if (player.hp>1) return -target.countCards('h');
             return -1;
            },
        },
        threaten:1.1,
    },
   },
   'GXS_quanxueffect':{
   charlotte:true,
   mark:true,
   onremove:function (player){
   delete player.storage.GXS_quanxueffect;
   },
   intro:{content:'不能对$使用杀'},
   mod:{
        playerEnabled:function (card,player,target){
            if(card.name=='sha'&&(player.storage.GXS_quanxueffect&&player.storage.GXS_quanxueffect.contains(target))) return false;
        },
    },
   },
   'GXS_vxyoushui':{
   audio:"ext:RE：英雄杀:2",
   enable:'phaseUse',
   usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				selectTarget:[1,2],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					player.chooseToCompare(targets).callback=lib.skill.GXS_vxyoushui.callback;
				},
				callback:function(){
					if(event.num1<event.num2){
					target.draw();
					}else if(event.num1>event.num2) player.draw();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var num=ui.selected.targets.length+1;
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=6){
									switch(hs[i].number){
										case 13:return -1;
										case 12:return -1;break;
										case 11:return -1;break;
										default:if(hs[i].number>8) return -1;
									}
								}
							}
							return 0;
						},
					}
				},
   },
   'GXS_lianheng':{
   audio:"ext:RE：英雄杀:1",
   trigger:{
                player:["chooseToCompareAfter","compareMultipleAfter"],
                target:["chooseToCompareAfter","compareMultipleAfter"],
            },
            round:1,
            filter:function(event,player){
                if(event.preserve) return false;
                return [event.card1,event.card2].filterInD('od').length>0;
            },
            "prompt2":function(event,player){
                return '是否令一名其他角色获得'+get.translation([event.card1,event.card2].filterInD('od'));
            },
            content:function(){
                'step 0'
                player.gain([trigger.card1,trigger.card2].filterInD('od'),'gain2','log');
                event.cards=[trigger.card1,trigger.card2].filterInD('od');
                player.chooseCardTarget({
						filterCard:function(card){
                return event.cards.contains(card);
            },
						filterTarget:lib.filter.notMe,
						selectCard:1,
						forced:true,
						prompt:'请选择要获得卡牌及其目标',
						ai1:function(card){
							if(!ui.selected.cards.length) return 1;
							return 0;
						},
						ai2:function(target){
							var player=_status.event.player,card=ui.selected.cards[0];
							var val=target.getUseValue(card);
							if(val>0) return val*get.attitude(player,target)*2;
							return get.value(card,target)*get.attitude(player,target);
						},
					});
					'step 1'
					if(result.bool){
				    var res=result.cards,target=result.targets[0];
				    event.cards.remove(res);
                    target.gain(res,'gain2','log');
                    player.discard(event.cards)._triggered=null;
                     }
            },
   },
   'GXS_xuezhan':{
   trigger:{
        player:"dying",
    },
    audio:true,
    filter:function(event,player){
        return player.hp<=0;
    },
    check:function(player){
    return 1;
    },
    content:function(){
        'step 0'
		player.judge(function(card){
			return get.suit(card)!='diamond'?1:-1;
		});
		'step 1'
		if(result.bool){
		 player.recover();		 
		}else event.finish();
		'step 2'
		if(player.hp<=0) event.goto(0);
    },
    ai:{
		save:true,
        threaten:1.4,
    },
  },
   //——————————公共状态(不叠加)——————//
        "GXSnotrick":{
				mark:true,
				marktext:"锦",
				intro:{
					name:'Banned',
					content:'不能使用锦囊牌',
				},
				mod:{
					cardEnabled:function(card){
						if(get.type(card,'trick')=='trick') return false;
					}
				}
			},
        //——————————游戏、主公设定——————//
        _GXS_dieAudio:{
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return player.name.indexOf('GXS_')>=0;
                },
                content:function (){
                game.playAudio("../extension/RE：英雄杀/",player.name);
                },
            },              				
         '_GXS_zhuskill':{
                  trigger:{
                     global:'gameStart'
                  },
                  forced:true,
                  filter:function (event,player){
                    return player.name.indexOf('GXS_')>=0&&player.identity=='zhu';
                },
                  content:function(){
                      if(player.group=='GXS_jun'){player.addSkill('GXS_xingshi')};
                      if(player.group=='GXS_chen'){player.addSkill('GXS_huwei')};
                      if(player.group=='GXS_min'){player.addSkill('GXS_zhenzai')}
                          }
               },
            GXS_xingshi:{
				unique:true,
				group:['GXS_xingshi1','GXS_xingshi2'],
				zhuSkill:true,
			},
			GXS_xingshi1:{
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.GXS_xingshiing) return false;
					if(!player.hasZhuSkill('GXS_xingshi')) return false;
					if(event.filterCard({name:'sha'},player,event)==false) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='GXS_chen';
					});
				},
				content:function(){
					"step 0"
					game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_xingshi":"nan_xingshi"));
					"step 1"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						event.finish();
					}
					else if(event.current.group=='GXS_chen'){
						player.storage.GXS_xingshiing=true;
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
						next.set('ai',function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set('source',player);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 2"
					player.storage.GXS_xingshiing=false;
					if(result.bool){
						event.finish();
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(1);
					}
				}
			},
			GXS_xingshi2:{
				enable:'chooseToUse',
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
					if(!player.hasZhuSkill('GXS_xingshi')) return false;
					if(player.hasSkill('GXS_xingshi3')) return false;
					if(!lib.filter.cardUsable({name:'sha'},player)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='GXS_chen';
					});
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=='function'&&
						!_status.event._backup.filterTarget({name:'sha'},player,target)){
						return false;
					}
					return player.canUse({name:'sha'},target);
				},
				content:function(){
					"step 0"
					game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_xingshi":"nan_xingshi"));
					"step 1"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						player.addSkill('GXS_xingshi3');
						event.getParent(2).step=0;
						event.finish();
					}
					else if(event.current.group=='GXS_chen'){
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张杀',
						function(card,player,event){
							event=event||_status.event;
							return card.name=='sha'&&event.source.canUse(card,event.target);
						});
						next.set('ai',function(card){
							var event=_status.event;
							return get.effect(event.target,card,event.source,event.player);
						});
						next.set('source',player);
						next.set('target',target);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 2"
					if(result.bool){
						event.finish();
						if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
							player.useCard(result.cards[0],target).animate=false;
						}
						else{
							player.useCard({name:'sha'},target).animate=false;
						}
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(1);
					}
				},
				ai:{
					result:{
						target:function(player,target){
							if(player.hasSkill('GXS_xingshi3')) return 0;
							return get.effect(target,{name:'sha'},player,target);
						}
					},
					order:function(){
						return get.order({name:'sha'})-0.1;
					},
				}
			},
			GXS_xingshi3:{
				trigger:{global:['useCardAfter','useSkillAfter','phaseAfter']},
				silent:true,
				filter:function(event){
					return event.skill!='GXS_xingshi2'&&event.skill!='qinwang2';
				},
				content:function(){
					player.removeSkill('GXS_xingshi3');
				}
			},
			GXS_huwei:{
				unique:true,
				zhuSkill:true,
				trigger:{player:['chooseToRespondBefore','chooseToUseBefore']},
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.GXS_huweiing) return false;
					if(!player.hasZhuSkill('GXS_huwei')) return false;
					if(!event.filterCard({name:'shan'},player,event)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='GXS_min';
					});
				},
				check:function(event,player){
					if(get.damageEffect(player,event.player,player)>=0) return false;
					return true;
				},
				content:function(){
					"step 0"
					game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_huwei":"nan_huwei"));
					"step 1"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						event.finish();
					}else if(event.current.group=='GXS_min'){
						if((event.current==game.me&&!_status.auto)||(
							get.attitude(event.current,player)>2)||
							event.current.isOnline()){
							player.storage.GXS_huweiing=true;
							var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张闪？',{name:'shan'});
							next.set('ai',function(){
								var event=_status.event;
								return (get.attitude(event.player,event.source)-2);
							});
							next.autochoose=lib.filter.autoRespondShan;
							next.set('source',player);
						}
					}
					"step 2"
					player.storage.GXS_huweiing=false;
					if(result.bool){
						event.finish();
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(1);
					}
				},
			},
			GXS_zhenzai:{
				unique:true,
				trigger:{target:'taoBegin'},
				zhuSkill:true,
				forced:true,
				filter:function(event,player){
					if(event.player==player) return false;
					if(!player.hasZhuSkill('GXS_zhenzai')) return false;
					if(player.hp>0) return false;
					if(event.player.group!='GXS_jun') return false;
					return true;
				},
				content:function(){
					player.recover();
					game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_zhenzai":"nan_zhenzai"));
				}
			},
       
        },
        translate:{
        GXS_xingshi:'兴师',
        GXS_xingshi1:'兴师',
        GXS_xingshi2:'兴师',
        GXS_xingshi3:'兴师',
        GXS_xingshi4:'兴师',
        GXS_xingshi5:'兴师',
        GXS_huwei:'护卫',
        GXS_zhenzai:'赈灾',
        妖:"妖",
        
                   GXSnotrick:"锦囊禁止",
                  GXS_xingshi_info:'主公技，臣势力角色可以帮你使用或打出[杀]',
       			  GXS_huwei_info:'主公技，民势力角色可以替你打出[闪]',
			      GXS_zhenzai_info:'主公技，锁定技，濒死阶段，君势力角色对你使用的[桃]额外回复一点体力',
			'GXS_zhongwu':'忠武',
        	'GXS_zhongwu_info':'每回合你出杀的数量等于1+你已损失的血量，每当你使用一张【杀】，立刻摸一张牌。',
        	'GXS_xiedao':'携刀',
        	'GXS_xiedao_info':'锁定技，你使用的红色杀没有距离限制',
        	'GXS_dyjiasuo':'枷锁', //斯巴达斯克
        	'GXS_dyjiasuo_info':'回合开始阶段，你可以选择跳过本回合出牌阶段，你获得1个【枷锁】标记，每拥有1个枷锁手牌上限加1（标记上限为3）',
        	'GXS_dyzaofan':'造反', //斯巴达斯克
        	'GXS_dyzaofan_info':'出牌阶段，当你出【杀】或【决斗】时，你可以弃掉1个【枷锁】标记，若如此做，该【杀】或【决斗】造成的伤害+1。',
        	'GXS_dytujin':'突进', //赵云
        	'GXS_dytujin2':'突进',
        	'GXS_dytujin_info':'出牌阶段，弃一张手牌，指定一名其他角色，本回合内你与该角色的距离为1',
        	'GXS_dylongdan':'龙胆', //赵云
        	'GXS_dylongdan_info':'指定的角色与你的距离大于1时，此回合内你对该角色使用的【杀】伤害+1',
        	'GXS_zirong':'姿容', //潘安
        	'GXS_zirong_info':'出牌时，可以选择弃掉一张牌，指定一名女性角色，则该女性角色在其回合内该角色对其他角色出【杀】或者【决斗】伤害+1（每回合限用一次）',
        	'GXS_guimian':'鬼面', //兰陵王
        	'GXS_guimian2':'鬼面',
        	'GXS_guimian_info':'只要你对一名角色造成了伤害，本回合可以对其无限出杀',
        	'GXS_dyyuxue':'浴血', //兰陵王
        	'GXS_dyyuxue2':'浴血',
        	'GXS_dyyuxue_info':'每当你对一名角色造成伤害后，立即为其增加一个标记，你的回合结束阶段，当场上同时存在3个或以上标记时，清空所有浴血标记，且所有被标记的角色流失一点血量。',
        	'GXS_liangjiang':'良将', //张辽
        	'GXS_liangjiang_info':'你的【杀】造成伤害时，你可以将该英雄的一张牌（包括判定区）交给任意英雄。',
        	'GXS_dyjujian':'拒谏', //端游杨广
        	'GXS_dyjujian_info':'出牌阶段，当场上有存活【臣】阵营角色时，你可以将一张手牌交给其他角色，则本轮内该角色的锦囊牌对你无效。(每回合限用一次)',
        	'GXS_dyyaoyi':'徭役', //端游杨广
        	'GXS_dyyaoyi_info':'每受到一次伤害，摸取1+场上存活【民】阵营角色数量的牌。(每次摸牌上限为4张)',
        	'GXS_dyshiqin':'弑亲', //端游杨广
        	'GXS_dyshiqin_info':'当你使【君】阵营角色濒死时，该【君】阵营角色立即阵亡。',
        	'GXS_dyzhiba':'制霸', //齐桓公
        	'GXS_dyzhiba_info':'出牌阶段，你可以与其他角色拼点，若你赢，本回合跳过弃牌阶段，若你没赢，你获得对方的拼点牌',
        	'GXS_dycuanquan':'篡权', //宇文化及
        	'GXS_dycuanquan_info':'准备阶段，可选择打出1张手牌，然后进行判定，如果判定牌跟打出的牌花色不同则可选择继续判定，直到判定牌跟打出手牌相同花色为止。所有跟手牌不同的判定牌全部收为手牌。',
        	'GXS_dylongluo':'笼络', //宇文化及
        	'GXS_dylongluo2':'笼络',
        	'GXS_dylongluo_info':'回合结束阶段，你可以选择弃掉x张手牌指定x名角色，则直到你的下个回合开始，这些角色受到的伤害转移给你。',
        	'GXS_dyxiaoyong':'骁勇', //吕布
        	'GXS_dyxiaoyong_info':'你的最后一张手牌是红色杀时，你可以选择三个目标',
        	'GXS_dywushuang':'无双',
       		'GXS_dywushuang_info':'你可以将一张黑色牌当[杀]使用',
        	'GXS_dyxiudao':'修道',  //太平公主
        	'GXS_dyxiudao_info':'当即将受到男性角色的伤害时，你可以弃置一张牌，取消此伤害',
        	'GXS_dyzhenguo':'镇国',
        	'GXS_dyzhenguo_info':'当场上有角色阵亡时，你摸两张牌',
        	"GXS_dyjuma":"拒马",
        	"GXS_dyjuma_info":"你无视其他角色装备的马",
        	'GXS_hongmen':'鸿门', //魂项羽
        	'GXS_hongmen_info':'回合开始阶段，你可以指定除你以外的一名角色，弃置x张牌(x为你失去的血量)',
        	'GXS_guixiong':'鬼雄', //魂项羽
        	'GXS_guixiong_info':'你的黑色手牌可以当做鸩',
        	'GXS_hunpofu':'破釜', //魂项羽
        	'GXS_hunpofu_info':'你的血量不满时，你的决斗和杀伤害＋1',
        	'yxsduji':'毒计', //高俅
        	'yxsduji_info':'出牌时，你可以弃掉一张红色手牌并选择一名英雄，该英雄回合进行判定，判定牌为红色，造成一点伤害',
        	'yxszhuanquan':'专权', //高俅
        	'yxszhuanquan_info':'锁定技，你没有装备防具时，你不是黑色【杀】的合法目标',
        	'GXS_dybuwu':'布武', //织田信长野望
        	'GXS_dybuwu2':'布武',
        	'GXS_dybuwu_info':'回合结束阶段，你可以指定除你外的任意两名角色，本轮内被指定角色在其出牌阶段内使用【杀】时，你可以弃掉1张手牌，令该角色可多使用1张【杀】，且若此【杀】为红色，你从牌堆摸1张牌',
        	'GXS_dyyewang':'野望',  //织田信长野望
        	'GXS_dyyewang_info':'你所有的杀造成的伤害，均为血量流失',
        	'GXS_touji':'投机', 
        	'GXS_touji2':'投机', 
        	'GXS_touji_info':'场上英雄<5时，其他英雄主动对你使用杀需要两张。场上英雄大于等于5时，你主动使用杀伤害+1。',
        	'GXS_dyliebo':'裂帛', 
        	'GXS_dyliebo_info':'出牌阶段限一次，你可以使用任意张手牌与场内指定目标交换对应数量的手牌，或使用全部手牌与指定目标交换全部手牌',
        	'GXS_dyyaoji':'妖姬', 
        	'GXS_dyyaoji2':'妖姬', 
        	'GXS_dyyaoji_info':'你可以令对你造成伤害的角色获得一个【仇恨】标记(该标记无法叠加)。(仇恨：有该标记而没有【乐不思蜀】的角色在其回合开始阶段进行判定，若为黑桃，则跳过出牌阶段，标记于判定后失去。)',
        	'GXS_dyzhenglve':'政略',
        	'GXS_dyzhenglve_info':'每当你需要在牌堆顶摸牌时，都可以先多摸一张牌查看，然后选择一张放回牌堆顶，剩下的牌加入手牌',
        	'GXS_dybeide':'背德',
        	'GXS_dybeide_info':'回合外，每当其他角色使用的锦囊牌生效后，你可以弃置一张相同花色的手牌，将该锦囊牌收入手牌',
        	'GXS_xiezheng':'协政',
        	'GXS_xiezheng_info':'出牌阶段限一次，你可以选择一名有手牌的其他角色，然后你选择一个花色，你与其交换手牌中该花色的牌',
        	'GXS_wencai':'文才',
        	'GXS_wencai_info':'锁定技，摸牌阶段，你额外摸X张牌(X为你本次摸牌数)；弃牌阶段，你的手牌上限-2',
        	'GXS_dyyoumie':'诱灭',
        	'GXS_dyyoumie2':'诱灭',
        	'GXS_dyyoumie_info':'出牌阶段，若场上没有诱灭状态，你可以令一名其他男性角色获得诱灭状态。;摸牌阶段开始时，你可以少摸一张牌，然后诱灭状态的角色受到一点无来源伤害，;当诱灭状态的角色濒死时，你获得其所有的牌。',
        	'GXS_dyzhangzheng':'掌政',
        	'GXS_dyzhangzheng_info':'锁定技，1.当你受到不为诱灭角色使用杀造成的伤害时，若场上有诱灭状态，你令诱灭状态的角色摸一张牌，然后将此伤害转移给其。2.当你受到不为杀造成的伤害时，若场上没有诱灭状态，你摸一张牌。',
        	'GXS_dyjieyi':'结义',
        	'GXS_dyjieyi_info':'与一名男性角色进行结义，当你收到伤害或恢复血量时可以弃掉一张红色手牌，该英雄也受到同等伤害或恢复同等血量。',
        	'GXS_dyrende':'仁德',
        	'GXS_dyrende_info':'每出一张非延时锦囊时，都可以指定除自已外的某个角色摸一张手牌',
        	"GXS_olpozhen":"破阵",
        "GXS_olzhen":"破阵",
        "GXS_olpozhen_info":"若你使用的【杀】未命中目标，该目标获得【破阵】标记。下次对该目标使用【杀】时，可弃掉目标的【破阵】标记，使此【杀】具有以下效果之一：（1）无视防具；（2）伤害+1。", 
        "GXS_olciyin":"辞印",
        "GXS_olciyin_info":"当你的装备区没有防具时，你可以获得场上装备区的任意一张防具，并增加1点血量上限，转换为【民】阵营。（阵营转换每回合限一次）", 
        "GXS_olyinglie":"英烈",
        "GXS_olyinglie_info":"每次最多受到1点伤害。", 
        "GXS_oljiaozhen":"叫阵",
        "GXS_oljiaozhen_info":"出牌阶段，可以把黑色花色手牌视为【舍我其谁】使用。", 
        "GXS_olguashuai":"挂帅",
        "GXS_olguashuai_info":"出牌阶段，可以弃掉一张手牌或装备区的牌，减少1点血量上限，转换为【臣】阵营。（阵营转换每回合限一次）。",       
		"GXS_olyuci":"玉词",
		"GXS_olyuci1":"玉词",
		"GXS_olyuci2":"玉词",
        "GXS_olyuci_info":"出牌阶段，你可以弃掉1名角色的1张牌(手牌或者装备区的牌)：若该牌为基本牌或者非延时锦囊，本回合你的下1张打出的牌可以当作此牌使用；否则你弃掉1张手牌或装备区的牌。(每回合限用一次)", 
        "GXS_olshangli":"伤离",
        "GXS_olshangli_info":"回合外，你每失去1张手牌或者装备区的牌，立刻摸1张牌。(每轮摸牌上限为2)",
            "GXS_tianpeng":"天蓬",
            "GXS_tianpeng_info":"出牌阶段限一次，你可以与一名女性角色各展示一张手牌，若花色不同，弃置两张牌",
            "GXS_jingtan":"净坛",
            "GXS_jingtan_info":"你的回合外，其他角色使用或打出【杀】后，你摸一张牌。每轮限10次。", //猪八戒 臣      
		    "GXS_benyue":"奔月",
            "GXS_benyue_info":"出牌阶段限一次，你可以把一张装备牌当作【无中生有】使用",
            "GXS_lingyao":"灵药",
            "GXS_lingyao_info":"每当你使用【桃】后，可以摸两张牌并分配给任意角色",//嫦娥 5
            'GXS_youshui':'游说',
            'GXS_youshui_info':'出牌阶段，你可以弃置两张牌，指定两名其他角色，前一名角色造成伤害后一名角色恢复等量体力',
            'GXS_tianming':'天命',
            'GXS_tianming2':'天命',
            'GXS_tianming_info':'出牌阶段，你可以与一名其他角色各自弃置一张手牌，若弃置的花色一致，目标角色跳过下次摸牌',
			"GXS_guqi":"孤栖",
			"GXS_guqi_info":"若你为场上体力最少的角色，你摸牌阶段多摸一张牌，弃牌阶段少弃一张牌",
			"GXS_relingyao":"灵药",
			"GXS_relingyao_info":"你可以弃置x张手牌视为使用一张【桃】(x为你本回合发动该技能的次数,且至少为1)，若你弃置了全部的牌，你可以减一点体力上限并回复一点体力",
            //线下实体
            "GXS_bingxin":"冰心",
            "GXS_bingxin_info":"每当有角色装备区发生变化后，你摸一张牌",
            "GXS_zhinan":"指南",
            GXS_zhinan2:"指南",
            "GXS_zhinan_info":"出牌阶段，你可以弃置装备区所有的牌并宣言一张装备牌，当这张装备牌进入弃牌堆时，你立刻获得。每局游戏限一次。",//凝儿 轩辕之女 臣 3
            "GXS_fenshen":"分身",
            "GXS_fenshen_info":"当你受到伤害时，你可以令伤害来源选择一种花色并弃置你的一张手牌，若花色不一致，则本次伤害无效",
            "GXS_huoyan":"火眼",
            "GXS_huoyan_info":"回合开始时你可以观看一名手牌数最少角色的手牌",
            "GXS_tengyun":"腾云",
            "GXS_tengyun_info":"出牌阶段限一次，你可以弃置两张牌令你本回合使用的【杀】没有距离限制并且可以额外指定最多两名其他目标",
            "GXS_luanzhen":"乱真",
            "GXS_luanzhen_info":"回合开始阶段，你可以判定，若判定结果为红色，你可以获得其他角色的在出牌阶段的一项技能，没有则摸一张牌",
            "GXS_xuezui":"学嘴",
            "GXS_xuezui_info":"出牌阶段你可以弃置一名其他角色的一张手牌，若该牌为基本牌或锦囊，你使用的下一张牌必须视为该牌",
            'GXS_jndufu':'毒妇',
            'GXS_jndufu_info':'每回合限一次，你对其他角色使用【杀】造成伤害时，可以弃置一张红桃牌或【鸩】，令此【杀】伤害+1',
            'GXS_shifu':'弑夫',
            'GXS_shifu_info':'男性角色使用【桃】回复体力时，你可以弃置一张【桃】或【鸩】，则使用的【桃】改为【鸩】',
            //线下实体 乱世双雄
            "GXS_shendu":"神都",
            "GXS_shendu_info":"出牌阶段，可以弃置两张红色牌令两名角色对调位置",
            "GXS_wuzhou":"武周",
            "GXS_wuzhou_info":"出牌阶段，你的所有单体非延时锦囊可以当作【决斗】使用",//武则天 4(国战？)
            "GXS_yunchou":"运筹",
            "GXS_yunchou_info":"回合开始时，你可以选择以下一项执行① 跳过判定阶段、摸牌阶段及弃牌阶段；②摸牌阶段多摸一张牌，跳过出牌阶段及弃牌阶段",
            "GXS_zhenyin":"鸩饮",
            "GXS_zhenyin_info":"可以把【桃】当【酒】，【酒】当【桃】使用",//吕雉 4(国战？)
            "GXS_chuge":"楚歌",
            "GXS_chuge_info":"摸牌阶段，你可以把摸到的牌交给其他角色，若你全部给出，则回复1点体力",
            "GXS_liaosheng":"聊生",
            "GXS_liaosheng_info":"摸牌阶段，每有一名阵亡的男性角色，你便多摸2张牌(最多4张)",//虞姬 3(国战？)            
		    	'GXS_manwu':'曼舞',
      			'GXS_manwu_info':'当你即将受到伤害时，你可以弃置一张红桃牌将伤害转移给任意一名其他角色，然后该角色摸x张牌，x为其已损失体力值',
      			'GXS_hongzhuang':'红妆',
     			'GXS_hongzhuang_info':'锁定技，你的黑桃牌均视为红桃',       
                'GXS_liaoshang':'疗伤',
                'GXS_liaoshang_info':'出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次',
                'GXS_huichun':'回春',
       		    'GXS_huichun_info':'回合外，你可以将一张红色牌当[桃]使用',
       		    'GXS_reliaoshang':'疗伤',
                'GXS_reliaoshang_info':'每当有角色血量减少时,你可弃置1张手牌回复其1点血量。(每轮限2次)',
                'GXS_rehuichun':'回春',
       		    'GXS_rehuichun_info':'限定技，当有角色濒死时，你可令其回复至1血',
       		    'GXS_yide':'医德',
       		    'GXS_yide_info':'每当有角色使用[桃]时，你摸1张牌',
		    'GXS_qingmu':'倾慕',
		    'GXS_qingmu_info':'出牌阶段，你可以选择弃一张牌，让一个女性角色获得一个额外回合，然后你结束本回合',
		    'GXS_daowang':'悼亡',
		    'GXS_daowang_info':'其他角色死亡后，你获得其所有牌',
		    'GXS_wumu':'武穆',
		    'GXS_wumu_info':'你的任一基本牌可以视为闪或杀',
		    'GXS_wumu_sha':'武穆',
		    'GXS_wumu_sha_info':'你的任一基本牌可以视为闪或杀',
		    'GXS_wumu_shan':'武穆',
		    'GXS_wumu_shan_info':'你的任一基本牌可以视为闪或杀',
		    'GXS_longnu':'龙怒',
		    'GXS_longnu_info':'你视为装备了盘龙棍,攻击范围＋3',
			'GXS_ybudao':'布道',
			'GXS_ybudao_info':'摸牌阶段，你可以额外摸一张牌，然后将摸到的牌中的一张交给一名其他角色',
			'GXS_taiji':'太极',
			'GXS_taiji_info':'每当你使用或打出一张闪，你可以使用一张杀',
		    'GXS_lixian':'礼贤',
		    'GXS_lixian_info':'其他角色被你弃置的梅花牌，你获得之',
			'GXS_shiquan':'释权',
			'GXS_shiquan_info':'你可以将黑色牌当作【釜底抽薪】',
			'GXS_miaoji':'妙计',
			'GXS_miaoji_info':'每当你使用一张非延时类锦囊牌时，（在锦囊牌结算前）你可以马上从牌堆中摸取一张牌',
			'GXS_dongcha':'洞察',
			'GXS_dongcha_info':'你不能成为黑桃花色锦囊牌的目标',
		    'GXS_qiangyun':'强运',
		    'GXS_qiangyun_info':'当你手牌为0时，你摸2张牌',
		    'GXS_zuijiu':'醉酒',
			'GXS_zuijiu_info':'在己方摸牌时，如果己方选择发动【醉酒】就只摸一张牌，那本回合对别人出【杀】或【决斗】造成的的伤害为2（默认伤害为1）',
			'GXS_xingzhe':'行者',
			'GXS_xingzhe_info':'回合结束时，你的手牌≤2，你摸一张牌',
			'GXS_luobi':'落笔',
			'GXS_luobi_info':'结束阶段，可以摸数量等同于已损失体力值的牌，并以任意方式分配给任意角色',
			'GXS_fengliu':'风流',
			'GXS_fengliu_info':'锁定技，摸牌阶段，你额外摸X张牌，X为存活女性角色数且不超过2',
		'GXS_shucai':'疏财',
		'GXS_shucai_info':'出牌时，己方可以把自己的手牌发给任意角色，并在分出2张及以上牌时可回复一点血',
		    'GXS_qingmin':'轻敏',
		    'GXS_qingmin_info':'你不能成为【探囊取物】的目标',
			'GXS_feizei':'飞贼',
			'GXS_feizei_info':'你使用【探囊取物】不受距离限制',
			'GXS_shentou':'神偷',
		    'GXS_shentou_info':'你所有梅花花色的手牌都可以当作【探囊取物】使用',
		     'GXS_zhongpan':'众叛',
		     'GXS_zhongpan_info':'出牌时，你可以使用红桃手牌当作【万箭齐发】',
			'GXS_wudao':'无道',
			'GXS_wudao_info':'你击杀一名角色后，若手牌＜5，则摸牌至5张',
		    'GXS_bianfa':'变法',
		    'GXS_bianfa_info':'在任意玩家的判定牌生效前，你可以出一张牌（手牌或装备区的牌），替代原来的判定牌，从而改变判定结果。',
			'GXS_fajia':'法家',
			'GXS_fajia_info':'你掉血以后可以抽取伤你的角色的一张牌，可以是对方的手牌，也可以是装备区的牌。',
			'GXS_kuangfu':'狂斧',
			'GXS_kuangfu':'你可以弃1张非基本牌，选择1名角色弃置其1张牌，且你本回合攻击范围+3。出牌阶段限1次。',
		    'GXS_qixi':'奇袭',
		    'GXS_qixi_info':'你对手牌＝0的角色造成伤害时，此伤害＋1',
	        'GXS_mingcha':'明察',
            'GXS_mingcha_info':'出牌阶段限一次，你可以弃置任意张牌并观看一名角色等量的手牌然后你可以获得其中每种颜色的牌各一张',
            'GXS_xuefan':'削潘',
            'GXS_xuefan_info':'锁定技，摸牌阶段场内每有一个体力值大于你的角色你就多摸一张牌(至多多摸俩张)',
            'GXS_chuyou':'出游',
            'GXS_chuyou_info':'你可以跳过出牌/摸牌阶段；当你跳过出牌/摸牌阶段后你摸一张牌然后本局游戏内你的手牌上限+2(至多+8)',
            'GXS_suyuan':'溯源',
            'GXS_suyuan_info':'当你跳过摸牌或出牌阶段后你可以展示X张牌然后你选择其中俩张获得再从你下家开始依次选择其中一张获得(X为全场人数+1)',
		'GXS_dili':'底力',
		'GXS_dili_info':'摸牌阶段，你多摸N张牌。(N=你的已损失血量且至多为3)',
		 'GXS_kuangchan':'狂禅',
         'GXS_kuangchan_info':'回合开始时，若你的血量值>2则减1',
		  'GXS_biaoqi':'骠骑',
		  'GXS_biaoqi_info':'你使用【杀】时若你的攻击范围≥2:此时如目标角色血量≥3，你摸1张牌;目标角色血量≤2，则此【杀】不可闪避',
		  'GXS_hanqiang':'寒枪',
		  'GXS_hanqiang_info':'你没有装备武器时，攻击范围＋1',
		  'GXS_shenyong':'神勇',
	      'GXS_shenyong_info':'出牌阶段开始时，你可以选择1个花色，则本回合你此花色的手牌可当作【决斗】',
		  'GXS_shenyong1':'神勇',
	      'GXS_shenyong1_info':'出牌阶段开始时，你可以选择1个花色，则本回合你此花色的手牌可当作【决斗】',
	      'GXS_podi':'破敌',
          'GXS_podi_info':'你对其他角色造成【决斗】伤害后，本回合内以其为目标的【杀】回闪量+1',
		'GXS_kongju':'控局',
		'GXS_kongju_info':'你的手牌上限至少为4,你无法成为釜底抽薪 画地为牢的目标',
		'GXS_shenjun':'神骏',
		'GXS_shenjun_info':'你计算与其他角色的距离时-1',
		 'GXS_chaotuo':'超脱',
	     'GXS_chaotuo_info':'在任意角色的判定牌生效前，你可以出一张黑色花色的牌替换原来的判定牌',
           'GXS_houzhu':'后主',
		   'GXS_houzhu_info':'每当你使用或打出一张【闪】时（结算前），可令任意一名角色（除自己外）进行判定：若为黑桃花色，则该角色掉2点血',
		'GXS_jianai':'兼爱',
	    'GXS_jianai_info':'你可以将一张方片牌当五谷丰登，回合限1次',
		'GXS_feigong':'非攻',
		'GXS_feigong_info':'你距离1以内的角色成为【杀】的目标时你可以摸1张牌,并交给其1张牌',
		'GXS_yuren':'驭人',
		'GXS_yuren_info':'你可以弃置任意张牌，然后摸相同数量的牌，每个回合限一次',
		'GXS_manwang':'蛮王',
		'GXS_manwang_info':'【南蛮入侵】对你无效;你可以将2张【杀】当作【南蛮入侵】',
		'GXS_qizong':'七纵',
	    'GXS_qizong_info':'你的血量变化后，你摸一张杀',
		'GXS_shentan':'神探',
		'GXS_shentan_info':'你可以将你的任意一张黑色手牌当做【无懈可击】使用',
	    'GXS_jujian':'举荐',
		'GXS_jujian_info':'你可以弃置一张牌，获得任意角色一张牌，然后交给任意角色',
		'GXS_vxqianglve':'强掠',
		'GXS_vxqianglve_info':'当你的【杀】被闪避后，你可以判定，若结果＜7，你对目标造成一点伤害,若结果＞7,你获得目标一张牌',
		'vxqishe':'骑射',
		'vxqishe_info':'你计算与其他角色的距离时-1',
		'GXS_jiquan':'集权',
		'GXS_jiquan_info':'受到伤害后你可以获得伤害你的牌,或者摸一张牌',
		'GXS_zhanbu':'占卜',
		'GXS_zhanbu_info':'回合开始时，你可以观看牌堆顶的4张牌，然后以任意顺序置之于牌堆顶或牌堆底',
		'GXS_guiyin':'归隐',
		'GXS_guiyin_info':'你的手牌量=0时，你不能被选择为【杀】或【决斗】的目标',
		'GXS_cike':'刺客',
	    'GXS_cike_info':'你使用【杀】时可以发起判定:结果为红色时，此【杀】不可闪避;结果为黑色时，你弃置目标角色1张牌',
	    'GXS_juesha':'绝杀',
        'GXS_juesha_info':'你可以弃1张武器牌，对1名其他角色造成1点伤害。出牌阶段限1次',
		'GXS_pingyuan':'平冤',
		'GXS_pingyuan_info':'你的血量变化后，你摸一张牌',
		'GXS_shenduan':'神断',
        'GXS_shenduan_info':'判定牌生效前，你可以弃1张红色手牌，将判定牌改为任意花色',
		'GXS_bazhu':'霸主',
        'GXS_bazhu_info':'你拼点后获得点数较大的拼点牌。',   
		'GXS_zhiba':'制霸',
        'GXS_zhiba_info':'你可与1名其他角色拼点，若你赢，则本回合你的手牌上限+2。出牌阶段限1次。',
		  'GXS_zongheng':'纵横',
		  'GXS_zongheng_info':'你可交给1名角色X张【杀】，然后摸X+1张牌。出牌阶段限1次',
		  'GXS_yinju':'隐居',
          'GXS_yinju_info':'与你距离>1的角色对你造成的伤害无效;其对你使用的【杀】也无效',
		  'GXS_gongxin':'攻心',
		  'GXS_gongxin_info':'你可以令1名其他角色展示1张手牌，若你弃置1张相同花色的手牌，你对其造成1点伤害。出牌阶段限1次',
		  "GXS_bingxian":"兵仙",
		  'GXS_bingxian_info':'当你获得≥2张手牌时,你摸1张牌',
		  'GXS_pofu':'破釜',
		  'GXS_pofu_info':'你可以将所有手牌弃置，视为你使用一张决斗',
       		'GXS_bawang':'霸王',
       		'GXS_bawang_info':'锁定技，你使用的【杀】或【决斗】需要两张【闪】或【杀】响应',
       		'GXS_taofa':'讨伐',
        	'GXS_taofa_info':'你可以交给其他角色1张手牌;若该角色血量不低于你的血量，你对其造成1点伤害。出牌阶段每名角色限1次',
        	'GXS_zhubao':'诛暴',
            'GXS_zhubao_info':'若1名角色回合内造成伤害量>1,其回合结束时，你可令其而量-1.每轮限1次.(修所血量不触发舍身之类)',
            'GXS_tiandu':'天妒',
            'GXS_tiandu_info':'摸牌阶段，你多摸2张牌并弃1张牌',
            'GXS_wangshen':'忘身',
            'GXS_wangshen_info':'你可以弃1张牌并自减1点血量，然后摸3张牌。出牌阶段1次',
			      'GXS_yinqiang':'银枪',
			      'GXS_yinqiang_info':'你可以将两张牌当做杀使用',
			      'GXS_xiadan':'侠胆',
			      'GXS_xiadan_info':'你可以与一名角色拼点，若你赢，本回合你的杀使用次数＋1,杀的可指定目标＋1、攻击范围无限，若你没赢本回合不能使用杀。出牌时限制一次',
			      'GXS_tianyi':'天义',
			      'GXS_tianyi_info':'你的拼点牌点数＋3',
			      'GXS_liance':'连策', 
			      'GXS_liance_info':'出牌阶段限1次，选择1名角色1张手牌，判断该牌颜色，若判断正确你可获得此牌并刷新【连策】（至多刷新2次），错误则观看牌堆底1牌，选择是否放置牌堆顶。',
			      'GXS_nishi':'逆势', 
			      'GXS_nishi_info':'判定牌生效前，你可将牌堆底1牌代替之。',
			      'GXS_lianpo':'连破', 
			      'GXS_lianpo_info':'当你造成伤害后，你可弃1张牌视为对其使用[杀](此杀不计入次数)出牌阶段每名角色限1次',
			      'GXS_fujing':'负荆', 
			      'GXS_fujing_info':'你可自减1点血量，令任意1名角色摸1张锦囊牌。出牌阶段限1次。',
			      'GXS_zhuolve':'卓略',		
			      'GXS_zhuolve_info':'出牌阶段，你可以弃置一种颜色所有手牌，执行以下效果：红色，回复1点血量，黑色，视为使用【南蛮入侵】。出牌阶段限1次。若场上有角色血量＞你，你可再次使用【卓略】',	
			      'GXS_langgu':'狼顾',
			      'GXS_langgu_info':'你受到伤害后，摸1张牌，展示全部手牌，若手牌颜色相同则回复1点血量。每名角色的回合限1次',
        'GXS_zaoren':'造人',
        'GXS_zaoren_info':'摸牌阶段，你可以选择少摸一张牌，获得一枚【人】标记（标记上限3）',
        'GXS_wahuang':'娲皇',
        'GXS_wahuang_info':'在你造成或受到伤害时，可以弃置一枚【人】标记对伤害角色追加1点伤害或抵消你所受到的1点伤害。',
        'GXS_shenyou':'神佑',
        'GXS_shenyou_info':'你对自己使用【桃】回复体力后，可以指定一名其他角色恢复1点体力',        
        'GXS_tianxiang':'天香',
        'GXS_tianxiang_info':'角色的回合开始阶段时，若其判定区有牌，你可以弃置一张牌令其跳过判定阶段',
        'GXS_vxtianxiang':'天香',
        'GXS_vxtianxiang_info':'当一名角色需要判定时，你可以令其取消该判定，若判定结果为♦️，你获得之',
        'GXS_xintianxiang':'天香',   
        'GXS_xintianxiang_info':'当一名角色需要判定时，你可以弃掉一张牌（手牌或装备牌），则取消该判定',
        'GXS_guose':'国色',
        'GXS_guose_info':'没有装备防具时，你视为始终装备着【八卦阵】',  
        'GXS_chujia':'初嫁',
		      	'GXS_chujia_info':'出牌阶段限一次，你可以弃置两张相同颜色的手牌，指定任意一名角色摸X张牌。(X为该角色已损失的体力值) ',
      			'GXS_zhijie':'知节',
      			'GXS_zhijie_info':'出牌阶段，你可以把红桃手牌当做【无中生有】使用',
       		'GXS_aojian':'傲剑',
       		'GXS_aojian_info':'你可以将一张红色牌当[杀]使用',
       		'GXS_xinmo':'心魔',
       		'GXS_xinmo_info':'你使用的所有红色牌，无视距离',
       		'GXS_tongfu':'同福',
       		'GXS_tongfu_info':'出牌阶段，你可以弃置一张牌并选择一名装备区有非特殊装备的角色发动，你装备该名角色的装备区内的牌(替换原装备)',
       		'GXS_retongfu':'同福',
       		'GXS_retongfu_equip':'镜像',
       		'GXS_retongfu_info':'出牌阶段，你可以选择以下操作中的1项执行：</li><li>与场上除你外的1名角色形成【镜像】状态，该角色的装备置于武将牌上，其装备区与你一致（场上有角色处于【镜像】状态时，不能发动）；</li><li>弃掉1张手牌或装备区的牌，取消【镜像】状态。',       		
       		'GXS_shengnv':'圣女',
       		'GXS_shengnv_info':'当你受到伤害后，你可以展示一张手牌，伤害来源须弃置一张颜色相同的牌，否则你回复一点体力',
       		'GXS_fengyi':'凤仪',
       		'GXS_fengyi_info':'你掉血后可以进行一次判定，如果不是红桃，则伤你的角色立即进入弃牌阶段。',
      			'GXS_wange':'婉歌',
      			'GXS_wange_info':'摸牌时，你可以少摸一张牌，则结束阶段你可以抽取一名其他角色的手牌，至少1张，至多X张（X为你当前的掉血量）。',
      			'GXS_kuixin':'窥心',
       			'GXS_kuixin_info':'你的判定牌生效后立即收为手牌。',
       			'GXS_yuxian':"羽仙",
       			'GXS_yuxian_info':"出牌阶段限一次，你可以弃置一张牌令场上一张装备牌或者延时锦囊直到你下次回合开始时不生效",
       			'GXS_nichang':"霓裳",
       			'GXS_nichangyuyi':'羽衣',
       			'GXS_nichang_info':"摸牌阶段你可以不摸牌，若如此做，回合结束时展示手牌，每少一种花色便摸一张牌",
       			GXS_seyou:'色诱',
			GXS_seyou_info:'限定技，出牌阶段，你可以指定任意1名角色，其他所有男性角色需选择1项执行：（1）对你指定的角色出【杀】；（2）交给你一张牌。',
			GXS_sheshi:'蛇噬',
			GXS_sheshi_info:'每受到1次伤害，可以指定1种花色，依次展示牌堆顶的牌，直到出现指定花色的牌为止，你获得与指定花色不同花色的所有牌（最多展示4张牌）。',
      			'GXS_zhiyu':'治愈',
      			'GXS_zhiyu_info':'出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复一点体力，每阶段限一次',
      		'GXS_fenghuo':'烽火',
      			'GXS_fenghuo_info':'你可以将一张装备区内的牌当作南蛮入侵使用',
      			'GXS_yubu':'玉步',
      			'GXS_yubu_info':'准备阶段，你可以进行一定判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌',
      			'GXS_qingying':'轻影',
      			'GXS_qingying_info':'你可以将一张黑色手牌当[闪]使用或打出',
      			'GXS_tuqiang':'图强',
      			'GXS_tuqiang_info':'回合外每当你使用或打出一张闪或杀后，你可以摸一张牌',
      			'GXS_hongyan':'红颜',
      			'GXS_hongyan_info':'出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次',
      			'GXS_chuchu':'楚楚',
      			'GXS_chuchu_info':'结束阶段，你可以摸一张牌',
      			'GXS_vxfuchou':'复仇',
      			'GXS_vxfuchou_info':'每当你受到一次伤害，可进行一次判定，若结果不为红桃，则伤害来源须弃置两张手牌或受到来自你的一点伤害',
      			'GXS_meihuo':'魅惑',
      			'GXS_meihuo_info':'你可以将一张方片花色的手牌当[乐不思蜀]使用',
      			'GXS_chenyu':'沉鱼',
      			'GXS_chenyu_info':'当你成为[杀]的目标时，可以弃置一张牌将其转移给攻击范围内的一名其他角色，此角色不能是[杀]的使用者',
      			'GXS_tianlang':'天狼',
      			'GXS_tianlang_info':'出牌阶段，你使用[杀]无数量限制',
	      		'GXS_vxdiehun':'蝶魂',
	      		'GXS_vxdiehun_info':'你可以选择让群体锦囊对你无效，然后选择一个角色摸一张牌',
	      	    'GXS_diehun':'蝶魂',
	      		'GXS_diehun_info':'当你成为一张指定了多个目标的锦囊牌的目标时，你可以取消之，并摸一张牌。',
	      		'GXS_qiyi':'起义',
	      		'GXS_qiyi_info':'摸牌阶段，你可以改为从1~2名其他角色各抽取一张手牌',
	      		
	      		'GXS_cifu':'辞赋',
			'GXS_cifu_info':'回合开始时，你可以进行判定，黑色的判定牌可交给任意角色，红色的判定牌可置于牌堆顶或牌堆底',
			'GXS_zhisheng':'智圣',
			'GXS_zhisheng_info':'判定牌的点数小于7时，你摸一张牌',//东方朔 3
			'GXS_shangguo':'伤国',
			'GXS_shangguo_info':'当你成为其他角色【杀】或者锦囊的目标时，你可以流失1点体力令此牌对你无效并摸一张牌',
			'GXS_beifu':'悲赋',
			'GXS_beifu_info':'回合结束时，你可以进行判定，若判定结果点数小于7，你令1名角色回复1点体力，否则你可以将此牌置于牌堆顶或牌堆顶',//屈原 3
			'GXS_jiabeng':'驾崩',
			'GXS_jiabeng_info':'当你死亡时，你可以令至多2名其他角色判定，若结果为黑桃，该角色受到3点伤害',
			'GXS_shenli':'神力',
			'GXS_shenli_info':'锁定技，若你已受伤，你使用【杀】造成的伤害+x(x为你已损失体力数)',//夏桀 4
			'GXS_huguo':'护国',
			'GXS_huguobf1':'杀必中',
			'GXS_huguobf2':'杀加一',
			'GXS_huguo_info':'摸牌阶段，若你的手牌数为全场最少，你多摸一张牌且本回合你使用的【杀】不可闪避，否则你本回合可以使用的【杀】次数+1',
			'GXS_qiantui':'谦退',
			'GXS_qiantui_info':'弃牌阶段开始时，你可以弃置一张手牌，令任意角色摸一张牌',//卫青 4
			'GXS_pudu':'普渡',
			'GXS_pudu_info':'出牌阶段限一次，你可以弃置所有装备，令1名其他角色摸或弃等量的牌',
			'GXS_jiasha':'袈裟',
			'GXS_jiasha_info':'受到伤害后，你可以摸一张牌并弃置伤害来源角色一张牌',//玄奘 3
			'GXS_mouci':'谋刺',
			'GXS_xuzhi':'虚智',
			'GXS_mouci_info':'出牌阶段限一次，你可以把所有牌交给角色A，则角色A可以弃置一张武器牌，对你指定的角色B造成X点杀伤害(X为角色B手牌中的♠️牌数量)',
			'GXS_xuzhi_info':'每轮限一次，手牌数比你的手牌多的角色对你使用的【杀】无效',//张良
			'GXS_yongwu':'咏物',
			'GXS_xiwen':'檄文',
			'GXS_yongwu_info':'出牌阶段，若你使用的卡牌点数比你本回合已使用的卡牌点数都大，你摸一张牌',
			'GXS_xiwen_info':'出牌阶段限一次，你可以令一名其他角色获得檄文标记：本轮内，所有角色与其距离视为1',//骆宾王
			'GXS_qiuhuang':'求凰',
			'GXS_jianlie':'谏猎',
			'GXS_qiuhuang_info':'出牌阶段限一次，你可以判定，若判定结果<7，你视为使用一张【桃】，否则你可以令一名女性角色摸一张牌并交给你一到两张牌',
			'GXS_jianlie_info':'一名角色的结束回合时，你可以令一名手牌数小于2的角色摸一张牌',//司马相如
			'GXS_jiuxian':'酒仙',
			'GXS_yaoyue':'邀月',
			'GXS_jiuxian_info':'点数≤9的【杀】对你无效；你使用点数>9的【杀】指定目标后摸一张牌',
			'GXS_yaoyue_info':'出牌阶段，你使用的单体锦囊牌和【杀】可以指定额外一个目标',//李白
			'GXS_shisheng':'诗圣',
			'GXS_beimin':'悲悯',
			'GXS_shisheng_info':'摸牌阶段，你可以少摸两张牌，观看牌堆顶的四张牌并获得其中每种花色的牌各一张',
			'GXS_beimin_info':'结束阶段，你可以判定，若判定牌点数<7，你从牌堆获得两张点数≥7的牌并交给任意角色',//杜甫
			'GXS_xiangshu':'相术',
			'GXS_xiangshu_2':'窥天机',
			'GXS_quji':'趋吉',
			'GXS_xiangshu_info':'出牌阶段，你可弃置1张手牌，观看牌堆顶和牌堆底各1牌，获得其中1牌，出牌时限一次。本回合将此牌使用，你可再次触发该技能',
			'GXS_quji_info':'回合结束时，若你使用的牌数≥血量上限时你可摸2牌',//袁天罡
			
			'GXS_yuci':'玉词',
			'GXS_yuci_info':'出牌阶段限一次，你可以弃置1名其他角色一张手牌，若此牌为基本牌，你须弃置1张牌。',
			'GXS_shangli':'伤离',
			'GXS_shangli_info':'回合外，你每失去一张红色手牌，你摸一张牌',//李清照 3
			'GXS_vxxumou':'蓄谋',
			'GXS_vxxumou_info':'一名角色的回合结束时，若其此回合内未造成伤害，你可以令其获得牌堆的一张【杀】',
			'GXS_vxzhensha':'鸩杀',
			'GXS_vxzhensha_info':'你的回合内，其他角色不能使用【桃】',//吕雉 4
		        'GXS_zhensha':'鸩杀',
      			'GXS_zhensha_info':'当场上有角色进入濒死状态时，你可以弃置一张酒或两张黑色手牌，则该角色立即死亡。',
      			'GXS_xumou':'蓄谋',
      			'GXS_xumou_info':'结束阶段，你可以将武将牌翻面并摸3张牌',
			'GXS_vxshixin':'噬心',
			'GXS_vxshixin_info':'回合结束时，你可以进行判定，若判定结果为红色，你可以令一名男性角色从牌堆获得一张红桃牌；为黑色，你可以弃置1名其他角色一张牌',
			'GXS_vxmeiguo':'媚国',
			'GXS_vxmeiguo_info':'锁定技，你不能成为黑色【杀】的目标',//妲己 3
		      'GXS_shixin':'噬心',
        'GXS_shixin_info':'你受到伤害后，你可以弃置一张牌对伤害来源造成同等伤害',
        'GXS_meiguo':'媚国',
        'GXS_meiguo_info':'你的体力小于5时，你不是【杀】的合法目标',
			'GXS_zhenglve':'政略',
			'GXS_zhenglve_info':'摸牌阶段，你少摸两张牌，观看牌堆顶的四张牌并获得其中两张',
			'GXS_beide':'背德',
			'GXS_beide_info':'你成为【杀】的目标时，可以令1名其他角色也成为此【杀】的目标(不是此杀的使用者)',//文姜 3
			'GXS_huoshen':'火神',
			'GXS_huoshen_info':'锁定技，【南蛮入侵】对你无效；回合开始时，你从弃牌堆获得一张【南蛮入侵】',
			'GXS_manhou':'蛮后',
			'GXS_manhou_info':'出牌阶段限一次，你可以将【杀】当作【决斗】使用',//祝融 3
			'GXS_luoyan':'落雁',
			'GXS_luoyan_info':'其他角色对你造成伤害后失去其武器',
			'GXS_heqin':'和亲',
			'GXS_heqin_info':'出牌阶段限一次，你可与一名男性角色交换手牌，然后手牌较少的角色摸两张牌',//王昭君 3
			'GXS_juma':'拒马',
			'GXS_juma_info':'锁定技，你与装备了进攻马的角色计算距离时始终+1',
			'GXS_qinzheng':'亲征',
			'GXS_qinzheng_info':'你于出牌阶段每次造成伤害后，可令任意1名角色摸一牌',//萧太后 4
			'GXS_xiuhua':'羞花',
			'GXS_xiuhua_info':'男性角色的黑色判定牌生效后，你获得之',
			'GXS_fengyan':'丰艳',
			'GXS_fengyan_info':'你的手牌数少于损失的体力时，你摸一张牌',//杨玉环 3
			'GXS_sheshen':'舍身',
			'GXS_sheshen_info':'当你受到伤害后，你可以分配牌堆顶的两张牌给任意角色',
			'GXS_juebie':'诀别',
			'GXS_juebie_info':'濒死时，你可以令一名男性角色获得你的所有牌和将你的判定牌移到其的判定区，之后你死亡',//虞姬 3
			'GXS_remili':'迷离',
			'GXS_remili_info':'你失去装备区的一张牌后，你摸两张牌',
			'GXS_reyizhuang':'易装',
			'GXS_reyizhuang_info':'回合结束时，你可以弃置一张装备区的牌并获得牌堆一张装备牌',//花木兰 3
			    'GXS_yizhuang':'易装',
      			'GXS_yizhuang2':'易装',
      			'GXS_yizhuang_info':'准备阶段，你可以弃置一张牌并选择一名男性角色，获得其所有技能，直到你首次受到伤害',
      			
      			'GXS_dyyizhuang':'易装',
			    'GXS_dyyizhuang_info':'出牌时，你可以弃掉两张手牌，选定一个本局中阵亡的男性英雄，则失去你的所有技能，获得该男性英雄的所有技能，同时花木兰的血量上限变为该男性英雄的血量上限',
      		'GXS_mili':'迷离',
			'GXS_mili_info':'你失去装备区的一张牌后，你摸两张牌',
			'GXS_jiaozhen':'叫阵',
			'GXS_jiaozhen_info':'出牌阶段限一次，你可以令1名其他角色对你使用杀，否则你获得其一张牌',
			'GXS_yinglie':'英烈',
			'GXS_yinglie_info':'你受到伤害后可以进行判定，若结果为红色，你回复1点体力',//穆桂英 3
			'GXS_qinxin':'琴心',
			'GXS_qinxin_info':'出牌阶段限一次，你可以展示1名其他角色一张手牌，若此牌为黑色，你对其造成1点伤害，否则你获得此牌',
			'GXS_xiangshou':'相守',
			'GXS_xiangshou_info':'当1名男性角色使用【桃】回复体力时，你可以交给其一张手牌，若此牌为红色，你回复1点体力',//卓文君 3
			'GXS_nvxiang':'女相',
			'GXS_nvxiang_info':'其他角色使用【杀】时，你可以与其拼点，若你赢，此【杀】无效',
			'GXS_qicai':'绮才',
			'GXS_qicai_info':'出牌阶段限一次，你可以连续判定直至判定结果为黑色，你获得所有的判定牌并且弃置一张牌',//上官婉儿
			'GXS_jiandie':'鹣鲽',
			'GXS_jiandie_info':'回合结束时，你可以和1名男性角色交换手牌，则你们中手牌较少的角色摸牌至手牌相等',
			'GXS_xianzhu':'贤助',
			'GXS_xianzhu_info':'出牌阶段限一次，你可以弃置一张手牌从牌堆获得一张装备牌并置入任意角色的装备区',//长孙皇后
			'GXS_nvhuang':'女皇',
			'GXS_nvhuang_info':'其他角色的回合开始时，你可以与其拼点，若你赢，则其本回合不能使用锦囊牌',
			'GXS_qiandu':'迁都',
			'GXS_qiandu_info':'判定开始时，你可以观看牌堆顶的两张牌，然后以任意顺序放回牌堆顶',//武则天
			'GXS_zhenlie':'贞烈',
			'GXS_zhenlie_info':'任意角色的出牌阶段开始时，你可以摸一张牌并交给其一张手牌，令其本回合内可使用【杀】次数+1，然后你流失一点体力',
			'GXS_jiade':'嘉德',
			'GXS_jiade_info':'弃牌阶段，你可以令X+1名角色各摸一张牌(X为你弃置的卡牌数量)',//卫子夫
			'GXS_liebo':'裂帛',
			'GXS_liebo_info':'出牌阶段，若你的手牌上限不为0，你可摸1牌且本回合手牌上限减1',
			'GXS_yaoji':'妖姬',
			'GXS_yaoji_info':'回合结束时若你的手牌数≤1或弃牌数≥2，可选择角色AB，视A对B使用1张的【杀】',//妺喜
			'GXS_youmie':'诱灭',
			'GXS_youmie_info':'你可弃置一张手牌，获得任意角色手牌中相同花色的手牌，若你获得的手牌为0，该角色失去一点血量。出牌阶段限一次',
			'GXS_zhangzheng':'掌政',
			'GXS_zhangzheng_info':'判定开始后，你可以展示一张手牌将判定点数改为手牌点数',//芈月   
            'GXS_cangfeng':'藏锋',
			'GXS_cangfeng_info':'当你使用的【杀】被目标角色的【闪】抵消时。你可以弃置一张牌，然后获得该角色一张牌',
			'GXS_zhuanfa':'篆法',
			'GXS_zhuanfa_info':'回合开始时，若你的体力为1，你可以回复1点体力；若你没有手牌，你可以摸两张牌',//上官婉儿 3
			'GXS_tujin':'突进',
			'GXS_tujin_info':'锁定技，任何手牌数大于或等于你的手牌数的其他角色，你计算与这些角色的距离时始终视为1；这些角色和你计算距离时始终+1',
			'GXS_jianfeng':'剑锋',
			'GXS_jianfeng_info':'当你使用的【杀】时，你可令该【杀】即将造成的伤害+X（X为目标当前装备区的牌数）',//花木兰 3
			'GXS_luoshen':'洛神',
			'GXS_luoshen_info':'当你成为其他角色使用的【杀】或非延时锦囊牌的目标后，若其手牌或者装备区的牌数不小于你对应的区域，你可以摸一张牌',
			'GXS_tanxi':'叹息',
			'GXS_tanxi_info':'出牌阶段限一次，你可以将至少一张手牌交给一名其他角色，若如此做，该角色的回合开始阶段时，若其手牌数大于其体力值，你对其造成1点伤害',//甄姬 3
			'GXS_zhicai':'制裁',
			'GXS_zhicai_info':'当你对其他角色造成伤害或者受到其他角色对你造成伤害时，你可以弃置该角色手牌或者装备区的一张牌',
			'GXS_nvdi':'女帝',
			'GXS_nvdi_info':'锁定技，你不能成为其他角色延时锦囊牌的目标',//武则天 4
			'GXS_nvwushen':'女武神',
			'GXS_nvwushen_info':'觉醒技，当你使用【杀】或【决斗】对其他角色造成伤害后，你可以摸一张牌并放置在武将牌上，称为“毘”，你与其他角色计算距离时始终-X(X为“毘”数量)。回合开始时若你的“毘”不小于3，你减一点体力上限获得[强掠]，[车悬]',
			'GXS_qianglve':'强掠',
			'GXS_qianglve_info':'当你的【杀】被闪避后，你可以判定，若结果为黑色，你抽取目标的一张牌',
			'GXS_chexuan':'车悬',
			'GXS_chexuan_info':'回合开始时，你可以判定，若判定结果:基本牌 本回合你可以额外使用一张【杀】锦囊牌 本回合你的攻击范围无限 装备牌 你本回合使用的【杀】可以指定两名目标 若判定牌为黑色，你获得之',//上杉谦信 4
			'GXS_pishuang':'砒霜',
			'GXS_pishuang_info':'男性角色的出牌阶段开始时，你可以弃置一张牌并指定一种花色。该角色的弃牌阶段开始时若其于出牌阶段使用了此花色的牌，你对其造成一点伤害并摸一张牌',
			'GXS_chuoyue':'绰约',
			'GXS_chuoyue_info':'当你受到男性角色伤害后，若此伤害：为你本回合首次受到的伤害，你恢复一点体力；否则你摸一张牌',
			"GXS_honghuang":"洪荒",
            "GXS_honghuang_info":"出牌阶段限一次，你可以交给一名角色一张手牌，该角色选择以下一项：1、令你摸两张牌；2、弃置两张牌",
            "GXS_fanshi":"反噬",
            "GXS_fanshi_info":"当你受到伤害后，你可以弃置一张牌对伤害来源造成等量伤害",
            "GXS_shenzun":"神尊",
            "GXS_shenzun_info":"锁定技，你的手牌上限加(X+Y)(X为你的体力上限，Y为你已损失的体力值)",
            "GXS_wanrong":"挽戎",
            "GXS_wanrong_info":"当一名角色成为【杀】的目标后，你可以令该角色摸一张牌并展示之，若此牌为【杀】，该角色可以立刻对当前回合角色使用之。",
            "GXS_xundao":"殉道",
            "GXS_xundao_info":"当你处于濒死状态时，你可以令任意名角色摸一张牌。",
			"GXS_xiongcai":"雄才",
            "GXS_xiongcai_info":"其他角色的弃牌阶段结束时，你可以把本阶段内进入弃牌堆的牌任意分配给任意角色。",
            "GXS_zhengfa":"征伐",
            "GXS_zhengfa_info":"出牌阶段限一次，你可以令一名其他角色获得一个“伐”；有“伐”的角色的回合结束时其弃置X张牌并移去所有“伐”(X为其拥有的“伐”数量)。",
            "GXS_yinren":"隐忍",
            "GXS_yinren_info":"回合内出牌时没对别的玩家出杀,则本回合弃牌阶段时你可以不用弃牌,则回合结束摸1张牌",
            "GXS_guifu":"鬼斧",
            "GXS_guifu_info":"到你出牌时，可以指定一名角色装备区内的一张牌，将其弃掉，自己和对方同时摸取一张牌。（每回合限用一次）",
            "GXS_shengong":"神工",
            "GXS_shengong_info":"到你出牌时，可以选定场上任意一名角色的装备区的牌，出自己的一张手牌复制该装备，可以选择装备上自己或者别的角色的装备区。（每回合限用一次）",
            "GXS_hufu":"胡服",
			"GXS_hufu_info":"锁定技，当你的装备区内没有防具牌时，你摸牌阶段额外摸一张牌；当你装备区内有防具牌时，你的手牌上限+4",
			"GXS_hanbei":"捍北",
			"GXS_hanbei_info":"锁定技，你的装备区有武器或马时，你的杀不可闪避",
			"GXS_dihui":"诋毁",
            "GXS_dihui_info":"当你使用【杀】造成伤害后，目标获得一枚“誉”；有“标记”的角色下次受到的伤害+1",
            "GXS_mimou":"密谋",
            "GXS_mimou_info":"将任意一张手牌当借刀杀人",
            "GXS_cuanni":"篡逆",
            "GXS_cuanni_info":"你即将造成的伤害可以视为体力流失",
            "GXS_jiandi":"僭帝",
            "GXS_jiandi_info":"出牌阶段限1次，你可以弃一张牌，失去一点体力，获得所有其他角色区域内的一张牌",
            "GXS_qiji":"奇计",
            "GXS_qiji_info":"你可以弃置两张牌，让目标角色血量与你相等，血量变化为体力流失，不触发舍身之类技能",
            "GXS_shicai":"试才",
            "GXS_shicai_info":"你可以交给角色A一张手牌，令角色A选择 对你指定的角色B使用一张杀(无视距离)，或被你弃置2张牌",
            "GXS_xiangma":"相马",
            "GXS_xiangma_info":"其他角色进攻你的计算距离＋1",
            "GXS_bingsheng":"兵圣",
            "GXS_bingsheng_info":"场上任意角色使用红色杀时，你可以先摸一张牌,然后选择是否弃置一张牌令其本回合使用杀次数＋1",
            "GXS_danqi":"单骑",
            "GXS_danqi_info":"你的进攻距离加1",
            "GXS_budao":"补刀",
            "GXS_budao_info":"回合外，当有角色受到杀的伤害后，如果他在你的攻击范围内，你可以对他使用【杀】。",
            "GXS_wusheng":"武圣",
            "GXS_wusheng_info":"你可以获得其他角色打出的杀。",
            "GXS_wushuang":"无双",
            "GXS_wushuang_info":"你的红桃拼点牌亮出后此牌点数+99。",
            "GXS_fangtian":"方天",
            "GXS_fangtian_info":"你使用杀指定目标后，可以选择与其拼点，若你赢，此杀不可闪避",
            "GXS_shenji":"神戟",
            "GXS_shenji_info":"出牌阶段限1次当你使用【杀】造成伤害后，你可以指定1-2名与其相邻的角色视为对被指定的角色使用一张【杀】。",
            "GXS_jianmie":"歼灭",
            "GXS_jianmie_info":"你对角色造成伤害后对方获得伤害量的标记，其下回合摸牌阶段摸牌量减X(X为获得的标记数量)",
            "GXS_zhuiji":"追击",
            "GXS_zhuiji_info":"你对手牌量≤3的角色使用杀时，其回闪量＋1",
            "GXS_yaoyi":"徭役",
            "GXS_yaoyi_info":"每当你受到伤害后，你摸X张牌(x为场上已经受伤的角色数量)",
            "GXS_ygjujian":"拒谏",
            "GXS_ygjujian_info":"出牌阶段，你可以交给任意角色一张牌，则获得牌的角色的所有锦囊牌对你无效，直到你的下一回合开始",
            "GXS_dudiao":"独钓",
            "GXS_dudiao_info":"出牌时限一次。你可以展示1张手牌，本轮内，你获得其他角色打出和使用的同花色基本牌和普通锦囊",
            "GXS_taolve":"韬略",
            "GXS_taolve_info":"其他角色回合开始时，你可以用X张手牌交换牌堆顶的X张牌并调整牌序。每轮限1次",
            "GXS_pojun":"破军",
            "GXS_pojun_info":"当你于出牌阶段使用的第一张【杀】指定目标后你可以弃置目标一张牌。(每回合限一次)",
            "GXS_zhubei":"逐北",
            "GXS_zhubei_info":"每回合限一次，当你于自己的回合对其他角色造成伤害后本回合你可以多使用俩张【杀】。",
            "GXS_yushuai":"玉帅",
            "GXS_yushuai_info":"你的摸牌阶段前，其他女性角色可以选择是否交给你一张牌，若交给你牌，则你本回合摸牌量+2 每回合限1次",
            "GXS_beixi":"背袭",
            "GXS_beixi_info":"当一名手牌数≤3的其他角色使用【杀】时你可以对其使用一张无距离限制的【杀】。",
            "GXS_zhiheng":"制衡",
            "GXS_zhiheng_info":"你可以令角色B获得角色A一张手牌(须手牌量角色B<角色A)， 然后若AB手牌量相等，你摸1张牌或回复一点血量。出牌时限1次。",
            "GXS_yuefa":"约法",
            "GXS_yuefa_info":"你可以取消群锦囊的3个目标",
            "GXS_yunliang":"运粮",
            "GXS_yunliang_info":"出牌阶段限一次，你可以弃置1张牌然后令一名角色摸2张牌。",
            "GXS_guyong":"孤勇",
            "GXS_guyong_info":"当你需要使用或打出闪时，你可以弃置场上手牌最多角色1张牌，若此牌为基本牌，视为你打出了1张闪。每轮限1次。",
            "GXS_huzhu":"护主",
            "GXS_huzhu_info":"当一名其他角色使用【杀】指定了体力值为1的其他角色为目标后你可以取消此【杀】所有目标并令自己成为此【杀】的目标。",
            'GXS_lumang':'鲁莽',
            'GXS_lumang_info':'其他角色对你使用的单体锦囊，你可以视为决斗。',
            'GXS_yongchuang':'勇闯',
            'GXS_yongchuang_info':'决斗中，你的任意牌皆视为杀。',
            'GXS_baotou':'豹头',
            'GXS_baotou_info':'你使用的杀不可闪避。',
            "GXS_feijiang":"飞将",
            "GXS_feijiang_info":"当你使用【杀】时你可进行判定若结果为；黑色：此杀不可被响应；红色：你获得该判定牌。",
            "GXS_shanshe":"善射",
            "GXS_shanshe_info":"锁定技，你的攻击范围至少为3。",
            "GXS_haoling":"号令",
            "GXS_haoling_info":"出牌阶段限一次，当你使用杀指定目标后你可以选择一名其他角色该角色可以对此【杀】任意目标使用一张【杀】并摸一张牌。",
            "GXS_zhengzhao":"征召",
            "GXS_zhengzhao_info":"出牌阶段限一次，你可以与一名其他角色交换一张手牌然后你可以令其获得一张【杀】。",
            "GXS_shouli":"授礼",
            "GXS_shouli_info":"出牌阶段限一次，你可以交给一名其他角色俩张牌然后你摸一张牌。",
            "GXS_chongru":"崇儒",
            "GXS_chongru_info":"出牌阶段限一次，你可以令一名其他角色展示一张牌然后你也展示一张牌如果这俩张牌；颜色相同，你回复一点体力并与其各摸一张牌；颜色不同，你弃置其一张牌。",
            "GXS_zhuding":"铸鼎",
            "GXS_zhuding_info":"你的回合开始时你可以弃置一张黑色牌令一名角色获得一枚“鼎”(每名角色至多拥有5枚)；有“鼎”的角色本局游戏摸牌阶段多摸X张牌(X为“鼎”标记的数量)。",
            "GXS_zhishui":"治水",
            "GXS_zhishui_info":"一名角色的出牌阶段开始时，若其手牌数大于等于3；没有“鼎”标记且不是你则你可以弃置其一张牌；有“鼎”标记则其获得一个“鼎”标记。",
            "GXS_lijian":"离间",
            "GXS_lijian_info":"出牌阶段 你可令男性角色AB拼点，A获得你全部手牌，赢者视为对败者使用了一张杀",
            "GXS_biyue":"闭月",
            "GXS_biyue_info":"你受到伤害后，你可以选择一名角色摸牌至其血量上限",
            "GXS_fanji":"反击",
            "GXS_fanji_info":"当你受到【杀】或【决斗】造成的伤害后，你可以对伤害来源使用一张【杀】。若此【杀】为红色，其不可闪避",
            "GXS_menshen":"门神",
            "GXS_menshen2":"门神",
            "GXS_menshen_info":"回合结束阶段，你可选择一名其他角色，若如此做，直到你的下回合开始，所有角色对该角色使用的【杀】或【决斗】均视为对你使用",
            "GXS_quancai":"全才",
            "GXS_quancai_info":"这个武将的①②③的效果一回合各能使用1次。</br><br>①：2张红色手牌当作【无中生有】</br><br>②：2张黑色手牌当作【顺手牵羊】</br><br>③：2张不同颜色手牌当作【决斗】",
            "GXS_shiyong":"时用",
            "GXS_shiyong_info":"每回合限两次，当你使用“将X张牌当作其他牌”效果时，摸1张牌", 
            "GXS_qianmou":"潜谋",
            "GXS_qianmou_info":"你使用的延时锦囊不能被无懈可击", 
            "GXS_dyyinju":"隐居",
            "GXS_dyyinju_info":"出牌阶段限一次，弃掉一张手牌，则本轮内与该手牌相同颜色的牌对你造成的伤害无效。",
            "GXS_dyzongheng":"纵横",
            "GXS_dyzongheng1":"连横",
            "GXS_dyzongheng2":"合纵",
            "GXS_dyzongheng_info":'出牌阶段，你可以将一张方片手牌当做【合纵连横】使用。',
            "GXS_feiren":"飞刃",
            "GXS_feiren_info":"出牌阶段，你可以对你攻击范围外的角色使用一张【杀】（可以用此技能把武器牌视为【杀】），此【杀】不计入出牌阶段使用次数", 
            "GXS_yexing":"夜行",
            "GXS_yexing_info":"锁定技，当你受到伤害时，若此伤害多于1点，则防止多余伤害", 
            "GXS_tianya":"天琊",
            "GXS_tianya_info":"当你造成无属性伤害时，你可以弃置一张♠️2-9的手牌令该伤害+1并转化为雷属性", 
           "GXS_tianshu":"天书",
           "GXS_tianshu2":"天书",
           "GXS_tianshu_info":"其他角色/你的出牌阶段限一次，其/你可以向你/其他角色发起猜拳，赢的一方按下面两项执行</li><li>当前回合角色：从三个包含“出牌阶段限一次”的技能中选择一个获得直到此阶段结束</li><li>非当前回合角色：摸两张牌<br>♢平局的情况当前回合角色流失一点体力",
           "GXS_jinghong":"惊鸿",
           "GXS_jinghong_info":"出牌阶段限一次，你可以指定一名角色，攻击范围内含有该角色的除你以外的角色可以对其使用一张【杀】", 
            "GXS_wznichang":"霓裳",
            "GXS_wznichang_info":"每当你受到伤害后，你可以令一名角色摸两张牌或者弃置两张牌",
           "GXS_jiange":"剑歌",
           "GXS_jiange_info":"每当你于回合外失去一张【杀】时，立刻摸一张牌",
           "GXS_zuijian":"醉剑",
           "GXS_zuijian_info":"每当你对一名角色使用【杀】时，可以令该角色改为打出一张【杀】或者锦囊牌来抵消此【杀】",
           "GXS_huanyi":"幻翼",
           "GXS_huanyi_info":"当你对一名角色使用【杀】造成伤害时，可以流失一点体力令该伤害+1",
           "GXS_anying":"暗影",
           "GXS_anying_info":"回合结束时，你可以弃置一张牌，获得一枚【影】(上限为1)；当你于回合外受到伤害时，可以弃置一枚【影】抵消伤害",
           "GXS_myyoumie":"诱灭",
           "GXS_myyoumie_info":"出牌时，你可以将1张黑桃手牌交给其他男性角色，本回合使其所有技能失效。然后，视为对其使用1张【杀】，此张【杀】不计入使用次数。",
           "GXS_myzhangquan":"掌权",
           "GXS_myzhangquan_info":"你受到伤害后，伤害来源需弃置1张手牌，否则你回复1点血量",
           "GXS_qingji":"轻骑",
           "GXS_qingji_info":"你可弃置1张牌，本回合内与所有角色距离-1",
           "GXS_xiaoji":"骁骑",
           "GXS_xiaoji_info":"每当你与所有角色距离为1时，可弃置1张牌，选择任意名角色视为对其使用【杀】（此杀不计入次数）。出牌阶段限1次",
           "GXS_xuezhan":"血战",
           "GXS_xuezhan_info":"当你濒死时，你可以进行一次判定：若判定结果不为方块，则可以为自身恢复一点血量，若你血量仍旧不大于0，重复一次【血战】判定",
           "GXS_jiandao":"剑道",
           "GXS_jiandao_info":"锁定技，若1名角色连续成为你【杀】的目标4次，则该角色立即阵亡",
           "GXS_shoujian":"授剑",
           "GXS_shoujianbuff":"授剑",
           "GXS_shoujian_info":"弃置1张装备牌选择1名角色出【杀】量永久+1，并摸1张【杀】。出牌阶段限1次",
           'GXS_jianji':"剑技",
           'GXS_jianji_info':"你的【杀】命中后，你可以防止伤害并弃置目标角色牌区中的两张牌",
           "GXS_quyong":"取用",
           "GXS_quyong_info":"摸1张黑色牌，获得任意名角色随机1张手牌，随后依次归还1张牌。出牌阶段限1次。",
           "GXS_quanxue":"劝学",
           'GXS_quanxueffect':"劝学",
           "GXS_quanxue_info":"选择1名其他角色摸1张牌，则其出牌阶段无法对你使用【杀】。出牌阶段限1次。",
           "GXS_vxyoushui":"游说",
           "GXS_vxyoushui_info":"你可以与至多2名角色同时拼点，获胜者，摸1张牌。出牌阶段限1次。",
           "GXS_lianheng":"连横",
           "GXS_lianheng_info":"每次拼点结束后，可选择1张拼点牌交给其他角色。每轮限1次。",
       		 },       		 
    },
    intro:'',
    author:'欧尼斯特·渣诚</br>作者：鬼神易</br>作者：藏海</br>数据整理：欧尼斯特·渣诚、勇敢黄牛不怕反撸</br>特别鸣谢：勇敢黄牛不怕反撸 上骞👑 等群友提供素材以及反馈bug<li>特别地，傻狗暗杀效果更改为杀的结算过程封仅目标技能；合纵连横发动摸牌只能是出牌阶段主动使用(比如某个技能效果是【出牌阶段开始时你使用一张手牌】，此时你不能使用合纵效果，但是可以使用连横效果)',
    diskURL:'',
    forumURL:'',
    version:'1.0.0.7',
},files:{'character':['苏妲己.jpg'],'card':[],'skill':[]}}})
/*
1.0.0.1
·修复张良虚智不是一轮一次的BUG
·修正东方朔智圣不适用芈月掌政的BUG
·微信端花木兰发动迷离必须弃牌
·修正秦琼体力上限
·修复贞德同福发动后报错，并且移到DIY
·修复杨广势力错误
·修复拒谏可以一回合选择重复角色的BUG
·修复骆宾王咏物第一张能摸牌的BUG
·修复ol李清照伤离多摸牌的BUG
·更新猪八戒、嫦娥、凝儿、姬发、霍去病、微信端项羽、微信端韩信、微信端包拯、齐桓公、魂林冲、diy嫦娥等等等等

1.0.0.2
·雄才修改描述
·修复小乔天香ai对敌方也发动的BUG，修正描述
·粗略修复了赵匡胤礼贤
·包拯神断修正为1轮2次改判定
·修正宋江时迁武松唐伯虎潘安女娲势力错误
·增加装备饮血剑孔雀翎乾坤袋护心镜金鳞甲
·增加血杀暗杀各7张进入牌堆，并且独立配音
·增加符鸩，并且男女独立配音
·护卫不能发动bug
·修复倾慕选不弃牌报错
·增加主公技能配音

1.0.0.3
·村规暗杀更改为结算过程封仅目标技能
·修复神力加伤效果传导中再次适用的BUG
·护心镜BUG
·增加卡牌偷梁换柱、魅狐香、炮烙
·修改偷梁换柱描述使其不适用蝶魂
·修复ol穆桂英叫阵配音的BUG
·孔雀翎ai一血无桃无杀不发动
·鸩调整为除使用或弃牌阶段外不掉血且ai多吃鸩的BUG
·图强修正描述
·孔雀翎和鸩效果叠加BUG
·订正荆轲李白李自成林冲墨子势力
·修复补刀不能补刀自己的BUG(看起来不是BUG的BUG)(套娃了怪傻狗策划)
·更新孙悟空、六耳猕猴、OL赵云、斯巴达克斯、OL潘安、OL兰陵王、张辽、OL杨广、OL齐桓公、OL宇文化及、OL高俅、织田信长、SP吴三桂、孝庄

紧急修复Beta
·魂貂蝉缺少窥心BUG，凤仪错误BUG
·魂项羽破釜重名BUG
·笼络简易ai
·鸩更改为被cos也掉血
·部分更新将原画更换

1.0.0.4
·姿容神勇毒计破敌BUFF不消失BUG
·李广张飞潘安赵云修正为四血，鲁智深潘安势力修正为民，吴三桂修改为臣
·花木兰突进不加距离BUG
·裁定杨玉环羞花立刻获得男性判定牌先于操作判定牌
·妺喜裂帛不会重置次数BUG
·偷梁换柱更正为手牌
·狄仁杰举荐加强
·孝庄天命应为成功跳阶段后不能对那个角色继续发动
·OL文姜不放回牌堆顶的BUG
·廉颇连破占用出杀次数、无限制发动、可以对阵亡角色发动的BUG
·OL妺喜妖姬判定收益错误BUG
·修复魂项羽破釜加伤在造成来源不为牌伤害时报错BUG
·修复骆宾王咏物BUG
·提升部分技能AI
·新增卡牌：方天戟，通天铠，亢龙锏，如意金箍棒，随心铁杆兵，隔岸观火
·新增武将：太平公主、OL吕布、OL萧太后、潘金莲、OL妺喜、OL文姜、OL芈月、OL刘备、周瑜、廉颇

1.0.0.5
·修复姜子牙韬略无牌也能发动的BUG
·重写东方朔辞赋修复弹窗问题
·OL刘备仁德应为非延时锦囊
·杨玉环玉步(即洛神)因代码迭代不拿牌的BUG
·增加武松行者配音
·更改赵云张飞命名避免阵亡时播放三国杀的配音
·隔岸观火ai不使用的BUG
·宇文化及笼络无牌发动弹窗BUG
·防止误操作符改为不能直接使用，只能被化符
·炮烙重写ai
·OL文姜因版本迭代改为旧文姜
·小乔天香修改
·OL花木兰更至新版
·张良谋刺伤害类型更正为「杀造成的伤害」
·司马懿卓略ai修复
·OL鬼谷子隐居修复
·武松行者应为手牌数两张牌及以下摸牌
·重置贞德同福(半成品)
·新增分类「迟暮」用以放置旧版武将
·新增卡牌：蛮王巨斧、烈火獠牙
·新增武将：魂杨玉环(半成品)、埃及艳后、花千骨、司马懿、范蠡、OL文姜、VX小乔、鬼谷子、陆雪琪、张初尘、杨玉环、芈月、李白

这次更新本扩展支持「千幻聆音」扩展换肤功能，仅杨玉环有换肤换音功能

1.0.0.6
·笼络ai又双叒叕修改
·专权BUG
·破釜BUG
·烈火獠牙传说级增强
·护主好多BUG
·孝庄修改多人运动中＊奔为选择性＊奔
·独立门神
·新增武将：新芈月、越女、张仪、荀子

1.0.0.7
·修正贞德圣女弃牌ai，优化同福ai(虽然还是笨比)
·修复同福污染牌堆
·更正新芈月掌权提示
·修复偷梁换柱可以空手套白狼的bug
·看家型.桃.符→进攻型.狼.符 (符符我啊，真的要站起来了)
·调整秦琼反击不必有杀才能触发
·修复刘伯温占卜代码未随版本更新迭代
·修复婉儿女相只对单个角色起效的bug
·修复隔岸观火可以选择不应能成为目标的角色bug
·优化马超轻骑ai
·优化慕容蝶魂ai
·根据规则舍我其谁、门神生效时，若转移后的目标处于空城或归隐状态则不能使用杀或决斗
·优化孝庄游说ai
·优化张良谋刺ai
·新增卡牌：舍我其谁(转正)、合纵连横
·新增武将：diy贞德、民间潘金莲
*/