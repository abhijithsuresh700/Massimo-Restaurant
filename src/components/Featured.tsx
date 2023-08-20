import { ProductType } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}
const Featured = async() => {

  const featuredProducts:ProductType[] = await getData()

  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts?.length > 0 ? (
          featuredProducts?.map(item => (
            <div
              key={item.id}
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {item?.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                  <Image src={item.img} alt="" fill className="object-contain" />
                </div>
              )}
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item.title}
                </h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">₹{item.price}</span>
                <button className="bg-red-500 text-white p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Featured;

// import { ProductType } from "@/types/types";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const Featured = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/products", {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await res.json();
//         return data;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         return []; // Return an empty array on error
//       }
//     };

//     getData()
//       .then((data) => {
//         console.log(data,"lastttttttt")
//         setFeaturedProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   return (
//     <div className="w-screen overflow-x-scroll text-red-500">
//       {/* Conditional rendering based on whether data is available */}
//       {featuredProducts.length > 0 ? (
//         <div className="w-max flex">
//           {featuredProducts.map((item) => (
//             <div
//               key={item.id}
//               className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//             >
//               {item.img && (
//                 <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
//                   <Image src={item.img} alt="" fill className="object-contain" />
//                 </div>
//               )}
//               <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
//                 <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
//                 <p className="p-4 2xl:p-8">{item.desc}</p>
//                 <span className="text-xl font-bold">${item.price}</span>
//                 <button className="bg-red-500 text-white p-2 rounded-md">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default Featured;
