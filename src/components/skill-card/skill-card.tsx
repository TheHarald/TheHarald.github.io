import Image from "next/image";
import styles from "./skill-card.module.css";
import { calculateExperience } from "@/utils/helpers";

type TSkillCardProps = {
  image: string;
  title: string;
  since: number;
};

export function SkillCard(props: TSkillCardProps) {
  const { image, title, since } = props;
  const experience = calculateExperience(since);
  return (
    <article className={styles.skillCard}>
      <Image
        alt={title}
        width={48}
        height={48}
        src={image}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.experience}>{experience}</p>
      </div>
    </article>
  );
}
