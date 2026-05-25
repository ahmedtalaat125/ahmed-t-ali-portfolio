import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 border-t border-line/70 py-16 sm:py-24 ${className}`}
      initial={{ opacity: 0.2, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.28fr_0.72fr] lg:px-8">
        <div className="max-w-sm">
          {eyebrow ? (
            <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.24em]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl font-bold tracking-normal text-offwhite sm:text-5xl">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </motion.section>
  );
}
