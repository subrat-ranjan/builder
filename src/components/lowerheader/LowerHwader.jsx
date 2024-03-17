import React from "react";
import "./lowerheader.scss";
import { Link } from "react-router-dom";

const LowerHwader = () => {
  return (
    <div className="container2">
      <div className="buttons">
        <button className="btn"> Tools</button>
        <button className="btn"> AWS Builder</button>
        <button className="btn"> Start Build</button>
        <button className="btn"> Build Supplies</button>
        <button className="btn"> Tooling</button>
        <button className="btn"> BlueHosting</button>
      </div>

      <div className="links">
        <Link className="link" to="#">
          Home
        </Link>
        <img src="images/img_arrowright.svg" alt="arrowright" />
        <Link className="link" to="#">
          Hosting for all
        </Link>
        <img src="images/img_arrowright.svg" alt="arrowright" />
        <Link className="link" to="#">
          Hosting
        </Link>
        <img src="images/img_arrowright.svg" alt="arrowright" />
        <Link className="link" to="#">
          Hosting6
        </Link>
        <img src="images/img_arrowright.svg" alt="arrowright" />
        <Link className="link" to="#">
          Hosting5
        </Link>
      </div>
    </div>
  );
};

export default LowerHwader;
