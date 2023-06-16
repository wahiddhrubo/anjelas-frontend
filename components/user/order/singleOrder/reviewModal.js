import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../../../ui/buttons";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { POST_REVIEW } from "../../../../store/saga/actions";

export default function ReviewModal({
  item,
  orderId,
  reviewModalOpen,
  setReviewModalOpen,
}) {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [comment, setComment] = useState(1);

  const [rating, setRating] = useState({
    Rider: 1,
    "Food Quality": 1,
    Taste: 1,
  });

  const ratingsOpts = ["Rider", "Food Quality", "Taste"];

  const maxRating = 5;

  const totalRating =
    Math.floor((Object.values(rating).reduce((a, b) => a + b, 0) / 3) * 100) /
    100;

  const ratingHandler = (name, value) => {
    const newValue = { [name]: value };
    setRating({ ...rating, ...newValue });
  };

  const maxStep = 2;
  const progress = step / maxStep;
  const reviewHandler = () => {
    dispatch({ type: POST_REVIEW, itemId: item._id, orderId, rating, comment });
  };
  const progressAnim = {
    initial: {
      scaleX: "100%",
    },
    animate: {
      scaleX: progress,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  const modalAnim = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {item && (
        <Modal
          className="border-0 absolute h-screen flex flex-wrap content-center inset-0 m-auto bg-[#00000099] "
          isOpen={reviewModalOpen}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={modalAnim}
            className="flex flex-wrap content-center relative w-[80%] bg-white h-[80%] px-16 mx-auto my-20 justify-between"
          >
            <AiOutlineClose
              onClick={() => setReviewModalOpen(false)}
              className="text-[25px] absolute cursor-pointer top-10 right-10"
            />
            <div className="w-[40%] h-fit my-auto">
              <Image src={item.featuredImage.url} width={500} height={500} />
            </div>

            <div className="w-[50%] ">
              <div className="w-full  bg-gray-300 h-1 rounded-lg overflow-hidden my-5 ">
                <motion.div
                  variants={progressAnim}
                  animate="animate"
                  initial="initial"
                  className="w-full h-full origin-left bg-primary"
                ></motion.div>{" "}
              </div>

              {step === 1 && (
                <div>
                  {ratingsOpts.map((r, index) => (
                    <div
                      key={index}
                      className="flex w-full my-1   justify-between text-body-md font-semibold content-center"
                    >
                      <div className="mr-3">{r}</div>
                      <div className="flex ">
                        {[...Array(rating[r])].map((i, index) => (
                          <AiTwotoneStar
                            key={index}
                            onClick={() => ratingHandler(r, index + 1)}
                            className="cursor-pointer text-primary my-auto mx-[2px]"
                          />
                        ))}
                        {maxRating - rating[r]
                          ? [...Array(maxRating - rating[r])].map(
                              (i, index) => (
                                <AiTwotoneStar
                                  key={index}
                                  onClick={() =>
                                    ratingHandler(r, index + 1 + rating[r])
                                  }
                                  className="cursor-pointer  text-transparent stroke-[20px] stroke-gray-500 my-auto mx-[2px] "
                                />
                              )
                            )
                          : ""}
                      </div>
                    </div>
                  ))}
                  {totalRating > 1 && (
                    <div className="font-body-lg font-semibold flex justify-between w-full my-5 ">
                      <div>Total Rating</div>
                      <div>{totalRating}</div>
                    </div>
                  )}
                </div>
              )}
              {step === 2 && (
                <textarea
                  rows={6}
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-4 focus-within:outline-primary  my-2 placeholder:text-black focus-within:placeholder:text-primary border-2 rounded-md border-gray-500"
                  placeholder="Leave A Comment (Optional)"
                />
              )}
              <div className="flex justify-between my-10">
                {step > 1 && (
                  <div>
                    <Button
                      onClick={() => setStep((per) => per - 1)}
                      type={"primary"}
                    >
                      Back{" "}
                    </Button>
                  </div>
                )}
                <div className="ml-auto">
                  <Button
                    onClick={
                      maxStep !== step
                        ? () => setStep((per) => per + 1)
                        : reviewHandler
                    }
                    type={"primary"}
                  >
                    {maxStep === step ? "Submit" : "Next"}{" "}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </>
  );
}
