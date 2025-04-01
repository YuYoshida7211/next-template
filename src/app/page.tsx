import styles from "./page.module.css";
import { Top } from "../components/Top";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Top />
      </main>
    </div>
  );
}
