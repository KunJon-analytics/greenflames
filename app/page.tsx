import About from "./_components/about";
import Features from "./_components/features/features";
import Hero from "./_components/hero/hero";
import Aos from "./_providers/aos";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* container  */}
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl bg-white text-gray-700">
        <About />
        <Features />
      </div>
      <Aos />
    </main>
  );
}
