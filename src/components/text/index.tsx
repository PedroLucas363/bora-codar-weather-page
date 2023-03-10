import { CSSProperties } from "react";
import colors from "../../colors";

const getColor = (color: "primary" | "secondary" | "green") => {
  switch (color) {
    case "primary":
      return colors.textPrimary;
    case "secondary":
      return colors.textSecondary;
    case "green":
      return colors.green;
    default:
      return colors.textPrimary;
  }
};

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  size?: number;
  color?: "primary" | "secondary" | "green";
  weight?: number;
  lineHeight?: number;
};

function Text({
  children,
  size = 16,
  color = "primary",
  weight = 700,
  lineHeight = 19,
  className = "",
  style: propStyle = {},
}: Props) {
  const style = {
    fontFamily: "Lato",
    fontSize: `${size}px`,
    fontWeight: weight,
    color: getColor(color),
    lineHeight: `${lineHeight}px`,
  };

  return (
    <span style={{ ...style, ...propStyle }} className={className}>
      {children}
    </span>
  );
}

export default Text;
