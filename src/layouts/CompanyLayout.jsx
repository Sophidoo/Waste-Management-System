import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <>
      <main className="companyLayoutMain bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default CompanyLayout;
