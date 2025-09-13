// src/pages/Projects.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce platform with payment integration and product management dashboard.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com/username/store",
    demo: "https://store.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with authentication and group chats.",
    tech: ["Node.js", "Socket.io", "Express"],
    github: "https://github.com/username/chatapp",
    demo: "https://chatapp.com",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 py-16 px-6 md:px-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-700 text-center mb-12"
      >
        My Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="rounded-2xl bg-white shadow-lg border border-purple-200 overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="p-6">
              {/* Title */}
              <motion.h3
                animate={{ color: hovered === index ? "#6b21a8" : "#1f2937" }}
                className="text-xl font-semibold mb-3"
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border border-purple-300 text-purple-700 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
