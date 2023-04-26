import { SignUpBtn } from "../layout/button.js";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import SignUpModal from "../login/signUpModal.js";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../ui/cart.js";
import Link from "next/link.js";
import { useEffect } from "react";
import { getPriceAndQuantity } from "../../store/slice/cart.js";

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
  useEffect(() => {
    dispatch(getPriceAndQuantity());
  }, [items]);
  console.log(quantity);
  const SignUpBtnHandler = () => {
    setIsopen(true);
  };

  return (
    <>
      {isOpen ? (
        <SignUpModal isOpen={isOpen} setIsopen={setIsopen} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.logo}>Anjelas Kitchen</div>
          <div className={styles.menu}>
            <div className={styles.menuItems}>
              {menu.map((m, index) => (
                <Link href={m.link}>
                  <div key={index} className={styles.menuItm}>
                    {m.text}
                  </div>
                </Link>
              ))}
            </div>
            <div className="relative group">
              <Cart cart={items} />
              <MdShoppingCart className={styles.icon} />
              <div className="w-8 h-8 group-hover:scale-0 transition-all duration-300 text-[12px] bottom-[0] right-[-16px] rounded-full font-light grid place-items-center absolute bg-primary text-white ">
                {quantity ? quantity : 0}
              </div>
            </div>
            <SignUpBtn text="Sign In" onClick={SignUpBtnHandler} />
          </div>
        </div>
      )}
    </>
  );
}
