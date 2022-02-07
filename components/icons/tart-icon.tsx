type Props = {
  size?: number;
};

export const TartIcon = ({ size = 60 }: Props) => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-30 -30 1084 1084"
    width={size}
    height={size}
  >
    <title>tart-icon</title>
    <style>
      {`
		.tart-s0 { fill: #e6ac60;stroke: #ac7c3e;stroke-width: 50 } 
		.tart-s1 { fill: #19270d;stroke: #364427;stroke-width: 50 } 
		.tart-s2 { opacity: .8;fill: #ceac2a } 
		.tart-s3 { opacity: .8;fill: #f0c933 } 
  `}
    </style>
    <path
      id="shell"
      className="tart-s0"
      d="m512 995.6c-267.5 0-483.7-216.2-483.7-483.6c0-267.5 216.2-483.7 483.7-483.7c267.4 0 483.6 216.2 483.6 483.7c0 267.4-216.2 483.6-483.6 483.6z"
    />
    <path
      id="filling"
      className="tart-s1"
      d="m511.8 898.8c-214 0-387-173-387-387c0-214 173-387 387-387c214 0 387 173 387 387c0 214-173 387-387 387z"
    />
    <g id="goldleaf">
      <path
        id="goldleaf-bottom"
        className="tart-s2"
        d="m428.1 521.2l100.3-91l67.9 74l-100.2 90.9z"
      />
      <path
        id="goldleaf-top"
        className="tart-s3"
        d="m435.6 470.8l134.4-15.9l12.4 99.6l-134.4 16z"
      />
    </g>
  </svg>
);
