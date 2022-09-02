//时迁
        qiaoqie: {
          audio:false,
          usable: 2,
          enable:'phaseUse',
          content: function (trigger) {
            "step 0"
            var list = ['获得标记'];
            if (
              game.countPlayer(
                (current) => Object.keys(current.marks).length > 0
              ) > 0
            ) list.push("移动标记");
            player.chooseControl(list).set('prompt',get.prompt2('qiaoqie'));
            "step 1"
            if (result.control) {
              if (result.control=='获得标记') {
                let markList = [];
                for (const key in player.storage.marks) {
                  if(game.hasPlayer(current => current.hasMark(key))) continue;
                  markList.push(key);
                }
                let mark = markList.randomGet();
                player.addMark(mark);
                player.storage.qiaoqie.push({[mark]:player})
                delete player.storage.marks[mark];
                event.finish();
              }else {
                player.chooseTarget(2,'移动场上一枚标记',function (card,player,target) {
                  if(ui.selected.targets.length){
                    // let marks = Object.keys(ui.selected.targets[0].marks);
                    // for (let i = 0; i < marks.length; i++) {
                    //   if(ui.selected.targets[0].hasMark(marks[i])) return true;
                    // }
                    // return false;
                    return (
                      Object.keys(ui.selected.targets[0].marks).length > 0 &&
                      ui.selected.targets[0].hasMark(...Object.keys(ui.selected.targets[0].marks))
                    );
                  }else return Object.keys(target.marks).length>0;
                }).set("ai", function (player,target) {
                }).set("targetprompt", ["失去标记", "获得标记"]);
              }
            }
            "step 2"
            if(result.bool) {
              let marks = [];
              event.marks = {};
              for (const key in result.targets[0].marks) {
                const mark = lib.skill[key];
                if(result.targets[0].hasMark(key)) {
                  let name = null;
                  if(mark.intro) {
                    if(mark.intro.name2) name = mark.intro.name2;
                    else name = mark.intro.name;
                  }
                  if(!name) name = get.translation(key);
                  event.marks[name]=key;
                  marks.push(name);
                };
              }
              player.chooseControl(marks);
              event.targets=result.targets;
            }else {
              delete player.getStat('skill').qiaoqie;
              event.finish();
            };
            "step 3"
            if (result.control && event.targets.length == 2) {
              let mark = event.marks[result.control];
              event.targets[0].removeMark(mark);
              event.targets[1].addMark(mark);
              player.storage.qiaoqie.push({[mark]:event.targets[1]});
              for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                if (player.storage.qiaoqie[i][mark] == event.targets[0])
                  player.storage.qiaoqie.splice(i,1);
              }
            }
          },
          init: function (player,skill) {
            if(!player.storage.marks) {
              // Array.prototype.only = function () {
              //   let s = new Set(this);
              //   return [...s];
              // }
              // player.storage.marks=[];//储存标记
              // let list = [];//储存满足条件的技能
              // for (const key in lib.character) {//角色遍历
              //   if(key==player.name) continue;//剔除自己
              //   const skills = lib.character[key][3];
              //   for (let i = 0; i < skills.length; i++) {//技能遍历
              //     if(skills[i].indexOf('_')==0) continue;
              //     const info = lib.translate[skills[i]+'_info'];
              //     if(info) {if(info.includes('标记')) list.push(skills[i])};//获取描述里有标记的技能
              //     /* if (info) {
              //       if(info.includes('标记')) {
              //         let s = lib.skill[skills[i]];
              //         let g = s['ground'];
              //         if (s['subSkill']) {
              //           for (const key in s['subSkill']) {
              //             g.push(skills+'_'+key);
              //           }
              //           g=g.only();
              //         }
              //         let t = s['content'];
              //         // let marks = str.match(/\.addMark\((\S*)\)/g);
              //         console.log(str);
              //       };
              //     } */
              //   }
              // }
              // function getMarks(skill) {
              //   if(Array.isArray(skill)) {
              //     for(var i=0;i<skill.length;i++){
              //       getMarks(skill[i]);
              //     }
              //   }else {
              //     let name = skill;
              //     skill = lib.skill[skill];
              //     let re = /\.addMark\((\S*)\)/g;
              //     if (skill['init']) {
              //       let str = skill['init'].toString();
              //       let marks = str.match(re);
              //       if (marks) {
              //         for (let i = 0; i < marks.length; i++) {
              //           let mark = marks[i].match(/\.addMark\((\S*)\,|\)/)[1];
              //           player.storage.marks.push(mark);
              //         }
              //       };
              //     }
              //     if (skill['content']) {
              //       let str = skill['content'].toString();
              //       let marks = str.match(re);
              //       if (marks) {
              //         for (let i = 0; i < marks.length; i++) {console.log(marks);
              //           let mark = marks[i].match(/\.addMark\((\S*)\,|\)/)[1];
              //           player.storage.marks.push(mark);
              //         }
              //       };
              //     }
              //     let sub = skill['groud'] || [];
              //     if(skill['subSkill']) {
              //       for (const key in skill['subSkill']) {
              //         sub.push(name + '_' + key);
              //       }
              //       sub = sub.only();
              //     }
              //     if (sub.length>0) {getMarks(sub)};
              //   }
              // }
              // getMarks(list);
              // player.storage.marks = player.storage.marks.only();
              // console.log(player.storage.marks);
              /* for (const key in lib.skill) {
                if(key.indexOf('_')==0) continue;
                const ski = lib.skill[key];
                if(typeof ski.mark != 'undefined'||ski.marktext||ski.intro) {
                  if(ski.limited||ski.juexingji) continue;
                  player.storage[skill].push(key);
                }
              } */
              player.storage['marks'] = {};
              var list = {
                drlt_jieying_mark:"拥有‘营’的角色摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数+1，手牌上限+1",//营
                new_wuhun_mark:"锁定技，当你死亡时选择一名梦魇标记最多的的角色使其判定，若结果不为【桃】或【桃园结义】，则该角色死亡",//梦魇
                nzry_junlve:"出牌阶段开始时，若你拥有的“军略”标记的数量为奇数，你可以对一名角色造成一点伤害；为偶数，你可以横置一名角色并弃置其区域内的一张牌。",//军略
                yingba_mark:"锁定技，①当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。②你对拥有“平定”标记的角色使用牌没有距离限制。",//平定
                tianren:"锁定技，当你获得“天任”标记或体力上限变化后，若你的“天任”数不小于X，则你移去X枚“天任”，加1点体力上限并摸两张牌（X为你的体力上限）。",//天任
                huoxin:"拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",//魅惑
                renjie:lib.translate['jilue_info'],//忍
                baonu:lib.translate['wuqian_info'],//暴怒
                yijiao:'有“异”标记的其他角色的结束阶段，其移去“异”标记，且若其本回合使用牌的点数之和：1.小于“异”标记数，其随机弃置一张手牌；2.等于“异”标记数，该角色本回合结束后进行一个额外的回合；3.大于“异”标记数，你摸两张牌。',//异
                yingfeng_mark:"有“奉”标记的角色使用牌没有距离限制。",//迎奉
                spshanxi: "有“檄”标记的角色回复体力时，若其体力值大于0，则其需选择一项：①交给你两张牌。②失去1点体力。",//檄
                regushe: "锁定技，当你获得第7个“饶舌”标记时，你死亡。",//饶舌
                fanghun: "你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。",//梅影
                nzry_huaiju: "有“橘”的角色受到伤害时，防止此伤害，然后移去一个“橘”；有“橘”的角色摸牌阶段额外摸一张牌",//橘
                zaoli: "回合开始时，若你有“厉”，则你移去所有“厉”并弃置任意张牌，然后摸X+Y张牌。若X大于2，你失去1点体力（X为你移去的标记数，Y为你弃置的牌数）",//
                zongkui_mark: "锁定技，拥有“傀”标记的其他角色受到伤害后，你摸一张牌。",//傀
                taomie: "你和拥有“讨灭”标记的角色视为在彼此的攻击范围内，且当你对该角色造成伤害时，选择一项：1. 此伤害+1；2. 你获得其区域内的一张牌并可将之交给另一名角色；3. 依次执行前两项并于伤害结算后弃置其“讨灭”标记。",//讨灭
                xinlirang: "1.摸牌阶段开始时，若你有“谦”标记，则你跳过此摸牌阶段并移除“谦”标记。2.锁定技，当你受到伤害后，若你有“谦”标记，则伤害来源弃置一张牌。若此牌为：黑色：你获得之。红色，你回复1点体力。",//谦
                ranshang: "结束阶段开始时，你失去X点体力。若X大于2，则你减2点体力上限并摸两张牌。（X为“燃”标记的数量）",//燃殇
                xionghuo: "你对有“暴戾”标记的角色造成伤害时，此伤害+1。有“暴戾”的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区的牌。",//暴戾
                olxueyi: "锁定技，你的手牌上限+Y（Y为“裔”标记数）",//裔
                xinfu_falu_spade: "一名角色的判定牌生效前，你可以弃置一枚「紫薇」，然后将判定结果改为任意花色且点数为5。",//紫薇
                xinfu_falu_heart: "你的回合外，你可以弃置一枚「后土」，然后将你的一张手牌当【桃】使用。",//后土
                xinfu_falu_club: "当你造成伤害时，你可以弃置一枚「玉清」，然后令此伤害+1。",//玉清
                xinfu_falu_diamond: "当你受到伤害后，你可以弃置一枚「勾陈」，然后你从牌堆中随机获得三种类型的牌各一张。",//勾陈
                caiyuan_mark: "锁定技，结束阶段开始时，若你没有“才媛”标记且此回合不是你的第一个回合 ，则你摸两张牌。",//才媛
                zhaosong_basic: "当使用者使用仅指定一个目标的【杀】时，其可弃置“颂”，为此【杀】增加至多两个目标。",//颂
                zhaosong_trick: "当拥有者进入濒死状态时，其可弃置所有“诔”，将体力回复至1点并摸1张牌。",//诔
                zhaosong_equip: "拥有者的出牌阶段开始时，其可弃置所有“赋”，弃置一名角色区域内的至多两张牌。",//赋
                /* *
                *马良不写，葛玄不写，桥公不写 淳于琼不写 丁原不写 胡车儿不写 腾x不写 李树不写 谋马超暂时不写
                 */
              };
              let markList = [];
              for (const key in list) {
                markList.push(key);
              }
              let mark = markList.randomGet();
              player.logSkill('qiaoqie');
              player.addMark(mark);
              if(player.marks[mark]==undefined) console.log(mark);
              delete list[mark];
              player.storage['marks'] = list;
              player.storage[skill] = [];
              player.storage[skill].push({[mark]:player});
              mark = markList.randomGet();
              player.addMark(mark);
              if(player.marks[mark]==undefined) console.log(mark);
              delete player.storage.marks[mark];
              player.storage[skill].push({[mark]:player});
            }
          },
          ai:{
            result:{
              player:1
            },
            order:12
          },
        },
        // qiaoqieX: {
        //   init: function (player) {
        //     Array.prototype.only = function () {
        //       let s = new Set(this);
        //       return [...s];
        //     }
        //     let marks=[];//储存标记
        //     for (const key in lib.character) {//角色遍历
        //       if(key==player.name) continue;//剔除自己
        //       const skills = lib.character[key][3];
        //       for (let i = 0; i < skills.length; i++) {//技能遍历
        //         if(skills[i].indexOf('_')==0) continue;
        //         marks.push(...getMarks(skills[i]));
        //       }
        //     }
        //     function getMarks(skillName) {
        //       let marks = [];
        //       if (Array.isArray(skillName)) {
        //         for(var i=0;i<skillName.length;i++){
        //           marks.push(...getMarks(skillName[i]));
        //         }
        //       }else if (typeof skillName == 'string') {
        //         const name = skillName;
        //         const skill = lib.skill[name];
        //         const regu = /\.addMark\((\S*)\)/g;
        //         if (skill['init']) {
        //           let mark = isMark(skill['init'],regu);
        //           if (mark) marks.push(...mark);
        //         };
        //         if (skill['content']) {
        //           let mark = isMark(skill['content'],regu);
        //           if (mark) marks.push(...mark);
        //         };
        //         let sub = skill['groud'] || [];
        //         if (skill['subSkill']) {
        //           for (const key in skill['subSkill']) {
        //             sub.push(name + '_' + key);
        //           }
        //           sub = sub.only();
        //         }
        //         if (sub.length>0) marks.push(...getMarks(sub));
        //       };
        //       function isMark(fun,regu) {
        //         const str = fun.toString();
        //         const mark = str.match(regu);
        //         if (mark) {
        //           let marks = [];
        //           for (let i = 0; i < mark.length; i++) {
        //             mark = mark
        //             // marks.push(mark[i].match(/^\'+\'$/)[1])
        //           }
        //           return marks;
        //         }
        //       }
        //       return marks.only();
        //     }
        //     console.log(marks);
        //   }
        // },
        jianshi:{
          audio:false,
          forced:true,
          trigger: {player: 'qiaoqieAfter'},
          filter: function (event,player) {
            return Object.keys(player.marks).length;
          },
          content: function (trigger) {
            for (let i = 0; i < player.storage.qiaoqie.length; i++) {
              if(lib.skill['jianshi_'+Object.keys(player.storage.qiaoqie[i])[0]]) {
                player.addTempSkill(
                  "jianshi_" + Object.keys(player.storage.qiaoqie[i])[0],
                  { player: "qiaoqieAfter" }
                );
              }
            }
          },
          init: function (player) {
            player.logSkill('jianshi');
            for (let i = 0; i < player.storage.qiaoqie.length; i++) {
              player.addTempSkill(
                "jianshi_" + Object.keys(player.storage.qiaoqie[i])[0],
                { player: "qiaoqieAfter" }
              );
            };
            //
          },
          group: ['jianshi_die'],
          subSkill:{
            drlt_jieying_mark: {
              init: function (player) {
                var info=lib.skill['drlt_jieying'];
                if (game.hasPlayer(current => current.hasSkill("drlt_jieying"))) {
                  info.group = ["drlt_jieying_1","drlt_jieying_2","drlt_jieying_3"]
                }else {
                  info.group = [];
                  player.addTempSkill('drlt_jieying',{global:'qiaoqieAfter'})
                };
              }
            },
            new_wuhun_mark: {
              inherit: 'new_wuhun_die',
            },
            nzry_junlve: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['nzry_junlve']) target = player.storage.qiaoqie[i]['nzry_junlve']
                }
                if (!target.hasSkill('nzry_cuike')) {
                  target.addTempSkill('nzry_cuike',{global:'qiaoqieAfter'})
                }
              }
            },
            yingba_mark: {
              mod:{
                targetInRange:function(card,player,target){
                  if(target.hasMark('yingba_mark')) return true;
                },
              },
              audio:'scfuhai',
              trigger:{player:'useCardToPlayered'},
              forced:true,
              filter:function(event,player){
                return event.target&&event.target.hasMark('yingba_mark');
              },
              logTarget:'target',
              content:function(){
                trigger.directHit.add(trigger.target);
                if(player.getHistory('gain',function(evt){
                  return evt.getParent(2).name=='jianshi_yingba_mark';
                }).length<2) player.draw();
              },
              ai:{
                directHit_ai:true,
                skillTagFilter:function(player,tag,arg){
                  return arg&&arg.target&&arg.target.hasMark('yingba_mark')
                },
              },
            },
            tianren: {},
            huoxin: {},
            renjie: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['renjie']) target = player.storage.qiaoqie[i]['renjie']
                }
                if (!target.hasSkill('jilue')) {
                  target.addTempSkill('jilue',{global:'qiaoqieAfter'})
                }
              }
            },
            baonu: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['baonu']) target = player.storage.qiaoqie[i]['baonu']
                }
                if (!target.hasSkill('wuqian')) {
                  target.addTempSkill('wuqian',{global:'qiaoqieAfter'})
                }
              }
            },
            yijiao: {
              inherit: 'yijiao_effect',
            },
            yingfeng_mark: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['yingfeng_mark']) target = player.storage.qiaoqie[i]['yingfeng_mark']
                }
                if (!target.hasSkill('yingfeng_mark')) {
                  target.addTempSkill('yingfeng_mark',{global:'qiaoqieAfter'})
                }
              }
            },
            spshanxi: {
              inherit: 'spshanxi_suoming',
            },
            regushe: {},
            fanghun: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['fanghun']) target = player.storage.qiaoqie[i]['fanghun']
                }
                if (!target.hasSkill('fanghun')) {
                  target.addTempSkill('fanghun_sha',{global:'qiaoqieAfter'});
                  target.addTempSkill('fanghun_draw',{global:'qiaoqieAfter'});
                }
              }
            },
            nzry_huaiju: {
              inherit: 'tachibana_effect',
            },
            zaoli: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['zaoli']) target = player.storage.qiaoqie[i]['zaoli']
                }
                if (!target.hasSkill('zaoli')) {
                  target.addTempSkill('zaoli_start',{global:'qiaoqieAfter'});
                }
              },
            },
            zongkui_mark: {
              audio:'guju',
              audioname:['tw_beimihu'],
              init:function(player){
                if(!player.storage.guju) player.storage.guju=0;
              },
              intro:{
                content:'已因此技能获得#张牌'
              },
              trigger:{global:'damageEnd'},
              forced:true,
              filter:function(event,player){
                return event.player!=player&&event.player.isAlive()&&event.player.hasMark('zongkui_mark');
              },
              content:function(){
                player.draw();
                player.storage.guju++;
                player.markSkill('guju');
              },
            },
            taomie: {
              audio: 'taomie',
              trigger:{source:'damageBegin1'},
              forced:true,
              locked:false,
              direct:true,
              filter:function(event,player){
                return event.player.hasMark('taomie')&&player!=event.player;
              },
              content:function(){
                'step 0'
                player.logSkill(Math.random()<0.5?'taomie2':'taomie3',trigger.player);
                var target=get.translation(trigger.player);
                player.chooseControl().set('prompt','讨灭：请选择一项').set('choiceList',[
                  '令即将对'+target+'造成的伤害+1',
                  '获得'+target+'的一张牌，并可将其交给另一名其他角色',
                  '依次执行以上所有选项，并移去'+target+'的“讨灭”标记',
                ]).set('ai',function(){
                  var evt=_status.event.getTrigger();
                  var player=_status.event.player;
                  var target=evt.player;
                  var bool1=!target.hasSkillTag('filterDamage',null,{
                    player:player,
                    card:evt.card,
                  });
                  var bool2=get.effect(target,{name:'shunshou'},player,player)>0;
                  if(bool1&&bool2&&target.hp<=evt.num+1) return 2;
                  if(bool1) return 0;
                  return 1;
                });
                'step 1'
                if(result.index==2){
                  trigger.taomie_player=trigger.player;
                  trigger.player.addTempSkill('taomie4');
                }
                if(result.index!=1){
                  trigger.num++;
                }
                if(result.index!=0&&trigger.player.countGainableCards(player,'hej')>0){
                  player.gainPlayerCard(trigger.player,'hej',true);
                }
              else event.finish();
              'step 2'
              var card=result.cards[0];
              if(card&&player.getCards('h').contains(card)&&game.hasPlayer(function(current){
                return current!=player&&current!=trigger.player;
              })){
                event.card=card;
                player.chooseTarget('是否将'+get.translation(card)+'交给一名其他角色？',function(card,player,target){
                  return target!=player&&target!=_status.event.getTrigger().player;
                }).set('ai',function(target){
                  var player=_status.event.player;
                  var card=_status.event.getParent().card;
                  if(target.hasSkillTag('nogain')||!player.needsToDiscard()||(get.tag(card,'damage')&&player.hasValueTarget(card,null,false)&&get.effect(_status.event.getTrigger().player,card,null,false)>0)) return 0;
                  return get.attitude(player,target)/(1+target.countCards('h'));
                });
              }
              else event.finish();
              'step 3'
              if(result.bool){
                var target=result.targets[0];
                player.line(target);
                target.gain(card,player,'giveAuto');
              }
              },
              mod:{
                inRangeOf:function(from,to){
                  if(from.hasMark('taomie')) return true;
                },
                inRange:function(from,to){
                  if(to.hasMark('taomie')) return true;
                },
              },
              intro:{
                content:'mark',
              },
              ai:{
                effect:{
                  player:function(card,player,target){
                    if(target&&get.tag(card,'damage')&&target.hasMark('taomie')){
                      if(player.hasSkillTag('jueqing',false,target)) return;
                      if(get.attitude(player,target)>0){
                        return 0.7;
                      }
                      return 1.2;
                    }
                  },
                },
              },
            },
            xinlirang: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['xinlirang']) target = player.storage.qiaoqie[i]['xinlirang'];
                }
                if (!target.hasSkill('xinlirang')) {
                  target.addTempSkill('xinmingshi',{global:'qiaoqieAfter'});
                  target.addTempSkill('xinlirang_skip',{global:'qiaoqieAfter'});
                }
              }
            },
            ranshang: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['ranshang']) target = player.storage.qiaoqie[i]['ranshang']
                }
                if (!target.hasSkill('ranshang2')) {
                  target.addTempSkill('ranshang2',{global:'qiaoqieAfter'});
                }
              },
            },
            xionghuo: {
              group: ["xinfu_xionghuo_damage","xinfu_xionghuo_begin"],
            },
            olxueyi: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['olxueyi']) target = player.storage.qiaoqie[i]['olxueyi']
                }
                if (!target.hasSkill('olxueyi')) {
                  target.addTempSkill('olxueyi_h',{global:'qiaoqieAfter'});
                }
              },
            },
            xinfu_falu_spade: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['xinfu_falu_spade']) target = player.storage.qiaoqie[i]['xinfu_falu_spade']
                }
                if (!target.hasSkill('xinfu_falu')) {
                  target.addTempSkill('zhenyi_spade',{global:'qiaoqieAfter'});
                }
              },
            },
            xinfu_falu_heart: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['xinfu_falu_heart']) target = player.storage.qiaoqie[i]['xinfu_falu_heart']
                }
                if (!target.hasSkill('xinfu_falu')) {
                  target.addTempSkill('zhenyi_heart',{global:'qiaoqieAfter'});
                }
              },
            },
            xinfu_falu_club: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['xinfu_falu_club']) target = player.storage.qiaoqie[i]['xinfu_falu_club']
                }
                if (!target.hasSkill('xinfu_falu')) {
                  target.addTempSkill('zhenyi_club',{global:'qiaoqieAfter'});
                }
              },
            },
            xinfu_falu_diamond: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['xinfu_falu_diamond']) target = player.storage.qiaoqie[i]['xinfu_falu_diamond']
                }
                if (!target.hasSkill('xinfu_falu')) {
                  target.addTempSkill('zhenyi_diamond',{global:'qiaoqieAfter'});
                }
              },
            },
            caiyuan_mark: {
              trigger:{player:'phaseJieshuBegin'},
              forced:true,
              preHidden:true,
              filter:function(event,player){
                return !player.hasMark('caiyuan_mark')&&player.phaseNumber>1;
              },
              content:function(){
                player.draw(2);
              },
            },
            zhaosong_basic: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['zhaosong_basic']) target = player.storage.qiaoqie[i]['zhaosong_basic']
                }
                if (!target.hasSkill('zhaosong_basic')) {
                  target.addTempSkill('zhaosong_basic',{global:'qiaoqieAfter'});
                }
              },
            },
            zhaosong_trick: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['zhaosong_trick']) target = player.storage.qiaoqie[i]['zhaosong_trick']
                }
                if (!target.hasSkill('zhaosong_trick')) {
                  target.addTempSkill('zhaosong_trick',{global:'qiaoqieAfter'});
                }
              },
            },
            zhaosong_equip: {
              init:function (player,skill) {
                let target = null;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  if(player.storage.qiaoqie[i]['zhaosong_equip']) target = player.storage.qiaoqie[i]['zhaosong_equip']
                }
                if (!target.hasSkill('zhaosong_equip')) {
                  target.addTempSkill('zhaosong_equip',{global:'qiaoqieAfter'});
                }
              },
            },
            die: {
              forced: true,
              direct: true,
              forceDie: true,
              trigger: {global: "die"},
              filter: function (event, player) {
                let x = false;
                if(event.player==player) return false;
                for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                  for (const key in player.storage.qiaoqie[i]) {
                    if(player.storage.qiaoqie[i][key]==event.player) x = true;
                  }
                }
                return x;
              },
              content: function (trigger) {
                "step 0"
                player.chooseTarget(1,'移动他的标记',function (card,player,target) {
                  return target!=trigger.player;
                }).set("ai", function (player,target) {
                }).set("targetprompt", ["获得标记"]);
                "step 1"
                console.log(result);
                if(result.bool) {
                  let marks = [];
                  trigger.marks = {};
                  for (const key in trigger.player.marks) {
                    for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                      if(player.storage.qiaoqie[i][key]) {
                        if(player.storage.qiaoqie[i][key]==trigger.player) {
                          const mark = lib.skill[key];
                          if(trigger.player.hasMark(key)) {
                            let name = null;
                            if(mark.intro) {
                              if(mark.intro.name2) name = mark.intro.name2;
                              else name = mark.intro.name;
                            }
                            if(!name) name = get.translation(key);
                            trigger.marks[name]=key;
                            marks.push(name);
                          };
                        }else break;
                      }else continue;
                    }
                  }
                  player.chooseControl(marks);
                  trigger.targets=result.targets;
                }
                "step 2"
                if (result.control) {
                  let mark = trigger.marks[result.control];
                  trigger.player.removeMark(mark);
                  trigger.targets[0].addMark(mark);
                  player.storage.qiaoqie.push({[mark]:trigger.targets[0]});
                  for (let i = 0; i < player.storage.qiaoqie.length; i++) {
                    if (player.storage.qiaoqie[i][mark] == trigger.player)
                      player.storage.qiaoqie.splice(i,1);
                  }
                }
              },
            },
          },
        },
        zaoli_start: {
          trigger:{player:'phaseBegin'},
          audio: 'zaoli',
          forced:true,
          filter:function(event,player){
            return player.countMark('zaoli')>0;
          },
          content:function(){
            'step 0'
            event.num=player.storage.zaoli;
            player.removeMark('zaoli',event.num);
            if(player.countCards('he')>0){
              player.chooseToDiscard(true,'he',[1,Infinity],'躁厉：弃置至少一张牌').set('ai',function(card){
                if(card.hasGaintag('zaoli')) return 1;
                return 5-get.value(card);
              });
            }
            'step 1'
            if(result.bool) num+=result.cards.length;
            if(event.num>2) player.loseHp();
            player.draw(num);
          },
        },
        olxueyi_h: {
          mod:{
            maxHandcard:function(player,num){
              return num+player.countMark('olxueyi');
            },
          },
        },
        zhenyi_diamond: {
          trigger:{
            player:"damageEnd",
          },
          audio:'xinfu_zhenyi',
          filter:function (event,player){
            return player.hasMark('xinfu_falu_diamond');
          },
          prompt2:'弃置「勾陈♦」标记，从牌堆中获得每种类型的牌各一张。',
          content:function (){
            'step 0'
            player.removeMark('xinfu_falu_diamond');
            event.num=0;
            event.togain=[];
            'step 1'
            var card=get.cardPile(function(card){
              for(var i=0;i<event.togain.length;i++){
                if(get.type(card,'trick')==get.type(event.togain[i],'trick')) return false;
              }
              return true;
            });
            if(card){
              event.togain.push(card);
              event.num++;
              if(event.num<3) event.redo();
            }
            'step 2'
            if(event.togain.length){
              player.gain(event.togain,'gain2');
            }
          },
        },