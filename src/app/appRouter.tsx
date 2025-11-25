import { createBrowserRouter } from "react-router";
import { MainPage } from "@/pages/main";
import { NotFoundPage } from "@/pages/notFound";
import BaseLayout from "./layouts/BaseLayout";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
