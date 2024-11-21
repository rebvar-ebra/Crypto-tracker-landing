import { Header, Hero, Features, Footer } from "./components/index";
import Pr from "./components/Pr";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      {/* Features Section */}
      <Features />

      {/* <Pricing /> */}
      <Pr />

      {/* Footer */}
      <Footer />
    </div>
  );
}
