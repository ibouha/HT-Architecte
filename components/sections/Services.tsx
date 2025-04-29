"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { 
  Home, 
  Building2, 
  Landmark, 
  PenTool, 
  TreePine, 
  Pencil 
} from "lucide-react";

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "Residential Architecture",
    description: "Creating personalized homes that reflect your lifestyle and respond to their context, from urban apartments to countryside retreats."
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Commercial Design",
    description: "Designing innovative workplaces and commercial spaces that enhance productivity, promote well-being, and express brand identity."
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: "Cultural & Public Spaces",
    description: "Crafting meaningful public buildings and cultural institutions that inspire communities and create lasting civic value."
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Interior Design",
    description: "Developing cohesive interior environments that complement the architecture and create comfortable, functional, beautiful spaces."
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Landscape Integration",
    description: "Seamlessly integrating buildings with their surroundings to create harmonious relationships between architecture and landscape."
  },
  {
    icon: <Pencil className="h-8 w-8" />,
    title: "Renovation & Restoration",
    description: "Thoughtfully updating existing buildings to meet contemporary needs while respecting their historical and architectural integrity."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-muted/50">
      <motion.div 
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container px-4 mx-auto"
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div variants={fadeIn("up", 0.2)}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of architectural services, guiding projects from initial concept through to completion with attention to detail at every stage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="p-4 rounded-full bg-primary/10 inline-block mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}