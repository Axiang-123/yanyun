export const questions = [
  {
    id: 1,
    title: "初入江湖",
    question: "初入燕云世界，你做的第一件事是？",
    options: [
      { letter: "A", text: "打开地图探索每个角落", types: { N: 1, S: 0 } },
      { letter: "B", text: "去开封城找NPC对话", types: { S: 1, N: 0 } },
      { letter: "C", text: "加入玩家社群找搭子", types: { E: 1, I: 0 } },
      { letter: "D", text: "直接开始主线剧情", types: { J: 1, P: 0 } }
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
    question: "止戈论剑中，你更喜欢哪种战斗风格？",
    options: [
      { letter: "A", text: "剑刀客，正面硬刚", types: { T: 1, F: 0 } },
      { letter: "B", text: "醉拳飘逸，以柔克刚", types: { P: 1, J: 0 } },
      { letter: "C", text: "长枪沉稳，一寸长一寸强", types: { J: 1, P: 0 } },
      { letter: "D", text: "暗器神出鬼没", types: { N: 1, S: 0 } }
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
    question: "止戈论剑时，你更注重什么？",
    options: [
      { letter: "A", text: "练好真连，一套带走", types: { T: 1, F: 0 } },
      { letter: "B", text: "见招拆招，灵活应对", types: { P: 1, J: 0 } },
      { letter: "C", text: "团队配合，协同作战", types: { E: 1, I: 0 } },
      { letter: "D", text: "研究对手，克制应对", types: { N: 1, S: 0 } }
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
    question: "你的止戈论剑目标段位是？",
    options: [
      { letter: "A", text: "无我，真正入门", types: { J: 1, P: 0 } },
      { letter: "B", text: "流云，登堂入室", types: { N: 1, S: 0 } },
      { letter: "C", text: "论剑登峰，巅峰王者", types: { T: 1, F: 0 } },
      { letter: "D", text: "享受过程，不在乎段位", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 9,
    title: "战斗",
    question: "面对强敌，你会如何应对？",
    options: [
      { letter: "A", text: "正面交锋，以硬碰硬", types: { T: 1, F: 0 } },
      { letter: "B", text: "伺机而动，一击必杀", types: { P: 1, J: 0 } },
      { letter: "C", text: "团队配合，协同作战", types: { E: 1, I: 0 } },
      { letter: "D", text: "见招拆招，随机应变", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 10,
    title: "连招",
    question: "论剑时，你更看重什么能力？",
    options: [
      { letter: "A", text: "稳定真连，10秒一套", types: { S: 1, N: 0 } },
      { letter: "B", text: "快速反应，见招拆招", types: { N: 1, S: 0 } },
      { letter: "C", text: "心理博弈，骗招反打", types: { T: 1, F: 0 } },
      { letter: "D", text: "装备碾压，力大砖飞", types: { P: 1, J: 0 } }
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
    question: "论剑时，你更看重装备什么属性？",
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
    question: "论剑中，你更依赖哪种技能优先级？",
    options: [
      { letter: "A", text: "处决=韦陀，最高优先级", types: { T: 1, F: 0 } },
      { letter: "B", text: "特殊技，灵活多变", types: { N: 1, S: 0 } },
      { letter: "C", text: "破防技，打开局面", types: { J: 1, P: 0 } },
      { letter: "D", text: "卸式防反，后发制人", types: { P: 1, J: 0 } }
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
    question: "太白醉月是万金油奇术，你习惯？",
    options: [
      { letter: "A", text: "开局喝酒上BUFF", types: { J: 1, P: 0 } },
      { letter: "B", text: "吐火后接太白打火拳", types: { T: 1, F: 0 } },
      { letter: "C", text: "处决前喝酒预输入吐火", types: { N: 1, S: 0 } },
      { letter: "D", text: "不需要，太白太弱", types: { P: 1, J: 0 } }
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
    question: "挑战大型副本时，你更喜欢？",
    options: [
      { letter: "A", text: "与固定队伍配合默契", types: { J: 1, P: 0 } },
      { letter: "B", text: "野队随机，挑战未知", types: { P: 1, J: 0 } },
      { letter: "C", text: "单刷独战，证明实力", types: { I: 1, E: 0 } },
      { letter: "D", text: "指挥全局，运筹帷幄", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 26,
    title: "克制",
    question: "论剑中三角克制关系，你最擅长？",
    options: [
      { letter: "A", text: "进攻压制，以攻代守", types: { T: 1, F: 0 } },
      { letter: "B", text: "卸式反打，后发先至", types: { N: 1, S: 0 } },
      { letter: "C", text: "闪避拉扯消耗对手", types: { P: 1, J: 0 } },
      { letter: "D", text: "霸体硬扛，拼伤害", types: { J: 1, P: 0 } }
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
    question: "3v3调平演武模式，你更喜欢？",
    options: [
      { letter: "A", text: "公平竞技，纯拼技术", types: { J: 1, P: 0 } },
      { letter: "B", text: "团队配合，战术博弈", types: { E: 1, I: 0 } },
      { letter: "C", text: "个人实力，展示操作", types: { T: 1, F: 0 } },
      { letter: "D", text: "混搭流派，出奇制胜", types: { N: 1, S: 0 } }
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
    question: "面对骑龙反打，你会？",
    options: [
      { letter: "A", text: "立刻防御等待时机", types: { J: 1, P: 0 } },
      { letter: "B", text: "直接闪避拉开距离", types: { P: 1, J: 0 } },
      { letter: "C", text: "预判落点提前攻击", types: { T: 1, F: 0 } },
      { letter: "D", text: "骑龙对拼，看谁更狠", types: { N: 1, S: 0 } }
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
    question: "论剑中触发处决后，你习惯？",
    options: [
      { letter: "A", text: "立刻吐火压起身", types: { T: 1, F: 0 } },
      { letter: "B", text: "喝酒预输入接连招", types: { N: 1, S: 0 } },
      { letter: "C", text: "稳扎稳打等对手失误", types: { J: 1, P: 0 } },
      { letter: "D", text: "处决后拉开距离", types: { P: 1, J: 0 } }
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
    question: "如果用一句话形容自己，你会说？",
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
    question: "在燕云中交到知心好友是种什么体验？",
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
    question: "燕云中无门无派可自选武学，你会？",
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
    question: "你玩止戈论剑的主要目的是？",
    options: [
      { letter: "A", text: "证明实力，冲击段位", types: { T: 1, F: 0 } },
      { letter: "B", text: "结交朋友，组队娱乐", types: { E: 1, I: 0 } },
      { letter: "C", text: "研究打法，提升技术", types: { N: 1, S: 0 } },
      { letter: "D", text: "体验武侠战斗的乐趣", types: { P: 1, J: 0 } }
    ]
  }
]
export const personalities = {
  "INTJ": {
    name: "寒渊",
    title: "寒渊剑主",
    description: "你如同燕云中传说中的寒渊剑主，独来独往，剑术通神。你不屑于世俗的纷争，只追求武道的极致。孤独是你的常态，但正是这份孤独，让你能够心无旁骛地修炼，终成一代宗师。",
    traits: ["独立", "理性", "追求极致", "深藏不露"],
    match: "适合：剑法、刀法"
  },
  "INTP": {
    name: "天机",
    title: "天机居士",
    description: "你如同燕云中的天机居士，通晓天下武学，却从不轻易出手。你喜欢思考和研究，将武学融会贯通，形成自己独特的体系。虽然不善交际，但你的智慧让人敬佩。",
    traits: ["睿智", "思考者", "创新", "内敛"],
    match: "适合：长兵、奇术"
  },
  "ENTJ": {
    name: "执棋",
    title: "执棋之人",
    description: "你如同燕云中的执棋之人，天生具有领袖气质。你有远见卓识，能够统筹全局，让各路英雄为你效命。在你的带领下，帮会必将威震武林，成就一番霸业。",
    traits: ["领导力", "决断力", "自信", "战略家"],
    match: "适合：刀、长兵"
  },
  "ENTP": {
    name: "逍遥",
    title: "逍遥散仙",
    description: "你如同燕云中的逍遥散仙，机智幽默，随性洒脱。你不拘泥于传统，喜欢创新和变化。总能在危机中找到转机，用智慧而非蛮力解决问题。",
    traits: ["机智", "创新", "善变", "魅力"],
    match: "适合：暗器、奇术"
  },
  "INFJ": {
    name: "清风",
    title: "清风使者",
    description: "你如同燕云中的清风使者，心怀慈悲，想要拯救天下苍生。你有着崇高的理想和坚定的信念，愿意为了正义付出一切。你的存在让江湖多了一份温暖。",
    traits: ["理想主义", "同理心", "洞察", "奉献"],
    match: "适合：长兵、辅助心法"
  },
  "INFP": {
    name: "惊鸿",
    title: "惊鸿游侠",
    description: "你如同燕云中的惊鸿游侠，追求内心的自由与真实。你有着丰富的情感和独特的审美，在刀光剑影中保持着那份诗情画意。你的故事，将成为江湖中最美的传说。",
    traits: ["浪漫", "理想主义", "真诚", "艺术气质"],
    match: "适合：剑法、轻功"
  },
  "ENFJ": {
    name: "执印",
    title: "执印之主",
    description: "你如同燕云中的执印之主，能够感召人心，让众人追随。你的言辞如同春风化雨，能够化解仇恨，凝聚人心。在你的领导下，江湖必将迎来和平。",
    traits: ["魅力", "感染力", "理想主义", "领导力"],
    match: "适合：刀、辅助心法"
  },
  "ENFP": {
    name: "浮游",
    title: "浮游浪子",
    description: "你如同燕云中的浮游浪子，自由自在，无拘无束。你喜欢结交各路朋友，经历各种奇遇。你的生活充满了惊喜和欢乐，是江湖中最靓丽的风景线。",
    traits: ["热情", "自由", "创意", "社交"],
    match: "适合：双镖、随意搭配"
  },
  "ISTJ": {
    name: "磐石",
    title: "磐石之人",
    description: "你如同燕云中的磐石之人，注重规矩和传承。你信守承诺，一丝不苟，是帮会最可靠的中坚力量。稳扎稳打的风格，让你能够基业长青。",
    traits: ["可靠", "务实", "负责", "传统"],
    match: "适合：韦陀、正法"
  },
  "ISFJ": {
    name: "暖阳",
    title: "暖阳守护",
    description: "你如同燕云中的暖阳守护，照顾着身边的每一个人。你不善言辞，却用行动表达着关爱。是你让江湖中的刀光剑影多了一份温情。",
    traits: ["忠诚", "包容", "温暖", "奉献"],
    match: "适合：辅助心法、治疗"
  },
  "ESTJ": {
    name: "铁壁",
    title: "铁壁将军",
    description: "你如同燕云中的铁壁将军，讲究效率和结果。你是帮会的顶梁柱，制定规矩并严格执行。在你的管理下，帮会井井有条，蒸蒸日上。",
    traits: ["执行", "果断", "管理", "务实"],
    match: "适合：霸体、防御型"
  },
  "ESFJ": {
    name: "春风",
    title: "春风仁者",
    description: "你如同燕云中温暖如阳的春风仁者，深受众人爱戴。你善于照顾他人的感受，是帮会中的润滑剂。有你在的地方，就充满了欢笑和温暖。",
    traits: ["热情", "善解人意", "社交", "责任感"],
    match: "适合：团队配合、辅助"
  },
  "ISTP": {
    name: "暗夜",
    title: "暗夜游魂",
    description: "你如同燕云中的暗夜游魂，沉默寡言，却一击必杀。你追求简洁和效率，不喜欢废话。你的刀，是江湖中最可怕的噩梦。",
    traits: ["冷静", "分析", "实用", "独立"],
    match: "适合：刺客流、暗器"
  },
  "ISFP": {
    name: "流云",
    title: "流云剑客",
    description: "你如同燕云中追求自由的流云剑客，淡泊名利，只做自己喜欢的事。你的剑术优美而实用，你的生活方式让无数人向往。",
    traits: ["随性", "艺术", "谦逊", "自由"],
    match: "适合：剑法、轻功"
  },
  "ESTP": {
    name: "烈焰",
    title: "烈焰豪杰",
    description: "你如同燕云中热血豪迈的烈焰豪杰，敢爱敢恨，快意恩仇。你喜欢冒险和挑战，是天生的行动派。在你的身上，体现了江湖最原始的热血与激情。",
    traits: ["行动力", "现实", "灵活", "魄力"],
    match: "适合：破竹鸢、吐火流"
  },
  "ESFP": {
    name: "醉梦",
    title: "醉梦狂歌",
    description: "你如同燕云中的醉梦狂歌，给周围的人带来无限欢乐。你喜欢热闹和社交，是帮会的气氛担当。有你在的地方，永远不会无聊。",
    traits: ["乐观", "热情", "表演", "即兴"],
    match: "适合：醉拳、太白醉月"
  }
}