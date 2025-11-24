import { useState } from "react";
import { Sparkles, MoreVertical, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import glowingOrbHands from "@/assets/glowing-orb-hands.png";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "Three.js",
    "TypeScript",
    "Next.js",
    "HTML",
    "CSS",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background noise-bg">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-hero-bg/50 via-background to-background" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Hero Block with Selection Border */}
        <div
          className="group relative animate-fade-in-up"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          {/* Dashed selection border */}
          <div
            className={`absolute inset-0 -m-8 rounded-lg border-2 border-dashed transition-all duration-300 ${
              isHovered ? "border-foreground/60 scale-[1.02]" : "border-foreground/30"
            }`}
          >
            {/* Corner handles */}
            {[
              "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
              "top-0 right-0 translate-x-1/2 -translate-y-1/2",
              "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
              "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
              "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
              "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
            ].map((position, i) => (
              <div
                key={i}
                className={`absolute ${position} h-3 w-3 rounded-sm bg-foreground transition-transform duration-200 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            ))}
            
            {/* Move icon */}
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
              <Move className="h-5 w-5 text-foreground/60" />
            </div>
          </div>

          {/* Hero content */}
          <div className="relative space-y-8 px-8 py-12">
            {/* Top label */}
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
              <span className="text-foreground">Web</span>
              <span className="text-muted-foreground">Developer</span>
            </div>

            {/* Main Portfolio heading with glowing orb */}
            <div className="relative">
              <h1 className="font-heading text-8xl font-black tracking-tight md:text-9xl lg:text-[12rem]">
                {/* Split Portfolio into parts for the orb effect */}
                <span className="relative inline-block">
                  {["P", "o", "r", "t", "f"].map((letter, i) => (
                    <span
                      key={i}
                      className="inline-block text-gradient-metallic animate-fade-in"
                      style={{
                        animationDelay: `${0.5 + i * 0.05}s`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  
                  {/* Glowing orb with hands replacing the 'o' */}
                  <span className="relative inline-block mx-2 align-middle" style={{ width: "0.8em", height: "0.8em" }}>
                    <img
                      src={glowingOrbHands}
                      alt="Glowing orb"
                      className="absolute inset-0 h-full w-full object-contain glow-orb animate-pulse-glow"
                      style={{
                        animationDelay: "0.7s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    />
                  </span>
                  
                  {["l", "i", "o"].map((letter, i) => (
                    <span
                      key={i + 5}
                      className="inline-block text-gradient-metallic animate-fade-in"
                      style={{
                        animationDelay: `${0.9 + i * 0.05}s`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>

              {/* Signature overlay */}
              <div
                className="absolute -right-4 bottom-4 rotate-[-5deg] text-5xl font-signature text-neon-lime glow-text md:text-6xl lg:-right-12 lg:bottom-8 lg:text-7xl animate-fade-in"
                style={{
                  animationDelay: "1.2s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                Ziyavul Haq
              </div>
            </div>

            {/* Role and experience */}
            <div
              className="flex items-center gap-3 text-lg text-muted-foreground animate-fade-in-up"
              style={{
                animationDelay: "1.4s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-foreground font-medium">Web Developer</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>1 Year Experience</span>
            </div>

            {/* Skills */}
            <div
              className="flex flex-wrap gap-2 animate-fade-in-up"
              style={{
                animationDelay: "1.6s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-card"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Hobbies */}
            <p
              className="text-sm text-muted-foreground animate-fade-in-up"
              style={{
                animationDelay: "1.8s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-foreground">Hobbies:</span> Debugging, AI-based Projects
            </p>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up"
          style={{
            animationDelay: "2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 p-3 shadow-2xl backdrop-blur-xl">
            {/* Input field */}
            <div className="relative">
              <Input
                placeholder="Create a collection of works for portfolio"
                className="w-72 border-0 bg-background/50 pr-10 focus-visible:ring-primary md:w-96"
              />
            </div>

            {/* More options button */}
            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreVertical className="h-4 w-4" />
            </Button>

            {/* Cancel button */}
            <Button variant="ghost" className="shrink-0">
              Cancel
            </Button>

            {/* Generate button */}
            <Button
              className="shrink-0 gap-2 bg-primary font-semibold text-primary-foreground shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              <Sparkles className="h-4 w-4" />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
