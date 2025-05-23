import Link from "next/link";
import { BsFillClockFill, BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { CtaBtn } from "../layout/button.js";
import Image from "next/image";

export default function About() {
  const styles = {
    wrapper: "",
    iconBoxDix:
      "w-[80%] lg:my-[100px] justify-center mx-auto flex lg:flex-nowrap flex-wrap gap-[52px] shrink ",
    iconBox:
      "lg:w-1/3 w-[250px] shadow-2xl rounded-[50px] space-y-[12px] p-[25px] text-center ",
    icon: "mx-auto",
    iconName: "lg:text-highlight-lg text-[14px] font-semibold text-black ",
    iconDet: "font-bold text-secondary-text",
    aboutSection:
      "relative overflow-y-clip  flex flex-wrap lg:flex-nowrap my-20 lg:h-[1005px] ",
    vector: "absolute lg:block hidden left-[-100px] w-[350px] ",
    vectorImg: "",
    aboutImg: "w-[650px] lg:block hidden  ml-[-50px] my-auto relative z-10  ",
    img: "",
    aboutTextBox:
      "lg:w-[585px] my-auto space-y-[16px] px-4 lg:px-0 lg:ml-[25px] ",
    aboutHighlight: "text-highlight-lg text-primary",
    aboutTitle:
      "lg:text-heading-md text-[22px] leading-[1.5] font-semibold text-primary-text",
    aboutDetails: " lg:text-secondary-text  text-[14px] leading-[1.5] ",
  };
  const icons = [
    {
      icon: "/images/clock.png",
      details: "Working Hour",
      name: "Today: 10 am - 8 pm",
    },
    {
      icon: "/images/location.png",
      details: "Get Location",
      name: "West Kazipara",
      link: "https://maps.app.goo.gl/HYfyRn2kQTPWhgNk9",
    },
    {
      icon: "/images/phone.png",
      details: "Call Onlne",
      name: "+880 1963 - 322783",
      link: "tel:+8801963-322783",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconBoxDix}>
        {icons.map((i, index) => (
          <Link
            href={i.link || "/"}
            target={i.link ? "_blank" : ""}
            key={index}
            className={styles.iconBox}
          >
            <Image
              src={i.icon}
              alt=""
              width={45}
              height={45}
              className={styles.icon}
            />
            <div className={styles.iconName}>{i.name}</div>
            <div className={styles.iconDet}>{i.details}</div>
          </Link>
        ))}
      </div>
      <div className={styles.aboutSection}>
        <div className="w-full relative lg:hidden">
          <Image
            src="/images/about-vector.png"
            alt=""
            width={280}
            height={600}
            className="relative left-[-2rem]"
          />
        </div>
        <div className={styles.vector}>
          <Image
            src="/images/about-circle-vector.png"
            alt=""
            width={740}
            height={1000}
            className={styles.vectorImg}
          />
        </div>
        <div className={styles.aboutImg}>
          <Image
            src="/images/home-about.png"
            alt=""
            width={740}
            height={1000}
            className={styles.vectorImg}
          />
        </div>
        <div className={styles.aboutTextBox}>
          <div className={styles.aboutHighlight}>About</div>
          <div className={styles.aboutTitle}>
            Experience the Comfort of Homecooked Meals Anytime
          </div>
          <div className={styles.aboutDetails}>
            We use no artificial flavours, colours, or preservatives, making our
            food the perfect choice for health-conscious individuals. Our
            commitment to quality and taste ensures that every dish will leave
            you feeling nourished and energized.
            <br />
            <br />
            We offer a variety of tasty and healthy options that are perfect for
            any occasion.
          </div>
          <CtaBtn text="Check Our Menu" />
        </div>
      </div>
    </div>
  );
}
