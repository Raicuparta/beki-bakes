const outlineWidth = 30;

type Props = {
  cakeColor: string;
  cakeOutlineColor: string;
  glazeColor: string;
  glazeOutlineColor: string;
  decorationColor: string;
  decorationOutlineColor: string;
  size?: number;
};

export const PoundCakeIcon = ({
  cakeColor,
  cakeOutlineColor,
  glazeColor,
  glazeOutlineColor,
  decorationColor,
  decorationOutlineColor,
  size = 60,
}: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -20 674 820"
    width={size}
    height={size}
    style={{
      strokeLinejoin: "round",
      strokeLinecap: "round",
      paintOrder: "stroke fill markers",
    }}
    display="block"
  >
    <path
      id="body"
      className="s0"
      d="m637 614.96c0 21.52-13.77 40.63-34.19 47.43c0 0-165.81 88.6-265.81 88.6c-100 0-265.81-88.6-265.81-88.6c-20.42-6.81-34.19-25.91-34.19-47.43v-363.96l300 100l300-100v363.96zm-300-247.96"
      style={{
        strokeWidth: outlineWidth * 2,
        fill: cakeColor,
        stroke: cakeOutlineColor,
      }}
    />
    <path
      id="edge"
      className="s1"
      d="m337 351v400"
      style={{
        strokeWidth: outlineWidth,
        fill: cakeColor,
        stroke: cakeOutlineColor,
      }}
    />
    <path
      id="glazing"
      className="s2"
      d="m654 389.63c0 29.39-39.67 38.74-52.83 12.46l-20.05-40.05c-16.13-32.21-59.11-39.18-84.61-13.71l-18.78 18.76c-19.71 19.68-51.34 20.69-72.26 2.3l-33.55-29.49c-13.58-11.93-34.9-2.3-34.9 15.76v22.93c0 14.96-6.36 45.21-17.49 55.22l-35.34 45.77c-20.37 18.31-52.83-10.13-52.83-37.5v-92.75c0-29.14-24.15-48.13-53.33-48.13l-30.45-4.64c-14.01 0-27.45 5.56-37.36 15.45l-37.36 37.31c-19.5 19.47-52.83 5.68-52.83-21.85c0 0 0-8.57 0-40.23c0-105.52 211.33-253.04 317-253.04c105.67 0 317 147.52 317 253.04c0 31.66 0 102.39 0 102.39zm-317 138.2"
      style={{
        strokeWidth: outlineWidth * 2,
        fill: glazeColor,
        stroke: glazeOutlineColor,
      }}
    />
    <path
      id="chocolate"
      className="s3"
      d="m287 70c0 0 0-50 50-50c50 0 50 50 50 50c-24.1 13.72-72.1 16.72-100 0z"
      style={{
        strokeWidth: outlineWidth * 2,
        fill: decorationColor,
        stroke: decorationOutlineColor,
      }}
    />
  </svg>
);
