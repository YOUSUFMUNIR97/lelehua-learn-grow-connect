import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Instagram, Youtube, Facebook, Music } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-inter">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Get in touch with any questions or feedback
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our programs? Want to learn more about Lelehua? 
                We're here to help! Fill out the form and we'll respond as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@lelehua.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@lelehua.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Coming soon
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Serving our community online and in-person
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Connect on Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/share/1A4nnMMmMf/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/lelehuacom?igsh=MTNydnZ3azgzYm1qbA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://youtube.com/@lelehuacom?si=BqR7lO1HOb8ptQeR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@lelehuacom?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="TikTok"
                  >
                    <Music className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://xhslink.com/m/94yhY0ZsRw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="RedCity"
                  >
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@lelehua.com"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full font-poppins font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
