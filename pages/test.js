import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrders } from "../../../store/selectors";
// import { useState } from "react";
// import { useEffect } from "react";
// import { GET_ORDERS } from "../../../store/saga/actions";

export default function Orders() {
  //   const dispatch = useDispatch();
  //   const currentStatus = useState("All");
  //   const { orders } = useSelector(getOrders);
  //   useEffect(() => {
  //     if (currentStatus !== "All") {
  //       dispatch({ type: GET_ORDERS, status: currentStatus });
  //     } else {
  //       dispatch({ type: GET_ORDERS, status: "" });
  //     }
  //   }, [currentStatus]);
  const orders = [
    {
      _id: "64848964e4c3fff828aa5d25",
      user: {
        _id: "643c7aaf3e4825bad9cd0260",
        username: "wahid",
      },
      uID: "c680acfe9542",
      location: {
        _id: "646793097949ededd007e977",
        streetAddress: "West Kazipara",
        area: "Mirpur",
        phone: 1401967751,
      },
      items: [
        {
          item: {
            name: "Gajorer Borfi",
          },
          pricePerUnit: 450,
          quantity: 2,
          _id: "646e38d57978a978add6396d",
        },
        {
          item: {
            name: "Narikeler Naru",
          },
          pricePerUnit: 450,
          quantity: 1,
          _id: "646e38d77978a978add63977",
        },
      ],
      deliveryDate: "2023-04-23T18:25:43.511Z",
      deliveryTime: "18:25",
      subTotal: 100,
      tax: 5,
      deliveryCharge: 200,
      total: 2,
      paymentMethod: "bkash",
      status: "processing",
      created_at: "2023-06-10T14:32:04.203Z",
      __v: 0,
    },
    {
      _id: "64848f5be4c3fff828aa5d53",
      user: {
        _id: "643c7aaf3e4825bad9cd0260",
        username: "wahid",
      },
      uID: "3c193798bd5f",
      location: {
        _id: "646793097949ededd007e977",
        streetAddress: "West Kazipara",
        area: "Mirpur",
        phone: 1401967751,
      },
      items: [],
      deliveryDate: "2023-04-23T18:25:43.511Z",
      deliveryTime: "18:25",
      subTotal: 100,
      tax: 5,
      deliveryCharge: 200,
      total: 2,
      paymentMethod: "bkash",
      status: "processing",
      created_at: "2023-06-10T14:57:31.669Z",
      __v: 0,
    },
  ];
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
    <></>
    // <div>
    //   <div className="flex w-[75%] mx-auto justify-between gap-5">
    //     {statusOpt.map((o) => (
    //       <div className="w-fit px-8 cursor-pointer  my-5 py-2 rounded-full  bg-[#fe75024f] text-black">
    //         {o}
    //       </div>
    //     ))}
    //   </div>
    //   <div>
    //     {orders.map((o) => (
    //       <div className="w-[685px] my-5 px-10 py-5 border-2 border-[#fe7502d4]  bg-white shadow-lg">
    //         <div className=" font-semibold ">{`${o.location.streetAddress}, ${o.location.area}`}</div>
    //         <div>
    //           <table className="w-full mt-5">
    //             <tr>
    //               <td className="py-1 font-semibold">Order Id</td>
    //               <td className=" py-1 text-right w-fit">{o.uID}</td>
    //             </tr>
    //             <tr>
    //               <td className="py-1 font-semibold">Date </td>
    //               <td className=" py-1 text-right w-fit">
    //                 {formatDate(o.created_at)}
    //               </td>
    //             </tr>
    //             <tr>
    //               <td className="py-1 font-semibold">Status</td>
    //               <td className=" py-1 text-right w-fit">
    //                 <div
    //                   className="w-fit capitalize px-4 py-1 text-white ml-auto rounded-lg "
    //                   style={{ backgroundColor: statusColors[o.status] }}
    //                 >
    //                   {o.status}
    //                 </div>
    //               </td>
    //             </tr>
    //             <tr className="font-semibold mt-5 text-[20px]">
    //               <td className="py-1 pt-5 ">Amount Payable</td>
    //               <td className=" py-1 pt-5 text-right">{o.total}</td>
    //             </tr>
    //           </table>
    //         </div>
    //         <div></div>
    //       </div>
    //     ))}
    //   </div>
    //   <div></div>
    // </div>
  );
}
