interface InstagramIconProps {
  size?: number;
  className?: string;
}

// Ícone do Instagram — o lucide-react removeu os ícones de marca nas
// versões recentes, então mantemos um SVG local com a mesma interface
// (size/className) dos demais ícones usados no projeto (ver WhatsAppIcon).
export function InstagramIcon({ size = 20, className = "" }: InstagramIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}