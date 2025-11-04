import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="font-inter">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              About Lelehua
            </h1>
            <p className="text-xl text-muted-foreground">
              Building bridges through bilingual education and cultural connection
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
                🌺 Lelehua Philosophy | 乐乐华的教育理念
              </h2>
              <p className="text-2xl font-chinese mb-4 text-primary">
                小时候了了者，至大亦能通晓事理。
              </p>
              <p className="text-lg italic text-muted-foreground mb-8">
                Those who understand clearly in childhood will also comprehend truth and reason when grown.
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Lelehua believes that every child carries the light of clarity — a curiosity that can illuminate 
                the world. True learning begins not with memorization, but with understanding, feeling, and wonder. 
                When children learn with joy (乐), they see with clarity (了了), and they grow into adults who 
                live with wisdom and compassion.
              </p>
              <p className="font-chinese">
                乐乐华象征着快乐与智慧的融合。我们相信，每个孩子天生拥有清明的心智与好奇的灵魂。学习不是死记硬背，
                而是感受、思考与探索的过程。唯有在快乐中学习，方能在成长中通晓事理，在生命中找到爱与意义。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eye className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
                🌏 Lelehua Vision Statement | 乐乐华愿景宣言
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">English:</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lelehua envisions a world where every child learns with joy and grows with clarity — a generation 
                  that listens deeply, loves boldly, and lives wisely.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Through stories, songs, and shared experiences, Lelehua seeks to nurture children who think critically, 
                  feel compassionately, and act courageously to make the world kinder and more sustainable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  He represents the bridge between cultures, the melody between hearts, and the light of understanding 
                  that leads the way for the future.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">Chinese (中文):</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-chinese">
                  乐乐华的愿景是一个每个孩子都能快乐学习、清晰成长的世界。他希望新一代的孩子能深度聆听、勇敢去爱、智慧生活。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-chinese">
                  通过故事、音乐与共感的体验，乐乐华启发孩子们——用思想去探索，用心灵去感受，用行动去改变，让世界更温柔、更可持续。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-chinese">
                  他象征着文化之间的桥梁，心灵之间的旋律，以及照亮未来的理解之光。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
                🌈 Lelehua Mission Statement | 乐乐华使命宣言
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">English:</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lelehua's mission is to inspire children to learn with joy, think with clarity, and live with love. 
                  Through stories, music, and imagination, Lelehua helps young hearts discover the beauty of the world 
                  and their place within it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  He represents a new generation that learns not through pressure, but through curiosity and compassion. 
                  His journey teaches that when we listen — to the Earth, to one another, and to our own hearts — we find 
                  harmony in both learning and life.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">Chinese (中文):</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-chinese">
                  乐乐华的使命是启发孩子们在快乐中学习、清晰中思考、爱中成长。通过故事、音乐与想象，
                  他带领孩子们发现世界的美丽，并找到自己在其中的意义。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-chinese">
                  他代表着新一代的孩子——不靠压力，而靠好奇与同理心学习。他的旅程告诉我们：当我们用心倾听大地、
                  倾听他人、倾听自己时，学习与生活都能奏出和谐的乐章。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
                🌟 Lelehua Values Manifesto | 乐乐华核心价值宣言
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">English:</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In Lelehua's world, every heartbeat of learning begins with love, courage, and purpose.
                  We believe that children are not empty vessels to be filled, but bright souls to be awakened.
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• We learn with <strong>Courage</strong>, daring to ask, to explore, to try again when we fall.</li>
                  <li>• We live with <strong>Love</strong>, sharing kindness, empathy, and care for people and the planet.</li>
                  <li>• We grow by being <strong>Authentic</strong>, staying true to who we are and what we believe.</li>
                  <li>• We act with <strong>Stewardship</strong>, taking responsibility for what we learn and how we give back.</li>
                  <li>• We strive for <strong>Significance</strong>, leaving the world a little brighter than we found it.</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6 italic">
                  To learn is to live. To love is to understand. This is the spirit of Lelehua — where every story, 
                  every song, and every smile is a step toward a more thoughtful, compassionate world.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">中文:</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-chinese">
                  在乐乐华的世界里，每一次学习的心跳，都源自爱、勇气与使命。我们相信，孩子不是等待被灌输的容器，
                  而是等待被唤醒的灵魂。
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground font-chinese">
                  <li>• 我们以<strong>勇气（Courage）</strong>学习——勇于提问、探索与再尝试。</li>
                  <li>• 我们以<strong>爱（Love）</strong>生活——以善意、同理与关怀连接人和自然。</li>
                  <li>• 我们以<strong>真诚（Authentic）</strong>成长——忠于自我与信念。</li>
                  <li>• 我们以<strong>管家精神（Stewardship）</strong>行动——为所学与所行负责。</li>
                  <li>• 我们以<strong>意义（Significance）</strong>为目标——让世界因我们而更光亮。</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6 italic font-chinese">
                  学习是生命的延伸，爱是理解的起点。这就是乐乐华的精神——在每一个故事、每一首歌、每一个微笑中，
                  让世界更柔软、更有思考、更充满爱。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center text-foreground">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3">Educational Programs</h3>
                <p className="text-muted-foreground">
                  Age-appropriate bilingual learning activities designed by experienced educators
                </p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3">Community Events</h3>
                <p className="text-muted-foreground">
                  Regular gatherings, workshops, and cultural celebrations for families
                </p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3">Parent Resources</h3>
                <p className="text-muted-foreground">
                  Guides, tips, and materials to support bilingual learning at home
                </p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3">Online Community</h3>
                <p className="text-muted-foreground">
                  Connect with other families, share experiences, and find support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
