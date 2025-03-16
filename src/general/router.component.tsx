import { EditorPage } from "@/pages/editor.page";
import { OverviewPage } from "@/pages/overview.page";
import { createRef } from "react";
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export const pageRoutes = [
  {
    path: "/",
    element: <OverviewPage />,
  },
  {
    path: "/:id",
    element: <EditorPage />,
  },
].map((entry) => ({ ...entry, nodeRef: createRef() }));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/website-editor" replace />,
  },
  {
    path: "/website-editor",
    element: <Outlet />,
    children: pageRoutes,
  },
];

export function Router() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}
