"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-24" id="contact">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground max-w-md">
                We&apos;d love to hear about your project. Get in touch with us to schedule a consultation or learn more about our services.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                variants={slideIn("left", "tween", 0.2, 0.5)}
                className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Visit Our Office</h3>
                  <p className="text-muted-foreground mt-1">
                   Bloc 4, AIT MELLOUL Bureau N° 02 Imm . <br />
                    ALHYANE, N° 01 Av. Hassan II, Aït Melloul 86153
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={slideIn("left", "tween", 0.3, 0.5)}
                className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground mt-1">architecteht@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={slideIn("left", "tween", 0.4, 0.5)}
                className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground mt-1">+212 655-555-123</p>
                  <p className="text-muted-foreground">Mon-Fri 9AM-6PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-muted/20 p-8 rounded-lg border">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6"
                >
                  <p>Thank you for your message! We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 transition-all duration-200 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 transition-all duration-200 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(+212) 6 XXXX XXXX"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full p-3 transition-all duration-200 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] w-full p-3 transition-all duration-200 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-b-2 border-white rounded-full" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}