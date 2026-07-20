import Container from "../../components/common/Container";
import { skills } from "../../data/skillsData";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Frontend":
      return <FaCode className="text-3xl text-blue-400" />;

    case "Backend":
      return <FaServer className="text-3xl text-green-400" />;

    case "Tools":
      return <FaTools className="text-3xl text-purple-400" />;

    default:
      return null;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">MY SKILLS</span>

          <h2 className="mt-4 text-5xl font-bold">Technologies I Use</h2>

          <p className="mt-6 text-slate-400">
            Modern technologies that I use to build scalable and responsive web
            applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-[0_0_30px_rgba(59,130,246,.3)]
              "
            >
              <div className="mb-8 flex items-center gap-4">
                {getCategoryIcon(group.category)}

                <h3 className="text-2xl font-bold">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-slate-800/80
                    px-4
                    py-2
                    text-sm
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-blue-500
                    hover:bg-blue-600
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
