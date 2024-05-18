import { useState } from "react";
import Link from "../link/link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="bg-yellow-200 text-black p-4">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose /> : <RiMenu2Fill className="" />}
        
      </div>

      {/* ${open ? 'top-16' : '-top-16'} */}

      <ul className={`md:flex md:static absolute bg-yellow-200 px-6 ${open ? '' : 'hidden'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
