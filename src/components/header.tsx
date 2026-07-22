import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "@/lib/data";
import DesktopNavigation from "./ui/desktop-nav";
import Greeting from "./ui/greetings";
import MotionContainer from "./ui/motion-container";
import MotionItem from "./ui/motion-item";
import ThemeToggle from "./ui/theme-toggle";
import Tooltip from "./ui/tooltip";

export default function Header() {
  return (
    <MotionContainer
      as="header"
      className="py-6 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-screen"
    >
      <MotionItem className="lg:@container-size flex h-full flex-col items-center justify-between gap-y-10 overflow-clip rounded-[2.5rem] py-10 lg:w-md lg:items-start lg:bg-header-bg lg:pr-20 lg:pl-14 [@container(height<400px)]:justify-normal">
        <MotionItem className="flex flex-col items-center gap-y-10 lg:items-start lg:gap-y-6">
          <Image
            src={"/assets/Raw-Logo.svg"}
            alt="siobaldev logo"
            width={40}
            height={40}
            className="size-10"
          />
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div className="text-center lg:text-left">
              <Greeting />
              <h1 className="text-nowrap font-bold text-name -tracking-widest lg:text-5xl">
                Minard Siobal
              </h1>
            </div>
            <p className="text-center text-sm leading-5.5 lg:text-left">
              I design and develop thoughtful, <br /> user-focused digital
              experiences.
            </p>
          </div>
        </MotionItem>

        <MotionItem className="hidden lg:flex [@container(height<500px)]:hidden">
          <DesktopNavigation />
        </MotionItem>

        <MotionItem>
          <Link
            href={"#contact"}
            className="flex w-fit items-center gap-x-2.5 rounded-md border border-border-muted bg-background px-4 py-3 font-bold text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-header-bg"
          >
            <span className="relative h-2.5 w-2.5 rounded-full bg-indicator before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-indicator before:opacity-75 before:content-['']" />
            Open for Work
          </Link>
        </MotionItem>

        <MotionItem className="flex gap-x-4">
          {socialIcons.map((social) => (
            <ul key={social.tooltip}>
              <li className="group relative rounded-sm">
                <Tooltip title={social.tooltip} position={"-top-14"} />
                <Link
                  rel="noopener noreferrer"
                  href={social.link}
                  target="_blank"
                  aria-label={social.label}
                >
                  <social.icon className="text-inactive-foreground transition-colors duration-300 hover:text-foreground hover:opacity-100" />
                </Link>
              </li>
            </ul>
          ))}
          <div className="flex items-center gap-x-4">
            <hr className="w-10 border-inactive-foreground" />
            <ThemeToggle />
          </div>
        </MotionItem>
      </MotionItem>
    </MotionContainer>
  );
}
