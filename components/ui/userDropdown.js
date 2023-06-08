import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/saga/actions";

export default function UserDropdown() {
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch({ type: LOGOUT });
  return (
    <div className="absolute group-hover:scale-y-100 scale-y-0 origin-top transition-all duration-300 shadow-2xl w-[230px] px-5 py-2 right-0 top-[65px] border-2 border-primary bg-white z-10">
      <div className="relative w-full">
        <div className="absolute top-[-20px] right-0 border-x-[10px] border-b-[12px]  w-0 h-0 border-x-transparent border-primary"></div>
      </div>
      <Link href="/user">
        <div className="my-2 hover:text-primary  flex gap-2">
          <FaUserAlt className="w-3 h-3 my-auto" />
          My Account
        </div>
      </Link>
      <Link href="/user#orders">
        <div className="my-2 hover:text-primary flex gap-2">
          <TbTruckDelivery className="w-4 h-4 my-auto" />
          My Orders{" "}
        </div>
      </Link>
      <Link href="/user#locations">
        <div className="my-2 hover:text-primary flex gap-2">
          <HiOutlineLocationMarker className="w-4 h-4 my-auto" />
          Manage Locations
        </div>
      </Link>

      <div
        onClick={logoutHandler}
        className=" cursor-pointer my-2 hover:text-red-600 flex gap-2"
      >
        <MdOutlineExitToApp className="w-4 h-4 my-auto" />
        Logout
      </div>
    </div>
  );
}
