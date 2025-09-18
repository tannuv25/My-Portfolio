import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500); // show “sent” for 2.5s
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
      {/* Floating bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 bg-purple-200 rounded-full opacity-30 animate-bounce-slow`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-600 mb-4 animate-bounce-slow">
        Get in Touch 👋
      </h1>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        Drop a message, and I’ll reply with ✨ magic ✨
      </p>

      {/* Form & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Contact Info */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex flex-col space-y-4 items-start hover:-translate-y-1 transform transition-all duration-300">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-600 w-5 h-5" />
            <span className="text-sm sm:text-base font-medium text-gray-800">
              your.email@example.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-purple-600 w-5 h-5" />
            <span className="text-sm sm:text-base font-medium text-gray-800">
              +123 456 7890
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-purple-600 w-5 h-5" />
            <span className="text-sm sm:text-base font-medium text-gray-800">
              Your City, Country
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition-all duration-300"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full p-3 text-sm border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-3 text-sm border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Message..."
            className="w-full p-3 text-sm border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-purple-300 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
          >
            Send ✨
          </button>

          {/* Sent Animation */}
          {sent && (
            <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium animate-bounce">
              💌 Sent!
            </div>
          )}
        </form>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
        `}
      </style>
    </div>
  );
}
