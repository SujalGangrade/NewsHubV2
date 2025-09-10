// // import React from 'react'
// // import ArticleCard from "./ArticleCard"
// // const ArticleList = ({articles , onDelete, onEdit}) => {
// //   return (
// //     <div>
// //       <h1>What you posted yet</h1>
// //       <div className='border'>
// //           <div>
// //               {articles?.map((article)=>(
// //                 <ArticleCard
// //                 key={article._id}
// //                  title={article.title}
// //                  summary={article.summary}
// //                  date={article.date}
// //                  imageUrl={article.imageUrl}
// //                  onDelete={()=>onDelete(article._id)}
// //                  onEdit={()=>onEdit(article)}
// //                 /> 
// //               ))}
// //           </div>

// //       </div>
// //     </div>
// //   )
// // }

// // export default ArticleList


// import React from "react";
// import ArticleCard from "./ArticleCard";

// const ArticleList = ({ articles, onDelete, onEdit,onView }) => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {/* Heading */}
//       <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center sm:text-left">
//         Your Articles
//       </h1>

//       {/* Articles */}
//       {articles?.length > 0 ? (
//         <div className="space-y-6">
//           {articles.map((article) => (
//             <ArticleCard
//               key={article._id}
//               title={article.title}
//               summary={article.summary}
//               date={article.date}
//               imageUrl={article.imageUrl}
//               onDelete={() => onDelete(article._id)}
//               onEdit={() => onEdit(article)}
//               onView ={()=>onView(article._id)}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center sm:text-left">
//           You haven’t posted any articles yet.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ArticleList;


import React from "react"
import ArticleCard from "./ArticleCard"

const ArticleList = ({ articles, onDelete, onEdit, onView }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center sm:text-left">
        Your Articles
      </h1>

      {/* Articles */}
      {articles?.length > 0 ? (
        <div className="space-y-6">
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              summary={article.summary}
              date={article.date}
              imageUrl={article.imageUrl}
              onDelete={() => onDelete(article._id)}
              onEdit={() => onEdit(article)}
              onView={() => onView(article._id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center sm:text-left">
          You haven’t posted any articles yet.
        </p>
      )}
    </div>
  )
}

export default ArticleList
