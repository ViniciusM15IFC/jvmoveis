export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 90" className="w-10 h-10 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,4 96,60 82,60 50,22 18,60 4,60" fill="#f97316" />
        <polygon points="50,20 90,68 78,68 50,34 22,68 10,68" fill="#ffffff" />
      </svg>
      <div className="leading-none">
        <p className="font-display text-white text-xl tracking-tight">
          J<span className="text-orange-500">V</span>
        </p>
        <p className="text-orange-500 text-[9px] tracking-widest font-bold">
          MÓVEIS SOB MEDIDA
        </p>
      </div>
    </div>
  );
}