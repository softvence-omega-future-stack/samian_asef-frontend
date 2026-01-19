
const RideStatusSVG = () => {
  return (
    <svg width="34" height="74" viewBox="0 0 34 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Line */}
      <path d="M17 14V53" stroke="#DEE2E4"/>

      {/* Top Circle */}
      <g filter="url(#filter0_d)">
        <circle cx="17" cy="13" r="7" fill="#89CFFF"/>
        <circle cx="17" cy="13" r="6" stroke="white" strokeWidth="2"/>
        <text x="17" y="17" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">
          A
        </text>
      </g>

      {/* Bottom Circle */}
      <g filter="url(#filter1_d)">
        <circle cx="17" cy="53" r="7" fill="#A089FF"/>
        <circle cx="17" cy="53" r="6" stroke="white" strokeWidth="2"/>
        <text x="17" y="57" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">
          B
        </text>
      </g>

      <defs>
        <filter id="filter0_d" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.372083 0 0 0 0 0.616045 0 0 0 0 0.783333 0 0 0 0.24 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_d" x="0" y="40" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.409796 0 0 0 0 0.346597 0 0 0 0 0.670833 0 0 0 0.16 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default RideStatusSVG;
