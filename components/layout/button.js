export const CtaBtn = ({ text, onClick }) => {
  const styles = {
    btn: "font-bold cursor-pointer text-[12px] bg-primary px-4 py-1 w-fit rounded-[50px] lg:py-[12px] lg:px-[35px] text-bold lg:text-[18px] text-white ",
  };
  return (
    <div onClick={onClick || null} className={styles.btn}>
      {text}
    </div>
  );
};
export const SignUpBtn = ({ text, onClick }) => {
  const styles = {
    btn: "font-bold cursor-pointer bg-white rounded-[10px] py-[8px] lg:px-[35px] px-[24px] text-bold text- text-black ",
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
    btn: "cursor-pointer  flex flex-wrap content-center justify-center bg-black rounded-[4px] py-[10px] text-center w-full font-bold font-[18px] text-white ",
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
    btn: " cursor-pointer bg-primary rounded-[4px] py-[10px] text-center w-full font-semibold font-[18px] text-white ",
  };
  return (
    <div onClick={onClick || null} className={styles.btn}>
      {text}
    </div>
  );
};
export const GoogleBtn = ({ text, onClick, Icon }) => {
  const styles = {
    icon: "inline w-[24px] h-[22px] mr-2",
  };
  return (
    <div
      onClick={onClick || null}
      className={
        " cursor-pointer bg-blue-500 rounded-[4px] py-[10px] text-center w-full font-semibold  text-white "
      }
    >
      {Icon && <Icon className={styles.icon} />}

      {text}
    </div>
  );
};
