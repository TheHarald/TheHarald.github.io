import { portfolioData } from "@/data";
import styles from "./experience-section.module.css";
import { ExperienceCard } from "@/components/experience-card/experience-card";

export function ExperienceSection() {
  const { title, works } = portfolioData.experienceSection;
  return (
    <section className={styles.experienceSection}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.experienceCards}>
        {works.map((work, index) => (
          <ExperienceCard key={`${work.company}-${index}`} {...work} />
        ))}
      </div>
    </section>
  );
}
