interface BonusShapeProps {
  gradientFrom?: string;
  gradientTo?: string;
  strokeColor?: string;
  strokeWidth?: number;
  shadowColor?: string;
  shadowOffset?: number;
  className?: string;
}

export function BonusShape({
  gradientFrom = "#00FFD4",
  gradientTo = "#00BAFE", 
  strokeColor = "#000",
  strokeWidth = 8.288,
  shadowColor = "#000000",
  shadowOffset = 73,
  className = ""
}: BonusShapeProps) {
  return (
    <svg
      width="100%"
      viewBox="0 0 663 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-auto ${className}`}
    >
      <g filter="url(#bonusDropShadow)">
        <path
          d="M9 40.9369C9 21.1081 26.7807 5.97204 46.3842 8.95277C108.892 18.4571 237.059 36 331.5 36C425.941 36 554.108 18.4571 616.616 8.95278C636.219 5.97205 654 21.1081 654 40.9369V198C654 215.673 639.673 230 622 230H41C23.3269 230 9 215.673 9 198V40.9369Z"
          fill="url(#bonusGradient)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <filter
          id="bonusDropShadow"
          x="0"
          y="0"
          width="663"
          height="300"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow 
            dx="0" 
            dy={shadowOffset} 
            floodColor={shadowColor} 
            floodOpacity="1"
            stdDeviation="0"
          />
        </filter>
        <linearGradient
          id="bonusGradient"
          x1="331.5"
          y1="8"
          x2="331.5"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
    </svg>
  );
}
