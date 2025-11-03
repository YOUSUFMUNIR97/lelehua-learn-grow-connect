import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import communityImage from "@/assets/community.jpg";

const Home = () => {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Growing Bilingual Minds Together
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Empowering families through language, culture, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/join">
              <Button size="lg" variant="secondary" className="font-poppins font-semibold text-lg">
                Join Our Community
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="font-poppins font-semibold text-lg bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-primary">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
              Welcome to Lelehua
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lelehua is more than a brand—it's a vibrant community dedicated to nurturing bilingual learning 
              for children and families. We believe in the power of language to connect cultures, open minds, 
              and create lasting bonds within our community.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Educational Programs</h3>
                <p className="text-muted-foreground text-sm">
                  Engaging bilingual activities and curriculum designed for all ages
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with families who share your passion for bilingual learning
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Support & Resources</h3>
                <p className="text-muted-foreground text-sm">
                  Access tools, tips, and materials to support your bilingual journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Cultural Connection</h3>
                <p className="text-muted-foreground text-sm">
                  Celebrate diversity and build bridges between languages and cultures
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={communityImage} 
                alt="Lelehua community gathering" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="font-poppins font-bold text-4xl mb-6 text-foreground">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Become part of a supportive network of families committed to bilingual education. 
                Share experiences, access exclusive resources, and participate in enriching programs 
                designed to help your children thrive in a multilingual world.
              </p>
              <Link to="/join">
                <Button size="lg" className="font-poppins font-semibold">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
