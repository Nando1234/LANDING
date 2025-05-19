// src/pages/admin/ContentManager.tsx
import { FileText, Image, Settings } from 'lucide-react';
import { useState } from 'react';
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('text');

  return (
    <div className="space-y-6 p-6">
      <SectionHeading
        title="Gestor de Contenido"
        subtitle="Edita las secciones de tu sitio"
      />

      <div className="flex space-x-4 border-b">
        <Button
          variant="ghost"
          onClick={() => setActiveTab('text')}
          className={`${activeTab === 'text' ? 'border-b-2 border-primary-600' : ''}`}
        >
          <FileText className="h-5 w-5 mr-2" />
          Texto
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab('media')}
          className={`${activeTab === 'media' ? 'border-b-2 border-primary-600' : ''}`}
        >
          <Image className="h-5 w-5 mr-2" />
          Multimedia
        </Button>
      </div>

      <Card className="p-6">
        {activeTab === 'text' && (
          <div className="space-y-4">
            <textarea
              className="w-full p-3 border rounded"
              rows={6}
              placeholder="Edita el contenido aquí..."
            />
            <Button variant="primary">Guardar Cambios</Button>
          </div>
        )}
        {activeTab === 'media' && (
          <div className="flex items-center justify-center h-40 bg-gray-50 rounded">
            <Button variant="outline" icon={<Image className="h-5 w-5" />}>
              Subir Imagen
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ContentManager;