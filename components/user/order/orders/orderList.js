import { useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function OrderList({
  id,
  location,
  uID,
  created_at,
  status,
  total,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const setQueryFilter = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );
  const formatDate = (dt) => {
    const date = new Date(dt);
    const formatter = Intl.DateTimeFormat("en-us", {
      dateStyle: "long",
    });
    return formatter.format(date);
  };
  const statusColors = {
    confirmed: "#75e83d",
    delivering: "#ffaa00",
    delivered: "#52c41a",
    processing: "#faad14",
  };
  const anim = {
    initial: { opacity: 0, x: "-5%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={anim}
      initial="initial"
      animate="animate"
      onClick={() => setQueryFilter("order", id)}
      className="w-[685px] cursor-pointer my-5 px-10 py-5 border-2 border-[#fe7502d4]  bg-white shadow-lg"
    >
      <div className=" font-semibold ">{`${location.streetAddress}, ${location.area}`}</div>
      <div>
        <table className="w-full mt-5">
          <tbody>
            <tr>
              <td className="py-1 font-semibold">Order Id</td>
              <td className=" py-1 text-right w-fit">{uID}</td>
            </tr>
            <tr>
              <td className="py-1 font-semibold">Date </td>
              <td className=" py-1 text-right w-fit">
                {formatDate(created_at)}
              </td>
            </tr>
            <tr>
              <td className="py-1 font-semibold">Status</td>
              <td className=" py-1 text-right w-fit">
                <div
                  className="w-fit capitalize px-4 py-1 text-white ml-auto rounded-lg "
                  style={{ backgroundColor: statusColors[status] }}
                >
                  {status}
                </div>
              </td>
            </tr>
            <tr className="font-semibold mt-5 text-[20px]">
              <td className="py-1 pt-5 ">Amount Payable</td>
              <td className=" py-1 pt-5 text-right">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </motion.div>
  );
}
