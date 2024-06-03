import { useEffect, useState } from "react";
import { navItems } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-modal-open");
    } else {
      document.body.classList.remove("body-modal-open");
    }
  }, [isOpen]);
  return (
    <div className="bg-white pt-[36px] pb-[40px] relative">
      <div className="nav-shadow max-w-[1300px] max-[1300px]:mx-4 mx-auto h-[60px] flex  items-center bg-deep-blue ps-[25px] pe-[9px] rounded-[15px] relative">
        <div className="grid min-[921px]:grid-cols-12 max-[921px]:flex max-[921px]:justify-between w-full items-center">
          <div className="col-span-3">
            <img src="/assets/navbar/nav-logo.svg" alt="" />
          </div>

          <ul className="min-[921px]:flex justify-center gap-[30px] col-span-6 hidden ">
            {navItems?.map((i) => (
              <Link key={i?.id} to={i?.link}>
                <li className="text-white text-[14px] hover:text-primary transition-colors duration-500">
                  {i?.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="min-[921px]:flex justify-end items-center w-full col-span-3 hidden">
            <button className="text-[14px] font-medium py-[14px] h-[43px] flex items-center text-white bg-deep-blue rounded-[15px] px-[21px]">
              Login
            </button>
            <button className="text-[14px] font-medium py-[14px] h-[43px] flex items-center text-zwilt-black bg-white rounded-[15px] px-[21px]">
              Join Now
            </button>
          </div>

          <div className="min-[921px]:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
        </div>

        {/* mobile nav */}

        <div className={`min-[921px]:hidden h-[80vh] pt-14 pb-8 absolute z-50 w-full bg-white nav-shadow rounded-[15px] left-0 top-[80px] transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-[1000px]'}`}>
            <ul className="flex flex-col gap-10 items-center">
            {navItems?.map((i) => (
              <Link key={i?.id} to={i?.link}>
                <li className="text-zwilt-black  hover:text-primary transition-colors duration-500">
                  {i?.name}
                </li>
              </Link>
            ))}
            </ul>

            <div className="flex flex-col gap-5 px-[70px] justify-center mt-20">
            <button className="text-[14px] font-medium py-[14px] h-[43px] flex justify-center items-center border-deep-blue border text-zwilt-black bg-white rounded-[15px] px-[21px]">
              Login
            </button>
            <button className="text-[14px] font-medium py-[14px] h-[43px] flex justify-center items-center border-deep-blue border text-white bg-deep-blue rounded-[15px] px-[21px]">
              Join Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
