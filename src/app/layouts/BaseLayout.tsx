import { Outlet } from "react-router";
import styles from "./styles.module.css";
import { Header } from "@/widgets/header";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import Snowfall from "react-snowfall";
import { Drawer } from "@/widgets/drawer";

const BaseLayout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs />
        <Drawer/>
        <Snowfall />
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
