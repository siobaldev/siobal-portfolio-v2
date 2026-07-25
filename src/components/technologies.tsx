import MotionContainer from "./ui/motion-container";
import MotionItem from "./ui/motion-item";
import TechnologyTabs from "./ui/technology-tabs";

export default function Technologies() {
  return (
    <MotionContainer
      as="section"
      id="technologies"
      className="scroll-mt-32 space-y-4"
      inView
    >
      <MotionItem
        as="h4"
        className="w-fit font-bold text-sm uppercase tracking-widest hover:text-accent hover:opacity-100"
      >
        Technologies
      </MotionItem>
      <MotionItem>
        <TechnologyTabs />
      </MotionItem>
    </MotionContainer>
  );
}
