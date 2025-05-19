import { FormBtn, FormPrimaryBtn } from "../layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";
import Login from "./layout/signIn.js";
import SignUp from "./layout/signUp.js";
import MobileSignIn from "./layout/mobileSignIn.js";
import ForgotPassword from "./layout/forgotPassword.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GOOGLE_SIGN_IN } from "../../store/saga/actions.js";

export default function SignUpModal({ isOpen, setIsopen }) {
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
  const formAnim = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const [formState, setFormState] = useState("login");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const styles = {
    wrapper:
      "flex bg-white  w-[80%]  justify-between rounded-lg z-[100] overflow-hidden shadow-2xl relative mx-auto relative h-[85vh] ",
    close: "absolute  z-[100] top-5 w-[24px] h-[24px] cursor-pointer right-5",
    imgDiv: "overflow-hidden lg:block hidden w-[50%] h-full rounded-r-lg",
    img: "w-[700px] object-center h-full object-cover ",
    loginForm: "h-fit my-auto ",
    title: "lg:text-heading-lg text-[40px] mb-[40px] ",
    input:
      "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
    btnDiv: "space-y-[16px] text-center mt-[40px]",
  };
  const googleSignInHandler = () => {
    dispatch({ type: GOOGLE_SIGN_IN });
  };
  return (
    <>
      {!user && (
        <Modal
          ariaHideApp={false}
          isOpen={isOpen}
          className="border-0 absolute h-screen flex flex-wrap content-center inset-0 m-auto bg-[#00000099] "
        >
          <motion.div
            variants={modalAnim}
            animate="animate"
            initial="initial"
            className={styles.wrapper}
          >
            <AiOutlineClose
              onClick={() => {
                setIsopen(false);
              }}
              className={styles.close}
            />
            <div className={styles.imgDiv}>
              <Image
                src="/images/login.png"
                alt=""
                width={700}
                height={700}
                className={styles.img}
              />
            </div>
            {formState === "signUp" ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={formAnim}
                className="w-[50%]"
              >
                <SignUp
                  setFormState={setFormState}
                  googleSignIn={googleSignInHandler}
                />
              </motion.div>
            ) : formState === "login" ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={formAnim}
                className="w-[50%]"
              >
                <Login
                  setFormState={setFormState}
                  googleSignIn={googleSignInHandler}
                />
              </motion.div>
            ) : formState === "mobileSignIn" ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={formAnim}
                className="w-[50%] flex"
              >
                <MobileSignIn
                  setFormState={setFormState}
                  googleSignIn={googleSignInHandler}
                />
              </motion.div>
            ) : formState === "forgotPassword" ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={formAnim}
                className="w-[50%]"
              >
                <ForgotPassword
                  setFormState={setFormState}
                  googleSignIn={googleSignInHandler}
                />
              </motion.div>
            ) : (
              ""
            )}
          </motion.div>
        </Modal>
      )}
    </>
  );
}
