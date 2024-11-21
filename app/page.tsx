import { Header, Hero, Features, Pricing, Footer } from "./components/index";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      {/* Features Section */}
      <Features />

      <Pricing />

      {/* Footer */}
      <Footer />
    </div>
  );
}
