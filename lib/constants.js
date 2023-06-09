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
  return icons[type] && icons[type];
}
export const areas = [
  "Adabar ",
  "Badda ",
  "Bangsal ",
  "Cantonment ",
  "Chowkbazar ",
  "Darus Salam ",
  "Demra ",
  "Dhakshinkhan ",
  "Dhanmondi ",
  "Gendaria ",
  "Gulshan ",
  "Hazaribagh ",
  "Jatrabari ",
  "Kadamtali ",
  "Kafrul ",
  "Kalabagan",
  "Kamrangirchar ",
  "Khilgaon ",
  "Khilkhet ",
  "Lalbagh ",
  "Mirpur  ",
  "Mohammadpur ",
  "Motijheel",
  "New Market ",
  "Pallabi ",
  "Paltan",
  "Panthapath",
  "Ramna ",
  "Rampura ",
  "Sabujbagh ",
  "Shah Ali ",
  "Shahbag",
  "Sher-e-Bangla Nagar",
  "Shyampur ",
  "Sutrapur ",
  "Tejgaon ",
  "Turag ",
  "Uttara ",
  "Uttar Khan ",
  "Vatara ",
  "Wari ",
];

export const categories = [
  "Breakfast",
  "Favourites!",
  "Pithas",
  "Healthy",
  "Drinks",
  "Kebab",
  "Dessert",
  "Baked",
  "Cakes",
  "Biryani",
  "Curry",
  "Platter",
  "Spicy Foods",
  "Dawat",
  "Achar & Sauce",
];

export const times = [
  "08:30 AM - 09:30 AM",
  "09:30 AM - 10:30 AM",
  "10:30 AM - 11:30 AM",
  "11:30 AM - 12:30 AM",
  "12:30 AM - 01:30 AM",
  "01:30 PM - 02:30 PM",
  "02:30 PM - 03:30 PM",
  "03:30 PM - 04:30 PM",
  "04:30 PM - 04:30 PM",
  "04:30 PM - 05:30 PM",
  "05:30 PM - 06:30 PM",
  "06:30 PM - 07:30 PM",
  "07:30 PM - 08:30 PM",
  "08:30 PM - 09:30 PM",
];

//FEES
export const taxRate = 0.015;
export const deliveryFee = 100;
