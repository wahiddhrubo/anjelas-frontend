import { FormBtn, FormPrimaryBtn } from "../../layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";

export default function SignUpModal({ setFormState, googleSignIn }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginHandler = async () => {
		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});
		console.log(email, password);
		if (result.error) {
			alert(result.error);
		} else {
			window.location.href = "/";
			setIsopen(false);
		}
	};

	const styles = {
		loginForm: "h-fit my-auto ",
		title: "text-heading-lg text-[40px] mb-[40px] ",
		input: "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
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
				placeholder="Email Address"
				onChange={(e) => {
					setEmail(e.target.value);
					console.log(email);
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
				<div>
					Don't Have An Account?{" "}
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
