import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { BlogPost } from '../../types';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        setPost(response.data);
      } catch (err) {
        setError('Error loading blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">{error || 'Post not found'}</p>
        <Link
          to="/blog"
          className="text-primary-600 hover:text-primary-700 flex items-center"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600"
          >
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2" />
              {post.tags.join(', ')}
            </div>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share this post:</span>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
              <button className="flex items-center text-gray-600 hover:text-primary-600">
                <MessageSquare size={20} className="mr-2" />
                Discuss
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostPage;