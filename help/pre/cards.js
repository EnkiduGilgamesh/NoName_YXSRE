'use strict';
window.reTHK_import(function(lib,game,ui,get,ai,_status){
    game.import('card',function(){
        var THKC={
			name:'THKC',
			connect:true,
			card:{
			"dz_fu":{
			type:"basic",
			enable:false,
			global:'dz_fu_skill',
            fullskin:true,
            image:"ext:RE：英雄杀/dz_fu.png",
            ai:{
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
						target_use:function(player,target){
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
					}
				}
            },
            "dz_zhen":{
            audio:true,
				image:"ext:RE：英雄杀/dz_zhen.png",
                fullskin:true,
				type:"basic",
				toself:true,
				enable:true,
				logv:false,
				savable:function(card,player,dying){
					return dying==player;
				},
				global:'g_zhen',
				selectTarget:-1,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(target.isDying()||event.getParent(2).type=='dying'){
						target.recover(event.baseDamage);
						if(_status.currentPhase==target){
							target.getStat().card.dz_zhen--;
						}
					}
					else{
					if (!target.hasSkill('dz_zhen_skill'))target.addTempSkill('dz_zhen_skill');
					player.loseHp();
					}
				},
				ai:{
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
					order:function(){
						return get.order({name:'sha'})+0.2;
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
						save:1
					}
				}
            },
            /*dz_xuesha:{
				fullskin:true,
				image:"ext:RE：英雄杀/dz_xuesha.png",
                type:'basic',
				addinfo:'血杀',
				autoViewAs:'sha',
				global:'dz_xueansha_set',
				cardnature:'GXS_blood',
			},
            dz_ansha:{
				fullskin:true,
				image:"ext:RE：英雄杀/dz_ansha.png",
                type:'basic',
				addinfo:'暗杀',
				autoViewAs:'sha',
				global:'dz_xueansha_set',
				cardnature:'GXS_darkness',
			},*/
			"dz_xuanhuafu":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_xuanhuafu.png",
                fullskin:true,
                distance:{
                    attackFrom:-0,
                },
                skills:["dz_xuanhuafu_skill"],
                ai:{
                    basic:{
                        equipValue:5,     
                    },
                },
            },
            "dz_paoluo":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_paoluo.png",
                fullskin:true,
                distance:{
                    attackFrom:-0,
                },
                skills:["dz_paoluo_skill"],
                cardnature:'fire',
                ai:{
                    basic:{
                        equipValue:2,     
                    },
                },
            },
            "dz_ruyijgb":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_ruyijgb.png",
                fullskin:true,
                distance:{
                    attackFrom:-0,
                },
                skills:["dz_ruyijgb_skill"],
                ai:{
                    basic:{
                        equipValue:2,     
                    },
                },
            },
            "dz_suixintgb":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_suixintgb.png",
                fullskin:true,
                distance:{
                    attackFrom:-0,
                },
                skills:["dz_suixintgb_skill"],
                ai:{
                    basic:{
                        equipValue:2,     
                    },
                },
            },
            "dz_manwangfu":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_manwangfu.png",
                fullskin:true,
                distance:{
                    attackFrom:-2,
                },
                skills:["dz_manwangfu_skill"],
                ai:{
                    basic:{
                        equipValue:2,     
                    },
                },
            },
            "dz_huoliaoya":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_huoliaoya.png",
                fullskin:true,
                distance:{
                    attackFrom:-2,
                },
                skills:["dz_huoliaoya_skill"],
                ai:{
                    basic:{
                        equipValue:2,     
                    },
                },
            },
            "dz_meihuxiang":{
                type:"equip",
                subtype:"equip1",
                image:"ext:RE：英雄杀/dz_meihuxiang.png",
                fullskin:true,
                distance:{
                    attackFrom:-2,
                },
                skills:["dz_meihuxiang_skill"],
                ai:{
                    basic:{
                        equipValue:4,     
                    },
                },
            },
            "dz_TheBloodthirster":{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				image:"ext:RE：英雄杀/dz_TheBloodthirster.png",
				distance:{attackFrom:-1},
				cardnature:'fire',
				ai:{
					basic:{
						equipValue:6
					}
				},
				skills:['dz_TheBloodthirster_skill']
			},
			"dz_kongqueling":{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				image:"ext:RE：英雄杀/dz_kongqueling.png",
				distance:{attackFrom:-3},
				cardnature:'wood',
				ai:{
					basic:{
						equipValue:5
					}
				},
				skills:['dz_kongqueling_skill']
			},
			"dz_qiankundai":{
                onLose:function (){            
                  player.draw();        
                },
                image:"ext:RE：英雄杀/dz_qiankundai.png",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["dz_qiankundai_skill"],
                ai:{
                    equipValue:5,
                },
            },
            "dz_huxinjing":{
                onLose:function (){            
                  if (player.countCards("h"))player.chooseToDiscard("h",true);        
                },
                image:"ext:RE：英雄杀/dz_huxinjing.png",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["dz_huxinjing_skill"],
                ai:{
                    equipValue:7,
                },
            },
            "dz_jinlinjia":{                
				loseDelay:false,
				onLose:function(){
					var next=game.createEvent('dz_jinlinjia_recover');
					event.next.remove(next);
					var evt=event.getParent();
					if(evt.getlx===false) evt=evt.getParent();
					evt.after.push(next);
					next.player=player;
					next.setContent(function(){
						if(player.isDamaged()) player.logSkill('dz_jinlinjia_skill');
						player.recover();
					});
				},
				filterLose:function(card,player){
					if(player.hasSkillTag('unequip2')) return false;
					return true;
				},
                image:"ext:RE：英雄杀/dz_jinlinjia.png",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["dz_jinlinjia_skill"],
                tag:{
					recover:1,
				},
                ai:{
                    equipValue:6,
                },
            },
            dz_tongtiankai:{
                type:"equip",
                subtype:"equip2",
                skills:["dz_tongtiankai_skill"],
                cardnature:'thunder',
                ai:{
                    equipValue:5,
                    basic:{
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                fullskin:true,
                image:"ext:RE：英雄杀/dz_tongtiankai.png",
                nomod:true,
                nopower:true,
                unique:true,
            },
            dz_kanglongjian:{             
                fullskin:true,
                image:"ext:RE：英雄杀/dz_kanglongjian.png",
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["dz_kanglongjian_skill"],
                nomod:true,
                nopower:true,
                unique:true,
                ai:{
                    equipValue:6.5,
                },
            },
            "dz_fangtian":{           
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                image:"ext:RE：英雄杀/dz_fangtian.png",
                skills:["dz_fangtian_skill"],
                ai:{
                    equipValue:6.5,
                },
            },
			"GXS_olshewo":{
                audio:"ext:RE：英雄杀",
				image:"ext:RE：英雄杀/dz_shewo.png",
				fullskin:true,
				type:'delay',
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='diamond') return 1;
					return -3;
				},
				judge2:function(result){
					if(result.bool==false) return true;
					return false;
				},
				contentBefore:function(){
                        if(cards && cards.length == 1){
                            cards[0].storage.GXS_olshewo = player;
                        }
                    },
				effect:function(){
					if(result.bool==false){
					if(card.storage.GXS_olshewo && card.storage.GXS_olshewo.isIn()){
						player.addTempSkill('GXS_olshewo_skill');
						player.storage.GXS_olshewo_skill=card.storage.GXS_olshewo;
					    }
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:function(player,target){
						    if (player.hp==1) return 0;
							var num=target.hp-target.countCards('h')-2;
							if(num>-1) return -0.01;
							if(target.hp<3) num--;
							if(target.isTurnedOver()) num/=2;
							var dist=get.distance(player,target,'absolute');
							if(dist<1) dist=1;
							return num/Math.sqrt(dist)*get.threaten(target,player);
						}
					},
				}
                        },
               "dz_touliang":{
				audio:true,
				fullskin:true,
				image:"ext:RE：英雄杀/dz_touliang.png",
				type:'trick',
				enable:true,
				selectTarget:2,
				singleCard:true,
				complexTarget:true,
				multitarget:true,
				targetprompt:['拿两张牌','拿一张牌'],
				filterTarget:function(card,player,target){
				if (ui.selected.targets.length==1){
				return (target==player &&target.countCards('h')>2)||(target!=player &&target.countCards('h')>1)
				}
					return (target!=player &&target.countCards("h")>0)||(target==player &&target.countCards("h")>1);
				},
				content:function(){
					'step 0'
						event.target1=target;
						event.target2=event.addedTarget;
						if(event.target1&&event.target2){
						event.target1.chooseCard('h','将一张牌交给'+get.translation(event.target2),1,true);
						}else{
						event.finish()
						}
					'step 1'
					if(result.bool){
					event.card1=result.cards;
					var he=event.target2.getCards('h');
					if(he.length<=2){
							event.directresult=he;
						}else{
					event.target2.chooseCard('h','将两张牌交给'+get.translation(event.target1),2,true);
					}	
					}else{
						event.finish()
						}
					'step 2'
					event.target1.$giveAuto(event.card1,event.target2);
					event.target2.gain(event.card1,event.target1);
					if(result.bool){
					if(!event.directresult){
						event.directresult=result.cards;
					}
					event.target2.$giveAuto(event.directresult,event.target1);
					event.target1.gain(event.directresult,event.target2);
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						order:8,
						value:2,
						useful:1,
					},
					tag:{
            multitarget:1,
            multineg:1,
        },
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==1){
							if(target.countCards('h')>1&&get.attitude(player,target)<0) return -2;
							return -1;
							}
								if(target.hasSkillTag('nogain')) return 0;
								return 2;
							return 0;
						}
					}
				}
			},
			dz_gean:{
			audio:true,
				fullskin:true,
				image:"ext:RE：英雄杀/dz_gean.png",
                type:"trick",
                filterTarget:function (card,player,target){       
        if(!ui.selected.targets.length) return !target.hasSkillTag('noCompareTarget')&&((target!=player&&target.countCards('h')>0)||(target==player&&player.countCards('h')>1));
        if (ui.selected.targets[0]!=player){
        return ui.selected.targets[0].canCompare(target);
        }else{
        return ui.selected.targets[0].canCompare(target)&&player.countCards('h')>1;
        }
    },
                enable:function (){
        return game.countPlayer()>1;
    },
                chongzhu:function (){
        return game.countPlayer()<=2;
    },
                multicheck:function (card,player){
        return game.countPlayer(function(current){
            return current!=player&&current.countCards('h');
        })>1;
    },
                selectTarget:2,
				singleCard:true,
				multitarget:true,
				targetprompt:['P1','P2'],
				complexTarget:true,
                content:function (){
        'step 0'
        event.target1=target;
		event.target2=event.addedTarget;
		if (event.target1.canCompare(event.target2)){
        event.target1.chooseToCompare(event.target2);
        }else event.finish();
        'step 1'   
        var fighter1,fighter2;
       if(result.bool){
            fighter1=event.target1;
            fighter2=event.target2;
        }
        else if(result.tie){
            fighter1=event.target1;
            fighter2=player;
        }
        else{
            fighter2=event.target1;
            fighter1=event.target2;
        }
        event.target1.gain([result.player],'gain2','log');
        event.target2.gain([result.target],'gain2','log');
        var next=game.createEvent('dz_gean_result');
		next.player=fighter1;
		next.target=fighter2;
		next.setContent(function(){
		target.damage(player);
		});
    },
               
                ai:{
                    order:6,
                    value:[7,1],
                    useful:[4,1],
                    tag:{
                        damage:1,
                    },
                    result:{
                    target:-1,
                    },
                },
            },
            dz_hezong:{
				audio:"ext:RE：英雄杀",
				image:"ext:RE：英雄杀/dz_hezong.png",
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:true,
                selectTarget:[1,2],
                global:'g_dz_hezong',
                targetprompt:['连横'],
                //wuxieable:true,
				//notarget:true,
				content:function(){
			    if(player.storage.hezonging==true){
			    target.draw();
				}else target.link();
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(_status.event.getRand()<0.5) return 0;
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						useful:4,
						value:4,
						order:7
					},
					result:{
						target:function(player,target){
						if (player.storage.hezonging==true) return 1;
							if(target.isLinked()){
								if(target.hasSkillTag('link')) return 0;
								var f=target.hasSkillTag('nofire');
								var t=target.hasSkillTag('nothunder');
								if(f&&t) return 0;
								if(f||t) return 0.5;
								return 2;
							}
							if(get.attitude(player,target)>0) return -0.9;
							if(ui.selected.targets.length) return -0.9;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
							})){
								return -0.9;
							}
							return 0;
						}
					},
					tag:{
						multitarget:1,
						multineg:1,
						norepeat:1
					}
				}
			},
			},
			skill:{
			"g_zhen":{
				cardSkill:true,
				trigger:{player:'loseEnd',},
				popup:false,
				forced:true,
				filter:function(event,player){
					if(!event.visible) return false;
					if(event.getParent(2).type=='dying')return false;
					if(event.type!='discard'||event.getParent('phaseDiscard').player!=player) return false;
					if(event.hs){
						for(var i=0;i<event.hs.length;i++){
							if(get.name(event.hs[i],player)=='dz_zhen') return true;
						}
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.hs.length;i++){
						if(get.name(trigger.hs[i],player)=='dz_zhen') num++;
					}
					if(trigger.getParent().name!='useCard'||trigger.getParent().card.name!='dz_zhen') player.popup('鸩','wood');
					player.loseHp(num).type='dz_zhen';
				},
			},
			"dz_zhen_skill":{
			trigger:{player:'useCard1'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.notLink();
				},
				forced:true,
				charlotte:true,
				firstDo:true,
				content:function(){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage++
				},
				popup:false,
				nopop:true,
				ai:{
					damageBonus:true
				},
                    },
                "dz_fu_skill":{    
                    enable:["chooseToUse","chooseToRespond"],
    hiddenCard:function(player,name){
        if(!['sha','shan','tao','dz_zhen'].contains(name)) return false;
        return player.hasCard(function(card){
            return card.name=='dz_fu';
        },'hs');
    },
    filter:function(event,player){
        if(event.filterCard({name:'sha'},player,event)||
            event.filterCard({name:'shan'},player,event)||
            event.filterCard({name:'dz_zhen'},player,event)||
            event.filterCard({name:'tao'},player,event)){
            if (player.hasCard(function(card){
                return card.name=='dz_fu';
            },'hs')) return true;
        }
        return false;
    },
    chooseButton:{
        dialog:function(event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','GXS_blood']);
                list.push(['基本','','sha','GXS_darkness']);
            }
            if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'dz_zhen'},player,event)){
                list.push(['基本','','dz_zhen']);
            }
            return ui.create.dialog('符',[list,'vcard'],'hidden');
        },
        check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						if(_status.event.getParent().type!='phase'||game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch(button.link[2]){							
								case 'dz_zhen':{
							    if(player.hp>=2&&(player.countCards('hs','dz_fu')>=2||player.countCards('h','sha')>0)) return 5;
							    };
								case 'tao':case 'shan':return 4;
								case 'sha':
									if(button.link[3]=='GXS_blood') return 2.95;
									else if(button.link[3]=='GXS_darkness') return 2.92;
									else return 2.9;
							}
						}
						return 0;
		},
        backup:function(links,player){
            return {
                filterCard:function(card,player,target){
                        return card.name=='dz_fu';
                },
                precontent:function(){
                    game.playAudio("../extension/RE：英雄杀/",(player.sex=="female"?"nv_dz_fu":"nan_dz_fu"));
                },
                viewAs:{name:links[0][2],nature:links[0][3]},
                position:'hs',
                popname:true,
            }
        },
        prompt:function(links,player){
            return '将符当做'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用或打出';
        },
    },
    ai:{
        order:function(item,player){
		if(_status.event.type=='phase'&&(player.countCards('h','sha')>0||player.countCards('hs','dz_fu')>1)){
		return get.order({name:'sha'})+0.2;
		}
		return get.order({name:'sha'})-0.1;
		},
        skillTagFilter:function(player){
			if(!player.countCards('hs','dz_fu')) return false;
		},
        result:{
            player:1,
        },
        respondSha:true,
        respondShan:true,
        save:true,
    },
   },
   dz_xueansha_set:{
   mod:{
					cardname:function(card,player,name){
						if(card.name=='dz_xuesha') return 'sha';
						if(card.name=='dz_ansha') return 'sha';
					},
					cardnature:function(card,player){
						if(card.name=='dz_xuesha') return 'GXS_blood';
						if(card.name=='dz_ansha') return 'GXS_darkness';
					},
				},
   },
			"dz_xuanhuafu_skill":{
               forced:true,
               locked:true,
                audio:"ext:RE：英雄杀:true",
                trigger:{
                    source:"damageBegin1",
                },
                direct:true,
                equipSkill:true,
                filter:function(event,player){
if(event.getParent().name!='sha') return false;
return player.countCards('he',function(card){
return card!=player.getEquip('dz_xuanhuafu');
})>0;
},
                content:function(){
'step 0'
var next=player.chooseToDiscard('he',function(card,player){
return card!=player.getEquip('dz_xuanhuafu');
},get.prompt(event.name,trigger.player),'弃置一张牌，令即将对其造成的伤害+1');
next.ai=function(card){
if(_status.event.goon) return 6-get.value(card);
return -1;
};
next.set('goon',get.attitude(player,trigger.player)<0&&!trigger.player.hasSkillTag('filterDamage',null,{
player:player,
card:trigger.card,
}));
next.logSkill=[event.name,trigger.player];
'step 1'
if(result.bool) trigger.num++;
},
                ai:{
                    expose:0.25,
                },
            },
            dz_TheBloodthirster_skill:{
				equipSkill:true,
				trigger:{player:'useCard1'},
				//priority:7,
				filter:function(event,player){
					if(event.card.name=='sha'&&!event.card.nature) return true;
				},
				audio:"ext:RE：英雄杀:true",
				check:function(event,player){
					var eff=0;
					for(var i=0;i<event.targets.length;i++){
						var target=event.targets[i];
						var eff1=get.damageEffect(target,player,player);
						var eff2=get.damageEffect(target,player,player,'GXS_blood');
						eff+=eff2;
						eff-=eff1;
					}
					return eff>=0;
				},
				content:function(){
					trigger.card.nature='GXS_blood';
					if(get.itemtype(trigger.card)=='card'){
						var next=game.createEvent('dz_TheBloodthirster_clear');
						next.card=trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function(){
							delete card.nature;
						});
					}
				}
			},
			dz_TheBloodthirster_skill2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				content:function(){
					delete player.storage.dz_TheBloodthirster_skill.nature;
				}
			},
			"dz_qiankundai_skill":{
			equipSkill:true,
			mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
			},
			"dz_jinlinjia_skill":{
				equipSkill:true,
				audio:"ext:RE：英雄杀:true",
				trigger:{target:['useCardToBefore']},
				forced:true,
				priority:6,
				audio:"ext:RE：英雄杀:true",
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
					//if(event.card.name=='chuqibuyi') return true;
					return false;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.hasSkillTag('unequip2')) return;
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:target,
								card:card
							})||player.hasSkillTag('unequip_ai',false,{
								name:card?card.name:null,
								target:target,
								card:card
							})) return;
							//if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
							if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
						}
					}
				}
			},
			"dz_huxinjing_skill":{
			equipSkill:true,
			audio:"ext:RE：英雄杀:true",
			trigger:{
        player:"damageBefore",
    },
    filter:function(event,player){
        if(event.source&&event.source.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return;
        if(event.card&&event.card.name=="sha"&&event.card.nature!="GXS_darkness") return true;
    },
    content:function(){
        trigger.cancel();
		var card=player.getEquip('dz_huxinjing');
					if(card){
						if(typeof card.storage.dz_huxinjing!='number'){
							card.storage.dz_huxinjing=1;
						}
						else{
							card.storage.dz_huxinjing++;
						}
						if(card.storage.dz_huxinjing==2){
							player.discard(player.getEquip('dz_huxinjing'));
						}
					}
				},
				ai:{
					order:9,
					result:{
						player:1
					}
				}
			},
			"dz_kongqueling_skill":{
                equipSkill:true,
                audio:"ext:RE：英雄杀:true",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
                return !player.hasSkill('dz_zhen_skill');
                },
                content:function (){
                player.loseHp();
                player.addTempSkill('dz_zhen_skill');
                 },
                ai:{
                    order:8,
                    result:{
                        player:function (player){
                        if (player.hasSkill('dz_zhen_skill')) return 0;
               if(player.hp==1){
               if (player.countCards('h',{name:'tao'})&&player.countCards('h',{name:'sha'})) {
               return 2;
               }
               return 0;    
               }  
               if(player.countCards('h',{name:'tao'})&&player.countCards('h',{name:'sha'})) return 5;
                if(player.countCards('h',{name:'sha'})) return 1;
                return 0;
            },
                    },
                    effect:function (card,player,target){
            if(get.tag(card,'damage')){
                if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                return 1.2;
            }
            if(get.tag(card,'loseHp')){
                if(player.hp<=1) return;
                return [0,0];
            }
        },
                },
            },
            "dz_meihuxiang_skill":{
            audio:"ext:RE：英雄杀:true",
            trigger:{
        source:"damageEnd",
    },
    filter:function(event,player){
        return event.card&&event.card.name=="sha"&&event.player.sex=="male"&&event.player.isAlive()&&!event.player.hasJudge('lebu')&&player.countCards("h");
    },
    check:function(event,player){
        return get.attitude(player,event.player)<=0;
    },
    logTarget:"player",
    direct:true,
    content:function(){
    'step 0'
    player.chooseCard(get.prompt2('dz_meihuxiang',trigger.player),'h',1).set('ai',function(card){
    if (get.attitude(player,trigger.player)>0) return 0;
	if(card.name=='du') return -1;
		return 7-get.useful(card);
	});
	'step 1'		
	if (result.bool){	
        var card=result.cards[0];
        player.$throw(card);
        game.delayx();
        trigger.player.addJudge("lebu",card);
        trigger.player.$gain2(card);
        player.logSkill("dz_meihuxiang_skill",trigger.player);
        }
    },
            },
            "dz_paoluo_skill":{
            audio:"ext:RE：英雄杀:true",
            enable:"phaseUse",
            usable:1,
            filter:function(event,player){
            return player.countCards('he',function(card){
            return card!=player.getEquip('dz_paoluo');
        })>=2&&game.hasPlayer(function(current){
            return current!=player&&get.distance(current,player)<=1;
        });
            },
            direct:true,
            content:function(){
            'step 0'
            player.chooseToDiscard('he',true,2,'弃置两张牌，令与你距离1的角色流失1点体力',function(card){
            return _status.event.player.getEquip('dz_paoluo')!=card;
        }).set('ai',function(card){
	if(card.name=='du'||card.name=='dz_zhen') return -1;
		return 7-get.useful(card);
	});
	        'step 1'
	        if (result.bool){
	        player.logSkill("dz_paoluo_skill");
	        game.countPlayer(function(current){
            if (current!=player&&get.distance(current,player)<=1) current.loseHp();
        });
        }
    },
    ai:{
					order:6.5,
					result:{
						player:function(player,target){
						if ((player.countCards('h')-player.hp)<-1) return 0;
						var eff=0;
						for(var i=0;i<game.players.length;i++){
						if (game.players[i]==player||get.distance(game.players[i],player)>1) continue;
						eff+=get.attitude(game.players[i],player)>0?-1:1;
						if(get.mode()=='identity'){
								if(game.players[i].isZhu&&game.players[i].hp<=1&&get.attitude(player,game.players[i])>0) eff-=100;
							}
						}
						return eff;
						},
					}
				}
            },
            "dz_tongtiankai_skill":{
                equipSkill:true,
                audio:"ext:RE：英雄杀:true",
                enable:"chooseToUse",
                direct:true,
                filter:function(event,player){
                if(player.hasSkillTag('unequip2')) return false;
                if(!player.countCards('he',function(card){
                return card!=player.getEquip('dz_tongtiankai');
                })>0) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'&&player.isDamaged()){
            return true;
        }
        return false;
    },
                content:function(){
       "step 0"

        var next=player.chooseToDiscard(get.prompt('dz_tongtiankai_skill'),[1,Math.min(player.countCards("he",function(card){
                return card!=player.getEquip('dz_tongtiankai');
                }),player.getDamagedHp())],'he',function(card){
                        return _status.event.player.getEquip('dz_tongtiankai')!=card;
                    });
           next.ai=function(card){
            if(ui.selected.cards.length>=5) return 0;
            if(ui.selected.cards.length>=player.maxHp-player.hp){
                if(player.countCards('h')>player.hp){
                    return 8-get.value(card);
                }
                return 2;
            }
            return 10-get.value(card);
        };
        "step 1" 
       if(result.bool){
      player.logSkill('dz_tongtiankai_skill');
            var num2=result.cards.length; 
            player.recover(num2);    
     var e2=player.getEquip('dz_tongtiankai');
                    if(e2){
                        player.discard(e2);
                    }
                    
                }
             
        
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function(player,arg,target){
            if(player!=target||player.countCards('he',function(card){
                return card!=player.getEquip('dz_tongtiankai');
                })==0) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=1&&player.countCards('he')<=5) return 10;
                return 2;
            },
                    },
                },
            },
            "dz_kanglongjian_skill":{
                equipSkill:true,
                trigger:{
                    source:"damageBegin2",
                },
                audio:"ext:RE：英雄杀:true",
                filter:function(event){
                    return event.card&&event.card.name=='sha'&&event.player.getCards('hej').length>0;
                },
                check:function(event,player){
                    if(get.damageEffect(event.player,player,player)<0) return true;
                    var att=get.attitude(player,event.player);
                    if(att>0&&event.player.countCards('j')) return true;
                    if(event.num>1){
                        if(att<0) return false;
                        if(att>0) return true;
                    }
                    var cards=event.player.getGainableCards(player,'he');
                    for(var i=0;i<cards.length;i++){
                        if(get.value(cards[i])>=6) return true;
                    }
                    return false;
                },
                logTarget:"player",
                content:function(){
                "step 0"
                    trigger.cancel();
    "step 1"    
    if(trigger.player.countGainableCards(player,'hej')){
                        player.gainPlayerCard(trigger.player,'hej',true);
                    }
                    "step 2"            
                   event.card=result.cards[0]           
 
   "step 3" 
        var source=target;
        player.chooseTarget('选择一个目标送出'+get.translation(event.card),function(card,player,target){
            return target!=player;
        }).ai=function(target){
            var att=get.attitude(player,target);
            if(att>3&&player.countCards('h')>target.countCards('h')+2){
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
            "dz_fangtian_skill":{
            equipSkill:true,
            audio:"ext:RE：英雄杀:true",
    shaRelated:true,
    trigger:{
        source:"damage",
    },
    filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.name=='damage'&&event.card&&event.card.name=="sha";
    	},
    
     content:function (){ 
        player.draw();  
     },    

   }, 
           	"dz_ruyijgb_skill":{
         	equipSkill:true,
				enable:['chooseToUse','chooseToRespond'],
				viewAsFilter:function(player){
					return player.countCards('hes')>0;
				},
				viewAs:{name:'sha'},
				filterCard:true,
				locked:false,
				position:'hes',
				check:function(card){
					var val=get.value(card);
					if(val>=6) return 0;
					if(get.color(card)=='black') return 12-val;
					return 8-val;
				},
			mod:{
targetInRange:function(card,player,target){
if(_status.event.skill=='dz_ruyijgb_skill'&&get.color(card)=='red') return true;
},
},
				group:'dz_ruyijgb_skill_num',
				                subSkill:{
                    			num:{
				trigger:{player:'useCard1'},
				firstDo:true,
				silent:true,
				filter:function(event,player){
					return event.skill=='dz_ruyijgb_skill'&&get.color(event.card)=='black';
				},
				content:function(){
trigger.baseDamage++;
	
				},
				 sub:true,
                    
			},
                                 
                },
				
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.countCards('hes')>0;
					},
				},
			},
			"dz_suixintgb_skill":{
         	equipSkill:true,
				enable:['chooseToUse','chooseToRespond'],
				viewAsFilter:function(player){
					return player.countCards('hes')>0;
				},
				viewAs:{name:'sha'},
				filterCard:true,
				locked:false,
				position:'hes',
				check:function(card){
					var val=get.value(card);
					if(val>=6) return 0;
					if(get.color(card)=='black') return 12-val;
					return 8-val;
				},
			mod:{
targetInRange:function(card,player,target){
if(_status.event.skill=='dz_suixintgb_skill'&&get.color(card)=='black') return true;
},
},
				group:'dz_suixintgb_skill_num',
				                subSkill:{
                    			num:{
				trigger:{player:'useCard1'},
				firstDo:true,
				silent:true,
				filter:function(event,player){
					return event.skill=='dz_suixintgb_skill'&&get.color(event.card)=='red';
				},
				content:function(){
trigger.baseDamage++;
	
				},
				 sub:true,
                    
			},
                                 
                },
				
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.countCards('hes')>0;
					},
				},
			},
			"dz_manwangfu_skill":{   
			audio:"ext:RE：英雄杀:true",
            enable:"phaseUse",
            usable:1,
            filter:function(event,player){
            return player.countCards('e',function(card){
            return player.getEquip('dz_manwangfu');
        })>0&&game.hasPlayer(function(current){
            return current!=player&&player.canUse('nanman',current);
        });
            },
			content:function (){ 
			var list=game.filterPlayer(function(current){
                    return player.canUse('nanman',current);
                });
                list.sortBySeat();
                player.useCard({name:'nanman'},list);
                var e2=player.getEquip('dz_manwangfu');
                    if(e2){
                        player.discard(e2);
                    }
                 },
                 ai:{
					order:6.5,
					result:{
						player:function(player,target){
							var eff=0;
						for(var i=0;i<game.players.length;i++){
						if (game.players[i]==player||get.distance(game.players[i],player)>1) continue;
						var nh=game.players[i].countCards('h');
						eff+=(get.attitude(game.players[i],player)>0?-1:1)*(3-nh);
						if(get.mode()=='identity'){
								if(game.players[i].isZhu&&game.players[i].hp<=1&&nh<=2&&get.attitude(player,game.players[i])>0) eff-=100;
							}
						}
						return eff;
						},
					},
				}
                },
            "dz_huoliaoya_skill":{
            cardSkill:true,
            group:"dz_huoliaoya_skill_1",
            subSkill:{
            1:{
            audio:"dz_huoliaoya_skill",
            enable:"phaseUse",
            filter:function(event,player){
            return event.filterCard({name:'sha'},player,event);
            },
            filterTarget:function(card,player,target){
					return target!=player&&player.canUse('sha',target);
				},
			content:function(){
			"step 0"
        player.judge(function(card){
            return get.color(card)=='black'?-2:2;
        }).judge2=function(result){
            return result.bool?true:false;
        };
        "step 1"
        event.card=result.card;           
           if(!result.bool){
            player.gain(event.card,'gain2','log');
            var e2=player.getEquip('dz_huoliaoya');
                    if(e2){
                        player.discard(e2);
                    }
            }
            player.useCard({name:'sha'},target).animate=false;
			}	
            }
            },
            audio:"ext:RE：英雄杀:true",
                trigger:{
        player:"chooseToRespondBegin",
    },
    filter:function(event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'sha'},player,event)) return false;
        return true;
    },
    check:function(event,player){
    return player.countCards("hs","sha")<2;
    },
    content:function(){
        "step 0"
        player.judge(function(card){
            return get.color(card)=='black'?-2:2;
        }).judge2=function(result){
            return result.bool?true:false;
        };
        "step 1"
        event.card=result.card;           
           if(!result.bool){
            player.gain(event.card,'gain2','log');
            var e2=player.getEquip('dz_huoliaoya');
                    if(e2){
                        player.discard(e2);
                    }
            }
            trigger.untrigger();
            trigger.responded=true;
            if(trigger.filterCard({name:'sha',isCard:true})){
                trigger.result={bool:true,card:{name:'sha',isCard:true}}
            } 
            },
            },
            "GXS_olshewo_skill":{
            cardSkill:true,    
            mod:{
					cardEnabled:function(card,player){
					if (player.storage.GXS_olshewo_skill==undefined) return true;
					if((player.storage.GXS_olshewo_skill.hasSkill('kongcheng')||player.storage.GXS_olshewo_skill.hasSkill('GXS_guiyin'))&&player.storage.GXS_olshewo_skill.countCards('h')==0&&(card.name=='sha'||card.name=='juedou')) return false;
					}
				},
	charlotte:true, 
     trigger:{
          player:"useCardToPlayer",
      },
     forced:true,
     mark:true,
     intro:{content:'杀、决斗均视为对$使用'},
				filter:function(event,player){
					return (event.card.name=='sha'||event.card.name=='juedou')&&event.target!=player.storage.GXS_olshewo_skill&&player.storage.GXS_olshewo_skill.isAlive();
				},
				onremove:function(player){
				delete player.storage.GXS_olshewo_skill;
				},
                content:function (){  
                game.log(player,'触发目标呼叫转移，视为对',player.storage.GXS_olshewo_skill,'使用',trigger.card);      
                game.filterPlayer(function(current){
			if (current==player.storage.GXS_olshewo_skill) {
				trigger.getParent().targets.push(current);
		        player.line(current,'red');
			}
			});
			trigger.getParent().targets.remove(trigger.target);
    },
                        },
    'g_dz_hezong':{
				cardSkill:true,
				logv:false,
				enable:'phaseUse',
				direct:true,
				filter:function(event,player){
					var num=player.countCards('h','dz_hezong');
					return num>0;
				},
				content:function(){
					'step 0'
					player.storage.hezonging=true;
					player.chooseToUse('使用【合纵连横】之合纵？',
						{name:'dz_hezong'},player,-1);
					'step 1'
					delete player.storage.hezonging;
				},
				ai:{
					basic:{
						order:6
					},
					result:{
						player:1,
					},
				}
			},
},
			translate:{
			'GXS_olshewo':'舍我其谁',
			GXS_olshewo_skill:'舍我',
			'GXS_olshewo_info':'延时类锦囊。出牌时，对其他任意一名角色使用。若判定结果不是方片，则本回合内该角色出的【杀】或【决斗】都视为对你使用',
			'dz_touliang':'偷梁换柱',
			'dz_touliang_info':'出牌阶段，对一名角色使用。目标角色选择一张手牌，若如此做，另一名由你选择的角色需选择两张手牌与目标角色的那张牌交换',
			dz_gean:"隔岸观火",
            "dz_gean_info":"出牌阶段对一名角色使用，令目标与一名你指定的另一名角色拼点，拼点输的一方受到另一方造成的一点伤害；若点数一样则你受到目标造成的一点伤害（拼点的牌不用丢弃，存活角色不超过2时可重铸）",            
            dz_hezong:'合纵连横',
            g_dz_hezong:'合纵重铸',
			dz_hezong_info:'出牌阶段使用，合纵：对自己使用，摸一张牌；连横：选择1至2个角色，分别横置或重置这些角色',
			"dz_xuanhuafu":"宣花斧",        
			"dz_xuanhuafu_skill":"宣花斧",    
            "dz_xuanhuafu_info":"当你使用【杀】造成伤害时，你可以弃置一张牌，令伤害＋1",
            "dz_TheBloodthirster":"饮血剑",        
			"dz_TheBloodthirster_skill":"饮血剑",    
            "dz_TheBloodthirster_info":"你可以将你的任意一张普通【杀】视为血【杀】来使用。",
            "dz_qiankundai":"乾坤袋",        
			"dz_qiankundai_skill":"乾坤袋",    
            "dz_qiankundai_info":"你的手牌上限+1。当你失去该装备时，摸1张牌。",
            "dz_huxinjing":"护心镜",        
			"dz_huxinjing_skill":"护心镜",    
            "dz_huxinjing_info":"抵消两点【杀】的伤害，当抵消第二点【杀】的伤害时，必须丢弃该装备并同时弃掉1张手牌。",
            "dz_jinlinjia":"金鳞甲",        
			"dz_jinlinjia_skill":"金鳞甲",    
            "dz_jinlinjia_info":"【南蛮入侵】和【万箭齐发】对你无效。当你失去装备区里的【金鳞甲】时，你回1点血。",	
            "dz_kongqueling":"孔雀翎",        
			"dz_kongqueling_skill":"孔雀翎",    
            "dz_kongqueling_info":"出牌时，你可以选择主动流失1点血，本回合内你对其他角色使用的【杀】伤害+1。",	
            "dz_meihuxiang":"魅狐香",        
			"dz_meihuxiang_skill":"魅狐香",    
            "dz_meihuxiang_info":"你对男性角色使用【杀】造成伤害后，可以把一张手牌当作【乐不思蜀】置入其判定区",	
            "dz_paoluo":"炮烙",        
			"dz_paoluo_skill":"炮烙",    
            "dz_paoluo_info":"出牌阶段限一次，你可以弃置两张牌令与你距离为1的其他角色流失一点体力",
            'dz_fangtian':'方天戟',  
            dz_fangtian_skill:'方天戟',  
            'dz_fangtian_info':'你使用的杀，每造成一次伤害，就可以摸一张牌',           
            'dz_tongtiankai':"通天铠",
            dz_tongtiankai_skill:"通天铠",
            "dz_tongtiankai_info":"出牌阶段或濒死时，你可以弃置任意张除通天铠外的牌，然后回复等量的体力。",
            'dz_kanglongjian':'亢龙锏',
            dz_kanglongjian_skill:'亢龙锏',
            'dz_kanglongjian_info':'你使用杀命中其他角色时，可以防止该伤害，将目标的一张手牌或装备区的牌，交给任意角色',
            "dz_ruyijgb":"如意金箍棒",        
			"dz_ruyijgb_skill":"如意金箍棒",    
            "dz_ruyijgb_info":"你可以把一张牌当作【杀】使用。你以此法使用的红色【杀】无视距离，黑色【杀】伤害+1",
            "dz_suixintgb":"随心铁杆兵",        
			"dz_suixintgb_skill":"随心铁杆兵",    
            "dz_suixintgb_info":"你可以把一张牌当作【杀】使用。你以此法使用的黑色【杀】无视距离，红色【杀】伤害+1",
            "dz_manwangfu":"蛮王巨斧",        
			"dz_manwangfu_skill":"蛮象召唤",    
            "dz_manwangfu_info":"出牌阶段，你可以弃掉该装备，视为使用一张【南蛮入侵】",
            "dz_huoliaoya":"烈火獠牙",        
			"dz_huoliaoya_skill":"烈火獠牙",    
            "dz_huoliaoya_info":"每当你需要打出一张【杀】时，你可以作一次判定，视为你使用或打出了【杀】。若判定结果为黑色，你弃置该装备获得判定牌",
            "dz_zhen":"鸩",
            "dz_zhen_skill":"鸩",
            "dz_zhen_info":"出牌阶段：流失1点血量，则该出牌阶段，你的【杀】造成的伤害+1；弃牌阶段：弃入牌堆，则你流失一点血量；濒死时：回复一点血量",
            "dz_fu":"符",
            "dz_fu_skill":"化符",
            "dz_fu_info":"出牌阶段或响应锦囊时，可以将此牌当任意【杀】、血【杀】、暗【杀】、【鸩】、【桃】、【闪】来使用",
            "dz_xuesha":"伪装2",
            "dz_xuesha_info":"测试用血杀",
            "dz_ansha":"伪装",
            "dz_ansha_info":"测试用暗杀",
			},
			list:[
		["spade",12,"dz_xuanhuafu"],
		["club",12,"dz_xuanhuafu"],
		["heart",1,"dz_TheBloodthirster"],
		["heart",13,"dz_qiankundai"],
		["spade",1,"dz_qiankundai"],
		["spade",2,"dz_jinlinjia"],
		["club",1,"dz_kongqueling"],
		["club",2,"dz_huxinjing"],
		["heart",1,"dz_meihuxiang"],
		["spade",5,"dz_paoluo"],
		["club",5,"dz_kanglongjian"],
		["spade",1,"dz_tongtiankai"],//替换乾坤袋
		//["spade",2,"zhanshenmianju"],
		["club",12,"dz_fangtian"],
		["heart",1,"dz_ruyijgb"],
		["spade",1,"dz_suixintgb"],
		["spade",2,"dz_manwangfu"],
		["heart",2,"dz_huoliaoya"],
		
		["diamond",5,"dz_fu"],
		["heart",9,"dz_fu"],
		["club",3,"dz_zhen"],
		["club",9,"dz_zhen"],
		["spade",3,"dz_zhen"],
		["spade",9,"dz_zhen"],
		
		["club",11,"dz_touliang"],
		["club",12,"dz_touliang"],
		["spade",10,"dz_touliang"],
		["heart",10,"dz_gean"],
		["heart",11,"dz_gean"],
		["spade",11,"dz_hezong"],
		["spade",12,"dz_hezong"],
		["spade",13,"dz_hezong"],
		["club",13,"dz_hezong"],
		
		["heart",12,"GXS_olshewo"],
		["diamond",2,"GXS_olshewo"],
		["diamond",3,"GXS_olshewo"],
		
		["club",4,"sha","GXS_blood"],
        ["club",5,"sha","GXS_blood"],
        ["club",6,"sha","GXS_blood"],
        ["club",7,"sha","GXS_blood"],
        ["club",8,"sha","GXS_blood"],
        ["spade",5,"sha","GXS_blood"],
        ["spade",6,"sha","GXS_blood"],
        
        ["heart",4,"sha","GXS_darkness"],
        ["heart",5,"sha","GXS_darkness"],
        ["diamond",4,"sha","GXS_darkness"],
        ["diamond",7,"sha","GXS_darkness"],
        ["diamond",10,"sha","GXS_darkness"],
        ["spade",7,"sha","GXS_darkness"],
        ["spade",8,"sha","GXS_darkness"],
        
			],
		};
		return THKC;
    });
	lib.translate['THKC_card_config']='英雄杀卡牌';
	lib.config.all.cards.push('THKC');
    if(!lib.config.cards.contains('THKC')) lib.config.cards.remove('THKC');
});