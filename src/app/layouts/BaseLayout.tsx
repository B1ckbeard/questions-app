import { Outlet } from "react-router";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const BaseLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs />
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
