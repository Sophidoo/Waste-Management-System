import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IndexLayout = () => {
  return (
    <>
      <Navbar />

      <main className="adminLayoutMain bg-gray-50">
        <Outlet />
      </main>
      
      <Footer/>
    </>
  );
};

export default IndexLayout;
