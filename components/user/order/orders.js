import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/selectors";
import { useState } from "react";
import { useEffect } from "react";
import { GET_ORDERS } from "../../../store/saga/actions";
import { motion } from "framer-motion";

export default function Orders() {
  const dispatch = useDispatch();

  const [currentStatus, setCurrentStatus] = useState("All");
  const { orders } = useSelector(getOrders);

  useEffect(() => {
    if (currentStatus !== "All") {
      dispatch({ type: GET_ORDERS, status: currentStatus });
    } else {
      dispatch({ type: GET_ORDERS, status: "" });
    }
  }, [currentStatus]);

  const anim = {
    initial: { opacity: 0, x: "-5%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const statusColors = {
    confirmed: "#75e83d",
    delivering: "#ffaa00",
    delivered: "#52c41a",
    processing: "#faad14",
  };
  const formatDate = (dt) => {
    const date = new Date(dt);
    const formatter = Intl.DateTimeFormat("en-us", {
      dateStyle: "long",
    });
    return formatter.format(date);
  };
  const statusOpt = ["All", "Confirmed", "Delivering", "Delivered"];

  return (
    <div>
      <div className="flex w-[75%] mx-auto justify-between gap-5">
        {statusOpt.map((o) => (
          <div
            key={o}
            onClick={() => setCurrentStatus(o)}
            style={{ backgroundColor: o === currentStatus ? "#fe75024f" : "" }}
            className="w-fit px-8 cursor-pointer  my-5 py-2 rounded-full  hover:bg-[#fe75024f] text-black"
          >
            {o}
          </div>
        ))}
      </div>
      <div>
        {orders?.map((o) => (
          <motion.div
            variants={anim}
            initial="initial"
            animate="animate"
            className="w-[685px] my-5 px-10 py-5 border-2 border-[#fe7502d4]  bg-white shadow-lg"
          >
            <div className=" font-semibold ">{`${o.location.streetAddress}, ${o.location.area}`}</div>
            <div>
              <table className="w-full mt-5">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Order Id</td>
                    <td className=" py-1 text-right w-fit">{o.uID}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold">Date </td>
                    <td className=" py-1 text-right w-fit">
                      {formatDate(o.created_at)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold">Status</td>
                    <td className=" py-1 text-right w-fit">
                      <div
                        className="w-fit capitalize px-4 py-1 text-white ml-auto rounded-lg "
                        style={{ backgroundColor: statusColors[o.status] }}
                      >
                        {o.status}
                      </div>
                    </td>
                  </tr>
                  <tr className="font-semibold mt-5 text-[20px]">
                    <td className="py-1 pt-5 ">Amount Payable</td>
                    <td className=" py-1 pt-5 text-right">{o.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
          </motion.div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
