"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Baby,
  BarChart3,
  BellRing,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardPenLine,
  Compass,
  Crown,
  Fingerprint,
  Flower2,
  GraduationCap,
  HandHeart,
  Heart,
  IndianRupee,
  Landmark,
  Lightbulb,
  MapPin,
  MessageCircleHeart,
  Palette,
  PartyPopper,
  Play,
  QrCode,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

function SectionIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
      <p
        className={cn(
          "mb-4 text-xs font-bold uppercase tracking-[0.25em]",
          dark ? "text-emerald-300" : "text-emerald-600",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "display text-4xl font-semibold leading-[1.05] md:text-6xl",
          dark ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg",
            dark ? "text-slate-400" : "text-slate-500",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

function IconTile({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600",
        className,
      )}
    >
      <Icon size={20} strokeWidth={2} />
    </div>
  );
}

const orbitItems = [
  { label: "Admissions", icon: School, pos: "left-1/2 top-0 -translate-x-1/2" },
  { label: "Revenue", icon: IndianRupee, pos: "right-0 top-[30%]" },
  { label: "Teacher Quality", icon: GraduationCap, pos: "bottom-0 right-[10%]" },
  { label: "Parent Satisfaction", icon: Heart, pos: "bottom-0 left-[6%]" },
  { label: "School Reputation", icon: Award, pos: "left-0 top-[30%]" },
];

const problemToday = ["Attendance", "Fees", "Reports", "Records"];
const actualMatters = [
  "Teacher Engagement",
  "Child Happiness",
  "Parent Satisfaction",
  "Student Retention",
  "Admissions Growth",
];

const growthAchievements = [
  { title: "Parent Appreciation", icon: MessageCircleHeart, tint: "bg-rose-50 text-rose-500" },
  { title: "Creative Activities", icon: Palette, tint: "bg-violet-50 text-violet-500" },
  { title: "Child Engagement", icon: Baby, tint: "bg-amber-50 text-amber-500" },
  { title: "Team Support", icon: Users, tint: "bg-sky-50 text-sky-500" },
];

const rewards = [
  { title: "Recognition", icon: Trophy },
  { title: "Paid Leave", icon: Flower2 },
  { title: "Career Growth", icon: TrendingUp },
];

const timeline = [
  { title: "First Day", note: "A brave new beginning", icon: School, color: "bg-sky-500" },
  { title: "Learned Colors", note: "The world became brighter", icon: Palette, color: "bg-violet-500" },
  { title: "Drawing Competition", note: "An imagination took shape", icon: Award, color: "bg-amber-500" },
  { title: "Annual Day Performance", note: "A little star took the stage", icon: Star, color: "bg-rose-500" },
  { title: "Birthday Celebration", note: "A room full of smiles", icon: PartyPopper, color: "bg-pink-500" },
  { title: "Graduation Day", note: "Ready for the next adventure", icon: GraduationCap, color: "bg-emerald-500" },
];

const metrics = [
  { label: "Teacher Engagement", value: 92, icon: GraduationCap, accent: "text-violet-500" },
  { label: "Parent Satisfaction", value: 96, icon: HandHeart, accent: "text-rose-500" },
  { label: "Child Happiness", value: 98, icon: Baby, accent: "text-amber-500" },
  { label: "Retention Rate", value: 94, icon: ShieldCheck, accent: "text-sky-500" },
  { label: "Admissions Growth", value: 32, icon: TrendingUp, accent: "text-emerald-500" },
];

const capabilities = [
  {
    title: "Smart Attendance",
    text: "Biometric or QR check-in that takes seconds and keeps the school day moving.",
    outcome: "Less paperwork. More certainty.",
    icon: Fingerprint,
    accent: "from-violet-500 to-indigo-500",
  },
  {
    title: "Instant Parent SMS",
    text: "Parents receive an SMS when their child arrives or leaves, without needing another app.",
    outcome: "Peace of mind, automatically.",
    icon: QrCode,
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Android Notifications",
    text: "Important announcements, reminders, and moments reach families through timely push notifications.",
    outcome: "The right message, at the right time.",
    icon: BellRing,
    accent: "from-amber-500 to-orange-400",
  },
  {
    title: "Homework on the Web",
    text: "Teachers share simple, clear homework that parents can view from any phone or browser.",
    outcome: "Learning continues beyond the classroom.",
    icon: ClipboardPenLine,
    accent: "from-emerald-500 to-teal-400",
  },
];

const pathway = [
  { title: "Tree House", text: "One school", icon: School },
  { title: "Silchar", text: "One city", icon: Landmark },
  { title: "Barak Valley", text: "One region", icon: MapPin },
  { title: "North East", text: "A movement", icon: Compass },
  { title: "India", text: "A new standard", icon: Crown },
];

