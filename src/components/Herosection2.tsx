import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you could integrate EmailJS, a backend API, etc.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12 px-4 mt-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Contact Me</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-xl text-center">
        I'd love to hear from you! Whether you have a question, project idea, or just want to say hi.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Info */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-purple-600" />
            <span>your.email@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-purple-600" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-purple-600" />
            <span>Your City, Country</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-purple-200 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
