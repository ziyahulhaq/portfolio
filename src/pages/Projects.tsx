import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using GPT integration. Built with React, Node.js, and WebSocket for instant messaging.",
      tags: ["React", "Node.js", "OpenAI", "WebSocket"],
      gradient: "from-purple-500/20 to-pink-500/20",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Responsive design with Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      featured: true,
    },
    {
      title: "3D Portfolio Showcase",
      description: "Interactive 3D portfolio website using Three.js with smooth animations and immersive user experience. WebGL-powered graphics.",
      tags: ["Three.js", "React", "GSAP", "WebGL"],
      gradient: "from-green-500/20 to-emerald-500/20",
      featured: false,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features. Built for productivity.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      gradient: "from-orange-500/20 to-red-500/20",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location search, forecasts, and interactive maps. Integrates multiple weather APIs for accurate data.",
      tags: ["JavaScript", "API Integration", "CSS"],
      gradient: "from-sky-500/20 to-indigo-500/20",
      featured: false,
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for saving and organizing code snippets with syntax highlighting, tagging, and search functionality.",
      tags: ["React", "Node.js", "MongoDB", "Prism.js"],
      gradient: "from-violet-500/20 to-purple-500/20",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16 md:px-6">
        {/* Hero Section */}
        <div className="mb-20 animate-fade-in-up">
          <h1 className="mb-6 font-heading text-6xl font-black text-gradient-metallic md:text-7xl lg:text-8xl">
            Projects
          </h1>
          <p className="max-w-3xl text-xl text-muted-foreground md:text-2xl">
            A collection of projects that showcase my skills in web development, 
            from AI integrations to 3D experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="mb-8 flex items-center gap-2 font-heading text-3xl font-bold text-foreground">
            <Sparkles className="h-8 w-8 text-neon-lime" />
            Featured Projects
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className={`mb-6 h-48 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Sparkles className="h-16 w-16 text-neon-lime opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                  </div>
                  
                  <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-neon-lime/30 bg-neon-lime/10 px-3 py-1 text-sm font-medium text-neon-lime"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 bg-neon-lime text-background hover:bg-neon-lime/90">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground">
            More Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:scale-105 hover:shadow-xl"
                  style={{
                    animationDelay: `${0.4 + index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className={`mb-4 h-32 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Sparkles className="h-10 w-10 text-neon-lime opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                  </div>
                  
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs rounded-full border border-border bg-background/50 px-2 py-1 font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-neon-lime hover:text-neon-lime">
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
