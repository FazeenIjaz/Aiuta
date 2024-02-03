import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { links } from "../../data";
import { Link, useLocation } from "react-router-dom";

const Header = ({className}) => {
  const [active, setActive] = useState(links[0].link);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const activeClass = (selectedLink) =>
    active === selectedLink
      ? "border-b-none text-lightBlack"
      : "border-blue-700";

  return (
    <header className={`${className} flex flex-row gap-[30px] items-center justify-between w-full p-[40px] z-50`}>
      {/* logo */}
      <div className="flex items-center justify-center gap-[8px]">
        <img src={logo} alt="" className="w-[30px] h-[30px]" />
        <span className="font-[700] tracking-[1px]">AIUTA</span>
      </div>
      {/* links */}
      <div className="links">
        <ul className="flex gap-[2.5rem]">
          {links.map((link) => (
            <Link
              to={link.link}
              key={link.id}
              onClick={() => setActive(link.link)}
            >
              <li className={`border-b-2 ${activeClass(link.link)}`}>
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
