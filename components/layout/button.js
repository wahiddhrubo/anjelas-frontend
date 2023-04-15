export const CtaBtn = ({ text, onClick }) => {
	const styles = {
		btn: "font-bold cursor-pointer bg-primary w-fit rounded-[50px] py-[12px] px-[35px] text-bold font-[18px] text-white ",
	};
	return (
		<div onClick={onClick || null} className={styles.btn}>
			{text}
		</div>
	);
};
export const SignUpBtn = ({ text, onClick }) => {
	const styles = {
		btn: "font-bold cursor-pointer bg-white rounded-[10px] py-[8px] px-[35px] text-bold font-[18px] text-black ",
	};
	return (
		<div onClick={onClick || null} className={styles.btn}>
			{text}
		</div>
	);
};
export const ShopBtn = ({ text, onClick }) => {
	const styles = {
		btn: "font-bold cursor-pointer bg-primary rounded-[50px] py-[12px] px-[35px] text-bold font-[18px] text-white ",
	};
	return (
		<div onClick={onClick || null} className={styles.btn}>
			{text}
		</div>
	);
};
export const FormBtn = ({ text, onClick, Icon }) => {
	const styles = {
		btn: "cursor-pointer  flex flex-wrap content-center justify-center bg-black rounded-[10px] py-[10px] text-center w-full font-bold font-[18px] text-white ",
		icon: "inline w-[24px] h-[22px] mr-2",
	};
	return (
		<div onClick={onClick || null} className={styles.btn}>
			{Icon && <Icon className={styles.icon} />}
			{text}
		</div>
	);
};
export const FormPrimaryBtn = ({ text, onClick }) => {
	const styles = {
		btn: " cursor-pointer bg-primary rounded-[10px] py-[10px] text-center w-full font-semibold font-[18px] text-white ",
	};
	return (
		<div onClick={onClick || null} className={styles.btn}>
			{text}
		</div>
	);
};
