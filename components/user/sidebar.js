import { FaUserAlt } from "react-icons/fa";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/saga/actions";
import Link from "next/link";
export default function SideBar({ active, orderId }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="sticky text-[14px] justify-center lg:text-[16px] bg-white z-20 left-0 flex lg:flex-wrap flex-nowrap text-center lg:text-left content-center lg:h-screen top-[50px] h-[120px] lg:top-0 lg:w-[20%]">
      <Link
        href={"/user/#info"}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "info" ? "white" : "",
          backgroundColor: active === "info" ? "#FE7502" : "",
        }}
      >
        <FaUserAlt className="w-4 h-4 my-auto mx-auto lg:mx-0 " />
        My Account
      </Link>
      <Link
        href={"/user/#locations"}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "locations" ? "white" : "",
          backgroundColor: active === "locations" ? "#FE7502" : "",
        }}
      >
        <HiOutlineLocationMarker className="w-4 h-4 my-auto mx-auto lg:mx-0 " />{" "}
        Manage Locations
      </Link>
      <Link
        href={"/user/#request"}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "request" ? "white" : "",
          backgroundColor: active === "request" ? "#FE7502" : "",
        }}
      >
        <BsFillBalloonHeartFill className="w-4 h-4 my-auto mx-auto lg:mx-0 " />{" "}
        Request A Dish
      </Link>
      <Link
        href={"/user/#orders"}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "orders" || orderId ? "white" : "",
          backgroundColor: active === "orders" || orderId ? "#FE7502" : "",
        }}
      >
        <TbTruckDelivery className="w-4 h-4 my-auto mx-auto lg:mx-0 " />
        Orders
      </Link>
      <div
        onClick={logoutHandler}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md flex-wrap content-center gap-2  cursor-pointer"
      >
        <MdOutlineExitToApp className="w-4 h-4 my-auto mx-auto lg:mx-0 " />{" "}
        Logout
      </div>
    </div>
  );
}
