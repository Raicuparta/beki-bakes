import { SpecificIconProps } from ".";

interface Props extends SpecificIconProps {
  bodyColor: string;
  bodyOutlineColor: string;
}

export const MatchaPyramidIcon = ({ size }: SpecificIconProps) => (
  <PyramidIcon size={size} bodyColor="#839847" bodyOutlineColor="#526127" />
);

const PyramidIcon = ({ size = 60, bodyColor, bodyOutlineColor }: Props) => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-30 -30 1084 1084"
    width={size}
    height={size}
  >
    <style>
      {`
		.pyramid-s0 { fill: ${bodyColor};stroke: ${bodyOutlineColor};stroke-linecap: round;stroke-linejoin: round;stroke-width: 50 } 
		.pyramid-s1 { fill: #ffffff;stroke: #ded0a0;stroke-linecap: round;stroke-linejoin: round;stroke-width: 50 } 
		.pyramid-s2 { fill: #db9d4c;stroke: #bd863e;stroke-linecap: round;stroke-linejoin: round;stroke-width: 50 } 
		.pyramid-s3 { fill: none;stroke: #bd863e;stroke-linecap: round;stroke-linejoin: round;stroke-width: 50 } 
      `}
    </style>
    <path
      id="Shape 1"
      className="pyramid-s0"
      d="m340.5 141.5l174 108.9l174-108.9c0 0 270.4 382.3 263.3 445.9c-5.6 49.1-384.1 204.6-437.3 207.5c-44.3 2.4-437.3-170-440.3-209c-4.1-54.7 266.3-444.4 266.3-444.4z"
    />
    <path id="Shape 2" className="pyramid-s0" d="m514.5 250.4v544.5" />
    <path
      id="Shape 3"
      className="pyramid-s1"
      d="m507.3 371.6c-96.7 0-18.9-95.8-108.3-105.5c-80.4-8.6-77.8 74.5-146.9 44.5c-54.9-23.8 12.4-109.5 59.7-167.3c55.8-68.2 53.3-91.3 185.6-91.3c132.3 0 150 28.7 210.4 73.9c59.5 44.5 135.9 153.8 76.9 187.6c-54.1 31.1-77.3-78.7-145-59.9c-75.4 20.9-55.6 114.1-132.4 118z"
    />
    <path id="Layer 1" className="pyramid-s0" d="" />
    <path
      id="Shape 4"
      className="pyramid-s2"
      d="m518.4 842.5c56.8 1.4 432.8-187.1 456.2-217.6c20.7-26.8 0 166.3 0 166.3c0 0-400.4 197.3-456.2 200.1c-60.2 3-463-198.6-463-198.6c0 0-32.3-190.8 0-163.4c27.3 23.2 407.3 214.6 463 213.2z"
    />
    <path id="Layer 2" className="pyramid-s3" d="m512 847.9v144.1" />
  </svg>
);
