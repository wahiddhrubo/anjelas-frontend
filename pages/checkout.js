import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div>
      {isAuthenticated ? (
        "logged in"
      ) : (
        <div className="h-[calc(100vh-100px)] flex justify-center flex-wrap content-center font-semibold">
          {" "}
          Not Logged in
        </div>
      )}
    </div>
  );
}
