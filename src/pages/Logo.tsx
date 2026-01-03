import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.jpeg";
import SEO from "@/components/SEO";

const Logo = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Bilingual Learning Identity and Logo for Kids in Singapore | LeLeHua"
        description="LeLeHua's logo reflects bilingual learning in Singapore, symbolizing Chinese-English education, creativity, sustainability values, and child-friendly cultural storytelling."
        canonicalUrl="https://lelehua.com/logo"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img src={logo} alt="Lelehua Logo" className="h-40 w-40 rounded-2xl shadow-xl" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-primary">
              Logo Design Overview
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              The visual identity of Lelehua's Singapore Adventures
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Symbol */}
            <Card className="p-8">
              <h2 className="font-poppins font-bold text-2xl mb-4 text-primary">Main Symbol</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                The central form of the logo is an interwoven "L" and "E", designed in the shape of a rising pyramid. 
                This symbolizes growth, learning, and aspiration. The gradient transitions from deep red at the base to 
                vibrant pink at the top right, conveying energy, creativity, and forward momentum. The angular geometry 
                represents structure and logic, while the color shift adds warmth and emotional depth — a perfect blend 
                of intellect and heart.
              </p>
            </Card>

            {/* Top Element */}
            <Card className="p-8">
              <h2 className="font-poppins font-bold text-2xl mb-4 text-primary">Top Element</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Atop the pyramid sits the Chinese character "了" (liǎo / le) in royal purple, representing understanding, 
                completion, and transformation — aligning with the bilingual spirit of Lelehua's Singapore Adventures 
                (乐乐华了了家). Its placement signifies enlightenment or realization emerging from learning.
              </p>
            </Card>

            {/* Overall Aesthetic */}
            <Card className="p-8">
              <h2 className="font-poppins font-bold text-2xl mb-4 text-primary">Overall Aesthetic</h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                The logo's minimalist yet dynamic aesthetic uses clean geometric lines and a smooth gradient, creating 
                a modern, tech-savvy visual language. The soft rounded corners of the background give it an approachable, 
                app-like quality — ideal for digital and educational platforms focused on youth, creativity, and cultural 
                connection.
              </p>
            </Card>

            {/* Logo Concept */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="font-poppins font-bold text-3xl mb-6 text-primary">
                Logo Concept: "LE" as 乐 (Joy, Enjoyment)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">Core Meaning</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    The letters "L" and "E" represent not just an English abbreviation but the Hanyu Pinyin of the 
                    Chinese character "乐" (lè) — meaning joy, happiness, and enjoyment. This duality beautifully 
                    bridges East and West, showing how language, culture, and learning can harmonize.
                  </p>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">Main Symbol</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    The L–E pyramid symbolizes growth through joy — learning that is uplifting and enjoyable. The 
                    ascending gradient from red (energy, passion) to pink (warmth, compassion) suggests that true 
                    progress comes from heartfelt enthusiasm and shared happiness. The pyramid form embodies stability 
                    and aspiration, while the interlocking of L and E conveys connection and unity — between ideas, 
                    cultures, and people.
                  </p>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">Top Element</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    The purple "了" adds a poetic and bilingual layer. In Chinese, "了" (le) marks completion or 
                    realization, so when combined with "乐 (le)", it evokes the phrase "乐了" — "found joy" or 
                    "become happy." This reinforces your brand's message of transformative learning through enjoyment — 
                    education that leads to emotional and intellectual fulfillment.
                  </p>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">Aesthetic Essence</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Clean lines, geometric precision, and a radiant gradient merge to create a modern, uplifting, and 
                    inclusive design. The logo balances academic professionalism with artistic expressiveness, making 
                    it ideal for an educational platform that celebrates both bilingualism and joyful discovery.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logo;
