
import { navbarItems } from "../constants/obj";

const Navbar = () => {

    return (
        

        <nav className="relative p-6">
           {
            navbarItems.map((item)=> (
                <div className="navCon flex items-center justify-around px-4 py-4 sm:px-6 lg:px-8  ">
                <div className="inline-flex items-center space-x-2 ">
                    <img src={item.img} alt="" />
                    <h2 className=" font-extrabold text-[1.800rem] text-[#FFFFFF]">{item.head}</h2>
                </div>
                <div className="hidden lg:block ">
                    <ul className="inline-flex  gap-12">
                       {
                        item.items.map((item)=>(
                            <li className="">
                            <a href="#" className="text-sm font-normal text-[1.300rem] text-[#FFFFFF] hover:text-gray-900">
                              {item}
                            </a>
                        </li>
                        ))
                       }
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <img className="" src={item.icon} alt="cart-icon" />
                </div>
                <div className="lg:hidden bg-red-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 cursor-pointer">
                        <line x1={4} y1={12} x2={20} y2={12} />
                        <line x1={4} y1={6} x2={20} y2={6} />
                        <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                </div>
            </div>
            ))
           }
        </nav>

    )
}

export default Navbar;





// import { navbarItems } from "../constants/obj";

// const Navbar = () => {

//     return (
//         <nav className="navbar bg-base-100">

//             {
//                 navbarItems.map((item) => (
//                     <>
//                         <div className="navbar-start">
//                             <div className="dropdown">
//                                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                                     <img src={item.img} alt="" />
//                                 </div>
//                                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                     <li><a>{item.items}</a></li>
//                                     {/* <li>
//                                         <a>Parent</a>
//                                         <ul className="p-2">
//                                             <li><a>Submenu 1</a></li>
//                                             <li><a>Submenu 2</a></li>
//                                         </ul>
//                                     </li>
//                                     <li><a>Item 3</a></li> */}
//                                 </ul>
//                             </div>
//                             <h2 className="btn btn-ghost text-xl">{item.head}</h2>
//                         </div>
//                         <div className="navbar-center hidden lg:flex">
//                             <ul className="menu menu-horizontal px-1">
//                                 <li><a>Item 1</a></li>
//                                 <li>
//                                     <details>
//                                         <summary>Parent</summary>
//                                         <ul className="p-2">
//                                             <li><a>Submenu 1</a></li>
//                                             <li><a>Submenu 2</a></li>
//                                         </ul>
//                                     </details>
//                                 </li>
//                                 <li><a>Item 3</a></li>
//                             </ul>
//                         </div>
//                         <div className="navbar-end">
//                             <a className="btn">{item.icon}</a>
//                         </div>
//                     </>
//                 ))
//             }

//         </nav>
//     )
// }

// export default Navbar;