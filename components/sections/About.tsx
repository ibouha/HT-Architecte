"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";
import aboutImage from "@/public/images/about.png";

export default function About() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={aboutImage}
                alt="Architects working on a project"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Approach to Architecture
            </h2>
            
            <p className="text-muted-foreground">
              At HT-Architecte, we believe that architecture is more than just buildings—it&apos;s about crafting experiences that enhance the way people live, work, and interact with their environment.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold">Design Philosophy</h3>
                <p className="text-muted-foreground">
                  Our design approach balances form and function, creating spaces that are not only visually striking but also practical and intuitive to use. We believe that the best architecture responds to its context—environmental, cultural, and social.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <p className="text-muted-foreground">
                  Sustainability is embedded in every aspect of our practice. We design buildings that minimize environmental impact while maximizing energy efficiency and occupant comfort through innovative materials and passive design strategies.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We view each project as a collaborative journey with our clients. By listening carefully to your needs and aspirations, we create spaces that reflect your vision while exceeding your expectations through our expertise and creativity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}