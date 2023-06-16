import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/selectors";
import { useEffect } from "react";
import {
  GET_SINGLE_ORDERS,
  MULTIPLE_ADD_TO_CART,
} from "../../../store/saga/actions";
import Timeline from "./singleOrder/timeline";
import OrderItems from "./singleOrder/orderItems";
import ReviewModal from "./singleOrder/reviewModal";
import { useRouter } from "next/router";
import OrderTitle from "./singleOrder/title";
import OrderTable from "./singleOrder/orderTable";

export default function SingleOrder() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [reviewModalOpen, setReviewModalOpen] = useState();
  const [reviewItem, setReviewItem] = useState();
  const searchParams = useSearchParams();
  const id = searchParams.get("order");

  const { order } = useSelector(getOrders);
  console.log(order);

  const items = order?.items.map((i) => {
    const { item, pricePerUnit, quantity, variant } = i;
    const { _id: id, name, featuredImage } = item;
    return {
      id,
      pricePerUnit,
      quantity,
      variant,
      name,
      featuredImage,
    };
  });

  const addItemsToCart = () => {
    dispatch({ type: MULTIPLE_ADD_TO_CART, items });
    router.push("/cart");
  };

  useEffect(() => {
    dispatch({ type: GET_SINGLE_ORDERS, id });
  }, [id]);

  return (
    <>
      {order && (
        <>
          <OrderTitle>Timeline</OrderTitle>
          <ReviewModal
            reviewModalOpen={reviewModalOpen}
            setReviewModalOpen={setReviewModalOpen}
            orderId={order._id}
            item={reviewItem}
          />
          <Timeline uId={order.uId} currentStage={order.status} />
          <OrderTitle>Order Items</OrderTitle>
          {order.items.map((i) => (
            <OrderItems
              key={i._id}
              setReviewItem={setReviewItem}
              setReviewModalOpen={setReviewModalOpen}
              item={i}
            />
          ))}
          <div
            onClick={addItemsToCart}
            className=" cursor-pointer w-full text-center bg-[#fe75024f] text-primary my-5 rounded  py-8 font-semibold"
          >
            Place A New Order With Same Items
          </div>
          <OrderTitle>Order Details</OrderTitle>
          <OrderTable
            subTotal={order.subTotal}
            tax={order.tax}
            deliveryFee={order.deliveryCharge}
            uId={order.uID}
            total={order.total}
            discount={order.discount}
          />
        </>
      )}
    </>
  );
}
