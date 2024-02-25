import { Header } from "@/components/header/header";
import style from "./page.module.css";
import { About } from "@/sections/about/about";
import { SkillsScetion } from "@/sections/skills/skills-section";
import { ExperienceSection } from "@/sections/experience/experience-section";
import { ContactsSection } from "@/sections/contacts/contacts-sction";

export default function Home() {
  return (
    <main className={style.main__container}>
      <Header />
      <About />
      <SkillsScetion />
      <ExperienceSection />
      <ContactsSection />
    </main>
  );
}
