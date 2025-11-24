import Navigation from "@/components/Navigation";
import { Code2, Zap, Brain, Target } from "lucide-react";

const About = () => {
  const journey = [
    {
      year: "2024",
      title: "Web Developer",
      description: "Building modern web applications with React and Node.js",
    },
    {
      year: "2023",
      title: "Started Development Journey",
      description: "Began learning web technologies and fell in love with coding",
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for lightning-fast user experiences",
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Exploring AI and emerging technologies to solve real problems",
    },
    {
      icon: Target,
      title: "User-Focused",
      description: "Designing with the end user in mind, always",
    },
  ];

  return (
    <div className="w-full bg-background noise-bg">
      <Navigation />
      
      <main className="w-full px-4 pt-24 pb-16 sm:px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="mb-4 sm:mb-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-metallic">
            About Me
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-muted-foreground">
            I'm <span className="font-signature text-3xl text-neon-lime glow-text">Ziyavul Haq</span>, 
            a passionate web developer with 1 year of experience crafting digital experiences 
            that blend creativity with functionality.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 sm:mb-6 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                My Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  My journey into web development started with a curiosity about how things work 
                  on the internet. What began as tinkering with HTML and CSS quickly evolved into 
                  a deep passion for creating full-stack applications.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks like React and Next.js, building 
                  responsive and performant web applications. My backend expertise with Node.js 
                  allows me to create complete solutions from database to deployment.
                </p>
                <p>
                  When I'm not coding, you'll find me debugging complex problems (yes, it's a hobby!) 
                  or exploring AI-based projects. I believe in continuous learning and staying 
                  updated with the latest technologies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 sm:mb-6 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Journey
              </h2>
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-neon-lime/30 pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-lime glow-orb" />
                    <div className="mb-1 text-sm font-semibold text-neon-lime">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
          <h2 className="mb-6 sm:mb-8 font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
              { category: "Backend", skills: ["Node.js", "Express", "REST APIs", "Database Design"] },
              { category: "Tools", skills: ["Git", "VS Code", "Chrome DevTools", "Postman"] },
            ].map((group, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:bg-card"
              >
                <h3 className="mb-3 sm:mb-4 font-heading text-lg sm:text-xl font-bold text-neon-lime">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-foreground">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
          <h2 className="mb-6 sm:mb-8 font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What I Value
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:bg-card hover:scale-105"
                >
                  <Icon className="mb-4 h-10 w-10 text-neon-lime transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 font-heading text-lg sm:text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        </div>
      </main>
    </div>
  );
};

export default About;
