import { FormBtn, FormPrimaryBtn, GoogleBtn } from "../../layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../../store/saga/actions.js";

export default function SignUp({ setFormState, googleSignIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const registrationHandler = async () => {
    dispatch({ type: REGISTER, username: name, email, password });
  };

  const styles = {
    loginForm: "h-fit  w-[70%] m-auto  py-20 md:py-0 ",
    title: "lg:text-[32px] font-semibold text-[24px] mb-[40px] ",
    input:
      "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
    btnDiv: "space-y-[16px] text-[12px] md:text-[16px] text-center mt-[40px]",
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.title}>
        Log In
        <span className="font-medium"> or </span>
        <span className="border-b-4 border-primary">Sign Up</span>
      </div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Email Address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className={styles.input}
      />

      <div className={styles.btnDiv}>
        <FormPrimaryBtn text="Sign Up" onClick={registrationHandler} />
        <GoogleBtn
          onClick={googleSignIn}
          text="Log in or Sign Up With Google"
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
