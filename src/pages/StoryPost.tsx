import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { stories, prologue } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Languages, Music, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StoryPost = () => {
  const { slug } = useParams();
  const [language, setLanguage] = useState<"english" | "chinese">("english");

  // Handle prologue separately
  if (slug === "prologue") {
    return (
      <div className="font-inter">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/stories">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Stories
                </Button>
              </Link>

              <div className="flex items-center justify-between mb-6">
                <h1 className="font-poppins font-bold text-5xl text-foreground">
                  {language === "english" ? prologue.english.title : prologue.chinese.title}
                </h1>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "english" ? "chinese" : "english")}
                >
                  <Languages className="mr-2 h-4 w-4" />
                  {language === "english" ? "中文" : "English"}
                </Button>
              </div>

              {prologue.audioUrl && (
                <Card className="bg-primary/5 border-primary/20 mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Music className="h-5 w-5 text-primary" />
                      <h3 className="font-poppins font-semibold text-lg">
                        {language === "english" ? "Listen to the Song" : "听歌曲"}
                      </h3>
                    </div>
                    <audio controls className="w-full" preload="metadata">
                      <source src={prologue.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <a
                      href={`/licenses/song-01-license.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      {language === "english" ? "View Song License" : "查看歌曲许可证"}
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-4xl mx-auto space-y-6">
              {(language === "english" ? prologue.english.content : prologue.chinese.content).map(
                (paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                )
              )}

              {(language === "english" ? prologue.english.lyrics : prologue.chinese.lyrics).length > 0 && (
                <Card className="bg-muted/50 border-primary/20 mt-8">
                  <CardContent className="p-8">
                    <h3 className="font-poppins font-semibold text-xl mb-4">
                      {language === "english" ? "Song Lyrics" : "歌词"}
                    </h3>
                    <div className="space-y-2 italic">
                      {(language === "english" ? prologue.english.lyrics : prologue.chinese.lyrics).map(
                        (line, idx) => (
                          <p key={idx} className="text-foreground">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </article>
          </div>
        </section>
      </div>
    );
  }

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-4xl mb-4">Story Not Found</h1>
          <Link to="/stories">
            <Button>Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/stories">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </Link>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-poppins font-bold text-5xl mb-3 text-foreground">
                  {language === "english" ? story.title.english : story.title.chinese}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {language === "english" ? story.title.chinese : story.title.english}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "english" ? "chinese" : "english")}
              >
                <Languages className="mr-2 h-4 w-4" />
                {language === "english" ? "中文" : "English"}
              </Button>
            </div>

            <p className="text-lg text-foreground italic">{story.excerpt}</p>

            {story.audioUrl && (
              <Card className="bg-primary/5 border-primary/20 mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Music className="h-5 w-5 text-primary" />
                    <h3 className="font-poppins font-semibold text-lg">
                      {language === "english" ? "Listen to the Story Song" : "听故事歌曲"}
                    </h3>
                  </div>
                  <audio controls className="w-full" preload="metadata">
                    <source src={story.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <a
                    href={story.audioUrl.replace("/audio/", "/licenses/").replace(/\.mp3$/, "-license.pdf").replace(/-story-\d+/, "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    {language === "english" ? "View Song License" : "查看歌曲许可证"}
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto space-y-12">
            {story.scenes.map((scene) => {
              const content = language === "english" ? scene.english : scene.chinese;
              return (
                <div key={scene.sceneNumber} className="space-y-4">
                  <h2 className="font-poppins font-bold text-3xl text-foreground">
                    {content.heading}
                  </h2>

                  {content.content.map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}

                  {content.lyrics && content.lyrics.length > 0 && (
                    <Card className="bg-muted/50 border-primary/20 mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-poppins font-semibold text-xl mb-4">
                          {language === "english" ? "Song Lyrics" : "歌词"}
                        </h3>
                        <div className="space-y-2 italic">
                          {content.lyrics.map((line, idx) => (
                            <p key={idx} className="text-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              );
            })}
          </article>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="themes" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="themes">Key Themes</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
                <TabsTrigger value="takeaways">Takeaways</TabsTrigger>
                <TabsTrigger value="values">Core Values</TabsTrigger>
              </TabsList>

              <TabsContent value="themes" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-2xl mb-4">Key Themes</h3>
                    <ul className="space-y-3">
                      {story.themes.map((theme, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                          <span className="text-lg">{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-2xl mb-4">Discussion Prompts</h3>
                    <ul className="space-y-4">
                      {story.discussionPrompts.map((prompt, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold mr-3 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-lg">{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="takeaways" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-2xl mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {story.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                          <span className="text-lg">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-2xl mb-4">Core Values</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {story.coreValues.map((value, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <p className="text-lg font-semibold text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPost;
