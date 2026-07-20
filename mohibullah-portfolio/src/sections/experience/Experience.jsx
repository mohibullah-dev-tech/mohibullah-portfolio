import Container from "../../components/common/Container";
import { experience } from "../../data/experienceData";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">EXPERIENCE</span>

          <h2 className="mt-4 text-5xl font-bold">My Professional Journey</h2>
        </div>

        {experience.map((item) => (
          <div
            key={item.company}
            className="rounded-3xl border border-white/10 bg-slate-900 p-8"
          >
            <div className="flex items-center gap-4">
              <FaBriefcase className="text-3xl text-blue-400" />

              <div>
                <h3 className="text-2xl font-bold">{item.role}</h3>

                <p className="text-blue-400">{item.company}</p>
              </div>
            </div>

            <p className="mt-3 text-slate-500">{item.duration}</p>

            <p className="mt-6 text-slate-400">{item.description}</p>

            <ul className="mt-8 space-y-3">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>

                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
