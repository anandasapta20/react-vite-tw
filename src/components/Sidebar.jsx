// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-84 h-screen bg-brand-500 py-6 px-3">
      {/* Logo & Title */}
      <div className="flex items-center text-center gap-6 mb-12">
        <div className="w-24">
          <img src="/logo_pindad_mono.png" alt="logo" />
        </div>
        <div className="flex-1">
          <h1 className="text-primary-white font-semibold text-base text-left">
            Pindad
            <br />
            Design System
          </h1>
        </div>
      </div>

      {/* Menu Links */}
      <div className="grid grid-rows-4 gap-y-2">
        <Link
          to="/home"
          className="flex items-center gap-3 p-3 hover:bg-background-brand-selected rounded-md"
        >
          <img className="w-6" src="/icon-home.svg" alt="icon" />
          <h3 className="text-primary-white font-semibold text-lg">Home</h3>
        </Link>
        <Link
          to="/color"
          className="flex items-center gap-3 p-3 hover:bg-background-brand-selected rounded-md"
        >
          <img className="w-6" src="/icon-colors.svg" alt="icon" />
          <h3 className="text-primary-white font-semibold text-lg">Color</h3>
        </Link>
        <Link
          to="/typography"
          className="flex items-center gap-3 p-3 hover:bg-background-brand-selected rounded-md"
        >
          <img className="w-6" src="/icon-type.svg" alt="icon" />
          <h3 className="text-primary-white font-semibold text-lg">
            Typography
          </h3>
        </Link>
      </div>
    </div>
  );
}

//     {/* sidebar */}
//     <div className="w-84 h-screen bg-brand-500 py-6 px-3">
//     {/* head */}
//     <div className="flex items-center text-center gap-6 mb-12">
//       <div className="w-24">
//         <img className="" src="/logo_pindad_mono.png"></img>
//       </div>
//       <div className="flex-1">
//         <h1 className=" text-primary-white font-semibold text-base text-left">Pindad<br/>Design System</h1>
//       </div>
//     </div>

//     {/* menus */}
//     <div className="grid grid-rows-4 gap-y-2">
//       <div className="flex items-center gap-3 p-3 hover:bg-background-brand-selected rounded-md">
//         <img className="w-6" src="/icon-colors.svg"></img>
//         <h3 className="text-primary-white font-semibold text-lg">Color</h3>
//       </div>
//       <div className="flex items-center gap-3 p-3 hover:bg-background-brand-selected rounded-md">
//         <img className="w-6" src="/icon-type.svg"></img>
//         <h3 className="text-primary-white font-semibold text-lg">Typography</h3>
//       </div>
//     </div>
//   </div>
