import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";

import PropTypes from "prop-types";

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState("/");
  const [, setIsHovered] = useState(false);
  const [notificationCounts] = useState({
    mail: 0,
    inbox: 40,
    send: 0,
    stack: 0,
  });

  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="overflow-y-scroll no-scrollbar h-screen w-20 flex flex-col py-6 border-r-2 dark:bg-zinc-900 bg-white dark:border-zinc-800 border-[#E0E0E0] left-0 top-0 fixed z-10 justify-between items-center">
      <div className="rounded-xl">
        <img
          src={logo}
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
        />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-5">
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
          {notificationCounts.mail > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.mail}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
          {notificationCounts.send > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.send}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <SiElasticstack />
          {notificationCounts.stack > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.stack}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/inbox" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
          {notificationCounts.inbox > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCounts.inbox}
            </span>
          )}
        </div>
        <div
          className={`cursor-pointer p-2 relative ${
            selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
        <div
          className="hover:bg-gray-600 rounded-lg cursor-pointer p-2 relative"
          onClick={handleLogout}
        >
          <TbLogout2 className="text-red-600"/>
        </div>
      </div>

      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-white bg-blue-900 p-2 rounded-full">KC</div>
        <div className="flex items-center justify-center">
          
        </div>
      </div>
    </div>
  );
}

// Add propTypes for type checking
SideBar.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default SideBar;
