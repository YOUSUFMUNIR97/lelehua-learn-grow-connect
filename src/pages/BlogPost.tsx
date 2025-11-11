import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-4xl mb-4">Article Not Found</h1>
          <Link to="/resources">
            <Button>Back to Resources</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticlesData = article.relatedArticles
    ? articles.filter((a) => article.relatedArticles?.includes(a.slug))
    : [];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>
            </Link>
            
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg">
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                {section.heading && (
                  <h2 className="font-poppins font-bold text-3xl mb-4 text-foreground">
                    {section.heading}
                  </h2>
                )}
                
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-lg text-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                {section.list && section.list.map((listItem, lIdx) => (
                  <div key={lIdx} className="mb-4">
                    {listItem.title && (
                      <p className="font-semibold text-lg mb-2">{listItem.title}</p>
                    )}
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      {listItem.items.map((item, iIdx) => (
                        <li key={iIdx} className="ml-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticlesData.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-poppins font-bold text-3xl mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticlesData.map((relatedArticle) => (
                  <Link key={relatedArticle.slug} to={`/resources/blog/${relatedArticle.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="p-6">
                        <span className="text-sm font-semibold text-primary">
                          {relatedArticle.category}
                        </span>
                        <h3 className="font-poppins font-bold text-xl mt-2 mb-3">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {relatedArticle.excerpt}
                        </p>
                        <span className="text-sm text-muted-foreground">
                          {relatedArticle.readTime}
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
