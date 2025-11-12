import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  FileBadge2,
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import ThreeScene from '@/components/ThreeScene';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import ContactForm from '@/components/ContactForm';
import ScrollToTop from '@/components/ScrollToTop';

import {
  personalInfo,
  skills,
  experience,
  education,
  projects,
} from '@/data/portfolio';

export default function Portfolio() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    // Observe all animatable elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Three.js Background */}
        <div className="absolute inset-0 opacity-80">
          <ThreeScene className="w-full h-full" />
        </div>

        {/* Space Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-background/90" /> */}

        {/* Content */}
        <div className="container relative z-10 px-4 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <Badge
              variant="outline"
              className="mb-6 glass-hover border-primary/20 text-primary"
            >
              Available for hire
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text animate-pulse-glow">
                {personalInfo.name.split(' ')[0]}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-8 font-light">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-hero-gradient hover:glow-strong transition-all duration-300 px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-hover border-primary/20 hover:border-primary/40 px-8 py-6 text-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume-of-Byron-Young.pdf';
                  link.download = 'Resume-of-Byron-Young.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-on-scroll">
              <Badge
                variant="outline"
                className="mb-6 glass-hover border-primary/20 text-primary"
              >
                About Me
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Turning Ideas Into{' '}
                <span className="gradient-text">Digital Reality</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-lg p-4">
                  <div className="text-2xl font-bold gradient-text">
                    {personalInfo.yearsOfExperience}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll flex justify-center lg:justify-end">
              <div className="relative max-w-md">
                <div className="glass rounded-2xl p-4 hover-lift">
                  <img
                    src={personalInfo.portrait}
                    alt="Developer portrait"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-xl shadow-xl"
                    loading="lazy"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/20 rounded-full animate-float" />
                <div
                  className="absolute -bottom-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 rounded-full animate-float"
                  style={{ animationDelay: '1s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-muted/20">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="outline"
              className="mb-6 glass-hover border-primary/20 text-primary"
            >
              <Code className="h-4 w-4 mr-2" />
              Skills & Technologies
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              My <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with cutting-edge technologies to build scalable,
              performant applications
            </p>
          </div>

          <div className="space-y-12 animate-on-scroll">
            {Object.entries(
              skills.reduce(
                (acc, skill) => {
                  if (!acc[skill.category]) {
                    acc[skill.category] = [];
                  }
                  acc[skill.category].push(skill);
                  return acc;
                },
                {} as Record<string, typeof skills>
              )
            ).map(([category, categorySkills]) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <SkillCard {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="outline"
              className="mb-6 glass-hover border-primary/20 text-primary"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Work Experience
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              My <span className="gradient-text">Professional Journey</span>
            </h2>
          </div>

          <div className="space-y-8 animate-on-scroll">
            {experience.map((exp, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-secondary/50 border-secondary self-start lg:self-center mt-2 lg:mt-0"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.duration}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 lg:py-32 bg-muted/20">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="outline"
              className="mb-6 glass-hover border-primary/20 text-primary"
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Education & Certifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Continuous <span className="gradient-text">Learning</span>
            </h2>
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {education.map((edu, index) => {
                const truncateText = (
                  text: string,
                  maxLength: number = 120
                ) => {
                  return text.length > maxLength
                    ? text.substring(0, maxLength) + '...'
                    : text;
                };

                const isTextTruncated = edu.details.length > 120;

                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover-lift h-full flex flex-col justify-between min-h-[280px]"
                  >
                    {/* Top content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          {edu.link ? (
                            <FileBadge2 className="h-6 w-6 text-primary" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-secondary/50 border-secondary flex-shrink-0"
                        >
                          {edu.year}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold mb-3 line-clamp-1">
                        {edu.institution}
                      </p>

                      {isTextTruncated ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="text-sm text-muted-foreground cursor-help leading-relaxed">
                              {truncateText(edu.details)}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="max-w-xs p-3 text-sm bg-popover border border-border shadow-lg"
                          >
                            <p className="leading-relaxed">{edu.details}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>

                    {/* Bottom button (aligned) */}
                    <div className="mt-6 flex-shrink-0">
                      {edu.link ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full glass-hover"
                          asChild
                        >
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Certificate
                          </a>
                        </Button>
                      ) : (
                        <div className="h-[38px]" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge
              variant="outline"
              className="mb-6 glass-hover border-primary/20 text-primary"
            >
              Featured Work
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-on-scroll">
            {projects.map((project, index) => (
              <div
                key={project.title}
                style={{ animationDelay: `${index * 0.2}s` }}
                className="h-full"
              >
                <ProjectCard {...project} featured={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-muted/20">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <Badge
                variant="outline"
                className="mb-6 glass-hover border-primary/20 text-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Let's Build Something{' '}
                <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities and interesting
                projects. Let's discuss how we can work together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <ContactForm />
              </div>

              <div className="animate-on-scroll space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                  <div className="space-y-4">
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 glass-hover rounded-lg hover-lift group"
                    >
                      <Github className="h-6 w-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold">GitHub</div>
                        <div className="text-sm text-muted-foreground">
                          View my code
                        </div>
                      </div>
                    </a>
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 glass-hover rounded-lg hover-lift group"
                    >
                      <Linkedin className="h-6 w-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">
                          Professional network
                        </div>
                      </div>
                    </a>

                    <a
                      href={personalInfo.socialLinks.email}
                      className="flex items-center p-4 glass-hover rounded-lg hover-lift group"
                    >
                      <Mail className="h-6 w-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-muted-foreground">
                          {personalInfo.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="flex flex-col space-y-4">
              <div className="text-2xl font-bold gradient-text">
                Byron Young
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.socialLinks.email}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex items-center space-x-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
