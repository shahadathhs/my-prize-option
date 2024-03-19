import Link from "../Link/Link";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: '404 Not Found' }
  ];
  
  // export default routes;
  

  return (
    <nav className="p-3 bg-slate-400">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {
          open === true ? <IoIosClose /> : <RiMenu2Line />
        }
        
      </div>
      
      <ul className={`${open ? 'top-16' : '-top-60'} duration-1000 md:flex gap-4 absolute md:static bg-slate-400 px-2`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
      
    </nav>
  );
};



export default NavBar;