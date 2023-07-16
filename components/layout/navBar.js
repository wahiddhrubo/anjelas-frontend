import { useState } from "react";
import SignUpModal from "../login/signUpModal.js";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/selectors.js";
import MobileNav from "./Navbar/mobileNav.js";
import LgNav from "./Navbar/lgNav.js";

export default function Navbar({ menu, searchMode, setSearchMode }) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <SignUpModal isOpen={isOpen} setIsopen={setIsopen} />
      <LgNav
        menu={menu}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        setIsopen={setIsopen}
      />
      <MobileNav
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        menu={menu}
      />
    </>
  );
}
