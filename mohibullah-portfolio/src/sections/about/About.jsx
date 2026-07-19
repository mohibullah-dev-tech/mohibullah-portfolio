import Container from "../../components/common/Container";
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
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left */}

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

          {/* Right */}

          <div>
            <span className="text-blue-400 font-semibold">ABOUT ME</span>

            <h2 className="mt-4 text-5xl font-bold">
              Passionate Frontend Developer
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              I'm Mohibullah, a Frontend Developer from Bangladesh. I love
              building clean, responsive and modern web applications using React
              and JavaScript. Currently I'm working as an Intern in the HEAT
              Project where I'm improving my frontend development skills through
              real-world projects.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-500">
                <FaGraduationCap className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Education</h3>

                <p className="mt-2 text-sm text-slate-400">
                  B.Sc. in Computer Science
                  <br />
                  Green University of Bangladesh
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-500">
                <FaBriefcase className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Internship</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Frontend Developer Intern
                  <br />
                  HEAT Project
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-500">
                <FaMapMarkerAlt className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Location</h3>

                <p className="mt-2 text-sm text-slate-400">Dhaka, Bangladesh</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-500">
                <FaLaptopCode className="mb-3 text-3xl text-blue-400" />

                <h3 className="font-semibold">Career Goal</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Frontend Engineer specializing in React and modern web
                  technologies.
                </p>
              </div>
            </div>

            <div className="mt-10">
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
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500 hover:text-white"
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
