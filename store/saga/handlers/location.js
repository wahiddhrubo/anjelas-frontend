import { put, call } from "redux-saga/effects";
import { axiosCredentialsCall } from "../call";

export function* addLocation(action) {
  const { floorNo, appartmentNo, streetAddress, area, phone, locType } = action;
  const data = { floorNo, appartmentNo, streetAddress, area, phone };
  const slug = locType ? locType : "";
  try {
    const fetchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/locations/${slug}`;
    const result = yield call(() =>
      axiosCredentialsCall({
        url: fetchUrl,
        method: "post",
        data,
      })
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
