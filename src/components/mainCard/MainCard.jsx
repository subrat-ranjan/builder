import React from "react";
import "./maincard.scss";
import Card from "../card/Card";
import Signup from "../Signup/Signup";
import Footer from "../footer/Footer";

const MainCard = () => {
  return (
    <div className="main_cont">
      <div>
        <div className="container1">
          <div className="card1">
            <div className="content1">
              {/* 1stt */}
              <div className="image1">
                <img className="img3 " src="images/img_download1.png" alt="downloadSix" />
                <span className="title">Builder 1</span>
              </div>
              {/* 2nd */}
              <div className="details">
                <div>
                  <p className="spans">
                    <span className="head">1: WixPro 72-Inch Responsive Website Builder </span>- Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                  </p>
                  <span className="heighlights">Main highlights</span>
                  <p className="get">
                    [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization
                    tools, and e-commerce integrations.
                  </p>

                  <select className="showmore">
                    <option value="top">Show more</option>
                  </select>
                </div>

                {/* 3rd */}
                <div className="rating ">
                  <div className="points">
                    <span className="value">9.8</span>
                    <span className="category">Exceptional</span>
                    <img className="img2" src="images/img_image_amber_500.svg" alt="One" />
                  </div>
                  <button className=" btn ">View</button>
                </div>
              </div>
            </div>
            <p className="number ">1</p>
          </div>
        </div>
      </div>
      {/*  */}

      <div>
        <div className="container1">
          <div className="card1">
            <div className="content1">
              {/* 1stt */}
              <div className="image1">
                <img className="img3 " src="images/img_download1.png" alt="downloadSix" />
                <span className="title">Builder 1</span>
              </div>
              {/* 2nd */}
              <div className="details">
                <div>
                  <p className="spans">
                    <span className="head">2: WixPro 72-Inch Responsive Website Builder </span>- Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                  </p>
                  <span className="heighlights">Main highlights</span>
                  <p className="get">
                    [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization
                    tools, and e-commerce integrations.
                  </p>

                  <select className="showmore">
                    <option value="top">Show more</option>
                  </select>
                </div>

                {/* 3rd */}
                <div className="rating ">
                  <div className="points">
                    <span className="value">9.8</span>
                    <span className="category">Exceptional</span>
                    <img className="img2" src="images/img_image_amber_500.svg" alt="One" />
                  </div>
                  <button className=" btn ">View</button>
                </div>
              </div>
            </div>
            <p className="number">2</p>
          </div>
        </div>
      </div>

      <div>
        <div className="container1">
          <div className="card1">
            <div className="content1">
              {/* 1stt */}
              <div className="image1">
                <img className="img3 " src="images/img_download1.png" alt="downloadSix" />
                <span className="title">Builder 1</span>
              </div>
              {/* 2nd */}
              <div className="details">
                <div>
                  <p className="spans">
                    <span className="head">3: WixPro 72-Inch Responsive Website Builder </span>- Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                  </p>
                  <span className="heighlights">Main highlights</span>
                  <p className="get">
                    [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization
                    tools, and e-commerce integrations.
                  </p>

                  <select className="showmore">
                    <option value="top">Show more</option>
                  </select>
                </div>

                {/* 3rd */}
                <div className="rating ">
                  <div className="points">
                    <span className="value">9.8</span>
                    <span className="category">Exceptional</span>
                    <img className="img2" src="images/img_image_amber_500.svg" alt="One" />
                  </div>
                  <button className=" btn ">View</button>
                </div>
              </div>
            </div>
            <p className="number">3</p>
          </div>
        </div>
      </div>

      <div>
        <div className="container1">
          <div className="card1">
            <div className="content1">
              {/* 1stt */}
              <div className="image1">
                <img className="img3 " src="images/img_download1.png" alt="downloadSix" />
                <span className="title">Builder 1</span>
              </div>
              {/* 2nd */}
              <div className="details">
                <div>
                  <p className="spans">
                    <span className="head">4: WixPro 72-Inch Responsive Website Builder </span>- Comprehensive Digital Platform Creation Tool,
                    Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                  </p>
                  <span className="heighlights">Main highlights</span>
                  <p className="get">
                    [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization
                    tools, and e-commerce integrations.
                  </p>

                  <select className="showmore">
                    <option value="top">Show more</option>
                  </select>
                </div>

                {/* 3rd */}
                <div className="rating ">
                  <div className="points">
                    <span className="value">9.8</span>
                    <span className="category">Exceptional</span>
                    <img className="img2" src="images/img_image_amber_500.svg" alt="One" />
                  </div>
                  <button className=" btn ">View</button>
                </div>
              </div>
            </div>
            <p className="number ">4</p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="deals">
        <p>Related deals you might like for</p>
        <Card />
      </div>
      <Signup />
    </div>
  );
};

export default MainCard;
