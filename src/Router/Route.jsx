import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation/:id",
        element: <Donation></Donation>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
