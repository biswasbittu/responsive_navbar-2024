import React, { useState } from 'react';
import Link from '../Link/Link';
import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const[open,setOpen]=useState(false)
    const routes = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/about", name: "About" },
      { id: 3, path: "/services", name: "Services" },
      { id: 4, path: "/contact", name: "Contact" },
      { id: 5, path: "/profile/:id", name: "Profile" },
    ];
    return (
      <nav className='p-6'>
        <div onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open === true ? <RxCross1></RxCross1> : <CgMenu></CgMenu>}
        </div>
        <ul className={`md:flex absolute ${open==true?"":"hidden"} px-6`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default Navbar;