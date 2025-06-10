import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-[#606C38] min-h-screen w-auto flex flex-col">
      <Header />

      <main className="flex-grow">
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
