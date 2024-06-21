import React from "react";
import Header from "./Header";
import GirlImg from "./girl.svg";
import BoyImg from "./boy.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import AgeSelector from "./AgeSelector";

function Age(props) {
  const gender = props.selectedGender;
  console.log(gender, "from age");
  let imgSrc = "";
  gender === "man" ? (imgSrc = BoyImg) : (imgSrc = GirlImg);
  return (
    <div className="mycontainer">
      <div className="mycontainer__header">
        <Header />
      </div>
      <div className="mycontainer__content">
        <div className="mycontainer__content__agePic">
          <img src={imgSrc} />
        </div>
        <p>لطفا سال تولدت رو انتخاب کن</p>
        <div className="mycontainer__content__ageSelector">
          <AgeSelector />
        </div>
      </div>
      <div className="mycontainer__footer">
        <button>شروع</button>
        <a href="#">
          <p>! بدون وارد کردن سن شروع کن</p>
        </a>
      </div>
    </div>
  );
}

export default Age;
