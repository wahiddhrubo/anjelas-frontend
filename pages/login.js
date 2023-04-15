import { FormBtn, FormPrimaryBtn } from "../components/layout/button.js";
import Image from "next/image";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-modal";
import { signIn } from "next-auth/react";

export default function SignUpModal({ isOpen, setIsopen }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState();

	const registrationHandler = async () => {
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
		input: "bg-none border-0 w-full my-[16px] focus-visible:outline-0 placeholder:text-secondary-text placeholder:font-semibold placeholder:capitalize  border-b-2 border-black",
		btnDiv: "space-y-[16px] text-center mt-[40px]",
	};
	return (
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
					<FormPrimaryBtn
						text="Log in / Sign Up"
						onClick={registrationHandler}
					/>
					<FormBtn
						text="Log in or Sign Up With Google"
						Icon={AiOutlineGoogle}
					/>
					<FormBtn
						text="Log in or Sign Up With Phone"
						Icon={BsFillTelephoneFill}
					/>
					<div>
						Already Have An Account?{" "}
						<span className=" underline hover:text-primary font-sm font-bold cursor-pointer">
							Log In
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
