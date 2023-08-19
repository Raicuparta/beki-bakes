import { iconColors } from "./icon-color";
import lemonTartImage from "./lemon-tart.png";

type Props = {
  size?: number;
};

export const LemonTartIcon = ({ size = 60 }: Props) => (
  <img alt="Lemon Tart" src={lemonTartImage.src} width={size} height={size} />
);
