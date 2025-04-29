"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/images/1745925401671.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={heroImage}
            alt="Architectural Background"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/60 " />
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Architecture <span className="text-primary">Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We create spaces that inspire, transform, and elevate the human experience through innovative design and sustainable practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="px-8 py-6 rounded-full">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="group px-8 py-6 rounded-full">
              <Link href="/contact" className="flex items-center">
                Get In Touch 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-10 w-6 border-2 border-primary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-2 w-2 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}