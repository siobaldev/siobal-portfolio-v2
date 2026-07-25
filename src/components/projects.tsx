import Image from "next/image";
import Link from "next/link";
import Github from "@/assets/github-logo.svg";
import { projectItems } from "@/lib/data";
import MotionContainer from "./ui/motion-container";
import MotionItem from "./ui/motion-item";
import ProjectPreview from "./ui/project-preview";

export default function Projects() {
  return (
    <MotionContainer
      as="section"
      id="projects"
      className="scroll-mt-32 space-y-8"
      inView
    >
      <MotionItem
        as="h2"
        className="font-bold text-sm uppercase tracking-widest"
      >
        projects
      </MotionItem>

      <div className="space-y-16">
        {projectItems.map((item) => (
          <MotionItem
            as="div"
            key={item.title}
            className="group relative flex flex-col gap-y-2"
          >
            <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-header-bg" />
            <Link
              href={item.projectLink}
              target={item.projectLink === "/" ? "" : "_blank"}
              className="relative inline-flex items-center gap-x-2"
            >
              <div className="group/link flex items-center gap-x-2">
                <Image
                  className="h-6 w-fit"
                  src={item.icon}
                  width={100}
                  height={100}
                  alt={item.iconAlt}
                />
                <h3 className="font-medium text-lg">{item.title}</h3>
                <span className="translate-y-0.5 -rotate-45 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 motion-reduce:transition-none">
                  →
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-6 lg:leading-6.5">
              {item.description}
            </p>

            <div className="group/preview relative mt-2 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <ProjectPreview src={item.image} />
            </div>

            <Link
              href={item.githubLink}
              target="_blank"
              className="focus group/github mt-4 flex items-center gap-x-2"
            >
              <Github className="text-inactive-foreground duration-200 group-hover/github:text-foreground group-hover/github:transition-colors" />
              <span className="text-inactive-foreground text-sm duration-200 group-hover/github:text-foreground group-hover/github:transition-colors">
                {item.githubLink}
              </span>
            </Link>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tag.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-badge-bg px-4 py-2.5 text-inactive-foreground text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={item.projectLink}
              target={item.projectLink === "/" ? "" : "_blank"}
              rel="noopener noreferrer"
              className="focus group/view mt-4 inline-flex w-full items-center justify-center gap-x-2 rounded-md border border-border-muted bg-header-bg px-4 py-3 text-center font-bold text-xs uppercase tracking-widest shadow-[0_0px_0_0_#FF3B1F] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_3px_0_0_#FF3B1F] active:shadow-[0_2px_0_0_#FFC83D]"
            >
              View Project
              <span className="translate-y-0 -rotate-45 transition group-hover/view:translate-x-1 group-hover/view:-translate-y-0.5 motion-reduce:transition-none">
                →
              </span>
            </Link>
          </MotionItem>
        ))}
      </div>
    </MotionContainer>
  );
}
