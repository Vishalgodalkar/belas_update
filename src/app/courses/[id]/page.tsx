// import React from "react";
// import detailedInfo from "@/data/detailed_info.json";

// export async function generateStaticParams() {
//   return detailedInfo.boards.map((board) => ({
//     id: board.id.toString(),
//   }));
// }

// export default function BillboardDetailPage({ params }) {
//   const { id } = params;
//   const board = detailedInfo.boards.find((b) => b.id.toString() === id);

//   if (!board) {
//     return <div>Billboard not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{board.name}</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main Info Column */}
//         <div className="lg:col-span-2">
//           {/* Location Section */}
//           <section className="mb-8 p-6 bg-white rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Location Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-medium text-gray-700">Address</h3>
//                 <p>{board.location.address}</p>
//                 <p>{board.location.city}</p>
//                 <p className="mt-2">
//                   <span className="font-medium">Coordinates:</span>{" "}
//                   {board.location.lat}, {board.location.lng}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">Area</h3>
//                 <p>{board.location.area}</p>
//                 <a
//                   href={board.location.streetViewUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-block text-blue-600 hover:underline"
//                 >
//                   View on Google Street View
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* Specifications Section */}
//           <section className="mb-8 p-6 bg-white rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Specifications</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-medium text-gray-700">Size</h3>
//                 <p>{board.specs.size}</p>

//                 <h3 className="font-medium text-gray-700 mt-4">Type</h3>
//                 <p>{board.specs.type}</p>

//                 <h3 className="font-medium text-gray-700 mt-4">Elevation</h3>
//                 <p>{board.specs.elevation}</p>
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-700">Lighting</h3>
//                 <p>{board.specs.lighting}</p>

//                 <h3 className="font-medium text-gray-700 mt-4">
//                   Rotation Interval
//                 </h3>
//                 <p>{board.specs.rotationInterval}</p>

//                 <h3 className="font-medium text-gray-700 mt-4">Orientation</h3>
//                 <p>{board.specs.orientation}</p>
//               </div>
//             </div>
//           </section>

//           {/* Metrics Section */}
//           <section className="mb-8 p-6 bg-white rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Footfall */}
//               <div>
//                 <h3 className="font-medium text-gray-700 mb-2">Foot Traffic</h3>
//                 <ul className="space-y-1">
//                   <li>
//                     <span className="font-medium">Daily:</span>{" "}
//                     {board.metrics.footfall.daily.toLocaleString()}
//                   </li>
//                   <li>
//                     <span className="font-medium">Weekly:</span>{" "}
//                     {board.metrics.footfall.weekly.toLocaleString()}
//                   </li>
//                   <li>
//                     <span className="font-medium">Peak Hours:</span>
//                     {board.metrics.footfall.peakHours.join(", ")}
//                   </li>
//                 </ul>
//               </div>

//               {/* Impressions */}
//               <div>
//                 <h3 className="font-medium text-gray-700 mb-2">Impressions</h3>
//                 <ul className="space-y-1">
//                   <li>
//                     <span className="font-medium">Daily:</span>{" "}
//                     {board.metrics.impressions.daily.toLocaleString()}
//                   </li>
//                   <li>
//                     <span className="font-medium">Monthly:</span>{" "}
//                     {board.metrics.impressions.monthly.toLocaleString()}
//                   </li>
//                   <li>
//                     <span className="font-medium">CPM:</span> $
//                     {board.metrics.cpm}
//                   </li>
//                 </ul>
//               </div>

//               {/* Visibility */}
//               <div>
//                 <h3 className="font-medium text-gray-700 mb-2">
//                   Day Visibility
//                 </h3>
//                 <ul className="space-y-1">
//                   <li>
//                     <span className="font-medium">Distance:</span>{" "}
//                     {board.metrics.visibility.day.distance}
//                   </li>
//                   <li>
//                     <span className="font-medium">Obstructions:</span>{" "}
//                     {board.metrics.visibility.day.obstructions}
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-medium text-gray-700 mb-2">
//                   Night Visibility
//                 </h3>
//                 <ul className="space-y-1">
//                   <li>
//                     <span className="font-medium">Distance:</span>{" "}
//                     {board.metrics.visibility.night.distance}
//                   </li>
//                   <li>
//                     <span className="font-medium">Illumination:</span>{" "}
//                     {board.metrics.visibility.night.illumination}
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-4">
//               <h3 className="font-medium text-gray-700 mb-2">Viewing Angles</h3>
//               <p>{board.metrics.visibility.viewingAngles.join("°, ")}°</p>
//             </div>
//           </section>
//         </div>

//         {/* Media Column */}
//         <div className="lg:col-span-1">
//           {/* Images */}
//           <section className="mb-8 p-6 bg-white rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Media</h2>
//             <div className="space-y-4">
//               {board.media.images.map((image, index) => (
//                 <div key={index} className="overflow-hidden rounded-lg">
//                   <img
//                     src={image}
//                     alt={`${board.name} view ${index + 1}`}
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Panorama */}
//           {board.media.panorama && (
//             <section className="p-6 bg-white rounded-lg shadow">
//               <h2 className="text-xl font-semibold mb-4">360° View</h2>
//               <div className="overflow-hidden rounded-lg">
//                 <img
//                   src={board.media.panorama}
//                   alt={`${board.name} 360° view`}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import BillboardDetailPage from "@/app/BillboardDetailPageClient";
// import detailedInfo from "@/data/detailed_info.json";

// export async function generateStaticParams() {
//   return detailedInfo.boards.map((board) => ({
//     id: board.id.toString(),
//   }));
// }

// export default function Page({ params }: { params: { id: string } }) {
//   return <BillboardDetailPage params={params} />;
// }
import BillboardDetailPageClient from "@/app/BillboardDetailPageClient";
import detailedInfo from "@/data/detailed_info.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return detailedInfo.boards.map((board) => ({
    id: board.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  // Find the board data on the server
  const board = detailedInfo.boards.find((b) => b.id.toString() === params.id);

  // If board doesn't exist, return 404
  if (!board) {
    notFound();
  }

  // Pass the board data to the client component
  return <BillboardDetailPageClient params={params} board={board} />;
}
