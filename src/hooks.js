import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoursedata } from "./store/geeksSlice";
import localData from "../data.json";

export function useFetchCourseData() {
  const dispatch = useDispatch();
  const courseData = useSelector((store) => store.geeks.courses);

  useEffect(() => {
    if (courseData.length !== 0) return;
    dispatch(setCoursedata(localData));
  }, []);

  return courseData;
}

export function useIsCourseExistInWishlist(id) {
  const wishlistData = useSelector((store) => store.geeks.wishlistCourse);
  const courseIdx = wishlistData.findIndex((data) => data.id == id);
  return courseIdx === -1 ? false : true;
}

export function useIsCourseExistInCart(id) {
  const cartData = useSelector((store) => store.geeks.cartCourses);
  const courseIdx = cartData.findIndex((data) => data.id == id);
  return courseIdx === -1 ? false : true;
}
