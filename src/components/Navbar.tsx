import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-playfair text-art-burgundy">
                ArtSpark
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/categories">
              <Button variant="ghost" className="text-foreground">
                Collections
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button variant="ghost" className="text-foreground">
                Art Guide
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
