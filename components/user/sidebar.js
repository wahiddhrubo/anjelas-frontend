import { FaUserAlt } from "react-icons/fa";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/saga/actions";

export default function SideBar({ active, setActive }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="sticky text-[14px] justify-center lg:text-[16px] bg-white z-20 left-0 flex lg:flex-wrap flex-nowrap text-center lg:text-left content-center lg:h-screen top-[50px] h-[120px] lg:top-0 lg:w-[20%]">
      <div
        onClick={() => setActive("info")}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "info" ? "white" : "",
          backgroundColor: active === "info" ? "#FE7502" : "",
        }}
      >
        <FaUserAlt className="w-4 h-4 my-auto mx-auto lg:mx-0 " />
        My Account
      </div>
      <div
        onClick={() => setActive("locations")}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "locations" ? "white" : "",
          backgroundColor: active === "locations" ? "#FE7502" : "",
        }}
      >
        <HiOutlineLocationMarker className="w-4 h-4 my-auto mx-auto lg:mx-0 " />{" "}
        Manage Locations
      </div>
      <div
        onClick={() => setActive("request")}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "request" ? "white" : "",
          backgroundColor: active === "request" ? "#FE7502" : "",
        }}
      >
        <BsFillBalloonHeartFill className="w-4 h-4 my-auto mx-auto lg:mx-0 " />{" "}
        Request A Dish
      </div>
      <div
        onClick={() => setActive("orders")}
        className="w-full p-4  flex  transition-colors duration-200 hover:text-primary hover:bg-[#fe750230] rounded-md border-b-2 flex-wrap content-center gap-2  cursor-pointer"
        style={{
          color: active === "orders" ? "white" : "",
          backgroundColor: active === "orders" ? "#FE7502" : "",
        }}
      >
        <TbTruckDelivery className="w-4 h-4 my-auto mx-auto lg:mx-0 " />
        Orders
      </div>
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
