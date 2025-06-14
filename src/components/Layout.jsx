import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-cyan-50 flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
