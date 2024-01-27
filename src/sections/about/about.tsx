import Image from "next/image";
import styles from "./about.module.css";
import { portfolioData } from "@/data";

export function About() {
  const { title, subtitle, description, imagePath } = portfolioData.about;
  return (
    <section className={styles.about}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <h2 className={styles.headerSubTitle}>{subtitle}</h2>
        <p className={styles.headerParagraph}>{description}</p>
      </header>
      <Image
        className={styles.mainImage}
        width={300}
        height={300}
        src={imagePath}
        alt="my photo"
      />
    </section>
  );
}
