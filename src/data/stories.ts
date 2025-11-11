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
  "诺亚给他取名为Lelehua，在夏威夷语中意为“善于运用智慧的人”。诺亚希望，乐乐华能靠智慧和善良，去创造一个更美好的世界。",
  "十三岁那年，诺亚去世了。孤身一人的乐乐华开始在街头流浪。后来，他被夏威夷莉莉乌欧卡拉尼儿童基金会（Queen Liliʻuokalani Children's Trust）的工作人员发现，并被安置在檀香山（Honolulu）的“夏威夷受伤孩子之家”孤儿院（Hawaiian Kids Hurt Too orphanage）。",
  "在那里，音乐成了他心灵的避风港。他想起诺亚唱的摇篮曲，那些旋律让他重新感受到温暖与希望。通过网络广播，乐乐华发现自己能模仿不同语言、不同风格的歌手。他刻苦练习，立志有一天成为一名用音乐启发他人的老师。",
  "为了帮孤儿院筹款，他开始为游客唱歌。他友善的笑容与多语言的歌声吸引了许多人。一天，一位游客拍下他用夏威夷语与中英文混合演唱的歌曲，上传网络后迅速走红。",
  "新加坡爱加倍中学的校长张老师看到了这段视频，被他的故事深深打动。她亲自飞往夏威夷，向他提供全额奖学金，让他来新加坡求学。",
  "在义工马大妈的照顾下，乐乐华终于有了家、有了未来、有了归属感。他也获得了中文名字“乐乐华”，不仅保留了夏威夷名字的韵味，也带有温柔、优雅的中文意蕴——“乐在华文 / enjoying Chinese”，寓意他对语言的喜爱和文化的热情。",
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
   focus: '每个故事都聚焦于可持续生活的重要主题——从“丑蔬菜”和减少食物浪费，到生物多样性、清洁能源、共情能力，以及日常的绿色生活选择。这些故事旨在激发孩子的好奇心、创造力与同理心，同时培养双语能力与环境意识。',

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
  '乐乐华惊叹地说：“马大妈，那栋楼……像一座长着腿的丛林！”',
  '马大妈笑着回答：“那是新加坡市中豪亚酒店（Oasia Hotel Downtown）。新加坡人称它为‘天空花园’。这里的建筑师希望让大自然融入城市生活。”',
  '在夏威夷，乐乐华认识的大自然是辽阔而野性的——海滩、雨林、还有无边无际的天空。但在这里，自然与城市似乎在共舞。他心想：“人类真的能与大自然共生吗？而不只是并肩而居？”'
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
  '在爱加倍中学（Agape Secondary School），张老师站在讲台前，手里举着一张大海报，上面写着：《可持续城市》',
  '张老师说：“同学们，这学期的目标是：设计一个让新加坡更环保、更可持续的计划。你们可以从水、能源、食物或废物着手——要有创意，也要实际。”',
  '教室里顿时充满兴奋。乐乐华静静地坐着，脑海里浮现那座“会开花的大楼”。他心想：“要是我们在屋顶上种菜，也许……一个小小的花园，就能带来大大的改变。”'
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
            '他轻声对自己说：“这里，将成为我们的天空花园。”',
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
           '“哇！”妮娜惊呼道，“这就像空中的花园！”',
