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
		.s0 { fill: #db9d4c;stroke: #bd863e;stroke-width: 100 } 
		.s1 { fill: #222e17;stroke: #2e3b20;stroke-width: 80 } 
		.s2 { opacity: .8;fill: #ceac2a } 
		.s3 { opacity: .8;fill: #f0c933 } 
  `}
    </style>
    <path
      id="shell"
      className="s0"
      d="m512 995.6c-267.5 0-483.7-216.2-483.7-483.6c0-267.5 216.2-483.7 483.7-483.7c267.4 0 483.6 216.2 483.6 483.7c0 267.4-216.2 483.6-483.6 483.6z"
    />
    <path
      id="filling"
      className="s1"
      d="m511.8 927.3c-229.7 0-415.5-185.7-415.5-415.5c0-229.7 185.8-415.5 415.5-415.5c229.8 0 415.5 185.8 415.5 415.5c0 229.8-185.7 415.5-415.5 415.5z"
    />
    <g id="goldleaf">
      <path
        id="goldleaf-bottom"
        className="s2"
        d="m428.1 521.2l100.3-91l67.9 74l-100.2 90.9z"
      />
      <path
        id="goldleaf-top"
        className="s3"
        d="m435.6 470.8l134.4-15.9l12.4 99.6l-134.4 16z"
      />
    </g>
  </svg>
);
