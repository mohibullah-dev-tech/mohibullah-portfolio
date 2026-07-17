import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import profile from "./Me.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-medium text-blue-400"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-5xl font-bold leading-tight md:text-7xl"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Mohibullah
              </span>
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "JavaScript Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="mt-4 text-3xl font-semibold text-slate-300"
            />

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I build modern, responsive and user-friendly web
              applications using React and modern frontend technologies.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Download Resume
              </Button>

              <Button className="border border-blue-500 bg-transparent hover:bg-blue-600">
                View Projects
              </Button>
            </div>

            {/* ===== Stats ===== */}

            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  5+
                </h3>
                <p className="text-slate-400">
                  Major Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  HEAT
                </h3>
                <p className="text-slate-400">
                  Internship
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  15+
                </h3>
                <p className="text-slate-400">
                  Technologies
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center">

            <img
              src={profile}
              alt="Mohibullah"
              className="w-80 rounded-full border-4 border-blue-500 shadow-2xl md:w-96"
            />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;