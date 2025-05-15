import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ServicesPage from '../pages/public/ServicesPage';
import ProjectsPage from '../pages/public/ProjectsPage';
import ClientsPage from '../pages/public/ClientsPage';
import ContactPage from '../pages/public/ContactPage';
import BlogPostPage from "../pages/public/BlogPostPage";
import ProjectDetailPage from '../pages/public/ProjectDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="proyectos" element={<ProjectsPage />} />
        <Route path="proyectos/:id" element={<ProjectDetailPage />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="blog" element={<BlogPostPage />} />
        <Route path="blog/:id" element={<BlogPostPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;