import { memo, useEffect, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { closeDrawer } from "../../model/slice";
import { QuestionsFilters } from "@/features/questions-filters";
import { QuestionInfo } from "@/features/question-info";
import { HeaderSidebar } from "@/widgets/header";
import { ButtonClose } from "@/shared/ui";

interface Props {
  children?: React.ReactNode;
}

const Drawer = memo(({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { isOpen, type, side } = useAppSelector((state) => state.drawer);

  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeDrawer());
    }
  };

  const renderContent = () => {
    if (children) return children;

    switch (type) {
      case "filters":
        return <QuestionsFilters />;
      case "sidebar":
        return <HeaderSidebar />;
      case "info":
        return <QuestionInfo />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.drawerOverlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.drawer} ${
          side === "left" ? styles.drawerLeft : styles.drawerRight
        }`}
      >
        <div className={styles.drawerHeader}>
          <ButtonClose onClick={handleCloseDrawer} />
        </div>
        <div className={styles.drawerContent}>{renderContent()}</div>
      </div>
    </div>
  );
});

export default Drawer;
