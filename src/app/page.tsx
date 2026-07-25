import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="container flex min-w-[320px] max-w-7xl flex-col gap-y-12 px-10 max-[400px]:px-6 sm:px-20 md:gap-y-0 lg:flex-row lg:gap-x-25 lg:gap-y-20">
      <Header />
      <div className="mb-28.5 space-y-20 md:space-y-28 md:py-20 lg:flex-1 lg:space-y-36 lg:py-32">
        <About />
        <Projects />

        {/*
        <Technologies />
        <Contact />*/}
      </div>
    </main>
  );
}
