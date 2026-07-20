import Container from "../../components/common/Container";
import { projects } from "../../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">MY PROJECTS</span>

          <h2 className="mt-4 text-5xl font-bold">Featured Projects</h2>

          <p className="mt-6 text-slate-400">
            Some projects that showcase my frontend development skills.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              {/* Image */}

              <div className="flex h-52 items-center justify-center bg-slate-800 text-slate-500">
                Project Image
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 text-slate-400">{project.description}</p>

                {/* Tech */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 transition hover:border-blue-500"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
                  >
                    <HiOutlineArrowTopRightOnSquare />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
