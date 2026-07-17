import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";

import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import { heroData } from "../../data/heroData";
import profile from "./Me.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div>
            {/* Greeting */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-medium text-blue-400"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Internship Badge */}

            <div className="mt-6 inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              🚀 Intern at HEAT Project
            </div>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-5xl font-bold leading-tight md:text-7xl"
            >
              <span className=".bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </motion.h1>

            {/* Type Animation */}

            <TypeAnimation
              sequence={heroData.title.flatMap((item) => [item, 2000])}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="mt-4 text-3xl font-semibold text-slate-300"
            />

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {heroData.description}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="flex items-center gap-2 px-8 py-3">
                <HiArrowDownTray size={20} />
                Resume
              </Button>

              <Button className="border border-blue-500 bg-transparent px-8 py-3 hover:bg-blue-600">
                View Projects
              </Button>
            </div>

            {/* Social Icons */}

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/mohibullah-dev-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl transition hover:text-blue-400" />
              </a>

              <a href="#">
                <FaLinkedin className="text-2xl transition hover:text-blue-400" />
              </a>

              <a href="#">
                <FaFacebook className="text-2xl transition hover:text-blue-400" />
              </a>
            </div>

            {/* Stats */}

            <div className="mt-12 flex flex-wrap gap-10">
              {heroData.stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-bold text-blue-400">
                    {item.value}
                  </h3>

                  <p className="text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center">
            <motion.img
              src={profile}
              alt="Mohibullah"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-[0_0_60px_rgba(59,130,246,0.35)] md:h-96 md:w-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;