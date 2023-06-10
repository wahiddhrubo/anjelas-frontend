import { useState } from "react";
import { deliveryFee, taxRate } from "../lib/constants";
import { useDispatch, useSelector } from "react-redux";
import SignUpModal from "../components/login/signUpModal";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ADD_LOCATION } from "../store/saga/actions";
import Location from "../components/checkout/location";
import AddLocation from "../components/checkout/addLocation";
import TimeAndDate from "../components/checkout/timeAndDate";
import CartTotal from "../components/ui/cartTotal";
import { BiMoney } from "react-icons/bi";
import Image from "next/image";
import { checkEmptyField } from "../lib/functions";

export default function Checkout() {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.cart);

  const paymentMethods = [
    {
      logo: "/images/bkash.svg",
      logoBw: "/images/bkash-bw.png",
      method: "bkash",
    },
    {
      logo: "/images/rocket.png",
      logoBw: "/images/rocket-bw.png",
      method: "rocket",
    },
    {
      logo: "/images/nagad.png",
      logoBw: "/images/nagad-bw.png",
      method: "nagad",
    },
    {
      icon: <BiMoney className="text-[50px] mx-auto text-green-700" />,
      iconBw: <BiMoney className="text-[50px] mx-auto text-gray-400" />,
      method: "cash-on-delivery",
      name: "COD",
    },
  ];

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [newLocation, setNewLocation] = useState(false);
  const [floorNo, setFloor] = useState();
  const [apartmentNo, setAppartment] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [area, setArea] = useState();
  const [phone, setPhone] = useState();
  const [locType, setLocType] = useState();
  const [time, setTime] = useState();
  const [deliveryDate, setDeliveryDate] = useState();
  const [isOpen, setIsopen] = useState();
  const [location, setLocation] = useState();

  const orderHandler = (paymentMethod) => {
    console.log({
      location,
      deliveryCharge: deliveryFee,
      tax: taxRate * price,
      subTotal: price,
      total: price + taxRate * price + deliveryFee,
      paymentMethod,
      deliveryDate,
      deliveryTime: time,
    });
  };

  const locationHandler = () => {
    dispatch({
      type: ADD_LOCATION,
      floorNo,
      apartmentNo,
      streetAddress,
      area,
      phone,
      locType,
    });
  };

  const empty = checkEmptyField({
    location,
    deliveryCharge: deliveryFee,
    tax: taxRate * price,
    subTotal: price,
    total: price + taxRate * price + deliveryFee,
    deliveryDate,
    deliveryTime: time,
  });
  return (
    <div>
      {isOpen && <SignUpModal isOpen={isOpen} setIsopen={setIsopen} />}
      {user ? (
        <div className="mb-28">
          <table className="text-[14px] lg:text-body-md w-1/2 mt-20">
            <tr>
              <td className="font-semibold p-2 capitalize">Name:</td>
              <td className="font-semibold p-2 capitalize">{user.username}</td>
            </tr>
            <tr>
              <td className="font-semibold p-2 capitalize">Email:</td>
              <td className="font-semibold p-2 ">{user.email}</td>
            </tr>
            {user.phone && (
              <tr>
                <td className="font-semibold p-2 capitalize">Phone:</td>
                <td className="font-semibold p-2 capitalize">{user.phone}</td>
              </tr>
            )}
          </table>
          <div className="flex  gap-10 flex-wrap">
            <div className="lg:w-[65%] w-full">
              <div className="flex flex-wrap lg:justify-start justify-center w-full gap-x-10 my-5 gap-y-5 ">
                <div className="w-full font-semibold text-[32px] mt-5">
                  Your Locations
                </div>

                {user.homeLoc && (
                  <Location
                    type="homeLoc"
                    locText={`${user.homeLoc.streetAddress}`}
                    location={location}
                    setLocation={setLocation}
                    id={user.homeLoc._id}
                    Icon={AiOutlineHome}
                  />
                )}

                {user.workLoc && (
                  <Location
                    type="workLoc"
                    locText={`${user.workLoc.streetAddress}`}
                    location={location}
                    setLocation={setLocation}
                    id={user.workLoc._id}
                    Icon={HiOutlineOfficeBuilding}
                  />
                )}

                {user.locations?.map((l) => (
                  <Location
                    type=""
                    locText={`${l.streetAddress}`}
                    location={location}
                    setLocation={setLocation}
                    id={l._id}
                    Icon={HiOutlineLocationMarker}
                  />
                ))}
              </div>

              <AddLocation
                setNewLocation={setNewLocation}
                setFloor={setFloor}
                setAppartment={setAppartment}
                setStreetAddress={setStreetAddress}
                setArea={setArea}
                setPhone={setPhone}
                locType={locType}
                setLocType={setLocType}
                newLocation={newLocation}
                locationHandler={locationHandler}
              />

              <TimeAndDate
                time={time}
                setDate={setDeliveryDate}
                setTime={setTime}
              />
            </div>
            <div className="lg:w-1/4 w-3/4">
              <CartTotal />
              <div className="flex justify-center content-center flex-wrap gap-4">
                <div className=" text-[24px] font-semibold mt-10 mb-5 w-full">
                  Pay With
                </div>
                {paymentMethods.map((p) => (
                  <div
                    className="w-[125px] cursor-pointer text-center capitalize"
                    onClick={() => orderHandler(p.method)}
                  >
                    {p.logo ? (
                      <Image
                        src={empty ? p.logoBw : p.logo}
                        width={125}
                        height={125}
                      />
                    ) : empty ? (
                      p.iconBw
                    ) : (
                      p.icon
                    )}
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          To place an order
        </div>
      )}
    </div>
  );
}
