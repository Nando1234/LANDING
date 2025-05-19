import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from "../components/common/header/Header";
import Footer from '../components/common/footer/Footer';

const PublicLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className={`flex-grow ${!isHomePage ? 'pt-4' : ''} bg-white dark:bg-gray-800`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;  