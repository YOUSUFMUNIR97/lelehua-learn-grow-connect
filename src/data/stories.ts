export interface Story {
  slug: string;
  title: {
    chinese: string;
    english: string;
  };
  excerpt: string;
  scenes: Array<{
    sceneNumber: number;
    chinese: {
      heading: string;
      content: string[];
      lyrics?: string[];
    };
    english: {
      heading: string;
      content: string[];
      lyrics?: string[];
    };
  }>;
  themes: string[];
  discussionPrompts: string[];
  takeaways: string[];
  coreValues: string[];
}

export const prologue = {
  chinese: {
    title: "序章: 乐乐华的人生旅程",
   content: [
  "乐乐华出生在艰难的环境中。刚出生就被遗弃的他，被一位名叫Noa（诺亚）的无家可归者在夏威夷茂宜岛（Kahului, Hawaii）的垃圾回收中心（Central Maui Landfill Refuse and Recycling Centre）发现。听到婴儿的哭声，诺亚心生怜悯，把他抱回去照顾。",
  "诺亚给他取名为Lelehua，在夏威夷语中意为"善于运用智慧的人"。诺亚希望，乐乐华能靠智慧和善良，去创造一个更美好的世界。",
  "十三岁那年，诺亚去世了。孤身一人的乐乐华开始在街头流浪。后来，他被夏威夷莉莉乌欧卡拉尼儿童基金会（Queen Liliʻuokalani Children's Trust）的工作人员发现，并被安置在檀香山（Honolulu）的"夏威夷受伤孩子之家"孤儿院（Hawaiian Kids Hurt Too orphanage）。",
  "在那里，音乐成了他心灵的避风港。他想起诺亚唱的摇篮曲，那些旋律让他重新感受到温暖与希望。通过网络广播，乐乐华发现自己能模仿不同语言、不同风格的歌手。他刻苦练习，立志有一天成为一名用音乐启发他人的老师。",
  "为了帮孤儿院筹款，他开始为游客唱歌。他友善的笑容与多语言的歌声吸引了许多人。一天，一位游客拍下他用夏威夷语与中英文混合演唱的歌曲，上传网络后迅速走红。",
  "新加坡爱加倍中学的校长张老师看到了这段视频，被他的故事深深打动。她亲自飞往夏威夷，向他提供全额奖学金，让他来新加坡求学。",
  "在义工马大妈的照顾下，乐乐华终于有了家、有了未来、有了归属感。他也获得了中文名字"乐乐华"，不仅保留了夏威夷名字的韵味，也带有温柔、优雅的中文意蕴——"乐在华文 / enjoying Chinese"，寓意他对语言的喜爱和文化的热情。",
  "从垃圾堆到校园，从孤单到希望，乐乐华的旅程告诉我们：可持续发展不仅是保护地球，更是培养心灵与善意。",
  "于是，《乐乐华了了家》就此展开——在这里，音乐、自然、语言与希望交织，谱写出一个关于可持续未来的故事集。"
]
,
    lyrics: [
      "睡吧，我亲爱的孩子",
      "海风轻轻抱着你",
      "山花细雨轻轻落",
      "Aloha ē, e moe mālie",
      "夜风轻轻唱，梦在海上飘",
      "星光在守护，指引回家的路",
      "别哭了，我的孩子",
      "河流在唱你的名字",
      "我看见远方的光",
      "那光在你心中闪亮",
      "Noa's voice still whispers on",
      "Rise, my Lelehua, rise with dawn",
      "The ocean whispers, 'Aloha ʻoe'",
      "But love will never fade away",
      "但爱永远不会离开",
      "Learning never ends in the school of life",
      "生命的课堂，学无止境",
      "夜风轻轻唱，梦在海上飘",
      "星光守护，温柔闪亮",
      "Aloha ē, my Lelehua",
      "河流轻唱你的名字"
    ]
  },
  english: {
    title: "Prologue: Lelehua's Life Journey",
    content: [
      "Lelehua was born into challenging circumstances. Abandoned at birth, he was discovered by Noa, a homeless man rummaging through valuables at the Central Maui Landfill Refuse and Recycling Centre in Kahului, Hawaii. Moved by the baby's cries, Noa took him in and cared for him with all his heart.",
      "He named the boy Lelehua, a Hawaiian word meaning 'skillful in applying mental powers.' Though Noa had survived through physical labor, he dreamed that Lelehua would one day use his mind and compassion to shape a better world.",
      "When Lelehua was thirteen, Noa passed away. Alone and grieving, he struggled to survive on the streets. His fate changed when representatives from the Queen Liliʻuokalani Children's Trust found him and brought him to the Hawaiian Kids Hurt Too orphanage in Honolulu. There, he faced the challenge of adapting to a structured life without family or friends.",
      "Music became his refuge. He remembered the lullabies Noa had sung—melodies that carried warmth and hope. Listening to online radio, Lelehua discovered he could mimic singers from different languages and genres. He practiced relentlessly, determined to one day become a music teacher who could inspire others through song.",
      "To help raise funds for the orphanage, he began performing for tourists. His kind smile and multilingual voice drew crowds. One day, a visitor recorded him singing a blend of Hawaiian, English, and Mandarin. The video went viral.",
      "Principal Zhang from Agape Secondary School in Singapore saw the video and was deeply moved. She flew to Hawaii and offered Lelehua a full scholarship to study in Singapore.",
      "Under the care of volunteer Auntie Ma, Lelehua finally had a home, a future, and a sense of belonging. He also received his Chinese name, 乐乐华 (Lè Lè Huá), which not only preserved the sound of his Hawaiian name but also carried gentle, elegant meanings in Chinese—'enjoying Chinese,' reflecting his love for language and culture.",
      "From the landfill to the classroom, from loneliness to hope—Lelehua's journey reminds us that sustainability is not just about protecting the planet; it's about nurturing hearts and kindness.",
      "And so, Lelehua's Singapore Adventures begins—a tapestry of music, nature, language, and hope, woven into stories for a sustainable future."
    ],
    lyrics: [
      "Sleep now, my beloved child",
      "The ocean breeze holds you tight",
      "Soft rain and flowers gently fall",
      "Aloha ē, e moe mālie",
      "Night winds softly sing, dreams drift on the sea",
      "Starlight watches over, guiding you home",
      "Don't cry, my child",
      "The river sings your name",
      "I see the light in the distance",
      "That light shines within your heart",
      "Noa's voice still whispers on",
      "Rise, my Lelehua, rise with dawn",
      "The ocean whispers, 'Aloha ʻoe'",
      "But love will never fade away",
      "但爱永远不会离开",
      "Learning never ends in the school of life",
      "生命的课堂，学无止境",
      "Night winds softly sing, dreams drift on the sea",
      "Starlight watches, gentle and bright",
      "Aloha ē, my Lelehua",
      "The river softly sings your name"
    ]
  }
};

export const bookOverview = {
  chinese: {
    title: "《乐乐华了了家：可持续世界的冒险故事》",
    description: "是一套融合想象力、音乐与环境教育的故事系列。通过温馨的双语故事，读者将与乐乐华（Lelehua）一同踏上探索之旅，发现可持续发展如何连接人、自然与文化。",
   focus: '每个故事都聚焦于可持续生活的重要主题——从"丑蔬菜"和减少食物浪费，到生物多样性、清洁能源、共情能力，以及日常的绿色生活选择。这些故事旨在激发孩子的好奇心、创造力与同理心，同时培养双语能力与环境意识。',

    alignment: [
      "可持续发展教育（Sustainability Education）：与《新加坡绿色发展蓝图 2030》（Singapore Green Plan 2030）相一致。",
      "双语与文化理解（Bilingualism & Cultural Understanding）：呼应李光耀双语基金（Lee Kuan Yew Fund for Bilingualism）的宗旨。",
      "品格与公民教育（Character & Citizenship Education, CCE）",
      "服务学习（Values-in-Action, VIA）",
      "社会与情绪学习（Social & Emotional Learning, SEL）"
    ]
  },
  english: {
    title: "Lelehua's Singapore Adventures: Stories for a Sustainable World",
    description: "A story series that blends imagination, music, and environmental education. Through heartwarming bilingual tales, readers journey with Lelehua as he discovers how sustainability connects people, nature, and culture.",
    focus: "Each story shines a light on a key aspect of sustainable living — from 'Ugly Vegetables' and food waste reduction to biodiversity, clean energy, empathy, and everyday green choices. The stories aim to spark curiosity, creativity, and compassion, while nurturing bilingual proficiency and environmental awareness.",
    alignment: [
      "Sustainability Education: Aligned with the Singapore Green Plan 2030",
      "Bilingualism & Cultural Understanding: Aligned with the Lee Kuan Yew Fund for Bilingualism",
      "Character & Citizenship Education (CCE)",
      "Values-in-Action (VIA)",
      "Social & Emotional Learning (SEL)"
    ]
  }
};

