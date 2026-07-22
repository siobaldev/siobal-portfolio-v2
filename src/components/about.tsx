import MotionContainer from "./ui/motion-container";
import MotionItem from "./ui/motion-item";
import Neko from "./ui/neko";

export default function About() {
  return (
    <MotionContainer as="section" id="about" className="scroll-mt-32 space-y-8">
      <MotionItem
        as="h1"
        className="w-fit font-bold text-sm uppercase tracking-wider hover:text-foreground"
      >
        About
      </MotionItem>

      <MotionItem
        as="p"
        className="text-base text-muted-foreground leading-6.5"
      >
        Hey there! I&apos;m a{" "}
        <strong className="text-foreground">full stack developer </strong>
        who designs interfaces in Figma and develops them into working products
        with <strong className="text-foreground">Next.js</strong> and
        <strong className="text-foreground"> React</strong>. I started learning
        web development in 2023, and since then I&apos;ve moved from tutorials
        into building full projects on my own.
        <br />
        <br />I like
        <strong className="text-foreground"> owning the parts I work on</strong>
        , whether that&apos;s designing the UI, building the frontend, or wiring
        up the backend that makes it actually work.
        <br />
        <br />
        When I&apos;m not coding, you&apos;ll find me keeping up with tech news,
        reading novels and comics, gaming, or browsing meowrot contents. I love{" "}
        <span className="group relative">
          <span className="underline">cats</span>
          <Neko />
        </span>
      </MotionItem>
    </MotionContainer>
  );
}
