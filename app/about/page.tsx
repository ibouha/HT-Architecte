"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import Link from "next/link";
import { ArrowLeft, Award, Clock, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import teamMember1 from "@/public/images/team/team1.jpg";

// Team members data
const team = [
  {
    name: "Hassan Taleb",
    role: "Principal Architect",
    bio: "With over 15 years of experience, Sarah leads our team with a passion for sustainable design and a background in both residential and commercial architecture.",
    imageUrl: teamMember1.src,
  },
  {
    name: "Hassan Talebn",
    role: "Design Director",
    bio: "Hassan Taleb a unique perspective informed by his international experience, specializing in innovative material applications and parametric design.",
    imageUrl: teamMember1.src,
  },
  {
    name: "Hassan Taleb",
    role: "Project Manager",
    bio: "Maya excels at guiding complex projects from concept to completion, ensuring that every detail meets our high standards of quality and client expectations.",
    imageUrl: teamMember1.src,
  },
  {
    name: "Hassan Taleb",
    role: "Sustainability Specialist",
    bio: "Hassan focuses on integrating environmental strategies and advanced building systems to create energy-efficient and environmentally responsible designs.",
    imageUrl: teamMember1.src,
  },
];

// Company values
const values = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly explore new ideas, technologies, and approaches to push the boundaries of architectural design.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "We believe in the power of collaborative design, working closely with clients, consultants, and communities.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from conceptual design to the smallest construction detail.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Responsibility",
    description: "We take our environmental and social responsibilities seriously, creating architecture that respects both people and planet.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About HT-Architecte
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We are a forward-thinking architectural practice dedicated to creating
              thoughtful, innovative designs that enhance the way people live, work,
              and interact with their environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, HT-Architecte began as a small practice with a big vision:
                  to create architecture that positively impacts people&apos;s lives while
                  respecting the environment and cultural context.
                </p>
                <p>
                  Over the years, we&apos;ve grown into a diverse team of architects, designers,
                  and thinkers united by our passion for thoughtful, innovative design and
                  our commitment to architectural excellence.
                </p>
                <p>
                  Today, our portfolio spans residential, commercial, cultural, and
                  educational projects across the country and internationally, each
                  reflecting our core values and our collaborative approach.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container px-4 mx-auto"
        >
          <motion.div
            variants={textVariant(0.2)}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              At the core of our practice are the principles that guide our work and
              relationships, shaping how we approach every project and interaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-6">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-muted-foreground">
              Meet the talented individuals who bring creativity, expertise, and passion
              to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We&apos;re always excited to collaborate on new projects and bring innovative
            architectural solutions to life. Reach out to start the conversation.
          </p>
          <Button size="lg" className="rounded-full px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}