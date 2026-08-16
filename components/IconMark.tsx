import {
  Award,
  BookOpen,
  Clock,
  Eye,
  FlaskConical,
  Handshake,
  Heart,
  Library,
  Lightbulb,
  Medal,
  School,
  Shield,
  Target,
  Trees,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  users: Users,
  shield: Shield,
  book: BookOpen,
  trophy: Trophy,
  heart: Heart,
  award: Award,
  school: School,
  trees: Trees,
  flask: FlaskConical,
  library: Library,
  medal: Medal,
  handshake: Handshake,
  lightbulb: Lightbulb,
  clock: Clock,
  eye: Eye,
  target: Target,
};

export function getIcon(name: string) {
  return map[name] ?? BookOpen;
}

export function IconMark({ name }: { name: string }) {
  const Icon = getIcon(name);
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-deep-navy text-marigold">
      <Icon size={22} strokeWidth={1.85} />
    </span>
  );
}

export function CardIconBg({ name }: { name: string }) {
  const Icon = getIcon(name);
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-8 h-36 w-36 rounded-full bg-marigold/18"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -bottom-5 text-deep-navy/[0.08]"
      >
        <Icon size={112} strokeWidth={1.15} />
      </span>
    </>
  );
}
