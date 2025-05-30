import React from 'react';

function BlogCard({ date, readTime, title, description, author, featured }) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${featured ? "md:col-span-2" : ""}`}>
      <div className="h-48 bg-gray-200 rounded mb-4 relative">
        {featured && <span className="absolute top-2 left-2 bg-green-700 text-white px-2 py-1 text-xs rounded">Featured</span>}
      </div>
      <p className="text-sm text-gray-500">{date} · {readTime} read</p>
      <h4 className="text-xl font-semibold my-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      {author && <p className="text-sm text-gray-700 font-medium">{author}</p>}
      <a href="#" className="text-green-700 font-medium mt-2 inline-block">Read More →</a>
    </div>
  );
}

export default BlogCard;
