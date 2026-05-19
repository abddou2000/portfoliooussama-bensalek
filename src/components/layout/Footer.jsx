import { profile } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ivory-200 container-px py-10 border-t border-ivory-50/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-400 text-ink-900 flex items-center justify-center font-display text-xs">OB</div>
          <span>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</span>
        </div>
        <div className="flex items-center gap-6 uppercase tracking-[0.2em]">
          <span>Maroc</span>
          <span>·</span>
          <span>EST. 2017</span>
          <span>·</span>
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  );
}
