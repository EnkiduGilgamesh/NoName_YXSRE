/*
 * File: \extension\英雄杀RE\help\example\dalao\zhuanhuan.js
 * Project: noname
 * Created Date: Friday Sep 2nd 2022, 9:06:19 pm
 * Author: Wenren Muyan
 * Comments: 
 * --------------------------------------------------------------------------------
 * Last Modified: 2/09/2022 09:10:10
 * Modified By: Wenren Muyan
 * --------------------------------------------------------------------------------
 * Copyright (c) 2022 - future Wenren Muyan
 * --------------------------------------------------------------------------------
 * HISTORY:
 * Date				By				Comments
 * --------------------------------------------------------------------------------
 */


quannengzhuanhua: { 
              enable:['chooseToUse','chooseToRespond'], 
              filter:function(event,player){ 
                for(var i of lib.inpile){ 
                  if(lib.filter.filterCard({name:i},player,event)) return true; 
                } 
                return false; 
              }, 
              chooseButton:{ 
                dialog:function(event,player){ 
                  var list=[]; 
                  for(var i=0;i<lib.inpile.length;i++){ 
                    let name=lib.inpile[i]; 
                    if(name=='sha'){ 
                      list.push(['基本','','sha']); 
                      for(var j of lib.inpile_nature) list.push(['基本','','sha',j]); 
                    } 
                    else if(get.type(name)=='basic') list.push(['基本','',name]); 
                    else if(get.type(name)=='trick') list.push(['锦囊','',name]); 
                    else if(get.type(name)=='equip') list.push(['装备','',name]); 
                  } 
                  return ui.create.dialog('技能名',[list,'vcard']); 
                }, 
                filter:function(button,player){ 
                  return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent()); 
                }, 
                check:function(button){ 
                  if(_status.event.getParent().type!='phase') return 1; 
                  var player=_status.event.player; 
                  if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].contains(button.link[2])) return 0; 
                  return player.getUseValue({ 
                    name:button.link[2], 
                    nature:button.link[3], 
                  }); 
                }, 
                backup:function(links,player){ 
                  return { 
                    filterCard:true, 
                    audio:false, 
                    popname:true, 
                    check:function(card){ 
                      return 8-get.value(card); 
                    }, 
                    position:'hs', 
                    selectCard: 1, 
                    viewAs: function () { 
                      if (get.type(links[0][2])=='equip') { 
                        return game.createCard(links[0][2]); 
                      }else return {name:links[0][2],nature:links[0][3]}; 
                    }, 
                    precontent:function(event){ 
                      if (get.type(event.result.card)=='equip') { 
                        event.result.cards[1]=event.result.cards[0]; 
                        event.result.cards[0]=event.result.card; 
                      } 
                    }, 
                  } 
                }, 
                prompt:function(links,player){ 
                  return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用'; 
                } 
              }, 
              hiddenCard:function(player,name) { 
                return player.countCards('hs')>0; 
              }, 
              ai:{ 
              }, 
            },
    