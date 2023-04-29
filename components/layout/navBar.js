import { SignUpBtn } from "../layout/button.js";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import SignUpModal from "../login/signUpModal.js";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../ui/cart.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { useEffect } from "react";
import { getPriceAndQuantity } from "../../store/slice/cart.js";
import { GET_CART, LOAD_USER, LOGOUT } from "../../store/saga/actions.js";
export default function Navbar({ menu }) {
  const dispatch = useDispatch();
  const [isOpen, setIsopen] = useState(false);
  const styles = {
    wrapper:
      "font-bold relative z-[10] h-[45px] mt-[32px] content-center flex w-full text-black",
    logo: "font-[22px] mr-auto my-auto ",
    menu: "ml-auto flex gap-[32px] my-auto",
    menuItems: " font-[18px] flex gap-[16px] my-auto ",
    menuItm: "",
    icon: "w-[42px] h-[42px] text-black",
  };
  const { items, quantity } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getPriceAndQuantity());
  }, [items]);
  useEffect(() => {
    dispatch({ type: LOAD_USER });
  }, [isAuthenticated]);
  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };
  const SignUpBtnHandler = () => {
    setIsopen(true);
  };

  return (
    <>
      {isOpen ? (
        <SignUpModal isOpen={isOpen} setIsopen={setIsopen} />
      ) : (
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
              <SignUpBtn text="Log Out" onClick={logoutHandler} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
