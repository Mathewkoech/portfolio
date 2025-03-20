
import AnimatedElement from "./AnimatedElement";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedElement>
          <h2 className="section-title text-center">About Me</h2>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <p className="section-subtitle text-center">
            I'm a passionate backend engineer with expertise in Django, focused on building reliable and efficient systems.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <AnimatedElement delay={300} className="space-y-4">
            <div className="glass rounded-lg p-6 h-full">
              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in building scalable, maintainable systems that solve real problems. My work focuses on creating clean, well-documented code that stands the test of time.
              </p>
              <p className="text-muted-foreground mt-4">
                With a strong foundation in software architecture principles, I design systems that are not only functional but also optimized for performance and scalability.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={400}>
            <div className="glass rounded-lg p-6 h-full">
              <h3 className="text-xl font-medium mb-4">Professional Journey</h3>
              <p className="text-muted-foreground">
                My journey in software engineering has been driven by curiosity and a desire to master the art of backend development. I've worked on projects ranging from high-traffic web applications to complex data processing systems.
              </p>
              <p className="text-muted-foreground mt-4">
                Each project has contributed to my growth, teaching me valuable lessons about system design, performance optimization, and collaborative development.
              </p>
            </div>
          </AnimatedElement>
        </div>
        
        <div id="skills" className="mt-24">
          <AnimatedElement>
            <h2 className="section-title text-center">Technical Skills</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
              Here are the technologies and tools I work with to build robust backend systems.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <AnimatedElement delay={300}>
              <div className="glass rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h18m-18 10h18M5 7v10M19 7v10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Backend Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Django & Django REST Framework
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    FastAPI
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    API Design
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <div className="glass rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12" y2="16" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Databases</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    MongoDB
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Redis
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    SQL Optimization
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={500}>
              <div className="glass rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">DevOps & Infrastructure</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Docker & Kubernetes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    AWS & GCP
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Monitoring & Logging
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
