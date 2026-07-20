import Container from "../../components/common/Container";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">Mohibullah</h2>

            <p className="mt-5 leading-8 text-slate-400">
              Frontend Developer passionate about creating modern, responsive
              and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 text-xl font-semibold">Connect</h3>

            <div className="flex gap-5">
              <a href="#">
                <FaGithub className="text-2xl transition hover:text-blue-400" />
              </a>

              <a href="#">
                <FaLinkedin className="text-2xl transition hover:text-blue-400" />
              </a>

              <a href="#">
                <FaFacebook className="text-2xl transition hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Mohibullah. Built with React & Tailwind
          CSS.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
