import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <>
        <AdminSidebar/>
      <main className={`pt-20 bg-gray-50 ml-0 mt-5 px-8 py-11 ${window.innerWidth >= 1300 ? 'pl-[19.4%] ml-8' : ''}`}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
