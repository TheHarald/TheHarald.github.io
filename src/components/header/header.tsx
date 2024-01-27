import styles from "./header.module.css";

const routes = [
  {
    name: "О себе",
    href: "#about",
  },
  {
    name: "Навыки",
    href: "#skills",
  },
  {
    name: " Опыт работы",
    href: "#expirience",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigationBar}>
        <ul className={styles.navigationBarLinks}>
          {routes.map((route, i) => {
            return (
              <li key={`${route.href}-${i}`} className={styles.linkItem}>
                <a href={route.href} className={styles.link}>
                  {route.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
