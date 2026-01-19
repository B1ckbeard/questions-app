import { memo, useMemo } from "react";
import { useLocation } from "react-router";
import styles from "./styles.module.css";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

const Breadcrumbs = memo(() => {
  const location = useLocation();

  const crumbs = useMemo(() => {
    const getCrumbName = (path: string): string => {
      if (path === "/") return "Главная";
      if (path === "/questions") return "Список вопросов";
      if (/^\/questions\/\d+$/.test(path)) return "Подробнее";

      const lastSegment = path.split("/").pop() || "";
      return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    };

    const pathParts = location.pathname.split("/").filter(Boolean);

    const result = [
      {
        path: "/",
        name: "Главная",
        isLast: pathParts.length === 0,
        showIcon: false,
      },
    ];

    pathParts.forEach((_, idx) => {
      const path = `/${pathParts.slice(0, idx + 1).join("/")}`;
      result.push({
        path,
        name: getCrumbName(path),
        isLast: idx === pathParts.length - 1,
        showIcon: true,
      });
    });

    return result;
  }, [location.pathname]);

  return (
    <div className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb) => (
          <BreadcrumbItem
            key={`${crumb.path}-${crumb.isLast}`}
            url={crumb.path}
            title={crumb.name}
            isLast={crumb.isLast}
            showIcon={crumb.showIcon}
          />
        ))}
      </ul>
    </div>
  );
});

export default Breadcrumbs;
