/*
 * File: \extension\英雄杀RE\backups\extension.js
 * Project: noname
 * Created Date: Sunday Aug 21st 2022, 11:29:45 am
 * Author: Wenren Muyan
 * Comments: 
 * --------------------------------------------------------------------------------
 * Last Modified: 21/08/2022 07:34:7
 * Modified By: Wenren Muyan
 * --------------------------------------------------------------------------------
 * Copyright (c) 2022 - future Wenren Muyan
 * --------------------------------------------------------------------------------
 * HISTORY:
 * Date				By				Comments
 * --------------------------------------------------------------------------------
 */


game.import("extension",function(lib,game,ui,get,ai,_status){
    return {
        name:"英雄杀RE",
        content:function(config,pack){
            //lib.init.css(lib.assetURL + 'extension/英雄杀RE', 'extension');
            //平凡武将
            lib.rank.rarity.junk.addArray([]);
            //精品武将
            lib.rank.rarity.rare.addArray(["yxsre_yuji","yxsre_diaochan"]);
            //史诗武将
            lib.rank.rarity.epic.addArray(["yxsre_lvzhi","yxsre_xiangyu"]);
            //传说武将
            lib.rank.rarity.legend.addArray(["yxsre_yingzheng"]);

            lib.group.push('qin');
            lib.translate.qin = '秦';
            lib.groupnature.qin = 'fire';
            lib.group.push('chu');
            lib.translate.chu = '楚';
            lib.groupnature.chu = 'orange';
        },
        precontent:function(yxsre){
    /*window.ygb_import = function (func) {
        func(lib, game, ui, get, ai, _status);
    };*/
            lib.init.js(lib.assetURL + 'extension/英雄杀RE/skin.js', null);

            if(yxsre.enable){
                game.import("character",function(){
                    var yxsre = {
                        name:"yxsre",
                        connect:true,
                        characterSort:{
                            yxsre: {
                                yxsre_chunqiu:["yxsre_yingzheng"],
                                yxsre_dahan:["yxsre_lvzhi","yxsre_xiangyu","yxsre_yuji","yxsre_diaochan"],
                            },
                        },
                        character:{
                            yxsre_yingzheng:['male','qin',4,['yxsre_batu','yxsre_yuyu'],['zhu']],
                            yxsre_lvzhi:['female','qun',3,['yxsre_zhensha','xumou'],[]],
                            yxsre_xiangyu:['male','chu',4,['wushuang','yxsre_bawang'],[]],
                            yxsre_yuji:['female','qun',3,['yxsre_chuyao','yxsre_bieji'],[]],
                            yxsre_diaochan:['female','qun',3,['yxs_zhunwu','biyue'],[]],
                        },
                        skill:{
                            yxsre_batu:{
                                trigger:{global:'phaseAfter'},
                                frequent:true,
                                /*mod:{
                                    cardUsable:function(card,player,num){
                                        if(card.name=='sha') return num-1+game.countPlayer(function(current){
                                            if(current.group=='qin') return 1;
                                        });
                                    },
                                },*/
                                group:{yxsre_batu_qin},
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
                                            return event.player.group=='qin'&&player.countCards('he');
                                        },
                                        check:function(event,player){
                                            return get.attitude(player,trigger.player);    
                                        },
                                        content:function(event,player){
                                            'step 0'
                                            player.chooseToDiscard('he',[1,2],'弃置至多两张牌，令其摸等量的牌',player).set('ai',function(card){
                                                if(player.countCards('h')-game.countGroup()>0){
                                                    return 8-get.value(card);
                                                }
                                                if(player.countCards('h')-player.hp-ui.selected.cards.length>0){
                                                    return 8-get.value(card);
                                                }
                                                return 4-get.value(card);
                                            });
                                            'step 1'
                                            if(result.bool){
                                                this.trigger.player.draw(result.cards.length);
                                            }
                                        },
                                        sub:true,
                                    }
                                },
                            },

                            yxsre_yuyu:{
                                mode:["identity"],
                                trigger:{
                                    source:"dieBegin",
                                },
                                skillAnimation:"epic",
                                animationColor:"fire",
                                unique:true,
                                zhuSkill:true,
                                filter:function(event,player){
                                    return event.player.identity!='zhong'&&event.player.identity!='mingzhong'&&player.getEnemies().length>1;
                                },
                                prompt:function(event,player){
                                    return '寓宇：是否减1点体力上限令其身份改为忠臣';
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

                            yxsre_zhensha:{
                                trigger:{global:'dying'},
                                priority:9,
                                filter:function(event,player){
                                    return event.player.hp<=0&&(player.countCards('h','jiu')>0||player.countCards('he',{color:'black'})>=2)&&player!=event.player;
                                },
                                direct:true,
                                content:function(){
                                    'step 0'
                                    var goon=(get.attitude(player,trigger.player)<0);
                                    var next=player.chooseToDiscard('鸠杀：是否弃置一张【酒】或两张黑色手牌令'+get.translation(trigger.player)+'立即死亡？','he');
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
                                        var num=1-trigger.player.hp;
                                        trigger.player.recover(num);
                                        trigger.player.damage(num+1);
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

                            yxsre_xumou:{
                                trigger:{
                                    player:"phaseJieshuBegin",
                                },
                                prompt:function(event,player){
                                    var num=game.countPlayer(function(current){
                                        return !current.isDamaged();
                                    });
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
                            yxsre_chuyao:{
                                trigger:{player:"damageEnd"},
                                filter:function(event,player){
                                    return player.countCards('he');
                                },
                                //filterTarget:function(card,player,target){
                                //	return player!=target;
                                //},
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
                                }
                                
                            },
                
                            yxsre_bieji:{
                                trigger:{player:["dying",'phaseUseEnd']},
                                //direct:true,
                                skillAnimation:true,
                                animationColor:"fire",
                                derivation:'yxsre_wushuang_modi',
                                check:function(event,player){
                                    if(!player.getFriends()) return false;
                                    if(player.hp<=1&&(player.countCards('h','tao')+player.countCards('h','jiu')<1-player.hp)) return true;
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
                                        if(target.maxHp<player.maxHp){
                                            var num=player.maxHp-target.maxHp;
                                            if(num<0) num=0;
                                            target.gainMaxHp(num);
                                            target.recover(num);
                                        }
                                        player.$give(cards,target);
                                        target.gain(cards);
                                        if(target.hasSkill('wuhsuang')){
                                            target.removeSkill('wushuang');
                                            target.addSkill('yxsre_wushuang_modi');
                                        }
                                        else target.addSkill('wushuang');
                                        player.die();
                                    }
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
                                }
                            },
                
                            yxsre_wushuang_modi:{				//TODO: AI rewrite
                                shaRelated:true,
                                //audio:2,
                                //audioname:["re_lvbu","shen_lvbu","lvlingqi"],
                                forced:true,
                                locked:true,
                                group:["yxsre_wushuang_modi_1","yxsre_wushuang_modi_2"],
                                preHidden:["yxsre_wushuang_modi_1","yxsre_wushuang_modi_2"],
                                subSkill:{
                                    1:{
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
                                            //var targets=trigger.targets;
                                            if(!map[id]) map[id]={};
                                            switch(event.index){
                                                case 0:
                                                    player.draw(2);
                                                    trigger.getParent().excluded.push(trigger.target);		//TODO: 
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
                                    2:{
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
                                            //var targets=trigger.targets;
                                            if(!map[id]) map[id]={};
                                            switch(event.index){
                                                case 0:
                                                    player.draw(2);
                                                    trigger.getParent().excluded.push(trigger.target);		//TODO: 
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
                            yxsre_bawang:{
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
                                    return (player.identity=='fan'||player.identity=='nei')&&event.player.identity=='zhu'&&event.player.getEnemies().length>1;
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
                                            if(event.number<0) event.number=0;
                                            /*if(event.number){
                                                trigger.player.chooseBool('是否交给项羽至多'+get.cnNumber(event.number)+'张牌？').set('ai',function(){
                                                    if(event.number<=1) return true;
                                                    if(event.number>3) return false;
                                                    if(trigger.player.hp==1) return true;
                                                    if(trigger.player.countCards('he')>=event.number+2) return true; //TODO: 
                                                    return false;
                                                });
                                            }
                                            else{
                                                event.finish();
                                            }*/
                                            if(event.number){
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

                            yxsre_zhunwu:{
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
                                    if(result.bool) game.asyncDraw([trigger.player,result.targets[0]]);
                                    else event.finish();
                                }
                            },
                        },
                        translate:{
                            //
                            yxsre:'英雄杀RE',

                            //Classifiction
                            yxsre_chunqiu:"春秋百家",
                            yxsre_dahan:"楚汉争霸",

                            //Character
                            yxsre_yingzheng:'嬴政',
                            yxsre_lvzhi:"吕雉",
                            yxsre_xiangyu:"项羽",
                            yxsre_yuji:"虞姬",

                            //Skill
                            yxsre_batu:'霸图',
                            yxsre_batu_info:'一名角色的回合结束时，你可以将手牌数补至X，X为场上的势力数。',
                            yxsre_yuyu:'御宇',
                            yxsre_yuyu_info:'主公技。当你杀死一名非忠臣角色时，你可以减一点体力上限，将其身份改为忠臣，势力改为“秦”，然后其失去所有技能，将体力上限改为4，体力值回复至2，弃置所有牌，最后摸两张牌。',
                            yxsre_zhensha:'鸩杀',
                            yxsre_zhensha_info:'当有角色进入濒死状态时，你可以弃置一张【酒】或两张黑色牌，然后该角色将体力回复至1，然后受到X+1点伤害，X为致其进入濒死状态的伤害数或体力流失数。',
                            yxsre_xumou:'蓄谋',
                            yxsre_xumou_info:'结束阶段，你可以摸X张牌，X为场上体力值等于体力上限的角色数，然后若X不小于3，你翻面。',
                            yxsre_chuyao:'楚腰',
                            yxsre_chuyao_info:'当你受到伤害后，你可以将任意张牌交给一名其他角色，然后若你交出的牌不小于：一张，你摸两张牌；两张，你对伤害来源造成一点伤害；三张，你增加1点体力上限；四张，你回复1点体力',
                            yxsre_bieji:'别姬',
                            yxsre_bieji_info:'当你进入濒死状态时，或出牌阶段结束时，你可以将区域内所有牌交给一名男性角色，若你的体力上限大于其，其增加体力上限至你的体力上限，并回复等量体力，然后获得“无双”，若其已拥有“无双”，则修改“无双”，最后你死亡。',
                            yxsre_wushuang_modi:'无双',
                            yxsre_wushaung_modi_info:'锁定技。当你使用【杀】/【决斗】指定目标后（或成为【决斗】的目标后），你须选择一项：1，摸两张牌，然后此牌无效；2，摸一张牌；3，令此牌需要响应的【闪】/【杀】数量+1，4，弃置一张牌，令此牌需要响应的【闪】/【杀】数量+2。',
                            yxsre_bawang:'霸王',
                            yxsre_bawang_info:'反贼技。锁定技。主公的出牌阶段开始时，若你的手牌数少于你的体力值，则每少一张主公须交给你一张牌，否则受到1点伤害。当你杀死主公时，你与其交换身份，然后你增加1点体力上限和体力，最后将手牌摸至体力上限。',
                            yxsre_zhunwu:'衠舞',
			                yxsre_zhunwu_info:'出牌阶段开始时，你可以展示所有手牌，若其中的牌的类型数不小于：1，你可以选择一名男性角色，你与其各摸一张牌；2，你获得“离间”直到此阶段结束；3，你获得“离魂”直到此阶段结束。',
                        },
                        characterIntro:{
                            yxsre_lvzhi:'吕雉，西汉开国皇帝高祖刘邦的原配夫人，中国历史上第一位掌权的女性统治者，是历史上有记载以来的第一位皇后、皇太后。于高祖刘邦死后掌握政权，实行高祖的“黄老政治”，百姓安乐民富国强，为“文景之治”奠定了坚实的基础。',
                            yxsre_yingzheng:'秦始皇，赢姓，赵氏，名政，秦庄襄王之子。秦始皇22岁时，在雍城举行国君成人加冕仪式，开始“亲理朝政”。后除掉吕不韦，嫪毐等人，重用李斯，尉缭。自公元前230年至前221年，采取由近及远，集中力量，各个击破的策略，先后灭六国，完成统一中国的大业。同时建立起历史上第一个书同文，度同制，车同轨，行同伦的中央集权国家——秦朝。',
                            yxsre_yuji:'虞姬，又称虞美人，西楚霸王项羽爱姬，相传为江苏沭阳县颜集乡人，一说苏州常熟人。公元前209年，项羽与叔父项梁起义反秦。项羽军中战将虞子期的妹妹虞姬，貌美好武，倾慕年轻勇猛的项羽，嫁其为妾，常伴左右随军出征，至终形影不离。 公元前202年，项羽在垓下之战中被刘邦、韩信、彭越三方大军合围困于垓下（今安徽灵璧县城南沱河北岸城后村），身陷十面埋伏，兵孤粮缺，夜闻四面楚歌，楚军士气尽失。项羽认为大势已去，帐中酌酒，对着虞姬唱起悲壮的“垓下歌”。虞姬拔剑起舞，含泪唱和：“汉兵已略地，四面楚歌声。大王义气尽，贱妾何聊生。”为免后顾之忧影响项羽突围，唱毕于其面前自刎。',
			                yxsre_xiangyu:'项籍（前232—前202）字羽，通常被称作项羽，中国古代著名将领及政治人物，汉族，秦下相（今江苏省宿迁市宿城区）人。秦末时被楚怀王熊心封为鲁公，在前207年的决定性战役巨鹿之战中统率楚军大破秦军。秦亡后自封“西楚霸王”，统治黄河及长江下游的梁楚九郡。后在楚汉战争中为汉高祖刘邦所败，在乌江（今安徽和县）自刎而死。',
                            yxsre_diaochan:'中国古代四大美女之一，今山西忻州人，有野史说其姓霍，无名，又有一说称其任姓，小字红昌。貂蝉是东汉末年司徒王允的义女，国色天香，有倾国倾城之貌，相传貂婵在后花园拜月时，忽然轻风吹来，一块浮云将那皎洁的明月遮住。这时正好王允瞧见，便说我的女儿和月亮比美，月亮比不过，赶紧躲在云彩后面。此后，世人常用“闭月”来形容貂婵的美貌。',
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