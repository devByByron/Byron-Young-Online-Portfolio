interface SkillCardProps {
  name: string;
  icon: string;
  level: number; // 1-5 scale
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

const getCategoryColor = (category: string) => {
  const colors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Tools: 'from-orange-500 to-red-500',
    Design: 'from-purple-500 to-pink-500',
  };
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
};

export default function SkillCard({ name, icon, level, category }: SkillCardProps) {
  return (
    <div className="group glass-hover rounded-xl p-6 hover-lift hover-tilt transition-all duration-300">
      {/* Icon */}
      <div className="relative mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(category)} p-3 group-hover:glow transition-all duration-300`}>
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-full h-full object-contain filter brightness-0 invert"
            loading="lazy"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground font-medium">
            {category}
          </p>
        </div>

        {/* Skill Level */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Proficiency</span>
            <span className="text-xs font-medium text-foreground">{level}/5</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getCategoryColor(category)} transition-all duration-1000 ease-out`}
              style={{ width: `${(level / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}