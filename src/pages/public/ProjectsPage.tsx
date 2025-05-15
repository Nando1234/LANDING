import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Our Projects"
        subtitle="Explore our portfolio of successful engineering projects"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Project cards will be populated here */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Coming Soon</h3>
            <p className="text-gray-600">Project details will be available shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;