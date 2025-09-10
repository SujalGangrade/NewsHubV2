// // import React from 'react'

// // const ArticleCard = ({imageUrl , title , summary , date  , onDelete ,onEdit}) => {
// //   return (
// //     <div className='m-10 border flex flex-row'>
// //         <div className='h-20 w-20'><img src={imageUrl} alt="" /></div>
// //         <div> 
// //            <h1>{title}</h1>
// //            <p>{summary}</p>
// //            <p>{date}</p>
// //         </div>
// //        <button>View</button>    {/*  functionallity will be impleament letter*/}
       
// //         <button onClick={onEdit}>Edit</button>  
// //         <button onClick={onDelete}>Delete</button> 
// //     </div>
// //   )
// // }

// // export default ArticleCard


// // import React from "react";
// // import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

// // const formatDate = (dateString) => {
// //   const options = { day: "2-digit", month: "short", year: "numeric" };
// //   return new Date(dateString).toLocaleDateString("en-GB", options);
// // };

// // const ArticleCard = ({ imageUrl, title, summary, date, onDelete, onEdit }) => {
// //   return (
// //     <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200">
// //       {/* Image */}
// //       <div className="h-48 md:h-auto md:w-48 flex-shrink-0 overflow-hidden">
// //         <img
// //           src={imageUrl || "https://via.placeholder.com/150"}
// //           alt={title}
// //           className="w-full h-full object-cover"
// //         />
// //       </div>

// //       {/* Content */}
// //       <div className="p-4 flex-1 flex flex-col justify-between">
// //         <div>
// //           <h2 className="text-xl font-bold text-purple-700 mb-2">{title}</h2>
// //           <p className="text-gray-700 mb-2">{summary}</p>
// //           <p className="text-gray-500 text-sm">{formatDate(date)}</p>
// //         </div>

// //         {/* Buttons */}
// //         <div className="mt-4 flex gap-2">
// //           <button className="flex items-center gap-1 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md transition">
// //             <FiEye /> View
// //           </button>
// //           <button
// //             onClick={onEdit}
// //             className="flex items-center gap-1 px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow-md transition"
// //           >
// //             <FiEdit /> Edit
// //           </button>
// //           <button
// //             onClick={onDelete}
// //             className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
// //           >
// //             <FiTrash2 /> Delete
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ArticleCard;
// import React from "react";
// import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

// function truncateText(text, maxWords) {
//   const words = text.split(" ");
//   return words.length > maxWords
//     ? words.slice(0, maxWords).join(" ") + "..."
//     : text;
// }

// function formatDate(rawDate) {
//   const dateObj = new Date(rawDate);
//   const options = { day: "2-digit", month: "short", year: "numeric" };
//   return dateObj.toLocaleDateString("en-US", options).replace(/ /g, "-");
// }

// const ArticleCard = ({ imageUrl, title, summary, date, onDelete, onEdit, onView }) => (
//   <div className="w-full m-4 p-6 border rounded-2xl flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
    
//     {/* Image */}
//     <div className="h-40 w-full sm:h-28 sm:w-28 overflow-hidden rounded-xl mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
//       <img src={imageUrl} alt={title} className="object-cover h-full w-full" />
//     </div>

//     {/* Content */}
//     <div className="flex-1">
//       <h1 className="text-xl font-semibold mb-2 text-purple-700">
//         {truncateText(title, 12)}
//       </h1>
//       <p className="mb-3 text-gray-700 text-sm">
//         {truncateText(summary, 50)}
//       </p>
//       <p className="text-xs text-gray-500">{formatDate(date)}</p>
//     </div>

//     {/* Actions */}
//     <div className="flex sm:flex-col flex-row items-center justify-end sm:ml-6 gap-4 mt-4 sm:mt-0">
//       <button
//         onClick={onView}
//         className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
//       >
//         <FiEye size={18} />
//         <span className="hidden sm:inline text-sm">View</span>
//       </button>
//       <button
//         onClick={onEdit}
//         className="flex items-center gap-1 text-green-500 hover:text-green-700 transition"
//       >
//         <FiEdit size={18} />
//         <span className="hidden sm:inline text-sm">Edit</span>
//       </button>
//       <button
//         onClick={onDelete}
//         className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
//       >
//         <FiTrash2 size={18} />
//         <span className="hidden sm:inline text-sm">Delete</span>
//       </button>
//     </div>
//   </div>
// );

// export default ArticleCard;



import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi"

function truncateText(text, maxWords) {
  const words = text.split(" ")
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text
}

function formatDate(rawDate) {
  const dateObj = new Date(rawDate)
  const options = { day: "2-digit", month: "short", year: "numeric" }
  return dateObj.toLocaleDateString("en-US", options).replace(/ /g, "-")
}

const ArticleCard = ({ imageUrl, title, summary, date, onDelete, onEdit, onView }) => (
  <div className="w-full p-6 border rounded-xl flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
    {/* Image */}
    <div className="h-40 w-full sm:h-28 sm:w-28 overflow-hidden rounded-lg mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
      <img src={imageUrl} alt={title} className="object-cover h-full w-full" />
    </div>

    {/* Content */}
    <div className="flex-1 space-y-2">
      <h1 className="text-lg font-semibold text-gray-800">{truncateText(title, 12)}</h1>
      <p className="text-gray-600 text-sm">{truncateText(summary, 50)}</p>
      <p className="text-xs text-gray-500">{formatDate(date)}</p>
    </div>

    {/* Actions */}
    <div className="flex sm:flex-col flex-row items-center justify-end sm:ml-6 gap-4 mt-4 sm:mt-0">
      <button
        onClick={onView}
        className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
      >
        <FiEye size={18} />
        <span className="hidden sm:inline text-sm">View</span>
      </button>
      <button
        onClick={onEdit}
        className="flex items-center gap-1 text-green-500 hover:text-green-700 transition"
      >
        <FiEdit size={18} />
        <span className="hidden sm:inline text-sm">Edit</span>
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
      >
        <FiTrash2 size={18} />
        <span className="hidden sm:inline text-sm">Delete</span>
      </button>
    </div>
  </div>
)

export default ArticleCard
