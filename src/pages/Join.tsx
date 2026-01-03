import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    languages: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Welcome to Lelehua!",
      description: "Thank you for joining our community. We'll be in touch soon with next steps.",
    });

    // Reset form
    setFormData({
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      childAge: "",
      languages: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Access to all bilingual programs and workshops",
    "Monthly newsletter with resources and tips",
    "Exclusive community events and celebrations",
    "Priority registration for special programs",
    "Online parent support group",
    "Discounts on educational materials"
  ];

  return (
    <div className="font-inter">
      <SEO 
        title="Join Our Bilingual Learning Programme for Families in SG | LeLeHua"
        description="Join our bilingual learning programme in Singapore for kids and families. Support Chinese-English language development with childcare activities, stories, and sustainable media."
        canonicalUrl="https://lelehua.com/join"
      />
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground">
              Become part of a supportive network dedicated to bilingual learning
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
                Membership Benefits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                When you join Lelehua, you're not just enrolling in programs—you're becoming 
                part of a caring community committed to your family's bilingual journey.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">
                  Sign Up Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="childAge">Child's Age *</Label>
                    <Input
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="languages">Languages of Interest</Label>
                    <Input
                      id="languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      placeholder="e.g., English & Spanish"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Tell Us About Your Goals (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What are you hoping to achieve through bilingual learning?"
                    />
                  </div>

                  <Button type="submit" className="w-full font-poppins font-semibold">
                    Join Lelehua
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

export default Join;
