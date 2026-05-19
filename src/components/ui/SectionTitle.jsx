import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] ${light ? 'text-ivory-50' : 'text-ink-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-6 text-lg leading-relaxed ${light ? 'text-ivory-200' : 'text-ink-700/80'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
