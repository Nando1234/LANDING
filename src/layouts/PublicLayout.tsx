import { Outlet } from 'react-router-dom';
import Header from "../components/common/header/Header";
import Footer from '../components/common/footer/Footer';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;