import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './component/Header.js';
import Body from './component/Body.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Error from './component/Error.js'; 
import RestaurantMenu from './component/RestaurantMenu.js'; 
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>      
    </div>
  )
}



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about", 
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
]);  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

