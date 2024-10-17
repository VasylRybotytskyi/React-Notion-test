import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
