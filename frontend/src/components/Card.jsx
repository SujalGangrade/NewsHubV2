// import React from 'react';
// import { Link } from 'react-router-dom';
// import { formatDate2, truncateText } from '../utils/helper';

// const Card = ({title , summary ,imageUrl , date, id}) => {
//     const formateddate = formatDate2(date)
//     const shortSummary = truncateText(summary , 40 );
//     const shortTitle = truncateText(title ,50);
    
//   return (
//     <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-gray-100">
//         {/* Image Container */}
//         <div className="relative overflow-hidden h-64">
//             <img 
//                 src={imageUrl} 
//                 alt={shortTitle}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
        
//         {/* Content Container */}
//         <div className="p-6 space-y-4">
//             <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
//                 {shortTitle}
//             </h3>
//             <p className="text-gray-600 text-base line-clamp-3 leading-relaxed">
//                 {shortSummary}
//             </p>
//             <div className="flex items-center justify-between">
//                 <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                     {formateddate}
//                 </span>
//                 <Link 
//                     to={`/article/${id}`}
//                     className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300 flex items-center gap-1 group/link"
//                 >
//                     Read More...
//                     <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card


import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate2, truncateText } from '../utils/helper'

const Card = ({ title, summary, imageUrl, date, id }) => {
  const formateddate = formatDate2(date)
  const shortSummary = truncateText(summary, 40)
  const shortTitle = truncateText(title, 50)

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={shortTitle}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
          {shortTitle}
        </h3>
        <p className="text-gray-600 text-base line-clamp-3 leading-relaxed">
          {shortSummary}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {formateddate}
          </span>
          <Link
            to={`/article/${id}`}
            className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-300 flex items-center gap-1 group/link"
          >
            Read More...
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
