// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";

// const educationData = [
//   {
//     degree: "Bachelor of Technology",
//     college: "Indraprastha Institute of Management & Technology, Saharanpur",
//     year: "2020 - 2024",
//     description: "Focused on computer science and software engineering.",
//   },
//   {
//     degree: "Intermediate",
//     college: "Janta Inter College, Nagal",
//     year: "2020",
//     description: "Specialized in PCM.",
//   },
//   {
//     degree: "High School",
//     college: "Janta Inter College, Nagal",
//     year: "2018",
//     description: "Completed with distinction in Science and Mathematics.",
//   },
//   // {
//   //   degree: "Full stack developer Intern",
//   //   college: "SO Infotech (P) Ltd",
//   //   year: "Oct2024-March 2025",
//   //   description: "Worked on Node.js full stack projects and APIs.",
//   // },
//   // {
//   //   degree: "Software developer Intern",
//   //   college: "Fourbrick Technology",
//   //   year: "June2025 - Present",
//   //   description: "Worked on python full stack projects and APIs.",
//   // },
// ];

// export default function Education() {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-10">
//           Education
//         </h2>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="!overflow-hidden"
//         >
//           {educationData.map((edu, index) => (
//             <SwiperSlide key={index} className="h-auto">
//               <div className="bg-purple-50 shadow-md rounded-2xl p-6 border border-purple-200 hover:shadow-xl transition duration-300 h-full flex flex-col">
//                 <h3 className="text-xl font-semibold text-purple-700">
//                   {edu.degree}
//                 </h3>
//                 <p className="text-gray-700 font-medium">{edu.college}</p>
//                 <span className="text-sm text-gray-500">{edu.year}</span>
//                 <p className="mt-3 text-gray-600 text-sm flex-grow">{edu.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const educationData = [
  {
    degree: "Bachelor of Technology",
    college: "Indraprastha Institute of Management & Technology, Saharanpur",
    year: "2020 - 2024",
    description: "Focused on computer science and software engineering.",
  },
  {
    degree: "Intermediate",
    college: "Janta Inter College, Nagal",
    year: "2020",
    description: "Specialized in PCM.",
  },
  {
    degree: "High School",
    college: "Janta Inter College, Nagal",
    year: "2018",
    description: "Completed with distinction in Science and Mathematics.",
  },
  
];

export default function Education() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-10">
          Education
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={3} // Default to 3 slides
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-hidden"
        >
          {educationData.map((edu, index) => (
            <SwiperSlide key={index}>
              <div className="bg-purple-50 shadow-md rounded-2xl p-6 border border-purple-200 hover:shadow-xl transition duration-300 flex flex-col h-50">
                {/* fixed height h-80 ensures all slides are equal */}
                <h3 className="text-xl font-semibold text-purple-700">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium">{edu.college}</p>
                <span className="text-sm text-gray-500">{edu.year}</span>
                <p className="mt-3 text-gray-600 text-sm flex-grow">{edu.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
