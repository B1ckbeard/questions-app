import { useLocation } from "react-router";
import styles from "./styles.module.css";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

const Breadcrumbs = () => {
  const location = useLocation();

  const getCrumbName = (path: string): string => {
    if (path === "/") return "Главная";
    if (path === "/questions") return "Список вопросов";
    if (/^\/questions\/\d+$/.test(path)) return "Подробнее";

    const lastSegment = path.split("/").pop() || "";
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  const pathParts = location.pathname.split("/").filter(Boolean);
  const crumbs = pathParts.map((_, idx) => {
    const path = `/${pathParts.slice(0, idx + 1).join("/")}`;
    return {
      path,
      name: getCrumbName(path),
      isLast: idx === pathParts.length - 1,
    };
  });

  return (
    <div className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbList}>
        <BreadcrumbItem url="/" title="Главная" showIcon={false} />
        {crumbs.map((crumb) => (
          <BreadcrumbItem
            key={crumb.path}
            url={crumb.path}
            title={crumb.name}
            isLast={crumb.isLast}
          />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
