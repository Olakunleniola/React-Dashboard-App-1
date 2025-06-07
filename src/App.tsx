import Navbar from "./component/navbar/NavBar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
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
        { path: "products", element: <Products /> },
        { path: "users", element: <Users /> },
        { path: "user/:id", element: <User /> },
        { path: "product/:id", element: <Product /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
