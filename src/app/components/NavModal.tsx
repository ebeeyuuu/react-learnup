"use client";

import { navItems } from "@/data";
import React, { useEffect, useState } from "react";

interface NavModalProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const NavModal: React.FC<NavModalProps> = ({ isOpen, setIsOpen }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setVisible(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 h-[100vh] bg-[#421205] backdrop-blur-md pl-20 pr-4 pt-12 flex flex-col justify-start items-end gap-y-5 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } ${visible ? "opacity-100" : "opacity-0"} z-30`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button onClick={() => setIsOpen(false)} className="mb-10 font-semibold text-[25px]">
        Close
      </button>
      {navItems.map((item, index) => (
        <a className="flex flex-row justify-center items-center gap-x-2" key={index} href={item.href}>
          {item.text}
          <item.icon size={item.size} />
        </a>
      ))}
    </nav>
  );
};

export default NavModal;
