import { portfolioData } from "@/data";
import styles from "./skills-section.module.css";
import { SkillCard } from "@/components/skill-card/skill-card";

export function SkillsScetion() {
  const { skills, title } = portfolioData.skilsSection;
  return (
    <section className={styles.skillsSection}>
      <header>
        <h1 className={styles.headerTitle}>{title}</h1>
      </header>
      <div className={styles.skills}>
        {skills.map((skill, i) => {
          return (
            <SkillCard
              key={`${skill.title}-${i}`}
              title={skill.title}
              since={skill.since}
              image={skill.imagePath}
            />
          );
        })}
      </div>
    </section>
  );
}
