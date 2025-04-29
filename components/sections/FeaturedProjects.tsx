"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(featuredProjects[0].id);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Explore our award-winning projects that showcase our commitment to
              innovation, sustainability, and timeless design.
            </p>
          </div>
          <Button variant="outline" size="lg" className="group">
            <Link href="/portfolio" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image */}
          <motion.div
            layoutId="projectImage"
            className="relative aspect-[4/3] w-full rounded-lg overflow-hidden"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeProject === project.id ? 1 : 0,
                  zIndex: activeProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Projects List */}
          <div className="space-y-1">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{
                  backgroundColor: "rgba(var(--primary-rgb), 0.05)",
                }}
                className={`p-6 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeProject === project.id
                    ? "bg-primary/5 border-l-4 border-primary"
                    : "border-l-4 border-transparent"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <span>{project.year}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                      <span>{project.category}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`h-5 w-5 transition-opacity duration-300 ${
                      activeProject === project.id
                        ? "opacity-100 text-primary"
                        : "opacity-0"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}