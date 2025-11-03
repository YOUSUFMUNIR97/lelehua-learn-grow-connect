import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Lelehua began with a simple yet powerful vision: to create a community where families 
                could come together to celebrate and nurture bilingual learning. Founded by parents and 
                educators passionate about language education, we recognized the need for a supportive 
                space where children could thrive linguistically and culturally.
              </p>
              <p>
                What started as small gatherings has grown into a vibrant community of families, educators, 
                and language enthusiasts. We've developed programs, resources, and initiatives that make 
                bilingual education accessible, engaging, and joyful for everyone involved.
              </p>
              <p>
                Today, Lelehua continues to evolve, always staying true to our core belief: that language 
                is not just a tool for communication, but a bridge that connects hearts, minds, and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Our Mission</h3>
                <p className="text-muted-foreground text-center">
                  To empower families through accessible, engaging bilingual education programs that 
                  foster language development, cultural appreciation, and community connection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Our Vision</h3>
                <p className="text-muted-foreground text-center">
                  A world where every child has the opportunity to grow up bilingual, equipped with 
                  the tools to navigate diverse cultures and build meaningful connections across languages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Our Values</h3>
                <p className="text-muted-foreground text-center">
                  Inclusivity, authenticity, community, and excellence in education. We believe in 
                  celebrating diversity and creating spaces where every family feels welcome and supported.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
