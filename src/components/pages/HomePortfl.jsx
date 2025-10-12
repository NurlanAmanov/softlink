import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "Stellar Tech Solutions",
    desc: "We redesigned Stellar Tech’s website to enhance.",
    img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Green Wave Foods",
    desc: "We built a user-friendly Shopping platform for Green Wave Foods.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Horizon Real Estate",
    desc: "We helped Horizon Real Estate establish a trusted brand identity.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
];

function Sparkle() {
  return (
    <svg
      className="size-6 md:size-6 text-[#1a1a3d]"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 0l2.1 5.8L18 8l-5.9 2.1L10 16l-2.1-5.9L2 8l5.9-2.2L10 0z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="size-4 md:size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/** Animasiya variantları */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function HomePortfl() {
  return (
    <section className="w-full text-black">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-start justify-between gap-6"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 text-xl font-medium text-black">
              <Sparkle />
              <span>Our Work</span>
            </div>

            <h2 className="mt-4 text-3xl leading-tight font-bold md:text-5xl">
              Our design{" "}
              <span className="text-[#1a1a3d] relative">
                masterpieces
                {/* underline shimmer */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#1a1a3d] transition-all duration-500 group-[.cards]:hover:w-full"></span>
              </span>
            </h2>
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05, x: 2 }}
            className="group inline-flex items-center gap-2 rounded-full bg-[#1a1a3d] px-4 py-2 text-sm font-medium text-white hover:bg-transparent border border-[#1a1a3d] hover:text-black transition"
            type="button"
          >
            <span>View All Portfolio</span>
            <span className="rounded-full bg-neutral-900/10 p-1 transition-transform group-hover:translate-x-0.5">
              <ArrowRight />
            </span>
          </motion.button>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="cards mt-10 grid gap-6 md:mt-14 md:grid-cols-3"
        >
          {works.map((w, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-800/70 p-4 ring-1 ring-white/5 backdrop-blur-sm transition hover:bg-neutral-800"
            >
              {/* Image frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800">
                <motion.img
                  src={w.img}
                  alt={w.title}
                  initial={{ scale: 1.06, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="size-full object-cover duration-500 group-hover:scale-[1.03]"
                />

                {/* Corner action button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute bottom-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-neutral-900/80 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-neutral-900"
                  aria-label="Open case study"
                >
                  ×
                </motion.button>

                {/* top-left subtle gradient sweep */}
                <span className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="text-lg font-semibold md:text-xl text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {w.desc}
                </p>
              </div>

              {/* Soft glow */}
              <div
                className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[26px] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 50% at 70% 20%, rgba(190,242,100,0.15), rgba(0,0,0,0))",
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Section ring */}
        <div className="pointer-events-none mt-10 rounded-3xl border border-white/5"></div>
      </div>
    </section>
  );
}
