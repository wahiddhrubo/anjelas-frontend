import { FormBtn, FormPrimaryBtn, GoogleBtn } from "../../layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { FORGOT_PASSWORD } from "../../../store/saga/actions.js";

export default function ForgotPassword({ setFormState, googleSignIn }) {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();
  const forgotPasswordHandler = async () => {
    dispatch({ type: FORGOT_PASSWORD, email });
  };

  const styles = {
    loginForm: "h-fit my-auto w-[70%] mx-auto  ",
    title: " text-[24px] lg:text-[32px] font-semibold mb-[40px] ",
    input:
      "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
    btnDiv: "space-y-[16px] text-center mt-[40px]",
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.title}>Forgot Password</div>
      <input
        type="text"
        placeholder="Email Address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className={styles.input}
      />

      <div className={styles.btnDiv}>
        <FormPrimaryBtn
          text="Set Reset Token"
          onClick={forgotPasswordHandler}
        />
        <GoogleBtn
          onClick={googleSignIn}
          text="Sign In With Google"
          Icon={AiOutlineGoogle}
        />

        <FormBtn
          onClick={() => setFormState("mobileSignIn")}
          text="Log in or Sign Up With Phone"
          Icon={BsFillTelephoneFill}
        />
        <div className="font-semibold">
          Already Have An Account?{" "}
          <span
            onClick={() => setFormState("login")}
            className=" underline hover:text-primary font-sm font-bold cursor-pointer"
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  );
}
