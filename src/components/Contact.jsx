import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oexwjdq",
        "template_9t5lf3a",
        form.current,
        "Xqg1-qDnPRTjQoZX5"
      )
      .then(() => {
        alert("Message sent successfully");
        form.current.reset();
      })
      .catch((error) => {
        console.log("EmailJS error: ", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 sm:p-10 font-body text-gray-800">
        <h2
          className="text-xl sm:text-2xl font-heading font-semibold text-center mb-6 scroll-mt-30"
          id="contact-section"
        >
          Contact
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Let’s connect! Whether it’s collaboration, feedback, or a simple
          hello, I'd love to hear from you!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white cursor-pointer transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
