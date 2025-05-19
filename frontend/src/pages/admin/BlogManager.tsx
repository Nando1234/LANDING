import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import SectionHeading from "../../components/common/SectionHeading";

const BlogManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Datos de ejemplo
  const posts = [
    { id: 1, title: 'Nuevas técnicas de construcción', date: '2023-05-15' },
    { id: 2, title: 'Materiales sostenibles', date: '2023-04-22' }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <SectionHeading
          title="Gestión de Blog"
          subtitle="Administra tus publicaciones"
        />
        <Button variant="primary" className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Nuevo Post
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-4 flex">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar posts..."
              className="pl-10 pr-4 py-2 w-full border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          {posts.map(post => (
            <div key={post.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
              <div>
                <h4 className="font-medium">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
                <button className="p-2 text-red-600 hover:text-red-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BlogManager;