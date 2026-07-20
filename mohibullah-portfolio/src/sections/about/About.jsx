import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import profile from "../hero/Me.jpg";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle
          badge="ABOUT ME"
          title="Passionate Frontend Developer"
          subtitle="Frontend Developer from Bangladesh focused on building beautiful, modern and responsive web applications."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div className="relative flex justify-center">
            <img
              src={profile}
              alt="Mohibullah"
              className="w-80 rounded-3xl border border-white/10 shadow-2xl"
            />

            <div className="absolute -bottom-6 right-5 rounded-2xl border border-blue-500/20 bg-slate-900 p-5">
              <h3 className="text-3xl font-bold text-blue-400">HEAT</h3>

              <p className="text-slate-400">Internship Experience</p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <p className="leading-8 text-slate-400">
              I'm Mohibullah, a passionate Frontend Developer who enjoys
              creating clean, responsive and user-friendly web applications
              using React, JavaScript and modern frontend technologies.
              <br />
              <br />
              Currently I'm working as a Frontend Developer Intern at the HEAT
              Project where I'm gaining real-world experience by building
              practical applications.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-4">
              {[
                "Frontend Developer",
                "React Enthusiast",
                "HEAT Project Intern",
                "Problem Solver",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-400" />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Cards */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-blue-500 transition">
                <FaGraduationCap className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Education</h3>

                <p className="mt-2 text-sm text-slate-400">
                  B.Sc. in CSE
                  <br />
                  Green University of Bangladesh
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-blue-500 transition">
                <FaBriefcase className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Internship</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Frontend Developer
                  <br />
                  HEAT Project
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-blue-500 transition">
                <FaMapMarkerAlt className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Location</h3>

                <p className="mt-2 text-sm text-slate-400">Dhaka, Bangladesh</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:border-blue-500 transition">
                <FaLaptopCode className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Career Goal</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Frontend Engineer specializing in React & Modern Web
                  Technologies.
                </p>
              </div>
            </div>

            {/* Tech Stack */}

            <div className="mt-12">
              <h3 className="mb-5 text-xl font-semibold">Tech Stack</h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "Vite",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
