
import { useState } from "react";
import AnimatedElement from "./AnimatedElement";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Erp Platform",
    description: "A scalable erp backend built with Django, featuring a comprehensive API, payment processing, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Django", "PostgreSQL", "Redis", "Docker"],
    link: "erp.serow.app"
  },
  {
    id: 2,
    title: "Content Management System",
    description: "A flexible CMS with custom workflows, role-based permissions, and a RESTful API for seamless integration with frontend applications.",
    image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Django", "MySQL", "Celery", "AWS"],
    link: "#"
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "A high-performance analytics system processing millions of events daily, with real-time data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Django", "MongoDB", "WebSockets", "Kubernetes"],
    link: "#"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedElement>
          <h2 className="section-title text-center">Featured Projects</h2>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <p className="section-subtitle text-center">
            Here are some of the projects I've worked on, showcasing my expertise in backend development.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <AnimatedElement key={project.id} delay={300 + (index * 100)}>
              <div 
                className="glass rounded-lg h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)' 
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="chip">{tag}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary/80"
                  >
                    View Project Details
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement delay={600}>
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="shine-effect inline-flex items-center px-6 py-3 rounded-md border border-input bg-transparent transition-all hover:bg-secondary"
            >
              View All Projects
              <svg 
                className="ml-2 w-4 h-4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;
