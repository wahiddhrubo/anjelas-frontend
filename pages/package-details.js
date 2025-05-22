import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/selectors";
import { SEARCHED_PRODUCT } from "../store/saga/actions";
import Image from "next/image";
import { Calendar } from "primereact/calendar";
import { MdClose, MdOutlineFoodBank } from "react-icons/md";
import { useRouter } from "next/router";

export default function Catering() {
  const route = useRouter();
  const selected_package = route.query;
  const [date, setDate] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [formSelect, setFormSelect] = useState([]);
  useEffect(() => {
    if (selected_package) {
      setSelectedItems([selected_package]);
    }
  }, []);
  const packagesOpts = [
    {
      id: 1,
      name: "student",
      price: "TK 60",
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#student",
    },
    {
      id: 2,
      name: "grown up",
      price: "TK 75",
      featured: true,
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#grown-up",
    },
    {
      id: 3,
      name: "exclusive",
      price: "TK 120",
      fea: ["Student Special Menu", "On Time Delivery", "Healthy & Tasty Food"],
      menuLink: "/menu/#exclusive",
    },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());
  };

  return (
    <div className="absolute overflow-hidden  h-screen  p-0 flex inset-0 z-[100] bg-white  text-2xl font-bold">
      <div className="w-1/2 md:block hidden">
        <Image
          src={"/images/contact-us.jpg"}
          width={750}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5 md:w-1/2 w-full overflow-y-scroll ">
        <form
          onSubmit={submitHandler}
          className=" md:space-y-8 space-y-4 gap-5 justify-center  flex md:block flex-wrap "
        >
          <input
            className="border-2 border-primary w-full p-2 rounded-sm px-5 placeholder:text-black placeholder:font-medium"
            placeholder="Name"
            required
            id="Name"
            name="Name"
          />
          <input
            className="border-2 border-primary w-full p-2 rounded-sm px-5 placeholder:text-black placeholder:font-medium"
            placeholder="Event"
            required
            id="Event"
            name="Event"
          />
          <input
            className="border-2 border-primary w-full p-2 rounded-sm px-5 placeholder:text-black placeholder:font-medium"
            placeholder="Email Address"
            required
            id="Email Address"
            name="Email Address"
          />
          <input
            className="border-2 border-primary w-full p-2 rounded-sm px-5 placeholder:text-black placeholder:font-medium"
            placeholder="Phone Number"
            required
            id="Phone Number"
            name="Phone Number"
          />

          <Calendar
            value={date}
            onChange={(e) => {
              setDate(e.value);
            }}
            minDate={new Date()}
            dateFormat="yy/mm/dd"
            placeholder="Select Start Date"
            required
            id="Select Start Date"
            name="Select Start Date"
            className="w-full font-semibold focus:outline-none focus:shadow-none h-12 px-5 placeholder:text-black placeholder:font-semibold border-[2px]  rounded-sm border-primary border-solid "
          />

          <MultiSelect
            options={packagesOpts}
            filter
            filterBy="name"
            color="#fe7502"
            placeholder="Select Package"
            required
            id="Select Package"
            name="Select Package"
            selectAll={false}
            optionLabel="name"
            display="comma"
            filterTemplate={FiterTemp}
            itemTemplate={SelectItem}
            onChange={(e) => {
              setSelectedItems(e.value);
              setFormSelect(e.value);
            }}
            disabled={selectedItems.length > 0}
            multiple={false}
            className="w-full h-12 placeholder:text-black placeholder:font-semibold border-[2px] focus:outline-none rounded-sm border-primary border-solid "
            value={selectedItems}
          />

          {selectedItems?.map((item) => (
            <div
              key={item.name}
              className="flex max-w-[650px] mr-auto w-full  my-16  md:flex-row md:w-full md:my-5 gap-5 content-center"
            >
              <MdOutlineFoodBank className="text-primary text-[32px] my-auto" />
              <div className="mr-auto capitalize md:text-left h-fit text-[16px]">
                {item.name} Package
                <div className="h-fit  my-auto   text-[14px] md:mr-0 mx-auto">
                  <div>{String(item.price)}</div>
                </div>
              </div>
              <div className="w-fit ml-auto cursor-pointer my-auto">
                <MdClose
                  onClick={() => {
                    setSelectedItems((pack) =>
                      pack.filter((p) => p.name !== item.name)
                    );
                  }}
                  className="text-red-500 text-[24px] ml-auto w-[24px] block my-auto"
                />
              </div>
            </div>
          ))}
          <div className="w-full flex justify-end">
            <input
              type="submit"
              className="bg-white cursor-pointer hover:bg-primary hover:text-white hover:transition-colors duration-150 border-2 border-primary border-solid  px-8 py-2 text-[16px] ml-auto w-fit"
              placeholder="Submit"
              required
              id="Submit"
              name="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const SelectItem = (item) => {
  return (
    <div className="flex  gap-5 p-2 content-center">
      <div className="h-fit  font-semibold my-auto">
        <p className="text-black mb-2 capitalize">{item.name} Package</p>
        <div>{item.price}</div>
      </div>
    </div>
  );
};

const FiterTemp = ({ onFilter }) => {
  return (
    <>
      <input
        className="w-full border-2 border-blue-500 rounded-[2px]"
        onChange={onFilter}
      />
    </>
  );
};
