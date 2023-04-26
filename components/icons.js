import { BsFillMoonStarsFill, BsFillInboxesFill } from "react-icons/bs";
import {
  GiKnifeFork,
  GiChiliPepper,
  GiCupcake,
  GiBowlOfRice,
  GiCakeSlice,
  GiStairsCake,
  GiBroccoli,
  GiKetchup,
} from "react-icons/gi";
import { TbTruckDelivery, TbSoup } from "react-icons/tb";
import { MdOutlineKebabDining, MdOutlineFreeBreakfast } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaGlassMartiniAlt } from "react-icons/fa";

export function IconsDiv({ className, type }) {
  const icons = {
    "Eid Specials": <BsFillMoonStarsFill className={className} />,
    Breakfast: <MdOutlineFreeBreakfast className={className} />,
    Express: <TbTruckDelivery className={className} />,
    "Favourites!": <AiFillHeart className={className} />,
    Healthy: <GiBroccoli className={className} />,
    Drinks: <FaGlassMartiniAlt className={className} />,
    Kebab: <MdOutlineKebabDining className={className} />,
    Dessert: <GiCakeSlice className={className} />,
    Baked: <GiCupcake className={className} />,
    Cakes: <GiStairsCake className={className} />,
    Tiffin: <BsFillInboxesFill className={className} />,
    Biryani: <GiBowlOfRice className={className} />,
    Curry: <TbSoup className={className} />,
    "Spicy Foods": <GiChiliPepper className={className} />,
    "Achar & Sauce": <GiKetchup className={className} />,
    Platter: <GiKnifeFork className={className} />,
  };
  console.log(icons[type], type);
  return icons[type] && icons[type];
}
