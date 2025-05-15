import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../../mockData';

const BlogPreview = () => {
  // Only show the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);
  
  return (
<section className="py-20 bg-white dark:bg-gray-900 " aria-label="Últimas publicaciones del blog">
  <div className="container mx-auto px-4 md:px-6">
    <SectionHeading 
      title="Últimas Publicaciones "
      subtitle="Manténte actualizado con las últimas tendencias y conocimientos en ingeniería y construcción."
      centered
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {latestPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-none border dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <Link to={`/blog/${post.id}`} className="block overflow-hidden">
            <img
              src={post.image}
              alt={`Imagen de la publicación: ${post.title}`}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>

          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              {post.tags.length > 0 && (
                <div className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  {post.tags[0]}
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
              <Link to={`/blog/${post.id}`} className="hover:text-primary-600 dark:hover:text-yellow-500 transition-colors">
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Por: <span className="font-medium">{post.author}</span>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="text-primary-600 dark:text-yellow-500 font-medium hover:text-primary-700 dark:hover:text-yellow-600 transition-colors"
              >
                Leer más
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="text-center mt-12">
      <Button to="/blog" variant="outline">
        Ver Todas las Publicaciones
      </Button>
    </div>
  </div>
</section>

  );
};

export default BlogPreview;