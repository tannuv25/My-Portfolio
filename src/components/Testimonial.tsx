import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// If you want to use Radix UI Avatar, install @radix-ui/react-avatar and use:
import * as Avatar from "@radix-ui/react-avatar";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Team Lead, Fourbrick Technology",
    feedback:
      "Tannu is a highly dedicated developer with strong problem-solving skills. Her contributions in FastAPI and React projects were outstanding.",
  },
  {
    name: "Ananya Gupta",
    role: "Project Mentor",
    feedback:
      "She brings great energy to the team and writes clean, scalable code. Always curious to learn and quick to adapt new technologies.",
  },
  {
    name: "Vikram Singh",
    role: "Colleague",
    feedback:
      "Working with Tannu was a great experience. Her backend expertise in Python and MongoDB really helped us deliver projects on time.",
  },
  {
    name: "Priya Mehta",
    role: "Senior Developer",
    feedback:
      "Her frontend design sense with React & Tailwind is impressive. She ensures both performance and beauty in her projects.",
  },
  {
    name: "Aman Verma",
    role: "Startup Founder",
    feedback:
      "Tannu played a key role in building our MVP. She is reliable, fast, and a great problem solver.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-purple-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-12">
          What People Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full h-72 max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                <Avatar.Root className="w-16 h-16 mb-4 border-2 border-purple-500 flex items-center justify-center rounded-full overflow-hidden">
                  <Avatar.Fallback className="bg-purple-200 text-purple-800 font-bold w-full h-full flex items-center justify-center">
                    {t.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>

                {/* Feedback */}
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base leading-relaxed line-clamp-4">
                  “{t.feedback}”
                </p>

                {/* Name + Role */}
                <h3 className="text-lg font-semibold text-purple-700">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
