import { Header } from "@/components/header/header";
import style from "./page.module.css";
import { About } from "@/sections/about/about";
import { SkillCard } from "@/components/skill-card/skill-card";
import { SkillsScetion } from "@/sections/skills-section/skills-section";

export default function Home() {
  return (
    <main className={style.main__container}>
      <Header />
      <About />
      <SkillsScetion />
    </main>
  );
}
