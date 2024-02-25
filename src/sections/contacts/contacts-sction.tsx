import { portfolioData } from "@/data";
import styles from "./contacts-section.module.css";
import { ContactItem } from "@/components/contact-item/contact-item";

export function ContactsSection() {
  const { title, contacts } = portfolioData.contactsSection;
  return (
    <section className={styles.contactsSection}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.contactItems}>
        {contacts.map((contact, index) => (
          <ContactItem key={`${contact}-${index}`} {...contact} />
        ))}
      </div>
    </section>
  );
}
