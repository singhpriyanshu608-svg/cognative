import { useEffect, useRef, useState, type MouseEvent } from 'react';
import {
  AnimatePresence,
  motion,
  type Variants,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  Globe2,
  Mic2,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import heroImage from '../assets/hero.png';

const stats = [
  { icon: Users, value: 100, suffix: '+', label: 'Members', detail: 'across braches' },
  { icon: Calendar, value: 20, suffix: '+', label: 'Events', detail: 'hosted yearly' },
  { icon: Award, value: 10, suffix: '+', label: 'Wins', detail: 'national titles' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years', detail: 'of legacy' },
];

const featuredEvents = [
  {
    title: 'IITB APD',
    date: 'December 2025',
    tag: 'Beginner friendly',
    image:
      '/iitd.jpg',
  },
  {
    title: ' IIM Indore',
    date: 'April 2026',
    tag: 'British Parliamentary',
    image:
      '/iimindore.jpg',
  },
  {
    title: 'IIT Kanpur ',
    date: 'February 2026',
    tag: 'Flagship event',
    image:
      '/iitkpr.JPG',
  },
];


const debateFormats = [
  {
    icon: Mic2,
    title: 'Parliamentary Debates',
    copy: 'Fast-paced rounds built around logic, structure, rebuttal, and teamwork.',
  },
  {
    icon: Globe2,
    title: 'Model UN & Policy',
    copy: 'Global affairs, diplomacy, crisis response, and persuasive policy thinking.',
  },
  {
    icon: Flame,
    title: 'Public Speaking',
    copy: 'Workshops and open mics that turn stage anxiety into stage presence.',
  },
];

const achievements = [
  {
    title: 'National Debate Champions',
    year: '2024',
    name: 'Vishwangi',
    role: 'Vice President',
    quote:
      'DebSoc changed the way I walked into rooms. From trembling through my first speech to leading tournament prep, it taught me that confidence is built one argument, one rebuttal, and one brave moment at a time.',
    image:
      'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'Best Parliamentary Team',
    year: '2023',
    name: 'Mudit Maheshwari',
    role: 'Vice President',
    quote:
      'My journey here has been chaotic, demanding, and deeply transformative. The late-night prep, last-minute permissions, and friendships made along the way became the parts of college I will always carry with me.',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'Inter-College Winners',
    year: '2023',
    name: 'Aarav Sharma',
    role: 'Parliamentary Debater',
    quote:
      'The society gave me a language for ambition. It pushed me to listen better, think faster, and stand by my ideas even when the room was waiting for me to hesitate.',
    image:
      'https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    title: 'Legacy of Leadership',
    year: '10+ Years',
    name: 'Ananya Rao',
    role: 'Alumna',
    quote:
      'Years later, I still return to the lessons I learned here. DebSoc was never just about winning rounds; it was about finding clarity under pressure and people who made you sharper.',
    image:
      'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

const debatePrompts = [
  'This House Believes...',
  'This House Would...',
  'This House Regrets...',
  'This House Supports...',
];

const marqueeItems = ['DEBATE', 'SPEAK', 'LEAD', 'ARGUE', 'THINK', 'PERSUADE', 'REBUT', 'INSPIRE'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return undefined;
    }

    let frameId: number;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [promptIndex, setPromptIndex] = useState(0);
  const [activeAchievement, setActiveAchievement] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24, mass: 0.4 });
  const imageX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-10, 10]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [14, -14]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [12, -12]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setPromptIndex((current) => (current + 1) % debatePrompts.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveAchievement((current) => (current + 1) % achievements.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  const handleHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetHeroParallax = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const showPreviousAchievement = () => {
    setActiveAchievement((current) => (current - 1 + achievements.length) % achievements.length);
  };

  const showNextAchievement = () => {
    setActiveAchievement((current) => (current + 1) % achievements.length);
  };

  const currentAchievement = achievements[activeAchievement];

  return (
    <>
      <main className="bg-navy-900 text-white overflow-hidden">
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={resetHeroParallax}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,12,31,0.96)_0%,rgba(6,12,31,0.78)_48%,rgba(6,12,31,0.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-900 to-transparent" />
          <div className="absolute inset-0 opacity-15">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
              }}
            />
          </div>


          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-3xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase"
                >
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                  DTU Debating Society
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white"
                >
                  Where sharper voices become stronger leaders.
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  className="mt-5 h-9 overflow-hidden text-xl sm:text-2xl font-semibold text-gold-400"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={debatePrompts[promptIndex]}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="block"
                    >
                      {debatePrompts[promptIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
                >
                  Ideas challenged. Arguments refined. A campus community built for people who
                  think clearly, speak boldly, and listen with intent.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link to="/events">
                    <motion.button
                      whileHover={{ y: -3, scale: 1.02, boxShadow: '0 18px 45px rgba(212, 175, 55, 0.24)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold-500 text-navy-900 font-bold shadow-xl shadow-gold-500/20 hover:bg-gold-400 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Explore Events
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ y: -3, scale: 1.02, boxShadow: '0 18px 45px rgba(255, 255, 255, 0.12)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/10 text-white font-bold backdrop-blur-md hover:bg-white/20 transition-colors"
                    >
                      <Users className="w-5 h-5" />
                      Meet the Society
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="relative hidden lg:block"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[2.5rem] bg-gold-500/10 blur-3xl"
                  style={{ x: glowX, y: glowY }}
                />
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ x: imageX, y: imageY }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-500/15 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur will-change-transform"
                >
                  <img src={heroImage} alt="Debating Society DTU" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/10 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.6 }}
                    className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-navy-900/80 p-5 backdrop-blur-xl"
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-gold-400 font-semibold">
                      Next training sprint
                    </p>
                    <p className="mt-2 text-2xl font-bold">Argumentation, rebuttals, POIs</p>
                    <p className="mt-2 text-gray-300 text-sm">Weekly sessions for new and experienced speakers.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
              className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    boxShadow: '0 18px 45px rgba(212, 175, 55, 0.14)',
                  }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-colors hover:border-gold-500/30"
                >
                  <stat.icon className="w-7 h-7 text-gold-500 mb-5" />
                  <div className="text-3xl sm:text-4xl font-bold">
                    <AnimatedStat value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-200">{stat.label}</div>
                  <div className="mt-1 text-xs text-gray-400">{stat.detail}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={fadeUp}
          className="py-20 sm:py-24 bg-navy-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start"
            >
              <motion.div variants={fadeUp}>
                <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">
                  Who we are
                </span>
                <h2 className="font-display mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                 We are the premier debating and public speaking society of Delhi Technological University.
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded on the principles of intellectual rigor and articulate expression, we cultivate an environment where ideas are challenged, structured, and delivered with absolute precision.

From dominating national parliamentary circuits to hosting DTU's most prestigious discourse events, our legacy is built on a culture of competitive excellence. We do not just teach you how to speak; we teach you how to think.
                </p>
                <motion.div variants={stagger} className="mt-8 grid sm:grid-cols-2 gap-4">
                  {['Weekly practice rounds', 'Mentorship from seniors', 'National tournament exposure', 'Beginner-friendly workshops'].map(
                    (item) => (
                      <motion.div
                        key={item}
                        variants={fadeUp}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 text-base text-gray-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                        {item}
                      </motion.div>
                    ),
                  )}
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                >
                  <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold-500 font-bold hover:text-gold-400 transition-colors">
                  Learn more about us
                  <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <section className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-5">
          <motion.div
            className="flex whitespace-nowrap text-gold-500/85"
            animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-5 inline-flex items-center gap-5 text-sm sm:text-base font-bold tracking-[0.28em]"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500/70" />
              </span>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={fadeUp}
          className="py-20 sm:py-24 bg-white text-navy-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
            >
              <div>
                <span className="text-gold-600 text-sm font-bold tracking-[0.2em] uppercase">
                 
                </span>
                <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold">
                  Past Events
                </h2>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              >
                <Link to="/events" className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-gold-600 transition-colors">
                  View all events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {featuredEvents.map((event, index) => (
                <motion.article
                  key={event.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                    boxShadow: '0 28px 70px rgba(6, 12, 31, 0.18)',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24, delay: index * 0.02 }}
                  className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-xl shadow-black/10 transition-colors hover:border-gold-500/30"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="inline-flex rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-navy-900">
                        {event.tag}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white">{event.title}</h3>
                      <p className="mt-1 text-sm font-medium text-gray-200">{event.date}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={fadeUp}
          className="py-20 sm:py-24 bg-navy-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              className="text-center  mx-auto mb-12"
            >
              <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">
                What we do
              </span>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold">
                Train for every stage, format, and argument.
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
              {debateFormats.map((format, index) => (
                <motion.div
                  key={format.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow: '0 24px 60px rgba(212, 175, 55, 0.11)',
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24, delay: index * 0.02 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur transition-colors hover:border-gold-500/30"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-900 flex items-center justify-center mb-6">
                    <format.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">{format.title}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">{format.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={fadeUp}
          className="relative overflow-hidden py-20 sm:py-24 bg-gold-500 text-navy-900"
        >
          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-navy-900/20" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-navy-900/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              className="relative z-10 text-center"
            >
              <motion.div variants={fadeUp} className="flex flex-col items-center">
                <h2 className="font-display mt-3 text-4xl sm:text-5xl font-bold">Journey So Far</h2>
              </motion.div>

              <motion.div variants={fadeUp} className="relative mt-12">
                <div className="pointer-events-none absolute inset-x-6 top-8 bottom-8 rounded-[2rem] bg-navy-900/20 blur-3xl" />

                <div className="relative mx-auto w-full max-w-5xl">
                  <button
                    type="button"
                    onClick={showPreviousAchievement}
                    className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl shadow-navy-900/20 transition-transform hover:scale-105 md:flex"
                    aria-label="Previous achievement story"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#081426]/90 p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10 md:min-h-[360px]">

  <div className="absolute inset-0 rounded-[2rem] bg-[#081426]" />

<div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gold-500/10 blur-[100px]" />

<div className="absolute -top-16 right-10 h-72 w-72 rounded-full bg-gold-500/10 blur-[120px]" />

<div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gold-500/8 blur-[100px]" />

  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-gold-500/[0.04]" />

  <AnimatePresence mode="wait">
                      <motion.article
                        key={currentAchievement.title}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="relative grid min-h-[500px] items-center gap-8 md:min-h-[360px] md:grid-cols-[260px_1fr] md:gap-12"
                      >
                        <motion.div
                          key={currentAchievement.image}
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="mx-auto mt-8 h-36 w-36 overflow-hidden rounded-full border-4 border-gold-500 bg-white/10 shadow-2xl shadow-black/30 sm:h-40 sm:w-40 md:h-56 md:w-56"
                        >
                          <img
                            src={currentAchievement.image}
                            alt={currentAchievement.name}
                            className="h-full w-full object-cover"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 28 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="text-center md:text-left"
                        >
                         <div className="min-h-[260px] flex items-center">
                            <p
                            className="
                              font-display
                              italic
                              text-white/95
                              text-xl
                              sm:text-2xl
                              md:text-[28px]
                              font-normal
                              leading-[1.4]
                              max-w-4xl
                            "
                          >
                              "{currentAchievement.quote}"
                            </p>
                          </div>

                          <div className="mt-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">{currentAchievement.name}</h3>
                            <p className="mt-2 text-lg font-semibold text-gold-500">{currentAchievement.role}</p>
                            <p className="mt-4 inline-flex rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-navy-900">
                              {currentAchievement.title} ({currentAchievement.year})
                            </p>
                          </div>
                        </motion.div>
                      </motion.article>
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={showNextAchievement}
                    className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl shadow-navy-900/20 transition-transform hover:scale-105 md:flex"
                    aria-label="Next achievement story"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousAchievement}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white md:hidden"
                    aria-label="Previous achievement story"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {achievements.map((achievement, index) => (
                    <button
                      type="button"
                      key={achievement.title}
                      onClick={() => setActiveAchievement(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeAchievement ? 'w-8 bg-navy-900' : 'w-2.5 bg-navy-900/30'
                      }`}
                      aria-label={`Show story ${index + 1}`}
                    />
                  ))}

                  <button
                    type="button"
                    onClick={showNextAchievement}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white md:hidden"
                    aria-label="Next achievement story"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <Link to="/achievements">
                  <motion.button
                    whileHover={{ y: -3, scale: 1.02, boxShadow: '0 18px 45px rgba(6, 12, 31, 0.24)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white hover:bg-navy-900 transition-colors"
                  >
                    View all awards
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
        <Footer />
      </motion.div>
    </>
  );
}
