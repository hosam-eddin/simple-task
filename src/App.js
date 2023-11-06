import Notfound from "./components/Notfound";
import HomeServcies from "./components/HomeServcies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import './index.css'
function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        { path: "/homeservices", element: <HomeServcies /> },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
