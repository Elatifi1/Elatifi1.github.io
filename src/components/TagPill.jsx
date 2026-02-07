export default function TagPill({ label }) {
  return (
    <span
      className="inline-block text-[11px] font-mono font-medium tracking-wide
                 px-2 py-0.5 border border-rule dark:border-rule-dark
                 text-ink-muted dark:text-ink-muted-dark
                 bg-paper dark:bg-paper-dark
                 rounded-sm leading-relaxed whitespace-nowrap"
    >
      {label}
    </span>
  );
}
