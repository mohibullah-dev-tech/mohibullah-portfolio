import Container from "../../components/common/Container";
import profile from "../hero/Me.jpg";

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
              <h3 className="text-3xl font-bold text-blue-400">
                HEAT
              </h3>

              <p className="text-slate-400">
                Internship Experience
              </p>
            </div>

          </div>

          {/* Right */}

          <div>

            <span className="text-blue-400 font-semibold">
              ABOUT ME
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Passionate Frontend Developer
            </h2>

            <p className="mt-8 leading-8 text-slate-400">
              I'm Mohibullah, a Frontend Developer from Bangladesh.
              I love building clean, responsive and modern web
              applications using React and JavaScript.

              Currently I'm working as an Intern in the HEAT Project
              where I'm improving my frontend development skills
              through real-world projects.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;