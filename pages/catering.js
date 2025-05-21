import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/selectors";
import { SEARCHED_PRODUCT } from "../store/saga/actions";
import Image from "next/image";
import { Calendar } from "primereact/calendar";

export default function Catering() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [formSelect, setFormSelect] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());
    const order = formSelect.map((item, value) => {
      return {
        id: item._id,
        name: item.name,
        quantity:
          formValues[`${item.name} Quantity`] +
          (String(item.skus[0].serving).replace(/\d+/g, "") || "pc"),
      };
    });
  };
  useEffect(() => {
    dispatch({ type: SEARCHED_PRODUCT, keyword: "" });
  }, []);

  const { searchItems, searchLoading } = useSelector(getProducts);

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
            placeholder="Select Event Date"
            required
            id="Select Event Date"
            name="Select Event Date"
            className="w-full font-semibold focus:outline-none focus:shadow-none h-12 px-5 placeholder:text-black placeholder:font-semibold border-[2px]  rounded-sm border-primary border-solid "
          />

          <MultiSelect
            options={searchItems}
            filter
            filterBy="name"
            color="#fe7502"
            placeholder="Select Dishes"
            required
            id="Select Dishes"
            name="Select Dishes"
            selectAll={false}
            optionLabel="name"
            display="chip"
            filterTemplate={FiterTemp}
            itemTemplate={SelectItem}
            onChange={(e) => {
              setSelectedItems(e.value);
              setFormSelect(e.value);
            }}
            className="w-full h-12 placeholder:text-black placeholder:font-semibold border-[2px] focus:outline-none rounded-sm border-primary border-solid "
            value={selectedItems}
          />

          {selectedItems?.map((item) => (
            <div className="flex max-w-[650px] w-fit  my-16 flex-col  md:flex-row md:w-full md:my-5 gap-5 content-center">
              <Image
                src={item.featuredImage.url}
                className="rounded-md w-[100px] mx-auto md:mx-0 h-[80px] object-cover"
                width={100}
                height={60}
              />

              <div className="my-auto text-center md:text-left h-fit text-[16px]">
                {item.name}
              </div>
              <div className="h-fit w-32 justify-start my-auto flex content-center gap-3 text-[14px] md:mr-0 mx-auto">
                <input
                  type="number"
                  placeholder="Quantity"
                  id={`${item.name} Quantity`}
                  required
                  name={`${item.name} Quantity`}
                  className="border-2 h-fit placeholder:text-black placeholder:font-semibold border-black w-20 placeholder:text-[12px]  px-2 block"
                />
                <div>
                  {String(item.skus[0].serving).replace(/\d+/g, "") || "pc"}
                </div>
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
  const sku = item.skus[0];

  return (
    <div className="flex  gap-5 p-2 content-center">
      <Image
        src={item.featuredImage.url}
        className="rounded-md w-[100px] h-[70px] object-cover"
        width={80}
        height={40}
      />
      <div className="h-fit  font-semibold my-auto">
        <p className="text-black mb-2">{item.name}</p>
        <div>
          {sku.serving} - {sku.price}
        </div>
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
