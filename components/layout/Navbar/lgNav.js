import React from "react";
import { SignUpBtn } from "../button.js";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Cart from "../../ui/cart.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { getUser } from "../../../store/selectors.js";
import UserDropdown from "../../ui/userDropdown.js";
import SearchBar from "./searchBar.js";

export default function LgNav({ setIsopen, menu, searchMode, setSearchMode }) {
  const { items, quantity } = useSelector((state) => state.cart);
  const { isAuthenticated, user, error: userError } = useSelector(getUser);
  const avatarUrl = `https://api.dicebear.com/6.x/initials/svg?backgroundColor=FE7502&scale=70&textColor=ffffff&seed=${user?.username?.replace(
    " ",
    "+"
  )}`;
  const styles = {
    wrapper:
      "font-bold lg:px-[100px] px-8 hidden  relative z-[20] h-[45px] mt-[32px] content-center md:flex w-full text-black",
    logo: "font-[22px] mr-auto my-auto ",
    menu: "ml-auto flex justify-end items-center gap-[32px] my-auto",
    menuItems: " font-[18px] flex gap-[16px] my-auto ",
    menuItm: "",
    icon: "w-[42px] h-[42px] text-black",
  };

  const SignUpBtnHandler = () => {
    setIsopen(true);
  };

  return (
    <div>
      {" "}
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src="/images/logo.svg" width={150} height={80} />
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItems}>
            {menu.map((m, index) => (
              <Link key={index} href={m.link}>
                <div className={styles.menuItm}>{m.text}</div>
              </Link>
            ))}
          </div>
          <SearchBar searchMode={searchMode} setSearchMode={setSearchMode} />
          <Link href={"/cart"}>
            <div className="relative group">
              <Cart cart={items} />
              <MdShoppingCart className={styles.icon} />
              <div className="w-8 h-8 group-hover:scale-0 transition-all duration-300 text-[12px] bottom-[-8px] right-[-16px] rounded-full font-light grid place-items-center absolute bg-primary text-white ">
                {quantity ? quantity : 0}
              </div>
            </div>
          </Link>
          {!isAuthenticated ? (
            <SignUpBtn text="Sign In" onClick={SignUpBtnHandler} />
          ) : (
            <>
              <div className="relative group">
                <UserDropdown />
                <Link href="/user">
                  <Image
                    loader={() => avatarUrl}
                    src={avatarUrl}
                    alt="avatar"
                    className=" cursor-pointer rounded-full"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
