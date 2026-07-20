import Container from "../../components/common/Container";
import { certifications } from "../../data/certificationsData";
import { FaCertificate } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const Certifications = () => {
  return (
    <section id="certifications" className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-400">CERTIFICATIONS</span>

          <h2 className="mt-4 text-5xl font-bold">Learning & Achievements</h2>

          <p className="mt-6 text-slate-400">
            Courses and certifications that helped me strengthen my frontend
            development skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <FaCertificate className="mb-6 text-5xl text-blue-400" />

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 text-slate-400">{item.issuer}</p>

              <p className="mt-2 text-blue-400">{item.year}</p>

              <a
                href={item.credential}
                className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                View Credential
                <HiOutlineArrowTopRightOnSquare />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
