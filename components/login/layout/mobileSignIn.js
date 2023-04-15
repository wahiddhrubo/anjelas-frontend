import { FormBtn, FormPrimaryBtn } from "../../layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";

export default function MobileSignIn({ setFormState, googleSignIn }) {
	const [phone, setPhone] = useState();

	const mobileSignInHandler = async () => {
		alert("button Clicked!!!");
	};

	const styles = {
		wrapper:
			"flex bg-white  gap-[104px] w-[80%] rounded-lg z-[100] overflow-hidden shadow-2xl relative mx-auto relative h-[85vh] ",
		close: "absolute top-5 w-[24px] h-[24px] cursor-pointer right-5",
		imgDiv: "overflow-hidden w-[50%] h-full rounded-r-lg",
		img: "w-[700px] object-center h-full object-cover ",
		loginForm: "h-fit my-auto ",
		title: "text-heading-lg text-[40px] mb-[40px] ",
		inputSm:
			"bg-[#efffff] text-center border-0 w-[20%] my-[16px] focus-visible:outline-0  font-semibold   border-b-2 border-black",
		inputMd:
			"bg-none font-semibold    border-0 w-[80%] my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
		btnDiv: "space-y-[16px] text-center mt-[40px]",
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
				value="+880"
				disabled
				className={styles.inputSm}
			/>
			<input
				type="text"
				placeholder="Phone Number"
				onChange={(e) => {
					setPhone(e.target.value);
				}}
				className={styles.inputMd}
			/>

			<div className={styles.btnDiv}>
				<FormPrimaryBtn
					text="Send OTP To Phone"
					onClick={mobileSignInHandler}
				/>
				<FormBtn
					onClick={googleSignIn}
					text="Log in or Sign Up With Google"
					Icon={AiOutlineGoogle}
				/>

				<FormBtn
					onClick={() => setFormState("login")}
					text="Login With Email Address"
					Icon={BsFillTelephoneFill}
				/>
				<div>
					Don't Have An Account?{" "}
					<span
						onClick={() => setFormState("signUp")}
						className=" underline hover:text-primary font-sm font-bold cursor-pointer"
					>
						Sign Up
					</span>
				</div>
			</div>
		</div>
	);
}
