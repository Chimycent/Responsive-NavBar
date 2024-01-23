import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [show, setShow] = useState(false);

  console.log(show);

  return (
    <div className=" shadow-md border-b-2 border-b-black fixed lg:px-12 px-5 py-5 bg-slate-400 flex items-center justify-between w-screen">
      <div>Logo</div>
      <div className=" hidden lg:flex justify-between gap-10">
        <div className="flex gap-8 *:text-white *:font-semibold *:px-2 *:py-0.5">
          <p>About</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-8 items-center *:text-white *:font-semibold *:border *:border-blue-50 *:rounded-lg *:px-2 *:py-1">
          <button>Sign Up</button>
          <button>Log In</button>
          <p>dfghjk</p>
        </div>
      </div>
      <div className=" lg:hidden ">
        <GiHamburgerMenu
          className="cursor-pointer text-white"
          onClick={() => setShow((prev) => !prev)}
        />
        {show && (
          <div className="absolute flex flex-col  justify-start items-center py-4 gap-5 w-screen left-0 top-[65px] bg-slate-400 h-fit">
            <p>About</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <button>Log In</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;