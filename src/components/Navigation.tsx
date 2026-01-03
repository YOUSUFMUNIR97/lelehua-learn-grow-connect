import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/logo", label: "Logo" },
    { path: "/projects", label: "Projects" },
    { path: "/resources", label: "Resources" },
    { path: "/stories", label: "Stories" },
    { path: "/gallery", label: "Gallery" },
    { path: "/join", label: "Join Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Lelehua Logo" className="h-10 w-10 rounded-lg" />
            <span className="font-poppins font-bold text-2xl text-primary">Lelehua</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="font-inter"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            {user ? (
              <Button
                variant="outline"
                className="font-inter ml-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="secondary" className="font-inter ml-2">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="w-full justify-start font-inter"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            {user ? (
              <Button
                variant="outline"
                className="w-full justify-start font-inter mt-2"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" className="w-full justify-start font-inter mt-2">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
