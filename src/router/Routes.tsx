import HomePageLayout from "@/layout/homePageLayout/HomePageLayout";
import Home from "@/page/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,

    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

export default router;
