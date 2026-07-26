import Link from "next/link";
import ContactForm from "./ui/contact-form";
import MotionContainer from "./ui/motion-container";
import MotionItem from "./ui/motion-item";

export default function Contact() {
  return (
    <MotionContainer
      as="section"
      id="contact"
      className="scroll-mt-32 space-y-8"
      inView
    >
      <MotionItem
        as="h2"
        className="w-fit font-bold text-sm uppercase tracking-widest hover:text-accent hover:opacity-100"
      >
        Contact
      </MotionItem>

      <MotionItem as="p">
        <span className="text-muted-foreground">
          I'm open to freelance work and junior roles. Send a message using the
          form below, or email me directly at
        </span>{" "}
        <Link
          href="m&#97;ilt&#111;&#58;&#37;&#55;3&#98;%6&#67;&#109;nr%6&#52;%4&#48;g&#109;ail&#46;&#37;63&#111;m"
          className="font-bold"
        >
          &#115;b&#108;mnrd&#64;&#103;m&#97;&#105;l&#46;com
        </Link>
      </MotionItem>

      <MotionItem>
        <ContactForm />
      </MotionItem>
    </MotionContainer>
  );
}
