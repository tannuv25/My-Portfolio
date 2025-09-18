// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4 sm:mb-6 text-center">
//         About Me
//       </h1>
//       <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl text-center">
//         Here's a little about who I am, what I do, and what inspires me.
//       </p>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl w-full">
//         {/* Profile Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-purple-50 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center"
//         >
//           <img
//             src="/images/profile_pic.png"
//             alt="Profile"
//             className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-500 mb-4 sm:mb-6"
//           />
//           <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">
//             Tannu Verma
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Software Developer | Backend Developer
//           </p>
//         </motion.div>

//         {/* Bio Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
//         >
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//             I’m a Full Stack Developer passionate about building scalable web apps with React, Redux Toolkit, FastAPI, and MongoDB. Skilled in both frontend and backend, I enjoy crafting clean APIs, smooth user interfaces, and efficient solutions.
//           </p>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//             With internship experience and a strong problem-solving mindset, I aim to deliver impactful, high-performance applications that make a real difference.
//           </p>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//             When I'm not coding, you'll find me exploring new design trends,
//             reading, or enjoying a good coffee.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4 sm:mb-6 text-center">
        About Me
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl text-center">
        Here's a little about who I am, what I do, and what inspires me.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl w-full">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center border border-purple-200"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 blur-md opacity-30"></div>
            <img
              src="/images/profile_pic.png"
              alt="Profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mt-6">
            Tannu Verma
          </h2>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 text-gray-700 text-sm sm:text-base font-medium">
            <span className="flex items-center gap-1">
              <Briefcase size={18} className="text-purple-600" /> Software Developer
            </span>
            <span className="hidden sm:block text-purple-400">|</span>
            <span className="flex items-center gap-1">
              <Code size={18} className="text-purple-600" /> Backend Developer
            </span>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
        >
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            I’m a <span className="font-semibold text-purple-600">Full Stack Developer</span> passionate about building scalable web apps with React, Redux Toolkit, FastAPI, and MongoDB. Skilled in both frontend and backend, I enjoy crafting clean APIs, smooth user interfaces, and efficient solutions.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            With internship experience and a strong problem-solving mindset, I aim to deliver impactful, high-performance applications that make a real difference.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
            When I'm not coding, you'll find me exploring new design trends, reading, or enjoying a good coffee ☕.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
