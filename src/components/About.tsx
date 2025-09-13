import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">About Me</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">
        Here's a little about who I am, what I do, and what inspires me.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
        >
          <img
            src="../public/images/profile_pic.png"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 mb-6"
          />
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Tannu Verma</h2>
          <p className="text-gray-600">Software Developer | Backend Developer</p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-purple-200 rounded-2xl shadow-lg p-8 space-y-4"
        >
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate developer who loves creating beautiful and functional
            digital experiences. My journey started with curiosity about how
            websites work, and over time, it turned into a full-fledged career.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I specialize in building responsive web applications using modern
            technologies like React, TypeScript, and TailwindCSS. I enjoy
            bringing ideas to life with clean design and smooth user
            experiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends,
            reading, or enjoying a good coffee.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
