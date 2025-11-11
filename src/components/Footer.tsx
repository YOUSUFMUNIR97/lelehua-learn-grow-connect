import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl text-primary mb-4">Lelehua</h3>
            <p className="font-inter text-muted-foreground text-sm">
              Building bilingual futures for children and families through community, education, and cultural connection.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">Join Our Community</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lelehuacom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="mailto:hello@lelehua.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center font-inter text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lelehua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
