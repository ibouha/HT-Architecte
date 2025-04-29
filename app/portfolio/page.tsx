"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define filter categories
const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our diverse portfolio of architectural projects spanning residential,
            commercial, cultural, and educational sectors. Each project embodies our
            commitment to innovation, sustainability, and exceptional design.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 border-b">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end p-6 transition-opacity duration-300",
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">{project.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We&apos;re excited to help bring your vision to life. Contact us to discuss
            your architectural needs and how we can create something extraordinary together.
          </p>
          <Button size="lg" className="rounded-full px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}