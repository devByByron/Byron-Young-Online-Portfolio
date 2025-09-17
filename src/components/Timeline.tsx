import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Briefcase, GraduationCap, ExternalLink, MapPin } from 'lucide-react';
import TimelineBackground from './TimelineBackground';
import { experience, education } from '@/data/portfolio';

// Timeline item type
interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  achievements?: string[];
  link?: string;
  year: number; // For sorting
}

// Convert data to timeline format
const timelineData: TimelineItem[] = [
  // Convert experience data
  ...experience.map((exp, index) => ({
    id: `exp-${index}`,
    type: 'experience' as const,
    title: exp.role,
    subtitle: exp.company,
    date: exp.duration,
    location: exp.location,
    description: exp.description,
    achievements: exp.achievements,
    year: parseInt(exp.duration.split('–')[0]?.trim().split(' ')[1] || '2020') // Extract year for sorting
  })),
  
  // Convert education data
  ...education.map((edu, index) => ({
    id: `edu-${index}`,
    type: 'education' as const,
    title: edu.degree,
    subtitle: edu.institution,
    date: edu.year,
    description: edu.details,
    link: edu.link,
    year: parseInt(edu.year)
  }))
].sort((a, b) => b.year - a.year); // Sort by year, newest first

// Individual timeline item component
const TimelineItemComponent: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-16 lg:mb-24`}
    >
      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group"
        >
          {/* Glassmorphism card with neon glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.type === 'experience' 
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' 
                    : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                }`}>
                  {item.type === 'experience' ? (
                    <Briefcase className="h-6 w-6 text-blue-400" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-purple-400" />
                  )}
                </div>
                <Badge 
                  variant="outline" 
                  className={`${
                    item.type === 'experience' 
                      ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' 
                      : 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                  }`}
                >
                  {item.type === 'experience' ? 'Experience' : 'Education'}
                </Badge>
              </div>
              
              <Badge variant="secondary" className="bg-white/5 border-white/20">
                <Calendar className="h-3 w-3 mr-1" />
                {item.date}
              </Badge>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              {item.title}
            </h3>
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-primary font-semibold">{item.subtitle}</p>
              {item.location && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

            {/* Achievements */}
            {item.achievements && (
              <div className="space-y-2 mb-6">
                {item.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Link */}
            {item.link && (
              <Button
                variant="outline"
                size="sm"
                className="group/btn bg-white/5 border-white/20 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                asChild
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Certificate
                </a>
              </Button>
            )}

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse blur-sm" />
          {/* Main dot */}
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background shadow-2xl flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Timeline Line */}
      <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-primary/50 to-secondary/50 lg:hidden" />
      <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary lg:hidden" />
    </motion.div>
  );
};

// Main Timeline component
const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="timeline" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Three.js Background */}
      <TimelineBackground className="opacity-30" />
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />

      <div className="relative container px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge variant="outline" className="mb-6 bg-white/5 border-white/20 text-primary backdrop-blur-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Professional Journey
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A visual journey through my professional growth, education, and key milestones
          </p>
        </motion.div>

        {/* Timeline Line - Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden lg:block" 
             style={{ height: `${timelineData.length * 200}px`, top: '300px' }} />

        {/* Timeline Items */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItemComponent key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;