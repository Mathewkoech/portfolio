import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-gradient-to-r from-indigo-700 to-indigo-900 text-white backdrop-blur-lg shadow-lg" 
          : "bg-transparent text-white"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-medium transition-opacity hover:opacity-80">
          Mathew
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm hover:text-primary-500 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-sm hover:text-primary-500 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-sm hover:text-primary-500 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm hover:text-primary-500 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <button className="md:hidden p-2 hover:bg-gray-700 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
