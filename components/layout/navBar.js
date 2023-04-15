import { SignUpBtn } from "../layout/button.js";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import SignUpModal from "../login/signUpModal.js";

export default function Navbar({ menu }) {
	const [isOpen, setIsopen] = useState(false);
	const styles = {
		wrapper:
			"font-bold relative z-[10] h-[45px] mt-[32px] content-center flex w-full text-black",
		logo: "font-[22px] mr-auto my-auto ",
		menu: "ml-auto flex gap-[32px] my-auto",
		menuItems: " font-[18px] flex gap-[16px] my-auto ",
		menuItm: "",
		icon: "w-[42px] h-[42px] text-black",
	};
	const SignUpBtnHandler = () => {
		setIsopen(true);
	};

	return (
		<>
			{isOpen ? (
				<SignUpModal isOpen={isOpen} setIsopen={setIsopen} />
			) : (
				<div className={styles.wrapper}>
					<div className={styles.logo}>Anjelas Kitchen</div>
					<div className={styles.menu}>
						<div className={styles.menuItems}>
							{menu.map((m, index) => (
								<div key={index} className={styles.menuItm}>
									{m}
								</div>
							))}
						</div>
						<MdShoppingCart className={styles.icon} />
						<SignUpBtn text="Sign In" onClick={SignUpBtnHandler} />
					</div>
				</div>
			)}
		</>
	);
}
