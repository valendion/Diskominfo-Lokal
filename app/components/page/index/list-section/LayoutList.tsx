import React from "react";
import TitleList from "./Title";
import RectangleItem from "./RectangleItem";
import { dummyListItems } from "~/utils/const/ListItems";
import RectangleItemMobile from "./RectangleItemMobile";
import { useMediaQuery } from "~/utils/screen-size";

const LayoutList = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1325px)");
  return (
    <div>
      <TitleList />
      <div
        className={`grid gap-10 my-20 ${
          isMobileScreen ? "grid-cols-2" : "grid-cols-4"
        }`}
      >
        {dummyListItems.map((item, index) => (
          <div key={index}>
            {isMobileScreen ? (
              <RectangleItemMobile {...item} />
            ) : (
              <RectangleItem {...item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutList;
