问：大佬们，我想知道武将技能如果把标记改为显示图片等，比如门神显示武将牌是怎么做到的？
答：
player.markSkillCharacter或者
player.marks.标志名.setBackgroundImage(需要设置的图片地址);
后者在联机中需要使用game.broadcastAll将设置代码发送给客机。