import { Outlet } from "react-router";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";

const BaseLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
