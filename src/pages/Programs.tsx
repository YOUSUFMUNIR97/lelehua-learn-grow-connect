import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import programsImage from "@/assets/programs.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Little Linguists",
      age: "Ages 3-5",
      icon: Sparkles,
      description: "Interactive playgroup sessions introducing young children to bilingual learning through songs, stories, and hands-on activities.",
      schedule: "Tuesdays & Thursdays, 10:00 AM - 11:30 AM"
    },
    {
      title: "Language Explorers",
      age: "Ages 6-9",
      icon: BookOpen,
      description: "Engaging workshops combining language practice with creative projects, games, and cultural exploration.",
      schedule: "Wednesdays, 3:30 PM - 5:00 PM"
    },
    {
      title: "Teen Talk Circle",
      age: "Ages 10-14",
      icon: Users,
      description: "Conversation clubs and project-based learning for older children to practice and refine their bilingual skills.",
      schedule: "Fridays, 4:00 PM - 5:30 PM"
    },
    {
      title: "Family Language Nights",
      age: "All Ages",
      icon: Calendar,
      description: "Monthly community gatherings where families come together for bilingual activities, cultural celebrations, and shared meals.",
      schedule: "First Saturday of each month, 5:00 PM - 7:00 PM"
    }
  ];

  return (
    <div className="font-inter">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl mb-6 text-foreground">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover engaging bilingual learning opportunities for every age and stage
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
                Learning Through Play & Connection
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At Lelehua, we believe that the best learning happens when children are engaged, 
                having fun, and feeling connected to their community. Our programs are carefully 
                designed to create joyful learning experiences that nurture both language skills 
                and cultural understanding.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each program is led by experienced educators who are passionate about bilingual 
                education and committed to creating inclusive, supportive environments where every 
                child can thrive.
              </p>
            </div>
            <div>
              <img 
                src={programsImage} 
                alt="Children engaged in bilingual activities" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-poppins text-2xl mb-1">
                          {program.title}
                        </CardTitle>
                        <p className="text-sm text-secondary font-semibold">{program.age}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{program.schedule}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community and give your child the gift of bilingual learning. 
              Spaces are limited, so reserve your spot today!
            </p>
            <Link to="/join">
              <Button size="lg" className="font-poppins font-semibold">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
