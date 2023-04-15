import "../styles/globals.css";
import Navbar from "../components/layout/navBar.js";

function MyApp({ Component, pageProps }) {
  const navMenu = ["Packages", "Offers", "Shop", "Catering", "About Us"];
  return (
    <div className="px-[100px] text-body-md static">
      <Navbar menu={navMenu} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
