// src/pages/admin/AdminDashboard.tsx
import { Briefcase, FileText, Users, Settings, ArrowRight } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <SectionHeading
          title="Panel de Administración"
          subtitle="Bienvenido al centro de control"
        />
        <Button
          variant="ghost"
          icon={<Settings className="h-5 w-5" />}
          iconPosition="left"
          to="/admin/settings"
        >
          Configuración
        </Button>
      </div>

      {/* Contenido básico sin componentes adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Activos</p>
              <p className="text-3xl font-bold mt-2">12</p>
              <p className="text-sm mt-1 text-green-500">+2 este mes</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
              <Briefcase className="h-6 w-6" />
            </div>
          </div>
        </Card>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminDashboard;