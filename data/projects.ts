import Image from "next/image";
import project1 from "@/public/images/projects/project1.jpeg";
import project2 from "@/public/images/projects/project2.jpeg";
import project3 from "@/public/images/projects/project3.jpeg";
import project4 from "@/public/images/projects/project4.jpeg";
import project5 from "@/public/images/projects/project5.jpeg";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  location: string;
  category: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "The Glass Pavilion",
    description: "A residential sanctuary with expansive glass walls that blur the line between interior and exterior, creating a seamless connection with nature.",
    imageUrl: project1.src,
    year: "2023",
    location: "Morocco",
    category: "Residential",
    featured: true
  },
  {
    id: "02",
    title: "Urban Stacks",
    description: "A mixed-use development that reimagines vertical living with staggered terraces and communal spaces that foster community interaction.",
    imageUrl: project2.src,
    year: "2022",
    location: "Morocco",
    category: "Commercial",
    featured: true
  },
  {
    id: "03",
    title: "The Fold",
    description: "A cultural center whose form is inspired by origami, featuring dramatic angles and a play of light that transforms throughout the day.",
    imageUrl: project3.src,
    year: "2022",
    location: "Morocco",
    category: "Cultural",
    featured: true
  },
  {
    id: "04",
    title: "Floating Planes",
    description: "A corporate headquarters defined by horizontal planes that appear to float, providing shelter and creating dynamic interior volumes.",
    imageUrl: project4.src,
    year: "2021",
    location: "Morocco",
    category: "Commercial",
    featured: false
  },
  {
    id: "05",
    title: "Timber Cascade",
    description: "A sustainable education building that showcases mass timber construction and passive design strategies for energy efficiency.",
    imageUrl: project4.src,  
    year: "2021",
    location: "Morocco",
    category: "Educational",
    featured: true
  },
  {
    id: "06",
    title: "Desert Sanctuary",
    description: "A private residence that responds to its harsh climate with thermal mass, strategic shading, and a material palette inspired by the surrounding landscape.",
    imageUrl: project4.src,
    year: "2020",
    location: "Morocco",
    category: "Residential",
    featured: false
  }
];

export const featuredProjects = projects.filter(project => project.featured);