import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Fourbrick Technology Pvt Ltd",
    duration: "June 2025 – Present",
    description:
      "Worked on Python FastAPI backend, MongoDB, and React with Redux Toolkit to build scalable web applications.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "SO Infotech (P) Ltd",
    duration: "Oct 2024 – March 2025",
    description:
      "Contributed to Node.js full stack projects and developed REST APIs with a focus on performance and security.",
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-12">
          Work & Internships
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-purple-300 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              {/* Icon */}
              <div className="absolute -left-10 top-6 flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white shadow-lg">
                <Briefcase size={20} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-purple-700">
                {exp.role}
              </h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <span className="text-sm text-gray-500">{exp.duration}</span>
              <p className="mt-3 text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
