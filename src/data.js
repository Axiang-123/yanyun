export const questions = [
  {
    id: 1,
    title: "初入江湖",
    question: "初入《燕云十六声》，你上线第一件事通常是？",
    options: [
      { letter: "A", text: "先乱逛踩点，至少挨打前知道自己死在哪", types: { N: 1, S: 0 } },
      { letter: "B", text: "先把任务做完，免得一会儿菜得还理不直气也壮", types: { S: 1, N: 0 } },
      { letter: "C", text: "先摇搭子打止戈，输了就怪网络怪手感怪版本", types: { E: 1, I: 0 } },
      { letter: "D", text: "先清主支线，拒绝当会跑图的木桩", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 2,
    title: "侠义",
    question: "在燕云世界中，你更认同哪种侠义精神？",
    options: [
      { letter: "A", text: "路见不平拔刀相助", types: { F: 1, T: 0 } },
      { letter: "B", text: "隐姓埋名，暗中守护", types: { I: 1, E: 0 } },
      { letter: "C", text: "劫富济贫，快意恩仇", types: { P: 1, J: 0 } },
      { letter: "D", text: "以武止戈，一统江湖", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 3,
    title: "止戈",
    question: "在止戈论剑 1v1 里，你更常用哪种取胜思路？",
    options: [
      { letter: "A", text: "正面压制，能把对面打成“只会后撤步”", types: { T: 1, F: 0 } },
      { letter: "B", text: "身法拉扯，专治那种只会乱按技能的", types: { P: 1, J: 0 } },
      { letter: "C", text: "稳扎稳打，宁可慢一点也不送温暖", types: { J: 1, P: 0 } },
      { letter: "D", text: "阴影下刀，主打一个“你还没看懂就没了”", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 4,
    title: "开封",
    question: "开封城是燕云世界的中心，你在城中喜欢做什么？",
    options: [
      { letter: "A", text: "在醉花阴听江湖轶事", types: { N: 1, S: 0 } },
      { letter: "B", text: "逛集市寻找稀有装备", types: { S: 1, N: 0 } },
      { letter: "C", text: "与玩家切磋武艺", types: { E: 1, I: 0 } },
      { letter: "D", text: "独自在城墙上俯瞰江湖", types: { I: 1, E: 0 } }
    ]
  },
  {
    id: 5,
    title: "论剑",
    question: "排位止戈时，你最看重哪件事？",
    options: [
      { letter: "A", text: "连段稳定，抓住一次就让对面怀疑人生", types: { T: 1, F: 0 } },
      { letter: "B", text: "临场变通，见你变招我就现场改作业", types: { P: 1, J: 0 } },
      { letter: "C", text: "复盘交流，挨过的打必须加倍奉还", types: { E: 1, I: 0 } },
      { letter: "D", text: "研究克制，绝不跟“头铁选手”同归于尽", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 6,
    title: "武学",
    question: "以下哪种武学流派最吸引你？",
    options: [
      { letter: "A", text: "破竹鸢，拳甲霸道", types: { T: 1, F: 0 } },
      { letter: "B", text: "无名剑配九枪，飘逸灵动", types: { N: 1, S: 0 } },
      { letter: "C", text: "双镖流派，恶心难缠", types: { P: 1, J: 0 } },
      { letter: "D", text: "太极剑，以静制动", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 7,
    title: "奇术",
    question: "止戈中，你最依赖哪个奇术？",
    options: [
      { letter: "A", text: "清风霁月，必备解控", types: { F: 1, T: 0 } },
      { letter: "B", text: "神龙吐火，高伤连招", types: { T: 1, F: 0 } },
      { letter: "C", text: "太白醉月，万金油", types: { N: 1, S: 0 } },
      { letter: "D", text: "鹰爪连凿，破防神技", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 8,
    title: "段位",
    question: "这个赛季你的止戈论剑目标更像是？",
    options: [
      { letter: "A", text: "先稳无我，至少别再给队友上强度", types: { J: 1, P: 0 } },
      { letter: "B", text: "冲到流云，证明自己不是“气氛组”", types: { N: 1, S: 0 } },
      { letter: "C", text: "登峰冲刺，段位榜必须有我名字", types: { T: 1, F: 0 } },
      { letter: "D", text: "段位随缘，反正嘴硬也能活得很体面", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 9,
    title: "战斗",
    question: "止戈遇到高分对手时，你通常怎么开局？",
    options: [
      { letter: "A", text: "主动压前，先把节奏抢下来", types: { T: 1, F: 0 } },
      { letter: "B", text: "拉扯观察，等对方先交关键技", types: { P: 1, J: 0 } },
      { letter: "C", text: "语音沟通复盘，下一把马上调整", types: { E: 1, I: 0 } },
      { letter: "D", text: "边打边算冷却和博弈点，稳中求胜", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 10,
    title: "连招",
    question: "止戈论剑里，你认为最核心的硬实力是？",
    options: [
      { letter: "A", text: "连段基本功，手一抖就等着被反杀", types: { S: 1, N: 0 } },
      { letter: "B", text: "反应和拆招，专门收拾固定连段复读机", types: { N: 1, S: 0 } },
      { letter: "C", text: "心理博弈，骗你一次你就会被骗第二次", types: { T: 1, F: 0 } },
      { letter: "D", text: "配置理解，把每一点面板都榨干", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 11,
    title: "敌对",
    question: "面对敌对势力的挑衅，你会？",
    options: [
      { letter: "A", text: "集结兄弟，正面反击", types: { E: 1, I: 0 } },
      { letter: "B", text: "暂避锋芒，卧薪尝胆", types: { I: 1, E: 0 } },
      { letter: "C", text: "暗中调查，收集情报", types: { N: 1, S: 0 } },
      { letter: "D", text: "以彼之道还施彼身", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 12,
    title: "社交",
    question: "在燕云世界中，你更倾向于？",
    options: [
      { letter: "A", text: "建立或加入强大帮会", types: { E: 1, I: 0 } },
      { letter: "B", text: "与三五知己闯荡江湖", types: { F: 1, T: 0 } },
      { letter: "C", text: "独来独往，做个散人", types: { I: 1, E: 0 } },
      { letter: "D", text: "成为自由赏金猎人", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 13,
    title: "历练",
    question: "提升实力的途径很多，你更喜欢？",
    options: [
      { letter: "A", text: "木桩房练习真连", types: { J: 1, P: 0 } },
      { letter: "B", text: "实战历练，在战斗中成长", types: { T: 1, F: 0 } },
      { letter: "C", text: "探索秘境，寻找传承", types: { N: 1, S: 0 } },
      { letter: "D", text: "研究攻略，提升理解", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 14,
    title: "恩怨",
    question: "若有不共戴天之仇，你会？",
    options: [
      { letter: "A", text: "君子报仇十年不晚", types: { J: 1, P: 0 } },
      { letter: "B", text: "当场了结快意恩仇", types: { T: 1, F: 0 } },
      { letter: "C", text: "化敌为友以德报怨", types: { F: 1, T: 0 } },
      { letter: "D", text: "冤冤相报不如放下", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 15,
    title: "装备",
    question: "在止戈配装里，你更优先堆哪一类收益？",
    options: [
      { letter: "A", text: "时雨江凝套，闪避回血", types: { S: 1, N: 0 } },
      { letter: "B", text: "御无缺套，极限防御", types: { J: 1, P: 0 } },
      { letter: "C", text: "玩家增伤，提升输出", types: { T: 1, F: 0 } },
      { letter: "D", text: "霸体效果，站桩输出", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 16,
    title: "秘宝",
    question: "燕云世界中传说有诸多秘宝，你最想得到？",
    options: [
      { letter: "A", text: "上古神兵利器", types: { T: 1, F: 0 } },
      { letter: "B", text: "内功心法秘籍", types: { S: 1, N: 0 } },
      { letter: "C", text: "隐世轻功绝学", types: { P: 1, J: 0 } },
      { letter: "D", text: "藏宝图探寻真相", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 17,
    title: "城池",
    question: "燕云世界有多座城池，你最向往哪里？",
    options: [
      { letter: "A", text: "开封，繁华似锦", types: { E: 1, I: 0 } },
      { letter: "B", text: "雁门关，塞外风雪", types: { S: 1, N: 0 } },
      { letter: "C", text: "江南水乡，烟雨朦胧", types: { F: 1, T: 0 } },
      { letter: "D", text: "昆仑西域，神秘莫测", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 18,
    title: "心法",
    question: "内功心法是燕云武学的核心，你更注重？",
    options: [
      { letter: "A", text: "攻击型心法，先发制人", types: { T: 1, F: 0 } },
      { letter: "B", text: "防御型心法，以守待攻", types: { J: 1, P: 0 } },
      { letter: "C", text: "辅助型心法，攻防兼备", types: { F: 1, T: 0 } },
      { letter: "D", text: "隐匿型心法，出其不意", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 19,
    title: "义气",
    question: "帮会兄弟有难，你会？",
    options: [
      { letter: "A", text: "二话不说立即支援", types: { F: 1, T: 0 } },
      { letter: "B", text: "分析形势后决定", types: { T: 1, F: 0 } },
      { letter: "C", text: "召集更多人再行动", types: { E: 1, I: 0 } },
      { letter: "D", text: "暗中策划援助方案", types: { I: 1, E: 0 } }
    ]
  },
  {
    id: 20,
    title: "技能",
    question: "止戈循环里，你的技能优先级更接近？",
    options: [
      { letter: "A", text: "处决窗口不浪费，能带走绝不留作业", types: { T: 1, F: 0 } },
      { letter: "B", text: "特殊技先手，先把对面打成慌张按钮怪", types: { N: 1, S: 0 } },
      { letter: "C", text: "破防优先，让对面从头到尾没脾气", types: { J: 1, P: 0 } },
      { letter: "D", text: "防反为王，专等对面上头送分", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 21,
    title: "技艺",
    question: "除了武学，燕云还有各种生活技艺，你喜欢？",
    options: [
      { letter: "A", text: "炼丹制药，悬壶济世", types: { S: 1, N: 0 } },
      { letter: "B", text: "烹饪美食，民以食为天", types: { F: 1, T: 0 } },
      { letter: "C", text: "锻造神兵，独步天下", types: { T: 1, F: 0 } },
      { letter: "D", text: "诗词歌赋，逍遥自在", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 22,
    title: "喝酒",
    question: "太白醉月在止戈里，你更常怎么使用？",
    options: [
      { letter: "A", text: "开局先喝，先把气势喝到位", types: { J: 1, P: 0 } },
      { letter: "B", text: "吐火衔接连段，压到对面想拔网线", types: { T: 1, F: 0 } },
      { letter: "C", text: "处决前预输入，细节党专门惩罚粗心怪", types: { N: 1, S: 0 } },
      { letter: "D", text: "基本不点，省键位给真正能赢的技能", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 23,
    title: "坐骑",
    question: "燕云世界的坐骑系统独具特色，你更喜欢？",
    options: [
      { letter: "A", text: "汗血宝马，纵横沙场", types: { T: 1, F: 0 } },
      { letter: "B", text: "沙漠骆驼，耐力持久", types: { S: 1, N: 0 } },
      { letter: "C", text: "仙鹤白鹿，飘逸出尘", types: { N: 1, S: 0 } },
      { letter: "D", text: "轻功绝顶，无需坐骑", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 24,
    title: "恩怨",
    question: "面对曾经伤害过你的人，你会？",
    options: [
      { letter: "A", text: "一笑泯恩仇", types: { F: 1, T: 0 } },
      { letter: "B", text: "势不两立，有仇必报", types: { T: 1, F: 0 } },
      { letter: "C", text: "相忘于江湖", types: { P: 1, J: 0 } },
      { letter: "D", text: "观察其后续表现再定", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 25,
    title: "组队",
    question: "从副本转到止戈时，你更偏好的训练方式是？",
    options: [
      { letter: "A", text: "固定搭子陪练，按计划练连段", types: { J: 1, P: 0 } },
      { letter: "B", text: "随机切磋，多风格里找手感", types: { P: 1, J: 0 } },
      { letter: "C", text: "单排硬打，用实战逼出强度", types: { I: 1, E: 0 } },
      { letter: "D", text: "复盘对局录像，做针对性策略", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 26,
    title: "克制",
    question: "止戈里处理攻防博弈，你最擅长哪种节奏？",
    options: [
      { letter: "A", text: "持续压制，打到对面只剩祈祷", types: { T: 1, F: 0 } },
      { letter: "B", text: "防反节奏，你越急我越开心", types: { N: 1, S: 0 } },
      { letter: "C", text: "拉扯消耗，专治“我就想硬冲”的", types: { P: 1, J: 0 } },
      { letter: "D", text: "硬扛换血，赌你先崩心态", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 27,
    title: "秘闻",
    question: "燕云世界流传着诸多秘闻，你最想探寻？",
    options: [
      { letter: "A", text: "燕云十六声的实际下落", types: { N: 1, S: 0 } },
      { letter: "B", text: "各大门派的隐藏传承", types: { S: 1, N: 0 } },
      { letter: "C", text: "上古战争的历史真相", types: { T: 1, F: 0 } },
      { letter: "D", text: "乱世背后的真正推手", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 28,
    title: "结义",
    question: "江湖结义讲究志同道合，你最看重兄弟的？",
    options: [
      { letter: "A", text: "忠诚可靠，义薄云天", types: { F: 1, T: 0 } },
      { letter: "B", text: "实力强横，并肩作战", types: { T: 1, F: 0 } },
      { letter: "C", text: "志趣相投，趣味相投", types: { N: 1, S: 0 } },
      { letter: "D", text: "洒脱不羁，快意恩仇", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 29,
    title: "身份",
    question: "燕云有独特的身份系统，你更想成为？",
    options: [
      { letter: "A", text: "仗剑走天涯的游侠", types: { P: 1, J: 0 } },
      { letter: "B", text: "统领一方的帮主", types: { T: 1, F: 0 } },
      { letter: "C", text: "隐居山林的隐士", types: { I: 1, E: 0 } },
      { letter: "D", text: "揭密真相的调查者", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 30,
    title: "调平",
    question: "在 3v3 调平演武中，你的定位通常是？",
    options: [
      { letter: "A", text: "稳健执行位，专门给队友擦屁股", types: { J: 1, P: 0 } },
      { letter: "B", text: "沟通节奏位，队友一乱你就得当爹", types: { E: 1, I: 0 } },
      { letter: "C", text: "爆点操作位，秀起来就是全场主角", types: { T: 1, F: 0 } },
      { letter: "D", text: "奇袭整活位，专打那些自以为懂版本的", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 31,
    title: "隐居",
    question: "若有一天厌倦江湖纷争，你会选择？",
    options: [
      { letter: "A", text: "归隐山林，躬耕田园", types: { I: 1, E: 0 } },
      { letter: "B", text: "远赴海外，另寻新天", types: { P: 1, J: 0 } },
      { letter: "C", text: "继续守护一方平安", types: { F: 1, T: 0 } },
      { letter: "D", text: "著书立说，传承武学", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 32,
    title: "骑龙",
    question: "止戈里遇到骑龙反打节点时，你更常？",
    options: [
      { letter: "A", text: "先稳防守，别给对面白捡高光时刻", types: { J: 1, P: 0 } },
      { letter: "B", text: "先拉开，等他技能交完再教做人", types: { P: 1, J: 0 } },
      { letter: "C", text: "预判落点，提前把对面算得明明白白", types: { T: 1, F: 0 } },
      { letter: "D", text: "正面硬碰，输了也要嘴上赢", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 33,
    title: "传闻",
    question: "江湖传闻你最关注哪类？",
    options: [
      { letter: "A", text: "谁又突破了境界", types: { T: 1, F: 0 } },
      { letter: "B", text: "哪里又出了秘宝", types: { N: 1, S: 0 } },
      { letter: "C", text: "帮会之间的恩怨情仇", types: { F: 1, T: 0 } },
      { letter: "D", text: "新赛季的强势流派", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 34,
    title: "交易",
    question: "燕云世界的交易系统丰富，你会？",
    options: [
      { letter: "A", text: "囤积居奇低买高卖", types: { T: 1, F: 0 } },
      { letter: "B", text: "公平交易童叟无欺", types: { S: 1, N: 0 } },
      { letter: "C", text: "摆摊交友以物会友", types: { E: 1, I: 0 } },
      { letter: "D", text: "随机应变随缘交易", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 35,
    title: "传承",
    question: "若收徒传艺，你最看重弟子的？",
    options: [
      { letter: "A", text: "天赋异禀悟性极高", types: { N: 1, S: 0 } },
      { letter: "B", text: "心性纯良品行端正", types: { F: 1, T: 0 } },
      { letter: "C", text: "勤奋好学刻苦修炼", types: { J: 1, P: 0 } },
      { letter: "D", text: "意志坚定百折不挠", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 36,
    title: "江湖梦",
    question: "你的燕云江湖梦是什么？",
    options: [
      { letter: "A", text: "成为武林第一人", types: { T: 1, F: 0 } },
      { letter: "B", text: "归隐山林不问江湖", types: { I: 1, E: 0 } },
      { letter: "C", text: "守护重要的人", types: { F: 1, T: 0 } },
      { letter: "D", text: "体验所有江湖趣事", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 37,
    title: "处决",
    question: "止戈触发处决后，你更偏向哪种后续？",
    options: [
      { letter: "A", text: "直接压起身，主打一个让对面没游戏体验", types: { T: 1, F: 0 } },
      { letter: "B", text: "预输入接连段，细节党专门打脸粗糙怪", types: { N: 1, S: 0 } },
      { letter: "C", text: "稳住阵脚，等对面自己送上门", types: { J: 1, P: 0 } },
      { letter: "D", text: "见好就收，活着才有资格继续嘲讽", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 38,
    title: "寒千秋",
    question: "寒千秋在燕云中是传奇人物，你如何看待？",
    options: [
      { letter: "A", text: "刺客之王，令人敬畏", types: { T: 1, F: 0 } },
      { letter: "B", text: "亦敌亦友的复杂存在", types: { N: 1, S: 0 } },
      { letter: "C", text: "可望而不可及的传说", types: { I: 1, E: 0 } },
      { letter: "D", text: "与我无关的局外势力", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 39,
    title: "少林",
    question: "少林寺在燕云中地位特殊，你怎么看？",
    options: [
      { letter: "A", text: "武林正宗心向往之", types: { J: 1, P: 0 } },
      { letter: "B", text: "传统束缚不以为然", types: { P: 1, J: 0 } },
      { letter: "C", text: "中立势力可以合作", types: { N: 1, S: 0 } },
      { letter: "D", text: "实力强劲值得研究", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 40,
    title: "武林",
    question: "燕云世界风起云涌，你认为武林的未来是？",
    options: [
      { letter: "A", text: "群雄割据各自为战", types: { P: 1, J: 0 } },
      { letter: "B", text: "统一于强大势力之下", types: { T: 1, F: 0 } },
      { letter: "C", text: "正邪两道势均力敌", types: { N: 1, S: 0 } },
      { letter: "D", text: "各派和平共处共荣", types: { F: 1, T: 0 } }
    ]
  },
  {
    id: 41,
    title: "独白",
    question: "如果用一句话形容你的止戈打法，你会说？",
    options: [
      { letter: "A", text: "我只想守护身边的人", types: { F: 1, T: 0 } },
      { letter: "B", text: "天下武功唯快不破", types: { T: 1, F: 0 } },
      { letter: "C", text: "江湖之大无处不可去", types: { P: 1, J: 0 } },
      { letter: "D", text: "真相只有一个", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 42,
    title: "江湖路",
    question: "回顾自己的燕云江湖路，你更认可？",
    options: [
      { letter: "A", text: "波澜壮阔轰轰烈烈", types: { E: 1, I: 0 } },
      { letter: "B", text: "稳扎稳打步步为营", types: { J: 1, P: 0 } },
      { letter: "C", text: "神秘低调暗中观察", types: { I: 1, E: 0 } },
      { letter: "D", text: "随性洒脱随遇而安", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 43,
    title: "好友",
    question: "在燕云里遇到一起冲止戈段位的队友，你会觉得？",
    options: [
      { letter: "A", text: "仗剑并肩闯荡天下", types: { E: 1, I: 0 } },
      { letter: "B", text: "深夜长谈人生理想", types: { F: 1, T: 0 } },
      { letter: "C", text: "切磋武艺共同进步", types: { T: 1, F: 0 } },
      { letter: "D", text: "君子之交淡如水", types: { I: 1, E: 0 } }
    ]
  },
  {
    id: 44,
    title: "落幕",
    question: "当你即将离开燕云世界时，你会？",
    options: [
      { letter: "A", text: "与好友一一告别", types: { F: 1, T: 0 } },
      { letter: "B", text: "默默下线不留痕迹", types: { I: 1, E: 0 } },
      { letter: "C", text: "最后一次纵情江湖", types: { P: 1, J: 0 } },
      { letter: "D", text: "写下江湖感悟留念", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 45,
    title: "终章",
    question: "若有一天燕云停服，你最舍不得的是？",
    options: [
      { letter: "A", text: "一起并肩作战的兄弟", types: { F: 1, T: 0 } },
      { letter: "B", text: "在游戏中经历的点点滴滴", types: { N: 1, S: 0 } },
      { letter: "C", text: "那个曾经奋斗过的自己", types: { T: 1, F: 0 } },
      { letter: "D", text: "江湖中所有的传说故事", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 46,
    title: "醉花阴",
    question: "醉花阴是开封最大的舞榭歌台，你会？",
    options: [
      { letter: "A", text: "参加群英会，一展风采", types: { E: 1, I: 0 } },
      { letter: "B", text: "在角落观察江湖百态", types: { I: 1, E: 0 } },
      { letter: "C", text: "打听各方情报消息", types: { N: 1, S: 0 } },
      { letter: "D", text: "欣赏歌舞，不问世事", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 47,
    title: "清河",
    question: "清河是燕云的重要区域，你对其印象是？",
    options: [
      { letter: "A", text: "风景优美，适合探索", types: { N: 1, S: 0 } },
      { letter: "B", text: "资源丰富，适合发育", types: { S: 1, N: 0 } },
      { letter: "C", text: "地广人稀，容易迷路", types: { P: 1, J: 0 } },
      { letter: "D", text: "暗藏玄机，机遇无限", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 48,
    title: "主线",
    question: "燕云十六声的主线剧情充满悬念，你更关注？",
    options: [
      { letter: "A", text: "各方势力的兴衰存亡", types: { T: 1, F: 0 } },
      { letter: "B", text: "主线NPC的爱恨情仇", types: { F: 1, T: 0 } },
      { letter: "C", text: "隐藏的江湖秘闻", types: { N: 1, S: 0 } },
      { letter: "D", text: "自身武学的提升历程", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 49,
    title: "门派",
    question: "燕云武学自由搭配下，你的止戈构筑思路更像？",
    options: [
      { letter: "A", text: "偷师百家，融会贯通", types: { N: 1, S: 0 } },
      { letter: "B", text: "专精一流，登峰造极", types: { J: 1, P: 0 } },
      { letter: "C", text: "不拘一格，随心所欲", types: { P: 1, J: 0 } },
      { letter: "D", text: "看版本强势，版本至上", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 50,
    title: "止戈",
    question: "你长期投入止戈论剑模式，主要是为了？",
    options: [
      { letter: "A", text: "冲分上段，证明自己不是“匹配福利局”", types: { T: 1, F: 0 } },
      { letter: "B", text: "和兄弟一起上头，输赢先放一边，嘴硬不能输", types: { E: 1, I: 0 } },
      { letter: "C", text: "钻研博弈，把每个细节卷到离谱", types: { N: 1, S: 0 } },
      { letter: "D", text: "就爱互相拿捏，打的就是一个不服", types: { P: 1, J: 0 } }
    ]
  }
]
export const personalities = {
  "INTJ": {
    name: "人间冷却器",
    title: "别跟我谈感情，伤帧率",
    description: "止戈里你像一台开了省电模式的高性能主机：别人在喊麦你在算帧。社交？不熟。你宁可多练两套连段也不愿意听队友讲故事。不是冷，是脑子拒绝给无效信息分配带宽。",
    traits: ["已读不回", "计划狂魔", "嫌弃莽夫", "我菜但你更菜"],
    match: "止戈：剑法主C + 反制心法｜专打上头怪，你冷静对面就急"
  },
  "INTP": {
    name: "脑内PPT大师",
    title: "打之前先在脑子里写完论文",
    description: "你能在木桩前站成文物——不是懒，是在脑内跑完一整页克制表。对手上头你上脑，对面拼手速你拼逻辑。别人问你咋赢的，你说“这不是显而易见吗”，然后对面更气了。",
    traits: ["理论杀人", "实战经验靠嘴", "奇术研究员", "赢了也不夸人"],
    match: "止戈：长兵拉扯 + 奇术博弈｜蛮干流在你眼里就是送分素材"
  },
  "ENTJ": {
    name: "全麦指挥官",
    title: "不开麦算我给对面面子",
    description: "你进止戈像进会议室：节奏、目标、锅位一次分完。谁失误你眼神先到位。你说的是战术，别人听的是训斥——但分确实上去了，这很烦，又很真实。",
    traits: ["全员KPI", "背锅侠质检员", "分奴本奴", "输了先复盘再骂人"],
    match: "止戈：刀系压制 + 指挥位｜你一说话，全场先安静两秒"
  },
  "ENTP": {
    name: "嘴炮变招王",
    title: "连招可以歪，嘴不能停",
    description: "你打架像直播：边打边吐槽对面构筑。套路多到对面以为你在开挂，其实你只是欠。赢了要阴阳，输了更要阴阳——反正江湖不能输了气场。",
    traits: ["变招比变脸快", "气人有一手", "逆风也敢嘴", "队友笑完再救你"],
    match: "止戈：暗器扰动 + 奇术变招｜对面越想懂你越像阅读理解零分"
  },
  "INFJ": {
    name: "温柔补刀怪",
    title: "我说没事，其实你已经没了",
    description: "你表面佛系，下手全是精准打击。你心疼队友，也心疼对面——心疼他们怎么就敢冲你脸上。止戈里你像带毒的糖水：甜着甜着对面就没了。",
    traits: ["预判读心", "补刀艺术家", "嘴软手黑", "专治不长记性"],
    match: "止戈：长兵控场 + 辅助心法｜看起来好说话，实则狠得一批"
  },
  "INFP": {
    name: "发呆艺术家",
    title: "我在找手感，你在送人头",
    description: "你打止戈像在写诗：节奏慢、想法多、偶尔一套灵性直接把对面送走。别人骂你梦游，你只回“你不懂”。佛系里藏着倔，菜可以，不帅不行。",
    traits: ["手感玄学", "佛系上分", "拒绝内卷话术", "偶尔神仙一局"],
    match: "止戈：轻剑游走 + 机动反打｜打得好是艺术，打不好是伏笔"
  },
  "ENFJ": {
    name: "情绪总教头",
    title: "先把人心稳住，再把对面送走",
    description: "你是队伍里的心理按摩师兼精神氮泵。止戈输了你会先安慰“没事下把”，然后下把把对面揍到怀疑人生。又暖又狠，队友一边感动一边不敢摆烂。",
    traits: ["鸡汤里下毒", "团魂发动机", "摆烂零容忍", "赢了一起狂"],
    match: "止戈：刀系带节奏 + 团队增益｜你敢摆我敢念，你敢C我敢吹"
  },
  "ENFP": {
    name: "整活永动机",
    title: "构筑可以不主流，但必须好笑",
    description: "你玩燕云是来找乐子的，止戈是顺路。今天这套明天那套，对面永远猜不到你下一把是秀还是送。别人上分是上分，你上分是行为艺术，旁边观众血压先上来。",
    traits: ["构筑鬼才", "输赢看心情", "模板粉碎机", "队友看了想报警"],
    match: "止戈：双镖骚扰 + 自由构筑｜模板党遇到你只想卸游戏"
  },
  "ISTJ": {
    name: "版本守墓人",
    title: "改动再大，我自有祖传连招",
    description: "版本公告你当小说看，实战你只信自己练熟的。别人追新你守旧？不，这叫稳定产出。止戈里你像老式挂钟：走得不快，但准，对面急了你更不急。",
    traits: ["手册成精", "失误犯法", "不听劝体质", "稳到让人想睡"],
    match: "止戈：韦陀稳压 + 正法防守｜对面急到撞墙你还在按表走"
  },
  "ISFJ": {
    name: "队内老妈子",
    title: "别送，我给你兜底",
    description: "你嘴上唠叨，手上干活。止戈里你是血条和心态的双重保姆，谁冲太猛你都会在心里默默记一笔。你可以不秀，但你让队友多活了两秒，这两秒够对面崩溃。",
    traits: ["嘴碎心软", "兜底专业户", "背锅预备役", "骂轻了不管用"],
    match: "止戈：辅助心法 + 容错续航｜没有你我早十五投了"
  },
  "ESTJ": {
    name: "纪律压路机",
    title: "规矩写脸上，失误写族谱上",
    description: "你打止戈像军训：节奏要对，技能别空，菜要认。你见不得散漫，队友摆烂你会比对面更像BOSS。目标只有一个——赢。输了？先查表再查人。",
    traits: ["效率警察", "甩锅雷达", "分奴戒严", "赢了也不夸懒狗"],
    match: "止戈：霸体推进 + 防御反打｜对面怂了你更凶"
  },
  "ESFJ": {
    name: "社交加湿器",
    title: "气氛到位了，对面也得给面子躺",
    description: "你打止戈还不忘照顾全场情绪：队友紧张你安抚，对面嚣张你嘲讽。你不是最狠的输出，但你是队伍粘合剂——粘合到对面想举报“这人过于阴阳”。",
    traits: ["气氛组ACE", "嘴甜手稳", "团宠兼团欺", "输了先哄再打"],
    match: "止戈：团队协同 + 辅助支援｜人少你奶，人多你煽风点火"
  },
  "ISTP": {
    name: "沉默报应哥",
    title: "不说话，但每一刀都是回复",
    description: "你打字懒得打，麦懒得开，止戈里只有刀在说话。别人逼逼半天你一句没有，反手一波带走——对面举报理由里写着“被沉默嘲讽”。",
    traits: ["聊天免打扰", "手活即态度", "反杀专业户", "人狠话没有"],
    match: "止戈：刺客爆发 + 暗器收割｜你-quiet=对面-quit"
  },
  "ISFP": {
    name: "随缘暴击手",
    title: "别教我怎么赢，我在找感觉",
    description: "你打得像逛该：走位随缘，连招看心情，但关键时刻一刀暴击能把对面送走。别人看不懂你，你也懒得解释——帅就完事，丑了算对面的。",
    traits: ["手感宗教", "拒绝被定义", "帅了封神菜了装死", "自由至上"],
    match: "止戈：剑法机动 + 灵性换血｜打出来像开挂，打不出来像挂机"
  },
  "ESTP": {
    name: "上头发动机",
    title: "脑子可以不要，气势不能输",
    description: "你进止戈先冲为敬，战术是肾上腺素。对面以为你在莽，其实你在赌——赌对面比你更慌。赢了是秀，输了是节目效果，反正观众爽了。",
    traits: ["先冲为敬", "赌狗本狗", "赛后嘴依旧硬", "团里血压担当"],
    match: "止戈：破竹鸢压制 + 吐火连段｜血条蒸发，心态一起蒸发"
  },
  "ESFP": {
    name: "快乐压分王",
    title: "分可以掉，节目效果不能掉",
    description: "你玩燕云是为了嗨，止戈是舞台。太白醉月能当你的人生态度：有点飘，有点烈，偶尔翻车全场爆笑。你是队伍的欢乐喷泉——也是对面最想静音的那个人。",
    traits: ["整活即正义", "输赢看心情", "直播型人格", "掉分也能笑出声"],
    match: "止戈：醉拳节奏 + 太白醉月｜边打边整活，对面破防你破音"
  }
}