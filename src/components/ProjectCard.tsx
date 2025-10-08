import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const maxLength = 140;
  const truncateText = (text: string) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };
  const isTextTruncated = description.length > maxLength;

  return (
    <TooltipProvider>
      <div className="group glass-hover rounded-2xl overflow-hidden hover-lift hover-tilt h-full flex flex-col glow">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Action buttons on hover */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            {githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="glass-hover shadow-lg backdrop-blur-sm"
                asChild
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" className="bg-hero-gradient shadow-lg" asChild>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>
            {featured && (
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Featured
              </Badge>
            )}
          </div>

          {isTextTruncated ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-muted-foreground text-sm lg:text-base mb-4 leading-relaxed cursor-help flex-1">
                  {truncateText(description)}
                </p>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="max-w-sm p-3 text-sm bg-popover border border-border shadow-lg"
              >
                <p className="leading-relaxed">{description}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <p className="text-muted-foreground text-sm lg:text-base mb-4 leading-relaxed flex-1">
              {description}
            </p>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-secondary/50 border-secondary hover:border-primary/40 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links - always visible */}
          <div className="flex space-x-3 mt-auto">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-border hover:border-primary/40"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" className="flex-1 bg-hero-gradient" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
