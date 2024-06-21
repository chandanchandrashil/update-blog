import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <div className="body-container">
      <div className="my-container ">
        <div className="my-wrapper ">
          <Header />
            <Outlet />
          <Footer />
        </div>
        </div>
    </div>
  );
};

export default Main;
