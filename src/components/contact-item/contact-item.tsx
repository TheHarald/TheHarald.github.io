"use client";
import { useRef, useState } from "react";
import styles from "./contact-item.module.css";
import { CopyIcon } from "./copy-icon";
import { ShareIcon } from "./share-icon";
import { CheckIcon } from "./check-icon";

type TContactItemProps = {
  title: string;
  value: string;
  link: string;
  canCopy?: boolean;
};

type TCopyActionIcon = "copy" | "check";

export function ContactItem(props: TContactItemProps) {
  const { title, value, link, canCopy = false } = props;

  const [icon, setIcon] = useState<TCopyActionIcon>("copy");

  function copyToClipBoard() {
    navigator.clipboard.writeText(value);
    setIcon("check");
    setTimeout(() => {
      setIcon("copy");
    }, 2000);
  }

  return (
    <article className={styles.cantactItem}>
      <p className={styles.contactTitle}>{title}</p>
      <span className={styles.contactItemDot}></span>
      <div className={styles.contactInfoContainer}>
        <p className={styles.contactValue}>{value}</p>
        {canCopy ? (
          <button onClick={copyToClipBoard} className={styles.button}>
            {icon === "copy" ? <CopyIcon /> : <CheckIcon />}
          </button>
        ) : null}
      </div>
      <a className={styles.contactLink} target="_blank" href={link}>
        <ShareIcon />
      </a>
    </article>
  );
}
