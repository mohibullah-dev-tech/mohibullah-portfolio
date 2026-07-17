import Container from "./components/common/Container";
import SectionTitle from "./components/common/SectionTitle";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <SectionTitle
          title="Professional Portfolio"
          subtitle="Building a modern React portfolio step by step."
        />

        <div className="flex justify-center">
          <Button>
            Download Resume
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default App;