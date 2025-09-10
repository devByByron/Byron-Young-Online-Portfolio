import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - You need to replace these with your actual values
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID  
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'youngkillian0308@gmail.com',
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center animate-fade-up">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="glass-hover"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="glass-hover border-border focus:border-primary transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="glass-hover border-border focus:border-primary transition-colors"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello..."
            value={formData.message}
            onChange={handleChange}
            className="glass-hover border-border focus:border-primary transition-colors min-h-[120px] resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-hero-gradient hover:glow-strong transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}