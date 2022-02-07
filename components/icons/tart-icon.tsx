type Props = {
  size?: number;
};

export const TartIcon = ({ size = 60 }: Props) => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={size}
    height={size}
  >
    <path
      style={{ fill: "#ba8642", stroke: "#ba8642", strokeWidth: 50 }}
      id="Shape 1 copy 2"
      d="m513 978.6c-264.9 0-479-195.4-479-437c0-241.7 214.1-437 479-437c264.9 0 479 195.3 479 437c0 241.6-214.1 437-479 437z"
    />
    <path
      style={{ fill: "#222e17", stroke: "#2e3b20", strokeWidth: 50 }}
      d="m514.2 820.7c-213.2 0-385.5-157.2-385.5-351.7c0-194.5 172.3-351.7 385.5-351.7c213.1 0 385.4 157.2 385.4 351.7c0 194.5-172.3 351.7-385.4 351.7z"
    />
    <path
      style={{ fill: "none", stroke: "#db9d4c", strokeWidth: 60 }}
      className="s0"
      d="m513 885.8c-252.7 0-456.9-186.3-456.9-416.8c0-230.5 204.2-416.9 456.9-416.9c252.7 0 456.9 186.4 456.9 416.9c0 230.5-204.2 416.8-456.9 416.8z"
    />
    <path
      style={{ fill: "#ceac2a", opacity: 0.8 }}
      d="m423.1 450.2l100.3-91l67.9 74l-100.2 90.9z"
    />
    <path
      style={{ fill: "#f0c933", opacity: 0.8 }}
      d="m430.6 399.8l134.4-15.9l12.4 99.6l-134.4 16z"
    />
  </svg>
);
