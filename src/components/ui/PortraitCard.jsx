import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';

export default function PortraitCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="lg:col-span-5 relative"
    >
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative aspect-[4/5] max-w-md mx-auto group"
      >
        {/* Decorative offset frame behind */}
        <motion.div
          aria-hidden
          variants={{
            rest: { x: 12, y: 12, opacity: 0.6 },
            hover: { x: 18, y: 18, opacity: 0.9 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 rounded-[28px] border border-gold-400/40 bg-gold-400/5"
        />

        {/* Main photo frame */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: -4 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 rounded-[28px] overflow-hidden shadow-premium bg-ink-900"
        >
          {!imgError ? (
            <motion.img
              src={profile.photo}
              alt={profile.name}
              onError={() => setImgError(true)}
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              variants={{
                rest: { scale: 1.05, filter: 'contrast(1.02) saturate(0.95)' },
                hover: { scale: 1.1, filter: 'contrast(1.05) saturate(1.05)' },
              }}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C9A24B" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pgrid)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-[140px] leading-none text-gold-400/80">
                  {profile.initials}
                </div>
              </div>
            </div>
          )}

          {/* Sweeping golden light reveal */}
          <motion.div
            initial={{ x: '-130%', opacity: 0 }}
            animate={{ x: '130%', opacity: [0, 0.45, 0] }}
            transition={{ duration: 1.6, delay: 0.9, ease: 'easeOut' }}
            className="absolute top-0 bottom-0 w-1/3 pointer-events-none"
            style={{
              background:
                'linear-gradient(75deg, transparent 0%, rgba(201,162,75,0.0) 35%, rgba(201,162,75,0.55) 50%, rgba(201,162,75,0.0) 65%, transparent 100%)',
              mixBlendMode: 'screen',
            }}
          />

          {/* Subtle blueprint grid overlay on photo */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="phgrid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#F5F2EC" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#phgrid)" />
          </svg>

          {/* Gradients for badge legibility */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink-950/85 via-ink-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-950/55 to-transparent pointer-events-none" />

          {/* Animated corner marks (path drawing) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
              d="M 2 8 V 2 H 8"
              stroke="#C9A24B"
              strokeWidth="0.4"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
              d="M 92 2 H 98 V 8"
              stroke="#C9A24B"
              strokeWidth="0.4"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.6, ease: 'easeOut' }}
              d="M 2 92 V 98 H 8"
              stroke="#C9A24B"
              strokeWidth="0.4"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.7, ease: 'easeOut' }}
              d="M 92 98 H 98 V 92"
              stroke="#C9A24B"
              strokeWidth="0.4"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Scan line — slow loop */}
          <motion.div
            aria-hidden
            initial={{ y: '-10%', opacity: 0 }}
            animate={{ y: ['-10%', '110%'], opacity: [0, 0.4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 3 }}
            className="absolute inset-x-0 h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, rgba(201,162,75,0.0) 15%, rgba(201,162,75,0.6) 50%, rgba(201,162,75,0.0) 85%, transparent 100%)',
              boxShadow: '0 0 16px rgba(201,162,75,0.35)',
            }}
          />

          {/* Floating role badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/40 backdrop-blur-md border border-ivory-50/15 text-[10px] uppercase tracking-[0.2em] text-ivory-100"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gold-400"
            />
            Bureau d'Études · BTP
          </motion.div>

          {/* Year stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute bottom-7 right-7 font-display text-right text-ivory-50"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-400">EST.</div>
            <motion.div
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0em', opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
              className="text-2xl leading-none mt-0.5"
            >
              2017
            </motion.div>
          </motion.div>

          {/* Name plate (bottom-left) */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-7 left-7 text-ivory-50"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-400 mb-1">
              {profile.firstName}
            </div>
            <div className="font-display text-2xl leading-none">{profile.lastName}</div>
          </motion.div>
        </motion.div>

        {/* Side info card (Disponibilité) — floats subtly */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="absolute -left-8 bottom-16 hidden md:block bg-ivory-50 border border-ink-900/10 rounded-2xl p-5 shadow-premium w-56 z-10"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-700/50">Disponibilité</div>
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-emerald-500" />
                <motion.div
                  animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-emerald-500"
                />
              </div>
            </div>
            <div className="font-display text-lg text-ink-900 leading-tight">
              Ouvert à de nouvelles missions
            </div>
            <div className="mt-2 text-xs text-ink-700/70">Q2 — Q4 · 2026</div>
          </motion.div>
        </motion.div>

        {/* Top-right meta chip */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.45, duration: 0.6 }}
          className="absolute -right-4 top-10 hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-ivory-50 border border-ink-900/10 shadow-premium z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700">EMI · Rabat</span>
        </motion.div>

        {/* Floating stat tile (top-right corner outside) */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-6 -bottom-6 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-ink-900 text-ivory-50 shadow-premium z-10"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </motion.div>
          <div className="leading-tight">
            <div className="font-display text-lg">+85</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-ivory-200/60">
              Projets livrés
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
