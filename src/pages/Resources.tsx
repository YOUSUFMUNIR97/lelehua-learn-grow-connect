import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Video, FileText, ExternalLink } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "5 Tips for Raising Bilingual Children",
      category: "Parenting Tips",
      excerpt: "Practical strategies for maintaining both languages at home and creating a rich bilingual environment for your children.",
      readTime: "5 min read"
    },
    {
      title: "The Benefits of Early Language Learning",
      category: "Research",
      excerpt: "Discover the cognitive, social, and academic advantages that bilingual children experience.",
      readTime: "7 min read"
    },
    {
      title: "Creating a Language-Rich Home Environment",
      category: "Home Activities",
      excerpt: "Simple ways to incorporate both languages into daily routines and make learning natural and fun.",
      readTime: "6 min read"
    },
    {
      title: "Celebrating Cultural Identity Through Language",
      category: "Culture",
      excerpt: "How bilingualism helps children connect with their heritage and develop a strong sense of identity.",
      readTime: "8 min read"
    }
  ];

  const downloadables = [
    {
      title: "Bilingual Storytime Guide",
      icon: BookOpen,
      description: "Curated list of bilingual books and reading strategies for different age groups"
    },
    {
      title: "Daily Language Practice Calendar",
      icon: FileText,
      description: "Monthly activity calendar with daily bilingual practice ideas for families"
    },
    {
      title: "Song & Rhyme Collection",
      icon: Video,
      description: "Traditional songs and rhymes in both languages with lyrics and audio guides"
    }
  ];

  return (
    <div className="font-inter">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Resources & Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert tips, helpful guides, and inspiring stories to support your bilingual journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Article */}
            <div className="mb-12">
              <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
                Featured Article
              </h2>
              <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="text-sm text-secondary font-semibold mb-2">
                    Sustainability & Education
                  </div>
                  <CardTitle className="font-poppins text-3xl mb-3">
                    Singapore's Food Sustainability: Teaching Our Children About the Future
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Learn about Singapore's 30 by 30 food sustainability goal and how we can teach 
                    our children about sustainable eating, local food production, and environmental 
                    responsibility. This aligns perfectly with Lelehua's values of stewardship and 
                    caring for our planet.
                  </p>
                  <a 
                    href="https://www.channelnewsasia.com/singapore/30-30-food-sustainability-goal-replace-fibre-protein-5441756?cid=internal_sharetool_androidphone_04112025_cna"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="font-poppins font-semibold">
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl mb-8 text-foreground">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {articles.map((article, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="text-sm text-secondary font-semibold mb-2">
                      {article.category}
                    </div>
                    <CardTitle className="font-poppins text-2xl">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" className="text-primary">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="font-poppins font-bold text-3xl mb-8 text-foreground">
              Downloadable Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {downloadables.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-poppins font-semibold text-xl mb-3 text-center">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-center mb-4">
                        {resource.description}
                      </p>
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive new articles, resources, and updates 
              directly in your inbox every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button className="font-poppins font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
