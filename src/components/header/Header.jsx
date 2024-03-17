import React from "react";
import "./header.scss";
import LowerHwader from "../lowerheader/LowerHwader";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Best Website builders in the US</h1>
        <div className="rectangle"></div>
        <div className="lower">
          <div className="content1">
            <img src="images/img_image_blue_gray_600.svg" alt="" />
            <p>Last Updated - February 22,2020</p>
          </div>
          <div className="content1">
            <img src="images/img_image_blue_gray_600_20x20.svg" alt="" />
            <p> Advertising Disclosure</p>
          </div>
          <div className="options">
            <select>
              <option value="top">Top Relevant</option>
            </select>
          </div>
        </div>
        <div className="rectangle"></div>
      </div>
      <div className="lw">
        <LowerHwader />
      </div>
    </>
  );
};

export default Header;
