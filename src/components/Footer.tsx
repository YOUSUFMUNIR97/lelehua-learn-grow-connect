import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Facebook, Music } from "lucide-react";

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
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/share/1A4nnMMmMf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/lelehuacom?igsh=MTNydnZ3azgzYm1qbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@lelehuacom?si=BqR7lO1HOb8ptQeR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@lelehuacom?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <Music size={24} />
              </a>
              <a
                href="https://xhslink.com/m/94yhY0ZsRw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="RedCity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </a>
              <a
                href="mailto:admin@lelehua.com"
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
