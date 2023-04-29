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
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function SignUpModal({ isOpen, setIsopen }) {
  const [formState, setFormState] = useState("login");

  const { user } = useSelector((state) => state.user);

  const styles = {
    wrapper:
      "flex bg-white  gap-[104px] w-[80%] rounded-lg z-[100] overflow-hidden shadow-2xl relative mx-auto relative h-[85vh] ",
    close: "absolute top-5 w-[24px] h-[24px] cursor-pointer right-5",
    imgDiv: "overflow-hidden w-[50%] h-full rounded-r-lg",
    img: "w-[700px] object-center h-full object-cover ",
    loginForm: "h-fit my-auto ",
    title: "text-heading-lg text-[40px] mb-[40px] ",
    input:
      "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
    btnDiv: "space-y-[16px] text-center mt-[40px]",
  };
  return (
    <>
      {!user && (
        <Modal
          isOpen={isOpen}
          className="border-0 absolute h-screen flex flex-wrap content-center inset-0 m-auto bg-[#00000099] "
        >
          <div className={styles.wrapper}>
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
              <SignUp setFormState={setFormState} />
            ) : formState === "login" ? (
              <Login setFormState={setFormState} />
            ) : formState === "mobileSignIn" ? (
              <MobileSignIn setFormState={setFormState} />
            ) : formState === "forgotPassword" ? (
              <ForgotPassword setFormState={setFormState} />
            ) : (
              ""
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
