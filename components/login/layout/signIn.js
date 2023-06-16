import { FormBtn, FormPrimaryBtn } from "../../layout/button.js";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../store/saga/actions.js";

export default function SignUpModal({ setFormState, googleSignIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const loginHandler = async () => {
    dispatch({ type: LOGIN, email, password });
  };

  const styles = {
    loginForm: "h-fit px-4 my-auto ",
    title: "lg:text-heading-lg text-[24px] font-semibold my-5 lg:mb-[40px] ",
    input:
      "bg-none border-0 w-full lg:my-[16px] my-4 focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
    btnDiv: "lg:space-y-[16px] text-center mt-[20px] lg:mt-[40px]",
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.title}>
        <span className="border-b-4 border-primary">Login</span>
        <span className="font-medium"> or </span>
        Sign Up
      </div>
      <input
        type="text"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
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
      <div
        onClick={() => setFormState("forgotPassword")}
        className="w-fit ml-auto text-right hover:text-primary font-semibold cursor-pointer"
      >
        Forgot Password?
      </div>
      <div className={styles.btnDiv}>
        <FormPrimaryBtn text="Login" onClick={loginHandler} />
        <FormBtn
          onClick={googleSignIn}
          text="Log in or Sign Up With Google"
          Icon={AiOutlineGoogle}
        />
        <FormBtn
          onClick={() => {
            setFormState("mobileSignIn");
          }}
          text="Log in or Sign Up With Phone"
          Icon={BsFillTelephoneFill}
        />
        <div className="font-semibold">
          Don&apos;t Have An Account?{" "}
          <span
            onClick={() => setFormState("signUp")}
            className=" underline hover:text-primary font-sm font-bold cursor-pointer"
          >
            Sign Up Now
          </span>
        </div>
      </div>
    </div>
  );
}
