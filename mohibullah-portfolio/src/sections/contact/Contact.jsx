import Container from "../../components/common/Container";
import { contact } from "../../data/contactData";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">CONTACT</span>

          <h2 className="mt-4 text-5xl font-bold">Let's Work Together</h2>

          <p className="mt-6 text-slate-400">
            Feel free to contact me for internships, freelance work or
            collaboration.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <span>{contact.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-400 text-xl" />
              <span>{contact.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <span>{contact.location}</span>
            </div>

            <div className="flex gap-5 pt-4">
              <a href={contact.github}>
                <FaGithub className="text-3xl hover:text-blue-400 transition" />
              </a>

              <a href={contact.linkedin}>
                <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
              </a>

              <a href={contact.facebook}>
                <FaFacebook className="text-3xl hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          {/* Right */}

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-3 transition hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
