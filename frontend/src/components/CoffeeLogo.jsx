const CoffeeLogo = () => {
  return (
    <span className="coffee-logo">
      <span className="coffee-cup-emoji">☕</span>
      <svg className="coffee-steam-svg" viewBox="0 0 40 24" width="32" height="18" aria-hidden="true">
        <path className="steam steam-1" d="M10 22 Q8 12 10 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="steam steam-2" d="M20 20 Q20 10 20 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="steam steam-3" d="M30 22 Q32 12 30 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default CoffeeLogo;
