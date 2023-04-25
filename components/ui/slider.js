import styles from "./Slider.module.css";
import Image from "next/image";
import Slider from "react-slick";
export default function SliderComp({ productGallery }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a className="mb-5 h-[100px] w-[100px]">
          <Image
            loader={() => productGallery[i].url}
            src={productGallery[i].url}
            width={100}
            height={100}
            className="rounded-md w-full h-full"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "w-fit absolute top-0 bottom-0 my-auto h-fit cursor-pointer",
    appendDots: (dots) => {
      return (
        <div>
          <ul style={{ listStyle: "none" }}>
            {dots.map((item, index) => {
              return (
                <li key={index} className="mb-5 w-[100px] h-[100px] ">
                  {item.props.children}
                </li>
              );
            })}
          </ul>
        </div>
      );
    },

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[40%] relative">
      <Slider {...settings}>
        {productGallery.map((i, index) => (
          <div className={styles.imgDiv} key={i._id}>
            <Image
              src={i.url}
              loader={() => i.url}
              width={500}
              height={500}
              className={styles.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
