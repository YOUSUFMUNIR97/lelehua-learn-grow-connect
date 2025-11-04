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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Lighter Gradient Overlay for Better Image Visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-accent/65" />
          
          {/* Subtle Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Bilingual Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 shadow-lg animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-inter font-medium">Lelehua's Singapore Adventures 乐乐华了了家</span>
            </div>
            
            {/* Main Heading with Text Shadow for Better Readability */}
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-up leading-relaxed drop-shadow-2xl px-4 py-2" style={{ animationDelay: '0.1s', textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: '1.3' }}>
              <span className="block mb-3">Growing</span>
              <span className="text-shimmer block pb-2">Bilingual Minds</span>
              <span className="block mt-3">Together</span>
            </h1>
            
            {/* Chinese Subtitle */}
            <p className="font-inter text-2xl md:text-3xl mb-4 opacity-95 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              双语育儿 • 文化传承 • 社区成长
            </p>
            
            {/* English Description */}
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-md bg-black/10 backdrop-blur-sm rounded-2xl p-4" style={{ animationDelay: '0.3s' }}>
              Empowering families through bilingual education, cultural connection, and community support. 
              Building futures where children thrive in multiple languages and cultures.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/join">
                <Button size="lg" className="font-poppins font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="font-poppins font-semibold text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Explore Projects
                </Button>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all shadow-xl">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl mb-1">500+</div>
                <div className="text-sm opacity-95">Families</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all shadow-xl">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl mb-1">12+</div>
                <div className="text-sm opacity-95">Programs</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all shadow-xl">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl mb-1">100%</div>
                <div className="text-sm opacity-95">Love & Care</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all shadow-xl">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl mb-1">2</div>
                <div className="text-sm opacity-95">Languages</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
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
