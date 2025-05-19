import { CtaBtn } from "../layout/button.js";
import Image from "next/image";
export default function Header() {
  const styles = {
    wrapper: "relative  h-fit z-[10] w-full max-w-[1280px]  ",
    textbox: "w-[480px] my-[100px] space-y-[24px] mr-auto  ",
    title:
      "lg:text-heading-lg text-[24px] leading-[1.5] font-semibold text-primary-text",
    subHeading:
      "lg:text-body-lg text-[14px] leading-[1.5] font-bold text-secondary-text",
    imgDiv:
      "absolute z-10 w-[650px] lg:block   ml-[-50px] my-auto relative z-10 ",
    img: " w-[350px] h-auto ",
    foodIcon: "absolute lg:w-[100%] w-[50%] bottom-[0] lg:bottom-[250px] ",
    foodIconImg: "",
    vector: "absolute hidden  md:block right-0 top-0 ",
    iconBoxDix:
      "w-[80%] lg:my-[100px] justify-center mx-auto flex lg:flex-nowrap flex-wrap gap-[52px] shrink ",
    iconBox:
      "lg:w-1/3 w-[250px] shadow-2xl rounded-[50px] space-y-[12px] p-[25px] text-center ",
    icon: "mx-auto",
    iconName: "lg:text-highlight-lg text-[14px] font-semibold text-black ",
    iconDet: "font-bold text-secondary-text",
    aboutSection:
      " overflow-y-clip w-[100%] flex flex-wrap lg:flex-nowrap my-20 lg:h-[1005px] ",
    vector: "absolute lg:block hidden top-[-160px] right-[-110px] w-[650px] ",
    vectorImg: "",
    aboutImg:
      "w-[750px] mt-[-50px] mr-[0px] lg:block hidden  ml-auto  relative z-10  ",
    img: "",
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.aboutSection}>
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

          <div className={styles.vector}>
            <Image
              src="/images/home-vector.png"
              alt=""
              width={740}
              height={1000}
              className={styles.vectorImg}
            />
          </div>
          <div className={styles.aboutImg}>
            <Image
              src="/images/homepage-header.png"
              alt=""
              width={750}
              height={750}
              className="object-cover "
            />
          </div>
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
    </div>
  );
}
