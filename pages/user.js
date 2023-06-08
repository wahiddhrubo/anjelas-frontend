import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpModal from "../components/login/signUpModal";
import Locations from "../components/user/location";
import Account from "../components/user/info";
import RequestForm from "../components/user/requestForm";
import SideBar from "../components/user/sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [active, setActive] = useState("account");
  const { user } = useSelector((state) => state.user);

  const { asPath } = router;
  const slug = asPath.split("#")[1];

  useEffect(() => {
    if (slug) {
      setActive(slug);
    } else {
      setActive("info");
    }
  }, [slug]);

  console.log(active);

  const [isOpen, setIsopen] = useState();
  const [location, setLocation] = useState();
  return (
    <div>
      {isOpen && <SignUpModal isOpen={isOpen} setIsopen={setIsopen} />}
      {user ? (
        <>
          <div className="flex  relative gap-10 flex-wrap">
            <SideBar active={active} setActive={setActive} />
            <div className="lg:w-[70%] ml-auto min-h-screen flex flex-wrap content-center overflow-visible w-full">
              {active === "info" && <Account user={user} />}
              {active === "locations" && (
                <Locations
                  user={user}
                  location={location}
                  setLocation={setLocation}
                />
              )}

              {active === "request" && <RequestForm />}
            </div>
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-100px)] capitalize flex justify-center flex-wrap content-center font-semibold">
          {" "}
          Not Logged Yet.{" "}
          <span
            className="text-primary mx-1 hover:text-black cursor-pointer "
            onClick={() => setIsopen(true)}
          >
            {" "}
            Login Now
          </span>{" "}
          To View Your Account
        </div>
      )}
    </div>
  );
}
