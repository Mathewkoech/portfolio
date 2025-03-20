
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedElement from "@/components/AnimatedElement";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.title = "404 | Page Not Found";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container max-w-md mx-auto px-4 text-center">
        <AnimatedElement animation="scale-in">
          <h1 className="text-8xl font-medium mb-4">404</h1>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <h2 className="text-2xl font-medium mb-6">Page not found</h2>
        </AnimatedElement>
        
        <AnimatedElement delay={400}>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={600}>
          <Link
            to="/"
            className="shine-effect inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground transition-all hover:shadow-lg"
          >
            <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Return Home
          </Link>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default NotFound;
