// import React from 'react'

// const DeleteAlert = ({onDelete}) => {
//   return (
//     <div>
//       <p className='text-sm'>Are you sure you want to Delete this Article</p>
//       <div className="flex justify-end mt-6">
//         <button
//         type="button"
//         className='add-btn add-btn-fill'
//         onClick={onDelete}
//         >
//             Delete
//         </button>
//       </div>
//     </div>
//   )
// };

// export default DeleteAlert


import React from 'react';

const DeleteAlert = ({ onDelete ,onCancel }) => {
  return (
    <div className="p-4">
      <p className="text-gray-700 text-base">
        Are you sure you want to delete this article?
      </p>

      <div className="flex justify-end mt-6 space-x-3">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