// Stories 1-3 (existing) plus Stories 4-8 (new from client documents)
export const stories: Story[] = [
  {
    slug: "the-garden-in-the-sky",
    title: {
      chinese: "天空花园",
      english: "The Garden in the Sky"
    },
    excerpt: "Lelehua discovers how a rooftop can become a sky garden, bringing sustainability home—one seed at a time.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：新的视野",
          content: [
            "乐乐华把双手贴在马大妈的组屋窗前——那是丹戎巴葛的 The Pinnacle@Duxton。",
            "从高处望去，新加坡像一幅活的地图：道路与地铁线交织延展，街道两旁的树木和花园点缀其中，一座座高楼向云端拔起。",
            "忽然，一栋建筑吸引了他的目光——整座大楼被绿色藤蔓包裹，红花点点攀上墙面。",
            "乐乐华惊叹地说：马大妈，那栋楼……像一座长着腿的丛林！",
            "马大妈笑着回答：那是新加坡市中豪亚酒店（Oasia Hotel Downtown）。新加坡人称它为'天空花园'。这里的建筑师希望让大自然融入城市生活。",
            "在夏威夷，乐乐华认识的大自然是辽阔而野性的——海滩、雨林、还有无边无际的天空。但在这里，自然与城市似乎在共舞。他心想：人类真的能与大自然共生吗？而不只是并肩而居？"
          ]
        },
        english: {
          heading: "Scene 1 — A New Horizon",
          content: [
            "Lelehua pressed his hands against Auntie Ma's HDB window at The Pinnacle@Duxton in Tanjong Pagar.",
            "From up high, Singapore looked like a living map: roads and MRT lines wove through the city, trees and gardens lined the streets, and tall buildings rose toward the clouds.",
            "Suddenly, one building caught his eye — it was wrapped in green vines, with red blossoms climbing up the walls.",
            "Lelehua gasped. 'Auntie Ma, that building… it's like a jungle with legs!'",
            "Auntie Ma chuckled. 'That's the Oasia Hotel Downtown. People here call it a sky garden. The architects wanted nature to live alongside the city.'",
            "In Hawaii, the nature Lelehua knew was wild and wide — beaches, rainforests, endless skies. But here, nature seemed to dance with the city. He wondered: Can humans truly live with nature — not just beside it?"
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：永续的课堂",
          content: [
            "在爱加倍中学（Agape Secondary School），张老师站在讲台前，手里举着一张大海报，上面写着：《可持续城市》",
            "张老师说：同学们，这学期的目标是：设计一个让新加坡更环保、更可持续的计划。你们可以从水、能源、食物或废物着手——要有创意，也要实际。",
            "教室里顿时充满兴奋。乐乐华静静地坐着，脑海里浮现那座'会开花的大楼'。他心想：要是我们在屋顶上种菜，也许……一个小小的花园，就能带来大大的改变。"
          ]
        },
        english: {
          heading: "Scene 2 — A Lesson in Sustainability",
          content: [
            "At Agape Secondary School, Principal Zhang stood at the front, holding a large poster that read: Sustainable Cities.",
            "'Students, your mission this term is to design a project that makes Singapore greener and more sustainable. You can focus on water, energy, food, or waste — be creative, but also practical.'",
            "The classroom buzzed with excitement. Lelehua sat quietly, thinking of the blooming building. What if we grew vegetables on a rooftop? he thought. Maybe a small garden could make a big difference."
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：屋顶花园计划",
          content: [
            "那天傍晚，乐乐华爬上马大妈组屋的屋顶。灰白的水泥地面空荡荡的，只有几盆枯花和一只嗡嗡作响的水箱。",
            "他轻声对自己说：这里，将成为我们的天空花园。",
            "马大妈提着一袋旧容器走了上来。他们把牛奶盒剪开当花盆，取来土壤，种下罗勒、菜心和薄荷。",
            "每一粒种子，都是一个承诺——生命与希望，可以在任何地方萌芽。",
            "每天, 乐乐华都会唱歌给植物听。那是爸爸诺亚（Noa）曾唱给他的歌，旋律轻柔，随风飘荡。"
          ],
          lyrics: [
            "轻轻闭上眼，宝贝",
            "海风唱歌，夜幕垂",
            "浪花拍岸轻轻回",
            "睡吧孩子，梦相随",
            "小星星，小海洋",
            "闪烁舞动入梦乡",
            "心中爱，慢慢长",
            "如花开放，如树飘香",
            "无论世界多辽远",
            "你有港湾不孤单",
            "每首歌，每阵风",
            "都带希望到你心中",
            "睡吧孩子，星光亮",
            "梦里有我深的爱"
          ]
        },
        english: {
          heading: "Scene 3 — The Rooftop Plan",
          content: [
            "That evening, Lelehua climbed to the rooftop of Auntie Ma's HDB block. The gray concrete was bare, except for a few wilted plants and a humming water tank.",
            "He whispered to himself, 'This will be our sky garden.'",
            "Auntie Ma arrived with a bag of old containers. They cut milk cartons into planters, added soil, and planted basil, choy sum, and mint.",
            "Each seed was a promise — that life and hope could grow anywhere.",
            "Every day, Lelehua sang to the plants. It was a song Noa had sung to him, soft and carried by the wind."
          ],
          lyrics: [
            "Close your eyes, baby",
            "The ocean sings, the night falls",
            "Waves gently return to shore",
            "Sleep now, child, with dreams to follow",
            "Little stars, little ocean",
            "Twinkling and dancing into dreamland",
            "Love in your heart slowly grows",
            "Like flowers blooming, like trees fragrant",
            "No matter how far the world may be",
            "You have a harbor, you're not alone",
            "Every song, every breeze",
            "Brings hope into your heart",
            "Sleep now, child, starlight bright",
            "In dreams I hold you with my love"
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：绿色奇迹",
          content: [
            "几个星期过去了。那些小苗越长越高，绿意覆盖了整片屋顶。蝴蝶翩翩，蜜蜂嗡嗡，屋顶变成了一片小小的绿洲。",
            "当张老师带着全班同学来参观时，大家都惊讶得睁大了眼睛。",
            "哇！妮娜惊呼道，这就像空中的花园！",
            "张老师笑着点头：乐乐华，这真是太棒了。你用实际行动证明了——可持续生活就从我们家门口开始。"
          ]
        },
        english: {
          heading: "Scene 4 — A Green Miracle",
          content: [
            "Weeks passed. The seedlings grew taller, and green covered the rooftop. Butterflies fluttered, bees buzzed — the rooftop had become a small oasis.",
            "When Principal Zhang brought the class to visit, everyone's eyes widened in amazement.",
            "'Wow!' Nina exclaimed. 'It's like a garden in the sky!'",
            "Principal Zhang smiled. 'Lelehua, this is wonderful. You've shown us that sustainable living starts right at our doorstep.'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：天空的启示",
          content: [
            "那天夜里，城市灯火温柔地照亮屋顶。乐乐华抬头看着星空，轻声对爸爸诺亚说：爸爸，我们不需要大片土地才能种下希望。只要一点空间……和一点爱。",
            "不久，邻居们也开始在屋顶上种香草和花。社区渐渐被绿色包围，人们的心也变得更近。",
            "乐乐华明白——可持续并不是一个庞大的计划，而是一颗关心世界的心。"
          ]
        },
        english: {
          heading: "Scene 5 — A Lesson from the Sky",
          content: [
            "That night, the city lights gently illuminated the rooftop. Lelehua looked up at the stars and whispered, 'Noa, we don't need a big field to plant hope. Just a little space… and a little love.'",
            "Soon, neighbors began planting herbs and flowers on their rooftops too. The community grew greener, and hearts grew closer.",
            "Lelehua understood — sustainability isn't a grand plan. It's a heart that cares for the world."
          ]
        }
      }
    ],
    themes: [
      "Urban agriculture and rooftop gardening",
      "Sustainability starts at home",
      "Community engagement and collective action",
      "Connection between nature and well-being"
    ],
    discussionPrompts: [
      "How can small actions (like planting a garden) create big changes?",
      "What does it mean to 'live with nature' instead of just 'beside it'?",
      "How can we bring green spaces into urban environments?",
      "Why is community involvement important in sustainability efforts?"
    ],
    takeaways: [
      "Sustainability begins with individual action",
      "Urban spaces can be transformed into green habitats",
      "Caring for plants teaches patience, responsibility, and hope",
      "Small efforts can inspire community-wide change"
    ],
    coreValues: [
      "Responsibility towards the environment",
      "Resilience and patience",
      "Community spirit and collaboration",
      "Care and compassion for living things"
    ]
  },
  {
    slug: "pedal-power-symphony",
    title: {
      chinese: "脚踏交响曲",
      english: "Pedal Power Symphony"
    },
    excerpt: "Through cycling and song, Lelehua learns that reducing carbon footprints can be both joyful and impactful.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：丹戎巴葛的早晨",
          content: [
            "早晨的空气带着淡淡的雨香。乐乐华背着书包，快步跑下组屋的楼梯，街道静悄悄的。",
            "在停车场，马大妈挥着手说：今天的巴士又挤满了人，我们要迟到了！",
            "乐乐华望向远方，只见一群人骑着脚踏车经过——有上班族、有带孩子的家长，甚至还有一位老伯伯哼着歌，骑着亮蓝色的单车。",
            "他转过头，小声对马大妈说：也许我们可以换一种方式去学校？",
            "马大妈笑着摇头：你是说——骑脚踏车？我的腿会先抗议的！",
            "但这个念头在乐乐华心中点燃了一道火光：也许，城市可以更安静、更绿色。"
          ]
        },
        english: {
          heading: "Scene 1 — Morning in Tanjong Pagar",
          content: [
            "The morning air carried a faint scent of rain. Lelehua, with his backpack on, hurried down the HDB staircase. The streets were quiet and still.",
            "At the car park, Auntie Ma waved her hand. 'Today's bus is packed again—we're going to be late!' she sighed.",
            "Lelehua looked into the distance and saw a group of cyclists passing by — office workers, parents with children, and even an old uncle humming cheerfully on a bright blue bicycle.",
            "He turned to Auntie Ma and whispered, 'Maybe we can go to school in a different way?'",
            "Auntie Ma laughed and shook her head. 'You mean — cycling? My legs would protest first!'",
            "But the idea sparked something in Lelehua's heart: Maybe the city could be quieter, greener."
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：绿色挑战",
          content: [
            "在学校，张老师在布告板上贴出一张大海报：减少、再用、骑起来！",
            "她宣布说：同学们，这周是'绿色行动周'！每个班要记录看看，能减少多少次汽车出行。你们可以步行、骑脚踏车，或搭地铁。",
            "乐乐华举手提议：老师，我们可以写一首歌，让大家一起唱吗？",
            "张老师笑了：真是个好主意！音乐能打动人心，就像脚踏车能带动城市一样。"
          ]
        },
        english: {
          heading: "Scene 2 — The Green Challenge",
          content: [
            "At school, Principal Zhang posted a large sign on the bulletin board: 'Reduce, Reuse, Ride!'",
            "'Students, this is Green Action Week! Each class will track how many car trips we can reduce. You can walk, cycle, or take the MRT.'",
            "Lelehua raised his hand. 'Principal Zhang, can we write a song to get everyone singing?'",
            "Principal Zhang smiled. 'What a great idea! Music moves hearts, just like bicycles move cities.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：车轮的旋律",
          content: [
            "放学后，乐乐华借了一辆旧脚踏车。链条发出吱吱声，仿佛在为他伴奏。",
            "他沿着滨海湾公园连道骑行。海风拂面，鸟儿掠过天际，城市在阳光下闪耀。",
            "忽然，一段旋律在他脑海中浮现——轻盈、充满希望，像城市的心跳。他边骑边唱了起来："
          ],
          lyrics: [
            "脚踏的力量轻轻又干净",
            "穿过公园让空气更清新",
            "车轮虽小心却很宽广",
            "当我们骑行城市也歌唱",
            "微风吹过发梢飞扬",
            "阳光洒在前进方向",
            "每一步都充满希望",
            "这节奏多悠扬",
            "骑行在路上自由飞翔",
            "绿色生活是我们的向往",
            "穿过大街小巷的时光",
            "让快乐在心中荡漾"
          ]
        },
        english: {
          heading: "Scene 3 — Melody of the Wheels",
          content: [
            "After school, Lelehua borrowed an old bicycle. The chain squeaked softly, as if providing background music.",
            "He cycled along the Marina Bay park connector. The sea breeze touched his face, birds swept across the sky, and the city gleamed in the sunlight.",
            "Suddenly, a melody came to him — light, hopeful, like the city's heartbeat. He began to sing as he pedaled:"
          ],
          lyrics: [
            "The power of pedaling, gentle and clean",
            "Through the park, the air feels fresh and green",
            "Wheels may be small, but hearts are wide",
            "When we ride, the city sings with pride",
            "Breeze through my hair as it flies",
            "Sunshine lights the path ahead in the skies",
            "Every step filled with hope",
            "This rhythm helps us cope",
            "Riding free on the open road",
            "Green living is the dream we hold",
            "Through streets and lanes we go",
            "Joy fills our hearts with a warm glow"
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：学校大会",
          content: [
            "星期五，学校举行'绿色之心'大会。轮到乐乐华时，他抱起尤克里里，唱起《脚踏交响曲》。",
            "整个礼堂顿时充满了掌声与笑声，连校长也跟着节拍轻轻打拍子。",
            "张老师微笑着低声说：乐乐华，你不仅节约了能源，还让大家充满了能量。"
          ]
        },
        english: {
          heading: "Scene 4 — The School Assembly",
          content: [
            "On Friday, the school held a 'Green Hearts' assembly. When it was Lelehua's turn, he picked up his ukulele and sang 'Pedal Power Symphony.'",
            "The hall filled with applause and laughter. Even the principal tapped along to the beat.",
            "Principal Zhang whispered with a smile, 'Lelehua, you didn't just save energy — you gave everyone energy.'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：会聆听的城市",
          content: [
            "回到了家，马大妈推着一辆新单车走来。我要骑去市场买菜！她得意地说。",
            "乐乐华笑了：那街道就会有更多音乐啦！",
            "他们并肩骑行在安静的街道上。铃声、笑声、风声交织成一首真正的脚踏交响曲。",
            "乐乐华忽然明白了：环保不仅是一种行动，更是一种倾听城市、与世界共鸣的生活方式。"
          ]
        },
        english: {
          heading: "Scene 5 — A City That Listens",
          content: [
            "Back home, Auntie Ma wheeled out a new bicycle. 'I'm riding to the market to buy vegetables!' she said proudly.",
            "Lelehua grinned. 'Then the streets will have even more music!'",
            "They rode side by side down the quiet street. Bell rings, laughter, and wind sounds wove together into a true Pedal Power Symphony.",
            "Lelehua realized: Being green isn't just an action — it's a way of life, a way of listening to the city and resonating with the world."
          ]
        }
      }
    ],
    themes: [
      "Sustainable transportation",
      "Reducing carbon footprint",
      "Community participation in green initiatives",
      "Joy and creativity in environmental action"
    ],
    discussionPrompts: [
      "How does cycling benefit both people and the environment?",
      "What are other ways we can reduce our carbon footprint in daily life?",
      "How can music and art inspire environmental action?",
      "Why is it important to make sustainability fun and accessible?"
    ],
    takeaways: [
      "Small transportation choices have big environmental impacts",
      "Sustainable living can be joyful and creative",
      "Music and art can inspire collective action",
      "Community participation strengthens green initiatives"
    ],
    coreValues: [
      "Environmental responsibility",
      "Creativity and expression",
      "Community engagement",
      "Health and well-being"
    ]
  },
  {
    slug: "treasure-in-the-trash",
    title: {
      chinese: "垃圾里的宝藏",
      english: "The Treasure in the Trash"
    },
    excerpt: "Lelehua transforms recycled materials into musical instruments, showing that waste can become wonder.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：垃圾场的回忆",
          content: [
            "放学后，乐乐华凝视着楼下整齐排列的回收箱。蓝色——纸张；黄色——金属；红色——塑料和玻璃；绿色——一般废物。干净、整洁、标签清晰。",
            "妮娜（Nina）从他身旁探出头来：你在看什么呀？",
            "乐乐华轻声说：这些让我想起夏威夷的垃圾回收中心……诺亚(Noa)找到我的地方。",
            "妮娜点点头，她知道乐乐华的故事，也知道那段记忆对他有多重要。",
            "诺亚常说：一人的垃圾，也许就是另一人的希望。",
            "乐乐华喃喃道：如果诺亚能从无到有……也许我也能试试。"
          ]
        },
        english: {
          heading: "Scene 1 — A Memory from the Landfill",
          content: [
            "Lelehua sat by his window after school, staring at the recycling bins downstairs. The blue one for paper, yellow for metal, green for glass — neat, clean, and labelled.",
            "He thought of the messy landfill back in Hawaii, where Noa had found him as a baby. Noa used to say, 'One man's trash can hold another man's hope.'",
            "Lelehua whispered softly, 'If Noa could make something from nothing, maybe I can too.'"
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：学校回收行动",
          content: [
            "第二天，张老师面带笑容走进教室。",
            "张老师：这个月，我们开始'回收创造力挑战'！不只是分类，还要把旧物变出新价值——艺术、工具、音乐……都可以！",
            "听到'音乐'，乐乐华眼睛亮了。妮娜也兴奋地举手：老师，我可以跟乐乐华一起做吗？我喜欢声音，我也想试试！",
            "乐乐华：张老师，我可以用垃圾做乐器吗？",
            "张老师：当然可以。妮娜，你也可以加入——让我们看看垃圾怎么变成歌。",
            "妮娜偷偷对乐乐华说：我们可以组成一个环保乐队！",
            "乐乐华笑了：Trash Orchestra——垃圾乐团！"
          ]
        },
        english: {
          heading: "Scene 2 — The School Recycling Drive",
          content: [
            "Principal Zhang stood at the front of the classroom, smiling warmly.",
            "'This month, we're launching the Recycling Creativity Challenge. Don't just sort your trash — turn it into something new: art, tools, music… anything creative!'",
            "Lelehua's eyes lit up — music! He remembered how Noa used to make drums from bottles, cans, and old boxes, playing melodies by the sea.",
            "'Principal Zhang, can I make musical instruments from trash?'",
            "'Of course, Lelehua — let's see if trash can sing.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：打造乐器",
          content: [
            "周末，乐乐华与马大妈去回收角，妮娜一听说也赶紧跑来加入。",
            "妮娜兴奋地指着一堆旧物：这个可以做摇铃！那个可以做响板！",
            "三人一边翻找一边讨论：汽水罐、玻璃瓶、空铁盒、塑料瓶、旧鱼线、瓶盖",
            "马大妈疑惑：这些真的能变成乐器吗？",
            "妮娜笑着：当然可以！声音就在里面！",
            "乐乐华：它们本来就在唱歌，我们只是帮忙听见。"
          ],
          lyrics: [
            "小小瓶子亮闪闪，",
            "巷口悄悄对我说。",
            "铁罐跳舞碰碰响，",
            "唱着故事不寂寞。",
            "报纸飞啊像只鸟，",
            "带着昨天的心跳。",
            "塑料花儿再盛开，",
            "变得漂亮又骄傲。",
            "转呀转，世界在转，",
            "旧东西也能变新鲜。",
            "丢掉的，都能再出现，",
            "让地球快乐每一天。"
          ]
        },
        english: {
          heading: "Scene 3 — Building the Instruments",
          content: [
            "Over the weekend, Lelehua and Auntie Ma visited the community recycling center. He carefully selected — soda cans, old ropes, empty containers, discarded water bottles…",
            "Auntie Ma asked skeptically, 'Can these old things really make music?'",
            "Lelehua grinned. 'They already have rhythm — we just need to listen.'",
            "Back home, he created: a Bottle Xylophone — glass jars filled with different water levels; a Can Drum — rubber-wrapped empty cans; a String Guitar — fishing line and a broken cardboard box.",
            "When he tapped and strummed, the sounds merged into a rough but beautiful melody."
          ],
          lyrics: [
            "Little bottles shining bright,",
            "Whisper softly in the morning light.",
            "Dancing cans go clang-clang more,",
            "Singing stories is not lonely anymore.",
            "Newspapers fly like a little bird,",
            "Carrying yesterday's beating word.",
            "Plastic flowers bloom once more,",
            "Beautiful and proud like never before.",
            "Round and round, the world spins bright,",
            "Old things turn new in a gentle light.",
            "Things once tossed can come again,",
            "Making Earth happy every day we spend."
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：垃圾变宝贝的展览",
          content: [
            "展览当天，乐乐华和妮娜搭建起他们的垃圾乐团舞台。",
            "玻璃瓶闪亮地排成音阶，铁罐鼓组骄傲地站在中央，瓶盖沙锤、响板也整齐摆放。",
            "妮娜拉着乐乐华：不要紧张，我们一起。",
            "同学们加入演奏——一个敲铁罐，一个摇沙锤，妮娜轻轻敲响响板，而乐乐华弹奏他的再生吉他。",
            "整座礼堂静静聆听。每一个音符，都像是从旧物中诞生的新生命。",
            "表演结束，掌声如海浪般涌来。妮娜握住乐乐华的手：我们成功了！",
            "张老师眼里闪着光：孩子们，你们把废物变成了奇迹。",
            "乐乐华：我们也把世界变得更有音乐。"
          ]
        },
        english: {
          heading: "Scene 4 — The Trash-to-Treasure Exhibition",
          content: [
            "On exhibition day, Lelehua set up his 'Trash Orchestra.'",
            "He and a few friends performed — someone beat the can drums, another shook bottle cap shakers, and he strummed the recycled guitar.",
            "The audience clapped, laughed, and even danced to the rhythm.",
            "Principal Zhang's eyes sparkled. 'Lelehua, you've turned waste into wonder.'",
            "Lelehua smiled. 'And added a little more music to the world.'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：重生的希望",
          content: [
            "晚上，马大妈发现乐乐华和妮娜一起在清理乐器。",
            "马大妈：华，你总能看到别人看不到的美，对吧？",
            "妮娜说：这些乐器都像被重新救活了。",
            "乐乐华点头：诺亚常说——地球不会丢弃东西。它只是等我们重新看见它们的价值。",
            "在灯下，回收箱闪着温暖的光——不再只是容器，而是属于他们、属于世界的第二次机会的象征。"
          ]
        },
        english: {
          heading: "Scene 5 — Hope Reborn",
          content: [
            "That evening, Auntie Ma found Lelehua cleaning his instruments.",
            "'You always see beauty where others don't, don't you?'",
            "Lelehua smiled. 'Noa used to say — the Earth never discards. It just waits for us to see its value again.'",
            "Outside the window, the recycling bins gleamed under the streetlights — not just containers, but symbols of second chances."
          ]
        }
      }
    ],
    themes: [
      "Waste reduction and recycling",
      "Creativity and resourcefulness",
      "Seeing value in the discarded",
      "Circular economy principles"
    ],
    discussionPrompts: [
      "How can we reduce waste in our daily lives?",
      "What creative ways can we reuse or upcycle items?",
      "Why is it important to see value in what others discard?",
      "How does recycling contribute to a sustainable future?"
    ],
    takeaways: [
      "Waste can be transformed into something valuable",
      "Creativity helps us see possibilities in the discarded",
      "Recycling is about giving materials a second life",
      "Individual creativity can inspire community-wide change"
    ],
    coreValues: [
      "Resourcefulness and creativity",
      "Environmental stewardship",
      "Resilience and adaptability",
      "Respect for materials and resources"
    ]
  },
  {
    slug: "the-rain-that-listens",
    title: {
      chinese: "倾听的雨",
      english: "The Rain That Listens"
    },
    excerpt: "When a rainy day ruins their outdoor adventure, Lelehua discovers that rain is not a disappointment—but a gift that teaches us to listen, give, and grow.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：雨天的小惊喜",
          content: [
            "乐乐华、妮娜和同学们正往植物园走去，天空忽然暗了下来。",
            "滴答……滴答……啪嗒！冰凉的雨点瞬间落下，把大家淋得透湿。",
            "哎呀！我的袜子都在游泳了！妮娜边叫边把外套举过头顶。",
            "同学们四处逃跑找地方躲雨。乐乐华和妮娜躲到一棵大榕树下，看着雨水顺着石板路流出一条条小溪。",
            "哎……我们的郊游完蛋了。妮娜皱着脸说。",
            "乐乐华指着花园角落里的沟渠、雨水桶与小池子。",
            "你看，妮娜。雨水没有浪费，它在帮花园喝水。",
            "妮娜眨眨眼：原来花园才是在郊游哦？",
            "乐乐华笑了。也许……雨天送来的，是另一种礼物。"
          ]
        },
        english: {
          heading: "Scene 1 — A Rainy Day Surprise",
          content: [
            "Lelehua, Nina, and their classmates were walking toward the Botanic Gardens when the sky suddenly darkened.",
            "Drip… drip… SPLASH! Cold raindrops poured down, soaking everyone instantly.",
            "'My socks are swimming!' Nina squealed, lifting her jacket over her head.",
            "Students ran in all directions trying to find shelter. Lelehua and Nina hid under a huge banyan tree, watching rainwater flow down the stone paths like little streams.",
            "'Our outing is totally ruined…' Nina muttered.",
            "But Lelehua pointed to the drains, rain barrels, and small ponds in the garden.",
            "'Look, Nina. The rain isn't being wasted. It's helping the garden to drink.'",
            "Nina blinked. 'So…the garden is having the real field trip?'",
            "Lelehua smiled. 'Maybe a rainy day brings a different kind of gift.'"
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：雨教会我们的事",
          content: [
            "回到学校后，大家还湿漉漉的。",
            "张老师微笑着说：同学们，雨水是非常宝贵的资源。如果我们收集起来，就能用来浇花、灌池塘，甚至冲厕所。这样可以减少浪费自来水。",
            "妮娜轻轻碰了碰乐乐华：难怪你刚刚一直盯着沟渠看。",
            "放学后，马大妈撑着湿答答的雨伞来接他们。哎哟，你们现在才懂啊？我以前住甘榜，家里有好多大陶瓮装雨水的！洗菜、浇花、冲凉……全部靠它！",
            "哇！雨水是你的助手？妮娜惊讶地问。",
            "当然啦！雨水是宝贝嘛。马大妈哈哈大笑。",
            "雨滴从雨伞尖滑落，落在地上轻轻作响。",
            "乐乐华心里轻轻想：雨会倾听土地，它给予，却不求回报。"
          ]
        },
        english: {
          heading: "Scene 2 — What the Rain Teaches Us",
          content: [
            "Back at school, everyone was still damp.",
            "Mrs. Zhang smiled and said, 'Rainwater is very precious. If we collect it, we can use it to water gardens, fill ponds, or even flush toilets. It helps us save treated water.'",
            "Nina nudged Lelehua. 'No wonder you kept staring at those drains.'",
            "After school, Auntie Ma arrived with her umbrella dripping on the floor.",
            "'Aiyo, only now you learn? When I lived in the kampung, we had big clay jars to collect rainwater! We used it to wash vegetables, water plants—even bathe!'",
            "'Whoa, rainwater was your helper?' Nina asked.",
            "'Of course! Rainwater is treasure,' Auntie Ma laughed.",
            "Raindrops slid off her umbrella tip, landing softly on the ground.",
            "Lelehua thought quietly: 'Rain listens to the land. It gives without asking for anything back.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：雨声里的歌",
          content: [
            "晚上，雨又轻轻落下。",
            "乐乐华坐在家里沙发，怀里抱着尤克里里；妮娜在旁边写作业；厨房里传来马大妈煲汤的香味。",
            "你又在写歌了，是吗？妮娜抬头问。",
            "乐乐华微微笑：不是我在写，是雨在唱。我在听。",
            "马大妈探出头：哎哟，那就让雨帮你伴奏咯！",
            "在雨声的轻拍中，乐乐华拨起温柔的旋律，唱道——"
          ],
          lyrics: [
            "雨点轻轻落下来，",
            "敲着树叶说悄悄话。",
            "小小水滴亮晶晶，",
            "把大地轻轻抱紧。",
            "听绕绕雨在唱歌，",
            "为花草带来新的快乐。",
            "一滴一滴都是礼物，",
            "让世界变得更舒服。"
          ]
        },
        english: {
          heading: "Scene 3 — The Song Hidden in the Rain",
          content: [
            "That night, the rain returned.",
            "Lelehua sat on the sofa with his ukulele; Nina worked on her homework beside him; and the smell of soup drifted out from Auntie Ma's kitchen.",
            "'You're writing a song again, aren't you?' Nina asked.",
            "Lelehua smiled. 'I'm not writing. The rain is singing. I'm just listening.'",
            "Auntie Ma poked her head out. 'Then let the rain be your backup singer!'",
            "With the gentle tapping of raindrops all around, Lelehua strummed a soft melody and sang—"
          ],
          lyrics: [
            "Raindrops softly fall from the sky,",
            "Tapping leaves as they whisper by.",
            "Tiny droplets shining bright,",
            "Gently holding the earth tonight.",
            "Listen — the rain's singing low,",
            "Bringing joy to the plants as they grow.",
            "Every drop is a precious gift,",
            "Giving the world a gentle lift."
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：分享灵感",
          content: [
            "周会那天，乐乐华抱着尤克里里走上台。",
            "前排的妮娜用力挥手；后排的小椅子上，马大妈笑得眼睛都眯起来。",
            "当乐乐华唱出第一句，全场立刻安静。",
            "同学们轻轻摇摆，老师们微笑聆听，连平时吵闹的男生也乖乖坐好。",
            "当最后一声落下，全场掌声如雨般倾泻。",
            "张老师轻声说：乐乐华，你让大家学会了用新的眼光看雨。",
            "马大妈抱了抱他。不管晴天雨天，你总能找到希望。"
          ]
        },
        english: {
          heading: "Scene 4 — Sharing Inspiration",
          content: [
            "On assembly day, Lelehua stepped onto the stage with his ukulele.",
            "Nina waved excitedly from the front row; Auntie Ma sat proudly at the back.",
            "When Lelehua began singing, the hall instantly grew quiet.",
            "Students swayed gently. Teachers closed their eyes and smiled.",
            "When the final note faded, applause poured down like a cheerful rain.",
            "Mrs. Zhang said softly, 'Lelehua, you helped everyone see rain differently.'",
            "Auntie Ma hugged him. 'Rain or shine, you always find hope.'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：雨后的启发",
          content: [
            "当天晚上，雨后的城市闪着柔亮的光。",
            "乐乐华与妮娜坐在屋顶，一边喝着马大妈泡的热茶，一边望着散开的云。",
            "乐乐华轻轻对天空、对诺亚说：爸爸……就算计划被打乱，也能找到新的希望。雨教我们倾听、给予、成长。",
            "第二天一早，他收集了空瓶子、水桶、塑料容器，和妮娜一起，把它们摆成小小的雨水站。",
            "妮娜笑道：哇，我们做了迷你蓄水池！",
            "乐乐华点头：每一滴都很重要。雨给了我们灵感，我们要好好利用。"
          ]
        },
        english: {
          heading: "Scene 5 — The Rain's Inspiration",
          content: [
            "That night, rain-washed city lights shimmered softly.",
            "Lelehua and Nina sat on the rooftop sipping warm tea, watching clouds drift apart.",
            "Lelehua whispered to the sky—and to Noa: 'Papa… even when plans fall apart, we can still find hope. The rain teaches us to listen, to give, and to grow.'",
            "The next morning, he gathered empty bottles and containers. Together with Nina, he arranged them into a little 'rain station.'",
            "Nina laughed, 'It's like our own mini reservoir!'",
            "Lelehua said, 'Every drop matters. The rain gave us this idea. We must use it well.'"
          ]
        }
      }
    ],
    themes: [
      "Water conservation and rainwater harvesting",
      "Resilience and reframing challenges",
      "Listening to nature",
      "Intergenerational knowledge sharing"
    ],
    discussionPrompts: [
      "How did Lelehua turn a disappointing rainy day into a learning opportunity?",
      "What can we learn from Auntie Ma's kampung experience about conserving water?",
      "How can we collect and use rainwater in our homes or schools?",
      "Why is it important to see rain as a resource rather than an inconvenience?"
    ],
    takeaways: [
      "Rain is a precious natural resource that can be collected and reused",
      "Challenges can become opportunities when we change our perspective",
      "Traditional practices often hold wisdom for sustainable living",
      "Small actions like rainwater collection can make a big difference"
    ],
    coreValues: [
      "Resilience and adaptability",
      "Gratitude for nature's gifts",
      "Environmental stewardship",
      "Intergenerational respect and learning"
    ]
  },
  {
    slug: "the-river-that-remembered",
    title: {
      chinese: "会记住的河流",
      english: "The River That Remembered"
    },
    excerpt: "At Bishan-Ang Mo Kio Park, Lelehua discovers that rivers hold memories—and when we restore nature, life returns.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：被遗忘的河流",
          content: [
            "周六早晨，空气刚被阳光轻轻唤醒。张老师带着'河流守护计划'的学生们来到碧山—宏茂桥公园。",
            "今天还有一位特别的陪同者——马大妈。她提着一壶水，笑着对孩子们说：今天的太阳有点调皮，大家记得补水呀。",
            "河水在阳光下闪着柔光，像一个重新醒来的朋友。",
            "妮娜兴奋地喊：河在对我们笑！",
            "乐乐华蹲下来，静静地听着。风声、叶声、鸟声、水声……像好多旧日子在轻轻说话。",
            "张老师说：这条河以前是直直的排水沟。后来我们让它回到自然，它才真正活起来。",
            "这句话轻轻触动了乐乐华的心。他突然想起了诺亚——那个曾在夏威夷保护他、爱他、陪他的大人。"
          ]
        },
        english: {
          heading: "Scene 1 — The Forgotten River",
          content: [
            "It was a Saturday morning, and the air had only just been awakened by sunlight. Ms. Zhang led her 'Adopt-a-River' students to Bishan–Ang Mo Kio Park.",
            "There was a special helper joining them today — Auntie Ma. Carrying a flask of water, she smiled and said, 'The sun is a little cheeky today. Remember to stay hydrated!'",
            "The river shimmered under the light, like a friend slowly waking up.",
            "'The river is smiling at us!' Nina exclaimed.",
            "Lelehua crouched down and listened quietly. The wind, the leaves, the birds, the water… all sounded like old memories whispering softly.",
            "Ms. Zhang said, 'This river used to be a straight concrete drain. When we let it return to nature, it came back to life.'",
            "Her words stirred something gently inside Lelehua. He suddenly thought of Noa — the man in Hawaii who had once protected him, cared for him, loved him."
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：河流的心事",
          content: [
            "孩子们沿着弯弯的河道散步。蜻蜓飞过，白鹭在浅水里踏步，小螃蟹从石缝里探出头。",
            "妮娜问：你觉得河流记得什么？",
            "乐乐华轻轻说：我觉得……它记得很多人、很多心事。也记得那些……我们不想忘的事情。",
            "他说着，心里浮现诺亚的笑容。河流的声音像是从很远的地方，把那段温暖带回来。",
            "就在那一刻，一首歌在他的心里慢慢生成。"
          ],
          lyrics: [
            "小河轻轻唱一句",
            "我记得你也记得自己",
            "小小河流弯弯走",
            "旧时光被轻轻带走",
            "石头下面藏着光",
            "水花跳着老歌谣唱"
          ]
        },
        english: {
          heading: "Scene 2 — The River's Secret Heart",
          content: [
            "The children followed the winding river path. Dragonflies skimmed the water, egrets stepped slowly through the shallows, and crabs peeked from the rocks.",
            "'What do you think the river remembers?' Nina asked.",
            "'I think… it remembers many people, many feelings,' Lelehua answered softly. 'And those things… we don't want to forget.'",
            "As he spoke, Noa's gentle smile surfaced in his mind. The sound of the river seemed to carry that warmth back to him from far away.",
            "At that moment, a song began forming in his heart."
          ],
          lyrics: [
            "The little river hums a line,",
            "'I remember you, and you remember me.'",
            "The winding river drifts along,",
            "Carrying yesterday's time away.",
            "Light hides beneath the stones,",
            "Water splashes to an ancient tune."
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：河流回应了",
          content: [
            "歌声像一束光落在水面上。下一秒，一圈圈亮亮的波纹荡开。",
            "妮娜瞪大眼：你看！它真的在回应！",
            "张老师点头：自然听得见真心的声音。",
            "乐乐华望着波纹，喃喃道：诺亚说得对……自然真的会记住。"
          ]
        },
        english: {
          heading: "Scene 3 — The River Responds",
          content: [
            "The song fell onto the water like a beam of warm light. A moment later, bright ripples spread across the surface.",
            "'Look! It's really responding!' Nina gasped.",
            "'Nature can hear a sincere heart,' Ms. Zhang nodded.",
            "Lelehua stared at the ripples and murmured, 'Noa was right… Nature truly remembers.'"
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：河里的新生命",
          content: [
            "他们继续走到一段最宽的河面处。阳光照亮了水底的水草、石头，还有重新回来的动物们。",
            "青蛙！小虾！乌龟！",
            "孩子们兴奋得跳起来。",
            "张老师微笑着说：自然一旦被修复，生命就会回来。"
          ]
        },
        english: {
          heading: "Scene 4 — New Life in the River",
          content: [
            "They continued walking to the widest bend of the river. Sunlight lit up the water plants, the stones, and the animals that had returned.",
            "'A frog!' 'A shrimp!' 'A turtle!'",
            "The children jumped with excitement.",
            "'When nature is restored, life comes back,' Ms. Zhang said with a smile."
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：河流把故事送向未来",
          content: [
            "夕阳染红天空，河面变金色的。孩子们该回家了，却都舍不得走。",
            "张老师问：今天，你们从河流身上学到了什么？",
            "妮娜想了想：河流记得过去，却还是向前走。",
            "乐乐华望着安静的河，说：我觉得……河在说——只要有人愿意倾听，它会继续把故事往前流。"
          ]
        },
        english: {
          heading: "Scene 5 — The River Sends Stories to the Future",
          content: [
            "The sunset painted the sky, turning the river gold. It was time to go home, but none of the children wanted to leave.",
            "'What did the river teach you today?' Ms. Zhang asked.",
            "Nina thought for a moment: 'The river remembers the past… but it still keeps moving forward.'",
            "Lelehua gazed at the quiet river. 'I think… the river is saying that as long as someone is willing to listen, it will keep carrying its stories forward.'"
          ]
        }
      }
    ],
    themes: [
      "Nature restoration and biodiversity",
      "Memory, healing, and emotional connection",
      "Listening to nature",
      "Intergenerational bonds and support"
    ],
    discussionPrompts: [
      "What does it mean for a river to 'remember'?",
      "How did the river's restoration bring life back to the ecosystem?",
      "Why did Lelehua think of Noa when listening to the river?",
      "How can we help restore nature in our own communities?"
    ],
    takeaways: [
      "Nature can be restored when we give it care and respect",
      "Rivers and ecosystems hold memories of the past",
      "Healing happens when we listen and connect with nature",
      "Our actions today shape the stories of tomorrow"
    ],
    coreValues: [
      "Environmental stewardship and restoration",
      "Resilience and healing",
      "Gratitude and remembrance",
      "Community care and support"
    ]
  },
  {
    slug: "the-ugly-vegetables",
    title: {
      chinese: "丑蔬菜也有春天",
      english: "The Ugly Vegetables"
    },
    excerpt: "At the market, Lelehua discovers that 'ugly' vegetables deserve a chance too—and learns that true value lies beyond appearance.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：菜市场里的惊喜",
          content: [
            "周六早晨，天空刚亮，乐乐华和妮娜跟着马大妈骑着脚踏车，来到丹戎巴葛的菜市场。",
            "摊位上摆满了亮丽的蔬菜：青翠的青菜、金黄的玉米、红得发亮的番茄。但在市场的一个角落，有一篮被冷落的蔬菜静静地放着。",
            "弯弯曲曲的胡萝卜、胖胖圆圆的番茄、歪歪扭扭的土豆、皱皱巴巴的苦瓜。",
            "妮娜皱着眉：这些……好像在做鬼脸。",
            "马大妈笑着说：它们只是长得特别，但营养一样好。只是大多数人喜欢挑外表漂亮的。",
            "乐乐华看着这些'被忽略'的蔬菜，心里微微一动。它们努力长大，却没人愿意看它们一眼。这感觉……他太熟悉了。",
            "他轻轻说：它们也值得一个机会。",
            "于是，他们带着那篮'丑蔬菜'回家了。"
          ]
        },
        english: {
          heading: "Scene 1 — A Surprise at the Market",
          content: [
            "Early Saturday morning, Lelehua and Nina followed Auntie Ma on their bicycles to the Tanjong Pagar market.",
            "The stalls were filled with vibrant vegetables—fresh green leafy greens, golden corn, bright red tomatoes. But in a quiet corner, there sat a basket of vegetables that had been left untouched.",
            "Curved carrots, chubby tomatoes, crooked potatoes, wrinkled bitter gourds.",
            "Nina frowned. 'These… look like they're making funny faces.'",
            "Auntie Ma chuckled. 'They just happen to look different, but they're just as nutritious.'",
            "Lelehua looked at the 'ignored' vegetables. They had grown with all their might, yet no one was willing to look at them. That feeling… he knew it far too well.",
            "Softly, he said, 'They deserve a chance too.'",
            "And so, they brought the basket of 'ugly vegetables' home."
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：丑蔬菜的第二次机会",
          content: [
            "星期一早上，张老师在班上宣布新的可持续发展作业：",
            "这次的主题是'减少食物浪费'。你们可以做菜、画海报、写歌或拍影片。",
            "妮娜马上举手：老师，我们要用丑蔬菜做料理！",
            "全班发出惊叹——但随着香味慢慢飘散，惊讶变成好奇，好奇变成期待。",
            "乐乐华一边切菜，一边轻声说：它们努力生长到现在，就像我们努力走到今天一样。"
          ]
        },
        english: {
          heading: "Scene 2 — A Second Chance",
          content: [
            "On Monday morning, Mrs. Zhang announced the next sustainability project in class:",
            "'This week's theme is reducing food waste. You may cook a dish, design a poster, write a song, or create a short video.'",
            "Nina immediately raised her hand. 'Teacher, we want to cook using the ugly vegetables!'",
            "The whole class reacted with surprise—but as the aroma filled the classroom, surprise turned into curiosity.",
            "As Lelehua chopped the vegetables, he whispered, 'They worked so hard to grow till now… just like we've worked hard to get here.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：教室响起的一首歌",
          content: [
            "教室安静下来。乐乐华深吸一口气，开始唱出他写下的歌。"
          ],
          lyrics: [
            "别把外表当成全部",
            "泥土里长出真实礼物",
            "弯弯胡萝卜藏着甜",
            "胖胖番茄红着脸",
            "丑丑蔬菜也有春天",
            "滋味比外表更温暖",
            "学会看见忽略地方",
            "世界就会更善良"
          ]
        },
        english: {
          heading: "Scene 3 — A Song That Filled the Classroom",
          content: [
            "The classroom quieted instantly. Lelehua took a deep breath and began to sing the song he had written."
          ],
          lyrics: [
            "Don't judge everything by its looks",
            "In the soil grow the truest gifts",
            "Curved little carrots hide their sweetness",
            "Chubby tomatoes blush bright red",
            "Ugly vegetables also have their springtime",
            "Their taste is warmer than their looks",
            "When we learn to see what's been ignored",
            "The world becomes a kinder place"
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：社区的丑蔬菜盛宴",
          content: [
            "周末，乐乐华、妮娜和马大妈在社区大厅举办一场'丑蔬菜盛宴'。",
            "桌上摆满色彩缤纷的料理：弯胡萝卜汤、爆浆番茄沙拉、土豆可乐饼、苦瓜蜂蜜片……",
            "邻居们尝了一口又一口，惊讶连连：竟然这么好吃！",
            "乐乐华笑着说：它们只是需要被看见。"
          ]
        },
        english: {
          heading: "Scene 4 — The Community 'Ugly Vegetable Feast'",
          content: [
            "Over the weekend, Lelehua, Nina, and Auntie Ma held an 'Ugly Vegetable Feast' in the community hall.",
            "The tables were filled with dishes of all colors: Curved carrot soup, bursting tomato salad, potato croquettes, honeyed bitter gourd slices…",
            "Neighbors took bite after bite, astonished: 'This tastes amazing!'",
            "Lelehua smiled. 'They just needed to be seen.'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：夜晚的领悟",
          content: [
            "晚风轻轻吹着，乐乐华把当天剩下的菜叶放进堆肥箱。",
            "他望着黑夜，轻声对诺亚(Noa)爸爸的记忆说：",
            "爸爸，即使是不完美的生命，也值得温柔对待，对吗？",
            "那一刻，他仿佛听见诺亚爸爸温柔的声音：孩子，被爱过的东西，都会发光。"
          ]
        },
        english: {
          heading: "Scene 5 — Nighttime Reflections",
          content: [
            "In the gentle night breeze, Lelehua put the remaining vegetable scraps into the compost bin.",
            "He looked into the darkness and softly spoke to the memory of Noa:",
            "'Papa… even imperfect lives deserve gentle care, right?'",
            "At that moment, he felt as though he heard Noa's soft voice: 'My child, anything that has been loved… will shine.'"
          ]
        }
      }
    ],
    themes: [
      "Food waste reduction",
      "Seeing value beyond appearance",
      "Empathy for the overlooked",
      "Sustainable consumption"
    ],
    discussionPrompts: [
      "Why do people often choose 'perfect-looking' vegetables over imperfect ones?",
      "How did Lelehua feel a connection with the 'ugly vegetables'?",
      "What can we do to reduce food waste in our homes and communities?",
      "How can we learn to see value in things that others might overlook?"
    ],
    takeaways: [
      "Value is not determined by appearance",
      "Food waste starts with small choices we make every day",
      "Everyone and everything deserves a chance to be seen",
      "Creativity can transform the overlooked into something beautiful"
    ],
    coreValues: [
      "Empathy and compassion",
      "Environmental responsibility",
      "Seeing worth in diversity",
      "Growth mindset and perseverance"
    ]
  },
  {
    slug: "the-floating-garden",
    title: {
      chinese: "漂浮花园",
      english: "The Floating Garden"
    },
    excerpt: "At Marina Barrage, Lelehua discovers aquaponics—a beautiful cycle where fish and plants help each other, just like people do.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：水上的花园",
          content: [
            "清晨的滨海堤坝风柔水静。乐乐华、妮娜和马大妈站在水边，看着漂浮农场轻轻随波起伏。",
            "生菜、番茄、香草在木筏上生长；木筏下的鱼儿游动时，在水面投下银色的影子。",
            "妮娜：哇……它们真的漂在水上！不会被浪冲走吗？",
            "马大妈笑：不会，这是水产种植。鱼在下面提供营养，植物在上面净化水。",
            "乐乐华：它们互相帮助，就像我们一样。"
          ]
        },
        english: {
          heading: "Scene 1 — A Garden on Water",
          content: [
            "It was early morning at Marina Barrage, with soft wind and calm water. Lelehua, Nina, and Auntie Ma stood by the shore, watching the floating farm rise and fall gently with the waves.",
            "Lettuce, tomatoes, and herbs grew on wooden rafts; beneath them, fish swam freely, casting silver shadows on the water surface.",
            "Nina: 'Wow… they're really floating on the water! Won't the waves wash them away?'",
            "Auntie Ma (smiling): 'No, this is aquaponics. The fish provide nutrients below, and the plants clean the water above.'",
            "Lelehua: 'They help each other—just like we do.'"
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：学习生态系统",
          content: [
            "学生们在木屋旁集合，张老师拿着写着'生态循环'字样的小板子。",
            "张老师：这里展示的是一个自给自足的生态系统：鱼产生营养 → 植物吸收营养 → 过滤后的水回到鱼池。这种方式节水、省地，也很环保。",
            "妮娜立刻举手：老师，那植物会不会吸太多？鱼会饿吗？",
            "张老师：不会的，水流是经过调节的，每一方都刚刚好。"
          ]
        },
        english: {
          heading: "Scene 2 — Learning the Ecosystem",
          content: [
            "The students gathered beside a wooden hut. Mrs. Zhang held a board with the words 'Ecosystem Cycle' written on it.",
            "Mrs. Zhang: 'This system is self-sustaining: Fish produce nutrients → plants absorb nutrients → filtered water returns to the fish tank. It saves water, saves space, and it's environmentally friendly.'",
            "Nina immediately raised her hand: 'Teacher, will the plants absorb too much? Will the fish go hungry?'",
            "Mrs. Zhang: 'No, the water flow is regulated so each part gets exactly what it needs.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：创意实验",
          content: [
            "回到学校后，乐乐华和妮娜一起制作迷你水产种植模型。",
            "透明水箱装着几条小鱼，植物架上立着小小的绿苗。",
            "模型完成后，乐乐华深吸一口气，对全班说：我写了一首歌，想把自然的循环唱给大家听。"
          ],
          lyrics: [
            "鱼儿轻轻游过水流",
            "水草摇摆迎着暖光柔",
            "循环的爱啊自然的节奏",
            "枯叶落下春天已在身后"
          ]
        },
        english: {
          heading: "Scene 3 — Creative Experiments",
          content: [
            "Back at school, Lelehua and Nina built a miniature aquaponics model together.",
            "A transparent tank held several little fish, and small young plants stood on the planting rack.",
            "When the model was finished, Lelehua said to the class: 'I wrote a song. I want to sing the cycle of nature to everyone.'"
          ],
          lyrics: [
            "Fish glide softly through the stream,",
            "Water plants sway toward the gentle gleam.",
            "The cycle of love, nature's beat untold,",
            "Fallen leaves fade, yet spring stands behind in gold."
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：分享知识",
          content: [
            "学校举办'漂浮花园日'。乐乐华和妮娜向家长、邻居演示三种简单'家庭水产种植'方法。",
            "一位家长惊讶地说：我真的可以在家种罗勒、养鱼吗？",
            "乐乐华：可以的，只要理解自然的节奏。",
            "妮娜：自然越合作，我们越轻松！"
          ]
        },
        english: {
          heading: "Scene 4 — Sharing the Knowledge",
          content: [
            "During 'Floating Garden Day,' Lelehua and Nina demonstrated three simple ways for families to make their own mini aquaponics setups.",
            "A parent exclaimed, 'I can really grow basil and raise fish at home?'",
            "Lelehua: 'Yes—once you understand the rhythm of nature.'",
            "Nina: 'The more we cooperate with nature, the easier life becomes!'"
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：水的启示",
          content: [
            "夕阳下的水库金光缓缓扩散。",
            "乐乐华：一点点水，也能养活那么多生命……只要我们珍惜它。",
            "妮娜：而我们也可以成为自然的一部分。",
            "张老师轻轻点头。自然永远愿意教我们，只要我们愿意倾听。"
          ]
        },
        english: {
          heading: "Scene 5 — Water's Lesson",
          content: [
            "The reservoir shimmered gold under the setting sun.",
            "Lelehua: 'A little water can support so much life… if only we cherish it.'",
            "Nina: 'And we can all be part of nature, too.'",
            "Mrs. Zhang nodded gently. 'Nature is always willing to teach us— as long as we're willing to listen.'"
          ]
        }
      }
    ],
    themes: [
      "Ecosystem interdependence",
      "Sustainable agriculture and aquaponics",
      "Cooperation and teamwork",
      "Water conservation"
    ],
    discussionPrompts: [
      "What is aquaponics and how do fish and plants help each other?",
      "Why is this system considered sustainable?",
      "How can we apply the idea of 'cooperation in nature' to our daily lives?",
      "What can we learn from natural cycles about living sustainably?"
    ],
    takeaways: [
      "Nature thrives through cooperation, not competition",
      "Small-scale sustainable systems can be created anywhere",
      "Understanding natural cycles helps us live more responsibly",
      "We are all part of nature's interconnected web"
    ],
    coreValues: [
      "Cooperation and interdependence",
      "Environmental stewardship",
      "Curiosity and inquiry",
      "Respect for natural systems"
    ]
  },
  {
    slug: "the-compost-symphony",
    title: {
      chinese: "堆肥交响曲",
      english: "The Compost Symphony"
    },
    excerpt: "After the Ugly Vegetables Feast, Lelehua discovers that food scraps can become soil—and writes a symphony celebrating nature's recycling.",
    scenes: [
      {
        sceneNumber: 1,
        chinese: {
          heading: "场景一：剩菜与灵感",
          content: [
            "厨房内，碟子叮当声。",
            "乐乐华正在帮马大妈收拾'丑蔬菜盛宴'后的餐桌。他看到一堆蔬菜皮、果皮、枯叶和残渣。",
            "妮娜探头地说：哇——这么多剩下的！全部要丢掉吗？",
            "乐乐华：不用！我们可以把它们变成土。",
            "妮娜：真的？这些……也能变？",
            "马大妈笑着回答：这就叫堆肥，是大自然最聪明的循环方法。",
            "乐乐华：我想做一个堆肥箱……还想写一首堆肥交响曲！"
          ]
        },
        english: {
          heading: "Scene 1 — Leftovers and Inspiration",
          content: [
            "In the kitchen, dishes clinked softly.",
            "Lelehua was helping Auntie Ma clean up after the 'Ugly Vegetables Feast.' He noticed a pile of vegetable peels, fruit skins, dry leaves, and scraps.",
            "Nina (peeking in): 'Whoa—so much leftover stuff! Are we throwing everything away?'",
            "Lelehua: 'No! We can turn them into soil.'",
            "Nina: 'Really? These… can become soil?'",
            "Auntie Ma (laughing): 'This is called composting. It's nature's smartest recycling method.'",
            "Lelehua: 'I want to make a compost bin… and compose a Compost Symphony!'"
          ]
        }
      },
      {
        sceneNumber: 2,
        chinese: {
          heading: "场景二：堆肥箱的诞生",
          content: [
            "学校花园，学生们围成一圈。",
            "张老师：同学们，今天我们来学习怎么做堆肥箱。把蔬菜残渣、干叶子和土壤一层一层叠起来。",
            "声音：落叶'沙沙'、果皮'咚'、土'扑扑'落下。",
            "乐乐华听着这些声音，轻声说：这些声音……好像在演奏。",
            "妮娜（凑过来）：你又听到大自然的音乐了？",
            "乐乐华点头：嗯，我觉得旋律快要出来了。"
          ]
        },
        english: {
          heading: "Scene 2 — The Birth of the Compost Bin",
          content: [
            "In the school garden, students gathered in a circle.",
            "Mrs. Zhang: 'Today, we're going to learn how to make a compost bin. We layer vegetable scraps, dry leaves, and soil one by one.'",
            "(Sound details: leaves rustling, fruit scraps thudding, soil pat-pat falling)",
            "Lelehua tilted his head, listening closely.",
            "Lelehua: 'These sounds… it feels like they're performing music.'",
            "Nina: 'You're hearing nature's music again?'",
            "Lelehua: 'Mm, I think the melody is coming to me.'"
          ]
        }
      },
      {
        sceneNumber: 3,
        chinese: {
          heading: "场景三：乐乐华作曲，妮娜开嗓",
          content: [
            "那晚，乐乐华坐在窗边，把白天听到的'堆肥声音'变成一首真正的旋律。简单、温暖、像土壤一样柔和。",
            "翌日清晨，校园里。",
            "乐乐华（冲向妮娜）：歌写好了！",
            "妮娜（翻看乐谱）：哇……好美！让我唱给你听。"
          ],
          lyrics: [
            "果皮轻轻落，",
            "叶子慢慢碎。",
            "落叶进土里，",
            "变成新养分。",
            "肥土香，肥土香，",
            "大地唱着慢慢的歌。",
            "旧东西，变新的家，",
            "小种子在里面发芽。"
          ]
        },
        english: {
          heading: "Scene 3 — Lelehua Composes, Nina Sings",
          content: [
            "That night, Lelehua sat by the window and turned the 'compost sounds' into a melody. It was simple, warm, gentle—like soil.",
            "The next morning at school—",
            "Lelehua: 'The song is ready!'",
            "Nina: 'Wow… it's beautiful! Let me sing it!'"
          ],
          lyrics: [
            "Peels fall softly,",
            "Leaves crumble slow.",
            "Fallen leaves sink into soil,",
            "Becoming food for life.",
            "Earthy scent, earthy scent,",
            "The earth sings a gentle song.",
            "Old things find a brand-new home,",
            "Tiny seeds begin to sprout."
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：堆肥音乐会",
          content: [
            "周末，组屋楼下空地，邻里聚集。",
            "乐乐华：大家好！这是我们写的《堆肥交响曲》，希望你们喜欢！",
            "妮娜笑着说：准备好了吗？我要开唱咯！",
            "妮娜独唱，乐乐华伴奏。",
            "邻居阿伯：哎哟，不错！原来堆肥也能这么好听的啊！",
            "孩子们跟着节奏跳舞，爷爷奶奶们点头微笑。"
          ]
        },
        english: {
          heading: "Scene 4 — The Compost Concert",
          content: [
            "On the weekend, neighbors gathered downstairs at the void deck.",
            "Lelehua: 'Hello, everyone! This is our song, The Compost Symphony. We hope you enjoy it!'",
            "Nina: 'Ready? Here we go!'",
            "(Nina sang beautifully; Lelehua accompanied her gently.)",
            "Neighbor Uncle: 'Wah! Didn't know composting could sound so nice!'",
            "Children danced to the rhythm, grandparents nodded to the beat."
          ]
        }
      },
      {
        sceneNumber: 5,
        chinese: {
          heading: "场景五：土壤的礼物",
          content: [
            "夜晚，屋顶花园，微风吹拂。",
            "两人把熟成的堆肥撒在花园的土壤上。",
            "妮娜：原来……看似没用的东西，也能重新长大。",
            "乐乐华：诺亚（Noa）爸爸曾说过，只要有人愿意照顾，所有东西都能变好。",
            "植物随风微微摇动，像在回应。",
            "城市灯光闪烁，像土里的星星。"
          ]
        },
        english: {
          heading: "Scene 5 — The Gift of Soil",
          content: [
            "Night. The rooftop garden. A soft breeze blew.",
            "The two sprinkled the finished compost onto the garden beds.",
            "Nina: 'So… things that look useless can really grow again.'",
            "Lelehua: 'Papa Noa always told me… if you care for something, it will become better.'",
            "Plants swayed gently in the wind, as if responding.",
            "City lights shimmered like tiny stars in the soil."
          ]
        }
      }
    ],
    themes: [
      "Composting and soil renewal",
      "Natural cycles and transformation",
      "Creativity and collaboration",
      "Caring for the Earth"
    ],
    discussionPrompts: [
      "What is composting and how does it help the environment?",
      "Why did Lelehua hear 'music' in the sounds of making compost?",
      "How can we start composting at home or school?",
      "What can we learn from nature about turning 'waste' into something valuable?"
    ],
    takeaways: [
      "Composting transforms waste into valuable soil",
      "Nature's cycles show us that nothing is truly wasted",
      "Creativity can make sustainability fun and memorable",
      "Caring for something helps it grow and flourish"
    ],
    coreValues: [
      "Creativity and resourcefulness",
      "Environmental stewardship",
      "Patience and care",
      "Collaboration and friendship"
    ]
  }
];
