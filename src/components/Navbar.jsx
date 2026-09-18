import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
<>

    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#161616] backdrop-blur-xl border-b border-transparent">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link to="" className="flex items-center gap-3  ">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
            <img alt="Photography Logo" className="w-full h-full object-cover" src="src/assets/3adsa.jpg" /></div>

          <div className="flex flex-col">
            <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
            <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span>
          </div>
        </Link>
    
        <div className="hidden md:flex items-center">
        <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
          <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                  : "text-neutral-400 hover:text-white"
                }`
              }
            >
              الرئيسية
            </NavLink>
              <NavLink
              to="/newblog"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                  : "text-neutral-400 hover:text-white"
                }`
              }
            >
              المدونه   
                     </NavLink>
           <NavLink
              to="/who"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                  : "text-neutral-400 hover:text-white"
                }`
              }
            >
              من نحن    
                     </NavLink>
          </div>
          </div>

          <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <i className="fa-solid fa-magnifying-glass text-gray-600 hover:text-orange-500 transform transition-all  px-7 py-4"></i>
          <button type="button" className="text-white rounded-full bg-orange-500 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-5 py-3 focus:outline-none">ابدأ القراءة</button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>
          </button>
        </div>
      </div>
    </nav>

</>
  );
}