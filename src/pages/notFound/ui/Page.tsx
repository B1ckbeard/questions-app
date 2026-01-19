import { memo } from "react";
import { ErrorMessage } from "@/shared/ui";

const NotFoundPage = memo(() => {
  return <ErrorMessage type="page" />;
});

export default NotFoundPage;
