import { useEffect, useState } from "react";
import { checkHead, removeHead } from "./helper";
const Getresponse = ({ ans, index }) => {
  const [head, setHead] = useState(false);
  const [data, setData] = useState(ans);

  useEffect(() => {
    if (checkHead(data)) {
      setHead(true);
      setData(removeHlsead(data));
    }
  }, []);

  

  return (
    <>
      {head ? (
        <span className="block pt-2 font-bold">{data}</span>
      ) : (
        <span className="pt-1 text-  font-light">{data}</span>
      )}
    </>
  );
};
export default Getresponse;


// import React from "react";
// import { checkHead, removeHead, checkBullet, removeBullet, checkNumbered, removeNumbered } from "./helper";

// export default function GeminiResponse({ item }) {
//   const lines = item && typeof item === 'string' ? item.split("\n") : [];

//   return (
//     <div className="p-4 space-y-2">
//       {lines.map((line, index) => {
//         if (checkHead(line)) {
//           return (
//             <h2 key={index} className="text-xl font-bold text-yellow-600 mt-4">
//               {removeHead(line)}
//             </h2>
//           );
//         }

//         if (checkBullet(line)) {
//           return (
//             <li key={index} className="list-disc ml-6 text-white">
//               {removeBullet(line)}
//             </li>
//           );
//         }

//         if (checkNumbered(line)) {
//           return (
//             <li key={index} className="list-decimal ml-6 text-white">
//               {removeNumbered(line)}
//             </li>
//           );
//         }

//         return (
//           <p key={index} className="text-gray-300">
//             {line}
//           </p>
//         );
//       })}
//     </div>
//   );
// }
