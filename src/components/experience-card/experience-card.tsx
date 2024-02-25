import { Divider } from "../divider/divider";
import styles from "./experience-card.module.css";

type TExperienceCardProps = {
  company: string;
  jobTitle: string;
  from: string;
  to: string;
  tasks: string[];
};

export function ExperienceCard(props: TExperienceCardProps) {
  const { company, jobTitle, from, to, tasks } = props;
  return (
    <article className={styles.experienceCard}>
      <header className={styles.headerContainer}>
        <div className={styles.companyInfoContainer}>
          <p className={styles.companyTitle}>{company}</p>
          <p className={styles.jobTitle}>{jobTitle}</p>
        </div>
        <Divider />
        <div className={styles.workingTimeContainer}>
          <p className={styles.workingTimeTitle}>{from}</p>
          <p className={styles.workingTimeTitle}>{to}</p>
        </div>
      </header>
      <ul className={styles.tasksList}>
        {tasks.map((task, index) => (
          <TaskListItem key={`${task}-${index}`} task={task} />
        ))}
      </ul>
    </article>
  );
}
type TTaskListItemProps = {
  task: string;
};

function TaskListItem(props: TTaskListItemProps) {
  const { task } = props;
  return (
    <li className={styles.taskListItem}>
      <span className={styles.taskListDot}></span>
      <p className={styles.taskListItemText}>{task}</p>
    </li>
  );
}
