import { CtaBtn } from "../layout/button.js";
import Image from "next/image";
export default function Header() {
  const styles = {
    wrapper: "relative overflow-x-clip h-fit z-[10] w-full  flex",
    textbox: "w-[480px] my-[100px] space-y-[24px] mr-auto  ",
    title:
      "lg:text-heading-lg text-[24px] leading-[1.5] font-semibold text-primary-text",
    subHeading:
      "lg:text-body-lg text-[14px] leading-[1.5] font-bold text-secondary-text",
    imgDiv: "w-[50vw] md:block hidden ml-auto mt-[-2vw] ",
    img: "w-[50vw]  ",
    foodIcon: "absolute lg:w-[100%] w-[50%] bottom-[0] lg:bottom-[-10%] ",
    foodIconImg: "",
    vector: "absolute hidden  md:block right-0 top-0 ",
    vectorImg: "w-[38vw]",
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.textbox}>
          <div className={styles.title}>
            Your Favourite Delivered Hot & Fresh
          </div>
          <div className={styles.subHeading}>
            Recipes that are carefully crafted with fresh, locally sourced
            ingredients and made with love in our very own kitchen.
          </div>
          <CtaBtn text="Check Our Menu" />
        </div>
        <div className={styles.imgDiv}>
          <Image
            src="/images/homepage-header.png"
            alt="Home Food Delivery"
            width={720}
            height={720}
            className={styles.img}
          />
        </div>
        <div className={styles.foodIcon}>
          <Image
            src="/images/food-icon.png"
            alt=""
            width={330}
            height={200}
            className={styles.foodIconImg}
          />
        </div>
      </div>
      <div className={styles.vector}>
        <Image
          src="/images/home-vector.png"
          alt=""
          width={640}
          height={700}
          className={styles.vectorImg}
        />
      </div>
    </div>
  );
}
