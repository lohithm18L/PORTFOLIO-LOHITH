import React from "react";
import { SectionWrapper } from "../hoc"; // make sure this import is correct

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="mb-8 text-lg">Feel free to reach out!</p>

        <div className="space-y-4 text-lg">
          <p><strong>Name:</strong> LOHITH M</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:lohithm7892@gmail.com"
              className="text-[#915EFF] underline"
            >
              lohithm7892@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+917892148768"
              className="text-[#915EFF] underline"
            >
              +91 7892148768
            </a>
          </p>
        </div>

        <form className="mt-10 flex flex-col items-center gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded text-black"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-[#915EFF] px-6 py-3 rounded-xl hover:bg-[#7e4ff2] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// ✅ Only ONE default export, and it's wrapped:
export default SectionWrapper(Contact, "contact");
