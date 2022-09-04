/*
 * File: \extension\英雄杀RE\skin.js
 * Project: noname
 * Created Date: Tuesday Aug 30th 2022, 9:46:29 am
 * Author: Wenren Muyan
 * Comments: 
 * --------------------------------------------------------------------------------
 * Last Modified: 4/09/2022 04:29:42
 * Modified By: Wenren Muyan
 * --------------------------------------------------------------------------------
 * Copyright (c) 2022 - future Wenren Muyan
 * --------------------------------------------------------------------------------
 * HISTORY:
 * Date				By				Comments
 * --------------------------------------------------------------------------------
 */

'use strict';

window.yxsre_import(function(lib,game,ui,get,ai,_status){
    if(!lib.qhlypkg){
        lib.qhlypkg = [];
    }
    // 能力评级
	var scoreItem = ['输出', '生存', '过牌', '限制', '辅助', '难度'];
	// 对应的颜色（如果要改颜色，也把css对应的部分也改了）
	var colotItem = ['red', 'green', 'blue', 'navy', 'deeppink', 'brown'];


    var gonglve = {
        'yxsre_huamulan': {
                  // 攻略文字
                 comment: '<br><font color=red>【武将解读】</font><br>英雄杀RE中的花木兰...',
                  // '输出', '生存', '过牌', '限制', '辅助', '难度' 对应的数字（最大为五）
                 score: [2, 4, 4, 5, 2, 3],
         },

    };

    var taici = {
        //原皮台词
        'yxsre_huamulan':{
                    'yxsre_mili':{
                        order:1,
                        content:'①安能辨我是雄雌！<br>②雄兔脚扑朔，雌兔眼迷离。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①脱我战时袍，着我旧时裳。<br>②你看我是男是女。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①就这样了。<br>②万里赴戎机，关山度若飞。',
                    },
                    'die':{
                        content:'只叹木兰终是女儿身。',
                    }
        },
    };

    lib.qhlypkg.push({
        isExt:true,//是否是扩展，一般填true
        filterCharacter:function(name){
            return name.indexOf('yxsre_') == 0||name.indexOf('xy_')==0;//判断此ID的武将是否属于此皮肤包
        },
        characterGonglve:function(name){
			var gl = gonglve[name];
			if (!gl) return;
			if (typeof gl == 'string') return gl;
			var score = gl.score; 
			var div = ui.create.div({
				position: 'relative',
				width: '90%',
				height: '50%',
				marginTop: '15px'
			});
            for (var i = 0; i < score.length; i++) {
				// 数字，element / 5
				var element = score[i];
				// 输出，摸牌之类的汉字
				var translate = scoreItem[i];
				// 颜色
				var color = colotItem[i];
				// 一行的div，设定div的class为block
				var block = ui.create.div(div, '.block', {
					position: 'relative',
					width: '100%',
					height: (100 / score.length) + '%',
				});
				// 左边文字
				ui.create.div(block, {
					width: '12%',
					innerHTML: translate,
					color
				});
				// 中间进度条
				var progress = document.createElement('progress');
				progress.max = 5;
				progress.value = element;
				progress.className = color;
				block.appendChild(progress);
				// 右边 x/5
				ui.create.div(block, {
					width: '12%',
					innerHTML: `${element} / 5`,
					color: 'black',
					left: '85%'
				});
			}
			return {
				handleView: function (view) {
					view.innerHTML += '<br><font color=red>【评级说明】</font><br>本扩展的能力评级共分六个维度，参照作者本人及部分玩家的实际体验对每个武将进行了相应能力的评级。<br><br>因武将技能复杂多变，故很难对每个武将进行完全准确的定量化评级，若存在不合理之处，欢迎各位玩家积极反馈并提出修改意见。';
					view.appendChild(div);
					view.innerHTML += '<div style="position: relative;">' + gl.comment + '</div>';
				},
			}
        },
        characterIntroduceExtra:function(name){
            var arr = [];
            if(gonglve[name]){
                arr.push({name:'攻略',func:'characterGonglve'});
            }
            if(arr.length)return arr;
        },


        skillSkin:function(name,skin,skill){
            var extSkin = {
                'yxsre_huamulan':{
                    '___origin':{
                        'yxsre_mili':1,//恢复皮肤初始状态
                        'yxsre_pushuo':'extension/英雄杀RE/skin/standard/yxsre_huamulan/yxsre_huamulan_chuanshuozhiren.jpg',

                        //露头例子：'lyzzhenguan':lib.config.ygbLutou==false?['extension/英雄杀RE/image/character/lyz_shen_lvbu2.jpg','extension/阳光包/image/character/lyz_shen_lvbu3.jpg']:['extension/阳光包/image/lutou/lyz_shen_lvbu2.jpg','extension/阳光包/image/lutou/lyz_shen_lvbu3.jpg'], 
                    },
                },
            };
            var info = extSkin[name];
            if(info){
                var info2 = info[skin ? skin:'___origin'];
                if(info2){
                    return info2[skill];
                }
            }
            return undefined;
        },

        characterNameTranslate:function(name){
            //这里根据武将ID返回其中文名字。
            return get.translation(name);
        },

        characterTaici:function(name){
            //这里返回武将原皮台词。
            return taici[name];
        },

        originSkinInfo:function(name){
            var info = {
                'yxsre_huamulan':'',

            };
            return info[name];
        },

        characterInfo:function(name){
            //这里可以返回角色资料。如不返回则显示get.characterIntro(name)。
        },

        prefix:'extension/英雄杀RE/image/character/', //原皮前缀，标识原皮肤的位置。     
        lutouPrefix:'extension/英雄杀RE/image/lutou/',
        //isLutou:lib.config.ygbLutou,   
        skin:{
            standard:'extension/英雄杀RE/skin/standard/',//可切换普通皮肤的前缀
            //lutou:'extension/英雄杀RE/skin/lutou/',
        },
        audioOrigin:'extension/英雄杀RE/audio/',//原技能配音位置
        audio:'extension/英雄杀RE/skin/audio/',//切换皮肤后的技能配音位置


        skininfo:{          //普通，精品，史诗，传说，限定
            //皮肤台词
            'yxsre_huamulan_chuanshuozhiren':{
                level:"普通",
                translation:"传说之刃",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①离家太远会忘掉故乡，杀人太多会忘记自己。<br>②找到敌人，找到自己。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①静如影，疾如风。<br>②哟，想跟姐比试比试吗？',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①好~训练的不错！<br>②抱歉~刚见面就得说再见。',
                    },
                    'die':{
                        content:'不会认输！',
                    }
                }
            },

            'yxsre_huamulan_guanjunfeijiang':{
                level:"传说",
                translation:"冠军飞将",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①生而无畏，战至终章。<br>②以我长剑，荡尽九野。。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①战无不克！。<br>②但使龙城飞将在。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①执长缨，此生同。争霸皇权划封侯。<br>②北望雄关万里，壮哉浩荡长风。',
                    },
                    'die':{
                        content:'守卫吾土之战，本将军义不容辞。',
                    }
                }
            },

            'yxsre_huamulan_guanjunfeijiang_dynamic':{
                level:"传说",
                translation:"冠军飞将·动态",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①生而无畏，战至终章。<br>②以我长剑，荡尽九野。。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①战无不克！。<br>②但使龙城飞将在。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①执长缨，此生同。争霸皇权划封侯。<br>②北望雄关万里，壮哉浩荡长风。',
                    },
                    'die':{
                        content:'守卫吾土之战，本将军义不容辞。',
                    }
                }
            },

            'yxsre_huamulan_jiuxiaoshenhui':{
                level:"限定",
                translation:"九霄神辉",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①皓皓，如朗月之华；昭昭，如赤日之辉。<br>②尽销九州兵甲，铸就天地明光。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①剑出破混沌，剑落定乾坤。<br>②悬寂寂长夜之中，渡征人归途。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①但见黎明安康，又何求一将功成。<br>②水深激激，蒲苇冥冥。',
                    },
                    'die':{
                        content:'但见沙场功勋，转瞬化为尘与土。',
                    }
                }
            },

            'yxsre_huamulan_jiuxiaoshenhui_dynamic':{
                level:"限定",
                translation:"九霄神辉·动态",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①皓皓，如朗月之华；昭昭，如赤日之辉。<br>②尽销九州兵甲，铸就天地明光。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①剑出破混沌，剑落定乾坤。<br>②悬寂寂长夜之中，渡征人归途。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①但见黎明安康，又何求一将功成。<br>②水深激激，蒲苇冥冥。',
                    },
                    'die':{
                        content:'但见沙场功勋，转瞬化为尘与土。',
                    }
                }
            },

            'yxsre_huamulan_tunvlang':{
                level:"精品",
                translation:"兔女郎",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①也很百变，也很善变。<br>②哼~有我在，对面没有机会集中精力。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①呃~呃~~拒绝签名合影。<br>②喂~看哪呢？',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①战争，感性又好玩。<br>②欢迎光临~',
                    },
                    'die':{
                        content:'啊~一点都不可爱~',
                    }
                }
            },

            'yxsre_huamulan_ruilinzhi':{
                level:"史诗",
                translation:"瑞麟志",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①时势造英雄，英雄亦造时势。<br>②临兵斗者，皆阵列前行。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①神兽不发威，当我是锦鲤。<br>②麒麟踏祥云，人间百难消。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①云彩是神圣之物。<br>②无人可见，无人能敌。',
                    },
                    'die':{
                        content:'别哭，我会再次降临。',
                    }
                }
            },

            'yxsre_huamulan_qingchunjuesai':{
                level:"史诗",
                translation:"青春决赛",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'yxsre_mili':{
                        order:1,
                        content:'①轻松挥舞球棒，魅力撬动全场。<br>②赛季在变，击球手的精准永远不变。',
                    },
                    'yxsre_pushuo':{
                        order:2,
                        content:'①常规操作~淡定。<br>②女孩的心，正如棒球轨迹一般，你猜不透。',
                    },
                    'yxsre_cexun':{
                        order:3,
                        content:'①你也能来个全垒打吗？<br>②青春，就是挥汗如雨的练习。',
                    },
                    'die':{
                        content:'可恶，姐支持的球队怎么会输。',
                    }
                }
            },

            'xy_yangrundi_dynamic':{
                level:"史诗",
                translation:"动态",
                info:"",
                order:1,//显示顺序，号越小越前面。
                skill:{
                    'xy_jihong':{
                        order:1,
                    },
                    'xy_rongyang':{
                        order:2,
                    },
                    'xy_polv':{
                        order:3,
                    },
                    'die':{
                    }
                }
            },
            //over
            
        }
    });
});