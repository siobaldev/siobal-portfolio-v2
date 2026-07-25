type Props = {
  title: string;
  position: string;
};

export default function Tooltip({ title, position }: Props) {
  return (
    <span
      className={`absolute whitespace-nowrap border-2 border-border-muted bg-border ${position} left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg px-4 py-2 font-medium text-[#F0EEE9] text-sm shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100`}
    >
      {title}
    </span>
  );
}
