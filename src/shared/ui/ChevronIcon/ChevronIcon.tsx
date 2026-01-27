import styles from "./styles.module.css";

interface Props {
  isOpen: boolean;
  color?: string;
  size?: number;
  duration?: string;
}

const ChevronIcon = ({
  isOpen,
  color = "#6A0BFF",
  size = 24,
  duration = ".3s",
}: Props) => {
  const transitionStyle = {
    transition: `transform ${duration} ease-in-out`,
  };
  const SvgIcon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.chevrone} ${isOpen ? styles.open : ""}`}
      style={transitionStyle}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return SvgIcon;
};

export default ChevronIcon;
