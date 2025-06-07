import Navbar from "./component/navbar/NavBar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "products", element: <Product /> },
        { path: "users", element: <Users /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
