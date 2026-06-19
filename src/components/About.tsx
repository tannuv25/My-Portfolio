import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          Building meaningful products through code, creativity, and
          continuous learning.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            shadow-2xl
            p-8
            flex
            flex-col
            items-center
            justify-center
            text-center
            bg-gradient-to-br
            from-purple-300
            via-violet-400
            to-pink-500
          "
        >
          {/* Decorative Circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full"></div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110"></div>

            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              src="/images/profile_pic.png"
              alt="Tannu Verma"
              className="
                relative
                w-40
                h-40
                rounded-full
                object-cover
                border-4
                border-white/40
                shadow-2xl
              "
            />
          </div>

          {/* Name */}
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Tannu Verma
          </h2>

          {/* Roles */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 text-white text-sm sm:text-base font-medium">
            <span className="flex items-center gap-1">
              <Briefcase size={18} className="text-purple-600" /> Software Developer
            </span>
            <span className="hidden sm:block text-purple-400">|</span>
            <span className="flex items-center gap-1">
              <Code size={18} className="text-purple-600" /> Backend Developer
            </span>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-purple-100 rounded-3xl shadow-xl p-8"
        >
          <div className="space-y-5">
           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
  Hi, I'm Tannu — a Full Stack Developer passionate about building
  products that solve real-world problems and create meaningful user
  experiences.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed">
  Over the past year, I've worked on diverse web applications, taking
  ideas from planning and system design to development and deployment.
  I enjoy transforming complex requirements into clean, scalable
  solutions while maintaining a strong focus on quality and user needs.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed">
  What drives me most is the opportunity to learn, improve, and create.
  Every project teaches me something new, and every challenge pushes me
  to think differently. I'm constantly exploring better ways to build,
  lead, and grow as an engineer.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
  Still learning. Still building. Just getting started. ✨
</p>          </div>
        </motion.div>

      </div>
    </section>
  );
}
