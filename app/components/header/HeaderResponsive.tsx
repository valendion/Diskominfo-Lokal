import React from "react";
import { useMediaQuery } from "~/utils/screen-size";
import HeaderMobile from "./HeaderMobile";
import Header from "./Header";

const HeaderResponsive = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");
  return <div>{isMobileScreen ? <HeaderMobile /> : <Header />}</div>;
};

export default HeaderResponsive;
