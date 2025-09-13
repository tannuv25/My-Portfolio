import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: Github, link: "https://github.com/yourprofile" },
    { icon: Linkedin, link: "https://linkedin.com/in/yourprofile" },
    { icon: Twitter, link: "https://twitter.com/yourprofile" },
    { icon: Mail, link: "mailto:your@email.com" },
  ];

  return (
    <footer className="w-full bg-purple-200 text-purple-700 py-10 px-6">
      <div className="max-w-6xl">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold">Tannu Verma Portfolio</h1>
          <p className="mt-2 text-purple-600">
            Building innovative solutions with code and creativity.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-start md:items-end gap-4"
        >
          <h2 className="text-lg font-semibold">Connect</h2>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-purple-100 transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 border-t border-purple-800/80 pt-4 text-center text-purple-700 text-sm"
      >
        © {new Date().getFullYear()} I'm tannu verma. All rights reserved.
      </motion.div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-30"
      />
    </footer>
  );
}
