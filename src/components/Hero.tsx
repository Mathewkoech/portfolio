import { useEffect, useRef } from "react";
import AnimatedElement from "./AnimatedElement";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = Math.min(800, window.innerHeight);
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(100, 100, 140, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const particleCount = Math.min(50, width / 20);
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true" 
      />
      <div className="container max-w-6xl mx-auto px-4 pt-16 md:pt-24 z-10">
        <div className="text-center">
          <AnimatedElement delay={200}>
            <div className="chip mb-3">Backend Engineer</div>
          </AnimatedElement>
          
          <AnimatedElement delay={400} className="mb-4">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
              Hi, I'm Mathew
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={600} className="mb-6">
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I build robust, scalable backend systems with Django, creating solid foundations for exceptional user experiences.
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="shine-effect px-8 py-3 rounded-md bg-primary text-primary-foreground transition-all hover:shadow-lg"
                aria-label="View My Work"
              >
                View My Work
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-md border border-input bg-transparent transition-all hover:bg-secondary"
                aria-label="Contact Me"
              >
                Contact Me
              </button>
              <Button 
                variant="outline" 
                className="gap-2 bg-secondary/50 hover:bg-secondary text-foreground"
                onClick={() => window.open('/resume.pdf', '_blank')}
                aria-label="Download Resume"
              >
                <Download size={16} />
                Resume
              </Button>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement delay={1000} className="mt-16 mb-6 text-center">
          <div className="animate-float">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mx-auto"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
