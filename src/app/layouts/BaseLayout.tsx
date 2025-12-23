import { Outlet } from "react-router";
import styles from "./styles.module.css";
import { Header } from "@/widgets/header";
import { Breadcrumbs } from "@/widgets/breadcrumbs";

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
