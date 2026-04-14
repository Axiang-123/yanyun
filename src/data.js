export const questions = [
  {
    id: 1,
    title: "入世",
    question: "刚进游戏的第一件事是？",
    options: [
      { letter: "A", text: "打开好友列表找搭子", types: { E: 1, I: 0 } },
      { letter: "B", text: "看看有没啥活动和任务", types: { S: 1, N: 0 } },
      { letter: "C", text: "随便逛逛，走到哪算哪", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 2,
    title: "江湖",
    question: "你在江湖中最在意的是什么？",
    options: [
      { letter: "A", text: "广交天下豪杰", types: { E: 1, I: 0 } },
      { letter: "B", text: "勤学苦练提升实力", types: { T: 1, F: 0 } },
      { letter: "C", text: "寻找传说中的秘宝", types: { N: 1, S: 0 } },
      { letter: "D", text: "劫富济贫快意恩仇", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 3,
    title: "论剑",
    question: "面对强敌你会怎么做？",
    options: [
      { letter: "A", text: "正面硬刚，狭路相逢勇者胜", types: { T: 1, F: 0 } },
      { letter: "B", text: "智取为上，四两拨千斤", types: { N: 1, S: 0 } },
      { letter: "C", text: "叫上好友一起上", types: { E: 1, I: 0 } },
      { letter: "D", text: "先探虚实，再做打算", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 4,
    title: "奇遇",
    question: "偶遇一位受伤的陌生人，你会？",
    options: [
      { letter: "A", text: "毫不犹豫伸出援手", types: { F: 1, T: 0 } },
      { letter: "B", text: "先观察是否是陷阱", types: { T: 1, F: 0 } },
      { letter: "C", text: "交给官府处理", types: { S: 1, N: 0 } },
      { letter: "D", text: "给他一些银两让他自己去看大夫", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 5,
    title: "装备",
    question: "你更看重装备的什么属性？",
    options: [
      { letter: "A", text: "攻击力，越高越好", types: { T: 1, F: 0 } },
      { letter: "B", text: "防御力，保命要紧", types: { S: 1, N: 0 } },
      { letter: "C", text: "稀有度和外观", types: { N: 1, S: 0 } },
      { letter: "D", text: "看缘分，适合自己最重要", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 6,
    title: "任务",
    question: "你会优先完成哪种任务？",
    options: [
      { letter: "A", text: "主线剧情，揭示江湖秘闻", types: { N: 1, S: 0 } },
      { letter: "B", text: "日常委托，稳定收益", types: { S: 1, N: 0 } },
      { letter: "C", text: "多人副本，热闘非凡", types: { E: 1, I: 0 } },
      { letter: "D", text: "挑战极限，突破自我", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 7,
    title: "门派",
    question: "你更喜欢加入什么样的门派？",
    options: [
      { letter: "A", text: "少林武当，正道领袖", types: { S: 1, N: 0 } },
      { letter: "B", text: "明教丐帮，亦正亦邪", types: { P: 1, J: 0 } },
      { letter: "C", text: "逍遥派，独来独往", types: { I: 1, E: 0 } },
      { letter: "D", text: "不加入门派，做个散人", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 8,
    title: "性情",
    question: "你的性格更接近以下哪种？",
    options: [
      { letter: "A", text: "豪迈奔放，大块吃肉大碗喝酒", types: { E: 1, I: 0 } },
      { letter: "B", text: "沉稳内敛，深藏不露", types: { I: 1, E: 0 } },
      { letter: "C", text: "机智幽默，八面玲珑", types: { N: 1, S: 0 } },
      { letter: "D", text: "冷血残酷，快意泿仇", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 9,
    title: "绝学",
    question: "以下哪种武功最吸引你？",
    options: [
      { letter: "A", text: "降龙十八掌，刚猛无比", types: { T: 1, F: 0 } },
      { letter: "B", text: "凌波微步，轻盈飘逸", types: { P: 1, J: 0 } },
      { letter: "C", text: "九阴真经，内功深厚", types: { S: 1, N: 0 } },
      { letter: "D", text: "孤独九剑，无招胜有招", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 10,
    title: "日常",
    question: "你在游戏中大部分时间在做什么？",
    options: [
      { letter: "A", text: "和帮会兄弟聊天吹水", types: { E: 1, I: 0 } },
      { letter: "B", text: "埋头刷副本不不休", types: { J: 1, P: 0 } },
      { letter: "C", text: "在主城广场看人来人往", types: { S: 1, N: 0 } },
      { letter: "D", text: "到处触发奇遇和彩蛋", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 11,
    title: "纷争",
    question: "看到有人在主城恶意PK，你会？",
    options: [
      { letter: "A", text: "路见不平拔刀相助", types: { F: 1, T: 0 } },
      { letter: "B", text: "估算双方实力，决定是否插手", types: { T: 1, F: 0 } },
      { letter: "C", text: "快速绕开，不想惹麻烦", types: { I: 1, E: 0 } },
      { letter: "D", text: "通知官府或帮会管理", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 12,
    title: "情义",
    question: "朋友向你借游戏币，你会？",
    options: [
      { letter: "A", text: "二话不说直接给", types: { F: 1, T: 0 } },
      { letter: "B", text: "多少借一点，权当帮忙", types: { S: 1, N: 0 } },
      { letter: "C", text: "询问用途再决定", types: { J: 1, P: 0 } },
      { letter: "D", text: "找个借口拒绝", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 13,
    title: "秘境",
    question: "探索秘境时你更喜欢？",
    options: [
      { letter: "A", text: "跟着任务指引走", types: { J: 1, P: 0 } },
      { letter: "B", text: "自由探索每个角落", types: { P: 1, J: 0 } },
      { letter: "C", text: "和队友配合突破", types: { E: 1, I: 0 } },
      { letter: "D", text: "研究最优通关路线", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 14,
    title: "机缘",
    question: "你更相信什么能改变命运？",
    options: [
      { letter: "A", text: "勤奋努力，勤能补拙", types: { S: 1, N: 0 } },
      { letter: "B", text: "命运缘分，天注定", types: { N: 1, S: 0 } },
      { letter: "C", text: "结识贵人，互相成就", types: { E: 1, I: 0 } },
      { letter: "D", text: "自己的选择和勇气", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 15,
    title: "夜行",
    question: "深夜独自在游戏里，你会？",
    options: [
      { letter: "A", text: "蹲boss刷新点", types: { J: 1, P: 0 } },
      { letter: "B", text: "在河边静静地钓鱼", types: { I: 1, E: 0 } },
      { letter: "C", text: "找人切磋武艺", types: { E: 1, I: 0 } },
      { letter: "D", text: "随便逛逛，享受宁静", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 16,
    title: "秘术",
    question: "如果可以自定义技能，你想要？",
    options: [
      { letter: "A", text: "隐身术，来去无踪", types: { P: 1, J: 0 } },
      { letter: "B", text: "读心术，了解他人想法", types: { N: 1, S: 0 } },
      { letter: "C", text: "再生术，源源不断", types: { S: 1, N: 0 } },
      { letter: "D", text: "召唤术，呼唤援军", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 17,
    title: "敌友",
    question: "你如何看待游戏中的敌对势力？",
    options: [
      { letter: "A", text: "非黑即白，必须消灭", types: { T: 1, F: 0 } },
      { letter: "B", text: "立场不同而已，可以理解", types: { N: 1, S: 0 } },
      { letter: "C", text: "也可以化敲为友", types: { F: 1, T: 0 } },
      { letter: "D", text: "关我什么事，各玩各的", types: { I: 1, E: 0 } }
    ]
  },
  {
    id: 18,
    title: "秘境探索",
    question: "进入一个未知秘境，你的策略是？",
    options: [
      { letter: "A", text: "小心翼翼，一步一回头", types: { J: 1, P: 0 } },
      { letter: "B", text: "勇往直前，见招拆招", types: { P: 1, J: 0 } },
      { letter: "C", text: "和队友商量分工配合", types: { E: 1, I: 0 } },
      { letter: "D", text: "先观察地形，寻找捷径", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 19,
    title: "论道",
    question: "你更认同哪种江湖理念？",
    options: [
      { letter: "A", text: "人在江湖，身不由己", types: { S: 1, N: 0 } },
      { letter: "B", text: "相濡以沫，不如相忘于江湖", types: { N: 1, S: 0 } },
      { letter: "C", text: "天下英雄，唯我独尊", types: { T: 1, F: 0 } },
      { letter: "D", text: "与世无争，逍遥自在", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 20,
    title: "装备获取",
    question: "你更倾向于如何获得极品装备？",
    options: [
      { letter: "A", text: "氪金购买，省时省力", types: { T: 1, F: 0 } },
      { letter: "B", text: "副本掉落，稳扎稳打", types: { S: 1, N: 0 } },
      { letter: "C", text: "商人处精心选购", types: { J: 1, P: 0 } },
      { letter: "D", text: "运气使然，遇见就买", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 21,
    title: "帮会",
    question: "你希望帮会是一个什么样的存在？",
    options: [
      { letter: "A", text: "大家庭，互相帮助", types: { F: 1, T: 0 } },
      { letter: "B", text: "精英团队，讲究效率", types: { J: 1, P: 0 } },
      { letter: "C", text: "自由组织，随性而为", types: { P: 1, J: 0 } },
      { letter: "D", text: "强大势力，威震四方", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 22,
    title: "切磋",
    question: "与人切磋武艺时，你更看重？",
    options: [
      { letter: "A", text: "胜负结果", types: { T: 1, F: 0 } },
      { letter: "B", text: "交流学习", types: { N: 1, S: 0 } },
      { letter: "C", text: "展示风采", types: { E: 1, I: 0 } },
      { letter: "D", text: "点到为止", types: { F: 1, T: 0 } }
    ]
  },
  {
    id: 23,
    title: "奇遇",
    question: "下列哪种奇遇最让你心动？",
    options: [
      { letter: "A", text: "偶遇世外高人，传授绝世神功", types: { N: 1, S: 0 } },
      { letter: "B", text: "误入地下密室，发现无数财宝", types: { S: 1, N: 0 } },
      { letter: "C", text: "遇见知己，秉烛夜谈", types: { F: 1, T: 0 } },
      { letter: "D", text: "卷入江湖恩怨，化解纷争", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 24,
    title: "修行",
    question: "你更喜欢用哪种方式提升实力？",
    options: [
      { letter: "A", text: "闭关修炼，心无旁骛", types: { I: 1, E: 0 } },
      { letter: "B", text: "实战锻炼，历练江湖", types: { P: 1, J: 0 } },
      { letter: "C", text: "拜师学艺，少走弯路", types: { J: 1, P: 0 } },
      { letter: "D", text: "集思广益，融会贯通", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 25,
    title: "财富",
    question: "你更倾向于如何积累财富？",
    options: [
      { letter: "A", text: "带帮派打城战，争夺资源", types: { E: 1, I: 0 } },
      { letter: "B", text: "日常任务，稳扎稳打", types: { S: 1, N: 0 } },
      { letter: "C", text: "囤积居奇，低买高卖", types: { T: 1, F: 0 } },
      { letter: "D", text: "随缘而安，够用就好", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 26,
    title: "外观",
    question: "你更在意角色的哪个方面？",
    options: [
      { letter: "A", text: "酷炫的技能特效", types: { N: 1, S: 0 } },
      { letter: "B", text: "帅气的时装外观", types: { P: 1, J: 0 } },
      { letter: "C", text: "强力的属性数值", types: { S: 1, N: 0 } },
      { letter: "D", text: "独特的身份称号", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 27,
    title: "江湖路",
    question: "你希望自己的江湖之路是怎样的？",
    options: [
      { letter: "A", text: "波澜壮阔，轰轰烈烈", types: { E: 1, I: 0 } },
      { letter: "B", text: "稳扎稳打，步步为营", types: { J: 1, P: 0 } },
      { letter: "C", text: "神秘低调，暗中观察", types: { I: 1, E: 0 } },
      { letter: "D", text: "随性洒脱，随遇而安", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 28,
    title: "阵法",
    question: "你喜欢什么类型的阵法？",
    options: [
      { letter: "A", text: "攻击阵法，先发制人", types: { T: 1, F: 0 } },
      { letter: "B", text: "防御阵法，铜墙铁壁", types: { S: 1, N: 0 } },
      { letter: "C", text: "辅助阵法，攻防兼备", types: { F: 1, T: 0 } },
      { letter: "D", text: "隐匿阵法，来无影去无踪", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 29,
    title: "坐骑",
    question: "你更喜欢哪种类型的坐骑？",
    options: [
      { letter: "A", text: "骏马，江湖必备", types: { S: 1, N: 0 } },
      { letter: "B", text: "仙鹤，飘逸出尘", types: { N: 1, S: 0 } },
      { letter: "C", text: "猛虎，威风凛凛", types: { T: 1, F: 0 } },
      { letter: "D", text: "不要坐骑，轻功走天下", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 30,
    title: "独白",
    question: "如果要用一句话形容自己，你会说？",
    options: [
      { letter: "A", text: "“我只是想保护身边的人”", types: { F: 1, T: 0 } },
      { letter: "B", text: "“强大才是唯一的真理”", types: { T: 1, F: 0 } },
      { letter: "C", text: "“江湖之大，我想去看看”", types: { N: 1, S: 0 } },
      { letter: "D", text: "“纵情山水，快意人生”", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 31,
    title: "结义",
    question: "你更看重结义兄弟的什么品质？",
    options: [
      { letter: "A", text: "忠诚可靠，义薄云天", types: { F: 1, T: 0 } },
      { letter: "B", text: "武艺高强，并肩作战", types: { T: 1, F: 0 } },
      { letter: "C", text: "志同道合，趣味相投", types: { N: 1, S: 0 } },
      { letter: "D", text: "洒脱不羁，随性而为", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 32,
    title: "隐居",
    question: "如果你要隐居，会选择哪里？",
    options: [
      { letter: "A", text: "世外桃源，与世隔绝", types: { I: 1, E: 0 } },
      { letter: "B", text: "偏远小镇，宁静祥和", types: { S: 1, N: 0 } },
      { letter: "C", text: "深山古寺，修身养性", types: { J: 1, P: 0 } },
      { letter: "D", text: "哪里都不去，江湖就是家", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 33,
    title: "恩怨",
    question: "面对仇人，你会？",
    options: [
      { letter: "A", text: "君子报仇，十年不晚", types: { J: 1, P: 0 } },
      { letter: "B", text: "当场了结，不留后患", types: { T: 1, F: 0 } },
      { letter: "C", text: "放下屠刀，回头是岸", types: { F: 1, T: 0 } },
      { letter: "D", text: "冤冤相报何时了", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 34,
    title: "秘宝",
    question: "以下哪种秘宝最吸引你？",
    options: [
      { letter: "A", text: "倚天剑，武林至尊", types: { T: 1, F: 0 } },
      { letter: "B", text: "九转还魂丹，起死回生", types: { F: 1, T: 0 } },
      { letter: "C", text: "易筋经，内功绝学", types: { S: 1, N: 0 } },
      { letter: "D", text: "藏宝图，悬念丛生", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 35,
    title: "日常玩法",
    question: "你更喜欢哪种日常玩法？",
    options: [
      { letter: "A", text: "帮会战，热血沸腾", types: { E: 1, I: 0 } },
      { letter: "B", text: "钓鱼烹饪，悠闲自得", types: { S: 1, N: 0 } },
      { letter: "C", text: "刷副本，挑战极限", types: { J: 1, P: 0 } },
      { letter: "D", text: "逛论坛，看江湖八卦", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 36,
    title: "武学境界",
    question: "你认为武学的最高境界是？",
    options: [
      { letter: "A", text: "手中无剑，心中也无剑", types: { N: 1, S: 0 } },
      { letter: "B", text: "一剑倾心，无敌天下", types: { T: 1, F: 0 } },
      { letter: "C", text: "以柔克刚，四两拨千斤", types: { P: 1, J: 0 } },
      { letter: "D", text: "止戈为武，造福江湖", types: { F: 1, T: 0 } }
    ]
  },
  {
    id: 37,
    title: "江湖传闻",
    question: "哪种江湖传闻最让你感兴趣？",
    options: [
      { letter: "A", text: "某派掌门神秘失踪", types: { N: 1, S: 0 } },
      { letter: "B", text: "珍稀装备现世，各派争夺", types: { T: 1, F: 0 } },
      { letter: "C", text: "一段凄美的江湖爱情故事", types: { F: 1, T: 0 } },
      { letter: "D", text: "新副本开放，奖励丰厚", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 38,
    title: "待人",
    question: "你更欣赏哪种待人之道？",
    options: [
      { letter: "A", text: "坦诚相待，以心换心", types: { F: 1, T: 0 } },
      { letter: "B", text: "敬而远之，保持距离", types: { I: 1, E: 0 } },
      { letter: "C", text: "因人而异，灵活变通", types: { P: 1, J: 0 } },
      { letter: "D", text: "礼尚往来，不卑不亢", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 39,
    title: "历练",
    question: "你更倾向于体验哪种玩法？",
    options: [
      { letter: "A", text: "剧情任务，了解江湖秘闻", types: { N: 1, S: 0 } },
      { letter: "B", text: "竞技对战，证明实力", types: { T: 1, F: 0 } },
      { letter: "C", text: "休闲玩法，放松心情", types: { S: 1, N: 0 } },
      { letter: "D", text: "团队副本，配合默契", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 40,
    title: "江湖梦",
    question: "你的江湖梦是什么？",
    options: [
      { letter: "A", text: "成为一代宗师，开宗立派", types: { T: 1, F: 0 } },
      { letter: "B", text: "归隐山林，不问世事", types: { I: 1, E: 0 } },
      { letter: "C", text: "走遍天涯，阅尽人间风景", types: { N: 1, S: 0 } },
      { letter: "D", text: "守护一方平安，受人敬仰", types: { F: 1, T: 0 } }
    ]
  },
  {
    id: 41,
    title: "对决",
    question: "面对实力相当的对手，你会？",
    options: [
      { letter: "A", text: "全力以赴，胜负在此一举", types: { T: 1, F: 0 } },
      { letter: "B", text: "沉着冷静，寻找破绽", types: { J: 1, P: 0 } },
      { letter: "C", text: "享受过程，输赢其次", types: { P: 1, J: 0 } },
      { letter: "D", text: "邀人相助，以多胜少", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 42,
    title: "秘闻",
    question: "你更关注游戏中的什么内容？",
    options: [
      { letter: "A", text: "版本更新，新玩法体验", types: { N: 1, S: 0 } },
      { letter: "B", text: "平衡调整，策略研究", types: { J: 1, P: 0 } },
      { letter: "C", text: "社交互动，结识好友", types: { E: 1, I: 0 } },
      { letter: "D", text: "角色培养，数值提升", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 43,
    title: "师徒",
    question: "你更愿意收什么样的徒弟？",
    options: [
      { letter: "A", text: "天赋异禀，一学就会", types: { T: 1, F: 0 } },
      { letter: "B", text: "勤奋好学，踏实肯干", types: { S: 1, N: 0 } },
      { letter: "C", text: "乖巧听话，唯命是从", types: { J: 1, P: 0 } },
      { letter: "D", text: "放荡不羁，独具一格", types: { N: 1, S: 0 } }
    ]
  },
  {
    id: 44,
    title: "游历",
    question: "你更喜欢在游戏里哪里发呆？",
    options: [
      { letter: "A", text: "主城广场，看人来人往", types: { E: 1, I: 0 } },
      { letter: "B", text: "高山之巅，望尽天涯路", types: { N: 1, S: 0 } },
      { letter: "C", text: "小溪边，静静垂钓", types: { I: 1, E: 0 } },
      { letter: "D", text: "战场遗迹，感受沧桑", types: { S: 1, N: 0 } }
    ]
  },
  {
    id: 45,
    title: "义举",
    question: "看到新手被欺负，你会？",
    options: [
      { letter: "A", text: "路见不平，拔刀相助", types: { F: 1, T: 0 } },
      { letter: "B", text: "组队保护，帮他们练级", types: { E: 1, I: 0 } },
      { letter: "C", text: "在世界频道谴责", types: { N: 1, S: 0 } },
      { letter: "D", text: "漠不关心，各凭本事", types: { T: 1, F: 0 } }
    ]
  },
  {
    id: 46,
    title: "江湖规矩",
    question: "你认为江湖最重要的是什么？",
    options: [
      { letter: "A", text: "义气，兄弟情谊大过天", types: { F: 1, T: 0 } },
      { letter: "B", text: "实力，强者为尊", types: { T: 1, F: 0 } },
      { letter: "C", text: "规矩，无规矩不成方圆", types: { J: 1, P: 0 } },
      { letter: "D", text: "自由，快意恩仇", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 47,
    title: "终极目标",
    question: "你在游戏中的终极目标是什么？",
    options: [
      { letter: "A", text: "全服第一，独孤求败", types: { T: 1, F: 0 } },
      { letter: "B", text: "集齐所有时装和成就", types: { N: 1, S: 0 } },
      { letter: "C", text: "找到一群志同道合的伙伴", types: { E: 1, I: 0 } },
      { letter: "D", text: "体验所有玩法，不留遗憾", types: { P: 1, J: 0 } }
    ]
  },
  {
    id: 48,
    title: "江湖路远",
    question: "你觉得自己在江湖中是哪种人？",
    options: [
      { letter: "A", text: "意气风发的少年侠客", types: { E: 1, I: 0 } },
      { letter: "B", text: "深藏不露的世外高人", types: { I: 1, E: 0 } },
      { letter: "C", text: "玩世不恭的江湖浪子", types: { P: 1, J: 0 } },
      { letter: "D", text: "稳健持重的江湖老手", types: { J: 1, P: 0 } }
    ]
  },
  {
    id: 49,
    title: "终极秘术",
    question: "如果可以拥有一种江湖秘术，你想要？",
    options: [
      { letter: "A", text: "长生不老，永驻江湖", types: { S: 1, N: 0 } },
      { letter: "B", text: "穿梭时空，预知未来", types: { N: 1, S: 0 } },
      { letter: "C", text: "变身易容，随心所欲", types: { P: 1, J: 0 } },
      { letter: "D", text: "心灵控制，一呼百应", types: { E: 1, I: 0 } }
    ]
  },
  {
    id: 50,
    title: "江湖尾声",
    question: "当你离开江湖时，你希望被如何铭记？",
    options: [
      { letter: "A", text: "“他虽已远去，传说永流传”", types: { N: 1, S: 0 } },
      { letter: "B", text: "“江湖再无此人”", types: { I: 1, E: 0 } },
      { letter: "C", text: "“他留下了无数传奇故事”", types: { E: 1, I: 0 } },
      { letter: "D", text: "“来过，活过，爱过”", types: { F: 1, T: 0 } }
    ]
  }
]

export const personalities = {
  "INTJ": {
    name: "剑魔",
    title: "孤独的剑魔",
    description: "你如同江湖中传说中的剑魔，独来独往，剑术通神。你不屑于世俗的纷争，只追求武道的极致。孤独是你的常态，但正是这份孤独，让你能够心无旁骛地修炼，终成一代宗师。",
    traits: ["独立", "理性", "追求极致", "深藏不露"],
    match: "适合门派：纯阳宗、剑宗"
  },
  "INTP": {
    name: "智者",
    title: "隐世智者",
    description: "你如同江湖中的隐世智者，通晓天下武学，却从不轻易出手。你喜欢思考和研究，将武学融会贯通，形成自己独特的体系。虽然不善交际，但你的智慧让人敬佩。",
    traits: ["睿智", "思考者", "创新", "内敛"],
    match: "适合门派：逍遥派、学术界"
  },
  "ENTJ": {
    name: "盟主",
    title: "一代盟主",
    description: "你如同江湖中的一代盟主，天生具有领袖气质。你有远见卓识，能够统筹全局，让各路英雄为你效命。在你的带领下，帮会必将威震江湖，成就一番霸业。",
    traits: ["领导力", "决断力", "自信", "战略家"],
    match: "适合门派：明教、天机阁"
  },
  "ENTP": {
    name: "逍遥子",
    title: "逍遥游侠",
    description: "你如同江湖中的逍遥游侠，机智幽默，随性洒脱。你不拘泥于传统，喜欢创新和变化。总能在危机中找到转机，用智慧而非蛮力解决问题。",
    traits: ["机智", "创新", "善变", "魅力"],
    match: "适合门派：逍遥派、日月教"
  },
  "INFJ": {
    name: "圣者",
    title: "济世圣者",
    description: "你如同江湖中的济世圣者，心怀慈悲，想要拯救天下苍生。你有着崇高的理想和坚定的信念，愿意为了正义付出一切。你的存在让江湖多了一份温暖。",
    traits: ["理想主义", "同理心", "洞察", "奉献"],
    match: "适合门派：少林寺、普陀山"
  },
  "INFP": {
    name: "诗人",
    title: "江湖诗人",
    description: "你如同江湖中的浪漫诗人，追求内心的自由与真实。你有着丰富的情感和独特的审美，在刀光剑影中保持着那份诗情画意。你的故事，将成为江湖中最美的传说。",
    traits: ["浪漫", "理想主义", "真诚", "艺术气质"],
    match: "适合门派：移花宫、琴宗"
  },
  "ENFJ": {
    name: "教主",
    title: "一代教主",
    description: "你如同江湖中魅力四射的一代教主，能够感召人心，让众人追随。你的言辞如同春风化雨，能够化解仇恨，凝聚人心。在你的领导下，江湖必将迎来和平。",
    traits: ["魅力", "感染力", "理想主义", "领导力"],
    match: "适合门派：明教、圣火教"
  },
  "ENFP": {
    name: "浪子",
    title: "江湖浪子",
    description: "你如同江湖中潇洒的浪子，自由自在，无拘无束。你喜欢结交各路朋友，经历各种奇遇。你的生活充满了惊喜和欢乐，是江湖中最靓丽的风景线。",
    traits: ["热情", "自由", "创意", "社交"],
    match: "适合门派：丐帮、散人"
  },
  "ISTJ": {
    name: "掌门",
    title: "严谨掌门",
    description: "你如同江湖中严谨踏实的掌门，注重规矩和传承。你信守承诺，一丝不苟，是帮会最可靠的中坚力量。稳扎稳打的风格，让你能够基业长青。",
    traits: ["可靠", "务实", "负责", "传统"],
    match: "适合门派：少林寺、武当派"
  },
  "ISFJ": {
    name: "守护者",
    title: "温情守护者",
    description: "你如同江湖中温情默默守护者，照顾着身边的每一个人。你不善言辞，却用行动表达着关爱。是你让江湖中的刀光剑影多了一份温情。",
    traits: ["忠诚", "包容", "温暖", "奉献"],
    match: "适合门派：峨眉派、医仙谷"
  },
  "ESTJ": {
    name: "帮主",
    title: "铁血帮主",
    description: "你如同江湖中雷厉风行的帮主，讲究效率和结果。你是帮会的顶梁柱，制定规矩并严格执行。在你的管理下，帮会井井有条，蒸蒸日上。",
    traits: ["执行", "果断", "管理", "务实"],
    match: "适合门派：天地会、五岳剑派"
  },
  "ESFJ": {
    name: "仁者",
    title: "暖心仁者",
    description: "你如同江湖中温暖如阳的仁者，深受众人爱戴。你善于照顾他人的感受，是帮会中的润滑剂。有你在的地方，就充满了欢笑和温暖。",
    traits: ["热情", "善解人意", "社交", "责任感"],
    match: "适合门派：峨眉派、百花谷"
  },
  "ISTP": {
    name: "刺客",
    title: "冷血刺客",
    description: "你如同江湖中神秘的冷血刺客，沉默寡言，却一击必杀。你追求简洁和效率，不喜欢废话。你的刀，是江湖中最可怕的噩梦。",
    traits: ["冷静", "分析", "实用", "独立"],
    match: "适合门派：唐门、刺客联盟"
  },
  "ISFP": {
    name: "侠客",
    title: "自由侠客",
    description: "你如同江湖中追求自由的侠客，淡泊名利，只做自己喜欢的事。你的剑术优美而实用，你的生活方式让无数人向往。",
    traits: ["随性", "艺术", "谦逊", "自由"],
    match: "适合门派：华山剑宗、逍遥派"
  },
  "ESTP": {
    name: "豪杰",
    title: "江湖豪杰",
    description: "你如同江湖中热血豪迈的豪杰，敢爱敢恨，快意恩仇。你喜欢冒险和挑战，是天生的行动派。在你的身上，体现了江湖最原始的热血与激情。",
    traits: ["行动力", "现实", "灵活", "魄力"],
    match: "适合门派：明教、丐帮"
  },
  "ESFP": {
    name: "乐侠",
    title: "欢乐乐侠",
    description: "你如同江湖中天生乐观的乐侠，给周围的人带来无限欢乐。你喜欢热闹和社交，是帮会的气氛担当。有你在的地方，永远不会无聊。",
    traits: ["乐观", "热情", "表演", "即兴"],
    match: "适合门派：日月教、五毒教"
  }
}