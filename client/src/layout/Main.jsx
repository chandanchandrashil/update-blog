import {Outlet} from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';

const Main = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;