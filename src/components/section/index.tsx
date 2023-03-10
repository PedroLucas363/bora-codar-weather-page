import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className = "" }: Props) {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  );
}

export default Section;
