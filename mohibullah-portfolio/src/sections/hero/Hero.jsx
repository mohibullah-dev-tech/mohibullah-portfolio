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
        <div className="grid gap-12 items-center md:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-blue-400 font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Mohibullah
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300 md:text-3xl">
              Frontend Developer
            </h2>

            <p className="mt-6 max-w-xl text-slate-400 leading-8">
              I build modern, responsive and user-friendly web
              applications using React and modern frontend
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Download Resume
              </Button>

              <Button className="bg-transparent border border-blue-500 hover:bg-blue-600">
                View Projects
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={profile}
              alt="Profile"
              className="w-80 rounded-full border-4 border-blue-500 shadow-2xl"
            />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;