// import React from 'react';

// function ResourceCard({ title, description }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 flex flex-col">
//       <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
//       <h4 className="font-bold text-lg mb-2">{title}</h4>
//       <p className="text-sm text-gray-600 mb-4">{description}</p>
//       <a href="#" className="text-[#2C5530] font-medium mt-auto">Read More →</a>
//     </div>
//   );
// }

// export default ResourceCard;


import React from 'react';

function ResourceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-4"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
      )}
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-[#2C5530] font-medium mt-auto">Read More →</a>
    </div>
  );
}

export default ResourceCard;
