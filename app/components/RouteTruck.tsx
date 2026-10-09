const WHEELS = [14, 27, 91, 107];

// Kamion koji se kreće po isprekidanoj ruti u naslovu naslovne strane (samo ukras).
export default function RouteTruck() {
  return (
    <span className="route-truck">
      <svg viewBox="0 0 120 44" focusable="false">
        <rect className="truck-dark" x="0" y="4" width="78" height="28" rx="2" />
        <path className="truck-cab" d="M81 10h22l11 12v10H81z" />
        <path className="truck-light" d="M99 13h4.5l7 8H99z" />
        <rect className="truck-dark" x="0" y="31" width="116" height="4" />
        {WHEELS.map((cx) => (
          <g key={cx}>
            <circle className="truck-dark" cx={cx} cy="37.5" r="5.5" />
            <circle className="truck-light" cx={cx} cy="37.5" r="2" />
          </g>
        ))}
      </svg>
    </span>
  );
}