'张老师笑着点头：“乐乐华，这真是太棒了。你用实际行动证明了——可持续生活就从我们家门口开始。”'

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
  '那天夜里，城市灯火温柔地照亮屋顶。乐乐华抬头看着星空，轻声对爸爸诺亚说：“爸爸，我们不需要大片土地才能种下希望。只要一点空间……和一点爱。”',
  '不久，邻居们也开始在屋顶上种香草和花。社区渐渐被绿色包围，人们的心也变得更近。',
  '乐乐华明白——可持续并不是一个庞大的计划，而是一颗关心世界的心。'
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
  '早晨的空气带着淡淡的雨香。乐乐华背着书包，快步跑下组屋的楼梯，街道静悄悄的。',
  '在停车场，马大妈挥着手说：“今天的巴士又挤满了人，我们要迟到了！”',
  '乐乐华望向远方，只见一群人骑着脚踏车经过——有上班族、有带孩子的家长，甚至还有一位老伯伯哼着歌，骑着亮蓝色的单车。',
  '他转过头，小声对马大妈说：“也许我们可以换一种方式去学校？”',
  '马大妈笑着摇头：“你是说——骑脚踏车？我的腿会先抗议的！”',
  '但这个念头在乐乐华心中点燃了一道火光：也许，城市可以更安静、更绿色。'
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
  '在学校，张老师在布告板上贴出一张大海报：“减少、再用、骑起来！”',
  '她宣布说：“同学们，这周是‘绿色行动周’！每个班要记录看看，能减少多少次汽车出行。你们可以步行、骑脚踏车，或搭地铁。”',
  '乐乐华举手提议：“老师，我们可以写一首歌，让大家一起唱吗？”',
  '张老师笑了：“真是个好主意！音乐能打动人心，就像脚踏车能带动城市一样。”'
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
            '放学后，乐乐华借了一辆旧脚踏车。链条发出“吱吱”声，仿佛在为他伴奏。',
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
  '星期五，学校举行“绿色之心”大会。轮到乐乐华时，他抱起尤克里里，唱起《脚踏交响曲》。',
  '整个礼堂顿时充满了掌声与笑声，连校长也跟着节拍轻轻打拍子。',
  '张老师微笑着低声说：“乐乐华，你不仅节约了能源，还让大家充满了能量。”'
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
  '回到了家，马大妈推着一辆新单车走来。“我要骑去市场买菜！”她得意地说。',
  '乐乐华笑了：“那街道就会有更多音乐啦！”',
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
            "放学后，乐乐华坐在窗前，凝视楼下整齐排列的回收箱。蓝色——纸张，黄色——金属，绿色——玻璃。整洁、干净、标识清楚。",
            "他想起了夏威夷的垃圾回收中心。那是诺亚(Noa)发现他的地方——一个凌乱的世界，却充满可能。",
  '诺亚曾说：“一人的垃圾，也许就是另一人的希望。”',
  '乐乐华轻声说道：“如果诺亚能从无到有，我也可以尝试。”',
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
  "张老师面带微笑，站在教室前。",
  "张老师：“这个月，我们开展‘回收创造力挑战’。不仅要分类垃圾，更要把它们变成新东西——艺术、工具、音乐……任何创意都行！”",
  "乐乐华的眼睛亮了——音乐！他想起诺亚曾用瓶子、罐头和旧盒子做鼓，曾在海边演奏出属于他们的旋律。",
  "乐乐华：“张老师，我可以用垃圾做乐器吗？”",
  "张老师：“当然可以，乐乐华——让我们看看垃圾也能歌唱。”"
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
            "周末，乐乐华和马大妈去了社区回收处。他仔细挑选——汽水罐、旧绳子、空罐、废弃水瓶……",
           "马大妈疑惑地问：“这些旧东西真的能发出音乐吗？”",
  "乐乐华咧嘴笑：“它们已经有节奏了——我们只需要倾听。”",
            "回到家，他制作了：瓶子木琴——玻璃罐注入不同水量；罐子鼓——废橡胶包裹空罐；绳弦吉他——用渔线和破纸盒。",
            "当他敲打和弹奏时，声音融合成粗犷却美丽的旋律。"
          ],
          lyrics: [
            "随手一扔又一天，堆积在孩子笑声边",
            "碎瓶碎梦漂在溪，塑料河流向海里",
            "大地依旧慢慢转，轻声诉说心中愿",
            "每个碎片皆有家，失落终能得回答",
            "明日的回声在呼唤，穿越废墟与流转",
            "回收过去，修复伤感，让世界再次呼吸平安",
            "会丢弃的手能修补，未来由此不再糊涂",
            "玻璃纸张铁与铜，藏着故事未完成"
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
            "Casually tossed day by day, piling up beside children's play",
            "Broken bottles, broken dreams drifting in the stream, plastic rivers flowing to the sea",
            "The earth still slowly turns, softly voicing heartfelt yearns",
            "Every fragment has a home, the lost will find answers on their own",
            "Tomorrow's echo calls through the ruins and the flow",
            "Recycle the past, mend the sorrow, let the world breathe peace tomorrow",
            "Hands that discard can also repair, making the future clear and fair",
            "Glass, paper, iron, and tin, holding stories yet to begin"
          ]
        }
      },
      {
        sceneNumber: 4,
        chinese: {
          heading: "场景四：垃圾变宝藏展览",
          content: [
  "展览当天，乐乐华布置了他的“垃圾乐团”。",
  "他和几位朋友表演——有人敲罐子鼓，有人摇瓶盖沙锤，他弹着回收吉他。",
  "观众拍手、欢笑，甚至随着节奏起舞。",
  "张老师的眼睛闪着光：“乐乐华，你把废物变成了奇迹。”",
  "乐乐华微笑：“也让世界多了一点音乐。”"
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
            "晚上，马大妈发现乐乐华在清理乐器。",
           "马大妈：“你总能看到别人看不到的美，对吧？”",
  "乐乐华微笑：“诺亚常说——地球从不丢弃，它只是等待我们再次看到它的价值。”",
            "窗外，回收箱在路灯下闪着光——不只是容器，更是第二次机会的象征。"
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
  }
];
