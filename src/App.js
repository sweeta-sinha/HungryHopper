// nested html structure
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileFC from "./components/Profile";
import AboutClass from "./components/AboutClass";
import ShimmerUI from "./components/Shimmer";
import { UserContextProvider } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux-store/appStore";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContextProvider>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContextProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileFC />,
          },
        ],
      },
      {
        path: "/about-class",
        element: <AboutClass />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
