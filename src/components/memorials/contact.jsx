import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Optional */}
      <div className="absolute inset-0"></div>
      <div className="relative z-10 w-full max-w-xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-black mb-2">
          {submitted ? 'Submitted' : 'Contact Us'}
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            Thank you! We'll get back to you shortly.
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="6"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border bg-white border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-1/3 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
