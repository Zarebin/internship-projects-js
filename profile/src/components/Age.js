import React from "react";
import AgeSelector from "./AgeSelector";
import { ReactComponent as SVG } from "./girl.svg";
import Header from "./Header";
import './style.scss'

function Age(props) {
  var imgSrc = "../images/girl.svg";
  let showImg = props.gender;
  console.log("FROM AGE", showImg);

  (function chooseImg() {
    if (showImg == "woman") {
      imgSrc = "./girl.svg";
      console.log(showImg);
    } else {
      imgSrc = "./boy.svg";
      console.log("hi", showImg);
    }
  })();

  return (
    <div className="container">
      <div className="age">
        <Header />
        <div className="age-pic">
          <img src={imgSrc} className="age-pic" />
        </div>
        <div className="gender-p">
          <p> لطفا سال تولدت رو انتخاب کن</p>{" "}
        </div>
        <AgeSelector />
        <div className="button">
          <button> شروع </button>
          <p>
            <a href="#"> ! بدون وارد کردن سن شروع کن</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Age;
