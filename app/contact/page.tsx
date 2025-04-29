"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
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

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              We&apos;d love to hear from you. Whether you&apos;re interested in discussing a
              potential project, have questions about our services, or just want to
              connect, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
  <div className="container px-4 mx-auto">
    <div className="rounded-lg overflow-hidden h-[400px]">
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.627992305201!2d-9.5036729!3d30.333097599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c74f21c5ccd3%3A0x322e87b6707e8a66!2sCabinet%20d'architecture%20HT-HASSAN%20TALEB!5e0!3m2!1sen!2sma!4v1745879983000!5m2!1sen!2sma"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="HT-Architecte Location"
/>

    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <Contact />
    </div>
  );
}