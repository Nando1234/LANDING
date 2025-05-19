import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Users, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive('/admin') ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin/content"
            className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive('/admin/content') ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <FileText className="w-5 h-5 mr-3" />
            Content
          </Link>
          <Link
            to="/admin/services"
            className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive('/admin/services') ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Services
          </Link>
          <Link
            to="/admin/blog"
            className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive('/admin/blog') ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Blog
          </Link>
        </nav>
        <div className="absolute bottom-0 w-full p-6">
          <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;