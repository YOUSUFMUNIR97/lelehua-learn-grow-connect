import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { stories, prologue, bookOverview } from "@/data/stories";
import { BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

const Stories = () => {
  return (
    <div className="font-inter">
      <SEO 
        title="Read Bilingual Stories for Kids & Sustainable Learning | LeLeHua"
        description="Enjoy bilingual stories for children in Singapore featuring Chinese-English learning, cultural lessons, sustainability themes, and videos designed for fun family education."
        canonicalUrl="https://lelehua.com/stories"
      />
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Lelehua's Singapore Adventures
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {bookOverview.english.description}
            </p>
            <p className="text-lg text-muted-foreground italic">
              《乐乐华了了家：可持续世界的冒险故事》
            </p>
          </div>
        </div>
      </section>

      {/* Prologue */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h2 className="font-poppins font-bold text-3xl text-foreground">
                    {prologue.english.title}
                  </h2>
                </div>
                <h3 className="font-poppins text-xl mb-6 text-muted-foreground">
                  {prologue.chinese.title}
                </h3>
                <div className="space-y-4">
                  {prologue.english.content.slice(0, 3).map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/stories/prologue">
                    <Button size="lg">Read Full Prologue</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl mb-6 text-center">
              Educational Alignment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bookOverview.english.alignment.map((item, idx) => (
                <Card key={idx} className="bg-background">
                  <CardContent className="p-6">
                    <p className="text-foreground">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-bold text-4xl mb-12 text-center">
              Stories Collection
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <Link key={story.slug} to={`/stories/${story.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-primary/10 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="font-poppins font-bold text-2xl mb-2 text-foreground">
                        {story.title.english}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {story.title.chinese}
                      </p>
                      <p className="text-foreground mb-6">
                        {story.excerpt}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Key Themes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {story.themes.slice(0, 2).map((theme, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                            >
                              {theme}
                            </span>
                          ))}
                          {story.themes.length > 2 && (
                            <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                              +{story.themes.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button className="w-full">Read Story</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
