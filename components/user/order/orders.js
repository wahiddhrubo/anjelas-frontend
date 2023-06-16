import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/selectors";
import { useState } from "react";
import { useEffect } from "react";
import { GET_ORDERS } from "../../../store/saga/actions";
import { motion } from "framer-motion";
import OrderList from "./orders/orderList";
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

  const statusOpt = ["All", "Confirmed", "Delivering", "Delivered"];

  return (
    <div>
      <div className="flex w-[75%] mx-auto justify-between gap-5">
        {statusOpt.map((o) => (
          <div
            key={o}
            onClick={() => setCurrentStatus(o)}
            style={{
              backgroundColor: o === currentStatus ? "#fe75024f" : "",
            }}
            className="w-fit px-8 cursor-pointer  my-5 py-2 rounded-full  hover:bg-[#fe75024f] text-black"
          >
            {o}
          </div>
        ))}
      </div>
      <div>
        {orders?.map((o) => (
          <OrderList
            key={o._id}
            uID={o.uID}
            created_at={o.created_at}
            status={o.status}
            total={o.total}
            id={o._id}
            location={o.location}
          />
        ))}
      </div>
    </div>
  );
}
