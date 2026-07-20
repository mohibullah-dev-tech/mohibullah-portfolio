import Container from "../../components/common/Container";
import { education } from "../../data/educationData";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">EDUCATION</span>

          <h2 className="mt-4 text-5xl font-bold">Academic Journey</h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-1 bg-blue-500/30"></div>

          {education.map((item) => (
            <div key={item.id} className="relative mb-16 pl-16">
              <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                <FaGraduationCap className="text-white" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                <p className="text-blue-400">{item.duration}</p>

                <h3 className="mt-3 text-3xl font-bold">{item.institute}</h3>

                <p className="mt-3 text-lg text-slate-300">{item.degree}</p>

                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
