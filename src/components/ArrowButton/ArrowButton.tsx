import styles from "./styles.module.css";

interface Props {
  side: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

const ArrowButton = ({ side = "right", onClick, disabled }: Props) => {
  return (
    <button
      className={styles.arrowButton}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        width="20"
        height="20"
        viewBox={side === "left" ? "0 0 21 20" : "0 0 24 24"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d={
            side === "left"
              ? "M9.27593 4.55806C9.52 4.80214 9.52 5.19786 9.27593 5.44194L5.34287 9.375H17.1673C17.5125 9.375 17.7923 9.65482 17.7923 10C17.7923 10.3452 17.5125 10.625 17.1673 10.625H5.34287L9.27593 14.5581C9.52 14.8021 9.52 15.1979 9.27593 15.4419C9.03185 15.686 8.63612 15.686 8.39204 15.4419L3.39204 10.4419C3.14796 10.1979 3.14796 9.80214 3.39204 9.55806L8.39204 4.55806C8.63612 4.31398 9.03185 4.31398 9.27593 4.55806Z"
              : "M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
          }
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};

export default ArrowButton;
