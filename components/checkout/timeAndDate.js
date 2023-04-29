import React from "react";
import { times } from "../../lib/constants";
export default function TimeAndDate({ time, setDate, setTime }) {
  const changeTime = (tm) => {
    if (time === tm) {
      setTime(null);
    } else {
      setTime(tm);
    }
  };
  const getDate = (t) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const d = new Date(new Date().getTime() + t * 24 * 60 * 60 * 1000);

    return d.toLocaleDateString("en-us", options);
  };

  const changeDate = (dt) => {
    const d = new Date(new Date(dt).getTime() + 24 * 60 * 60 * 1000);
    setDate(d.toISOString());
  };
  return (
    <div className="w-[70%]">
      <div className="w-[80%] leading-relaxed text-[1b1b1b] font-semibold text-[32px] mt-5">
        Choose Your Preferred Date &amp; Time
      </div>
      <select
        name=""
        id=""
        onChange={(e) => changeDate(e.target.value)}
        className="w-[80%] focus-visible:outline-none mt-10 border-2 rounded-md border-primary py-2 px-4"
      >
        <option value="" disabled selected>
          Select Date...
        </option>

        {[...Array(5)].map((d, index) => (
          <option>{getDate(index + 1)}</option>
        ))}
      </select>

      <div className="my-10 flex flex-wrap gap-5">
        {times.map((t) => (
          <div
            className="w-[145px] transition-all duration-300 cursor-pointer hover:scale-110 rounded-md border-2 border-primary p-2 text-center text-[16px] font-semibold "
            key={t}
            onClick={() => changeTime(t)}
            style={{
              background: t === time ? "#FE7502" : "#fff",
              color: t === time ? "#fff" : "#000",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
