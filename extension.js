/*
 * File: \extension\英雄杀RE\extension.js
 * Project: noname
 * Created Date: Sunday Aug 21st 2022, 11:29:45 am
 * Author: Wenren Muyan
 * Comments: 
 * --------------------------------------------------------------------------------
 * Last Modified: 5/09/2022 02:48:13
 * Modified By: Wenren Muyan
 * --------------------------------------------------------------------------------
 * Copyright (c) 2022 - future Wenren Muyan
 * --------------------------------------------------------------------------------
 * HISTORY:
 * Date				By				Comments
 * --------------------------------------------------------------------------------
 */

/* 名词注释：
 * 区域内：手牌+装备+判定
 */


game.import("extension",function(lib,game,ui,get,ai,_status){
    return {
        name:"英雄杀RE",
        content:function(config,pack){
            lib.init.css(lib.assetURL + 'extension/英雄杀RE', 'extension');
            //平凡武将
            lib.rank.rarity.junk.addArray(['yxsre_yuefei','yxsre_goujian','yxsre_direnjie','yxsre_lishimin','yxsre_zuti','yxsre_zhaoyong','xy_linzhen','xy_yaosongwei','yxsre_chensheng']);
            //精品武将
            lib.rank.rarity.rare.addArray(["yxsre_yuji","yxsre_diaochan","yxsre_zhangsanfeng","xy_huangyang","yxsre_yangyanzhao"]);
            //史诗武将
            lib.rank.rarity.epic.addArray(["yxsre_lvzhi","yxsre_xiangyu",'yxsre_luban',"yxsre_liubang"]);
            //传说武将
            lib.rank.rarity.legend.addArray(["yxsre_yingzheng","yxsre_zhuyuanzhang","yxsre_huamulan","yxsre_sunwu","yxsre_yangguang"]);

            //势力
            /*var style_yxsre_han=document.createElement('style');
            style_yxsre_han.innerHTML=".player .identity[data-color='han'],";
            style_yxsre_han.innerHTML+="div[data-nature='han'],";
            style_yxsre_han.innerHTML+="span[data-nature='han'] {text-shadow: black 0 0 1px,rgba(203, 177, 255,1) 0 0 2px,rgba(203, 177, 255,1) 0 0 5px,rgba(203, 177, 255,1) 0 0 10px,rgba(203, 177, 255,1) 0 0 10px}";
            style_yxsre_han.innerHTML+="div[data-nature='hanm'],";
            style_yxsre_han.innerHTML+="span[data-nature='hanm'] {text-shadow: black 0 0 1px,rgba(203, 177, 255,1) 0 0 2px,rgba(203, 177, 255,1) 0 0 5px,rgba(203, 177, 255,1) 0 0 5px,rgba(203, 177, 255,1) 0 0 5px,black 0 0 1px;}";
            style_yxsre_han.innerHTML+="div[data-nature='hanmm'],";
            style_yxsre_han.innerHTML+="span[data-nature='hanmm'] {text-shadow: black 0 0 1px,rgba(203, 177, 255,1) 0 0 2px,rgba(203, 177, 255,1) 0 0 2px,rgba(203, 177, 255,1) 0 0 2px,rgba(203, 177, 255,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style_yxsre_han);*/
            //在lib.groupnature中建立相应的映射
            //将势力添加到势力库中 并指定势力的中文名称
            lib.group.push('zhou');
            lib.translate.zhou = '周';
            lib.groupnature.zhou = 'fire';
            lib.group.push('daqin');
            lib.translate.daqin = '秦';
            lib.groupnature.daqin = 'water';
            lib.group.push('chu');
            lib.translate.chu = '楚';
            lib.groupnature.chu = 'orange';
            lib.group.push('han');
            lib.translate.han = '汉';
            lib.groupnature.han = 'orange';
            lib.group.push('tang');
            lib.translate.tang = '唐';
            lib.groupnature.tang = 'water';
            lib.group.push('song');
            lib.translate.song = '宋';
            lib.groupnature.song = 'wood';
            lib.group.push('xin');
            lib.translate.xin = '新';
            lib.groupnature.xin = 'orange';

            lib.skill._yxsrezhenwangpeiyin = {
				trigger: { player: 'dieBegin', },
				priority: 2,
				forced: true,
				unique: true,
				popup: false,
				content: function () {
					game.playAudio('..', 'extension', '英雄杀RE/audio', trigger.player.name);
				}
			};

            //配音
        },
        
        precontent:function(yxsre){
            window.yxsre_import = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            lib.init.js(lib.assetURL + 'extension/英雄杀RE/skin.js', null);

            if(yxsre.enable){
                game.import("character",function(){
                    var yxsre = {
                        name:"yxsre",
                        connect:true,
                        characterSort:{
                            yxsre: {
                                yxsre_chunqiu:["yxsre_yingzheng","yxsre_goujian","yxsre_zhaoyong","yxsre_baiqi",'yxsre_sunwu','yxsre_luban','yxsre_chensheng'],
                                yxsre_dahan:["yxsre_lvzhi","yxsre_xiangyu","yxsre_yuji","yxsre_diaochan","yxsre_chensheng","yxsre_liubang"],
                                yxsre_nanbei:["yxsre_zuti","yxsre_huamulan"],
                                yxsre_datang:["yxsre_direnjie","yxsre_lishimin","yxsre_yangguang"],
                                yxsre_liangsong:["yxsre_yuefei","yxsre_lishishi","yxsre_yangyanzhao"],
                                yxsre_mingqing:["yxsre_zhuyuanzhang","yxsre_zhangsanfeng"],

                                yxsre_shijie:["yxsre_mingchenghuanghou","yxsre_aijiyanhou"],
                                xy_jinxiandai:["xy_denglijun"],
                                xy_jinzhao:["xy_linzhen","xy_yaosongwei","xy_huangyang","xy_qiusidan","xy_yangrundi",'xy_yanguoming'],
                                yxsre_undo:[],
                            },
                        },

                        character:{
                            yxsre_baosi:['famale','zhou',3,['yxsre_xihou'],[]],
                            yxsre_liubang:['male','han',4,["yxsre_yuren"],["die_audio"]],
                            yxsre_yangyanzhao:['male','song',4,["yxsre_kaiyang"],["die_audio"]],
                            yxsre_chensheng:['male','qun',4,['yxsre_zhanlv','yxsre_chuxing'],["die_audio"]],
                            yxsre_yangguang:['male','shen',4,['yxsre_weihuan'],["die_audio"]],
                            yxsre_luban:['male','shen',3,['yxsre_guifu','yxsre_shengong'],["die_audio"]],
                            yxsre_sunwu:['male','shen',3,['yxsre_bingsheng','yxsre_taolue'],["die_audio"]],
                            yxsre_huamulan:['unknown','shen',3,['yxsre_mili','yxsre_pushuo','yxsre_cexun'],["die_audio"]],
                            yxsre_lishishi:['female','song',3,['yxsre_manwu','yxsre_hongzhuang'],["die_audio"]],
                            yxsre_baiqi:['male','daqin',4,['yxsre_rentu'],["die_audio"]],
                            yxsre_zhaoyong:['male','zhou',4,['yxsre_hufu','yxsre_hanbei'],["die_audio"]],
                            yxsre_zhuyuanzhang:['male','shen',4,['yxsre_qiangyun'],["die_audio"]],
                            yxsre_zuti:['male','qun',4,['yxsre_qiwu','yxsre_zhitui'],["die_audio"]],
                            yxsre_lishimin:['male','tang',4,['yxsre_kongju','yxsre_zunzi'],["die_audio"]],
                            yxsre_direnjie:['male','tang',3,['yxsre_shentan','yxsre_kanpo'],["die_audio"]],
                            yxsre_goujian:['male','zhou',3,['yxsre_keji','yxsre_tuqiang'],["die_audio"]],
                            yxsre_zhangsanfeng:['male','shen',3,['yxsre_wudang','yxsre_taiji'],["die_audio"]],
                            yxsre_yuefei:['male','song',4,['yxsre_wumu'],["die_audio"]],
                            yxsre_aijiyanhou:['female','western',3,['yxsre_seyou','yxsre_sheshi'],["die_audio"]],
                            yxsre_yingzheng:['male','daqin',4,['yxsre_batu','yxsre_yuyu'],['zhu',"die_audio"]],
                            yxsre_lvzhi:['female','han',3,['yxsre_zhensha','yxsre_xumou'],["die_audio"]],
                            yxsre_xiangyu:['male','chu',4,['yxsre_wushuang','yxsre_bawang'],["die_audio"]],
                            yxsre_yuji:['female','chu',3,['yxsre_chuyao','yxsre_bieji'],["die_audio"]],
                            yxsre_diaochan:['female','han',3,['yxsre_zhunwu','yxsre_biyue'],["die_audio"]],
                            yxsre_mingchenghuanghou:['female','western',3,['yxsre_tiewan','yxsre_juecha'],["die_audio"]],
                            //xinyu
                            xy_yanguoming:['male','xin',4,['xy_qinkuang'],[]],
                            xy_yangrundi:['male','xin',4,['xy_jihong','xy_rongyang','xy_polv'],[]],
                            xy_qiusidan:['female','xin',3,['xy_shujin','xy_fuyuan'],[]],
                            xy_denglijun:['female','xin',3,['xy_miaoyin','xy_youyang'],[]],
                            xy_linzhen:['male','xin',3,['xy_zhenhui'],[]],
                            xy_yaosongwei:['male','xin',4,['xy_biqin'],[]],
                            xy_huangyang:['male','xin',3,['xy_danmei','xy_qiyuan'],[]],
                        },

                        card:{
                            yxsre_fenghuolangyan:{
                                audio:true,
                                image:"ext:英雄杀RE/image/card/yxsre_fenghuolangyan.png",
                                fullskin:false,
                                type:"trick",
                                enable:true,
                                derivation:'yxsre_baosi',
                                selectTarget:1,
                                onLose:function(){
                                    card.fix();
                                    card.remove();
                                    card.destroyed=true;
                                    //game.log(card,'被销毁了');
                                },
                                filterTarget:function(card,player,target){
                                    return target!=player;
                                },
                                content:function(){
                                    player.draw();
                                },
                                ai:{                    //zhen's ai
                                    order:5,
                                    basic:{
                                        useful:function(card,i){
                                            if(_status.event.player.hp>1){
                                                if(i==0) return 4;
                                                return 1;
                                            }
                                            if(i==0) return 7.3;
                                            return 3;
                                        },
                                        value:function(card,player,i){
                                            if(player.hp>1){
                                                if(i==0) return 5;
                                                return 1;
                                            }
                                            if(i==0) return 7.3;
                                            return 3;
                                        },
                                    },
                                    result:{
                                        target:function(player,target){
                                            if(target&&target.isPhaseUsing()&&target.hp==1&&!target.countCards("h","tao")) return 0;
                                            if(target.hasSkill('dz_zhen_skill')) return 0;
                                            if(target&&target.isDying()) return 2;
                                            if(target&&!target.isPhaseUsing()) return 0;
                                            if(lib.config.mode=='stone'&&!player.isMin()){
                                                if(player.getActCount()+1>=player.actcount) return 0;
                                            }
                                            var shas=player.getCards('h','sha');
                                            if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('h','zhuge'))){
                                                return 0;
                                            }
                                            shas.sort(function(a,b){
                                                return get.order(b)-get.order(a);
                                            })
                                            var card;
                                            if(shas.length){
                                                for(var i=0;i<shas.length;i++){
                                                    if(lib.filter.filterCard(shas[i],target)){
                                                        card=shas[i];break;
                                                    }
                                                }
                                            }
                                            else if(player.hasSha()&&player.needsToDiscard()){
                                                if(player.countCards('h','hufu')!=1){
                                                    card={name:'sha'};
                                                }
                                            }
                                            if(card){
                                                if(game.hasPlayer(function(current){
                                                    return (get.attitude(target,current)<0&&
                                                        target.canUse(card,current,true,true)&&
                                                        !current.hasSkillTag('filterDamage',null,{
                                                            player:player,
                                                            card:card,
                                                            dz_zhen:true,
                                                        })&&
                                                        get.effect(current,card,target)>0);
                                                })){
                                                    return 1;
                                                }
                                            }
                                            return 0;
                                        },
                                    },
                                    tag:{
                                        use:1,
                                        useSha:1,
                                        loseCard:1,
                                    },
                                }
                            }
                        },

                        skill:{
                            yxsre_xihou:{
                                audio:2,
                                enable:"phaseUse",
                                usable:1,
                                position:"h",
                                filterCard:function (card){
                                    return card.name=='sha';
                                },
                                content:function(){
                                    /*if(!lib.inpile.contains('yxsre_fenghuolangyan')) lib.inpile.add('yxsre_fenghuolangyan');
                                    if(!_status.yxsre_fenghuolangyan_suits) _status.yxsre_fenghuolangyan_suits=lib.suit.slice(0);
                                    var list=_status.yxsre_fenghuolangyan_suits.randomRemove(2).map(function(i){
                                        return game.createCard2('yxsre_fenghuolangyan',i,get.rand(1,13));
                                    });
                                    if(list.length) player.gain(list,'gain2','log');*/
                                    if(lib.card["yxsre_fenghuolangyan"]){
                                        var card=game.createCard("yxsre_fenghuolangyan",lib.card["yxsre_fenghuolangyan"].suit,12);
                                        player.$gain2(card,false);
                                    }
                                    game.delayx();
                                    player.gain(card,'gain2');
                                },
                            },

                            yxsre_yuren:{
                                audio:"ext:英雄杀RE/audio:2",
                                enable:'phaseUse',
                                filter:function(event,player){
                                    return game.countPlayer(function(current){
                                        return current!=player&&current.countCards('he')&&(!player.storage.yxsre_yuren||!player.storage.yxsre_yuren.contains(current));
                                    })&&!player.hasSkill('yxsre_yuren2');
                                },
                                filterTarget:function(card,player,target){
                                    return target.countCards('he')&&target!=player&&(!player.storage.yxsre_yuren||!player.storage.yxsre_yuren.contains(target));
                                },
                                content:function(){
                                    'step 0'
                                    if(!player.storage.yxsre_yuren) player.storage.yxsre_yuren=[];
                                    player.storage.yxsre_yuren.push(target);
                                    player.discardPlayerCard(target,'he',true);
                                    'step 1'
                                    if(get.type(result.links[0],'trick')=='equip') player.loseHp();
                                    if(get.type(result.links[0],'trick')=='trick') player.gain(result.links[0],'gain2');
                                    game.log(get.color(result.links[0]));
                                    if(get.color(result.links[0])=='red') event.goto(2);
                                    else event.finish();
                                    'step 2'
                                    player.chooseToDiscard('he','弃置一张红色牌，否则“驭人”无效直到回合结束',function(card){
                                        return get.color(card)=='red';
                                    }).set('ai',function(card){
                                        return 6-get.value(card);
                                    });
                                    'step 3'
                                    if(!result.bool){
                                        player.addTempSkill('yxsre_yuren2');
                                    }
                                },
                                onremove:["yxsre_yuren"],
                                ai:{
                                    order:8,
                                    expose:0.3,
                                    threaten:1.5,
                                    result:{
                                        target:-1,
                                        player:0.2,
                                    }
                                },
                                group:'yxsre_yuren_draw',
                                subSkill:{
                                    draw:{
                                        trigger:{
                                            player:'phaseEnd',
                                        },
                                        direct:true,
                                        filter:function(event,player){
                                            return player.storage.yxsre_yuren&&player.storage.yxsre_yuren.length>=3;
                                        },
                                        content:function(){
                                            player.logSkill('yxsre_yuren');
                                            player.chooseDrawRecover(2,true,function(event,player){
                                                if(player.hp<=1&&player.isDamaged()) return 'recover_hp';
                                                return 'draw_card';
                                            });
                                        }
                                    }
                                }
                            },

                            yxsre_yuren2:{},

                            yxsre_kaiyang:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{
                                    global:"useCardAfter",
                                },
                                mark:true,
                                direct:true,
                                init:function(player,skill){
                                    player.storage.damageCardNum=0;
                                },
                                intro:{
                                    content:function(event,player){
                                        return '已经使用了'+get.cnNumber(player.storage.damageCardNum)+'张伤害牌';
                                    }
                                },
                                filter:function(event,player){
                                    return player.storage.damageCardNum>=6;
                                },
                                content:function(){
                                    'step 0'
                                    player.storage.damageCardNum=0;
                                    player.chooseTarget('选择一名角色对其造成1点伤害',true).set('ai',function(target){
                                        return get.damageEffect(target,player,player);
                                    });
                                    'step 1'
                                    if(result.bool){
                                        player.logSkill('yxsre_kaiyang',result.targets[0]);
                                        result.targets[0].damage();
                                    }
                                    else event.finish();
                                },
                                ai:{
                                    expose:1,
                                    threaten:2,
                                },
                                group:'yxsre_kaiyang_add',
                            },

                            yxsre_kaiyang_add:{
                                log:false,
                                trigger:{
                                    global:"useCardAfter",
                                },
                                filter:function(event,player){
                                    return get.tag(event.card,'damage');
                                },
                                forced:true,
                                content:function(){
                                    player.storage.damageCardNum++;
                                },
                                sub:true,
                            },


                            xy_qinkuang:{
                                trigger:{
                                    player:"useCard2",
                                },
                                frequent:true,
                                preHidden:true,
                                filter:function(event,player){
                                    return get.translation(event.card)&&event.card.isCard;
                                },
                                content:function(){
                                    'step 0'
                                    event.num=get.translation(trigger.card).split(/[·【]/)[0].length;
                                    if(trigger.card.nature) event.num--;
                                    if(event.num>player.hp){
                                        player.draw();
                                        //player.logSkill('xy_qinkuang');
                                    }
                                    if(event.num==player.hp){
                                        var goon=false;
                                        var info=get.info(trigger.card);
                                        if((get.type(trigger.card)=='basic'||get.type(trigger.card)=='trick')&&trigger.targets&&!info.multitarget){
                                            var players=game.filterPlayer();
                                            for(var i=0;i<players.length;i++){
                                                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                                                    goon=true;break;
                                                }
                                            }
                                        }
                                    }
                                    if(goon){
                                        player.chooseTarget('钦狂：是否多指定一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
                                            var trigger=_status.event;
                                            if(trigger.targets.contains(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
                                        }).set('ai',function(target){
                                            var trigger=_status.event.getTrigger();
                                            var player=_status.event.player;
                                            return get.effect(target,trigger.card,player,player);
                                        }).set('targets',trigger.targets).set('card',trigger.card);
                                    }
                                    'step 1'
                                    if(result.bool){
                                        if(!event.isMine()) game.delayx();
                                        event.target=result.targets[0];
                                    }
                                    else{
                                        event.finish();
                                    }
                                    'step 2'
                                    if(event.target){
                                        player.logSkill('xy_qinkuang',event.target);
                                        trigger.targets.add(event.target);
                                    }
                                    event.finish();
                                },
                            },

                            xy_polv:{
                                trigger:{
                                    player:"phaseEnd",
                                },
                                forced:true,
                                skillAnimation:true,
                                animationColor:"water",
                                unique:true,
                                derivation:['xingshang','luanwu','xinfu_qiai','baiyi'],
                                filter:function(event,player){
                                    return game.countPlayer(function(current){
                                        if(!current.storage.hpMark) return false;
                                        if(current.hp>current.storage.hpMark) return true;
                                        return false;
                                    });
                                },
                                content:function(){
                                    'step 0'
                                    for(var i of game.players){
                                        if(i.storage.hpMark) delete i.storage.hpMark;
                                    }
                                    player.awakenSkill('xy_polv');
                                    player.loseMaxHp();
                                    player.addSkillLog('xingshang');
                                    'step 1'
                                    var list=['乱武','七哀','败移'];
                                    event.videoId=lib.status.videoId++;
                                    var func=function(id){
                                        var dialog=ui.create.dialog('forcebutton');
                                        dialog.videoId=id;
                                        dialog.add('魄虑：选择一个技能发动');
                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【乱武】</div><div>所有其他角色依次选择一项：1，对距离为1的角色使用一张【杀】；2，失去1点体力。</div></div>');
                                        dialog.addText(' <br> ');
                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【七哀】</div><div>所有角色依次交给你一张牌</div></div>');
                                        dialog.addText(' <br> ');
                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【败移】</div><div>你选择两名角色，交换他们的座次。</div></div>');
                                        dialog.addText(' <br> ');
                                    }
                                    func(event.videoId);
                                    player.chooseControl(list);
                                    'step 2'
                                    game.broadcastAll('closeDialog',event.videoId);
                                    if(result.control=='乱武'){
                                        var next=game.createEvent('xy_polv_luanwu');
                                        next.player=player;
                                        next.setContent(lib.skill.luanwu.content);
                                        player.$fullscreenpop('乱武','fire');
                                        player.line(game.players);
                                        //player.removeSkill('luanwu');
                                        event.finish();
                                    }
                                    else if(result.control=='七哀'){
                                        var next=game.createEvent('xy_polv_qiai');
                                        next.player=player;
                                        next.setContent(lib.skill.xinfu_qiai.content);
                                        player.$fullscreenpop('七哀','water');
                                        player.line(game.players);
                                        //player.removeSkill('xinfu_qiai');
                                        event.finish();
                                    }
                                    else{
                                        event.goto(3);
                                    }
                                    'step 3'
                                    player.chooseTarget(2,'交换两名角色的位置',true).set('ai',function(target){
                                        if(player.hasUnknown()&&target!=player.next&&target!=player.previous) return 0;
                                        var distance=Math.pow(get.distance(player,target,'absolute'),2);
                                        if(!ui.selected.targets.length) return distance;
                                        var distance2=Math.pow(get.distance(player,ui.selected.targets[0],'absolute'),2);
                                        return Math.min(0,distance-distance2)
                                    });
                                    'step 4'
                                    if(result.targets.length==2){
                                        var next=game.createEvent('xy_polv_baiyi');
                                        next.player=player;
                                        next.targets=result.targets;
                                        next.setContent(lib.skill.baiyi.content);
                                        player.$fullscreenpop('败移','thunder');
                                        player.line(result.targets);
                                        //player.removeSkill('baiyi');
                                        event.finish();
                                    }
                                    else event.goto(1);
                                },
                                group:'xy_polv_hpMark',
                            },

                            xy_polv_hpMark:{
                                trigger:{
                                    player:"phaseBegin",
                                },
                                log:false,
                                forced:true,
                                content:function(){
                                    for(var i of game.players){
                                        i.storage.hpMark=i.hp;
                                    }
                                },
                                sub:true,
                            },

                            xy_jihong:{
                                trigger:{
                                    player:'phaseUseBegin',
                                },
                                filter:function(){
                                    return true;
                                },
                                content:function(){
                                    'step 0'
                                    if(!player.storage.jihong_target) player.storage.jihong_target=null;
                                    player.chooseTarget('对一名角色造成1点伤害',true).set('ai',function(target){
                                        if(get.attitude(player,target)){
                                            if(target.hp>1&&target.hasSkillTag('maixue')) return get.damageEffect(target,player,target);
                                            if(target.hp>1&&target.hp==target.maxHp) return 1;
                                            return 0;
                                        }
                                        else{
                                            if(target.hp>1&&target.hasSkillTag('maixue')) return get.damageEffect(target,player,target);
                                            if(target.hp>1&&target.hp==target.maxHp) return 0.5;
                                            if(target.hp==1) get.damageEffect(target,player,target);
                                            return get.damageEffect(target,player,target)/2;
                                        }
                                    })
                                    'step 1'
                                    if(result.bool){
                                        player.storage.jihong_target=result.targets[0];
                                        player.storage.jihong_target.damage();
                                    }
                                    else event.finish();
                                },
                                group:'xy_jihong_end',
                                subSkill:{
                                    end:{
                                        forced:true,
                                        trigger:{
                                            player:'phaseJieshuBegin',
                                        },
                                        filter:function(event,player){
                                            return player.storage.jihong_target;
                                        },
                                        content:function(){
                                            'step 0'
                                            var history=player.storage.jihong_target.getHistory('damage',function(evt){
                                                return evt.source==player&&evt.isPhaseUsing();
                                            }), num=0;
                                            for(var i of history){
                                                num+=i.num;
                                            }
                                            if(num){
                                                player.storage.jihong_target.recover(num);
                                            }
                                            'step 1'
                                            delete player.storage.jihong_target;
                                        },
                                        sub:true,
                                    }
                                }
                                
                            },

                            xy_rongyang:{
                                prompt:'是否摸一张牌',
                                trigger:{
                                    global:["recoverAfter","loseMaxHpEnd"],
                                },
                                filter:function(event,player){
                                    return event.player.hp==event.player.maxHp;
                                },
                                content:function(){
                                    player.draw();
                                }
                            },

                            yxsre_chuxing:{
                                unique:true,
                                enable:"phaseUse",
                                limited:true,
                                skillAnimation:"epic",
                                animationColor:"fire",
                                filterTarget:function(card,player,target){
                                    return target!=player;
                                },
                                selectTarget:-1,
                                multitarget:true,
                                multiline:true,
                                content:function(){
                                    "step 0"
                                    player.awakenSkill('yxsre_chuxing');
                                    event.current=player.next;
                                    event.currented=[];
                                    event.num=0;
                                    "step 1"
                                    event.currented.push(event.current);
                                    event.current.animate('target');
                                    event.current.chooseToDiscard('楚兴：弃置一张装备区内的牌，或受到1点伤害','e',false).set('ai',function(card){
                                        if(event.current.hp==1) return 10-get.value(card);
                                        return 6-get.value(card);
                                    });
                                    "step 2"
                                    if(!result.bool) event.current.damage();
                                    else event.num++;
                                    event.current=event.current.next;
                                    if(event.current!=player&&!event.currented.contains(event.current)){
                                        game.delay(0.5);
                                        event.goto(1);
                                    }
                                    "step 3"
                                    player.draw(event.num);
                                },
                                mark:true,
                                intro:{
                                    content:"limited",
                                },
                                init:function(player,skill){
                                    player.storage[skill]=false;
                                },
                                ai:{
                                    order:6,
                                    result:{
                                        player:function(player){
                                            if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
                                                if(game.zhu.hp==1&&game.zhu.countCards('e')==0) return 1.5;
                                            }
                                            var num=0;
                                            var players=game.filterPlayer();
                                            for(var i=0;i<players.length;i++){
                                                var att=get.attitude(player,players[i]);
                                                if(att>0) att=1;
                                                if(att<0) att=-1;
                                                if(players[i]!=player&&players[i].hp<=3){
                                                    if(players[i].countCards('e')==0) num+=att/players[i].hp;
                                                    else if(players[i].countCards('e')==1) num+=att/2/players[i].hp;
                                                    else if(players[i].countCards('e')==2) num+=att/4/players[i].hp;
                                                }
                                                if(players[i].hp==1&&players[i].countCards('e')==0) num+=att*1.5;
                                                if(players[i].hp==1&&players[i].countCards('e')>0) num+=att*0.8;
                                            }
                                            if(player.hp==1){
                                                return -num;
                                            }
                                            if(player.hp==2){
                                                return -game.players.length/4-num;
                                            }
                                            return -game.players.length/3-num;
                                        },
                                    },
                                },
                            },

                            yxsre_zhanlv:{
                                trigger:{
                                    player:"phaseDrawBegin1",
                                },
                                direct:true,
                                filter:function(event,player){
                                    return !event.numFixed&&game.countPlayer(function(current){
                                        return current!=player&&current.countCards('h');
                                    });
                                },
                                check:function(event,player){
                                    return game.countPlayer(function(current){
                                        return get.attitude(player,current)<=0&&get.effect(current,{name:'guohe'},player,player)*2>=2;
                                    })&&player.countCards('h')>=2;
                                },
                                content:function(){
                                    "step 0"
                                    event.num=2;
                                    player.chooseTarget(get.prompt2('yxsre_zhanlv'),1,function(card,player,target){
                                        return target.countCards('he')>1&&player!=target;
                                    }).set('ai',function(target){
                                        var att=get.attitude(_status.event.player,target);
                                        if(target.hasSkill('tuntian')) return att/10;
                                        return 1-att;
                                    });
                                    "step 1"
                                    if(result.bool){
                                        player.logSkill('yxsre_zhanlv');
                                        trigger.changeToZero();
                                        event.target=result.targets[0];
                                        event.num=2;
                                        event.goto(2);
                                    }
                                    else event.finish();
                                    "step 2"
                                    event.num--;
                                    player.discardPlayerCard(event.target,'he',true);
                                    "step 3"
                                    if(result.cards){
                                        event.card=result.cards[0];
                                        if(get.subtype(result.cards[0],false)=='equip1'&&get.position(result.cards[0],true)=='d'){
                                            player.gain(result.cards[0],'gain2');
                                            player.chooseUseTarget(event.card);
                                        }
                                        else if(event.card.name=='sha'&&player.canUse(event.card,event.target,false)){
                                            player.useCard(event.card,target,false);
                                        }
                                        if(event.num>0) event.goto(2);
                                        else event.finish();
                                    }
                                }
                            },

                            yxsre_weihuan:{
                                marktext:'大业',
                                unique:true,
                                trigger:{
                                    global:"phaseBefore",
                                    player:"enterGame",
                                },
                                forced:true,
                                filter:function(event,player){
                                    return (event.name!='phase'||game.phaseNumber==0);
                                },
                                content:function(){
                                    "step 0"
                                    player.addToExpansion(get.cards(3),'gain2').gaintag.add('yxsre_weihuan');
                                    "step 1"
                                    var cards=player.getExpansions('yxsre_weihuan');
                                    if(!cards.length||!player.countCards('h')){
                                        event.finish();
                                        return;
                                    }
                                    var next=player.chooseToMove('巍焕：是否交换“大业”和手牌？');
                                    next.set('list',[
                                        [get.translation(player)+'的“大业”',cards],
                                        ['手牌区',player.getCards('h')],
                                    ]);
                                    next.set('filterMove',function(from,to){
                                        return typeof to!='number';
                                    });
                                    next.set('processAI',function(list){
                                        var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
                                            return get.useful(a)-get.useful(b);
                                        }),cards2=cards.splice(0,player.getExpansions('yxsre_weihuan').length);
                                        return [cards2,cards];
                                    });
                                    "step 2"
                                    if(result.bool){
                                        var pushs=result.moved[0],gains=result.moved[1];
                                        pushs.removeArray(player.getExpansions('yxsre_weihuan'));
                                        gains.removeArray(player.getCards('h'));
                                        if(!pushs.length||pushs.length!=gains.length) return;
                                        player.addToExpansion(pushs,player,'giveAuto').gaintag.add('yxsre_weihuan');
                                        game.log(player,'将',pushs,'作为“大业”置于武将牌上');
                                        player.gain(gains,'gain2');
                                    }
                                },
                                intro:{
                                    markcount:"expansion",
                                    mark:function(dialog,content,player){
                                        var content=player.getExpansions('yxsre_weihuan');
                                        if(content&&content.length){
                                            if(player==game.me||player.isUnderControl()){
                                                dialog.addAuto(content);
                                            }
                                            else{
                                                return '共有'+get.cnNumber(content.length)+'张“大业”';
                                            }
                                        }
                                    },
                                    content:function(content,player){
                                        var content=player.getExpansions('yxsre_weihuan');
                                        if(content&&content.length){
                                            if(player==game.me||player.isUnderControl()){
                                                return get.translation(content);
                                            }
                                            return '共有'+get.cnNumber(content.length)+'张“大业”';
                                        }
                                    },
                                },
                                onremove:function(player){
                                    player.removeGaintag('yxsre_weihuan');
                                },
                                mod:{
                                    maxHandcard:function(player,num){
                                        return num+player.getExpansions('yxsre_weihuan').length;
                                    },
                                },
                                group:['yxsre_weihuan_drawAfter','yxsre_weihuan_damage'],
                                subSkill:{
                                    drawAfter:{
                                        trigger:{
                                            player:"phaseDrawAfter",
                                        },
                                        direct:true,
                                        filter:function(event,player){
                                            return player.getExpansions('yxsre_weihuan').length>0&&player.countCards('h')>0;
                                        },
                                        content:function(){
                                            "step 0"
                                            var cards=player.getExpansions('yxsre_weihuan');
                                            if(!cards.length||!player.countCards('h')){
                                                event.finish();
                                                return;
                                            }
                                            var next=player.chooseToMove('巍焕：是否交换“大业”和手牌？');
                                            next.set('list',[
                                                [get.translation(player)+'的"大业"',cards],
                                                ['手牌区',player.getCards('h')],
                                            ]);
                                            next.set('filterMove',function(from,to){
                                                return typeof to!='number';
                                            });
                                            next.set('processAI',function(list){
                                                var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
                                                    return get.value(a)-get.value(b);
                                                }),cards2=cards.splice(0,player.getExpansions('yxsre_weihuan').length);
                                                return [cards2,cards];
                                            });
                                            "step 1"
                                            if(result.bool){
                                                var pushs=result.moved[0],gains=result.moved[1];
                                                pushs.removeArray(player.getExpansions('yxsre_weihuan'));
                                                gains.removeArray(player.getCards('h'));
                                                if(!pushs.length||pushs.length!=gains.length) return;
                                                player.logSkill('yxsre_weihuan');
                                                player.addToExpansion(pushs,player,'giveAuto').gaintag.add('yxsre_weihuan');
                                                game.log(player,'将',pushs,'作为“大业”置于武将牌上');
                                                player.gain(gains,'gain2');
                                            }
                                        },
                                    },
                                    damage:{
                                        enable:'phaseUse',
                                        filter:function(event,player){
                                            return player.getExpansions('yxsre_weihuan').length>0;
                                        },
                                        chooseButton:{
                                            dialog:function(event,player){
                                                return ui.create.dialog('巍焕',player.getExpansions('yxsre_weihuan'),'hidden')
                                            },
                                            check:function(button){
                                                var player=_status.event.player;
                                                var cards=player.getCards('h',function(card){
                                                    return get.type(button,'trick',false)==get.type(card,'trick',false)
                                                });
                                                return cards.length+1;
                                            },
                                            backup:function(links,player){
                                                return {
                                                    filterTarget:function(card,player,target){
                                                        return target!=player;
                                                    },
                                                    filterCard:function(){return false},
                                                    selectCard:-1,
                                                    card:links[0],
                                                    delay:false,
                                                    content:lib.skill.yxsre_weihuan_damage.contentx,
                                                    ai:{
                                                        order:2,
                                                        result:{
                                                            target:-1.5,
                                                            player:function(player, target){
                                                                var max=0;
                                                                var cards=player.getExpansions('yxsre_weihuan');
                                                                for(var i in cards){
                                                                    max=Math.max(max,player.getCards('h',function(card){
                                                                        return get.type(card,null,false)==get.type(i,null,false);
                                                                    }))
                                                                }
                                                                if(target.hp>1) return -6*(1/(player.maxHp-player.hp+1))+Math.sqrt(1.5*max);
                                                                else return Math.sqrt(player.maxHp/2+1);
                                                            }
                                                        },
                                                    },
                                                }
                                            },
                                            prompt:function(){return '请选择〖巍焕〗的目标'},
                                        },
                                        contentx:function(){
                                            "step 0"
                                            var card=lib.skill.yxsre_weihuan_damage_backup.card;
                                            player.loseToDiscardpile(card);
                                            if(!player.storage.yxsre_weihuan_type) player.storage.yxsre_weihuan_type=[];
                                            player.storage.yxsre_weihuan_type.add(get.type2(card));
                                            "step 1"
                                            player.addTempSkill("yxsre_weihuan2");
                                            target.damage('nocard');
                                        },
                                        ai:{
                                            order:1,
                                            combo:"yxsre_weihuan",
                                            result:{
                                                player:1,
                                            },
                                        },
                                    },
                                }
                            },

                            yxsre_weihuan2:{
                                charlotte:true,
                                group:['yxsre_weihuan2_notDead','yxsre_weihuan2_dead'],
                                subSkill:{
                                    notDead:{
                                        trigger:{
                                            global:["dieAfter","damageEnd"],
                                        },
                                        forced:true,
                                        popup:false,
                                        filter:function(event,player){
                                            return event.player.isAlive()&&event.getParent().name=='yxsre_weihuan_damage_backup';
                                        },
                                        content:function(){
                                            player.loseMaxHp();
                                            if(!player.hasSkill('yxsre_weihuan3')) player.addTempSkill('yxsre_weihuan3',{player:'phaseBefore'});
                                        },
                                    },
                                    dead:{
                                        trigger:{
                                            global:["dieAfter","damageEnd"],
                                        },
                                        forced:true,
                                        popup:false,
                                        filter:function(event,player){
                                            return !event.player.isAlive()&&event.getParent().name=='yxsre_weihuan_damage_backup';
                                        },
                                        content:function(){
                                            'step 0'
                                            player.gainMaxHp();
                                            player.recover();
                                            'step 1'
                                            player.draw(player.maxHp);
                                        },
                                    }
                                }
                            },

                            yxsre_weihuan3:{                    //ж
                                mark:true,
                                marktext:'ж',
                                intro:{
                                    content:function(storage,player){
                                        var text='';
                                        for(var i of player.storage.yxsre_weihuan_type){
                                            text+=get.translation(i)+'，';
                                        }
                                        text+='视为【杀】';
                                        return text;
                                    }
                                },
                                preHidden:true,
                                mod:{
                                    cardname:function(card,player){
                                        if(player.storage.yxsre_weihuan_type.contains(get.type(card,'trick',false))) return 'sha';
                                    },
                                    cardUsable:function(card,player,num){
                                        if(card.name=='sha') return Infinity;
                                    },
                                    targetInRange:function(card,player){
                                        if(card.name=='sha') return true;
                                    },
                                },
                                ai:{
                                    skillTagFilter:function(player){
                                        if(!player.countCards('h',function(card){
                                            if(player.storage.yxsre_weihuan_type.contains(get.type(card,'trick',false))) return true;
                                        })) return false;
                                    },
                                    respondSha:true,
                                },
                                audio:2,
                                trigger:{
                                    player:["useCard1","respond"],
                                },
                                firstDo:true,
                                forced:true,
                                filter:function(event,player){
                                    return event.card.name=='sha'&&!event.skill&&
                                    event.cards.length==1&&player.storage.yxsre_weihuan_type.contains(get.type(event.cards[0],'trick',false))
                                },
                                content:function(){},
                                onremove:function(player){
                                    if(player.storage.yxsre_weihuan_type) delete player.storage.yxsre_weihuan_type;
                                }
                            },

                            xy_fuyuan:{
                                trigger:{
                                    player:["damageEnd"],
                                },
                                filter:function(event,player){
                                    return event.source&&player.countCards('h');
                                },
                                check:function(event,player){
                                    return -get.attitude(player,event.source);
                                },
                                content:function(){
                                    'step 0'
                                    player.chooseCard('h',get.prompt2('xy_fuyuan')).set('ai',function(card){
                                        if(get.color(card)=='red') return 2;
                                        else return 1;
                                    });
                                    'step 1'
                                    if(result.bool){
                                        player.logSkill('xy_fuyuan');
                                        player.showCards(result.cards);
                                        event.suit=get.suit(result.cards[0]);
                                        var hs=trigger.source.getCards('h');
                                        trigger.source.showCards(hs,get.translation(trigger.source)+'展示了所有手牌');
                                        game.delay();
                                        trigger.source.discard(trigger.source.getCards('he',function(card){
                                            return get.suit(card)==event.suit;
                                        }));
                                    }
                                },
                                ai:{
                                    "maixie_defend":true,
                                    expose:0.4,
                                    effect:{
                                        target:function(card,player,target){
                                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                                            return 0.8;
                                        },
                                    },
                                },
                            },

                            xy_shujin:{                                   //TODO: 
                                trigger:{
                                    player:["chooseToUseBegin"],
                                },
                                filter:function(event,player){
                                    if(event.xy_shujin) return false;
                                    if(event.filterCard({name:'wuxie',isCard:true},player,event)) return true;
                                    return false;
                                },
                                delay:false,
                                check:function(event, player){
                                    if(event&&(event.ai||event.ai1)){
                                        var ai=event.ai||event.ai1;
                                        var tmp=_status.event;
                                        _status.event=event;
                                        var result=ai({name:'wuxie'},_status.event.player,event);
                                        _status.event=tmp;
                                        return result>=0;
                                    }
                                    return false;
                                },
                                content:function(){
                                    'step 0'
                                    trigger.xy_shujin=true;
                                    player.judge(function(card){
                                        if(get.color(card)=='black') return 1.5;
                                        return -1.5;
                                    })
                                    'step 1'
                                    event.card=result.card;
                                    if(result.judge>0){
                                        trigger.untrigger();
                                        trigger.set('responded',true);
                                        trigger.result={bool:true,card:{name:'wuxie',isCard:true}};
                                        event.goto(4);
                                    }
                                    else{
                                        event.goto(2);
                                    }
                                    'step 2'
                                    player.chooseBool('是否将'+get.translation(event.card)+'置牌堆顶？').set('ai',function(){
                                        return false;
                                    });
                                    'step 3'
                                    if(result.bool){
                                        event.card.fix();
                                        ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                                    }
                                    'step 4'
                                    game.updateRoundNumber();
                                },
                                hiddenCard:function(player,name){
                                    if(name=='wuxie') return true;
                                },
                                threaten:2,
                                ai:{
                                    order:11,
                                    expose:0.2,
                                },
                            },


                            yxsre_guifu:{
                                enable:'phaseUse',
                                usable:1,
                                filterTarget:function(card,player,target){
                                    return player!=target&&target.countCards('e')>0;
                                },
                                content:function(){
                                    'step 0'
                                    player.discardPlayerCard(target,'e',true);
                                    'step 1'
                                    game.asyncDraw([player,target]);
                                },
                                ai:{
                                    order:8,
                                    threaten:1.5,
                                    result:{
                                        order:9,
                                        target:function(player,target){
                                            var m=0;
                                            var max=0;
                                            var ecards=target.getCards('e');
                                            for(var i of ecards){
                                                max=Math.max(max,get.value(i,target));
                                            }
                                            if(target.hasSkillTag('noe')) return m=2;
                                            return -max+m;
                                        },
                                        player:0.5,
                                    }
                                }
                            },

                            yxsre_shengong:{                                        //TODO: ai rewrite
                                enable:'phaseUse',
                                usable:5,
                                filterTarget:function(card,player,target){
                                    return target.hasCard(function(card){
                                        return !get.info(card).unique;
                                    },'e');
                                },
                                check:function(card){
                                    return 6-get.value(card);
                                },
                                filterCard:function(card){
                                    var info=lib.card[card.name];
                                    if(!info) return false;
                                    return !info.image&&!info.fullimage;
                                },
                                discard:false,
                                lose:false,
                                content:function(){
                                    'step 0'
                                    var next=player.choosePlayerCard(target,'e',true);
                                    next.ai=function(button){
                                        return get.buttonValue;
                                    }
                                    next.filterButton=function(button){
                                        return !get.info(button.link).unique;
                                    }
                                    'step 1'
                                    if(result.links[0]){
                                        cards[0].init([result.links[0].suit,result.links[0].number,result.links[0].name,result.links[0].nature]);
                                        event.card=cards[0];
                                        player.chooseTarget('选择一个角色装备'+get.translation(result.links),function(card,player,target){
                                            return !target.isMin();
                                        }).ai=function(target){
                                            //if(!target.countCards('e',{subtype:get.subtype(event.card)})){
                                            return get.effect(target,event.card,player,player);
                                            //}
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
                                    order:10,
                                    threaten:1.5,
                                    result:{
                                        player:function(player,target){
                                            return 1;
                                            /*var max=0;
                                            var ecards=target.getCards('e');
                                            for(var i of ecards){
                                                if(!player.getCards('e').contains(i)) max=Math.max(max,get.value(i,target));
                                            }
                                            return max;*/
                                        }
                                    }
                                }
                            },

                            yxsre_taolue:{
                                mod:{
                                    maxHandcard:function(player,num){
                                        return 13;
                                    }
                                },
                            },

                            yxsre_bingsheng:{
                                enable:"phaseUse",
                                usable:1,
                                position:"he",
                                filterCard:function(card){
                                    var suit=get.suit(card);
                                    for(var i=0;i<ui.selected.cards.length;i++){
                                        if(get.suit(ui.selected.cards[i])==suit) return false;
                                    }
                                    return true;
                                },
                                selectCard:[1,4],
                                complexCard:true,
                                filterTarget:function(card,player,target){
                                    if(target.hp==Infinity) return false;
                                    if(target.hp>player.hp&&target.hp-player.hp==ui.selected.cards.length) return true;
                                    if(target.hp<player.hp&&target.hp<target.maxHp&player.hp-target.hp==ui.selected.cards.length) return true;
                                    return false;
                                },
                                check:function(card){
                                    return 8-get.value(card);
                                },
                                content:function(){
                                    var num=target.hp-player.hp;
                                    if(num>4){
                                        num=4;
                                    }
                                    if(num<-4){
                                        num=-4;
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

                            xy_qiyuan:{
                                trigger:{
                                    player:"phaseZhunbeiBegin",
                                },
                                frequent:true,
                                content:function(){
                                    'step 0'
                                    player.judge(function(card){
                                        if(get.suit(card)!='heart') return 1;
                                        else return 2;
                                    })
                                    'step 1'
                                    if(result.bool){
                                        event.card=result.card;
                                        if(get.suit(result.card)=='heart'){
                                            player.chooseDrawRecover(2,true,function(event,player){
                                                if(player.hp==1&&player.isDamaged()) return 'recover_hp';
                                                return 'draw_card';
                                            });
                                            event.finish();
                                        }
                                        else event.goto(2)
                                    }
                                    'step 2'
                                    player.chooseTarget(true,'令一名角色获得'+get.translation(event.card),true).set('ai',function(target){
                                        return get.attitude(player,target);
                                    });
                                    'step 3'
                                    if(result.bool){
                                        result.targets[0].gain(event.card,'gain2');
                                    }
                                    else event.finish();
                                },
                            },

                            xy_danmei:{
                                trigger:{
                                    player:["loseAfter","gainAfter"],
                                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                },
                                filter:function(event,player){
                                    if(player==_status.currentPhase) return false;
                                    var evt=event.getl(player);
                                    if(!evt||!evt.cards2||!evt.cards2.length) return false;
                                    return true;
                                },
                                
                                content:function(){
                                    'step 0'
                                    event.numx=trigger.cards.length;
                                    player.chooseTarget(true,'选择一名其他角色摸'+get.cnNumber(event.numx)+'张牌',function(card,player,target){
                                        return target!=player;
                                    }).set('ai',function(target){
                                        return get.effect(target,{name:'wuzhong'},player,player)/2*event.numx;
                                    })
                                    'step 1'
                                    if(result.bool){
                                        result.targets[0].draw(event.numx);
                                        player.logSkill('xy_danmei',result.targets[0]);
                                    }
                                },
                            },

                            yxsre_pushuo:{
                                audio: "ext:英雄杀RE/audio:2",
                                priority:12,
                                trigger:{
                                    global:"gameStart",
                                },
                                forced:true,
                                mark:true,
                                marktext:"☯",
                                zhuanhuanji:true,
                                intro:{
                                    content:function(storage,player,skill){
                                        var sex='性别：'+get.translation(player.sex);
                                        if(player.storage.yxsre_pushuo) return sex+'。造成伤害后，可以摸一张牌，将性别转换为男性';
                                        else return sex+'。回合开始前/结束后，可以弃置一张装备牌，回复1点体力，将性别转换为女性';
                                    },
                                },
                                init:function(player,skill){
                                    player.storage.yxsre_pushuo=Math.round(Math.random());
                                },
                                content:function(){
                                    player.sex=player.storage.yxsre_pushuo?'female':'male';
                                    game.log(player,'将性别变更为','#g'+get.translation(player.sex)+'性');
                                },
                                group:['yxsre_pushuo_toMale','yxsre_pushuo_toFemale'],
                                subSkill:{
                                    
                                }
                            },

                            yxsre_pushuo_toMale:{
                                audio:"ext:英雄杀RE/audio:1",
                                unique:true,
                                priority:11,
                                trigger:{
                                    source:["damageEnd"],
                                },
                                prompt:'永久获得一个“迷离”选择的技能，然后将性别转变为男性',
                                filter:function(event,player){
                                    return player.storage.yxsre_pushuo;
                                },
                                check:function(){
                                    return true;
                                },
                                content:function(){
                                    'step 0'
                                    player.changeZhuanhuanji('yxsre_pushuo');
                                    /**/
                                    if(player.storage.cexunSkill){
                                        var list=player.storage.cexunSkill;
                                        list.push('cancel2');
                                        delete player.storage.cexunSkill;
                                        if(list.contains('jintao')) list.remove('jintao');
                                        if(list.contains('xiaoji')) list.remove('xiaoji');
                                        player.chooseControl(list);
                                    }
                                    else event.finish();
                                    'step 1'
                                    if(result.control!='cancel2'){
                                        //player.draw();
                                        if(player.hasSkill(result.control)){
                                            player.removeSkill(result.control);
                                        }
                                        player.addSkill(result.control);
                                    }
                                    else event.goto(2);
                                    'step 2'
                                    player.sex='male';
                                    game.log(player,'将性别变更为','#g'+'男'+'性');
                                },
                                //sub:true,
                            },

                            yxsre_pushuo_toFemale:{
                                audio:"ext:英雄杀RE/audio:1",
                                unique:true,
                                priority:11,
                                trigger:{
                                    player:["phaseBegin","phaseEng"],
                                },
                                filter:function(event,player){
                                    return player.countCards('he',{type:'equip'})&&!player.storage.yxsre_pushuo;
                                },
                                check:function(event,player){
                                    if(player.hasSkill('xiaoji')) return true;
                                    return false;
                                },
                                content:function(){
                                    'step 0'
                                    player.chooseToDiscard('he','是否弃置一张装备牌将性别转换为女性？',function(card,player){
                                        return get.type(card)=='equip';
                                    }).ai=function(card){
                                        return 7-get.value(card);
                                    };
                                    'step 1'
                                    if(result.bool){
                                        player.changeZhuanhuanji('yxsre_pushuo');
                                        player.recover();
                                        player.sex='female';
                                        game.log(player,'将性别变更为','#g'+'女'+'性');
                                    }
                                },
                            },

                            yxsre_mili:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{
                                    global:"gameStart",
                                    player:["phaseBegin","phaseEnd"],
                                },
                                priority:10,
                                forced:true,
                                mark:true,
                                marktext:"۞",
                                //zhuanhuanji:true,
                                unique:true,
                                forceunique:true,
                                intro:{
                                    content:function(storage,player,skill){
                                        if(player.storage.yxsre_mili) return '下次将获得女性武将卡';
                                        else return '下次将获得男性武将卡'
                                    },
                                },
                                init:function(player,skill){
                                    player.storage.yxsre_mili=Math.round(Math.random());
                                    player.storage[skill]=false;
                                },
                                content:function(){
                                    'step 0'
                                    //player.changeZhuanhuanji('yxsre_mili');
                                    player.removeAdditionalSkill('yxsre_mili');
                                    event.sex=player.storage.yxsre_mili?'female':'male';
                                    player.storage.maxNum=player.hasSex(event.sex)?2:1;
                                    player.storage.yxsre_mili=Math.round(Math.random());
                                    'step 1'
                                    var list;
                                    if(_status.characterlist){
                                        list=[];
                                        for(var i=0;i<_status.characterlist.length;i++){
                                            var name=_status.characterlist[i];
                                            if(lib.character[name][0]==event.sex) list.push(name);
                                        }
                                    }
                                    else if(_status.connectMode){
                                        list=get.charactersOL(function(i){
                                            return lib.character[i][0]!=event.sex;
                                        });
                                    }
                                    else{
                                        list=get.gainableCharacters(function(info){
                                            return info[0]==event.sex;
                                        });
                                    }
                                    var players=game.players.concat(game.dead);
                                    for(var i=0;i<players.length;i++){
                                        list.remove(players[i].name);
                                        list.remove(players[i].name1);
                                        list.remove(players[i].name2);
                                    }
                                    list.remove('sunshangxiang');
                                    list.remove('re_sunshangxiang');
                                    list.remove('wuban');
                                    list=list.randomGets(Math.max(4,game.countPlayer()));
                                    var skills=[];
                                    for(var i of list){
                                        skills.addArray((lib.character[i][3]||[]).filter(function(skill){
                                            var info=get.info(skill);
                                            return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
                                        }));
                                    }
                                    if(!list.length||!skills.length){event.finish();return;}
                                    if(player.isUnderControl()){
                                        game.swapPlayerAuto(player);
                                    }                                       //???
                                    var switchToAuto=function(){
                                        _status.imchoosing=false;
                                        event._result={
                                            bool:true,
                                            skills:skills.randomGets(player.storage.maxNum),
                                        };
                                        if(event.dialog) event.dialog.close();
                                        if(event.control) event.control.close();
                                    };                                      //???
                                    var chooseButton=function(list,skills,player){
                                        var event=_status.event;
                                        if(!event._result) event._result={};
                                        event._result.skills=[];
                                        var rSkill=event._result.skills;
                                        var additionalSkillName=player.hasSex('male')?'【枭姬】和一张装备牌':'【进讨】和一张【杀】';
                                        var text2=(player.storage.maxNum==1)?('，并且获得'+additionalSkillName):'';
                                        var dialog=ui.create.dialog('请选择获得'+get.cnNumber(player.storage.maxNum)+'个技能'+text2,[list,'character'],'hidden');
                                        event.dialog=dialog;
                                        var table=document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin='0';
                                        table.style.width='100%';
                                        table.style.position='relative';
                                        for(var i=0;i<skills.length;i++){
                                            var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link=skills[i];
                                            table.appendChild(td);
                                            td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
                                            td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
                                                if(_status.dragged) return;
                                                if(_status.justdragged) return;
                                                _status.tempNoButton=true;
                                                setTimeout(function(){
                                                    _status.tempNoButton=false;
                                                },500);
                                                var link=this.link;
                                                if(!this.classList.contains('bluebg')){
                                                    if(rSkill.length>=player.storage.maxNum) return;
                                                    rSkill.add(link);
                                                    this.classList.add('bluebg');
                                                }
                                                else{
                                                    this.classList.remove('bluebg');
                                                    rSkill.remove(link);
                                                }
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                        dialog.add('　　');
                                        dialog.open();
                                        
                                        event.switchToAuto=function(){
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing=false;
                                        };
                                        event.control=ui.create.control('ok',function(link){
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing=false;
                                        });
                                        for(var i=0;i<event.dialog.buttons.length;i++){
                                            event.dialog.buttons[i].classList.add('selectable');
                                        }
                                        game.pause();
                                        game.countChoose();
                                    };
                                    if(event.isMine()){
                                        chooseButton(list,skills,player);
                                    }
                                    else if(event.isOnline()){
                                        event.player.send(chooseButton,list,skills);
                                        event.player.wait();
                                        game.pause();
                                    }
                                    else{
                                        switchToAuto();
                                    }
                                    'step 2'
                                    var map=event.result||result;
                                    if(!player.storage.cexunSkill) player.storage.cexunSkill=[];
                                    player.storage.cexunSkill=map.skills;
                                    if(player.storage.maxNum==1) var additionalSkill=player.hasSex('male')?'xiaoji':'jintao';
                                    if(additionalSkill&&additionalSkill.length) map.skills.push(additionalSkill);
                                    if(map&&map.skills&&map.skills.length){
                                        player.addAdditionalSkill('yxsre_mili',map.skills);
                                    }
                                    game.broadcastAll(function(list){
                                        game.expandSkills(list);
                                        for(var i of list){
                                            var info=lib.skill[i];
                                            if(!info) continue;
                                            if(!info.audioname2) info.audioname2={};
                                            info.audioname2.old_yuanshu='weidi';
                                        }
                                    },map.skills);
                                    'step 3'
                                    if(player.storage.maxNum==1&&player.hasSex('male')){
                                        var card=null;
                                        for(var i=0;i<ui.cardPile.childElementCount;i++){
                                            var node=ui.cardPile.childNodes[i];
                                            if(get.type(node)=='equip'){
                                                card=node;
                                                break;
                                            }
                                        }
                                        if(!card){
                                            for(var i=0;i<ui.discardPile.childElementCount;i++){
                                                var node=ui.cardPile.childNodes[i];
                                                if(get.type(node)=='equip'){
                                                    card=node;
                                                    break;
                                                }
                                            }
                                        }
                                        player.gain(card,'gain2');
                                    }
                                    else if(player.storage.maxNum==1&&player.hasSex('female')){
                                        var card=null;
                                        for(var i=0;i<ui.cardPile.childElementCount;i++){
                                            var node=ui.cardPile.childNodes[i];
                                            if(node.name=='sha'){
                                                card=node;
                                                break;
                                            }
                                        }
                                        if(!card){
                                            for(var i=0;i<ui.discardPile.childElementCount;i++){
                                                var node=ui.cardPile.childNodes[i];
                                                if(node.name=='equip'){
                                                    card=node;
                                                    break;
                                                }
                                            }
                                        }
                                        player.gain(card,'gain2');
                                        if(card) player.chooseUseTarget(card);
                                    }
                                },
                            },

                            yxsre_cexun:{
                                audio:"ext:英雄杀RE/audio:2",
                                content:function(){},
                                group:['yxsre_cexun_Male','yxsre_cexun_Female'],
                            },

                            yxsre_cexun_Male:{
                                audio:"ext:英雄杀RE/audio:1",
                                trigger:{
                                    player:"phaseDiscardBefore",
                                },
                                prompt:'是否增加1点体力上限',
                                unique:true,
                                filter:function(event,player){
                                    return player.getStat('damage')>=3;
                                },
                                content:function(){
                                    player.gainMaxHp();
                                },
                                //sub:true,
                            },

                            yxsre_cexun_Female:{
                                audio:"ext:英雄杀RE/audio:1",
                                trigger:{
                                    player:"phaseDiscardBefore",
                                },
                                unique:true,
                                prompt:'是否跳过弃牌阶段',
                                frequent:function(event,player){
                                    return player.needsToDiscard();
                                },
                                filter:function(event,player){
                                    return !player.getStat('damage')&&player.hasSex('female');
                                },
                                content:function(){
                                    player.draw();
                                    trigger.cancel();
                                },
                                //sub:true,
                            },


                            yxsre_hongzhuang:{
                                enable:"phaseUse",
                                usable:1,
                                mark:true,
                                locked:false,
                                zhuanhuanji:true,
                                marktext:"☯",
                                prompt:{
                                    content:function(storage,player,skill){
                                        if(player.storage.yxsre_hongzhuang) return '弃置任意张红色牌，然后获得等量的黑色牌。';
                                        else return '弃置任意张黑色牌，然后获得等量的红色牌。'
                                    },
                                },
                                filter:function(event,player,name){
                                    if(player.storage.yxsre_hongzhuang) return player.countCards('he',{color:'red'});
                                    else return player.countCards('he',{color:'black'});
                                },
                                check:function(card){
                                    var player=_status.event.player;
                                    if(get.is.altered('xinzhiheng')&&get.position(card)=='h'&&!player.countCards('h',function(card){
                                        return get.value(card)>=8;
                                    })){
                                        return 8-get.value(card);
                                    }
                                    return 6-get.value(card)
                                },
                                init:function(player){
                                    player.storage.yxsre_hongzhuang=Math.round(Math.random());
                                },
                                filterCard:function(card,player,event){
                                    if(player.storage.yxsre_hongzhuang) return get.color(card)=='red';
                                    else return get.color(card)=='black';
                                },
                                selectCard:[1,Infinity],
                                position:'he',
                                content:function(){
                                    player.changeZhuanhuanji('yxsre_hongzhuang');
                                    var cards2=[];
                                    for(var i=0;i<ui.cardPile.childElementCount;i++){
                                        var node=ui.cardPile.childNodes[i];
                                        if(get.color(node)!=get.color(cards[0])){
                                            cards2.push(node);
                                            if(cards2.length==cards.length) break;
                                        }
                                    }
                                    if(cards2.length<cards.length){
                                        for(var i=0;i<ui.discardPile.childElementCount;i++){
                                            var node=ui.cardPile.childNodes[i];
                                            if(get.color(node)!=get.color(cards[0])){
                                                cards2.push(node);
                                                if(cards2.length==cards.length) break;
                                            }
                                        }
                                    }
                                    player.gain(cards2,'gain2');
                                },
                                ai:{
                                    order:1,
                                    result:{
                                        player:1,
                                    },
                                    threaten:1.5,
                                },
                            },

                            yxsre_manwu:{               //֎֍۞▲⊕
                                mark:true,
                                locked:false,
                                zhuanhuanji:true,
                                marktext:"֍",
                                intro:{
                                    content:function(storage,player,skill){
                                        if(player.storage.yxsre_manwu_tr==1) return '当你使用基本牌后，你可以获得一张基本牌。';
                                        else if(player.storage.yxsre_manwu_tr==2) return '当你使用锦囊牌后，你可以获得一张锦囊牌。';
                                        else if(player.storage.yxsre_manwu_tr==3) return '当你使用装备牌后，你可以获得一张装备牌。';
                                    },
                                },
                                init:function(player){
                                    player.storage.yxsre_manwu_tr=Math.round(Math.random()*3);
                                },
                                group:["yxsre_manwu_1","yxsre_manwu_2","yxsre_manwu_3"],
                                subSkill:{
                                    "1":{
                                        prompt:"获得一张基本牌。",
                                        trigger:{
                                            player:"useCardAfter",
                                        },
                                        filter:function(event,player){
                                            return player.storage.yxsre_manwu_tr==1&&get.type(event.card)=='basic';
                                        },
                                        check:function(){
                                            return true;
                                        },
                                        content:function(){
                                            player.changeZhuanhuanji('yxsre_manwu');
                                            player.storage.yxsre_manwu_tr=player.storage.yxsre_manwu_tr%3+1;
                                            var card=null;
                                            for(var i=0;i<ui.cardPile.childElementCount;i++){
                                                var node=ui.cardPile.childNodes[i];
                                                if(get.type(node)=='basic'){
                                                    card=node;
                                                    break;
                                                }
                                            }
                                            if(!card){
                                                for(var i=0;i<ui.discardPile.childElementCount;i++){
                                                    var node=ui.cardPile.childNodes[i];
                                                    if(get.type(node)=='basic'){
                                                        card=node;
                                                        break;
                                                    }
                                                }
                                            }
                                            player.gain(card,'gain2');
                                        },
                                        sub:true,
                                    },
                                    "2":{
                                        prompt:"获得一张锦囊牌。",
                                        trigger:{
                                            player:"useCardAfter",
                                        },
                                        filter:function(event,player){
                                            return player.storage.yxsre_manwu_tr==2&&get.type(event.card,'trick')=='trick';
                                        },
                                        check:function(){
                                            return true;
                                        },
                                        content:function(){
                                            player.changeZhuanhuanji('yxsre_manwu');
                                            player.storage.yxsre_manwu_tr=player.storage.yxsre_manwu_tr%3+1;
                                            var card=null;
                                            for(var i=0;i<ui.cardPile.childElementCount;i++){
                                                var node=ui.cardPile.childNodes[i];
                                                if(get.type(node)=='trick'){
                                                    card=node;
                                                    break;
                                                }
                                            }
                                            if(!card){
                                                for(var i=0;i<ui.discardPile.childElementCount;i++){
                                                    var node=ui.cardPile.childNodes[i];
                                                    if(get.type(node,'trick')=='trick'){
                                                        card=node;
                                                        break;
                                                    }
                                                }
                                            }
                                            player.gain(card,'gain2');
                                        },
                                        sub:true,
                                    },
                                    3:{
                                        prompt:"获得一张装备牌。",
                                        trigger:{
                                            player:"useCardAfter",
                                        },
                                        filter:function(event,player){
                                            return player.storage.yxsre_manwu_tr==3&&get.type(event.card)=='equip';
                                        },
                                        check:function(){
                                            return true;
                                        },
                                        content:function(){
                                            player.changeZhuanhuanji('yxsre_manwu');
                                            player.storage.yxsre_manwu_tr=player.storage.yxsre_manwu_tr%3+1;
                                            var card=null;
                                            for(var i=0;i<ui.cardPile.childElementCount;i++){
                                                var node=ui.cardPile.childNodes[i];
                                                if(get.type(node)=='equip'){
                                                    card=node;
                                                    break;
                                                }
                                            }
                                            if(!card){
                                                for(var i=0;i<ui.discardPile.childElementCount;i++){
                                                    var node=ui.cardPile.childNodes[i];
                                                    if(get.type(node)=='equip'){
                                                        card=node;
                                                        break;
                                                    }
                                                }
                                            }
                                            player.gain(card,'gain2');
                                        },
                                        sub:true,
                                    }
                                },
                                ai:{
                                    combo:"yxsre_manwu",
                                },
                            },


                            yxsre_rentu:{
                                marktext:'屠',
                                prompt:"令此牌对其无效并置于其武将牌上，然后弃置其一张牌。",
                                trigger:{
                                    player:"useCardToPlayered",
                                },
                                intro:{
                                    markcount:function(storage){
                                        if(!storage) return 0;
                                        return storage[0].length;
                                    },
                                    mark:function(dialog,storage,player){
                                        if(!storage) return;
                                        dialog.addAuto(storage[0]);
                                        //dialog.addText(get.translation(storage[1]));
                                    },
                                    onunmark:function(storage,player){
                                        player.storage.yxsre_rentu=[[],[]];
                                    },
                                },
                                filter:function(event,player){
                                    return event.targets.length==1&&!event.targets.contains(player)&&event.card.isCard&&event.cards.length==1&&event.getParent(2).name!='yxsre_rentu_timeout'&&
                                        get.position(event.cards[0],true)=='o'&&event.card.name==event.cards[0].name;
                                },
                                check:function(event,player){
                                    if(get.effect(event.targets[0],event.card,player,player)<(get.effect(event.targets[0],{name:'guohe'},player,player))+1) return true;
                                    else return false;
                                },
                                content:function(){
                                    trigger.getParent().excluded.push(trigger.targets[0]);
                                    //trigger.targets.remove(player);
                                    //trigger.getParent().triggeredTargets2.remove(player);
                                    //trigger.untrigger();
                                    event.cardx=trigger.cards[0];
                                    event.targetx=trigger.targets[0];
                                    event.targetx.addToExpansion(event.cardx,'gain2').gaintag.add('yxsre_rentu');
                                    if(!event.targetx.storage.yxsre_rentu) event.targetx.storage.yxsre_rentu=[[],[]];
                                    event.targetx.storage.yxsre_rentu[0].push(event.cardx);
                                    event.targetx.storage.yxsre_rentu[1].push(trigger.player);
                                    if(!event.targetx.hasSkill("yxsre_rentu_timeout")) event.targetx.addSkill("yxsre_rentu_timeout");
                                    game.delayx();
                                    player.discardPlayerCard(event.targetx,'he',true);
                                },
                                subSkill:{
                                },
                                ai:{
                                    expose:0.3,
                                }
                            },

                            yxsre_rentu_timeout:{
                                trigger:{
                                    player:"loseAfter",
                                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                },
                                forced:true,
                                charlotte:true,
                                filter:function(event,player){
                                    if(player.countCards('h')) return false;
                                    var evt=event.getl(player);
                                    return evt&&evt.player==player&&evt.hs&&evt.hs.length>0;
                                },
                                content:function(){
                                    'step 0'
                                    event.list=player.storage.yxsre_rentu;
                                    event.cardi=event.list[0].shift();
                                    event.sourcei=event.list[1].shift();
                                    if(player.getExpansions('yxsre_rentu').contains(event.cardi)){
                                        if(event.sourcei&&event.sourcei.isIn()&&event.sourcei.canUse(event.cardi,player,false)) event.sourcei.useCard(event.cardi,player,false);
                                        else player.loseToDiscardpile(event.cardi);
                                    }
                                    'step 1'
                                    if(event.list[0].length) event.goto(0);
                                    else player.removeSkill('yxsre_rentu_timeout');
                                },
                            },


                            yxsre_hufu:{
                                trigger:{player:'phaseDrawBegin'},
                                filter:function(event,player){
                                    return !player.getEquip(2);
                                },
                                forced:true,
                                content:function(){
                                    trigger.num++;
                                },
                                ai:{
                                    threaten:1.3
                                },
                                mod:{
                                    maxHandcard:function(player,num){
                                        if(player.getEquip(2)) return num+3;
                                    }
                                }
                            },
                            yxsre_hanbei:{
                                trigger:{player:'shaBegin'},
                                forced:true,
                                filter:function(event,player){
                                    if(player.getEquip(3)||player.getEquip(4)) return true;
                                    return false;
                                },
                                content:function(){
                                    trigger.directHit=true;
                                }
                            },

                            xy_biqin:{
                                trigger:{
                                    target:"useCardToTargeted",
                                    player:"useCardToPlayered",
                                },
                                forced:true,
                                filter:function(event,player){
                                    if(event.card.name=='sha'&&event.targets.length>0) return true;
                                    return false;
                                },
                                content:function(event,player){
                                    'step 0'
                                    player.judge(function(card){
                                        if(trigger.player!=player){
                                            if(get.color(card)=='black') return 2;
                                            else return get.value(card);
                                        }
                                        else{
                                            if(get.color(card)=='black') return -1;
                                            else return get.value(card);
                                        }
                                    }).set('callback',function(){
                                        if(get.position(card,true)=='o'&&get.color(card)!='black') player.gain(card,'gain2');
                                    });
                                    'step 1'
                                    event.colorj=result.color;
                                    event.cardj=result.card;
                                    if(event.colorj=='black'){
                                        for(var i=0;i<trigger.targets.length;i++){
                                            trigger.getParent().excluded.push(trigger.targets[i]);
                                        }
                                    }
                                    else event.finish();
                                },
                                
                            },

                            xy_zhenhui:{
                                trigger:{
                                    player:["loseAfter","changeHp"],
                                },
                                frequent:true,
                                filter:function(event,player){
                                    var hp=player.hp;
                                    if(hp<0) hp=0;
                                    return player.countCards('h')+hp<=2;
                                },
                                content:function(){
                                    player.draw(2);
                                },
                                ai:{
                                    noh:true,
                                    skillTagFilter:function(player,tag){
                                        if(tag=='noh'&&player.hp+player.countCards('h')<2){
                                            return false;
                                        }
                                    },
                                },
                            },


                            yxsre_qiangyun:{
                                trigger:{
                                    player:"loseAfter",
                                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                },
                                frequent:false,
                                filter:function(event,player){
                                    if(player.countCards('h')) return false;
                                    var evt=event.getl(player);
                                    return evt&&evt.player==player&&evt.hs&&evt.hs.length>0;
                                },
                                content:function(){
                                    'step 0'
                                    var num1=player.countMark('yxsre_qiangyun');
                                    var num2=2*(num1+1);
                                    event.num=num2;
                                    var str='摸'+get.cnNumber(event.num)+'张牌';
                                    'step 1'
                                    if(event.num){
                                        player.draw(event.num);
                                    }
                                    player.addMark('yxsre_qiangyun',1,false);
                                
                                    'step 2'
                                    if(player.countCards('h')>2*game.players.length){
                                        player.removeMark('yxsre_qiangyun',player.countMark('yxsre_qiangyun'),false);
                                    }
                                },
                                ai:{
                                    threaten:0.8,
                                    effect:{
                                        target:function(card){
                                            if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                                        },
                                    },
                                    noh:true,
                                    skillTagFilter:function(player,tag){
                                        if(tag=='noh'){
                                            if(player.countCards('h')!=1) return false;
                                        }
                                    },
                                },
                            },
                            
                            xy_youyang:{
                                enable:["chooseToUse","chooseToRespond"],
                                prompt:"1点--【杀】，2点--【闪】，3点--【桃】，4点--【酒】，5点--【五谷丰登】，6点--【无中生有】，7点--【无懈可击】",
                                viewAs:function(cards,player){
                                    var name=false;
                                    var nature=null;
                                    //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                                    switch(get.number(cards[0],player)){
                                        case 1:name='sha';nature='thunder';break;
                                        case 2:name='shan';break;
                                        case 3:name='tao';break;
                                        case 4:name='jiu';break;
                                        case 5:name='wugu';break;
                                        case 6:name='wuzhong';break;
                                        case 7:name='wuxie';break;
                                    }
                                    //返回判断结果
                                    if(name) return {name:name,nature:nature};
                                    return null;
                                },
                                check:function(card){
                                    if(ui.selected.cards.length) return 0;
                                    var player=_status.event.player;
                                    if(_status.event.type=='phase'){
                                        var max=0;
                                        var number2;
                                        var list=['sha','tao','jiu','wugu','wuzhong'];
                                        var map={sha:1,tao:3,jiu:4,wugu:5,wuzhong:6};
                                        for(var i=0;i<list.length;i++){
                                            var name=list[i];
                                            if(player.countCards('he',function(card){
                                                return (name!='sha'||get.value(card)<5)&&get.number(card,player)==map[name];
                                            })>0&&player.getUseValue({name:name,nature:name})>0){
                                                var temp=get.order({name:name,nature:name});
                                                if(temp>max){
                                                    max=temp;
                                                    number2=map[name];
                                                }
                                            }
                                        }
                                        if(number2==get.number(card,player)) return (number2==1?(5-get.value(card)):20-get.value(card));
                                        return 0;
                                    }
                                    return 1;
                                },
                                selectCard:1,
                                complexCard:true,
                                position:"hes",
                                filterCard:function(card,player,event){
                                    event=event||_status.event;
                                    //获取当前时机的卡牌选择限制
                                    var filter=event._backup.filterCard;
                                    //获取卡牌点数
                                    var number=get.number(card,player);
                                    //如果这张牌是1点并且当前时机能够使用/打出杀 那么这张牌可以选择
                                    if(number==1&&filter({name:'sha',cards:[card]},player,event)) return true;
                                    //如果这张牌是2点并且当前时机能够使用/打出闪 那么这张牌可以选择
                                    if(number==2&&filter({name:'shan',cards:[card],nature:'thunder'},player,event)) return true;
                                    //如果这张牌是3点并且当前时机能够使用/打出桃 那么这张牌可以选择
                                    if(number==3&&filter({name:'tao',cards:[card]},player,event)) return true;
                                    //如果这张牌是4点并且当前时机能够使用/打出酒 那么这张牌可以选择
                                    if(number==4&&filter({name:'jiu',cards:[card]},player,event)) return true;
                                    //如果这张牌是4点并且当前时机能够使用/打出五谷丰登 那么这张牌可以选择
                                    if(number==5&&filter({name:'wugu',cards:[card]},player,event)) return true;
                                    //如果这张牌是4点并且当前时机能够使用/打出无中生有 那么这张牌可以选择
                                    if(number==6&&filter({name:'wuzhong',cards:[card]},player,event)) return true;
                                    //如果这张牌是7点并且当前时机能够使用/打出无懈可击 那么这张牌可以选择
                                    if(number==7&&filter({name:'wuxie',cards:[card]},player,event)) return true;
                                    //上述条件都不满足 那么就不能选择这张牌
                                    return false;
                                },
                                filter:function(event,player){
                                    //获取当前时机的卡牌选择限制
                                    var filter=event.filterCard;
                                    //如果当前时机能够使用/打出杀并且角色有1点 那么可以发动技能
                                    if(filter({name:'sha',nature:'thunder'},player,event)&&player.countCards('hes',function(card){return get.number(card)==1})) return true;
                                    //如果当前时机能够使用/打出闪并且角色有2点 那么可以发动技能
                                    if(filter({name:'shan'},player,event)&&player.countCards('hes',function(card){return get.number(card)==2})) return true;
                                    //如果当前时机能够使用/打出桃并且角色有3点 那么可以发动技能
                                    if(filter({name:'tao'},player,event)&&player.countCards('hes',function(card){return get.number(card)==3})) return true;
                                    //如果当前时机能够使用/打出酒并且角色有4点 那么可以发动技能
                                    if(filter({name:'jiu'},player,event)&&player.countCards('hes',function(card){return get.number(card)==4})) return true;
                                    //如果当前时机能够使用/打出五谷丰登并且角色有5点 那么可以发动技能
                                    if(filter({name:'wugu'},player,event)&&player.countCards('hes',function(card){return get.number(card)==5})) return true;
                                    //如果当前时机能够使用/打出无中生有并且角色有6点 那么可以发动技能
                                    if(filter({name:'wuzhong'},player,event)&&player.countCards('hes',function(card){return get.number(card)==6})) return true;
                                    //如果当前时机能够使用/打出无懈可击并且角色有7点 那么可以发动技能
                                    if(filter({name:'wuxie'},player,event)&&player.countCards('hes',function(card){return get.number(card)==7})) return true;
                                    return false;
                                },
                                ai:{
                                    respondSha:true,
                                    respondShan:true,
                                    skillTagFilter:function(player,tag){
                                        var number;
                                        switch(tag){
                                            case 'respondSha':number=2;break;
                                            case 'respondShan':number=1;break;
                                            case 'save':number=3;break;
                                        }
                                        if(!player.countCards('hes',{number:number})) return false;
                                    },
                                    order:function(item,player){
                                        if(player&&_status.event.type=='phase'){
                                            var max=0;
                                            var list=['sha','tao','jiu','wugu','wuzhong'];
                                            var map={sha:1,tao:3,jiu:4,wugu:5,wuzhong:6};
                                            for(var i=0;i<list.length;i++){
                                                var name=list[i];
                                                if(player.countCards('hes',function(card){
                                                    return (name!='sha'||get.value(card)<5)&&get.number(card,player)==map[name];
                                                })>0&&player.getUseValue({name:name,nature:name})>0){
                                                    var temp=get.order({name:name,nature:name});
                                                    if(temp>max){
                                                        max=temp;
                                                    }
                                                }
                                            }
                                            max/=1.1;
                                            return max;
                                        }
                                        return 2;
                                    },
                                },
                                hiddenCard:function(player,name){
                                    if(name=='wuxie') return player.countCards('hes',function(card){return get.number(card)==7});
                                    if(name=='tao') return player.countCards('hes',function(card){return get.number(card)==3});
                                },
                            },

                            xy_miaoyin:{
                                trigger:{
                                    player:"phaseZhunbeiBegin",
                                },
                                frequent:true,
                                preHidden:true,
                                content:function(){
                                    "step 0"
                                    if(event.cards==undefined) event.cards=[];
                                    var next=player.judge(function(card){
                                        if(get.number(card)<=7) return 1.5;
                                        return -1.5;
                                    });
                                    next.judge2=function(result){
                                        return result.bool;
                                    };
                                    if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
                                        if(get.number(event.judgeResult)<=7&&get.position(card,true)=='o'){
                                            player.gain(card,'gain2');
                                        }
                                    });
                                    else next.set('callback',function(){
                                        if(get.number(event.judgeResult)<=7) event.getParent().orderingCards.remove(card);
                                    });
                                    "step 1"
                                    if(result.judge>0){
                                        event.cards.push(result.card);
                                        player.chooseBool('是否再次发动【妙音】？').set('frequentSkill','xy_miaoyin');
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
                                }
                            },

                            
                            yxsre_qiwu:{
                                trigger:{
                                    global:"roundStart",
                                },
                                content:function(){
                                    'step 0'
                                    player.chooseTarget(get.prompt2('yxsre_qiwu')).ai=function(target){
                                        if(target.hasJudge('lebu')) return 2;
                                        return get.threaten(target)*get.attitude(_status.event.player, target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
                                    };
                                    'step 1'
                                    if(result.bool){
                                        player.logSkill('yxsre_qiwu',result.targets[0]);
                                        var next=result.targets[0].phaseUse();
                                        next.yxsre_qiwu=true;
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                    }
                                    else event.finish();
                                },
                                ai:{
                                    threaten:1.2,
                                    expose:0.2,
                                },
                            },

                            yxsre_zhitui:{
                                trigger:{
                                    player:"phaseZhunbeiBegin",
                                },
                                dutySkill:true,
                                forced:true,
                                filter:function(event,player){
                                    return player.hasUseTarget('wugu');
                                },
                                content:function(){
                                    player.draw();
                                    var list=game.filterPlayer(function(current){
                                        return player.canUse('wugu',current);
                                    }).sortBySeat();
                                    if(list.length){
                                        player.useCard({name:'wugu',isCard:true}, list);
                                    };
                                },
                                group:['yxsre_zhitui_achieve','yxsre_zhitui_fail'],
                                subSkill:{
                                    achieve:{
                                        trigger:{
                                            player:"gainAfter",
                                        },
                                        forced:true,
                                        skillAnimation:true,
                                        animationColor:"thunder",
                                        filter:function(event,player){
                                            var cards=[];
                                            player.getHistory('gain',function(evt){
                                                if(evt.getParent().name=='wugu'){
                                                    cards.addArray(evt.cards);
                                                }
                                            });
                                            cards=cards.filter(function(card){
                                                return player.getCards('h').contains(card)&&game.checkMod(card,player,'unchanged','cardEnabled2',player);
                                            });
                                            if(cards.length) return get.number(cards[0])==player.hp;
                                            else return false;
                                        },
                                        content:function(){
                                            game.log(player,'成功完成使命');
                                            player.awakenSkill('yxsre_zhitui');
                                            player.addSkillLog('yxsre_yaoxing');
                                        },
                                        sub:true,
                                    },
                                    fail:{
                                        trigger:{
                                            player:"phaseEnd",
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            return player.isMaxHandcard(true);
                                        },
                                        content:function(){
                                            'step 0'
                                            game.log(player,'使命失败');
                                            player.awakenSkill('yxsre_zhitui');
                                            player.chooseToDiscard('he',2,get.prompt('yxsre_zhitui'),'弃置两张牌，否则失去1点体力').set('ai',function(card){
                                                return 6-get.value(card);
                                            })
                                            'step 1'
                                            if(!result.bool) player.loseHp();
                                        },
                                        sub:true,
                                    },
                                },
                                derivation:"yxsre_yaoxing",
                            },

                            yxsre_yaoxing:{
                                trigger:{
                                    player:['damageBegin','loseHpBegin'],
                                },
                                forced:true,
                                filter:function (event,player){
                                    return event.num>=player.hp&&!player.countCards('h');
                                },
                                content:function (){
                                    trigger.cancel();
                                }
                            },

                            yxsre_zunzi:{
                                audio:"ext:英雄杀RE/audio:2",
                                mod:{
                                    maxHandcard:function(player,num){
                                        if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
                                    },
                                },
                                group:'yxsre_zunzi_discard',
                                subSkill:{
                                    discard:{
                                        audio:"yxsre_kongju",
                                        trigger:{
                                            player:'discardEnd',
                                        },
                                        direct:true,
                                        filter:function(event,player){
                                            return player.countCards('h')>player.hp;
                                        },
                                        content:function(){
                                            player.logSkill("yxsre_zunzi");
                                            //trigger.audioed=true;
                                        }
                                    }
                                }
                            },

                            yxsre_kongju:{
                                audio:"ext:英雄杀RE/audio:2",
                                mod:{
                                    targetEnabled:function(card,player,target,now){
                                        if(target.countCards('h')>target.maxHp){
                                            if(card.name=='lebu') return false;
                                        }
                                    },
                                    canBeGained:function(card,player,target,name,now){
                                        if(get.position(card)=='h'&&player.countCards('h')<player.maxHp) return false;
                                    },
                                    canBeDiscarded:function(card,player,name,now){
                                        if(get.position(card)=='h'&&player.countCards('h')<player.maxHp) return false;
                                    }
                                },
                                group:['yxsre_kongju_bigger','yxsre_kongju_smaller'],
                                subSkill:{
                                    bigger:{
                                        audio:"yxsre_kongju",
                                        enable:"phaseUse",
                                        usable:1,
                                        unique:true,
                                        position:"he",
                                        filter:function(event,player){
                                            if(player.countCards('h')>player.hp) return true;
                                            return false;
                                        },
                                        filterCard:true,
                                        check:function(card){
                                            var player=_status.event.player;
                                            if(!player.needsToDiscard()){
                                                return 4-get.equipValue(card);
                                            }
                                            return 0;
                                        },
                                        
                                        discard:false,
                                        lose:false,
                                        delay:false,
                                        prompt:"重铸一张手牌",
                                        content:function(){
                                            player.loseToDiscardpile(cards);
                                            player.draw();
                                        },
                                        sub:true,
                                        ai:{
                                            order:10,
                                            result:{
                                                player:1,
                                            },
                                        },
                                    },
                                    smaller:{
                                        audio:"yxsre_kongju",
                                        trigger:{
                                            player:"phaseDrawBegin2",
                                        },
                                        frequent:true,
                                        filter:function(event,player){
                                            return !event.numFixed&&event.player.countCards('h')<event.player.hp;
                                        },
                                        content:function(){
                                            trigger.num++;
                                        },
                                        sub:true,
                                        ai:{
                                            threaten:1.3,
                                        },
                                    },
                                }
                            },

                            yxsre_kanpo:{
                                inherit:'kanpo',
                                audio:"ext:英雄杀RE/audio:2",
                            },

                            yxsre_shentan:{
                                audio:"ext:英雄杀RE/audio:2",
                                enable:'phaseUse',
                                usable:1,
                                filterCard:true,
                                filterTarget:function(card,player,target){
                                    return target.countCards('h')>0&&get.distance(player,target)<=2;
                                },
                                check:function(card){
                                    return 7-get.value(card);
                                },
                                position:'he',
                                content:function(){
                                    "step 0"
                                    var hs=target.getCards('h');
                                    if(hs.length){
                                        event.card=hs.randomGet();
                                        player.gain(event.card,target);
                                        target.$giveAuto(event.card,player);
                                    }
                                    else{
                                        event.finish();
                                    }
                                    "step 1"
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
                                        player:function(player,target){
                                            if(get.attitude(player,target)>0){
                                                return 0;
                                            }
                                            return 1;
                                        }
                                    },
                                },
                            },

                            yxsre_keji:{
                                inherit:'keji',
                                audio:"ext:英雄杀RE/audio:2",
                            },

                            yxsre_tuqiang:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{player:['respond','useCard']},
                                filter:function(event,player){
                                    return event.card&&get.number(event.card)>=10;
                                },
                                frequent:false,
                                content:function(){
                                    player.draw(2);
                                },
                                ai:{
                                    mingzhi:false,
                                    effect:{
                                        target:function(card,player,target){
                                            if(get.tag(card,'respondShan')){
                                                return 0.9;
                                            }
                                        }
                                    },
                                }
                            },

                            yxsre_wudang:{
                                audio:"ext:英雄杀RE/audio:2",
                                usable:1,
                                trigger:{player:'damageEnd'},
                                filter:function(event,player){
                                    return event.source;
                                },
                                check:function(event,player){
                                    var num=player.countCards('h');
                                    var num_red=player.countCards('h',{color:'red'});
                                    var num_black=player.countCards('h',{color:'black'});
                                    return ((get.attitude(player,event.source)<=0)&&num_red==num)||num_black==num;
                                },
                                content:function(){
                                    player.showHandcards();
                                    var num=player.countCards('h');
                                    var num_red=player.countCards('h',{color:'red'});
                                    var num_black=player.countCards('h',{color:'black'});
                                    if(num){
                                        if(num_red==num) trigger.source.damage();
                                        if(num_black==num) player.recover();
                                    }
                                    else{
                                        player.recover();
                                        trigger.source.damage();
                                    }
                                },
                                ai:{
                                    "maixie_defend":true,
                                    effect:{
                                        target:function(card,player,target){
                                            if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                                            if(!target.countCards('h')) return [1,-1.5,1,-1.5];
                                            return 0.8;
                                        },
                                    },
                                },
                            },

                            yxsre_taiji:{
                                audio:"ext:英雄杀RE/audio:2",
                                enable:"phaseUse",
                                filter:function(event,player){
                                    var num_red=player.countCards('h',{color:'red'});
                                    var num_black=player.countCards('h',{color:'black'});
                                    return player.countCards('h')&&num_red==num_black;
                                },
                                check:function(){
                                    return true;
                                },
                                content:function(){
                                    player.draw();
                                },
                                ai:{
                                    order:10,
                                }
                            },

                            yxsre_wumu:{
                                shaRelated:true,
                                audio:"ext:英雄杀RE/audio:3",
                                trigger:{player:['useCard']},
                                filter:function(event,player){
                                    return event.card.name=='sha'&&get.color(event.card)=='red';
                                },
                                forced:true,
                                content:function(){
                                    if(player.stat[player.stat.length-1].card.sha>0){
                                        player.stat[player.stat.length-1].card.sha--;
                                    }		//??
                                },
                                group:['yxsre_wumu_pass','yxsre_wumu_black','yxsre_wumu_red'],
                                subSkill:{
                                    pass:{
                                        audio:'yxsre_wumu',
                                        trigger:{
                                            player:"useCard1",
                                        },
                                        firstDo:true,
                                        forced:true,
                                        filter:function(event,player){
                                            return !event.audioed&&event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
                                        },
                                        content:function(){
                                            trigger.audioed=true;
                                        },
                                        mod:{
                                            targetInRange:function(card,player){
                                                if(card.name=='sha'&&get.color(card)=='black') return true;
                                            },
                                            cardUsable:function(card){
                                                if(card.name=='sha'&&get.color(card)=='red') return Infinity;
                                            },
                                            sub:true,
                                        },
                                        ai:{
                                            unequip:true,
                                            skillTagFilter:function(player,tag,arg){
                                                if(!get.zhu(player,'shouyue')) return false;
                                                if(arg&&arg.name=='sha'&&get.color(arg)=='red') return true;
                                                return false;
                                            },
                                        },
                                    },
                                    black:{
                                        audio:'yxsre_wumu',
                                        trigger:{
                                            source:"damageBegin",
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            return event.card&&event.card.name=='sha'&&get.color(event.card)=='black';
                                        },
                                        content:function(){
                                            trigger.num++;
                                        },
                                        sub:true,
                                    },
                                    red:{
                                        audio:'yxsre_wumu',
                                        trigger:{
                                            player:"shaBegin",
                                        },
                                        filter:function (event) {
                                            return event.card.name=='sha'&&get.color(event.card)=='red';
                                        },
                                        forced:true,
                                        content:function(){
                                            trigger.directHit=true;
                                        },
                                        sub:true,
                                    }
                                },
                                ai:{
                                    threaten:1.5,
                                }
                            },

                            yxsre_seyou:{
                                skillAnimation:true,
                                animationColor:'thunder',
                                limited:true,
                                unique:true,
                                mark:true,
                                init:function(player){
                                    player.storage.yxsre_seyou=false;
                                },
                                enable:'phaseUse',
                                filter:function(event,player){
                                    return !player.storage.yxsre_seyou
                                },
                                intro:{
                                    content:'limited'
                                },
                                filterTarget:true,
                                content:function(){
                                    "step 0"
                                    player.awakenSkill('yxsre_seyou');
                                    player.storage.yxsre_seyou=true;
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
                                        player.gainPlayerCard(event.current,true,'he');
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

                            yxsre_sheshi:{
                                trigger:{player:["damageEnd"]},
                                direct:true,
                                content:function(){
                                    "step 0"
                                    event.count=trigger.num;
                                    "step 1"
                                    event.count--;
                                    if(event.isMine()){
                                        event.dialog=ui.create.dialog(get.prompt('yxsre_sheshi'));
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
                                    "step 2"
                                    if(event.dialog){
                                        event.dialog.close();
                                    }
                                    if(result.control&&result.control.indexOf('2')!=-1){
                                        player.logSkill('yxsre_sheshi');
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
                                    "step 3"
                                    if(event.cards&&event.cards.length){
                                        if(event.cards.length){
                                            player.gain(event.cards,'draw2');
                                        }
                                    }
                                    "step 4"
                                    if(event.count) event.goto(1);
                                    else event.finish();
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

                            /* 铁腕,
                             * 当你造成伤害后或有其他角色使用延时锦囊牌后
                             * 你可以将一张红色牌当作【乐不思蜀】或将一张黑色牌当作【兵粮寸断】使用
                             */
                            yxsre_tiewan:{
                                trigger:{
                                    source:'damageEnd',
                                    global:'useCardAfter',
                                },
                                direct:true,
                                filter:function(event,player){
                                    if(event.source==player&&event.player.countCards('he')) return true;
                                    if(get.type(event.card.viewAs||event.card.name)=='delay'&&event.player!=player&&event.player.countCards('he')) return true;
                                    return false;
                                },
                                content:function(){
                                    'step 0'
                                    player.choosePlayerCard(player,'he',get.prompt('yxsre_tiewan')).set('ai',function(card){
                                        return get.buttonValue(card);
                                    });
                                    'step 1'
                                    if(result.bool){
                                        event.cards=[result.cards[0]];
                                        event.color=get.color(result.cards[0]);
                                        player.chooseTarget(true,'将'+get.translation(event.cards[0])+'置于一名角色的判定区内',function(card,player,target){
                                            if(get.color(event.cards[0])=='black') { return player.canUse({name:'bingliang'},target,true); }
                                            else { return player.canUse({name:'lebu'},target,true); }
                                        }).set('ai',function(target){
                                            if(get.color(event.cards[0])=='black'){
                                                return get.effect(target,{name:"bingliang"},player,player);
                                            }
                                            else{
                                                return get.effect(target,{name:"lebu"},player,player);
                                            }
                                        });
                                    }
                                    'step 2'
                                    if(result.bool){
                                        var target=result.targets[0];
                                        player.logSkill('yxsre_tiewan');
                                        if(get.color(event.cards[0])=='black') player.useCard({name:'bingliang'},event.cards,target,true);
                                        else player.useCard({name:'lebu'},event.cards,target,true);
                                    }
                                },
                                ai:{
                                    threaten:1.5
                                }
                            },

                            yxsre_juecha:{		//TODO: ai rewrite
                                trigger:{player:'damageEnd'},
                                priority:15,
                                content:function(){
                                    'step 0'
                                    var storage1=player.getStorage('yxsre_juecha_round');
                                    event.num=storage1.length;
                                    var list=[];
                                    var choiceList=[
                                        '【杀】对你无效，直到下轮开始',
                                        '其他角色使用的通常锦囊对你无效，直到下轮开始',
                                        '摸'+get.cnNumber(event.num)+'张牌',
                                    ];
                                    for(var i=0;i<3;i++){
                                        if(storage1.contains(i)){
                                            choiceList[i]=('<span style="opacity:0.5;">'+choiceList[i]+'</span>');
                                        }
                                        else list.push('选项'+get.cnNumber(i+1,true))
                                    }
                                    list.push('cancel2');
                                    player.chooseControl(list).set('prompt',get.prompt('yxsre_juecha')).set('choiceList',choiceList).set('ai',function(){
                                        var player=_status.event.player;
                                        var list=_status.event.controls.slice(0);
                                        var gett=function(choice){
                                            if(choice=='cancel2') return 0.1;
                                            var max=0,func={
                                                选项一:function(current){	//TODO: 有人打得到你
                                                    max=2;
                                                },
                                                选项二:function(target){	//TODO: 后面是否有敌人
                                                    max=1.5;
                                                },
                                                选项三:function(target){
                                                    max=1;
                                                },
                                            }[choice];
                                            game.countPlayer(func);
                                            return max;
                                        };
                                        return list.sort(function(a,b){
                                            return gett(b)-gett(a);
                                        })[0];
                                    });
                                    'step 1'
                                    if(result.control!='cancel2'){
                                        var index=['选项一','选项二','选项三'].indexOf(result.control);
                                        event.index=index;
                                    }
                                    else event.finish();
                                    'step 2'
                                    player.logSkill('yxsre_juecha');
                                    player.addTempSkill('yxsre_juecha_round','roundStart');
                                    player.markAuto('yxsre_juecha_round',[event.index]);
                                    switch(event.index){
                                        case 0:
                                            player.addTempSkill('yxsre_juecha_sha','roundStart');
                                            break;
                                        case 1:
                                            player.addTempSkill('yxsre_juecha_trick','roundStart');
                                            break;
                                        case 2:
                                            player.draw(event.num);
                                            break;
                                    }
                                },
                                subSkill:{
                                    round:{
                                        charlotte:true,
                                        onremove:true,
                                        sub:true,
                                    },
                                }
                            },
                
                            yxsre_juecha_sha:{
                                trigger:{target:'useCardToBefore'},
                                forced:true,
                                priority:15,
                                mark:true,
                                intro:{
                                    content:'【杀】对你无效'
                                },
                                filter:function(event,player){
                                    return event.card.name=='sha';
                                },
                                content:function(){
                                    game.log(player,'发动了察觉，',trigger.card,'对',trigger.target,'失效')
                                    trigger.cancel();
                                },
                                ai:{
                                    effect:{
                                        target:function(card,player,target,current){
                                            if(card.name=='sha') return 'zeroplayertarget';
                                        }
                                    }
                                }
                            },
                
                            yxsre_juecha_trick:{
                                trigger:{target:'useCardToBefore'},
                                forced:true,
                                priority:15,
                                mark:true,
                                intro:{
                                    content:'其他角色的通常锦囊对你无效'
                                },
                                filter:function(event,player){
                                    if(event.player==player&&event.target==player) return false;
                                    return get.type(event.card)=='trick';
                                },
                                content:function(){
                                    game.log(player,'发动了察觉，',trigger.card,'对',trigger.target,'失效')
                                    trigger.cancel();
                                },
                                ai:{
                                    effect:{
                                        target:function(card,player,target,current){
                                            if(get.type(card)=='trick') return 'zeroplayertarget';
                                        }
                                    }
                                }
                            },

                            /* 霸图,
                             * 一名角色的回合结束后，你可以将手牌数补至X，X为场上的势力数。
                             * “秦”势力角色回合开始前，你可以弃置至多两张牌，然后其摸等量的牌。
                             */
                            yxsre_batu:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{global:'phaseAfter'},
                                frequent:true,
                                group:'yxsre_batu_qin',
                                filter:function(event,player){
                                    return player.countCards('h')<game.countGroup();
                                },
                                content:function(){
                                    player.draw(game.countGroup()-player.countCards('h'));
                                },
                                ai:{
                                    threaten:1.3
                                },
                                subSkill:{
                                    qin:{
                                        trigger:{global:"phaseBefore"},
                                        filter:function(event,player){
                                            return event.player.group=='daqin'&&player.countCards('he');
                                        },
                                        check:function(event,player){
                                            if(event.player==player) return true;
                                            else return get.attitude(player,event.player);    
                                        },
                                        content:function(event,player){
                                            'step 0'
                                            player.chooseToDiscard('he',[1,2],'弃置至多两张牌，令其摸等量的牌').set('ai',function(card){
                                                if(player.countCards('h')-game.countGroup()>0){
                                                    return 8-get.value(card);
                                                }
                                                if(player.countCards('h')-player.hp-ui.selected.cards.length>0){
                                                    return 6-get.value(card);
                                                }
                                                return 4-get.value(card);
                                            });
                                            'step 1'
                                            if(result.bool){
                                                trigger.player.draw(result.cards.length);
                                            }
                                        },
                                        sub:true,
                                    }
                                },
                            },

                            /* 御宇,
                             * 主公技
                             * 当你杀死一名非忠臣角色时，你可以减一点体力上限
                             * 将其身份改为忠臣，势力改为“秦”
                             * 然后其失去所有技能，将体力上限改为4，体力值回复至2，弃置所有牌，最后摸两张牌
                             */
                            yxsre_yuyu:{
                                audio:"ext:英雄杀RE/audio:2",
                                mode:["identity"],
                                trigger:{
                                    source:"dieBegin",
                                },
                                skillAnimation:"epic",
                                animationColor:"fire",
                                unique:true,
                                zhuSkill:true,
                                filter:function(event,player){
                                    if(!player.hasZhuSkill('yxsre_yuyu')) return false;
                                    return event.player.identity!='zhong'&&event.player.identity!='mingzhong'&&player.getEnemies().length>1;
                                },
                                prompt:function(event,player){
                                    return '御宇：是否减1点体力上限令其身份改为忠臣';
                                },
                                content:function(){
                                    game.broadcastAll(function(player,target,shown){
                                        if(shown||player==game.me){
                                            player.setIdentity();
                                        }
                                        target.identity="zhong";
                                        target.showIdentity();
                                    },player,trigger.player,trigger.player.identityShown);//???
                                    player.line(trigger.player,'green');
                                    player.loseMaxHp();
                                    
                                    trigger.cancel();
                                    trigger.player.clearSkills();
                                    trigger.player.changeGroup("daqin");
                                    trigger.player.maxHp=4;
                                    trigger.player.hp=2;
                                    trigger.player.update();
                                    trigger.player.discard(trigger.player.getCards('he'));
                                    trigger.player.draw(2);
                                },
                                ai:{
                                    result:{
                                        player:function(player){
                                            if(player.identity=="fan") return -5;
                                            if(player.identity=="nei") return -1;
                                            if(player.identity=="zhong") return 1;
                                            if(player.maxHp>3) return 1;
                                            if(player.maxHp-player.hp>1) return 1;
                                            if(player.maxHp-player.hp==1) return 0.25;
                                            return -1;
                                        },
                                    },
                                },
                            },

                            /* 鸩杀,
                             * 当有其他角色进入濒死状态时，你可以弃置一张【酒】或两张黑色牌
                             * 然后该角色将体力回复至1，然后受到X+1点伤害，X为其以此法回复的体力值
                             */
                            yxsre_zhensha:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{global:'dying'},
                                priority:9,
                                filter:function(event,player){
                                    return event.player.hp<=0&&(player.countCards('h','jiu')>0||player.countCards('he',{color:'black'})>=2)&&player!=event.player;
                                },
                                check:function(event,player){
                                    return event.player.hp>=-1;
                                },
                                content:function(){
                                    'step 0'
                                    var goon=(get.attitude(player,trigger.player)<0);
                                    event.numx=1-trigger.player.hp;
                                    var next=player.chooseToDiscard('鸠杀：是否弃置一张【酒】或两张黑色手牌令'+get.translation(trigger.player)+'回复体力至1，然后受到'+get.cnNumber(event.numx)+'点伤害？','he');
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
                                    // Q: 这部分完全看不懂捏     A：检测选牌时，牌的合法性，ui.selected.cards是已经选中的牌的列表
                                    next.filterCard=function(card){
                                        if(ui.selected.cards.length){
                                            return get.color(card)=='black';
                                        }
                                        return get.color(card)=='black'||card.name=='jiu';
                                    };
                                    next.complexCard=true,
                                    next.logSkill=['zhensha',trigger.player];
                                    next.selectCard=function(){
                                        if(ui.selected.cards.length){
                                            if(get.color(ui.selected.cards[0])!='black') return [1,1];
                                        }
                                        return [1,2];
                                    }
                                    'step 1'
                                    if(result.bool){
                                        //if(trigger.getParent().source) trigger.getParent().source=player;
                                        //trigger.player.die();
                                        // TODO: 请测试，卖血将应该可以插入发动技能   A：对
                                        trigger.audioed=true;
                                        trigger.player.recover(event.numx);
                                        trigger.player.damage(event.numx+1);
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

                            /* 蓄谋,
                             * 结束阶段，你可以摸X张牌，X为场上体力值等于体力上限的角色数
                             * 然后若X不小于3，你翻面
                             */
                            yxsre_xumou:{
                                audio:"ext:英雄杀RE/audio:2",
                                // CHECK: 重复数了三次有多少人受伤
                                trigger:{
                                    player:"phaseJieshuBegin",
                                },
                                filter:function(event,player){
                                    return game.countPlayer(function(current){
                                        return !current.isDamaged();
                                    });
                                },
                                prompt:function(event,player){
                                    var num=game.countPlayer(function(current){
                                        return !current.isDamaged();
                                    });
                                    // CHECK: 这里感觉可以不分开写    //前面的是触发条件，这里是生成文本提示，最后面才是技能本体
                                    if(num<3){
                                        return '蓄谋：是否摸'+get.cnNumber(num)+'张牌？';
                                    }
                                    else{
                                        return '蓄谋：是否摸'+get.cnNumber(num)+'张牌，然后翻面？';
                                    }
                                },
                                content:function(){
                                    var num=game.countPlayer(function(current){
                                        return !current.isDamaged();
                                    });
                                    player.draw(num);
                                    if(num>=3){
                                        player.turnOver();
                                    }
                                },
                                ai:{
                                    effect:{
                                        target:function(card,player,target){
                                            if(card.name=='guiyoujie') return [0,1];
                                        },
                                    },
                                },
                            },

                            yxsre_wushuang:{
                                audio:"ext:英雄杀RE/audio:2",
                                shaRelated:true,
                                forced:true,
                                locked:true,
                                group:["yxsre_wushuang1","yxsre_wushuang2"],
                                preHidden:["yxsre_wushuang1","yxsre_wushuang2"],
                            },

                            yxsre_wushuang1:{
                                inherit:'wushuang1',
                                //audio:'yxsre_wushuang',
                                audio:'yxsre_wushuang',
                            },
                            yxsre_wushuang2:{
                                inherit:'wushuang2',
                                //audio:'',
                                audio:'yxsre_wushuang',
                            },
                
                            yxsre_wushuang_modi:{				//TODO: AI rewrite
                                shaRelated:true,
                                audio:"ext:英雄杀RE/audio:2",
                                audioname:["yxsre_xiangyu"],
                                forced:true,
                                locked:true,
                                group:["yxsre_wushuang_modi_sha","yxsre_wushuang_modi_juedou"],
                                preHidden:["yxsre_wushuang_modi_sha","yxsre_wushuang_modi_juedou"],
                                subSkill:{
                                    sha:{
                                        audio:"yxsre_wushuang_modi",
                                        trigger:{
                                            player:"useCardToPlayered",
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
                                        },
                                        logTarget:"target",
                                        content:function(){
                                            'step 0'
                                            var choiceList=[
                                                '摸两张牌，此【杀】无效',
                                                '摸一张牌，此【杀】需要一张【闪】抵消',
                                                '此杀需要两张【闪】抵消',
                                                '弃置一张牌，此【杀】需要三张【闪】抵消'
                                            ];
                                            var list=[];
                                            for(var i=0; i<4; i++){
                                                list.push('选项'+get.cnNumber(i+1,true));
                                            }
                                            player.chooseControl(list).set('prompt',get.prompt('yxsre_wushuang_modi_1')).set('choiceList',choiceList).set('ai',function(){
                                                var player=_status.event.player;
                                                var list=_status.event.controls.slice(0);
                                                var gett=function(choice){
                                                    var max=0,func={
                                                        选项一:function(current){
                                                            max=0.5;
                                                        },
                                                        选项二:function(target){
                                                            max=1;
                                                        },
                                                        选项三:function(target){
                                                            max=1.5;
                                                        },
                                                        选项四:function(target){
                                                            max=2;
                                                        },
                                                    }[choice];
                                                    game.countPlayer(func);
                                                    return max;
                                                };
                                                return list.sort(function(a,b){
                                                    return gett(b)-gett(a);
                                                })[0];
                                            });
                                            'step 1'
                                            if(result.control){
                                                var index=['选项一','选项二','选项三','选项四'].indexOf(result.control);
                                                event.index=index;
                                                var list=[
                                                    ['摸两张牌，此【杀】无效',function(target){
                                                        return true;
                                                    }],
                                                    ['摸一张牌，此【杀】需要一张【闪】抵消',function(target){
                                                        return true;
                                                    }],
                                                    ['此【杀】需要两张【闪】抵消',function(target){
                                                        return true;
                                                    }],
                                                    ['弃置一张牌，此【杀】需要三张【闪】抵消',function(card){
                                                        return 3-get.value(card);
                                                    },function(card,player,target){
                                                        return player.hasCard(function(card){
                                                            return lib.filter.canBeDiscarded(card,player,player);
                                                        },'he');
                                                    }]
                                                ][index]
                                                if(list.length>2){
                                                    var next=player.chooseToDiscard(list[0],'he');
                                                    next.set('ai',list[1]);
                                                }
                                            }
                                            'step 2'
                                            var num=2;
                                            var id=trigger.target.playerid;
                                            var map=trigger.getParent().customArgs;
                                            if(!map[id]) map[id]={};
                                            switch(event.index){
                                                case 0:
                                                    player.draw(2);
                                                    trigger.getParent().excluded.push(trigger.target);
                                                    break;
                                                case 1:
                                                    player.draw(1);
                                                    break;
                                                case 2:
                                                    if(typeof map[id].shanRequired=='number'){
                                                        map[id].shanRequired++;
                                                    }
                                                    else{
                                                        map[id].shanRequired=2;
                                                    }
                                                    break;
                                            }
                                            if(result.bool){
                                                if(typeof map[id].shanRequired=='number'){
                                                    map[id].shanRequired+=2;
                                                }
                                                else{
                                                    map[id].shanRequired=3;
                                                }
                                            }
                                        },
                                        ai:{
                                            "directHit_ai":true,
                                            skillTagFilter:function(player,tag,arg){
                                                if(arg.card.name!='sha'||arg.target.countCards('h','shan')>1) return false;
                                            },
                                        },
                                        sub:true,
                                    },
                                    juedou:{
                                        audio:"yxsre_wushuang_modi",
                                        trigger:{
                                            player:"useCardToPlayered",
                                            target:"useCardToTargeted",
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            return event.card.name=='juedou';
                                        },
                                        logTarget:function(trigger,player){
                                            return player==trigger.player?trigger.target:trigger.player
                                        },
                                        content:function(){
                                            'step 0'
                                            var choiceList=[
                                                '摸两张牌，此【决斗】无效',
                                                '摸一张牌，此【决斗】对方每次只需要打出一张【杀】响应',
                                                '此【决斗】对方每次需要打出两张【杀】响应',
                                                '弃置一张牌，此【决斗】对方每次需要三张【杀】响应'
                                            ];
                                            var list=[];
                                            for(var i=0; i<4; i++){
                                                list.push('选项'+get.cnNumber(i+1,true));
                                            }
                                            player.chooseControl(list).set('prompt',get.prompt('yxsre_wushuang_modi_sha')).set('choiceList',choiceList).set('ai',function(){
                                                var player=_status.event.player;
                                                var list=_status.event.controls.slice(0);
                                                var gett=function(choice){
                                                    var max=0,func={
                                                        选项一:function(current){
                                                            max=0.5;
                                                        },
                                                        选项二:function(target){
                                                            max=1;
                                                        },
                                                        选项三:function(target){
                                                            max=1.5;
                                                        },
                                                        选项四:function(target){
                                                            max=2;
                                                        },
                                                    }[choice];
                                                    game.countPlayer(func);
                                                    return max;
                                                };
                                                return list.sort(function(a,b){
                                                    return gett(b)-gett(a);
                                                })[0];
                                            });
                                            'step 1'
                                            if(result.control){
                                                var index=['选项一','选项二','选项三','选项四'].indexOf(result.control);
                                                event.index=index;
                                                var list=[
                                                    ['摸两张牌，此【决斗】无效',function(target){
                                                        return true;
                                                    }],
                                                    ['摸一张牌，此【决斗】对方每次只需要打出一张【杀】响应',function(target){
                                                        return true;
                                                    }],
                                                    ['此【决斗】对方每次需要打出两张【杀】响应',function(target){
                                                        return true;
                                                    }],
                                                    ['弃置一张牌，此【决斗】对方每次需要三张【杀】响应',function(card){
                                                        return 3-get.value(card);
                                                    },function(card,player,target){
                                                        return player.hasCard(function(card){
                                                            return lib.filter.canBeDiscarded(card,player,player);
                                                        },'he');
                                                    }]
                                                ][index]
                                                if(list.length>2){
                                                    var next=player.chooseToDiscard(list[0],'he');
                                                    next.set('ai',list[1]);
                                                }
                                            }
                                            'step 2'
                                            var id=(player==trigger.player?trigger.target:trigger.player)['playerid'];
                                            var idt=trigger.target.playerid;
                                            var map=trigger.getParent().customArgs;
                                            if(!map[idt]) map[idt]={};
                                            if(!map[idt].shaReq) map[idt].shaReq={};
                                            if(!map[idt].shaReq[id]) map[idt].shaReq[id]=1;
                                            if(!map[id]) map[id]={};
                                            switch(event.index){
                                                case 0:
                                                    player.draw(2);
                                                    trigger.getParent().excluded.push(trigger.target);
                                                    break;
                                                case 1:
                                                    player.draw(1);
                                                    break;
                                                case 2:
                                                    map[idt].shaReq[id]++;
                                                    break;
                                            }
                                            if(result.bool){
                                                map[idt].shaReq[id]+=2;
                                            }
                                            
                                        },
                                        ai:{
                                            "directHit_ai":true,
                                            skillTagFilter:function(player,tag,arg){
                                                if(arg.card.name!='juedou'||Math.floor(arg.target.countCards('h','sha')/2)>player.countCards('h','sha')) return false;
                                            },
                                        },
                                        sub:true,
                                    }
                                }
                            },

                            /* 楚腰,
                             * 当你受到伤害后，你可以将任意张牌交给一名其他角色，然后若你交出的牌不小于：
                             * 1，你摸两张牌
                             * 2，你对伤害来源造成一点伤害
                             * 3，你增加1点体力上限
                             * 4，你回复1点体力
                             */
                            yxsre_chuyao:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{player:"damageEnd"},
                                filter:function(event,player){
                                    return player.countCards('he');
                                },
                                content:function(){
                                    'step 0'
                                    player.chooseTarget(get.prompt('yxsre_chuyao'),'交给一名其他角色任意张牌',function(card,player,target){
                                        return target!=player;
                                    }).set('ai',function(target){
                                        return get.attitude(player,target);
                                    });
                                    'step 1'
                                    if(result.bool){
                                        event.target=result.targets[0];
                                        // 你是不是觉得写起来很麻烦，就不让给0张，哈哈哈哈哈  A：选择给牌的时候可以点取消就无事发生
                                        player.chooseCard([1, Infinity], 'he', '选择任意张牌交给' + get.translation(event.target), function (card) {
                                            return true;
                                        }).set('ai', function (card) {
                                            if(ui.selected.cards.length<=4) return 20;
                                            else return 3-get.value(card);
                                        });
                                    }
                                    'step 2'
                                    if(result.bool){
                                        event.cards=result.cards;
                                        event.target.gain(event.cards,player,'giveAuto');
                                    }
                                    'step 3'
                                    if(event.cards.length>=1) player.draw(2);
                                    if(event.cards.length>=2){
                                        if(trigger.source) trigger.source.damage();
                                    }
                                    if(event.cards.length>=3) player.gainMaxHp();
                                    if(event.cards.length>=4) player.recover();
                                },
                                ai:{
                                    maixie:true,
                                    "maixie_hp":true,
                                    threaten:0.5,
                                    effect:{
                                        target:function(card,player,target){
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
                                                if(target.maxHp>=5&&target.hp==1) return [1,num*2];
                                            }
                                        },
                                    },
                                },
                            },

                            /* 别姬,
                             * 当你进入濒死状态时，或出牌阶段结束时，你可以将区域内所有牌交给一名男性角色
                             * 若你的体力上限大于其，其增加体力上限至你的体力上限，并回复等量体力
                             * 然后获得“无双”，若其已拥有“无双”，则修改“无双”，最后你死亡。
                             */
                            yxsre_bieji:{
                                trigger:{player:["dying",'phaseUseEnd']},
                                //direct:true,
                                skillAnimation:true,
                                animationColor:"fire",
                                check:function(event,player){
                                    if(!player.getFriends()) return false;
                                    if(player.hp<=1&&(player.countCards('h','tao')+player.countCards('h','jiu')<=1-player.hp)) return true;
                                    if((player.maxHp-player.hp>3)&&player.hp<=2) return true;
                                    return false;
                                },
                                content:function(){
                                    "step 0"
                                    player.chooseTarget(get.prompt('yxsre_bieji'),function(card,player,target){
                                        return player!=target&&target.hasSex('male');
                                    }).ai=function(target){
                                        return get.attitude(player,target);
                                    };
                                    "step 1"
                                    if(result.bool){
                                        var cards=player.getCards('hej');
                                        var target=result.targets[0];
                                        player.logSkill('yxsre_bieji',target);
                                        if(target.maxHp<player.maxHp){
                                            var num=player.maxHp-target.maxHp;
                                            if(num<0) num=0;
                                            target.gainMaxHp(num);
                                            target.recover(num);
                                        }
                                        player.$give(cards,target);
                                        target.gain(cards);
                                        if(target.hasSkill('wuhsuang')||target.hasSkill('yxsre_wuhsuang')){
                                            target.removeSkill('wushuang');
                                            target.removeSkill('yxsre_wushuang');
                                            target.addSkillLog('yxsre_wushuang_modi');
                                        }
                                        else target.addSkillLog('wushuang');
                                        player.die();
                                    }
                                },
                                derivation:['yxsre_wushuang_modi','wushuang']
                            },
                            
                            /* 霸王,
                             * 反贼技 锁定技
                             * 主公的出牌阶段开始时，若你的手牌数少于你的体力上限，则每少一张主公须交给你一张牌，否则受到1点伤害。
                             * 当你杀死主公时，你与其交换身份，然后你增加1点体力上限和体力，最后将手牌摸至体力上限。
                             */
                            yxsre_bawang:{
                                audio:"ext:英雄杀RE/audio:2",
                                group:'yxsre_bawang_general',
                                mode:["identity"],
                                trigger:{
                                    source:"dieBegin",
                                },
                                skillAnimation:"epic",
                                animationColor:"fire",
                                unique:true,
                                forced:true,
                                filter:function(event,player){
                                    // Q: 为什么至少有一名敌人？   A：没有敌人游戏就结束了，否则会在已经胜利的情况下继续游戏，直到有人死亡（测试结果），是否有update游戏胜利状况的还不知道
                                    return (player.identity=='fan')&&event.player.identity=='zhu'&&event.player.getEnemies().length>1;
                                },
                                content:function(event){
                                    game.broadcastAll(function(player,target){
                                        target.identity=player.identity;
                                        delete target.isZhu;
                                        player.identity='zhu';
                                        game.zhu=player;
                                        player.showIdentity();
                                        target.showIdentity();
                                    },player,trigger.player);
                                    event.trigger('zhuUpdate');
                                    player.line(trigger.player,'green');
                                    player.gainMaxHp(true);
                                    player.recover();
                                    player.drawTo(player.maxHp);
                                },
                                subSkill:{
                                    general:{
                                        mode:["identity"],
                                        trigger:{
                                            global:"phaseUseBegin",
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            return event.player==game.zhu&&event.player.isZhu&&player.identity=='fan'&&player.maxHp-player.countCards('h')>0;
                                        },
                                        content:function(){
                                            'step 0'
                                            event.number=player.maxHp-player.countCards('h');
                                            //if(event.number<0) event.number=0;
                                            if(event.number){
                                                // Q: 这个player是主公还是项羽  A:trigger.player 指当前时机的 player，技能出发时机是主公的出牌阶段开始时，所以是主公
                                                trigger.player.chooseCard([1,event.number], 'he', '选择至多'+get.cnNumber(event.number)+'张牌交给项羽', function (card) {
                                                    return true;
                                                }).set('ai', function (card) {
                                                    return 7 - get.value(card);
                                                });
                                            }
                                            else{
                                                event.finish();
                                            }
                                            'step 1'
                                            if(result.bool){
                                                event.cards=result.cards;
                                                player.gain(event.cards,trigger.player,'giveAuto');
                                                // Q: 能否超出限制给牌导致damage造成负数伤害     A：可以
                                                trigger.player.damage(event.number-event.cards.length);
                                            }
                                            else{
                                                trigger.player.damage(event.number);
                                            }
                                        },
                                        sub:true,
                                    }
                                }
                            },

                            yxsre_biyue:{
                                inherit:'biyue',
                                audio:"ext:英雄杀RE/audio:2",
                            },

                            /* 衠舞,
			                 * 出牌阶段开始时，你可以展示所有手牌，若其中的牌的类型数不小于：
                             * 1，你可以选择一名男性角色，你与其各摸一张牌
                             * 2，你获得“离间”直到此阶段结束
                             * 3，你获得“离魂”直到此阶段结束
                             */
                            yxsre_zhunwu:{
                                audio:"ext:英雄杀RE/audio:2",
                                trigger:{player:'phaseUseBegin'},
                                filter:function(event,player){
                                    return player.countCards('h')>0;
                                },
                                preHidden:true,
                                content:function(){
                                    'step 0'
                                    var hs=player.getCards('h');
                                    player.showCards(hs,get.translation(player)+'发动了【衠舞】');
                                    var list=[];
                                    for(var i of hs){
                                        // TODO: double check
                                        list.add(get.type2(i,player));
                                        if(list.length>=3) break;
                                    }
                                    if(list.length>=2) player.addTempSkill('lijian','phaseUseAfter');
                                    if(list.length>=3) player.addTempSkill('lihun','phaseUseAfter');
                                    if(list.length>=1){
                                        player.chooseTarget(get.prompt('yxs_zhunwu'), function (card, player, target) {
                                            return target!=player&&target.hasSex('male');
                                        }).set('ai', function(target){
                                            return get.attitude(target, player);
                                        });
                                    }
                                    'step 1'
                                    if(result.bool) game.asyncDraw([trigger.player, result.targets[0]]);
                                    else event.finish();
                                }
                            },
                        },

                        translate:{
                            //
                            yxsre:'英雄杀RE',

                            //card
                            yxsre_fenghuolangyan:'烽火狼烟',

                            //Classifiction
                            yxsre_chunqiu:"春秋百家",
                            yxsre_dahan:"楚汉争霸",
                            yxsre_nanbei:'两晋南北',
                            yxsre_datang:"大唐盛世",
                            yxsre_liangsong:'两宋造极',
                            yxsre_mingqing:'明清绝唱',
                            yxsre_shijie:"世界之林",
                            xy_jinxiandai:"近现代",
                            xy_jinzhao:'还看今朝',
                            yxsre_undo:"未分类",

                            //Character
                            yxsre_baosi:'褒姒',
                            yxsre_liubang:'刘邦',
                            yxsre_yangyanzhao:'杨延昭',
                            yxsre_chensheng:'陈胜',
                            yxsre_yangguang:'杨广',
                            yxsre_luban:'鲁班',
                            yxsre_sunwu:'孙武',
                            yxsre_huamulan:'花木兰',
                            yxsre_lishishi:'李师师',
                            yxsre_zhaofeiyan:'赵飞燕',
                            yxsre_baiqi:'白起',
                            yxsre_zhaoyong:'赵雍',
                            yxsre_zhuyuanzhang:'朱元璋',
                            yxsre_zuti:'祖逖',
                            yxsre_lishimin:'李世民',
                            yxsre_direnjie:'狄仁杰',
                            yxsre_goujian:'勾践',
                            yxsre_zhangsanfeng:'张三丰',
                            yxsre_yuefei:'岳飞',
                            yxsre_aijiyanhou:'埃及艳后',
                            yxsre_yingzheng:'嬴政',
                            yxsre_lvzhi:"吕雉",
                            yxsre_xiangyu:"项羽",
                            yxsre_yuji:"虞姬",
                            yxsre_diaochan:"貂蝉",
                            yxsre_mingchenghuanghou:'明成皇后',

                            //xinyu
                            xy_yanguoming:'严国铭',
                            xy_yangrundi:'杨润地',
                            xy_qiusidan:'仇思丹',
                            xy_denglijun:'邓丽君',
                            xy_linzhen:'林臻',
                            xy_yaosongwei:'姚松蔚',
                            xy_huangyang:'黄阳',

                            //Skill
                            yxsre_xihou:'戏侯',
                            yxsre_yuren:'驭人',
                            yxsre_yuren_info:'出牌阶段每名角色限一次，你可以弃置一名角色一张牌。若你以此法弃置的是：装备牌，你失去1点体力；锦囊牌，你获得之；红色牌，除非你弃置一张红色牌，否则驭人无效直到回合结束。结束阶段，若你此回合曾对不少于3名角色使用过驭人，你可以摸两张牌或回复1点体力。',
                            yxsre_kaiyang:'开阳',
                            yxsre_kaiyang_info:'全场每有6张带有伤害标签的牌结算结束后，你可以对一名角色造成1点伤害。',
                            yxsre_zhanlv:'斩闾',
                            yxsre_zhanlv_info:'摸牌阶段，你可以放弃摸牌，改为依次弃置一名其他角色两张牌，若其中有：【杀】，你对其使用之；武器牌，你获得之，然后可以立即使用之。',
                            yxsre_chuxing:'楚兴',
                            yxsre_chuxing_info:'限定技，出牌阶段，你可以令所有角色依次选择一项：1，弃置一张装备牌，2，受到一点伤害。所有角色选择完毕后，你摸X张牌，X为以此法弃置的装备数。',
                            yxsre_chuxing_append:'<span style="font-family: yuanli">嗟乎！燕雀安知鸿鹄之志哉！</span>',
                            yxsre_weihuan:'巍焕',
                            yxsre_weihuan_damage_backup:'巍焕',
                            yxsre_weihuan2:'巍焕',
                            yxsre_weihuan3:'巍焕',
                            yxsre_weihuan_info:'游戏开始时，你获得三张“大业”牌，然后/每个摸牌阶段结束后，你可以用手牌交换等量的“大业”牌，你的手牌上限+X，X为“大业”牌数。出牌阶段，你可以移除一张“大业”牌并选择一名其他角色，你对其造成1点伤害，然后若其：未死亡，你减1点体力上限，然后到你下一回合开始前：手牌中所有与此阶段弃置“大业”牌类型相同的牌均视为【杀】，且你使用【杀】无次数和距离限制；死亡，你增加1点体力上限和体力，然后摸体力上限数的牌。',
                            yxsre_weihuan_append:'<span style="font-family: yuanli">尽道隋亡为此河，至今千里赖通波。若无水殿龙舟事，共禹论功不较多。</span><br /><span style="font-size:13px; width: 300px; font-family: yuanli; text-align:center; display:inline-block;">——皮日休</span>',
                            yxsre_guifu:'鬼斧',
                            yxsre_guifu_info:'出牌阶段限一次，你可以弃置自己和一名其他角色的一张装备牌，然后你和其各摸一张牌。',
                            yxsre_shengong:'神工',
                            yxsre_shengong_info:'出牌阶段，你可以选择场上一张装备牌，用自己的一张手牌复制该装备，然后可以将之置于一名角色的装备区。',
                            yxsre_bingsheng:'兵圣',
                            yxsre_bingsheng_info:'出牌阶段限一次，你可以弃置X张花色不同的手牌，指定一名其他角色使其体力值与你相同（体力最多变化X点）',
                            yxsre_taolue:'韬略',
                            yxsre_taolue_info:'锁定技，你的手牌上限为13',
                            yxsre_cexun:'策勋',
                            yxsre_cexun_Male:'策勋',
                            yxsre_cexun_Female:'策勋',
                            yxsre_cexun_info:'弃牌阶段开始时，若你的性别为男且于此回合造成了不小于3点伤害，你可以增加1点体力上限；若你的性别为女，且此回合没有造成过伤害，你可以摸一张牌，然后跳过此阶段。',
                            yxsre_pushuo:'扑朔',
                            yxsre_pushuo_toMale:'扑朔',
                            yxsre_pushuo_toFemale:'扑朔',
                            yxsre_pushuo_info:'转换技。游戏开始时，你随机获得一个性别。阴：准备阶段开始前/结束阶段结束后，你可以弃置一张装备牌，回复1点体力，将性别变为女性；阳：当你造成伤害后，你选择一个“迷离”选择的武将牌上的技能改为永久获得，然后将性别变为男性。',
                            yxsre_cexun_append:'<span style="font-family: yuanli">雄兔脚扑朔，雌兔眼迷离；双兔傍地走，安能辨我是雄雌？</span>',
                            yxsre_mili:'迷离',
                            yxsre_mili_info:'锁定技，游戏开始时/你的准备阶段开始前/结束阶段结束后，你从未加入游戏的武将牌中获得等于游戏人数张数（至少4张）的与你记录性别相同性别的武将牌，然后你选择其中两个技能获得，直到你下次发动“迷离”（若你的性别与这些武将的不同，则改为选择一个技能，然后若你的性别为：男性，你获得“枭姬”和一张装备牌；女性，你获得“进讨”和一张【杀】，且你可以立即使用以此法获得的牌），最后你随机重新记录一个性别。',
                            yxsre_hongzhuang:'红妆',
                            yxsre_hongzhuang_info:'转换技。出牌阶段限一次，阴：你可以弃置至少一张黑色牌，然后获得等量的红色牌；阳：你可以弃置至少一张红色牌，然后获得等量的黑色牌。',
                            yxsre_manwu:'曼舞',
                            yxsre_manwu_info:'转换技。当你使用一张，㈠：基本牌后，你可以获得一张基本牌；㈡：锦囊牌后，你可以获得一张锦囊牌；㈢：装备牌后，你可以获得一张装备牌。',
                            yxsre_rentu:'人屠',
                            yxsre_rentu_timeout:'人屠',
                            yxsre_rentu_info:'当你使用非转换牌指定其他角色为唯一目标后，你可以令此牌对其无效，将此牌置于其武将牌上，称为“屠”，然后弃置其一张牌。当有“屠”的角色失去最后手牌时，你依次对其使用这些“屠”。',
                            yxsre_hufu:'胡服',
                            yxsre_hufu_info:'锁定技，若你的装备区内没有防具牌时，摸牌阶段你多摸一张牌；当你装备区内有防具牌时，你的手牌上限+3',
                            yxsre_hanbei:'捍北',
                            yxsre_hanbei_info:'锁定技，你的装备区有坐骑牌时，你的【杀】不可被【闪】抵消',
                            yxsre_qiangyun:'强运',
			                yxsre_qiangyun_info:'当你失去最后一张手牌，可摸2*(X+1)张牌，X为你已发动此技能的次数。然后若你的手牌数大于存活角色数的两倍，你将X归零',
                            yxsre_zhitui:'智退',
                            yxsre_zhitui_info:'使命技。准备阶段开始时，你视为使用一张【五谷丰登】。成功：当你从【五谷丰登】中获得一张点数与体力值相同的牌后，你获得“妖星”；失败：准备阶段，若你的手牌数为场上唯一最多，你须弃置两张牌或失去1点体力',
                            yxsre_yaoxing:'妖星',
                            yxsre_yaoxing_info:'锁定技。若你没有手牌，当你受到大于等于体力值的伤害时，或失去大于等于体力值的体力时，防止之',
                            yxsre_qiwu:'起舞',
                            yxsre_qiwu_info:'新的一轮开始时，你可以令一名角色执行一个额外的出牌阶段',
                            yxsre_zunzi:"尊姿",
                            yxsre_zunzi_info:"锁定技。你的手牌上限基数为你的体力上限。",
                            yxsre_kongju:'控局',
                            yxsre_kongju_info:'若你的手牌数小于：你的体力上限，防止你的手牌被弃置或被其他角色获得；你的体力值，摸牌阶段，你多摸一张牌；若你的手牌数大于：你的体力上限，你不会成为【乐不思蜀】目标；你的体力值，出牌阶段限一次，你可以重铸一张牌。',
                            yxsre_kanpo:'看破',
                            yxsre_kanpo_info:'你可以将黑色手牌当作【无懈可击】使用。',
                            yxsre_shentan:'神探',
			                yxsre_shentan_info:'出牌阶段限一次，你可以弃置一张牌，获得距离2以内的一名角色的一张手牌，然后可以将其交给另一名角色',
                            yxsre_keji:'克己',
                            yxsre_keji_info:'弃牌阶段开始时，若你未在此回合出牌阶段内使用或打出过【杀】，你可以跳过弃牌阶段。',
                            yxsre_tuqiang:'图强',
			                yxsre_tuqiang_info:'当你使用或打出一张点数不小于10的牌时，你可以摸两张牌。',
                            yxsre_wudang:'武当',
                            yxsre_wudang_info: '每回合限一次，当你受到伤害后，你可以展示手牌，若手牌均为黑色，你回复1点体力；若均为红色，你对伤害来源造成1点伤害；若你没有手牌，则你可以依次执行前面两个效果',
                            yxsre_taiji:'太极',
                            yxsre_taiji_info:'出牌阶段，若你手牌中红色牌数等于黑色牌数，你可以摸一张牌。',
                            yxsre_wumu:'武穆',
			                yxsre_wumu_info:'锁定技，你的黑色【杀】无视距离，且伤害+1；红色【杀】不计入回合内的出杀限制，且不可闪避',
                            yxsre_sheshi:'蛇噬',
			                yxsre_sheshi_info:'当你受到1点伤害后，你可以选择一种花色，你依次展示牌堆顶的牌，直到出现选择花色的牌为止，你获得所有展示的牌（最多展示4张牌）。',
                            yxsre_seyou:'色诱',
			                yxsre_seyou_info:'限定技，出牌阶段，你可以指定任意一名角色，所有其他男性角色需选择一项执行：1，对你指定的角色使用一张【杀】；1，你获得其一张牌。',
                            yxsre_juecha:'觉察',
                            yxsre_juecha_info:'‌当你受到伤害后，你可以选择本轮次未选择的一项直到下一轮开始，1，【杀】对你无效；2，通常锦囊牌对你无效；3，摸X张牌，X为你本轮已选择的项数。',
                            yxsre_juecha_sha:'觉察',
                            yxsre_juecha_trick:'觉察',
                            yxsre_tiewan:'铁腕',
                            yxsre_tiewan_info:'当你造成伤害后或有其他角色使用延时锦囊牌后，你可以将一张红色牌当作【乐不思蜀】或将一张黑色牌当作【兵粮寸断】使用',
                            yxsre_batu:'霸图',
                            yxsre_batu_info:'一名角色的回合结束后，你可以将手牌数补至X，X为场上的势力数。“秦”势力角色回合开始前，你可以弃置至多两张牌，然后其摸等量的牌。',
                            yxsre_yuyu:'御宇',
                            yxsre_yuyu_info:'主公技。当你杀死一名非忠臣角色时，你可以减一点体力上限，将其身份改为忠臣，势力改为“秦”，然后其失去所有技能，将体力上限改为4，体力值回复至2，弃置所有牌，最后摸两张牌。',
                            yxsre_zhensha:'鸩杀',
                            yxsre_zhensha_info:'当有其他角色进入濒死状态时，你可以弃置一张【酒】或两张黑色牌，然后该角色将体力回复至1，然后受到X+1点伤害，X为其以此法回复的体力值。',
                            yxsre_xumou:'蓄谋',
                            yxsre_xumou_info:'结束阶段，你可以摸X张牌，X为场上体力值等于体力上限的角色数，然后若X不小于3，你翻面。',
                            yxsre_chuyao:'楚腰',
                            yxsre_chuyao_info:'当你受到伤害后，你可以将任意张牌交给一名其他角色，然后若你交出的牌不小于：一张，你摸两张牌；两张，你对伤害来源造成一点伤害；三张，你增加1点体力上限；四张，你回复1点体力',
                            yxsre_bieji:'别姬',
                            yxsre_bieji_info:'当你进入濒死状态时，或出牌阶段结束时，你可以将区域内所有牌交给一名男性角色，若你的体力上限大于其，其增加体力上限至你的体力上限，并回复等量体力，然后获得“无双”，若其已拥有“无双”，则修改“无双”，最后你死亡。',
                            yxsre_wushuang_modi:'无双·修改',
                            yxsre_wushuang_modi_info:'锁定技。当你使用【杀】/【决斗】指定目标后（或成为【决斗】的目标后），你须选择一项：1，摸两张牌，然后此牌无效；2，摸一张牌；3，令此牌需要响应的【闪】/【杀】数量+1，4，弃置一张牌，令此牌需要响应的【闪】/【杀】数量+2。',
                            yxsre_wushaung:'无双',
                            yxsre_wushuang_info:'锁定技，当你使用【杀】或【决斗】指定目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。',
                            yxsre_bawang:'霸王',
                            yxsre_bawang_info:'反贼技。锁定技。主公的出牌阶段开始时，若你的手牌数少于你的体力上限，则每少一张主公须交给你一张牌，否则受到1点伤害。当你杀死主公时，你与其交换身份，然后你增加1点体力上限和体力，最后将手牌摸至体力上限。',
                            yxsre_biyue:'闭月',
                            yxsre_biyue_info:'结束阶段，你可以摸一张牌。',
                            yxsre_zhunwu:'衠舞',
			                yxsre_zhunwu_info:'出牌阶段开始时，你可以展示所有手牌，若其中的牌的类型数不小于：1，你可以选择一名男性角色，你与其各摸一张牌；2，你获得“离间”直到此阶段结束；3，你获得“离魂”直到此阶段结束。',

                            //xinyu
                            xy_qinkuang:'钦狂',
                            xy_qinkuang_info:'当你使用牌名字数：大于体力值的牌时，你可以摸一张牌；等于体力值的牌时，你可以多选择一个合法目标。',
                            xy_polv:'魄虑',
                            xy_polv_info:'觉醒技。结束阶段，若有角色的体力值大于其在你的回合开始时的体力值，你减1点体力上限，然后获得“行殇”，最后，你从“乱武”、“七哀”和“败移”三个技能中选择一个技能立即发动。',
                            xy_jihong:'羁鸿',
                            xy_jihong_info:'出牌阶段开始时，你可以对一名角色造成1点伤害，然后此回合的结束阶段开始时，其回复X点体力，X为此回合出牌阶段你对其造成的伤害数。',
                            xy_rongyang:'荣飏',
                            xy_rongyang_info:'当有角色体力值或体力上限变化后，若其体力值等于其体力上限，你可以摸一张牌。',
                            xy_fuyuan:'负怨',
                            xy_fuyuan_info:'当你受到伤害后，你可以展示一张手牌，然后展示伤害来源所有手牌，弃置其手牌和装备区内所有与你所展示牌花色相同的牌。',
                            xy_shujin:'淑矜',
                            xy_shujin_info:'当你需要使用【无懈可击】时，你可以判定，若结果为：黑色，视为你使用了【无懈可击】；红色，你可以将判定牌放置回牌堆顶。',
                            xy_qiyuan:'祈愿',
                            xy_qiyuan_info:'准备阶段，你可以判定，若结果：为红桃，你可以回复1点体力或摸两张牌；不为红桃，你选择一名角色获得判定牌。',
                            xy_danmei:'耽美',
                            xy_danmei_info:'你的回合外，当你失去牌后，你可以另一名其他角色摸等量的牌。',
                            xy_biqin:'比钦',
                            xy_biqin_info:'锁定技。当你使用【杀】或成为【杀】的目标后，你判定，若结果为：黑色，此【杀】对所有目标无效；红色，你获得判定牌。',
                            xy_zhenhui:'振麾',
                            xy_zhenhui_info:'当你的手牌数和体力值之和不大于2时，你可以摸两张牌。',
                            xy_miaoyin:'妙音',
                            xy_miaoyin_info:'准备阶段，你可以判定。若结果点数为1-7，你可以获得此判定牌，然后重复此流程。',
                            xy_youyang:'悠扬',
                            xy_youyang_info:'你可以将某个点数的一张牌按如下对应关系当作对应牌使用或打出：1点--【杀】，2点--【闪】，3点--【桃】，4点--【酒】，5点--【五谷丰登】，6点--【无中生有】，7点--【无懈可击】',
                            xy_youyang_append:'<span style="font-family: yuanli">殷勤频致语，何日君再来。</span>',
                        },
                        
                        characterIntro:{
                            yxsre_yangguang:'  隋炀帝杨广，是隋朝第二代皇帝，华阴（今陕西华阴）人，生于隋京师长安。杨广在位期间修建大运河，营建东都迁都洛阳城，开创科举制度，亲征吐谷浑，三征高句丽。但因为杨广滥用民力，导致了隋朝的灭亡，618年在江都被部下缢杀。',
                            yxsre_luban:'  鲁班，姓公输，名般。战国时期鲁国公族之后，故又称公输子、班输等。出身于工匠世家，是我国古代最著名的发明家、建筑家。鲁班一生发明无数，而最具贡献意义的则要数木工使用的工具，诸如墨斗、锯、和鲁班尺等。为后世的建筑学提供了最基础的工具。除此之外，相传石磨、云梯等工具也是鲁班发明。',
                            yxsre_sunwu:'  著名军事家，字长卿，中国春秋时期齐国乐安人。曾率领吴国军队大破数倍于己的楚国军队，占领了楚国都城郢城，几乎亡楚。其著有巨作《孙子兵法》十三篇，为后世兵法家所推崇，被誉为“兵学圣典”，置于《武经七书》之首，被译为英文、法文、德文、日文，成为国际间最著名的兵学典范之书。后人尊称其为孙子、孙武子、兵圣、百世兵家之师、东方兵学的鼻祖。',
                            yxsre_huamulan:'  花木兰是中国文学作品中的一位代父从军的巾帼英雄，其真实性不详。花木兰最早出现于南北朝一首叙事诗《木兰辞》中，该诗约作于北魏，最初录于南朝陈的《古今乐录》，僧人智匠在《古今乐录》称：“木兰不知名。”',
                            yxsre_zhaoyong:'  赵武灵王，战国中后期赵国君主，嬴姓，赵氏，名雍。赵武灵王在位时，推行的“胡服骑射”政策，赵国因而得以强盛，灭中山国，败林胡、楼烦二族，辟云中、雁门、代三郡，并修筑了“赵长城”。',
                            yxsre_zhuyuanzhang:' 朱元璋，明王朝的开国皇帝。原名重八，后取名兴宗。汉族，濠州（今安徽凤阳县东）钟离太平乡人。朱元璋自幼贫寒，父母兄长均死于瘟疫，孤苦无依，入皇觉寺为小沙弥，入寺不到二个月，因荒年寺租难收，寺主封仓遣散众僧，只得离乡为游方僧，后参加了起义军，并改名“朱元璋”意为诛（朱）灭元朝的璋（璋，古代的一种玉器）。25岁时参加郭子兴领导的红巾军反抗蒙元暴政，在郭子兴手下，率兵出征，有攻必克；因此郭便把养女马氏嫁与了他。元至正二十八年(1368)，在基本击破各路农民起义军和扫平元的残余势力后，于南京称帝，国号大明，年号洪武，建立了全国统一的封建政权。朱元璋统治时期被称为“洪武之治”。葬于明孝陵。',
                            yxsre_lishimin:' 李世民，唐朝第二位皇帝。他的前半生是立下赫赫武功的军事家。平窦建德、王世充之后，始大量接触文学与书法，有《温泉铭》、《晋祠铭》等墨宝传世。后在玄武门之变杀死自己的兄弟李建成、李元吉两人，成为太子，唐高祖不久被迫让位。世民即位为帝后，积极听取群臣的意见、努力学习文治天下，成功转型为中国史上最出名的政治家与明君之一。唐太宗开创了历史上的“贞观之治”，经过主动消灭群雄割据势力，虚心纳谏、在国内厉行节约、使百姓休养生息，终于使得社会出现了国泰民安的局面。此举为后来的开元盛世奠定了重要的基础，将中国传统农业社会推向一个高峰。',
                            yxsre_direnjie:'  唐武周时期杰出的著名政治家，时任豫州刺史、魏州刺史等要职，官至凤阁鸾台平章事、内史，卒后追封梁国公。狄仁杰生于贞观、卒于武周时期，经历了大唐鼎盛和动乱的年代。其一生秉承了以民为本、不畏权贵、为民请命的宗旨。狄仁杰通晓了吏治、兵刑等法律制度，在任大理丞任期内解决了诸多案件，被誉为“神探”。狄仁杰为官清廉，素有政绩，有辅国安邦之能，史称“唐室砥柱”。',
                            yxsre_goujian:'  勾践，又写作句践，在出土文物“越王勾践剑”里写为鸠浅，司马贞《史记索隐》引《纪年》作菼执。是中国春秋时代后期的越国君主。有关他的先世，有说“其先禹之苗裔”，亦有说“先世无所考”，也有说他是“祝融之后”并且是楚国的芈姓，众说纷纭。父亲则是越侯允常。',
                            yxsre_zhangsanfeng:'  明朝最著名的武术家、道士。原名张通，字君宝，在武当山开山立派，成为武当派开山祖师。明英宗赐号“通微显化真人”；明宪宗特封号为“韬光尚志真仙”；明世宗赠封他为“清虚元妙真君”。传说其丰姿魁伟，大耳圆目，须髯如戟。无论寒暑，只一衲一蓑，一餐能食升斗，或数日一食，或数月不食，事能前知。其在武术上的造诣和超乎寻常的长寿都为后人称道。 曾传洪武年间，两度受朱元璋诏请入京，皆避而不见。其与明初巨贾沈万三亦有交际。其所创太极拳一直延续至今，成为后人养身妙术。',
                            yxsre_yuefei:'  岳飞（1103年－1142年），字鹏举，相州汤阴（今属河南）人。南宋军事家，中国历史上著名的抗金名将。绍兴十一年（1142）十二月二十九日，秦桧以“莫须有”的罪名将岳飞毒死于临安风波亭。1162年，宋孝宗时诏复官，谥武穆，宁宗时追封为鄂王，改谥忠武，有《岳武穆集》传世。',
                            yxsre_aijiyanhou:'  埃及艳后即克丽奥佩托拉七世,是古埃及托勒密王朝的最后一任法老。她通过政治联姻为古埃及赢取了22年的和平。埃及艳后的一生富有戏剧性，特别是卷入罗马共和末期的政治漩涡，同恺撒、安东尼关系密切，并伴以种种传闻逸事，使她成为文学和艺术作品中的著名人物。',
                            yxsre_mingchenghuanghou:'  明成皇后，朝鲜近代史上的女政治家，本名闵兹映，通称闵妃，是朝鲜京畿道骊州郡人。她是朝鲜王朝高宗李熙的王妃，骊兴闵氏外戚集团的核心人物，19世纪末朝鲜的实际统治者。由于闵妃早期主张开放、后期力抗日本并身死殉难，故深受后世韩国人民的尊崇。 1897年，高宗李熙改国号称“大韩帝国”，追谥闵妃为“孝慈元圣正化合天明成皇后”，故现今韩国史学家多称她为“明成皇后”。',
                            yxsre_lvzhi:'  吕雉，西汉开国皇帝高祖刘邦的原配夫人，中国历史上第一位掌权的女性统治者，是历史上有记载以来的第一位皇后、皇太后。于高祖刘邦死后掌握政权，实行高祖的“黄老政治”，百姓安乐民富国强，为“文景之治”奠定了坚实的基础。',
                            yxsre_yingzheng:'  秦始皇，赢姓，赵氏，名政，秦庄襄王之子。秦始皇22岁时，在雍城举行国君成人加冕仪式，开始“亲理朝政”。后除掉吕不韦，嫪毐等人，重用李斯，尉缭。自公元前230年至前221年，采取由近及远，集中力量，各个击破的策略，先后灭六国，完成统一中国的大业。同时建立起历史上第一个书同文，度同制，车同轨，行同伦的中央集权国家——秦朝。',
                            yxsre_yuji:'  虞姬，又称虞美人，西楚霸王项羽爱姬，相传为江苏沭阳县颜集乡人，一说苏州常熟人。公元前209年，项羽与叔父项梁起义反秦。项羽军中战将虞子期的妹妹虞姬，貌美好武，倾慕年轻勇猛的项羽，嫁其为妾，常伴左右随军出征，至终形影不离。 公元前202年，项羽在垓下之战中被刘邦、韩信、彭越三方大军合围困于垓下（今安徽灵璧县城南沱河北岸城后村），身陷十面埋伏，兵孤粮缺，夜闻四面楚歌，楚军士气尽失。项羽认为大势已去，帐中酌酒，对着虞姬唱起悲壮的“垓下歌”。虞姬拔剑起舞，含泪唱和：“汉兵已略地，四面楚歌声。大王义气尽，贱妾何聊生。”为免后顾之忧影响项羽突围，唱毕于其面前自刎。',
			                yxsre_xiangyu:'  项籍（前232—前202）字羽，通常被称作项羽，中国古代著名将领及政治人物，汉族，秦下相（今江苏省宿迁市宿城区）人。秦末时被楚怀王熊心封为鲁公，在前207年的决定性战役巨鹿之战中统率楚军大破秦军。秦亡后自封“西楚霸王”，统治黄河及长江下游的梁楚九郡。后在楚汉战争中为汉高祖刘邦所败，在乌江（今安徽和县）自刎而死。',
                            yxsre_diaochan:'  中国古代四大美女之一，今山西忻州人，有野史说其姓霍，无名，又有一说称其任姓，小字红昌。貂蝉是东汉末年司徒王允的义女，国色天香，有倾国倾城之貌，相传貂婵在后花园拜月时，忽然轻风吹来，一块浮云将那皎洁的明月遮住。这时正好王允瞧见，便说我的女儿和月亮比美，月亮比不过，赶紧躲在云彩后面。此后，世人常用“闭月”来形容貂婵的美貌。',

                            //xinyu
                            xy_denglijun:'',
                            xy_linzhen:'',
                            xy_yaosongwei:'',
                        },

                        characterTitle: {
                            "yxsre_liubang":'汉高祖',
                            "yxsre_yangyanzhao":"北斗六郎",
                            "yxsre_chensheng":"首事鸿鹄",
                            "yxsre_yangguang":"千古之炀",
                            "yxsre_baiqi":"武安君",
                            "yxsre_yingzheng":"始皇帝",

                            //xinyu
                            "xy_yanguoming":'君已陌路',
                            "xy_yangrundi":'一代の天骄',
                            "xy_qiusidan":'兰质慧心',
                            "xy_linzhen":'书香门第',
                            "xy_denglijun":'何日君再来',
                            "xy_huangyang":'耽于美色',
                            "xy_yaosongwei":'云·风',
                        }
                    }
                    /*for (var i in yxsre.character) {
                        if(lib.config.yxsreLutou) yxsre.character[i][4].push('ext:英雄杀RE/image/lutou/' + i + '.jpg')
                        else yxsre.character[i][4].push('ext:英雄杀RE/image/character/' + i + '.jpg')
                    }*/
                    
                    for(var i in yxsre.character){
                        yxsre.character[i][4].push('ext:英雄杀RE/image/character/'+i+'.jpg');
                    }
                    return yxsre;
                });
                lib.config.all.characters.push('yxsre');
                lib.translate['yxsre_character_config'] = "英雄杀RE";
            }
        },
        help:{},
        config:{},
        package:{
            card:{
                card:{
                },
                translate:{
                },
                list:[],
            },
            skill:{
                skill:{
                    
                },
                translate:{
                    
                },
            },
            intro:"",
            author:"枭雄之姿",
            diskURL:"",
            forumURL:"",
            version:"1.0",
        },
        files:{
            "character":[],
            "card":[],
            "skill":[]
        }
    }
})