import { Outlet } from "react-router-dom";
import CompanySidebar from "../components/CompanySidebar";

const CompanyLayout = () => {
  return (
    <>
      <CompanySidebar/>
      <main className={`pt-20 bg-gray-50  mt-5  py-11 xl:pl-[19.4%] xl:ml-8 xl:px-8 px-3`}>
        <Outlet />
      </main>
    </>
  );
};

export default CompanyLayout;
