import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div className="related_deals">
      <div className="card_container">
        <div className="card">
          <img className="img1" src="images/img_download1.png" alt="downloadThree" />
          <div className="options">
            <div className="op2 ">
              <button className="btn1">20% Off</button>
              <button className="btn1 ">Limited time </button>
            </div>
            <text className="text1">Webbuilder 1</text>
            <text className="heading">Computer Modern clasic with wix support</text>
            <div className="price">
              <span className="price_1 text-blue_gray-600_01 text-xl" size="txtInterRegular20Bluegray60001">
                $39.96
              </span>
              <span className=" price_2 ml-[13px] mt-2 text-blue_gray-300 text-sm" size="txtInterRegular14Bluegray300">
                $49.96
              </span>
              <span className="offer ml-3 mt-[9px] text-[13px] text-red-400" size="txtInterRegular13Red400">
                (20% Off)
              </span>
            </div>
            <button className="btn">View Deal</button>
          </div>
        </div>
      </div>

      {/* //card2 */}

      <div className="card_container">
        <div className="card">
          <img className="img1" src="images/img_download1.png" alt="downloadThree" />
          <div className="options">
            <div className="op2 ">
              <button className="btn1">20% Off</button>
              <button className="btn1 ">Limited time </button>
            </div>
            <text className="text1">Webbuilder 1</text>
            <text className="heading">Computer Modern clasic with wix support</text>
            <div className="price">
              <span className="price_1 text-blue_gray-600_01 text-xl" size="txtInterRegular20Bluegray60001">
                $39.96
              </span>
              <span className=" price_2 ml-[13px] mt-2 text-blue_gray-300 text-sm" size="txtInterRegular14Bluegray300">
                $49.96
              </span>
              <span className="offer ml-3 mt-[9px] text-[13px] text-red-400" size="txtInterRegular13Red400">
                (20% Off)
              </span>
            </div>
            <button className="btn">View Deal</button>
          </div>
        </div>
      </div>

      {/* //card3 */}

      <div className="card_container">
        <div className="card">
          <img className="img1" src="images/img_download1.png" alt="downloadThree" />
          <div className="options">
            <div className="op2 ">
              <button className="btn1">20% Off</button>
              <button className="btn1 ">Limited time </button>
            </div>
            <text className="text1">Webbuilder 1</text>
            <text className="heading">Computer Modern clasic with wix support</text>
            <div className="price">
              <span className="price_1 text-blue_gray-600_01 text-xl" size="txtInterRegular20Bluegray60001">
                $39.96
              </span>
              <span className=" price_2 ml-[13px] mt-2 text-blue_gray-300 text-sm" size="txtInterRegular14Bluegray300">
                $49.96
              </span>
              <span className="offer ml-3 mt-[9px] text-[13px] text-red-400" size="txtInterRegular13Red400">
                (20% Off)
              </span>
            </div>
            <button className="btn">View Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
