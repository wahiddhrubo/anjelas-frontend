import Image from "next/image";
import Slider from "react-slick";
export default function SliderComp({ gallery }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a className="mb-5 h-[100px] w-[100px]">
          <Image
            loader={() => gallery[i].url}
            src={gallery[i].url}
            width={100}
            height={100}
            className="rounded-md object-cover w-full h-full"
          />
        </a>
      );
    },
    dots: true,
    dotsClass:
      "w-fit absolute inset-x-0 mx-auto bottom-[-120px] h-fit cursor-pointer",
    appendDots: (dots) => {
      return (
        <div>
          <ul className=" flex list-none gap-2">
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
    <div className="w-[45%] relative">
      <Slider {...settings}>
        {gallery.map((i, index) => (
          <div key={i._id}>
            <Image
              className="w-[600px] h-[600px] object-cover object-center"
              src={i.url}
              loader={() => i.url}
              width={600}
              height={600}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
