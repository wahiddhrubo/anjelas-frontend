import React from "react";
import { BiCheck } from "react-icons/bi";

export default function Timeline({ currentStage, uId }) {
  const stagePriority = {
    "order-placed": 1,
    processing: 2,
    confirmed: 3,
    packing: 4,
    packed: 5,
    delivering: 6,
    delivered: 7,
  };
  const checkStage = (stage) => {
    return stagePriority[stage] <= stagePriority[currentStage];
  };
  const stages = [
    {
      id: 1,
      stage: "order-placed",
      text: `Your order is successfully placed. Order id #${uId}`,
    },
    {
      id: 2,
      stage: "processing",
      text: "We have received your order, our pharmacist will check and confirm",
    },
    { id: 3, stage: "confirmed", text: "We have confirmed your order." },
    { id: 4, stage: "packing", text: "We are currently packing your order." },
    { id: 5, stage: "packed", text: "Your order is packed now." },
    {
      id: 6,
      stage: "delivering",
      text: "Rider has picked up your order for delivering.",
    },
    { id: 7, stage: "delivered", text: "You have received your order." },
  ];

  return (
    <>
      {stages.map((s) => (
        <div key={s.id} className="flex w-full gap-8 my-4">
          <div className="">
            <div
              style={{
                backgroundColor: checkStage(s.stage) ? "var(--primary)" : "",
              }}
              className="rounded-full  text-white mb-2 grid place-items-center bg-gray-300 w-10 h-10 text-[32px]"
            >
              <BiCheck />
            </div>
            {s.id !== stages.length && (
              <div
                style={{
                  backgroundColor: checkStage(s.stage) ? "var(--primary)" : "",
                }}
                className="w-[2px] h-8 bg-gray-300 mx-auto"
              ></div>
            )}
          </div>
          <div>
            <div className=" text-body-lg capitalize font-semibold">
              {s.stage.replace(/-/g, " ")}
            </div>
            <div className=" text-gray-500 text-[14px]">{s.text}</div>
          </div>
        </div>
      ))}
    </>
  );
}
