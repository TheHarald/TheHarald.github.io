import styles from "./contact-item.module.css";
export function ShareIcon() {
  return (
    <svg
      className={styles.icon}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10_300)">
        <path
          d="M13.3333 4V6.66667H6.66667V25.3333H25.3333V18.6667H28V26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28H5.33333C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14048 27.3594 4 27.0203 4 26.6667V5.33333C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H13.3333ZM23.448 6.66667H17.3333V4H28V14.6667H25.3333V8.552L16 17.8853L14.1147 16L23.448 6.66667Z"
          fill="#1E5EFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_300">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
