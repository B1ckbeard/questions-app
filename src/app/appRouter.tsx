import { createBrowserRouter, Navigate } from "react-router";
import { MainPage } from "@/pages/main";
import { NotFoundPage } from "@/pages/notFound";
import BaseLayout from "./layouts/BaseLayout";
import { QuestionPage } from "@/pages/question";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Navigate to="/questions" replace /> },
      { path: "/questions", element: <MainPage /> },
      { path: "/questions/:id", element: <QuestionPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
