import { CSSProperties } from "react";
import colors from "../../colors";

type colorOptions = "primary" | "secondary" | "title" | "green" | "white";

const getColor = (color: colorOptions) => {
  switch (color) {
    case "primary":
      return colors.textPrimary;
    case "secondary":
      return colors.textSecondary;
    case "title":
      return colors.title;
    case "green":
      return colors.green;
    case "white":
      return colors.white;
    default:
      return colors.textPrimary;
  }
};

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  size?: number;
  color?: colorOptions;
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