const partners = [
  { title: "School Leaders", text: "Grounded wisdom", icon: School },
  { title: "Educators", text: "Everyday insight", icon: GraduationCap },
  { title: "Parents", text: "Trust and context", icon: Heart },
  { title: "Technology", text: "Thoughtful scale", icon: Lightbulb },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={17}
          className={index < count ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-[#f7faf9] px-6">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <motion.div
          className="absolute -left-[10%] -top-[15%] h-[34rem] w-[34rem] rounded-full bg-emerald-200/60 blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, 45, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-[8%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-cyan-100 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 65, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="noise" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between py-7">
          <a href="#" className="display flex items-center gap-2 text-xl font-bold text-slate-950">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Sparkles size={15} />
            </span>
            School OS
          </a>
          <a
            href="#partnership"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-300 hover:text-emerald-700 sm:flex"
          >
            Build with us <ArrowRight size={15} />
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-6xl flex-col items-center justify-center pb-24 pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building the Future of Schools
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display text-[clamp(5rem,17vw,13rem)] font-semibold leading-[0.8] text-slate-950"
          >
            School <span className="text-emerald-500">OS</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display mt-10 max-w-4xl text-4xl font-semibold leading-[1.05] text-slate-900 md:text-6xl"
          >
            Building Better Schools,
            <br />
            <span className="text-slate-400">Not Better Software.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-2xl text-base leading-7 text-slate-500 md:text-lg"
          >
            Understanding how schools truly operate and helping every teacher,
            parent, and child thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#connected"
              className="group flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1"
            >
              Explore vision
              <ArrowDown size={16} className="transition group-hover:translate-y-1" />
            </a>
            <a
              href="#partnership"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300"
            >
              <Play size={15} className="fill-emerald-500 text-emerald-500" />
              Let&apos;s build together
            </a>
          </motion.div>
          {[
            { icon: BookOpen, pos: "left-[3%] top-[29%]", delay: 0 },
            { icon: Baby, pos: "right-[5%] top-[35%]", delay: 1 },
            { icon: GraduationCap, pos: "bottom-[15%] left-[14%]", delay: 2 },
            { icon: Heart, pos: "bottom-[12%] right-[14%]", delay: 3 },
          ].map(({ icon: Icon, pos, delay }) => (
            <motion.div
              key={pos}
              className={cn("glass absolute hidden h-14 w-14 items-center justify-center rounded-2xl text-emerald-600 md:flex", pos)}
              animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
              transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={22} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="connected" className="section-pad overflow-hidden bg-white">
        <SectionIntro
          eyebrow="The whole picture"
          title="Everything Is Connected"
          description={
            <>
              A school is not departments.
              <br />
              <span className="font-semibold text-slate-800">A school is a living system.</span>
            </>
          }
        />
        <Reveal className="relative mx-auto aspect-square max-w-[650px]">
          <svg className="absolute inset-[8%] h-[84%] w-[84%]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#d1fae5" strokeWidth="0.8" />
            <circle className="ring-dash" cx="50" cy="50" r="42" fill="none" stroke="#10b981" strokeWidth="0.8" />
          </svg>
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-slate-950 text-center text-white shadow-2xl shadow-emerald-900/20 md:h-44 md:w-44">
            <Sparkles className="mb-2 text-emerald-400" size={24} />
            <span className="display text-2xl font-semibold">One living</span>
            <span className="text-sm text-slate-400">system</span>
          </div>
          {orbitItems.map(({ label, icon: Icon, pos }, index) => (
            <motion.div
              key={label}
              className={cn(
                "soft-card absolute z-10 flex w-32 flex-col items-center rounded-2xl bg-white px-3 py-4 text-center md:w-40 md:rounded-3xl md:py-5",
                pos,
              )}
              whileHover={{ y: -7, scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <IconTile icon={Icon} />
              <span className="mt-3 text-[11px] font-bold leading-tight text-slate-700 md:text-sm">{label}</span>
            </motion.div>
          ))}
        </Reveal>
      </section>

      <section className="section-pad bg-slate-50">
        <SectionIntro
          eyebrow="Simple to use. Advanced by design."
          title={
            <>
              Simple for every day.
              <br />
              <span className="text-emerald-500">Powerful for what matters.</span>
            </>
          }
          description="School OS keeps familiar school operations effortless, then connects them to the outcomes that help a school grow."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="soft-card h-full rounded-[2rem] bg-white p-7 md:p-10">
              <div className="mb-9 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Simple daily operations</p>
                  <h3 className="display mt-2 text-2xl font-semibold">Everything schools already manage</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                  <BarChart3 size={22} />
                </div>
              </div>
              <div className="space-y-3">
                {problemToday.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-slate-600">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/15 md:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-500/20 blur-[60px]" />
              <div className="relative mb-9 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">Advanced school intelligence</p>
                  <h3 className="display mt-2 text-2xl font-semibold">The outcomes behind the operations</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <Target size={22} />
                </div>
              </div>
              <div className="relative space-y-3">
                {actualMatters.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-4 text-slate-200">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-white">
        <SectionIntro
          eyebrow="Teacher transformation"
          title={
            <>
              Imagine every teacher performing
              <br className="hidden md:block" /> like your best teacher.
            </>
          }
        />
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal className="soft-card rounded-[2rem] bg-slate-50 p-7 md:p-9">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Current</p>
            <div className="space-y-4">
              {[5, 2, 3].map((count, index) => (
                <div key={index} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-700">Teacher {String.fromCharCode(65 + index)}</span>
                    <span className="text-xs text-slate-400">Today</span>
                  </div>
                  <Stars count={count} />
                </div>
              ))}
            </div>
          </Reveal>
          <motion.div
            className="mx-auto flex h-14 w-14 rotate-90 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 lg:rotate-0"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowRight />
          </motion.div>
          <Reveal delay={0.15} className="relative overflow-hidden rounded-[2rem] bg-emerald-500 p-7 shadow-glow md:p-9">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-[30px]" />
            <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-950/60">Future</p>
            <div className="relative space-y-4">
              {[5, 4, 4].map((count, index) => (
                <div key={index} className="rounded-2xl bg-white/95 p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-800">Teacher {String.fromCharCode(65 + index)}</span>
                    {index > 0 && <TrendingUp size={15} className="text-emerald-600" />}
                  </div>
                  <Stars count={count} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-16 max-w-4xl text-center">
          <p className="display text-3xl font-semibold leading-tight text-slate-800 md:text-5xl">
            “The goal is not to find superstar teachers.
            <span className="text-emerald-500"> The goal is to create more of them.</span>”
          </p>
        </Reveal>
      </section>

      <section className="section-pad bg-[#f7faf9]">
        <SectionIntro
          eyebrow="Teacher growth system"
          title="Growth Instead of Punishment"
          description="Make great work visible. Turn everyday progress into meaningful recognition."
        />
        <div className="mx-auto max-w-6xl">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {growthAchievements.map(({ title, icon: Icon, tint }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="soft-card rounded-3xl bg-white p-6"
              >
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", tint)}>
                  <Icon size={22} />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">Achievement</p>
                <h3 className="display mt-2 text-xl font-semibold">{title}</h3>
              </motion.div>
            ))}
          </Reveal>
          <Reveal className="my-10 flex items-center justify-center gap-4 text-emerald-600">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-300" />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.7, repeat: Infinity }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100"
            >
              <ArrowDown size={19} />
            </motion.div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-300" />
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-3">
            {rewards.map(({ title, icon: Icon }, index) => (
              <div key={title} className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-500/20 blur-[35px]" />
                <div className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                    <Icon size={21} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Reward 0{index + 1}</p>
                    <h3 className="display mt-1 text-xl font-semibold">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <SectionIntro
          eyebrow="The child journey"
          title="Parents Remember Moments"
          description="The story of childhood is written in small, unforgettable milestones."
        />
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute bottom-8 left-6 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-sky-200 via-violet-200 to-emerald-300 md:left-1/2" />
            {timeline.map(({ title, note, icon: Icon, color }, index) => (
              <Reveal
                key={title}
                delay={index * 0.05}
                className="relative mb-6 grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-4 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-x-6"
              >
                <div
                  className={cn(
                    "soft-card col-start-2 row-start-1 w-full rounded-3xl bg-white p-5",
                    index % 2
                      ? "md:col-start-3"
                      : "md:col-start-1 md:text-right",
                  )}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Moment 0{index + 1}</p>
                  <h3 className="display mt-2 text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{note}</p>
                </div>
                <div
                  className={cn(
                    "relative z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center justify-self-center rounded-2xl text-white shadow-lg md:col-start-2",
                    color,
                  )}
                >
                  <Icon size={20} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 rounded-[2rem] bg-emerald-50 px-7 py-10 text-center">
            <Heart className="mx-auto mb-5 fill-emerald-500 text-emerald-500" />
            <p className="display text-3xl font-semibold text-slate-900 md:text-4xl">
              Parents remember moments,
              <br />
              <span className="text-emerald-600">not attendance records.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-slate-950">
        <SectionIntro
          dark
          eyebrow="A new scorecard"
          title="The Metrics That Matter"
          description="When we measure the human experience, better outcomes follow."
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map(({ label, value, icon: Icon, accent }, index) => (
            <Reveal key={label} delay={index * 0.06}>
              <motion.div
                whileHover={{ y: -7 }}
                className="metric-glow rounded-3xl border border-white/[0.07] bg-white/[0.04] p-6 text-white"
              >
                <Icon className={accent} size={22} />
                <p className="display mt-10 text-5xl font-semibold tracking-tight">
                  <Counter value={value} />
                </p>
                <p className="mt-3 text-sm leading-5 text-slate-400">{label}</p>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 }}
                    className="h-full rounded-full bg-emerald-400"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-white">
        <SectionIntro
          eyebrow="Advanced features. Simple experience."
          title={
            <>
              Powerful technology that
              <br />
              <span className="text-emerald-500">feels effortless.</span>
            </>
          }
          description="Every capability is designed to take fewer steps, require less training, and quietly do more for the entire school."
        />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {capabilities.map(({ title, text, outcome, icon: Icon, accent }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -7 }}
                className="soft-card group relative h-full overflow-hidden rounded-[2rem] bg-slate-50 p-7 md:p-9"
              >
                <div
                  className={cn(
                    "absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br opacity-[0.12] blur-2xl transition duration-500 group-hover:opacity-25",
                    accent,
                  )}
                />
                <div className="relative flex items-start justify-between gap-5">
                  <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", accent)}>
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Capability 0{index + 1}
                  </span>
                </div>
                <div className="relative mt-12">
                  <h3 className="display text-3xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">{text}</p>
                  <div className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-700">
                    <Check size={16} className="text-emerald-500" />
                    {outcome}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-4 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-4 text-center text-sm font-medium text-emerald-800">
          <Sparkles size={17} className="shrink-0 text-emerald-500" />
          One connected experience for school leaders, teachers, parents, and children.
        </Reveal>
      </section>

      <section className="section-pad overflow-hidden bg-[#f7faf9]">
        <SectionIntro
          eyebrow="The vision"
          title={
            <>
              Start Small.
              <br />
              <span className="text-emerald-500">Think Big.</span>
            </>
          }
          description="Prove it deeply. Learn honestly. Then let the idea travel."
        />
        <div className="relative mx-auto max-w-6xl">
          <svg className="absolute left-[10%] top-1/2 hidden h-24 w-[80%] -translate-y-1/2 lg:block" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M20 55 C150 0 260 100 390 48 S620 4 750 52 S900 92 980 40" fill="none" stroke="#d1fae5" strokeWidth="5" strokeLinecap="round" />
            <path className="path-dash" d="M20 55 C150 0 260 100 390 48 S620 4 750 52 S900 92 980 40" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="relative grid gap-5 lg:grid-cols-5">
            {pathway.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={cn(
                    "soft-card relative rounded-3xl bg-white p-6 text-center",
                    index % 2 ? "lg:mt-24" : "",
                  )}
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-emerald-400">
                    <Icon size={20} />
                  </span>
                  <p className="mt-7 text-xs font-bold uppercase tracking-widest text-emerald-600">0{index + 1}</p>
                  <h3 className="display mt-2 text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="relative overflow-hidden bg-white px-6 py-24 md:py-36">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/70 blur-[100px]" />
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white shadow-2xl shadow-slate-900/20 md:px-16 md:py-20">
          <div className="noise" />
          <div className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">A shared ambition</p>
                <h2 className="display mt-5 text-5xl font-semibold leading-[.95] md:text-7xl">
                  Let&apos;s Build
                  <br />
                  This Together.
                </h2>
              </div>
              <div className="space-y-2 text-xl font-medium text-slate-500 md:text-2xl">
                <p>Not another ERP.</p>
                <p>Not another attendance app.</p>
                <p className="pt-3 text-white">
                  A School Operating System built from real school challenges and real school leaders.
                </p>
              </div>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map(({ title, text, icon: Icon }) => (
                <motion.div
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,.1)" }}
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <IconTile icon={Icon} className="bg-emerald-400 text-slate-950" />
                  <h3 className="display mt-7 text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{text}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-lg text-sm leading-6 text-slate-400">
                The best version of School OS will not be built in isolation. It will be shaped by the people who understand schools best.
              </p>
              <a
                href="mailto:hello@schoolos.in"
                className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
              >
                Start a conversation <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-100 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="display text-lg font-bold text-slate-950">School <span className="text-emerald-500">OS</span></div>
          <p className="text-sm text-slate-400">Building Better Schools, Not Better Software.</p>
          <p className="text-xs text-slate-400">A vision for what schools can become.</p>
        </div>
      </footer>
    </main>
  );
}
