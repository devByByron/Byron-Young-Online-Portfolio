import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-hero-gradient hover:glow-strong shadow-lg animate-fade-up"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
