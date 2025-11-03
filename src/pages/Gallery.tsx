import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube, Image } from "lucide-react";

const Gallery = () => {
  return (
    <div className="font-inter">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Gallery & Media
            </h1>
            <p className="text-xl text-muted-foreground">
              See our community in action through photos and videos of our programs and events
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Instagram className="w-8 h-8 text-primary" />
                <h2 className="font-poppins font-bold text-3xl text-foreground">
                  Follow Us on Instagram
                </h2>
              </div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <Image className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground mb-6">
                    Visit our Instagram page to see daily updates, event photos, and more from our community.
                  </p>
                  <a
                    href="https://www.instagram.com/lelehuacom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-poppins font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-5 h-5" />
                    @lelehuacom
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Youtube className="w-8 h-8 text-primary" />
                <h2 className="font-poppins font-bold text-3xl text-foreground">
                  YouTube Channel
                </h2>
              </div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <Youtube className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground mb-6">
                    Subscribe to our YouTube channel for educational videos, program highlights, and bilingual learning tips.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-poppins font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Youtube className="w-5 h-5" />
                    Visit Our Channel
                  </a>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="font-poppins font-bold text-3xl mb-8 text-foreground">
                Recent Highlights
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="border-none shadow-lg overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Image className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground text-center">
                        Follow us on Instagram to see photos from our community events
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
