import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <>
        <AdminSidebar/>
      <main className={`pt-20 bg-gray-50  mt-5  py-11 xl:pl-[19.4%] xl:ml-8 xl:px-8 px-3`}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
