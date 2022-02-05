type Props = {
  outlineColor: string;
  cakeColor: string;
  fillingColor: string;
  size?: number;
};

const outlineWidth = 20;
const cakeWidth = 71;

export const RollCakeIcon = ({
  outlineColor,
  cakeColor,
  fillingColor,
  size = 60,
}: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 534 534"
    width={size}
    height={size}
    display="block"
    style={{
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
  >
    <title>roll-cake-icon</title>
    <style>
      {`
		tspan { white-space:pre }
		`}
    </style>
    <path
      style={{
        fill: fillingColor,
      }}
      id="filling"
      className="filling"
      d="M197.06 240.37C189.09 155.54 376.77 210.11 363.07 271.42C353.2 315.62 329.92 308.42 294.64 307.55C242.3 306.27 202.13 294.3 197.06 240.37Z"
    />
    <path
      style={{
        stroke: cakeColor,
        strokeWidth: cakeWidth,
      }}
      id="cake"
      className="cake"
      d="M236 344C252 356.88 266.7 388.74 231.5 423.94C196.3 459.14 46.1 450.8 46.1 316.18C46.1 181.56 149.44 93.94 272.5 93.94C393.9 93.94 490.38 178.98 490.38 319.48C490.38 448.56 361.5 457.44 249.5 428.44"
    />
    <path
      style={{
        stroke: outlineColor,
        strokeWidth: outlineWidth,
      }}
      id="outline"
      className="outline"
      d="M233 310.29C256.64 310.29 266.34 320.38 277.5 337.94C295.56 366.36 294.82 398.44 275.49 427.83C245.8 472.99 204.85 481.6 156 477.44C119 474.44 99 462.44 88 456.44C55.55 438.74 29.16 411.1 19 375.44C8.59 338.89 7.47 297.99 16 261.94C25.36 222.37 39.21 187.84 65 154.44C90.81 121.02 139.49 87.28 197 69.44C269.5 46.94 355.34 63.38 407 93.44C462 125.44 489 168.94 506.5 217.44C522.19 260.92 538 322.44 506.5 398.94C472.95 480.41 381.69 475.44 332.1 475.44C311.56 475.44 255.12 474.96 238 463.94"
    />
  </svg>
);
