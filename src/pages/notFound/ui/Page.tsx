import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import { memo } from "react";

const NotFoundPage = memo(() => {
  return <ErrorMessage type="page" />;
});

export default NotFoundPage;
