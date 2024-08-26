import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Shimmer from "./component/Shimmer.js";
const Grocery = lazy(() => import("./component/Grocery.js"));
import RestaurantCategory from "./component/RestaurantCategory.js";
import UserContext from "./utils/UserContext.js";
import ItemList from "./component/ItemList.js";

import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";

const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");

  useEffect(() => {
    const data = {
      name: "Pratik Dhame",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      // {
      //   path: "/restaurantcategory",
      //   element: <RestaurantCategory />,
      // },
      // {
      //   path: "/ItemList",
      //   element: <ItemList />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
